import { useRef } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Mail, Phone, MapPin, Clock } from 'lucide-react';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const formRef = useRef();

  const contactInfo = [
    {
      icon: Phone,
      title: "Call Us",
      details: "(+254) 113 710584",
      subtitle: "Available 24/7"
    },
    {
      icon: Mail,
      title: "Email Us", 
      details: "lamakidesignsltd@gmail.com",
      subtitle: "Quick response guaranteed"
    },
    {
      icon: MapPin,
      title: "Visit Us",
      details: "Nairobi, Ruai ",
      subtitle: " 500M from Githunguri Junction"
    },
    {
      icon: Clock,
      title: "Business Hours",
      details: "Mon-Sat: 7:30AM-6PM",
      subtitle: "Sunday by appointment"
    }
  ];

  // Handle form submit with EmailJS
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_ip5x6gl",     // 🔹 replace with EmailJS service ID
        "template_pwdcxpf",    // 🔹 replace with EmailJS template ID
        formRef.current,
        "7bQSKiVHnehsPijB7"      // 🔹 replace with EmailJS public key
      )
      .then(
        () => {
          alert("Message sent successfully ✅");
        },
        (error) => {
          alert("Message failed ❌ " + error.text);
        }
      );
  };

  return (
    <section id="contact" className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">
            Let's Create Something
            <span className="text-gradient"> Amazing Together</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Ready to bring your vision to life? Get in touch with our expert team and let's start planning your unforgettable event.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card className="animate-fade-in border-0 card-shadow">
            <CardHeader>
              <CardTitle className="text-2xl">Get Your Free Quote</CardTitle>
              <CardDescription>
                Tell us about your event and we'll provide a customized proposal within 24 hours.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <form ref={formRef} onSubmit={sendEmail} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="firstName">First Name</Label>
                    <Input id="firstName" name="firstName" placeholder="John" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lastName">Last Name</Label>
                    <Input id="lastName" name="lastName" placeholder="Doe" />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="email">Email Address</Label>
                  <Input id="email" name="email" type="email" placeholder="john@example.com" />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="phone">Phone Number</Label>
                  <Input id="phone" name="phone" type="tel" placeholder="(+254) 113 710584" />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="eventType">Event Type</Label>
                  <Input id="eventType" name="eventType" placeholder="Corporate Conference, Wedding, etc." />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="message">Tell us about your event</Label>
                  <Textarea 
                    id="message" 
                    name="message"
                    placeholder="Please describe your event vision, expected guests, date preferences, and any special requirements..."
                    className="min-h-[120px]"
                  />
                </div>
                
                <Button type="submit" className="w-full bg-primary hover:bg-primary/90" size="lg">
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <div className="space-y-6 animate-fade-in">
            <div className="grid gap-6">
              {contactInfo.map((info, index) => (
                <Card key={index} className="p-6 hover:shadow-lg transition-all duration-300 border-0 bg-background/50">
                  <CardContent className="p-0">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                        <info.icon className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-foreground mb-1">{info.title}</h3>
                        <p className="text-foreground mb-1">{info.details}</p>
                        <p className="text-sm text-muted-foreground">{info.subtitle}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* CTA Card */}
            <Card className="p-6 hero-gradient text-white border-0">
              <CardContent className="p-0 text-center">
                <h3 className="text-xl font-bold mb-2">Ready to Get Started?</h3>
                <p className="mb-4 text-white/90">
                  Join hundreds of satisfied clients who trust us with their most important events.
                </p>
                <Button variant="secondary" className="bg-white text-primary hover:bg-white/90">
                  Schedule Consultation
                </Button>
              </CardContent>
            </Card>

            {/* Emergency Contact */}
            <Card className="p-4 border-secondary border-2 bg-secondary/5">
              <CardContent className="p-0">
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-secondary rounded-full animate-pulse"></div>
                  <div>
                    <p className="font-medium text-foreground">24/7 Emergency Support</p>
                    <p className="text-sm text-muted-foreground">For urgent event matters: (+254) 113 710584</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
