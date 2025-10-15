import { Link } from "react-router-dom";
import { BookOpen, ArrowRight } from "lucide-react";
import { Button } from "./ui/button";

const BlogCTA = () => {
  return (
    <section className="py-16 px-4 bg-secondary/30">
      <div className="container mx-auto max-w-4xl">
        <div className="bg-card p-8 md:p-12 rounded-2xl shadow-large text-center space-y-6">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-4">
            <BookOpen className="h-8 w-8 text-primary" />
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold">
            Looking for More Travel Tips?
          </h2>
          
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Discover the best budget hotels near Ram Janmabhoomi, travel tips, and everything you need to plan your perfect Ayodhya visit.
          </p>
          
          <Button asChild size="lg" className="bg-hero-gradient">
            <Link to="/blog">
              Read Our Blog
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default BlogCTA;
