import { Card, CardContent } from "./ui/card";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Award, Heart, Users } from "lucide-react";

export function About() {
  const values = [
    {
      icon: <Heart className="h-6 w-6 text-amber-600" />,
      title: "Passion for Coffee",
      description: "Every cup is crafted with love and dedication"
    },
    {
      icon: <Award className="h-6 w-6 text-amber-600" />,
      title: "Quality First",
      description: "We source only the finest sustainable beans"
    },
    {
      icon: <Users className="h-6 w-6 text-amber-600" />,
      title: "Community Focused",
      description: "A warm, welcoming space for everyone"
    }
  ];

  return (
    <section id="about" className="py-12 bg-muted/30">
      <div className="px-4">
        <div className="text-center mb-8">
          <h2 className="text-2xl mb-3 text-amber-700">Our Story</h2>
          <p className="text-muted-foreground">
            From a small dream to a beloved community gathering place
          </p>
        </div>

        <div className="mb-8">
          <div className="relative mb-6">
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1652248920808-2246c8011c2c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2ZmZWUlMjBiZWFucyUyMHJvYXN0aW5nfGVufDF8fHx8MTc1ODg5MDA4M3ww&ixlib=rb-4.1.0&q=80&w=1080"
              alt="Coffee beans roasting"
              className="w-full h-48 object-cover rounded-lg"
            />
          </div>
          
          <div className="space-y-4 text-sm text-muted-foreground leading-relaxed">
            <p>
              Nestled on the corner of the Banks, just one block to the East, Kfe Los Balcones has become more than just a coffee shop—it's where the neighborhood comes alive. Founded in 2018 by local entrepreneurs Carmen and Roberto, our café embodies the warmth and charm of its namesake balconies.
            </p>
            <p>
              Carmen and Roberto spent years perfecting their craft, traveling through the coffee regions of Colombia, Brazil, and the Dominican Republic. They returned with not just knowledge, but relationships with small farmers who share their passion for quality and sustainability. Every bean tells a story of dedication and tradition.
            </p>
            <p>
              From our signature cortadito served just the way you like it, to our famous tres leches cake baked fresh daily by Carmen herself, we've created a space where locals gather, friendships bloom, and every visitor becomes family. Stop by during our happy hour (3-5PM daily) and experience why we're the heart of the neighborhood.
            </p>
          </div>
        </div>

        <div className="space-y-4">
          {values.map((value, index) => (
            <Card key={index} className="p-4">
              <CardContent className="p-0">
                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 mt-1">
                    {value.icon}
                  </div>
                  <div>
                    <h4 className="font-medium mb-1">{value.title}</h4>
                    <p className="text-sm text-muted-foreground">{value.description}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}