import { useState } from "react";
import { X } from "lucide-react";
import room1 from "@/assets/room-1.jpg";
import room2 from "@/assets/room-2.jpg";
import room3 from "@/assets/room-3.jpg";
import room4 from "@/assets/room-4.jpg";

const galleryImages = [
  { src: room1, alt: "Deluxe Double room interior - Homlee Ayodhya" },
  { src: room2, alt: "Family Room with wardrobe - Homlee Ayodhya" },
  { src: room3, alt: "Comfortable room with modern lighting - Homlee Ayodhya" },
  { src: room4, alt: "Standard room interior - Homlee Ayodhya" },
];

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  return (
    <section id="gallery" className="py-16 md:py-24 px-4 bg-secondary/30">
      <div className="container mx-auto">
        <div className="text-center mb-12 space-y-4">
          <h2 className="text-3xl md:text-5xl font-bold">Gallery</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Take a virtual tour of Homlee Ayodhya and nearby attractions
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {galleryImages.map((image, index) => (
            <button
              key={index}
              onClick={() => setSelectedImage(index)}
              className="aspect-square rounded-lg overflow-hidden hover:scale-105 transition-transform shadow-soft hover:shadow-medium"
            >
              <img 
                src={image.src} 
                alt={image.alt}
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </button>
          ))}
        </div>

        {/* Lightbox */}
        {selectedImage !== null && (
          <div
            className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <button
              className="absolute top-4 right-4 text-white hover:text-gray-300"
              onClick={() => setSelectedImage(null)}
              aria-label="Close lightbox"
            >
              <X size={32} />
            </button>
            <div className="max-w-4xl w-full">
              <img 
                src={galleryImages[selectedImage].src}
                alt={galleryImages[selectedImage].alt}
                className="w-full h-auto rounded-lg"
              />
            </div>
          </div>
        )}

        <p className="text-center text-sm text-muted-foreground mt-8"> 
        </p>
      </div>
    </section>
  );
};

export default Gallery;
