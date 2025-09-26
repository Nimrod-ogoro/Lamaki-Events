import { Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

const Footer = () => {
  const socialLinks = [
    { icon: Facebook, href: "https://www.facebook.com/LamakiDesignsandConstruction ", label: "Facebook" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Instagram, href: "https://www.instagram.com/lamaki_designs/ ", label: "Instagram" },
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
                alt="Lamaki Designs" 
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
                    className="text-background/80 hover:text-primary transition-colors duration-200"
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

            {/* Interactive Map */}
            <div className="mb-4 rounded-lg overflow-hidden" style={{ aspectRatio: '16/9' }}>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.8260649096237!2d36.98881607496567!3d-1.2778556987099907!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f6b4d8c0516e9%3A0x417dc538f5da6fad!2sLamaki%20Designs%20and%20Construction!5e0!3m2!1sen!2ske!4v1758867840062!5m2!1sen!2ske"  
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Lamaki Designs Location"
              />
            </div>

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
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;