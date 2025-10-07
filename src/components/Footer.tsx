import { MessageCircle } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  const whatsappLink = `https://wa.me/918004174182?text=${encodeURIComponent(
    "Hi Homlee Ayodhya! I'm interested in booking. Please contact me."
  )}`;

  return (
    <footer className="bg-foreground text-background py-12 px-4">
      <div className="container mx-auto max-w-5xl">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="font-bold text-xl mb-4">Homlee Ayodhya</h3>
            <p className="text-sm opacity-80">
              Peaceful stays near Ram Janmabhoomi
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <div className="space-y-2 text-sm">
              <button
                onClick={() => scrollToSection("#rooms")}
                className="block opacity-80 hover:opacity-100 transition-opacity"
              >
                Rooms
              </button>
              <button
                onClick={() => scrollToSection("#itinerary")}
                className="block opacity-80 hover:opacity-100 transition-opacity"
              >
                Itinerary Planner
              </button>
              <button
                onClick={() => scrollToSection("#location")}
                className="block opacity-80 hover:opacity-100 transition-opacity"
              >
                Location
              </button>
              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 opacity-80 hover:opacity-100 transition-opacity"
              >
                <MessageCircle className="h-4 w-4" />
                WhatsApp
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <div className="space-y-2 text-sm opacity-80">
              <p>+91 8004174182</p>
              <p>info@homleeayodhya.com</p>
              <p>Ayodhya, Uttar Pradesh</p>
            </div>
          </div>
        </div>

        <div className="border-t border-background/20 pt-8 text-center text-sm opacity-60">
          <p>© {currentYear} Homlee Ayodhya. All rights reserved.</p>
          <div className="mt-2 space-x-4">
            <button className="hover:opacity-80">House Rules</button>
            <span>•</span>
            <button className="hover:opacity-80">Cancellation Policy</button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
