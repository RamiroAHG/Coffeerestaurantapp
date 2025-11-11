import { useState, useEffect } from 'react';
import { Menu, ShoppingCart, User, LogOut, Award, X } from 'lucide-react';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger, SheetDescription } from './ui/sheet';
import { HeroSection } from './HeroSection';
import { MenuSection } from './MenuSection';
import { FeaturedSection } from './FeaturedSection';
import { AboutSection } from './AboutSection';
import { ContactSection } from './ContactSection';
import { LoyaltyCard } from './LoyaltyCard';
import { CartSheet } from './CartSheet';

export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: number;
  category: string;
  image: string;
  featured?: boolean;
}

interface MainAppProps {
  user: { name: string; email: string } | null;
  onLogout: () => void;
}

export function MainApp({ user, onLogout }: MainAppProps) {
  const [cart, setCart] = useState<Array<MenuItem & { quantity: number }>>([]);
  const [loyaltyPoints, setLoyaltyPoints] = useState(0);
  const [activeSection, setActiveSection] = useState('menu');

  useEffect(() => {
    // Load cart from localStorage
    const savedCart = localStorage.getItem('kfe_cart');
    if (savedCart) {
      setCart(JSON.parse(savedCart));
    }

    // Load loyalty points from localStorage
    const savedPoints = localStorage.getItem('kfe_loyaltyPoints');
    if (savedPoints) {
      setLoyaltyPoints(parseInt(savedPoints));
    }
  }, []);

  useEffect(() => {
    // Save cart to localStorage
    localStorage.setItem('kfe_cart', JSON.stringify(cart));
  }, [cart]);

  useEffect(() => {
    // Save loyalty points to localStorage
    localStorage.setItem('kfe_loyaltyPoints', loyaltyPoints.toString());
  }, [loyaltyPoints]);

  const addToCart = (item: MenuItem) => {
    setCart(prevCart => {
      const existingItem = prevCart.find(cartItem => cartItem.id === item.id);
      if (existingItem) {
        return prevCart.map(cartItem =>
          cartItem.id === item.id
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem
        );
      }
      return [...prevCart, { ...item, quantity: 1 }];
    });
  };

  const removeFromCart = (itemId: string) => {
    setCart(prevCart => prevCart.filter(item => item.id !== itemId));
  };

  const updateQuantity = (itemId: string, quantity: number) => {
    if (quantity <= 0) {
      removeFromCart(itemId);
    } else {
      setCart(prevCart =>
        prevCart.map(item =>
          item.id === itemId ? { ...item, quantity } : item
        )
      );
    }
  };

  const clearCart = () => {
    setCart([]);
  };

  const handleCheckout = () => {
    // Calculate points earned (1 point per 10 córdobas spent)
    const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
    const pointsEarned = Math.floor(total / 10);
    setLoyaltyPoints(prev => prev + pointsEarned);
    
    // Clear cart
    clearCart();
    
    // Show success message (in a real app, this would process the order)
    alert(`Order placed successfully! You earned ${pointsEarned} loyalty points.`);
  };

  const cartItemsCount = cart.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Fixed Header */}
      <header className="sticky top-0 z-50 bg-white shadow-sm">
        <div className="flex items-center justify-between px-4 py-3">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="w-6 h-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="w-64">
              <SheetHeader>
                <SheetTitle>Menu</SheetTitle>
              </SheetHeader>
              <nav className="mt-6 space-y-1">
                <Button
                  variant={activeSection === 'menu' ? 'secondary' : 'ghost'}
                  className="w-full justify-start"
                  onClick={() => setActiveSection('menu')}
                >
                  Full Menu
                </Button>
                <Button
                  variant={activeSection === 'featured' ? 'secondary' : 'ghost'}
                  className="w-full justify-start"
                  onClick={() => setActiveSection('featured')}
                >
                  Featured Items
                </Button>
                <Button
                  variant={activeSection === 'about' ? 'secondary' : 'ghost'}
                  className="w-full justify-start"
                  onClick={() => setActiveSection('about')}
                >
                  About Us
                </Button>
                <Button
                  variant={activeSection === 'contact' ? 'secondary' : 'ghost'}
                  className="w-full justify-start"
                  onClick={() => setActiveSection('contact')}
                >
                  Contact
                </Button>
              </nav>
              <div className="mt-8 pt-8 border-t">
                <LoyaltyCard points={loyaltyPoints} userName={user?.name || 'Guest'} />
              </div>
            </SheetContent>
          </Sheet>

          <h1 className="text-center flex-1">Kfe Los Balcones</h1>

          <div className="flex items-center gap-2">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="relative">
                  <Award className="w-6 h-6" />
                  {loyaltyPoints > 0 && (
                    <Badge className="absolute -top-1 -right-1 h-5 w-5 flex items-center justify-center p-0 text-xs">
                      {loyaltyPoints}
                    </Badge>
                  )}
                </Button>
              </SheetTrigger>
              <SheetContent side="right">
                <SheetHeader>
                  <SheetTitle>Loyalty Rewards</SheetTitle>
                </SheetHeader>
                <div className="mt-6">
                  <LoyaltyCard points={loyaltyPoints} userName={user?.name || 'Guest'} detailed />
                </div>
              </SheetContent>
            </Sheet>

            <CartSheet
              cart={cart}
              onUpdateQuantity={updateQuantity}
              onRemoveItem={removeFromCart}
              onCheckout={handleCheckout}
              cartItemsCount={cartItemsCount}
            />

            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                  <User className="w-6 h-6" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right">
                <SheetHeader>
                  <SheetTitle>Account</SheetTitle>
                </SheetHeader>
                <div className="mt-6 space-y-4">
                  <div className="p-4 bg-amber-50 rounded-lg">
                    <p className="text-sm text-gray-600">Signed in as</p>
                    <p className="mt-1">{user?.name}</p>
                    <p className="text-sm text-gray-600">{user?.email}</p>
                  </div>
                  <Button variant="destructive" onClick={onLogout} className="w-full">
                    <LogOut className="w-4 h-4 mr-2" />
                    Sign Out
                  </Button>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main>
        <HeroSection />
        
        {activeSection === 'menu' && <MenuSection onAddToCart={addToCart} />}
        {activeSection === 'featured' && <FeaturedSection onAddToCart={addToCart} />}
        {activeSection === 'about' && <AboutSection />}
        {activeSection === 'contact' && <ContactSection />}
      </main>

      {/* Footer */}
      <footer className="bg-amber-900 text-white py-8 px-4 mt-12">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="mb-2">Kfe Los Balcones</h3>
          <p className="text-sm text-amber-100">Your Community Coffee Haven Since 2012</p>
          <p className="text-sm text-amber-100 mt-4">
            Corner of the Banks, 1 block to the East
          </p>
          <p className="text-sm text-amber-100">Open Daily: 8:00 AM - 9:00 PM</p>
          <p className="text-sm text-amber-100 mt-2">+505 2341 3576</p>
        </div>
      </footer>
    </div>
  );
}