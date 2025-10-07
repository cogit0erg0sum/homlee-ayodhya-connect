import RoomCard from "./RoomCard";

const rooms = [
  {
    name: "Deluxe Double",
    features: ["AC", "Attached bathroom", "Fast Wi-Fi", "LED TV", "Hot water geyser"],
    maxOccupancy: 2,
    priceFrom: "From ₹1,500/night",
  },
  {
    name: "Family Room",
    features: ["AC", "Attached bathroom", "Fast Wi-Fi", "LED TV", "Extra bed available"],
    maxOccupancy: 4,
    priceFrom: "From ₹2,200/night",
  },
  {
    name: "Standard Twin",
    features: ["AC", "Attached bathroom", "Wi-Fi", "TV", "Hot water"],
    maxOccupancy: 2,
    priceFrom: "From ₹1,200/night",
  },
  {
    name: "Budget Double",
    features: ["Fan/AC optional", "Attached bathroom", "Wi-Fi", "Hot water"],
    maxOccupancy: 2,
    priceFrom: "From ₹900/night",
  },
];

const Rooms = () => {
  return (
    <section id="rooms" className="py-16 md:py-24 px-4 bg-secondary/30">
      <div className="container mx-auto">
        <div className="text-center mb-12 space-y-4">
          <h2 className="text-3xl md:text-5xl font-bold">Our Rooms</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Choose from our 4 comfortable rooms, each designed for your peaceful stay in Ayodhya
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {rooms.map((room) => (
            <RoomCard key={room.name} {...room} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Rooms;
