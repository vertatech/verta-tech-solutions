import Navigation from "@/components/ui/navigation";
import HeroSection from "@/components/hero-section";
import WorkShowcase from "@/components/work-showcase";
import LiveChat from "@/components/live-chat";
import Footer from "@/components/footer";
import SEOHead from "@/components/seo-head";
import { useEffect, useRef, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Shield, Network, Camera, Code, Users, Target } from "lucide-react";

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
    { icon: Shield, title: "Advanced Security", description: "Enterprise-grade cybersecurity solutions" },
    { icon: Network, title: "Network Infrastructure", description: "Reliable connectivity and system integration" },
    { icon: Camera, title: "CCTV Systems", description: "Professional surveillance and monitoring" },
    { icon: Code, title: "Software Development", description: "Custom applications and digital solutions" },
    { icon: Users, title: "Expert Consultancy", description: "Strategic technology guidance and support" },
    { icon: Target, title: "Business Solutions", description: "Comprehensive digital transformation services" }
  ];

  return (
    <div className="min-h-screen bg-background">
      <SEOHead 
        title="VertaTech Solutions - Leading Kenya's Digital Transformation"
        description="Expert technology solutions in Kenya. Specializing in networking, security systems, CCTV installation, custom software development, and digital transformation services."
        keywords="technology solutions Kenya, networking services, CCTV installation, software development, digital transformation, IT consulting, cybersecurity, web development, system integration"
        canonical="https://vertatechsolutions.co.ke"
      />
      
      <Navigation />
      <HeroSection />
      
      {/* Dynamic Features Section */}
      <section className="py-20 bg-subtle-gradient">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Why Choose VertaTech Solutions?
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              We deliver comprehensive technology solutions that drive business growth and digital transformation across Kenya
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {features.map((feature, index) => (
              <Card 
                key={index} 
                className="p-6 text-center shadow-card hover:shadow-soft transition-all duration-300 animate-scale-in hover-scale"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-0">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <feature.icon className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <WorkShowcase />
      
      {/* YouTube Video Section with Autoplay */}
      <section className="py-16 bg-subtle-gradient overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 animate-fade-in-up">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Watch Our Story
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Discover how VertaTech Solutions is transforming Kenya's digital landscape
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto animate-scale-in" style={{ animationDelay: '0.3s' }}>
            <div className="relative w-full h-0 pb-[56.25%] rounded-xl overflow-hidden shadow-soft hover:shadow-card transition-all duration-500 group">
              <iframe
                ref={videoRef}
                className="absolute top-0 left-0 w-full h-full group-hover:scale-105 transition-transform duration-500"
                src="https://www.youtube.com/embed/zfNGsJk7AGU?enablejsapi=1&autoplay=0&mute=1"
                title="VertaTech Solutions - Company Overview"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      </section>
      
      <LiveChat />
      <Footer />
    </div>
  );
};

export default Index;
