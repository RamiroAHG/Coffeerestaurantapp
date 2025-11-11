import { useState } from 'react';
import { Coffee, LogIn } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface LoginPageProps {
  onLogin: (user: { name: string; email: string }) => void;
}

export function LoginPage({ onLogin }: LoginPageProps) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (name.trim() && email.trim()) {
      onLogin({ name: name.trim(), email: email.trim() });
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 to-orange-50">
      {/* Hero Image */}
      <div className="relative h-64 overflow-hidden">
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1521017432531-fbd92d768814?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2ZmZWUlMjBzaG9wJTIwaW50ZXJpb3J8ZW58MXx8fHwxNzYyODQyMDExfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
          alt="Kfe Los Balcones"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent" />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white px-4">
          <Coffee className="w-16 h-16 mb-3" />
          <h1 className="text-center mb-2">Kfe Los Balcones</h1>
          <p className="text-center opacity-90">Your Community Coffee Haven</p>
        </div>
      </div>

      {/* Login Form */}
      <div className="px-4 py-8 max-w-md mx-auto">
        <div className="bg-white rounded-2xl shadow-lg p-6">
          <h2 className="text-center mb-6">Welcome Back</h2>
          
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="name">Name</Label>
              <Input
                id="name"
                type="text"
                placeholder="Enter your name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                className="h-12"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="h-12"
              />
            </div>

            <Button type="submit" className="w-full h-12 mt-6">
              <LogIn className="w-5 h-5 mr-2" />
              Sign In
            </Button>
          </form>

          <div className="mt-6 pt-6 border-t border-gray-200">
            <p className="text-center text-sm text-gray-600">
              New to Kfe Los Balcones?
            </p>
            <p className="text-center text-sm text-gray-500 mt-1">
              Just enter your details to get started
            </p>
          </div>
        </div>

        {/* Info Section */}
        <div className="mt-8 text-center space-y-2">
          <p className="text-sm text-gray-600">
            Corner of the Banks, 1 block to the East
          </p>
          <p className="text-sm text-gray-600">
            Open Daily: 8:00 AM - 9:00 PM
          </p>
          <p className="text-sm text-gray-600">
            +505 2341 3576
          </p>
        </div>
      </div>
    </div>
  );
}
