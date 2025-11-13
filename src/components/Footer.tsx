import { MessageCircle } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { PHONE_NUMBER } from "@/lib/constants";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const location = useLocation();

  const scrollToSection = (href: string) => {
    if (location.pathname !== "/") {
      window.location.href = "/" + href;
    } else {
      const element = document.querySelector(href);
      element?.scrollIntoView({ behavior: "smooth" });
    }
  };

  const whatsappLink = `https://wa.me/${PHONE_NUMBER}?text=Hi!%20I%20want%20to%20book%20Homlee%20Ayodhya`;

  return (
    <footer className="bg-foreground text-background py-12 px-4">
      <div className="container mx-auto max-w-5xl">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="font-bold text-xl mb-4">Homlee Ayodhya</h3>
            <p className="text-sm opacity-80">
              Peaceful stays near Ram Janmabhoomi
            </p>
            <p className="text-sm opacity-80 mt-2">
              Ayodhya, Uttar Pradesh
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <div className="space-y-2 text-sm">
              <Link
                to="/"
                className="block opacity-80 hover:opacity-100 transition-opacity"
              >
                Home
              </Link>
              <button
                onClick={() => scrollToSection("#rooms")}
                className="block opacity-80 hover:opacity-100 transition-opacity text-left"
              >
                Rooms
              </button>
              <button
                onClick={() => scrollToSection("#itinerary")}
                className="block opacity-80 hover:opacity-100 transition-opacity text-left"
              >
                Itinerary Planner
              </button>
              <Link
                to="/blog"
                className="block opacity-80 hover:opacity-100 transition-opacity"
              >
                Blog
              </Link>
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
              <a href={`tel:+${PHONE_NUMBER}`} className="block hover:opacity-100 transition-opacity">
                +91 8005175402
              </a>
              <a href="mailto:homleeayodhya1@gmail.com" className="block hover:opacity-100 transition-opacity">
                homleeayodhya1@gmail.com
              </a>
              <a 
                href="https://www.homleeayodhya.info" 
                target="_blank" 
                rel="noopener noreferrer"
                className="block hover:opacity-100 transition-opacity"
              >
                www.homleeayodhya.info
              </a>
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
