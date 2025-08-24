import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

const Footer = () => {
  const quickLinks = [
    { name: "Home", href: "/" },
    { name: "Services", href: "/services" },
    { name: "About", href: "/about" },
    { name: "Career", href: "/career" },
    { name: "Partner", href: "/partner" },
    { name: "Contact", href: "/contact" }
  ];

  const services = [
    "Web & System Development",
    "Mobile App Development", 
    "CCTV Installation",
    "Network Solutions",
    "Biometric Systems",
    "IT Security"
  ];

  return (
    <footer className="bg-foreground text-background py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-accent">VertaTech Solutions</h3>
            <p className="text-background/80 text-sm leading-relaxed">
              Navigating Kenya's Digital Frontier. We specialize in providing robust solutions that empower you 
              to excel in today's rapidly evolving technological landscape.
            </p>
            <div className="flex space-x-2">
              <Button 
                size="sm" 
                variant="outline" 
                className="border-background/20 text-background hover:bg-background/10"
                onClick={() => window.open("https://facebook.com/vertatechsolutions", "_blank")}
              >
                FB
              </Button>
              <Button 
                size="sm" 
                variant="outline" 
                className="border-background/20 text-background hover:bg-background/10"
                onClick={() => window.open("https://twitter.com/vertatechsolutions", "_blank")}
              >
                TW
              </Button>
              <Button 
                size="sm" 
                variant="outline" 
                className="border-background/20 text-background hover:bg-background/10"
                onClick={() => window.open("https://linkedin.com/company/vertatechsolutions", "_blank")}
              >
                LI
              </Button>
              <Button 
                size="sm" 
                variant="outline" 
                className="border-background/20 text-background hover:bg-background/10"
                onClick={() => window.open("https://instagram.com/vertatechsolutions", "_blank")}
              >
                IG
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-accent">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href} 
                    className="text-background/80 hover:text-accent transition-colors text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-accent">Our Services</h4>
            <ul className="space-y-2">
              {services.map((service, index) => (
                <li key={index} className="text-background/80 text-sm">
                  {service}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-accent">Contact Info</h4>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <MapPin className="h-4 w-4 text-accent mt-0.5 flex-shrink-0" />
                <span className="text-background/80 text-sm">
                  Nairobi, Kenya
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-4 w-4 text-accent flex-shrink-0" />
                <span className="text-background/80 text-sm">+254 720 496 076</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-4 w-4 text-accent flex-shrink-0" />
                <span className="text-background/80 text-sm">info@vertatechsolutions.co.ke</span>
              </div>
              <div className="flex items-start space-x-3">
                <Clock className="h-4 w-4 text-accent mt-0.5 flex-shrink-0" />
                <span className="text-background/80 text-sm">
                  Mon - Fri: 8:00 AM - 6:00 PM<br />
                  Sat: 9:00 AM - 2:00 PM
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-background/20 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-background/60 text-sm">
              © 2024 VertaTech Solutions. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <a href="/privacy" className="text-background/60 hover:text-accent text-sm transition-colors">
                Privacy Policy
              </a>
              <a href="/terms" className="text-background/60 hover:text-accent text-sm transition-colors">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;