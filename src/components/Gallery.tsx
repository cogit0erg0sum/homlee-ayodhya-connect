import { useState } from "react";
import { X } from "lucide-react";

const galleryPlaceholders = [
  "Deluxe Double room interior",
  "Family Room with extra bed",
  "Property exterior view",
  "Reception area",
  "Common corridor",
  "Nearby Ram Janmabhoomi",
  "Saryu Ghat view",
  "Hanuman Garhi temple",
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
          {galleryPlaceholders.map((alt, index) => (
            <button
              key={index}
              onClick={() => setSelectedImage(index)}
              className="aspect-square bg-muted rounded-lg overflow-hidden hover:scale-105 transition-transform shadow-soft hover:shadow-medium"
            >
              <div className="w-full h-full flex items-center justify-center text-xs text-center p-2 text-muted-foreground">
                [{alt}]
              </div>
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
            <div className="max-w-4xl w-full aspect-video bg-muted rounded-lg flex items-center justify-center text-white">
              [{galleryPlaceholders[selectedImage]}]
            </div>
          </div>
        )}

        <p className="text-center text-sm text-muted-foreground mt-8">
          Photos to be uploaded - rooms, property exterior, and nearby temples
        </p>
      </div>
    </section>
  );
};

export default Gallery;
