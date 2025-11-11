import { MapPin, Phone, Clock, Facebook, Instagram, MessageCircle } from 'lucide-react';
import { Button } from './ui/button';

export function ContactSection() {
  return (
    <div className="px-4 py-6">
      <h2 className="mb-6">Contact Us</h2>

      {/* Contact Info Cards */}
      <div className="space-y-4 mb-6">
        <div className="bg-white rounded-lg shadow-sm p-5">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center flex-shrink-0">
              <MapPin className="w-6 h-6 text-amber-600" />
            </div>
            <div>
              <h3 className="mb-1">Location</h3>
              <p className="text-gray-700">
                Corner of the Banks, 1 block to the East
              </p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-sm p-5">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center flex-shrink-0">
              <Phone className="w-6 h-6 text-amber-600" />
            </div>
            <div>
              <h3 className="mb-1">Phone</h3>
              <a href="tel:+50523413576" className="text-amber-600">
                +505 2341 3576
              </a>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-sm p-5">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center flex-shrink-0">
              <Clock className="w-6 h-6 text-amber-600" />
            </div>
            <div>
              <h3 className="mb-1">Business Hours</h3>
              <p className="text-gray-700">Every Day: 8:00 AM - 9:00 PM</p>
            </div>
          </div>
        </div>
      </div>

      {/* Social Media */}
      <div className="bg-white rounded-lg shadow-sm p-5 mb-6">
        <h3 className="mb-4">Connect With Us</h3>
        <div className="grid grid-cols-2 gap-3">
          <Button variant="outline" className="h-auto py-3 flex flex-col items-center gap-2">
            <Facebook className="w-6 h-6 text-blue-600" />
            <span className="text-sm">Facebook</span>
          </Button>
          <Button variant="outline" className="h-auto py-3 flex flex-col items-center gap-2">
            <Instagram className="w-6 h-6 text-pink-600" />
            <span className="text-sm">Instagram</span>
          </Button>
          <Button variant="outline" className="h-auto py-3 flex flex-col items-center gap-2">
            <MessageCircle className="w-6 h-6 text-green-600" />
            <span className="text-sm">WhatsApp</span>
          </Button>
          <Button variant="outline" className="h-auto py-3 flex flex-col items-center gap-2">
            <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
              <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
            </svg>
            <span className="text-sm">TikTok</span>
          </Button>
        </div>
      </div>

      {/* Map Placeholder */}
      <div className="bg-white rounded-lg shadow-sm p-5">
        <h3 className="mb-3">Find Us</h3>
        <div className="bg-gray-200 rounded-lg h-48 flex items-center justify-center">
          <div className="text-center text-gray-500">
            <MapPin className="w-12 h-12 mx-auto mb-2" />
            <p>Map View</p>
            <p className="text-sm">Corner of the Banks, 1 block to the East</p>
          </div>
        </div>
      </div>
    </div>
  );
}
