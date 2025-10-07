import { MessageCircle, Users } from "lucide-react";
import { Button } from "./ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "./ui/card";

interface RoomCardProps {
  name: string;
  features: string[];
  maxOccupancy: number;
  priceFrom: string;
  image: string;
}

const RoomCard = ({ name, features, maxOccupancy, priceFrom, image }: RoomCardProps) => {
  const whatsappLink = `https://wa.me/918004174182?text=${encodeURIComponent(
    `Hi! I'd like to book the ${name} on [dates].`
  )}`;

  return (
    <Card className="overflow-hidden hover:shadow-large transition-shadow">
      {/* Room Image */}
      <div className="aspect-video overflow-hidden">
        <img 
          src={image} 
          alt={`${name} - Homlee Ayodhya`}
          className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
          loading="lazy"
        />
      </div>

      <CardHeader>
        <CardTitle className="text-2xl">{name}</CardTitle>
        <div className="flex items-center gap-2 text-muted-foreground">
          <Users className="h-4 w-4" />
          <span className="text-sm">Max {maxOccupancy} guests</span>
        </div>
      </CardHeader>

      <CardContent className="space-y-4">
        <ul className="space-y-2">
          {features.map((feature, index) => (
            <li key={index} className="flex items-center gap-2 text-sm">
              <div className="h-1.5 w-1.5 rounded-full bg-primary"></div>
              {feature}
            </li>
          ))}
        </ul>

        <div className="pt-2 border-t border-border">
          <p className="text-xl font-semibold text-primary">{priceFrom}</p>
          <p className="text-sm text-muted-foreground">per night</p>
        </div>
      </CardContent>

      <CardFooter>
        <Button asChild className="w-full bg-hero-gradient">
          <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
            <MessageCircle className="mr-2 h-4 w-4" />
            Enquire on WhatsApp
          </a>
        </Button>
      </CardFooter>
    </Card>
  );
};

export default RoomCard;
