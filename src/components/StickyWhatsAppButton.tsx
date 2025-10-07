import { MessageCircle } from "lucide-react";
import { Button } from "./ui/button";

interface StickyWhatsAppButtonProps {
  phoneNumber: string;
  message: string;
}

const StickyWhatsAppButton = ({ phoneNumber, message }: StickyWhatsAppButtonProps) => {
  const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <div className="fixed bottom-6 right-6 z-50 md:hidden">
      <Button
        asChild
        size="lg"
        className="h-14 w-14 rounded-full bg-hero-gradient shadow-large hover:scale-110 transition-all"
      >
        <a
          href={whatsappLink}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Chat on WhatsApp"
        >
          <MessageCircle className="h-6 w-6" />
        </a>
      </Button>
    </div>
  );
};

export default StickyWhatsAppButton;
