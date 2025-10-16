import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "./ui/button";
import { Link, useLocation } from "react-router-dom";

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { label: "Home", href: "/", type: "route" },
    { label: "Rooms", href: "/#rooms", type: "anchor" },
    { label: "Amenities", href: "/#amenities", type: "anchor" },
    { label: "Gallery", href: "/#gallery", type: "anchor" },
    { label: "Itinerary", href: "/#itinerary", type: "anchor" },
    { label: "Location", href: "/#location", type: "anchor" },
    { label: "Contact", href: "/#contact", type: "anchor" },
    { label: "Blog", href: "/blog", type: "route" },
  ];

  const handleNavigation = (item: typeof navItems[0], e?: React.MouseEvent) => {
    setMobileMenuOpen(false);
    
    if (item.type === "anchor") {
      if (location.pathname !== "/") {
        // If we're not on home page, use Link to navigate
        // The href will handle the navigation
        return;
      } else {
        // We're on home page, just scroll
        e?.preventDefault();
        const id = item.href.split("#")[1];
        const element = document.getElementById(id);
        element?.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  const isActive = (item: typeof navItems[0]) => {
    if (item.type === "route") {
      return location.pathname === item.href;
    }
    return false;
  };

  return (
    <header className="sticky top-0 z-40 w-full bg-background/95 backdrop-blur shadow-soft">
      <div className="container mx-auto px-4">
        <div className="flex h-16 md:h-20 items-center justify-between">
          <Link to="/" className="flex items-center gap-2">
            <h1 className="text-xl md:text-2xl font-bold text-foreground">
              Homlee Ayodhya
            </h1>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6">
            {navItems.map((item) => (
              item.type === "route" ? (
                <Link
                  key={item.href}
                  to={item.href}
                  className={`text-sm font-medium transition-colors ${
                    isActive(item) 
                      ? "text-primary font-semibold" 
                      : "text-foreground hover:text-primary"
                  }`}
                >
                  {item.label}
                </Link>
              ) : (
                <Link
                  key={item.href}
                  to={item.href}
                  onClick={(e) => handleNavigation(item, e)}
                  className="text-sm font-medium text-foreground hover:text-primary transition-colors"
                >
                  {item.label}
                </Link>
              )
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <nav className="md:hidden py-4 border-t border-border">
            {navItems.map((item) => (
              item.type === "route" ? (
                <Link
                  key={item.href}
                  to={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`block w-full text-left py-3 text-sm font-medium transition-colors ${
                    isActive(item)
                      ? "text-primary font-semibold"
                      : "text-foreground hover:text-primary"
                  }`}
                >
                  {item.label}
                </Link>
              ) : (
                <Link
                  key={item.href}
                  to={item.href}
                  onClick={(e) => handleNavigation(item, e)}
                  className="block w-full text-left py-3 text-sm font-medium text-foreground hover:text-primary transition-colors"
                >
                  {item.label}
                </Link>
              )
            ))}
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
