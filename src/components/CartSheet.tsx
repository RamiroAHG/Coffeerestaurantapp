import { ShoppingCart, Plus, Minus, Trash2 } from 'lucide-react';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger, SheetFooter, SheetDescription } from './ui/sheet';
import { MenuItem } from './MainApp';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { Separator } from './ui/separator';

interface CartSheetProps {
  cart: Array<MenuItem & { quantity: number }>;
  onUpdateQuantity: (itemId: string, quantity: number) => void;
  onRemoveItem: (itemId: string) => void;
  onCheckout: () => void;
  cartItemsCount: number;
}

export function CartSheet({
  cart,
  onUpdateQuantity,
  onRemoveItem,
  onCheckout,
  cartItemsCount,
}: CartSheetProps) {
  const subtotal = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const tax = subtotal * 0.15; // 15% IVA
  const total = subtotal + tax;

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className="relative">
          <ShoppingCart className="w-6 h-6" />
          {cartItemsCount > 0 && (
            <Badge className="absolute -top-1 -right-1 h-5 w-5 flex items-center justify-center p-0 text-xs">
              {cartItemsCount}
            </Badge>
          )}
        </Button>
      </SheetTrigger>
      <SheetContent side="right" className="w-full sm:max-w-lg flex flex-col">
        <SheetHeader>
          <SheetTitle>Your Cart</SheetTitle>
          <SheetDescription>
            Add items from our menu to get started
          </SheetDescription>
        </SheetHeader>

        {cart.length === 0 ? (
          <div className="flex-1 flex flex-col items-center justify-center text-center p-6">
            <ShoppingCart className="w-16 h-16 text-gray-300 mb-4" />
            <p className="text-gray-600 mb-1">Your cart is empty</p>
            <p className="text-sm text-gray-500">Add items from our menu to get started</p>
          </div>
        ) : (
          <>
            <div className="flex-1 overflow-y-auto py-4">
              <div className="space-y-4">
                {cart.map(item => (
                  <div key={item.id} className="flex gap-3">
                    <div className="w-20 h-20 flex-shrink-0 rounded-lg overflow-hidden">
                      <ImageWithFallback
                        src={item.image}
                        alt={item.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className="text-sm mb-1 line-clamp-1">{item.name}</h4>
                      <p className="text-sm text-amber-600 mb-2">
                        C${item.price}
                      </p>
                      <div className="flex items-center gap-2">
                        <Button
                          variant="outline"
                          size="icon"
                          className="h-7 w-7"
                          onClick={() => onUpdateQuantity(item.id, item.quantity - 1)}
                        >
                          <Minus className="w-3 h-3" />
                        </Button>
                        <span className="text-sm w-8 text-center">{item.quantity}</span>
                        <Button
                          variant="outline"
                          size="icon"
                          className="h-7 w-7"
                          onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}
                        >
                          <Plus className="w-3 h-3" />
                        </Button>
                        <Button
                          variant="ghost"
                          size="icon"
                          className="h-7 w-7 ml-auto"
                          onClick={() => onRemoveItem(item.id)}
                        >
                          <Trash2 className="w-3 h-3 text-red-500" />
                        </Button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="border-t pt-4">
              <div className="space-y-2 mb-4">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Subtotal</span>
                  <span>C${subtotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">IVA (15%)</span>
                  <span>C${tax.toFixed(2)}</span>
                </div>
                <Separator />
                <div className="flex justify-between">
                  <span>Total</span>
                  <span className="text-amber-600">C${total.toFixed(2)}</span>
                </div>
              </div>

              <div className="bg-amber-50 border border-amber-200 rounded-lg p-3 mb-4">
                <p className="text-sm text-amber-800">
                  💰 You'll earn {Math.floor(total / 10)} loyalty points with this order!
                </p>
              </div>

              <Button
                onClick={onCheckout}
                className="w-full h-12"
              >
                Place Order
              </Button>
            </div>
          </>
        )}
      </SheetContent>
    </Sheet>
  );
}