import { Button } from "@/components/ui/button";
import { ArrowRight, Network, Shield, Eye, Smartphone, Phone } from "lucide-react";
import vertatechLogo from "/lovable-uploads/3fb719b7-6de4-44bf-a1d6-899c1c8c18b8.png";
import techHeroSectionBg from "@/assets/tech-hero-section-bg.jpg";

const HeroSection = () => {
  const services = [
    { icon: Network, label: "Networking" },
    { icon: Shield, label: "Security" },
    { icon: Eye, label: "CCTV" },
    { icon: Smartphone, label: "System, Web & Mobile Apps" },
  ];


  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background with gradient overlay */}
      <div 
        className="absolute inset-0 bg-hero-gradient"
        style={{
          backgroundImage: `linear-gradient(135deg, rgba(79, 70, 229, 0.8), rgba(6, 182, 212, 0.8)), url(${techHeroSectionBg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed'
        }}
      />
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        {/* Logo */}
        <div className="mb-8 animate-bounce-in">
          <div className="inline-flex items-center justify-center w-24 h-24 bg-gradient-to-br from-service-icon-bg to-accent/20 rounded-full mb-6 animate-float hover:scale-110 transition-all duration-500 shadow-lg shadow-accent/20">
            <img src={vertatechLogo} alt="VertaTech Solutions" className="w-20 h-20 rounded-full" />
          </div>
        </div>

        {/* Main Heading */}
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-hero-text mb-6 animate-fade-in">
          Revolutionize Your Business with{" "}
          <span className="text-accent animate-slide-in-right bg-gradient-to-r from-accent to-secondary bg-clip-text text-transparent">Next-Gen Technology</span>
        </h1>

        {/* Subheading */}
        <h2 className="text-xl md:text-2xl lg:text-3xl text-hero-text/90 mb-8 font-light animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
          Leading East Africa's Digital Transformation Revolution
        </h2>

        {/* Description */}
        <p className="text-lg md:text-xl text-hero-text/80 max-w-4xl mx-auto mb-12 leading-relaxed animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
          Unleash your business potential with enterprise-grade solutions that redefine excellence. From 
          bulletproof cybersecurity and intelligent networking to revolutionary software development - we architect 
          the future of your success with precision, innovation, and unmatched expertise.
        </p>

        {/* Services Icons */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-2xl mx-auto mb-12">
          {services.map((service, index) => (
            <div
              key={service.label}
              className="flex flex-col items-center space-y-2 group cursor-pointer animate-scale-in hover-scale"
              style={{ animationDelay: `${0.6 + index * 0.1}s` }}
            >
              <div className="w-16 h-16 bg-service-icon-bg rounded-full flex items-center justify-center group-hover:bg-gradient-to-br group-hover:from-accent/20 group-hover:to-secondary/20 transition-all duration-500 group-hover:scale-110 group-hover:rotate-6 group-hover:shadow-lg group-hover:shadow-accent/25">
                <service.icon className="h-8 w-8 text-hero-text group-hover:text-accent transition-colors duration-300" />
              </div>
              <span className="text-sm text-hero-text/90 font-medium text-center group-hover:text-accent transition-colors duration-300">
                {service.label}
              </span>
            </div>
          ))}
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in-up" style={{ animationDelay: '1s' }}>
          <Button 
            size="lg" 
            className="bg-gradient-to-r from-secondary to-accent text-primary hover:from-secondary/90 hover:to-accent/90 shadow-lg shadow-secondary/25 group min-w-[160px] hover:scale-110 transition-all duration-300 pulse"
            onClick={() => window.open("https://wa.me/254720496076?text=Hello%20VertaTech%2C%20I%27m%20interested%20in%20your%20technology%20services", "_blank")}
          >
            Get Service Now
            <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-2 transition-transform duration-300" />
          </Button>
          
          <Button 
            size="lg" 
            variant="outline" 
            className="border-hero-text/30 text-hero-text hover:bg-gradient-to-r hover:from-hero-text/10 hover:to-accent/10 hover:border-accent/50 min-w-[140px] hover:scale-105 transition-all duration-300 sm:inline-flex hidden"
            onClick={() => window.location.href = '/contact'}
          >
            Learn More
          </Button>

          {/* Phone number button - only visible on mobile */}
          <Button 
            size="lg" 
            variant="outline"
            className="border-hero-text/30 text-hero-text hover:bg-gradient-to-r hover:from-hero-text/10 hover:to-accent/10 hover:border-accent/50 min-w-[180px] hover:scale-105 transition-all duration-300 group sm:hidden"
            onClick={() => window.open("tel:+254720496076", "_self")}
          >
            <Phone className="mr-2 h-4 w-4 group-hover:animate-pulse transition-all" />
            +254 720 496 076
          </Button>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
          <div className="w-6 h-10 border-2 border-hero-text/30 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-hero-text/50 rounded-full mt-2 animate-bounce" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;