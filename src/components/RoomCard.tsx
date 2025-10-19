import { MessageCircle, Users } from "lucide-react";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "./ui/card";
import WhatsAppDateDialog from "@/components/WhatsAppDateDialog";

interface RoomCardProps {
  name: string;
  features: string[];
  maxOccupancy: number;
  priceFrom: string;
  image: string;
}

const RoomCard = ({ name, features, maxOccupancy, priceFrom, image }: RoomCardProps) => {
  return (
    <Card className="overflow-hidden">
      <img
        src={image}
        alt={name}
        className="w-full h-56 object-cover"
        loading="lazy"
      />

      <CardHeader>
        <CardTitle className="flex items-center justify-between">
          <span>{name}</span>
          <span className="text-sm text-muted-foreground flex items-center gap-1">
            <Users className="h-4 w-4" /> {maxOccupancy}
          </span>
        </CardTitle>
      </CardHeader>

      <CardContent className="grid gap-4">
        <ul className="grid gap-2 text-sm">
          {features.map((feature, idx) => (
            <li key={idx} className="flex items-start gap-2">
              <span className="mt-1 h-1.5 w-1.5 rounded-full bg-primary inline-block" />
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
        <WhatsAppDateDialog
          trigger={
            <button className="w-full bg-hero-gradient text-white rounded-md h-10 px-4 inline-flex items-center justify-center gap-2">
              <MessageCircle className="h-4 w-4" />
              Enquire on WhatsApp
            </button>
          }
          note={`Room: ${name}`}
        />
      </CardFooter>
    </Card>
  );
};

export default RoomCard;
