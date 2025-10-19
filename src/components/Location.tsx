import { MapPin } from "lucide-react";
import { useEffect, useState } from "react";
import { HOMLEE_COORDS, HOMLEE_MAP_LINK } from "@/lib/constants";

const distances = [
  { place: "Ram Janmabhoomi", distance: "2 km" },
  { place: "Hanuman Garhi", distance: "1.5 km" },
  { place: "Ayodhya Dham Junction", distance: "3 km" },
  { place: "Saryu Ghat", distance: "2.5 km" },
];

function haversineDistance(lat1: number, lon1: number, lat2: number, lon2: number) {
  // returns distance in kilometers
  const toRad = (v: number) => (v * Math.PI) / 180;
  const R = 6371; // km
  const dLat = toRad(lat2 - lat1);
  const dLon = toRad(lon2 - lon1);
  const a = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(toRad(lat1)) * Math.cos(toRad(lat2)) *
    Math.sin(dLon / 2) * Math.sin(dLon / 2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  return R * c;
}

const Location = () => {
  const [userCoords, setUserCoords] = useState<{ lat: number; lng: number } | null>(null);
  const [userDistance, setUserDistance] = useState<number | null>(null);
  const [geoError, setGeoError] = useState<string | null>(null);

  useEffect(() => {
    if (!navigator.geolocation) {
      setGeoError("Geolocation not supported by this browser.");
      return;
    }
    const id = navigator.geolocation.getCurrentPosition(
      (pos) => {
        const lat = pos.coords.latitude;
        const lng = pos.coords.longitude;
        setUserCoords({ lat, lng });
        const dist = haversineDistance(lat, lng, HOMLEE_COORDS.lat, HOMLEE_COORDS.lng);
        setUserDistance(dist);
      },
      (err) => {
        setGeoError(err.message);
      },
      { maximumAge: 1000 * 60 * 5, timeout: 10000 }
    );
    return () => {
      // no-op (getCurrentPosition doesn't return an id for clearing)
    };
  }, []);

  const openGoogleMaps = () => {
    const dest = `${HOMLEE_COORDS.lat},${HOMLEE_COORDS.lng}`;
    // If user coords available, open directions from user to destination
    if (userCoords) {
      const origin = `${userCoords.lat},${userCoords.lng}`;
      window.open(`https://www.google.com/maps/dir/?api=1&origin=${origin}&destination=${dest}&travelmode=driving`, "_blank");
      return;
    }

    // If we have a short maps link from the user, open that. It points to the place and may include a nicer place page.
    if (HOMLEE_MAP_LINK) {
      window.open(HOMLEE_MAP_LINK, "_blank");
      return;
    }

    // Fallback: open the lat,lng search
    window.open(`https://www.google.com/maps/search/?api=1&query=${dest}`, "_blank");
  };

  return (
    <section id="location" className="py-16 md:py-24 px-4 bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <div className="text-center mb-12 space-y-4">
          <h2 className="text-3xl md:text-5xl font-bold">Our Location</h2>
          <p className="text-lg text-muted-foreground">Conveniently located near all major temples and ghats</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Map Placeholder / Embed */}
          <div className="aspect-square md:aspect-auto rounded-2xl overflow-hidden shadow-large bg-muted">
            <iframe
              title="Homlee Ayodhya Map"
              src={`https://www.google.com/maps?q=${HOMLEE_COORDS.lat},${HOMLEE_COORDS.lng}&z=15&output=embed`}
              className="w-full h-full border-0"
              loading="lazy"
            />
          </div>

          {/* Address & Distances */}
          <div className="space-y-6">
            <div className="bg-card p-6 rounded-xl shadow-soft">
              <div className="flex items-start gap-3 mb-4">
                <MapPin className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-lg mb-2">Address</h3>
                  <p className="text-muted-foreground">
                    Homlee Ayodhya
                    <br />
                    Near Mamta Lawns
                    <br />
                    Ayodhya, Uttar Pradesh
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-3 mt-4">
                <button onClick={openGoogleMaps} className="btn btn-primary">Open in Google Maps</button>
                {userDistance !== null && (
                  <div className="text-sm text-muted-foreground">Approx. {userDistance.toFixed(1)} km from your location</div>
                )}
                {geoError && <div className="text-sm text-muted-foreground">{geoError}</div>}
              </div>
            </div>

            <div className="bg-card p-6 rounded-xl shadow-soft">
              <h3 className="font-semibold text-lg mb-4">Distance to Key Attractions</h3>
              <div className="space-y-3">
                {distances.map((item, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between py-2 border-b border-border last:border-0"
                  >
                    <span className="text-sm">{item.place}</span>
                    <span className="text-sm font-medium text-primary">~{item.distance}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Location;
