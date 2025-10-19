import { MessageCircle } from "lucide-react";
import WhatsAppDateDialog from "@/components/WhatsAppDateDialog";

const StickyWhatsAppButton = () => {
  return (
    <div className="fixed bottom-6 right-6 z-50 md:hidden">
      <WhatsAppDateDialog
        trigger={
          <button
            aria-label="Chat on WhatsApp"
            className="inline-flex items-center justify-center rounded-full bg-green-500 hover:bg-green-600 text-white shadow-lg h-14 w-14"
          >
            <MessageCircle className="h-6 w-6" />
          </button>
        }
      />
    </div>
  );
};

export default StickyWhatsAppButton;
