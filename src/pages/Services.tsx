import Navigation from "@/components/ui/navigation";
import LiveChat from "@/components/live-chat";
import Footer from "@/components/footer";
import SEOHead from "@/components/seo-head";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Network, Shield, Eye, Smartphone, Server, Wifi, Camera, Code } from "lucide-react";
import servicesBg from "@/assets/services-bg.jpg";

const Services = () => {
  // Contact handler for service inquiries
  const handleGetService = (serviceName) => {
    const message = `Hello VertaTech! I'm interested in your ${serviceName} service. Could you please provide more information?`;
    window.open(`https://wa.me/254720496076?text=${encodeURIComponent(message)}`, "_blank");
  };

  const services = [
    {
      icon: Code,
      title: "Web & System Development",
      description: "Custom websites, web applications, and robust internal systems designed to enhance your online presence and streamline operations.",
      features: ["Custom Websites", "E-commerce Platforms", "Management Systems", "Web Applications"]
    },
    {
      icon: Smartphone,
      title: "Mobile App Development",
      description: "Native and cross-platform mobile applications for iOS and Android, designed to provide seamless user experiences and expand your business reach.",
      features: ["iOS Applications", "Android Applications", "Cross-Platform Apps", "App Store Deployment"]
    },
    {
      icon: Eye,
      title: "CCTV & Network Installations",
      description: "Professional CCTV surveillance systems and network infrastructure for secure, high-speed connectivity across your organization.",
      features: ["HD Camera Systems", "Network Security", "Remote Monitoring", "WiFi Configuration"]
    },
    {
      icon: Network,
      title: "Biometric Attendance Systems",
      description: "Advanced biometric systems for accurate workforce management and secure access control solutions.",
      features: ["Fingerprint Recognition", "Attendance Tracking", "Access Control", "Payroll Integration"]
    },
    {
      icon: Camera,
      title: "Graphic Design & Video Editing",
      description: "Professional creative services bringing your brand vision to life through compelling visual content and narratives.",
      features: ["Brand Design", "Marketing Materials", "Video Production", "Digital Content"]
    },
    {
      icon: Server,
      title: "Business Consultations & Registration",
      description: "Expert guidance for business setup, KRA registration, and strategic advice for operational efficiency and growth.",
      features: ["Business Registration", "KRA Compliance", "Strategic Planning", "Market Entry"]
    },
    {
      icon: Wifi,
      title: "ICT Equipment & Software Supply",
      description: "Reliable sourcing of high-quality ICT equipment and licensed software solutions to meet your operational needs.",
      features: ["Computer Hardware", "Networking Equipment", "Licensed Software", "Technical Support"]
    },
    {
      icon: Shield,
      title: "IT Security Solutions",
      description: "Comprehensive security measures to protect your business from cyber threats and ensure data integrity.",
      features: ["Firewall Configuration", "Antivirus Solutions", "Data Backup", "Security Audits"]
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <SEOHead 
        title="Technology Services - VertaTech Solutions Kenya"
        description="Comprehensive IT services including web development, mobile apps, CCTV systems, networking, and digital transformation solutions across Kenya."
        keywords="IT services Kenya, web development, mobile app development, CCTV installation, networking services, business consultation, ICT equipment"
        canonical="https://vertatechsolutions.co.ke/services"
      />
      <Navigation />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section 
          className="relative py-20 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)), url(${servicesBg})` }}
        >
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 animate-fade-in">
              Our Services
            </h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto animate-fade-in" style={{ animationDelay: '0.2s' }}>
              Comprehensive technology solutions designed to transform your business and drive digital success.
            </p>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-20 bg-subtle-gradient">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-8">
              {services.map((service, index) => (
                <Card 
                  key={index} 
                  className="shadow-card hover:shadow-soft transition-all duration-300 animate-scale-in hover-scale"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <CardHeader>
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                        <service.icon className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <CardTitle className="text-xl">{service.title}</CardTitle>
                      </div>
                    </div>
                    <CardDescription className="text-base mt-4">
                      {service.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 mb-6">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center space-x-2">
                          <div className="w-2 h-2 bg-accent rounded-full" />
                          <span className="text-muted-foreground">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <div className="mt-6">
                      <Button 
                        onClick={() => handleGetService(service.title)}
                        className="w-full bg-primary hover:bg-primary/90 text-white"
                      >
                        Get Service
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </main>
      <LiveChat />
      <Footer />
    </div>
  );
};

export default Services;