import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Building2, Heart, Users, Sparkles, Calendar, Award } from 'lucide-react';
import conferenceImage from '@/assets/conference-event.jpg';
import weddingImage from '@/assets/wedding-event.jpg';
import galaImage from '@/assets/gala-event.jpg';

const Services = () => {
  const services = [
    {
      icon: Building2,
      title: "Corporate Events",
      description: "Professional conferences, seminars, and business gatherings that drive results and foster connections.",
      image: conferenceImage,
      features: ["Conference Management", "Team Building Events", "Product Launches", "Executive Retreats"]
    },
    {
      icon: Heart,
      title: "Weddings & Celebrations",
      description: "Romantic and elegant weddings that turn your special day into a fairytale experience.",
      image: weddingImage,
      features: ["Wedding Planning", "Anniversary Celebrations", "Engagement Parties", "Reception Coordination"]
    },
    {
      icon: Sparkles,
      title: "Luxury Events",
      description: "High-end galas, award ceremonies, and VIP events with exceptional attention to detail.",
      image: galaImage,
      features: ["Gala Dinners", "Award Ceremonies", "VIP Events", "Red Carpet Events"]
    }
  ];

  const additionalServices = [
    { icon: Users, title: "Event Coordination", description: "Full-service event management from concept to completion" },
    { icon: Calendar, title: "Event Planning", description: "Strategic planning and timeline management for flawless execution" },
    { icon: Award, title: "Premium Services", description: "Luxury amenities and white-glove service for exclusive events" }
  ];

  return (
    <section id="services" className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">
            Our Premium
            <span className="text-gradient"> Services</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We specialize in creating exceptional events that exceed expectations and create lasting memories for you and your guests.
          </p>
        </div>

        {/* Main Services */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <Card key={index} className="group hover:shadow-xl transition-all duration-300 overflow-hidden animate-fade-in border-0 card-shadow">
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={service.image} 
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute top-4 left-4 p-2 bg-white/90 rounded-lg">
                  <service.icon className="h-6 w-6 text-primary" />
                </div>
              </div>
              <CardHeader>
                <CardTitle className="text-xl mb-2">{service.title}</CardTitle>
                <CardDescription className="text-base">{service.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-muted-foreground">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
                <Button variant="outline" className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                  Request Service
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Additional Services */}
        <div className="grid md:grid-cols-3 gap-6">
          {additionalServices.map((service, index) => (
            <Card key={index} className="hover:shadow-lg transition-all duration-300 animate-fade-in border-0 bg-background/50">
              <CardHeader className="text-center">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <service.icon className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-lg">{service.title}</CardTitle>
                <CardDescription>{service.description}</CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;