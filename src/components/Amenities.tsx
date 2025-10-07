import { Check } from "lucide-react";

const amenities = [
  "Clean linens & towels",
  "Daily housekeeping",
  "RO drinking water",
  "Parking available",
  "Power backup/Inverter",
  "On-call local transport help",
  "Nearby eateries & restaurants",
  "Early check-in/late check-out*",
  "24/7 hot water",
  "Fast Wi-Fi",
  "Air conditioning",
  "LED TVs in rooms",
];

const Amenities = () => {
  return (
    <section id="amenities" className="py-16 md:py-24 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-12 space-y-4">
          <h2 className="text-3xl md:text-5xl font-bold">Amenities</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Everything you need for a comfortable and hassle-free stay
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-5xl mx-auto">
          {amenities.map((amenity, index) => (
            <div
              key={index}
              className="flex items-start gap-3 p-4 rounded-lg bg-card shadow-soft hover:shadow-medium transition-shadow"
            >
              <div className="flex-shrink-0 mt-0.5">
                <Check className="h-5 w-5 text-primary" />
              </div>
              <span className="text-sm md:text-base">{amenity}</span>
            </div>
          ))}
        </div>

        <p className="text-center text-sm text-muted-foreground mt-8">
          *Subject to availability
        </p>
      </div>
    </section>
  );
};

export default Amenities;
