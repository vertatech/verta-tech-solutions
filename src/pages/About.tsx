import Navigation from "@/components/ui/navigation";
import { Card, CardContent } from "@/components/ui/card";
import { Users, Target, Award, Globe, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";
import LiveChat from "@/components/live-chat";
import Footer from "@/components/footer";
import SEOHead from "@/components/seo-head";
import bramwelImage from "@/assets/bramwel-ceo.png";
import venaImage from "@/assets/vena-coo.png";
import jamesImage from "@/assets/james-cto.jpg";
import aboutBg from "@/assets/about-bg.jpg";

const About = () => {
  const stats = [
    { icon: Users, label: "Happy Clients", value: "500+" },
    { icon: Target, label: "Projects Completed", value: "1000+" },
    { icon: Award, label: "Years Experience", value: "10+" },
    { icon: Globe, label: "Counties Served", value: "20+" }
  ];

  return (
    <div className="min-h-screen bg-background">
      <SEOHead 
        title="About VertaTech Solutions - Leading IT Company in Kenya"
        description="Learn about VertaTech Solutions, Kenya's premier technology company specializing in networking, cybersecurity, CCTV systems, and digital transformation services."
        keywords="about VertaTech, IT company Kenya, technology solutions, networking experts, cybersecurity specialists, digital transformation"
        canonical="https://vertatechsolutions.co.ke/about"
      />
      <Navigation />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section 
          className="relative py-20 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)), url(${aboutBg})` }}
        >
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 animate-fade-in">
              About VertaTech Solutions
            </h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto animate-fade-in" style={{ animationDelay: '0.2s' }}>
              Leading Kenya's digital transformation with innovative technology solutions and expert consulting services.
            </p>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
              {stats.map((stat, index) => (
                <Card key={index} className="text-center shadow-card">
                  <CardContent className="p-6">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                      <stat.icon className="h-6 w-6 text-primary" />
                    </div>
                    <div className="text-3xl font-bold text-primary mb-2">{stat.value}</div>
                    <div className="text-muted-foreground">{stat.label}</div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Technology Behind Our Services */}
            <div className="max-w-6xl mx-auto mb-20">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold mb-6">The Technology Behind Our Services</h2>
                <p className="text-lg text-muted-foreground max-w-4xl mx-auto">
                  VertaTech Solutions is dedicated to building and securing your digital world through comprehensive business solutions across all technology domains.
                </p>
              </div>
              
              <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
                <div>
                  <p className="text-lg text-muted-foreground mb-6">
                    We specialize in comprehensive digital transformation services: From Web & System Development creating custom websites and robust internal systems, to CCTV & Network Installations providing secure surveillance and reliable connectivity infrastructure.
                  </p>
                  <p className="text-lg text-muted-foreground">
                    Our expertise extends to Biometric Attendance Systems, Graphic Design & Video Editing for compelling brand narratives, Business Consultations & Registrations including KRA compliance, and ICT Equipment & Software Supply ensuring you have the right technological foundation for success.
                  </p>
                </div>
                <div className="bg-subtle-gradient p-8 rounded-lg">
                  <h3 className="text-2xl font-bold mb-6 text-center">Learn More About Us</h3>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="text-center">
                      <h4 className="font-semibold mb-2">Client-Focused</h4>
                      <p className="text-sm text-muted-foreground">We focus on the client's needs – understand their requirements and deliver tailored solutions.</p>
                    </div>
                    <div className="text-center">
                      <h4 className="font-semibold mb-2">Expert Team</h4>
                      <p className="text-sm text-muted-foreground">We empower our teams with the latest knowledge and tools to deliver the most effective services.</p>
                    </div>
                    <div className="text-center">
                      <h4 className="font-semibold mb-2">Quality Excellence</h4>
                      <p className="text-sm text-muted-foreground">We have one goal in mind: unwavering client satisfaction, achieved through exceptional support.</p>
                    </div>
                    <div className="text-center">
                      <h4 className="font-semibold mb-2">Growth Partnership</h4>
                      <p className="text-sm text-muted-foreground">We are committed to delivering excellence and fostering growth, wherever you are in Kenya.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Mission & Vision */}
            <div className="max-w-4xl mx-auto mb-20">
              <div className="grid md:grid-cols-2 gap-12">
                <Card className="p-8">
                  <h3 className="text-2xl font-bold mb-4 text-primary">Our Mission</h3>
                  <p className="text-muted-foreground">
                    To transform businesses across Kenya through innovative technology solutions that drive efficiency, security, and growth. We are committed to delivering exceptional IT services that empower our clients to achieve their strategic objectives and stay ahead in an increasingly digital world.
                  </p>
                </Card>
                <Card className="p-8">
                  <h3 className="text-2xl font-bold mb-4 text-primary">Our Vision</h3>
                  <p className="text-muted-foreground">
                    To be Kenya's leading technology solutions provider, recognized for excellence in network infrastructure, cybersecurity, and digital innovation. We envision a future where every business, regardless of size, has access to enterprise-grade technology solutions that enable sustainable growth and competitive advantage.
                  </p>
                </Card>
              </div>
            </div>

            {/* Core Values */}
            <div className="max-w-6xl mx-auto mb-20">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Core Values</h2>
              </div>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                <Card className="p-6 text-center">
                  <h4 className="text-xl font-bold mb-3 text-primary">Excellence</h4>
                  <p className="text-muted-foreground">We deliver superior quality in every project, ensuring our solutions exceed expectations and drive real business value.</p>
                </Card>
                <Card className="p-6 text-center">
                  <h4 className="text-xl font-bold mb-3 text-primary">Innovation</h4>
                  <p className="text-muted-foreground">We embrace cutting-edge technologies and creative approaches to solve complex business challenges.</p>
                </Card>
                <Card className="p-6 text-center">
                  <h4 className="text-xl font-bold mb-3 text-primary">Integrity</h4>
                  <p className="text-muted-foreground">We conduct business with transparency, honesty, and ethical practices in all our client relationships.</p>
                </Card>
                <Card className="p-6 text-center">
                  <h4 className="text-xl font-bold mb-3 text-primary">Partnership</h4>
                  <p className="text-muted-foreground">We build long-term relationships with our clients, becoming their trusted technology advisors and growth partners.</p>
                </Card>
                <Card className="p-6 text-center">
                  <h4 className="text-xl font-bold mb-3 text-primary">Security</h4>
                  <p className="text-muted-foreground">We prioritize cybersecurity in every solution, protecting our clients' digital assets and ensuring business continuity.</p>
                </Card>
                <Card className="p-6 text-center">
                  <h4 className="text-xl font-bold mb-3 text-primary">Growth</h4>
                  <p className="text-muted-foreground">We are committed to continuous learning and adaptation, staying ahead of technology trends to serve our clients better.</p>
                </Card>
              </div>
            </div>

            {/* Team Section */}
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Leadership Team</h2>
                <p className="text-lg text-muted-foreground">Meet the experts driving VertaTech's vision forward</p>
              </div>
              <div className="grid md:grid-cols-3 gap-8">
                <Card className="p-6 text-center shadow-card hover:shadow-soft transition-all duration-300">
                  <div className="w-32 h-32 rounded-full mx-auto mb-4 overflow-hidden border-4 border-primary/20">
                    <img src={bramwelImage} alt="Bramwel Obae" className="w-full h-full object-cover" />
                  </div>
                  <h4 className="text-xl font-bold mb-2">Bramwel Obae</h4>
                  <p className="text-primary font-semibold mb-2">Chief Executive Officer</p>
                  <p className="text-muted-foreground text-sm mb-4">Strategic leadership and business development visionary</p>
                  <Button 
                    size="sm" 
                    variant="outline" 
                    className="p-2"
                    onClick={() => window.open("https://www.linkedin.com/in/bramwel-obae1/", "_blank")}
                  >
                    <Linkedin className="h-4 w-4" />
                  </Button>
                </Card>
                <Card className="p-6 text-center shadow-card hover:shadow-soft transition-all duration-300">
                  <div className="w-32 h-32 rounded-full mx-auto mb-4 overflow-hidden border-4 border-primary/20">
                    <img src={jamesImage} alt="James" className="w-full h-full object-cover" />
                  </div>
                  <h4 className="text-xl font-bold mb-2">James</h4>
                  <p className="text-primary font-semibold mb-2">Chief Technology Officer</p>
                  <p className="text-muted-foreground text-sm mb-4">Technology strategy and innovation leader</p>
                  <Button 
                    size="sm" 
                    variant="outline" 
                    className="p-2"
                    onClick={() => window.open("https://www.linkedin.com/in/james-tech-expert/", "_blank")}
                  >
                    <Linkedin className="h-4 w-4" />
                  </Button>
                </Card>
                <Card className="p-6 text-center shadow-card hover:shadow-soft transition-all duration-300">
                  <div className="w-32 h-32 rounded-full mx-auto mb-4 overflow-hidden border-4 border-primary/20">
                    <img src={venaImage} alt="Vena Okode" className="w-full h-full object-cover" />
                  </div>
                  <h4 className="text-xl font-bold mb-2">Vena Okode</h4>
                  <p className="text-primary font-semibold mb-2">Chief Operations Officer</p>
                  <p className="text-muted-foreground text-sm mb-4">Operations excellence and efficiency expert</p>
                  <Button 
                    size="sm" 
                    variant="outline" 
                    className="p-2"
                    onClick={() => window.open("https://www.linkedin.com/in/vena-okode-b6b006196/", "_blank")}
                  >
                    <Linkedin className="h-4 w-4" />
                  </Button>
                </Card>
              </div>
            </div>
          </div>
        </section>
      </main>
      <LiveChat />
      <Footer />
    </div>
  );
};

export default About;