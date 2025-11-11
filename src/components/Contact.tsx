import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { MapPin, Phone, Clock, Mail } from "lucide-react";

export function Contact() {
  const contactInfo = [
    {
      icon: <MapPin className="h-5 w-5 text-amber-600" />,
      title: "Location",
      details: ["Corner of the Banks", "1 block to the East"]
    },
    {
      icon: <Phone className="h-5 w-5 text-amber-600" />,
      title: "Phone",
      details: ["(809) 555-CAFE", "WhatsApp: +1 809 555 2233"]
    },
    {
      icon: <Clock className="h-5 w-5 text-amber-600" />,
      title: "Hours",
      details: ["Mon-Fri: 6:30AM - 9:00PM", "Sat-Sun: 7:00AM - 10:00PM", "Happy Hour: 3-5PM Daily"]
    },
    {
      icon: <Mail className="h-5 w-5 text-amber-600" />,
      title: "Email",
      details: ["hello@kfelosbalcones.com", "orders@kfelosbalcones.com"]
    }
  ];

  return (
    <section id="contact" className="py-12">
      <div className="px-4">
        <div className="text-center mb-8">
          <h2 className="text-2xl mb-3 text-amber-700">Get in Touch</h2>
          <p className="text-muted-foreground">
            Visit us today or get in touch. We'd love to hear from you!
          </p>
        </div>

        <div className="space-y-6">
          {/* Contact Information */}
          <div className="space-y-4">
            {contactInfo.map((info, index) => (
              <Card key={index} className="p-4">
                <CardContent className="p-0">
                  <div className="flex items-start gap-3">
                    <div className="flex-shrink-0 mt-1">
                      {info.icon}
                    </div>
                    <div>
                      <h4 className="font-medium mb-1">{info.title}</h4>
                      {info.details.map((detail, idx) => (
                        <p key={idx} className="text-sm text-muted-foreground">
                          {detail}
                        </p>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Map Placeholder */}
          <Card>
            <CardContent className="p-0">
              <div className="h-48 bg-muted rounded-lg flex items-center justify-center">
                <div className="text-center text-muted-foreground">
                  <MapPin className="h-8 w-8 mx-auto mb-2" />
                  <p className="text-sm">Find Us Here</p>
                  <p className="text-xs">Corner of the Banks, 1 block to the East</p>
                  <p className="text-xs mt-1">Look for the cozy balcony with coffee aroma!</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Contact Form */}
          <Card>
            <CardHeader className="pb-4">
              <CardTitle className="text-lg">Send us a Message</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <label htmlFor="name" className="block mb-2 text-sm">Name</label>
                <Input id="name" placeholder="Your name" className="h-11" />
              </div>
              <div>
                <label htmlFor="email" className="block mb-2 text-sm">Email</label>
                <Input id="email" type="email" placeholder="your.email@example.com" className="h-11" />
              </div>
              <div>
                <label htmlFor="subject" className="block mb-2 text-sm">Subject</label>
                <Input id="subject" placeholder="What's this about?" className="h-11" />
              </div>
              <div>
                <label htmlFor="message" className="block mb-2 text-sm">Message</label>
                <Textarea 
                  id="message" 
                  placeholder="Tell us how we can help you..." 
                  rows={4}
                  className="resize-none"
                />
              </div>
              <Button className="w-full bg-amber-600 hover:bg-amber-700 h-11">
                Send Message
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}