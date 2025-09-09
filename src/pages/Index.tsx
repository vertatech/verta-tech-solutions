import Navigation from "@/components/ui/navigation";
import HeroSection from "@/components/hero-section";
import WorkShowcase from "@/components/work-showcase";
import LiveChat from "@/components/live-chat";
import Footer from "@/components/footer";
import SEOHead from "@/components/seo-head";
import { useEffect, useRef, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Shield, Network, Camera, Code, Users, Target, Phone, Mail, MapPin, ArrowRight, Star, CheckCircle } from "lucide-react";
import webDevHeroBg from "@/assets/web-dev-hero-bg.jpg";

const Index = () => {
  const videoRef = useRef(null);
  const [isVideoInView, setIsVideoInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVideoInView(entry.isIntersecting);
        if (entry.isIntersecting) {
          videoRef.current?.contentWindow.postMessage('{"event":"command","func":"playVideo","args":""}', '*');
        } else {
          videoRef.current?.contentWindow.postMessage('{"event":"command","func":"pauseVideo","args":""}', '*');
        }
      },
      { threshold: 0.5 }
    );

    if (videoRef.current) {
      observer.observe(videoRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const features = [
    { 
      icon: Shield, 
      title: "Advanced Security", 
      description: "Enterprise-grade cybersecurity solutions",
      details: "Protect your business with comprehensive security protocols"
    },
    { 
      icon: Network, 
      title: "Network Infrastructure", 
      description: "Reliable connectivity and system integration",
      details: "Seamless network solutions for optimal performance"
    },
    { 
      icon: Camera, 
      title: "CCTV Systems", 
      description: "Professional surveillance and monitoring",
      details: "24/7 security monitoring with HD quality systems"
    },
    { 
      icon: Code, 
      title: "Software Development", 
      description: "Custom applications and digital solutions",
      details: "Tailored software solutions for your unique needs"
    },
    { 
      icon: Users, 
      title: "Expert Consultancy", 
      description: "Strategic technology guidance and support",
      details: "Professional IT consulting for business growth"
    },
    { 
      icon: Target, 
      title: "Business Solutions", 
      description: "Comprehensive digital transformation services",
      details: "End-to-end digital transformation strategies"
    }
  ];

  const stats = [
    { number: "25+", label: "Projects Completed", icon: CheckCircle },
    { number: "99%", label: "Client Satisfaction", icon: Star },
    { number: "24/7", label: "Support Available", icon: Users },
    { number: "3+", label: "Years Experience", icon: Target }
  ];

  const testimonials = [
    {
      name: "Godwin Indimuli",
      company: "Tech Wave Solutions",
      text: "VertaTech transformed our entire IT infrastructure. Exceptional service and results!",
      rating: 5
    },
    {
      name: "Mary Wanjiku",
      company: "Retail Plus Kenya",
      text: "Professional CCTV installation and outstanding support. Highly recommended!",
      rating: 5
    },
    {
      name: "David Oketch",
      company: "Zenith Solutions",
      text: "Their custom software solution streamlined our operations perfectly.",
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen bg-professional-bg bg-cover bg-center bg-fixed relative smooth-scroll" style={{backgroundImage: `url(${webDevHeroBg})`}}>
      <div className="absolute inset-0 bg-professional-bg/80 backdrop-blur-[1px]"></div>
      <div className="relative z-10">
      <SEOHead 
        title="VertaTech Solutions - Leading Kenya's Digital Transformation"
        description="Expert technology solutions in Kenya. Specializing in networking, security systems, CCTV installation, custom software development, and digital transformation services."
        keywords="technology solutions Kenya, networking services, CCTV installation, software development, digital transformation, IT consulting, cybersecurity, web development, system integration"
        canonical="https://vertatechsolution.com"
      />
      
      <Navigation />
      <HeroSection />

      <WorkShowcase />
      
      {/* YouTube Video Section with Autoplay */}
      <section className="py-12 sm:py-16 bg-professional-secondary overflow-hidden">
        <div className="container mx-auto mobile-padding">
          <div className="text-center mb-8 sm:mb-12 animate-fade-in">
            <h2 className="mobile-heading font-bold text-professional-accent mb-4">
              Watch Our Story
            </h2>
            <p className="mobile-text text-professional-accent/80 max-w-2xl mx-auto">
              Discover how VertaTech Solutions is transforming Kenya's digital landscape
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="relative w-full h-0 pb-[56.25%] rounded-xl overflow-hidden shadow-soft border border-primary/20 animate-scale-in" style={{ animationDelay: '0.2s' }}>
              <iframe
                ref={videoRef}
                className="absolute top-0 left-0 w-full h-full"
                src="https://www.youtube.com/embed/WrHq0LA37qE?si=A4_Dl5XmZxs7ALZQ?enablejsapi=1&autoplay=0&mute=1"
                title="VertaTech Solutions - Company Overview"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      </section>

      {/* Dynamic Features Section */}
      <section className="py-20 bg-gradient-professional">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold text-professional-accent mb-6">
              Why Choose VertaTech Solutions?
            </h2>
            <p className="text-lg text-professional-accent/80 max-w-3xl mx-auto">
              We deliver comprehensive technology solutions that drive business growth and digital transformation across Kenya
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {features.map((feature, index) => (
              <Card 
                key={index} 
                className="group p-6 text-center bg-professional-secondary/50 border-primary/20 shadow-card hover:shadow-soft transition-all duration-300 backdrop-blur-sm hover-scale animate-scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-0">
                  <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/30 transition-colors duration-300">
                    <feature.icon className="h-8 w-8 text-accent group-hover:scale-110 transition-transform duration-300" />
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-professional-accent group-hover:text-primary transition-colors duration-300">{feature.title}</h3>
                  <p className="text-professional-accent/70 mb-4">{feature.description}</p>
                  <p className="text-sm text-primary/80 font-medium">{feature.details}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 sm:py-16 bg-professional-secondary/30 backdrop-blur-sm">
        <div className="container mx-auto mobile-padding">
          <div className="text-center mb-8 sm:mb-12 animate-fade-in">
            <h2 className="mobile-heading font-bold text-professional-accent mb-4">
              Our Track Record
            </h2>
            <p className="mobile-text text-professional-accent/80 max-w-2xl mx-auto">
              Numbers that speak for our commitment to excellence
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
            {stats.map((stat, index) => (
              <div 
                key={index} 
                className="text-center group animate-scale-in p-4 rounded-lg hover:bg-white/50 transition-all duration-300"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4 group-hover:bg-primary/30 transition-colors duration-300">
                  <stat.icon className="h-6 w-6 sm:h-8 sm:w-8 text-accent group-hover:scale-110 transition-transform duration-300" />
                </div>
                <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-professional-accent mb-2 group-hover:text-primary transition-colors duration-300">
                  {stat.number}
                </div>
                <div className="text-xs sm:text-sm text-professional-accent/70 font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 sm:py-20 bg-gradient-professional">
        <div className="container mx-auto mobile-padding">
          <div className="text-center mb-12 sm:mb-16 animate-fade-in">
            <h2 className="mobile-heading font-bold text-professional-accent mb-4">
              What Our Clients Say
            </h2>
            <p className="mobile-text text-professional-accent/80 max-w-2xl mx-auto">
              Real feedback from satisfied clients across Kenya
            </p>
          </div>
          
          <div className="grid gap-6 sm:gap-8 md:grid-cols-2 lg:grid-cols-3">
            {testimonials.map((testimonial, index) => (
              <Card 
                key={index} 
                className="p-4 sm:p-6 bg-professional-secondary/50 border-primary/20 shadow-card hover:shadow-soft transition-all duration-300 backdrop-blur-sm animate-scale-in hover-scale"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-0">
                  <div className="flex justify-center mb-4">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star 
                        key={i} 
                        className={`h-4 w-4 sm:h-5 sm:w-5 ${
                          i < testimonial.rating 
                            ? 'fill-yellow-400 text-yellow-400' 
                            : 'text-gray-300'
                        }`} 
                      />
                    ))}
                  </div>
                  <p className="text-professional-accent/80 mb-4 sm:mb-6 italic text-sm sm:text-base leading-relaxed">
                    "{testimonial.text}"
                  </p>
                  <div className="text-center">
                    <p className="font-bold text-professional-accent text-sm sm:text-base">{testimonial.name}</p>
                    <p className="text-xs sm:text-sm text-primary">{testimonial.company}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 sm:py-20 bg-professional-secondary/50 backdrop-blur-sm">
        <div className="container mx-auto mobile-padding">
          <div className="max-w-4xl mx-auto text-center animate-fade-in">
            <h2 className="mobile-heading font-bold text-professional-accent mb-4 sm:mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="mobile-text text-professional-accent/80 mb-6 sm:mb-8 max-w-2xl mx-auto">
              Join hundreds of satisfied clients who have revolutionized their operations with our technology solutions.
            </p>
            
            <div className="mobile-button-group justify-center mb-8 sm:mb-12">
              <Button 
                size="lg" 
                className="bg-primary hover:bg-primary/90 text-white shadow-button animate-scale-in group mobile-button touch-target"
                style={{ animationDelay: '0.2s' }}
                onClick={() => window.open("https://wa.me/254720496076?text=Hello%20VertaTech%2C%20I%27m%20interested%20in%20your%20services", "_blank")}
              >
                <Phone size={20} className="mr-2 group-hover:rotate-12 transition-transform duration-300" />
                <span className="mobile-text font-semibold">Get Free Consultation</span>
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-primary/30 text-professional-accent hover:bg-primary/10 animate-scale-in group mobile-button touch-target"
                style={{ animationDelay: '0.4s' }}
                onClick={() => window.open("mailto:info@vertatechsolution.com", "_blank")}
              >
                <Mail size={20} className="mr-2 group-hover:scale-110 transition-transform duration-300" />
                <span className="mobile-text font-semibold">Email Us</span>
              </Button>
            </div>
            
            <div className="grid gap-4 sm:gap-6 md:grid-cols-3 text-xs sm:text-sm text-professional-accent/70">
              <div className="flex items-center justify-center p-3 rounded-lg bg-white/30 backdrop-blur-sm">
                <Phone size={16} className="mr-2 text-primary flex-shrink-0" />
                <span className="mobile-text">+254 720 496 076</span>
              </div>
              <div className="flex items-center justify-center p-3 rounded-lg bg-white/30 backdrop-blur-sm">
                <Mail size={16} className="mr-2 text-primary flex-shrink-0" />
                <span className="mobile-text truncate">info@vertatechsolution.com</span>
              </div>
              <div className="flex items-center justify-center p-3 rounded-lg bg-white/30 backdrop-blur-sm">
                <MapPin size={16} className="mr-2 text-primary flex-shrink-0" />
                <span className="mobile-text">Nairobi, Kenya</span>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <LiveChat />
      <Footer />
      </div>
    </div>
  );
};

export default Index;
