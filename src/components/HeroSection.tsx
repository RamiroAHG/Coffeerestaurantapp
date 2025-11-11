import { Coffee, Wifi, ShoppingBag, Car, Award } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function HeroSection() {
  return (
    <div className="relative">
      {/* Hero Image */}
      <div className="relative h-80 overflow-hidden">
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1521017432531-fbd92d768814?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2ZmZWUlMjBzaG9wJTIwaW50ZXJpb3J8ZW58MXx8fHwxNzYyODQyMDExfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
          alt="Kfe Los Balcones Interior"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white px-4">
          <Coffee className="w-20 h-20 mb-4" />
          <h2 className="text-center mb-2">Welcome to Kfe Los Balcones</h2>
          <p className="text-center max-w-md opacity-90">
            Your neighborhood coffee haven serving quality brews and delicious food since 2012
          </p>
        </div>
      </div>

      {/* Features */}
      <div className="bg-white shadow-sm">
        <div className="grid grid-cols-2 gap-3 px-4 py-6">
          <div className="flex flex-col items-center text-center p-3 bg-amber-50 rounded-lg">
            <Wifi className="w-6 h-6 text-amber-600 mb-2" />
            <p className="text-sm">Free WiFi</p>
          </div>
          <div className="flex flex-col items-center text-center p-3 bg-amber-50 rounded-lg">
            <ShoppingBag className="w-6 h-6 text-amber-600 mb-2" />
            <p className="text-sm">Takeout</p>
          </div>
          <div className="flex flex-col items-center text-center p-3 bg-amber-50 rounded-lg">
            <Car className="w-6 h-6 text-amber-600 mb-2" />
            <p className="text-sm">Parking</p>
          </div>
          <div className="flex flex-col items-center text-center p-3 bg-amber-50 rounded-lg">
            <Award className="w-6 h-6 text-amber-600 mb-2" />
            <p className="text-sm">Loyalty Rewards</p>
          </div>
        </div>
      </div>
    </div>
  );
}
