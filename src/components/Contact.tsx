import { useState } from "react";
import { MessageCircle, Phone, Mail } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    dates: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Thanks for reaching out!",
      description: "For faster response, please message us on WhatsApp.",
    });
    setFormData({ name: "", phone: "", dates: "", message: "" });
  };

  const whatsappLink = `https://wa.me/918004174182?text=${encodeURIComponent(
    "Hi Homlee Ayodhya! I'm interested in booking. Please contact me."
  )}`;

  return (
    <section id="contact" className="py-16 md:py-24 px-4 bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <div className="text-center mb-12 space-y-4">
          <h2 className="text-3xl md:text-5xl font-bold">Get in Touch</h2>
          <p className="text-lg text-muted-foreground">
            We're here to help make your Ayodhya visit memorable
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Contact Info */}
          <div className="space-y-6">
            <Button
              asChild
              size="lg"
              className="w-full bg-hero-gradient text-lg py-6 h-auto"
            >
              <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                <MessageCircle className="mr-2 h-5 w-5" />
                Chat on WhatsApp
              </a>
            </Button>

            <div className="space-y-4">
              <a
                href="tel:+918004174182"
                className="flex items-center gap-3 p-4 rounded-lg bg-card shadow-soft hover:shadow-medium transition-shadow"
              >
                <Phone className="h-5 w-5 text-primary" />
                <div>
                  <p className="text-sm text-muted-foreground">Call us</p>
                  <p className="font-medium">+91 8004174182</p>
                </div>
              </a>

              <a
                href="mailto:info@homleeayodhya.com"
                className="flex items-center gap-3 p-4 rounded-lg bg-card shadow-soft hover:shadow-medium transition-shadow"
              >
                <Mail className="h-5 w-5 text-primary" />
                <div>
                  <p className="text-sm text-muted-foreground">Email us</p>
                  <p className="font-medium">info@homleeayodhya.com</p>
                </div>
              </a>
            </div>

            <div className="bg-primary/10 p-4 rounded-lg">
              <p className="text-sm text-center">
                💬 <strong>Quick Tip:</strong> WhatsApp is the fastest way to get a response!
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <form onSubmit={handleSubmit} className="space-y-4 bg-card p-6 rounded-xl shadow-soft">
            <h3 className="font-semibold text-lg mb-4">Send us a message</h3>
            
            <div className="space-y-2">
              <label htmlFor="name" className="text-sm font-medium">
                Name *
              </label>
              <Input
                id="name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                required
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="phone" className="text-sm font-medium">
                Phone Number *
              </label>
              <Input
                id="phone"
                type="tel"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                required
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="dates" className="text-sm font-medium">
                Check-in & Check-out Dates
              </label>
              <Input
                id="dates"
                placeholder="e.g., 15 Jan - 17 Jan"
                value={formData.dates}
                onChange={(e) => setFormData({ ...formData, dates: e.target.value })}
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="message" className="text-sm font-medium">
                Message
              </label>
              <Textarea
                id="message"
                rows={4}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              />
            </div>

            <Button type="submit" className="w-full">
              Send Message
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
