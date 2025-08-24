import Navigation from "@/components/ui/navigation";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Network, Shield, Eye, Smartphone, Server, Wifi, Camera, Code } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Network,
      title: "Networking Solutions",
      description: "Complete network infrastructure setup, configuration, and maintenance for businesses of all sizes.",
      features: ["LAN/WAN Setup", "Router Configuration", "Network Security", "Wireless Solutions"]
    },
    {
      icon: Shield,
      title: "Security Systems",
      description: "Comprehensive security solutions to protect your business assets and ensure peace of mind.",
      features: ["Access Control", "Intrusion Detection", "Alarm Systems", "Security Consulting"]
    },
    {
      icon: Eye,
      title: "CCTV Installation",
      description: "Professional CCTV systems with remote monitoring capabilities and high-definition recording.",
      features: ["HD Cameras", "Remote Monitoring", "Night Vision", "Cloud Storage"]
    },
    {
      icon: Smartphone,
      title: "System, Web & Mobile Apps",
      description: "Custom software development services including web applications, mobile apps, and enterprise systems.",
      features: ["Web Development", "Mobile Apps", "Custom Software", "API Integration"]
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="bg-hero-gradient py-20">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-hero-text mb-6">
              Our Services
            </h1>
            <p className="text-xl text-hero-text/90 max-w-3xl mx-auto">
              Comprehensive technology solutions designed to transform your business and drive digital success.
            </p>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-8">
              {services.map((service, index) => (
                <Card key={index} className="shadow-card hover:shadow-soft transition-all duration-300">
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
                    <Button className="w-full">Learn More</Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Services;