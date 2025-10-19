import { Helmet } from "react-helmet-async";
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
import BlogCTA from "@/components/BlogCTA";
import { PHONE_NUMBER } from "@/lib/constants";

const Index = () => {
  return (
    <>
      <Helmet>
        <title>Stays in Ayodhya | Homlee Ayodhya – 4 Cozy Rooms near Ram Janmabhoomi</title>
        <meta name="description" content="Clean, comfortable rooms in Ayodhya with AC, Wi-Fi, and easy access to Ram Janmabhoomi & Hanuman Garhi. Chat on WhatsApp to book instantly." />
        <link rel="canonical" href="https://www.homleeayodhya.info/" />
        
        <meta property="og:title" content="Stays in Ayodhya | Homlee Ayodhya – 4 Cozy Rooms near Ram Janmabhoomi" />
        <meta property="og:description" content="Clean, comfortable rooms in Ayodhya with AC, Wi-Fi, and easy access to Ram Janmabhoomi & Hanuman Garhi. Chat on WhatsApp to book instantly." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.homleeayodhya.info/" />
        <meta property="og:image" content="https://lovable.dev/opengraph-image-p98pqg.png" />
        
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Homlee Ayodhya - Peaceful Stays near Ram Janmabhoomi" />
        <meta name="twitter:description" content="4 clean, cozy rooms with modern amenities in the heart of Ayodhya" />
        <meta name="twitter:image" content="https://lovable.dev/opengraph-image-p98pqg.png" />
      </Helmet>

      <div className="min-h-screen">
        <Header />
        <main>
          <Hero />
          <Highlights />
          <Rooms />
          <Amenities />
          <Gallery />
          <ItineraryPlanner />
          <BlogCTA />
          <Location />
          <FAQ />
          <Contact />
        </main>
        <Footer />
        <StickyWhatsAppButton
          phoneNumber={PHONE_NUMBER}
          message="Hi Homlee Ayodhya! I'm interested in booking. Please contact me."
        />
      </div>
    </>
  );
};

export default Index;
