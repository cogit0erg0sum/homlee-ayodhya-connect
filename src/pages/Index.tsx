import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Highlights from "@/components/Highlights";
import Rooms from "@/components/Rooms";
import Amenities from "@/components/Amenities";
import Gallery from "@/components/Gallery";
import ItineraryPlanner from "@/components/ItineraryPlanner";
import Location from "@/components/Location";
import FAQ from "@/components/FAQ";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import StickyWhatsAppButton from "@/components/StickyWhatsAppButton";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <Highlights />
        <Rooms />
        <Amenities />
        <Gallery />
        <ItineraryPlanner />
        <Location />
        <FAQ />
        <Contact />
      </main>
      <Footer />
      <StickyWhatsAppButton
        phoneNumber="918004174182"
        message="Hi Homlee Ayodhya! I'm interested in booking. Please contact me."
      />
    </div>
  );
};

export default Index;
