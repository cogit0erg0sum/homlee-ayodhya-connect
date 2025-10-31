import { MessageCircle } from "lucide-react";
import { Button } from "./ui/button";
import heroImage from "@/assets/room-1.jpg";
import WhatsAppDateDialog from "@/components/WhatsAppDateDialog";

const Hero = () => {
  const scrollToRooms = () => {
    const element = document.querySelector("#rooms");
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      className="relative min-h-[85vh] flex items-center justify-center px-4 py-12 md:py-20"
    >
      <div className="container mx-auto max-w-5xl text-center">
        <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">
           Stays in Ayodhya — Budget Rooms near Ram Mandir with Parking, AC & Wi-Fi.
        </h1>

        <p className="mt-4 text-lg text-muted-foreground">
          AC Rooms • Wi-Fi • Parking • Near Temple & Ghats • Chat to Book Instantly
        </p>

        <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
          <WhatsAppDateDialog
            trigger={
              <Button size="lg" className="text-lg px-8 py-6 h-auto bg-hero-gradient">
                <MessageCircle className="mr-2 h-5 w-5" />
                Chat on WhatsApp
              </Button>
            }
          />

          <Button
            size="lg"
            variant="outline"
            onClick={scrollToRooms}
            className="text-lg px-8 py-6 h-auto"
          >
            View Rooms
          </Button>
        </div>

        <div className="mt-12 rounded-2xl overflow-hidden shadow-large max-w-3xl mx-auto">
          <img
            src={heroImage}
            alt="Homlee Ayodhya - Comfortable room interior with modern amenities in Ayodhya"
            className="w-full h-full object-cover aspect-video"
            loading="eager"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
