import { Button } from "./ui/button";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function Hero() {
  return (
    <section id="home" className="relative h-[70vh] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1521017432531-fbd92d768814?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2ZmZWUlMjBzaG9wJTIwaW50ZXJpb3J8ZW58MXx8fHwxNzU4ODg5OTI0fDA&ixlib=rb-4.1.0&q=80&w=1080"
          alt="Coffee shop interior"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/60"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center text-white px-4 max-w-sm">
        <h1 className="text-3xl font-bold mb-4">
          Welcome to <span className="text-amber-400">Kfe Los Balcones</span>
        </h1>
        <p className="text-base mb-6 text-gray-200 leading-relaxed">
          Your neighborhood gathering spot on the corner of the Banks. Where tradition meets flavor, one cup at a time.
        </p>
        <div className="flex flex-col gap-3">
          <Button 
            size="lg" 
            className="bg-amber-600 hover:bg-amber-700 text-white w-full h-12"
            onClick={() => document.getElementById('menu')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Explore Our Menu
          </Button>
          <Button 
            variant="outline" 
            size="lg" 
            className="border-white text-white hover:bg-white hover:text-black w-full h-12"
            onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Our Story
          </Button>
        </div>
      </div>
    </section>
  );
}