# Photo Management Guide for Homlee Ayodhya Website

## How to Add or Update Photos

### Method 1: Quick Update (Recommended for now)
1. **In Lovable Chat**: Simply upload your new photos and tell me which section you want to update (Hero, Rooms, Gallery, etc.)
2. I'll automatically place them in the right location and update the code for you

### Method 2: Manual Update (For future reference)
If you're comfortable with code editing:

#### Step 1: Add Photos to the Project
- Place your photos in the `src/assets/` folder
- Use descriptive names like: `hero-exterior.jpg`, `room-deluxe-1.jpg`, `reception.jpg`
- Recommended: Compress images before uploading (use tools like TinyPNG.com)

#### Step 2: Import in Components
Example for Hero section (`src/components/Hero.tsx`):
```typescript
import heroImage from "@/assets/your-image-name.jpg";
```

Then use it:
```typescript
<img src={heroImage} alt="Description" />
```

#### Step 3: Update Gallery
Edit `src/components/Gallery.tsx`:
```typescript
import newPhoto from "@/assets/new-photo.jpg";

const galleryImages = [
  { src: room1, alt: "Deluxe Double room interior - Homlee Ayodhya" },
  { src: room2, alt: "Family Room - Homlee Ayodhya" },
  { src: newPhoto, alt: "Property exterior - Homlee Ayodhya" },
  // Add more here...
];
```

## Photo Recommendations

### Image Specifications
- **Hero Image**: 1920x1080px (landscape, 16:9 ratio)
- **Room Photos**: 1200x800px (landscape)
- **Gallery**: 800x800px (square) or 1200x800px (landscape)
- **Format**: JPG (for photos), PNG (for logos/graphics)
- **File size**: Under 500KB per image (compress if needed)

### Photo Checklist
Current photos: ✅ 4 room interiors

Still needed:
- [ ] Property exterior (front view)
- [ ] Reception/entrance area
- [ ] Common corridor
- [ ] Bathroom photos
- [ ] Nearby temples (Ram Janmabhoomi, Hanuman Garhi)
- [ ] Saryu Ghat views
- [ ] Any special amenities

### SEO Tips for Photos
Always include descriptive alt text:
- ✅ Good: "Deluxe Double room with modern amenities - Homlee Ayodhya"
- ❌ Bad: "room1" or "IMG_1234"

## Quick Support
Just upload photos in the chat and say:
- "Add this as the hero image"
- "Replace room 2 photo with this"
- "Add these 5 photos to the gallery"

I'll handle the rest!
