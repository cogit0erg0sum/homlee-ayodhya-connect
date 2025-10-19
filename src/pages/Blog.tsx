import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { MessageCircle, ArrowLeft, Calendar, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ramJanmabhoomiImage from "@/assets/ram-janmabhoomi-blog.jpg";
import { PHONE_NUMBER } from "@/lib/constants";

const Blog = () => {
  const whatsappLink = `https://wa.me/${PHONE_NUMBER}?text=Hi!%20I%20want%20to%20book%20Homlee%20Ayodhya`;

  return (
    <>
      <Helmet>
        <title>Top 5 Budget Hotels Near Ram Janmabhoomi | Homlee Ayodhya Blog 2025</title>
        <meta name="description" content="Discover affordable, clean stays near Ram Mandir, Ayodhya — including Homlee Ayodhya. Read our 2025 guide and plan your visit today." />
        <link rel="canonical" href="https://www.homleeayodhya.info/blog" />
        
        <meta property="og:title" content="Top 5 Budget Hotels Near Ram Janmabhoomi | Homlee Ayodhya Blog 2025" />
        <meta property="og:description" content="Discover affordable, clean stays near Ram Mandir, Ayodhya — including Homlee Ayodhya. Read our 2025 guide and plan your visit today." />
        <meta property="og:type" content="article" />
        <meta property="og:url" content="https://www.homleeayodhya.info/blog" />
        <meta property="og:image" content="https://lovable.dev/opengraph-image-p98pqg.png" />
        
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Top 5 Budget Hotels Near Ram Janmabhoomi | Homlee Ayodhya Blog 2025" />
        <meta name="twitter:description" content="Discover affordable, clean stays near Ram Mandir, Ayodhya — including Homlee Ayodhya. Read our 2025 guide and plan your visit today." />
        <meta name="twitter:image" content="https://lovable.dev/opengraph-image-p98pqg.png" />

        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            "headline": "Top 5 Budget & Cheap Hotels Near Ram Janmabhoomi, Ayodhya (2025 Guide)",
            "image": "https://lovable.dev/opengraph-image-p98pqg.png",
            "datePublished": "2025-01-15T08:00:00+05:30",
            "dateModified": "2025-01-15T08:00:00+05:30",
            "author": {
              "@type": "Organization",
              "name": "Homlee Ayodhya"
            },
            "publisher": {
              "@type": "Organization",
              "name": "Homlee Ayodhya",
              "logo": {
                "@type": "ImageObject",
                "url": "https://lovable.dev/opengraph-image-p98pqg.png"
              }
            },
            "mainEntityOfPage": {
              "@type": "WebPage",
              "@id": "https://www.homleeayodhya.info/blog"
            },
            "description": "Discover affordable, clean stays near Ram Mandir, Ayodhya — including Homlee Ayodhya. Read our 2025 guide and plan your visit today."
          })}
        </script>
      </Helmet>

      <div className="min-h-screen">
        <Header />
        
        <main className="py-12 px-4">
          <div className="container mx-auto max-w-4xl">
            {/* Breadcrumb */}
            <nav className="text-sm text-muted-foreground mb-8 flex items-center gap-2">
              <Link to="/" className="hover:text-primary transition-colors">Home</Link>
              <span>›</span>
              <span className="text-foreground">Blog</span>
            </nav>

            {/* Back to Home Button */}
            <Link to="/">
              <Button variant="outline" size="sm" className="mb-8">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Home
              </Button>
            </Link>

            {/* Article Header */}
            <article className="prose prose-lg max-w-none">
              <header className="mb-12 space-y-6">
                <h1 className="text-4xl md:text-5xl font-bold text-foreground leading-tight">
                  Top 5 Budget & Cheap Hotels Near Ram Janmabhoomi, Ayodhya (2025 Guide)
                </h1>
                
                <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <Calendar className="h-4 w-4" />
                    <time dateTime="2025-01-15">January 15, 2025</time>
                  </div>
                  <div className="flex items-center gap-2">
                    <User className="h-4 w-4" />
                    <span>Homlee Ayodhya</span>
                  </div>
                </div>

                {/* Featured Image */}
                <div className="w-full h-[400px] rounded-xl overflow-hidden shadow-large">
                  <img 
                    src={ramJanmabhoomiImage} 
                    alt="Ram Janmabhoomi Temple at night, beautifully illuminated - Ayodhya" 
                    className="w-full h-full object-cover"
                  />
                </div>
              </header>

              {/* Article Content */}
              <div className="space-y-6 text-foreground">
                <p className="text-lg leading-relaxed">
                  Ayodhya, one of India's most sacred cities, welcomes millions of visitors each year who come to experience the divine energy of Ram Janmabhoomi and the city's timeless charm. Whether you're on a spiritual journey or simply exploring India's cultural heart, finding a clean and affordable place to stay near the temple is key to enjoying your visit. Here's your guide to the best budget hotels and cheap stays near Ram Janmabhoomi — including our own guesthouse, Homlee Ayodhya.
                </p>

                <h2 className="text-3xl font-bold mt-12 mb-6">1. Homlee Ayodhya – Cozy & Affordable Stay Near Ram Janmabhoomi</h2>
                <p>
                  Homlee Ayodhya is a peaceful, family-run property offering 4 clean and cozy rooms equipped with AC, Wi-Fi, and comfortable bedding. Located just minutes from Ram Janmabhoomi and Hanuman Garhi, it's ideal for couples, families, and solo travelers who want modern comfort without the high price tag. Guests love our warm hospitality and personalized local guidance.
                </p>
                <p className="bg-primary/10 p-4 rounded-lg border-l-4 border-primary">
                  ✨ <strong>Special tip:</strong> Guests can request help planning a one- or two-day itinerary covering major temples, ghats, and local food spots.
                </p>
                <Button asChild size="lg" className="bg-hero-gradient my-4 text-white">
                  <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                    <MessageCircle className="mr-2 h-5 w-5 text-white" />
                    Check Availability
                  </a>
                </Button>

                <h2 className="text-3xl font-bold mt-12 mb-6">2. Ram Dham Guest House</h2>
                <p>
                  Located about 700 meters from Ram Mandir, Ram Dham Guest House offers simple rooms with fans, attached bathrooms, and homely meals. It's a good option for pilgrims looking for budget accommodation within walking distance of the temple area. Morning chai on the terrace overlooking the city is a local favorite.
                </p>

                <h2 className="text-3xl font-bold mt-12 mb-6">3. Shri Ram Residency</h2>
                <p>
                  This mid-budget property combines comfort and convenience. The rooms come with AC, Wi-Fi, and TV, and the staff help visitors arrange local transport to Hanuman Garhi and Sarayu Ghat. It's located on the main Faizabad-Ayodhya road, providing quick access to the city center.
                </p>

                <h2 className="text-3xl font-bold mt-12 mb-6">4. Nirmal Kutir Dharamshala</h2>
                <p>
                  For travelers seeking an authentic spiritual vibe, Nirmal Kutir offers clean dormitory-style rooms near the temple complex. It's managed by local trustees and is known for serving free morning prasad. Basic but safe — ideal for solo pilgrims or small groups visiting Ayodhya for festivals.
                </p>

                <h2 className="text-3xl font-bold mt-12 mb-6">5. Saket Palace Ayodhya</h2>
                <p>
                  Located about 1.5 km from the main temple, Saket Palace provides neat rooms with attached washrooms and air conditioning. It's popular with tourists visiting during Ram Navami or Diwali celebrations. They also help with guided tours around key attractions like Ram Ki Paidi and Tulsi Smarak Bhawan.
                </p>

                <h2 className="text-3xl font-bold mt-12 mb-6">Why Choose a Stay Near Ram Janmabhoomi?</h2>
                <ul className="space-y-2 list-disc pl-6">
                  <li>Walkable distance to the temple and Hanuman Garhi</li>
                  <li>Peaceful mornings with temple bells and Sarayu aarti</li>
                  <li>Easy access to local street food and markets</li>
                  <li>Quick travel to nearby attractions like Kanak Bhawan and Nageshwarnath Temple</li>
                </ul>

                <h2 className="text-3xl font-bold mt-12 mb-6">Top Places to Visit in Ayodhya</h2>
                <ul className="space-y-2 list-disc pl-6">
                  <li><strong>Ram Janmabhoomi Temple:</strong> The birthplace of Lord Ram — a must-visit for every devotee.</li>
                  <li><strong>Hanuman Garhi:</strong> The city's most iconic temple dedicated to Lord Hanuman.</li>
                  <li><strong>Ram Ki Paidi:</strong> Enjoy the evening aarti and serene views of the Sarayu River.</li>
                  <li><strong>Tulsi Smarak Bhawan:</strong> Dedicated to saint-poet Goswami Tulsidas.</li>
                </ul>

                <h2 className="text-3xl font-bold mt-12 mb-6">Average Room Prices Near Ram Janmabhoomi</h2>
                <p>
                  Most cheap hotels near Ram Mandir range between <strong>₹800–₹2,000 per night</strong> depending on season and amenities. Homlee Ayodhya offers modern comfort within this range — making it one of the best value stays in Ayodhya.
                </p>
                <Button asChild variant="outline" size="lg" className="my-4 border-primary text-primary hover:bg-primary hover:text-white">
                  <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                    <MessageCircle className="mr-2 h-5 w-5" />
                    View Offers
                  </a>
                </Button>

                <h2 className="text-3xl font-bold mt-12 mb-6">Best Time to Visit Ayodhya</h2>
                <p>
                  The best months to visit are <strong>October to March</strong> when the weather is pleasant and festive vibes fill the city. If you're visiting during Ram Navami or Diwali, book early — hotels near the temple get fully occupied quickly.
                </p>
                <p className="bg-secondary/30 p-4 rounded-lg">
                  👉 You can <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="text-primary underline font-medium">message us on WhatsApp</a> to reserve your room instantly.
                </p>

                <h2 className="text-3xl font-bold mt-12 mb-6">Experience Ayodhya's Heritage</h2>
                <p>
                  Beyond its religious importance, Ayodhya represents India's living heritage — calm ghats, melodious evening aarti, local mithai shops, and people who greet you with warmth. Staying close to the temple lets you truly feel the city's rhythm and spirituality.
                </p>

                <h2 className="text-3xl font-bold mt-12 mb-6">Book Your Stay at Homlee Ayodhya</h2>
                <p>
                  Whether you're coming for pilgrimage, sightseeing, or peaceful retreat, Homlee Ayodhya offers comfort, cleanliness, and care. We're just a short ride from Ram Janmabhoomi and serve guests from across India and abroad.
                </p>
                <div className="bg-card p-6 rounded-xl shadow-large my-8 text-center space-y-4">
                  <p className="text-lg font-medium">📞 Ready to book your stay?</p>
                  <Button asChild size="lg" className="bg-hero-gradient text-white">
                    <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                      <MessageCircle className="mr-2 h-5 w-5 text-white" />
                      Book on WhatsApp
                    </a>
                  </Button>
                  <p className="text-sm text-muted-foreground">Homlee Ayodhya — Where comfort meets devotion.</p>
                </div>
              </div>
            </article>

            {/* Back to Home Button (Bottom) */}
            <div className="mt-16 pt-8 border-t">
              <Link to="/">
                <Button variant="outline" size="lg" className="w-full md:w-auto">
                  <ArrowLeft className="mr-2 h-4 w-4" />
                  Back to Home
                </Button>
              </Link>
            </div>
          </div>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default Blog;
