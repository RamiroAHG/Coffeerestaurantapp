import { useState } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { ImageWithFallback } from "./figma/ImageWithFallback";

interface LoginProps {
  onLogin: (email: string, password: string) => void;
}

export function Login({ onLogin }: LoginProps) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate API call delay
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    onLogin(email, password);
    setIsLoading(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 to-orange-100 flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        {/* Logo/Branding */}
        <div className="text-center mb-8">
          <div className="w-20 h-20 mx-auto mb-4 bg-amber-600 rounded-full flex items-center justify-center">
            <span className="text-white text-2xl">☕</span>
          </div>
          <h1 className="text-3xl font-bold text-amber-900">Kfe Los Balcones</h1>
          <p className="text-amber-700 mt-2">Welcome back to your favorite coffee spot</p>
        </div>

        <Card className="shadow-xl border-0">
          <CardHeader className="space-y-1">
            <CardTitle className="text-2xl text-center">Sign in</CardTitle>
            <CardDescription className="text-center">
              Enter your credentials to access your account
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="your@email.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="h-12"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="password">Password</Label>
                <Input
                  id="password"
                  type="password"
                  placeholder="Enter your password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  className="h-12"
                />
              </div>
              <Button 
                type="submit" 
                className="w-full h-12 bg-amber-600 hover:bg-amber-700 text-white"
                disabled={isLoading}
              >
                {isLoading ? "Signing in..." : "Sign in"}
              </Button>
            </form>
            
            <div className="mt-6 text-center">
              <p className="text-sm text-gray-600">
                Don't have an account?{" "}
                <button className="text-amber-600 hover:text-amber-700 font-medium">
                  Sign up
                </button>
              </p>
            </div>
            
            {/* Demo credentials hint */}
            <div className="mt-4 p-3 bg-amber-50 rounded-lg border border-amber-200">
              <p className="text-xs text-amber-800 text-center">
                <strong>Demo:</strong> Use any email and password to continue
              </p>
            </div>
          </CardContent>
        </Card>
        
        {/* Coffee image */}
        <div className="mt-8 text-center">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=400&h=300&fit=crop&crop=center"
            alt="Coffee shop ambiance"
            className="w-32 h-24 mx-auto rounded-lg object-cover shadow-md"
          />
        </div>
      </div>
    </div>
  );
}