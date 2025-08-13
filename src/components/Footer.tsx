import { Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

const Footer = () => {
  const socialLinks = [
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Instagram, href: "#", label: "Instagram" },
    { icon: Linkedin, href: "#", label: "LinkedIn" }
  ];

  const quickLinks = [
    { name: "About Us", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Portfolio", href: "#" },
    { name: "Testimonials", href: "#" },
    { name: "Blog", href: "#" },
    { name: "Contact", href: "#contact" }
  ];

  const services = [
    "Corporate Events",
    "Wedding Planning", 
    "Conference Management",
    "Gala Dinners",
    "Product Launches",
    "Team Building"
  ];

  return (
    <footer className="bg-foreground text-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-16 grid md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="md:col-span-1">
            <div className="mb-6">
              <img 
                src="/lovable-uploads/68ba5552-b7e1-4083-85ec-a1ac6262d64b.png" 
                alt="D Events Solutions" 
                className="h-12 w-auto mb-4 brightness-0 invert"
              />
              <p className="text-background/80 leading-relaxed">
                Your ultimate events partners, creating unforgettable experiences with passion, precision, and professionalism.
              </p>
            </div>
            
            {/* Social Media */}
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  aria-label={social.label}
                  className="w-10 h-10 bg-background/10 hover:bg-primary rounded-lg flex items-center justify-center transition-all duration-300 group"
                >
                  <social.icon className="h-5 w-5 text-background group-hover:text-white" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href}
                    className="text-background/80 hover:text-background hover:text-primary transition-colors duration-200"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Our Services</h3>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <li key={index} className="text-background/80">
                  {service}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Contact Info</h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-background/80">Nairobi, Ruai Githunguri Road</p>
                  <p className="text-background/80">Downtown Business District</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-primary flex-shrink-0" />
                <p className="text-background/80">(+254) 113 710584</p>
              </div>
              
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-primary flex-shrink-0" />
                <p className="text-background/80">lamakidesignsltd@gmail.com</p>
              </div>
            </div>

            {/* Business Hours */}
            <div className="mt-6 p-4 bg-background/5 rounded-lg">
              <h4 className="font-medium mb-2">Business Hours</h4>
              <p className="text-sm text-background/80">Mon-Fri: 9:00 AM - 6:00 PM</p>
              <p className="text-sm text-background/80">Weekend: By Appointment</p>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="py-6 border-t border-background/20">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-background/80 text-sm">
              © 2025 LD Events Solutions. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-background/80 hover:text-background text-sm transition-colors duration-200">
                Privacy Policy
              </a>
              <a href="#" className="text-background/80 hover:text-background text-sm transition-colors duration-200">
                Terms of Service
              </a>
              <a href="#" className="text-background/80 hover:text-background text-sm transition-colors duration-200">
                Cookie Polic
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;