import { Coffee, Heart, Users, Award } from 'lucide-react';

export function AboutSection() {
  return (
    <div className="px-4 py-6">
      <h2 className="mb-6">About Kfe Los Balcones</h2>

      {/* Story */}
      <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
        <div className="flex items-center gap-3 mb-4">
          <Coffee className="w-8 h-8 text-amber-600" />
          <h3>Our Story</h3>
        </div>
        <p className="text-gray-700 mb-3">
          Founded in 2012 by Minerva S.A., Kfe Los Balcones has been serving the community 
          for over a decade. What started as a small coffee shop has grown into a beloved 
          gathering place where friends meet, families celebrate, and the community comes together.
        </p>
        <p className="text-gray-700">
          Located at the Corner of the Banks, just 1 block to the East, we've become more 
          than just a café – we're a home away from home for our neighbors and visitors alike.
        </p>
      </div>

      {/* Values */}
      <div className="grid grid-cols-1 gap-4 mb-6">
        <div className="bg-amber-50 rounded-lg p-4">
          <div className="flex items-center gap-3 mb-2">
            <Heart className="w-6 h-6 text-amber-600" />
            <h4>Quality & Passion</h4>
          </div>
          <p className="text-sm text-gray-700">
            We source the finest coffee beans and ingredients to ensure every cup 
            and every dish meets our high standards.
          </p>
        </div>

        <div className="bg-amber-50 rounded-lg p-4">
          <div className="flex items-center gap-3 mb-2">
            <Users className="w-6 h-6 text-amber-600" />
            <h4>Community First</h4>
          </div>
          <p className="text-sm text-gray-700">
            We're proud to be a community gathering place where everyone is welcome. 
            From students studying to business meetings, we provide the perfect atmosphere.
          </p>
        </div>

        <div className="bg-amber-50 rounded-lg p-4">
          <div className="flex items-center gap-3 mb-2">
            <Award className="w-6 h-6 text-amber-600" />
            <h4>Rewarding Loyalty</h4>
          </div>
          <p className="text-sm text-gray-700">
            Our loyalty program rewards our regular customers with points on every purchase. 
            Earn 1 point for every C$10 spent and redeem for free items!
          </p>
        </div>
      </div>

      {/* Features */}
      <div className="bg-white rounded-lg shadow-sm p-6">
        <h3 className="mb-4">What We Offer</h3>
        <ul className="space-y-3">
          <li className="flex items-start gap-3">
            <div className="w-2 h-2 bg-amber-600 rounded-full mt-2" />
            <p className="text-gray-700">
              <span className="font-medium">Free WiFi</span> - Stay connected while you enjoy your coffee
            </p>
          </li>
          <li className="flex items-start gap-3">
            <div className="w-2 h-2 bg-amber-600 rounded-full mt-2" />
            <p className="text-gray-700">
              <span className="font-medium">Takeout Service</span> - Grab your favorites on the go
            </p>
          </li>
          <li className="flex items-start gap-3">
            <div className="w-2 h-2 bg-amber-600 rounded-full mt-2" />
            <p className="text-gray-700">
              <span className="font-medium">Comfortable Seating</span> - Relax in our cozy atmosphere
            </p>
          </li>
          <li className="flex items-start gap-3">
            <div className="w-2 h-2 bg-amber-600 rounded-full mt-2" />
            <p className="text-gray-700">
              <span className="font-medium">Available Parking</span> - Convenient parking for our guests
            </p>
          </li>
          <li className="flex items-start gap-3">
            <div className="w-2 h-2 bg-amber-600 rounded-full mt-2" />
            <p className="text-gray-700">
              <span className="font-medium">Loyalty Program</span> - Earn rewards with every visit
            </p>
          </li>
          <li className="flex items-start gap-3">
            <div className="w-2 h-2 bg-amber-600 rounded-full mt-2" />
            <p className="text-gray-700">
              <span className="font-medium">Special Promotions</span> - Regular cake specials and seasonal offers
            </p>
          </li>
        </ul>
      </div>
    </div>
  );
}
