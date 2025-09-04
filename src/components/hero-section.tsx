import { Button } from "@/components/ui/button";
import { ArrowRight, Network, Shield, Eye, Smartphone } from "lucide-react";
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
          <div className="inline-flex items-center justify-center w-24 h-24 bg-service-icon-bg rounded-full mb-6 animate-float">
            <img src={vertatechLogo} alt="VertaTech Solutions" className="w-20 h-20 rounded-full" />
          </div>
        </div>

        {/* Main Heading */}
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-hero-text mb-6 animate-fade-in">
          Welcome to{" "}
          <span className="text-accent animate-slide-in-right">VertaTech</span>{" "}
          Solutions
        </h1>

        {/* Subheading */}
        <h2 className="text-xl md:text-2xl lg:text-3xl text-hero-text/90 mb-8 font-light animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
          Navigating Kenya's Digital Frontier
        </h2>

        {/* Description */}
        <p className="text-lg md:text-xl text-hero-text/80 max-w-4xl mx-auto mb-12 leading-relaxed animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
          We are your strategic partner in shaping a thriving digital future for your business or 
          organization across Kenya. We specialize in providing robust solutions that empower you 
          to excel in today's rapidly evolving technological landscape.
        </p>

        {/* Services Icons */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-2xl mx-auto mb-12">
          {services.map((service, index) => (
            <div
              key={service.label}
              className="flex flex-col items-center space-y-2 group cursor-pointer animate-scale-in"
              style={{ animationDelay: `${0.6 + index * 0.1}s` }}
            >
              <div className="w-16 h-16 bg-service-icon-bg rounded-full flex items-center justify-center group-hover:bg-white/20 transition-all duration-300 group-hover:scale-110 group-hover:rotate-3">
                <service.icon className="h-8 w-8 text-hero-text" />
              </div>
              <span className="text-sm text-hero-text/90 font-medium text-center">
                {service.label}
              </span>
            </div>
          ))}
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in-up" style={{ animationDelay: '1s' }}>
          <Button 
            size="lg" 
            className="bg-secondary text-primary hover:bg-secondary/90 shadow-button group min-w-[140px] hover:scale-105 transition-all duration-300"
            onClick={() => window.location.href = '/services'}
          >
            Get Started
            <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </Button>
          
          <Button 
            size="lg" 
            variant="outline" 
            className="border-hero-text/30 text-hero-text hover:bg-hero-text/10 min-w-[140px] hover:scale-105 transition-all duration-300"
            onClick={() => window.location.href = '/contact'}
          >
            Learn More
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