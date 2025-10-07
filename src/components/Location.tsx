import { MapPin } from "lucide-react";

const distances = [
  { place: "Ram Janmabhoomi", distance: "2 km" },
  { place: "Hanuman Garhi", distance: "1.5 km" },
  { place: "Ayodhya Dham Junction", distance: "3 km" },
  { place: "Saryu Ghat", distance: "2.5 km" },
];

const Location = () => {
  return (
    <section id="location" className="py-16 md:py-24 px-4 bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <div className="text-center mb-12 space-y-4">
          <h2 className="text-3xl md:text-5xl font-bold">Our Location</h2>
          <p className="text-lg text-muted-foreground">
            Conveniently located near all major temples and ghats
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Map Placeholder */}
          <div className="aspect-square md:aspect-auto rounded-2xl overflow-hidden shadow-large bg-muted">
            <div className="w-full h-full flex items-center justify-center text-muted-foreground">
              [Google Maps Embed]
              <br />
              Mamta Lawns, Ayodhya
            </div>
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
                    <span className="text-sm font-medium text-primary">
                      ~{item.distance}
                    </span>
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
