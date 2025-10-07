import { MapPin, Wifi, Users, Clock } from "lucide-react";

const highlights = [
  {
    icon: MapPin,
    title: "Prime location near key temples",
    description: "Walking distance to Ram Janmabhoomi",
  },
  {
    icon: Wifi,
    title: "AC rooms, 24/7 hot water, fast Wi-Fi",
    description: "All modern amenities included",
  },
  {
    icon: Users,
    title: "Family-friendly",
    description: "Early check-in on request",
  },
  {
    icon: Clock,
    title: "Free assistance",
    description: "Local travel & darshan tips",
  },
];

const Highlights = () => {
  return (
    <section className="py-12 md:py-16 px-4">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {highlights.map((highlight, index) => {
            const Icon = highlight.icon;
            return (
              <div
                key={index}
                className="flex flex-col items-center text-center p-6 rounded-xl bg-card shadow-soft hover:shadow-medium transition-shadow"
              >
                <div className="mb-4 p-3 rounded-full bg-primary/10">
                  <Icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{highlight.title}</h3>
                <p className="text-sm text-muted-foreground">{highlight.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Highlights;
