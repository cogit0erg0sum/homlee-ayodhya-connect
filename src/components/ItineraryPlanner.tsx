import { useState } from "react";
import { MessageCircle, MapPin } from "lucide-react";
import { Button } from "./ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select";
import { Checkbox } from "./ui/checkbox";

const interests = [
  { id: "temples", label: "Temples & Darshan" },
  { id: "ghats", label: "Ghats & Aarti" },
  { id: "heritage", label: "Heritage Walks" },
  { id: "food", label: "Food" },
  { id: "shopping", label: "Shopping" },
];

const itineraryData = {
  "1": {
    temples: [
      { time: "6:00 AM", place: "Ram Janmabhoomi Mandir", maps: "https://maps.google.com/?q=Ram+Janmabhoomi+Ayodhya" },
      { time: "9:00 AM", place: "Hanuman Garhi", maps: "https://maps.google.com/?q=Hanuman+Garhi+Ayodhya" },
      { time: "11:00 AM", place: "Kanak Bhawan", maps: "https://maps.google.com/?q=Kanak+Bhawan+Ayodhya" },
    ],
    ghats: [
      { time: "5:30 AM", place: "Saryu Ghat morning bath", maps: "https://maps.google.com/?q=Saryu+Ghat+Ayodhya" },
      { time: "6:30 PM", place: "Evening Aarti at Naya Ghat", maps: "https://maps.google.com/?q=Naya+Ghat+Ayodhya" },
    ],
  },
  "2": {
    temples: [
      { time: "Day 1", place: "Ram Janmabhoomi, Hanuman Garhi, Kanak Bhawan", maps: "https://maps.google.com/?q=Ram+Janmabhoomi+Ayodhya" },
      { time: "Day 2", place: "Guptar Ghat, Treta ke Thakur, Tulsi Smarak Bhavan", maps: "https://maps.google.com/?q=Guptar+Ghat+Ayodhya" },
    ],
    heritage: [
      { time: "Day 2", place: "Raja Mandir, Dashrath Mahal, Ram ki Paidi", maps: "https://maps.google.com/?q=Raja+Mandir+Ayodhya" },
    ],
  },
  "3": {
    temples: [
      { time: "Day 1", place: "Core Darshan - Ram Janmabhoomi, Hanuman Garhi, Kanak Bhawan, Evening Aarti", maps: "https://maps.google.com/?q=Ram+Janmabhoomi+Ayodhya" },
      { time: "Day 2", place: "Ghats & Heritage - Guptar Ghat, Treta ke Thakur, Tulsi Smarak Bhavan, Ram ki Paidi", maps: "https://maps.google.com/?q=Guptar+Ghat+Ayodhya" },
      { time: "Day 3", place: "Around Ayodhya - Raja Mandir, Dashrath Mahal, Local markets", maps: "https://maps.google.com/?q=Raja+Mandir+Ayodhya" },
    ],
    food: [
      { time: "Day 3", place: "Local sweets & chaat trail", maps: "https://maps.google.com/?q=Ayodhya+local+food" },
    ],
  },
};

const ItineraryPlanner = () => {
  const [duration, setDuration] = useState<string>("1");
  const [selectedInterests, setSelectedInterests] = useState<string[]>(["temples"]);

  const toggleInterest = (interestId: string) => {
    setSelectedInterests((prev) =>
      prev.includes(interestId)
        ? prev.filter((id) => id !== interestId)
        : [...prev, interestId]
    );
  };

  const generateItinerary = () => {
    const dayPlan = itineraryData[duration as keyof typeof itineraryData];
    if (!dayPlan) return "";

    let itinerary = `🕉️ Your ${duration}-Day Ayodhya Itinerary\n\n`;

    selectedInterests.forEach((interest) => {
      const items = dayPlan[interest as keyof typeof dayPlan];
      if (items) {
        itinerary += `\n${interests.find((i) => i.id === interest)?.label}:\n`;
        items.forEach((item) => {
          itinerary += `${item.time} - ${item.place}\n`;
        });
      }
    });

    itinerary += `\n📍 Need directions? Click the map links above!\n💬 Want to customize this plan? Message us on WhatsApp!`;
    return itinerary;
  };

  const shareOnWhatsApp = () => {
    const itinerary = generateItinerary();
    const whatsappLink = `https://wa.me/918004174182?text=${encodeURIComponent(itinerary)}`;
    window.open(whatsappLink, "_blank", "noopener,noreferrer");
  };

  return (
    <section id="itinerary" className="py-16 md:py-24 px-4">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-12 space-y-4">
          <h2 className="text-3xl md:text-5xl font-bold">Plan Your Ayodhya Visit</h2>
          <p className="text-lg text-muted-foreground">
            Get a personalized itinerary based on your stay duration and interests
          </p>
        </div>

        <Card className="shadow-large">
          <CardHeader>
            <CardTitle>Itinerary Planner</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-2">
              <label className="text-sm font-medium">Length of stay</label>
              <Select value={duration} onValueChange={setDuration}>
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="1">1 Day</SelectItem>
                  <SelectItem value="2">2 Days</SelectItem>
                  <SelectItem value="3">3 Days</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-3">
              <label className="text-sm font-medium">Your interests</label>
              <div className="space-y-2">
                {interests.map((interest) => (
                  <div key={interest.id} className="flex items-center gap-2">
                    <Checkbox
                      id={interest.id}
                      checked={selectedInterests.includes(interest.id)}
                      onCheckedChange={() => toggleInterest(interest.id)}
                    />
                    <label htmlFor={interest.id} className="text-sm cursor-pointer">
                      {interest.label}
                    </label>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-4 border-t space-y-4">
              <h4 className="font-semibold">Your Suggested Itinerary:</h4>
              <div className="bg-secondary/50 p-4 rounded-lg space-y-2 text-sm whitespace-pre-line">
                {generateItinerary() || "Select your preferences above"}
              </div>
              <Button
                onClick={shareOnWhatsApp}
                className="w-full bg-hero-gradient"
                size="lg"
              >
                <MessageCircle className="mr-2 h-4 w-4" />
                Send to WhatsApp
              </Button>
              <p className="text-xs text-center text-muted-foreground">
                We can personalize your plan—Chat on WhatsApp for help
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default ItineraryPlanner;
