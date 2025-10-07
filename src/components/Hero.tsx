import { MessageCircle } from "lucide-react";
import { Button } from "./ui/button";

const Hero = () => {
  const whatsappLink = `https://wa.me/918004174182?text=${encodeURIComponent(
    "Hi Homlee Ayodhya! I'm interested in booking. Please contact me."
  )}`;

  const scrollToRooms = () => {
    const element = document.querySelector("#rooms");
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="hero" className="relative min-h-[85vh] flex items-center justify-center px-4 py-12 md:py-20">
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-secondary via-background to-muted"></div>
      
      <div className="container mx-auto text-center space-y-8 max-w-4xl">
        <div className="space-y-4">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight">
            Comfortable Stays in the Heart of Ayodhya
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            4 clean, cozy rooms near Ram Janmabhoomi & Hanuman Garhi
          </p>
          <p className="text-base md:text-lg font-medium text-primary">
            Peaceful stays near Ram Janmabhoomi
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button
            asChild
            size="lg"
            className="bg-hero-gradient text-lg px-8 py-6 h-auto shadow-medium hover:shadow-large transition-all"
          >
            <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
              <MessageCircle className="mr-2 h-5 w-5" />
              Chat on WhatsApp
            </a>
          </Button>
          <Button
            size="lg"
            variant="outline"
            onClick={scrollToRooms}
            className="text-lg px-8 py-6 h-auto"
          >
            View Rooms
          </Button>
        </div>

        {/* Hero Image Placeholder */}
        <div className="mt-12 rounded-2xl overflow-hidden shadow-large bg-muted aspect-video max-w-3xl mx-auto">
          <div className="w-full h-full flex items-center justify-center text-muted-foreground">
            [Hero Image: Ayodhya property exterior or Ram Janmabhoomi view]
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
