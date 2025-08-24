import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X, Phone } from "lucide-react";
import vertatechLogo from "@/assets/vertatech-logo.png";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { name: "Home", path: "/" },
    { name: "Services", path: "/services" },
    { name: "About", path: "/about" },
    { name: "Career", path: "/career" },
    { name: "Blogs", path: "/blogs" },
    { name: "Success Stories", path: "/success-stories" },
    { name: "Contact", path: "/contact" },
    { name: "Partner", path: "/partner" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-nav-bg backdrop-blur-md border-b border-white/10">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3" onClick={() => window.scrollTo(0, 0)}>
            <img src={vertatechLogo} alt="VertaTech Solutions" className="h-12 w-12" />
            <div className="flex flex-col">
              <span className="text-primary font-bold text-xl">VertaTech</span>
              <span className="text-xs text-muted-foreground -mt-1">SOLUTIONS</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                onClick={() => window.scrollTo(0, 0)}
                className={`text-sm font-medium transition-colors hover:text-primary ${
                  location.pathname === item.path ? "text-primary" : "text-foreground"
                }`}
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Contact and CTA */}
          <div className="hidden lg:flex items-center space-x-4">
            <div className="flex items-center space-x-2 text-sm text-muted-foreground">
              <Phone className="h-4 w-4" />
              <span>+254720496076</span>
            </div>
            <Button variant="default" className="bg-primary hover:bg-primary/90 shadow-button">
              Get Quote
            </Button>
          </div>

          {/* Mobile menu button */}
          <Button
            variant="ghost"
            size="sm"
            className="lg:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-background/95 backdrop-blur-md border border-border rounded-lg mt-2">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  className={`block px-3 py-2 text-base font-medium transition-colors hover:text-primary hover:bg-muted rounded-md ${
                    location.pathname === item.path ? "text-primary bg-muted" : "text-foreground"
                  }`}
                  onClick={() => {
                    setIsOpen(false);
                    window.scrollTo(0, 0);
                  }}
                >
                  {item.name}
                </Link>
              ))}
              <div className="px-3 py-2 border-t border-border mt-2">
                <div className="flex items-center space-x-2 text-sm text-muted-foreground mb-2">
                  <Phone className="h-4 w-4" />
                  <span>+254720496076</span>
                </div>
                <Button variant="default" className="w-full bg-primary hover:bg-primary/90">
                  Get Quote
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;