import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { Plus, Coffee, Snowflake, Cookie } from "lucide-react";
import { useState } from "react";

export function Menu() {
  const [cart, setCart] = useState<{[key: string]: number}>({});

  const addToCart = (itemId: string) => {
    setCart(prev => ({
      ...prev,
      [itemId]: (prev[itemId] || 0) + 1
    }));
  };

  const hotDrinks = [
    { id: "h1", name: "Classic Espresso", description: "Double shot of our signature blend", price: "$3.50", popular: true },
    { id: "h2", name: "Americano", description: "Espresso with hot water, bold and smooth", price: "$3.75" },
    { id: "h3", name: "Cappuccino", description: "Equal parts espresso, steamed milk, and foam", price: "$4.25", popular: true },
    { id: "h4", name: "Latte", description: "Espresso with steamed milk and light foam", price: "$4.50" },
    { id: "h5", name: "Flat White", description: "Double shot with microfoam milk", price: "$4.75" },
    { id: "h6", name: "Mocha", description: "Chocolate, espresso, and steamed milk", price: "$5.25" },
  ];

  const coldDrinks = [
    { id: "c1", name: "Iced Coffee", description: "Cold brew with ice and your choice of milk", price: "$4.00", popular: true },
    { id: "c2", name: "Iced Latte", description: "Espresso over ice with cold milk", price: "$4.75" },
    { id: "c3", name: "Frappé", description: "Blended iced coffee with whipped cream", price: "$5.50" },
    { id: "c4", name: "Cold Brew", description: "Smooth, less acidic coffee brewed cold", price: "$4.25" },
    { id: "c5", name: "Iced Americano", description: "Espresso shots over ice with cold water", price: "$4.00" },
    { id: "c6", name: "Nitro Cold Brew", description: "Cold brew infused with nitrogen for smoothness", price: "$5.00", popular: true },
  ];

  const pastries = [
    { id: "p1", name: "Butter Croissant", description: "Flaky, buttery pastry baked fresh daily", price: "$3.25", popular: true },
    { id: "p2", name: "Chocolate Muffin", description: "Rich chocolate muffin with chocolate chips", price: "$3.75" },
    { id: "p3", name: "Blueberry Scone", description: "Traditional scone with fresh blueberries", price: "$3.50" },
    { id: "p4", name: "Cinnamon Roll", description: "Sweet, spiral pastry with cinnamon and glaze", price: "$4.00", popular: true },
    { id: "p5", name: "Bagel with Cream Cheese", description: "Fresh bagel with Philadelphia cream cheese", price: "$4.25" },
    { id: "p6", name: "Danish Pastry", description: "Fruit-filled pastry with sweet glaze", price: "$3.75" },
  ];

  const MenuCategory = ({ items }: { items: any[] }) => (
    <div className="space-y-3">
      {items.map((item) => (
        <Card key={item.id} className="overflow-hidden">
          <CardHeader className="p-4">
            <div className="flex justify-between items-start">
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-1">
                  <CardTitle className="text-base">{item.name}</CardTitle>
                  {item.popular && (
                    <Badge variant="secondary" className="bg-amber-100 text-amber-800 text-xs px-1.5 py-0.5">
                      Popular
                    </Badge>
                  )}
                </div>
                <CardDescription className="text-sm leading-relaxed">
                  {item.description}
                </CardDescription>
              </div>
              <div className="flex items-center gap-3 ml-4">
                <span className="font-semibold text-amber-600">{item.price}</span>
                <Button 
                  size="sm" 
                  variant="outline"
                  onClick={() => addToCart(item.id)}
                  className="h-8 w-8 p-0 flex-shrink-0"
                >
                  <Plus className="h-4 w-4" />
                </Button>
              </div>
            </div>
            {cart[item.id] && (
              <div className="text-xs text-muted-foreground pt-2 border-t">
                Added to cart: {cart[item.id]}
              </div>
            )}
          </CardHeader>
        </Card>
      ))}
    </div>
  );

  return (
    <section id="menu" className="py-12">
      <div className="px-4">
        <div className="text-center mb-8">
          <h2 className="text-2xl mb-3 text-amber-700">Our Menu</h2>
          <p className="text-muted-foreground">
            From perfectly crafted espresso to freshly baked pastries
          </p>
        </div>

        <Tabs defaultValue="hot" className="w-full">
          <TabsList className="grid w-full grid-cols-3 mb-6 h-12">
            <TabsTrigger value="hot" className="flex items-center gap-1 text-sm">
              <Coffee className="h-4 w-4" />
              Hot
            </TabsTrigger>
            <TabsTrigger value="cold" className="flex items-center gap-1 text-sm">
              <Snowflake className="h-4 w-4" />
              Cold
            </TabsTrigger>
            <TabsTrigger value="pastries" className="flex items-center gap-1 text-sm">
              <Cookie className="h-4 w-4" />
              Food
            </TabsTrigger>
          </TabsList>

          <TabsContent value="hot">
            <MenuCategory items={hotDrinks} />
          </TabsContent>

          <TabsContent value="cold">
            <MenuCategory items={coldDrinks} />
          </TabsContent>

          <TabsContent value="pastries">
            <MenuCategory items={pastries} />
          </TabsContent>
        </Tabs>

        {Object.keys(cart).length > 0 && (
          <div className="mt-6 sticky bottom-4">
            <Button size="lg" className="bg-amber-600 hover:bg-amber-700 w-full h-12">
              View Cart ({Object.values(cart).reduce((a, b) => a + b, 0)} items)
            </Button>
          </div>
        )}
      </div>
    </section>
  );
}