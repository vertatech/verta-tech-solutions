import Navigation from "@/components/ui/navigation";
import LiveChat from "@/components/live-chat";
import Footer from "@/components/footer";
import SEOHead from "@/components/seo-head";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Handshake, TrendingUp, Users, Award, Globe, Target, 
  CheckCircle, Building, Brain, DollarSign, Zap, Shield 
} from "lucide-react";
import partnerBg from "@/assets/partner-bg.jpg";

const Partner = () => {
  const handleGetInTouch = () => {
    window.open("https://wa.me/254720496076?text=Hello%20VertaTech%2C%20I%27m%20interested%20in%20partnership%20opportunities", "_blank");
  };

  const handleEmail = () => {
    window.open("mailto:info@vertatechsolution.com?subject=Partnership%20Inquiry", "_blank");
  };

  const achievements = [
    { number: "25+", label: "Projects Delivered" },
    { number: "15+", label: "CCTV & Network Installations" },
    { number: "5+", label: "ICT Equipment Deployments" },
    { number: "100%", label: "Client Satisfaction" }
  ];

  const whyPartnerBenefits = [
    {
      icon: CheckCircle,
      title: "Proven Results",
      description: "Track record across diverse sectors with 25+ web development projects, 15+ CCTV installations, and 5+ ICT deployments."
    },
    {
      icon: Building,
      title: "Strategic Office Location",
      description: "Relocating to a larger, centrally-located office with client consultation areas and technical laboratories."
    },
    {
      icon: TrendingUp,
      title: "Strong Growth Potential",
      description: "Supported by East Africa's expanding digital economy with rising demand for digital transformation."
    },
    {
      icon: Brain,
      title: "Skilled & Committed Team",
      description: "Multidisciplinary team with certified qualifications in web development, network infrastructure, and cybersecurity."
    }
  ];

  const partnershipOpportunities = [
    {
      icon: DollarSign,
      title: "Equity-Based Partnerships",
      description: "Direct investment opportunities with ownership stake in our growing technology company"
    },
    {
      icon: Users,
      title: "Advisory & Strategic Input Roles",
      description: "Mentor our team with industry expertise while gaining equity or compensation"
    },
    {
      icon: Handshake,
      title: "Joint Ventures & Expansion Support",
      description: "Collaborate on specific projects or market expansion initiatives"
    },
    {
      icon: Zap,
      title: "Access to Future Rounds & Projects",
      description: "Priority access to upcoming funding rounds and exclusive project opportunities"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <SEOHead 
        title="Partner with VertaTech Solutions - Investment & Partnership Opportunities Kenya"
        description="Join VertaTech Solutions as a strategic partner. Explore investment opportunities, joint ventures, and partnership programs with Kenya's leading technology company."
        keywords="VertaTech partnership, technology investment Kenya, business partnership opportunities, IT company investment, startup partnership"
        canonical="https://vertatechsolutions.co.ke/partner"
      />
      <Navigation />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section 
          className="relative py-20 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)), url(${partnerBg})` }}
        >
          <div className="container mx-auto px-4 text-center">
            <div className="mb-8">
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 animate-fade-in">
                🚀 Partner With Us
              </h1>
              <h2 className="text-2xl md:text-3xl text-white/90 mb-6 animate-fade-in" style={{ animationDelay: '0.2s' }}>
                Join VertaTech Solutions in Powering East Africa's Digital Future
              </h2>
            </div>
            <p className="text-lg text-white/80 max-w-4xl mx-auto mb-8 animate-fade-in" style={{ animationDelay: '0.4s' }}>
              At VertaTech Solutions, we're building smart, practical technology solutions that drive real-world transformation across East Africa. As a dynamic Kenyan startup founded on innovation and excellence, we've already delivered measurable results for our clients while establishing ourselves as a trusted technology partner.
            </p>
            
            {/* Achievement Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto animate-scale-in" style={{ animationDelay: '0.6s' }}>
              {achievements.map((achievement, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl md:text-4xl font-bold text-accent mb-2">
                    {achievement.number}
                  </div>
                  <div className="text-white/80 text-sm">
                    {achievement.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Partner With Us */}
        <section className="py-20 bg-subtle-gradient">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16 animate-fade-in">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Partner With Us?</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Strong growth trajectory supported by East Africa's expanding digital economy
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {whyPartnerBenefits.map((benefit, index) => (
                <Card 
                  key={index} 
                  className="shadow-card hover:shadow-soft transition-all duration-300 animate-scale-in hover-scale"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                        <benefit.icon className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
                        <p className="text-muted-foreground">{benefit.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Partnership Opportunities */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16 animate-fade-in">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Partnering Opportunities</h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                We welcome strategic partnerships from diverse backgrounds — angel investors, experienced advisors, 
                technology companies, and fellow innovators passionate about driving digital transformation across East Africa.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-16">
              {partnershipOpportunities.map((opportunity, index) => (
                <Card 
                  key={index} 
                  className="shadow-card hover:shadow-soft transition-all duration-300 animate-scale-in hover-scale"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                        <opportunity.icon className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold mb-2">📌 {opportunity.title}</h3>
                        <p className="text-muted-foreground">{opportunity.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="text-center animate-fade-in" style={{ animationDelay: '0.6s' }}>
              <Card className="max-w-2xl mx-auto shadow-card">
                <CardContent className="p-8">
                  <Shield className="h-12 w-12 text-primary mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-4">Flexible Partnership Framework</h3>
                  <p className="text-muted-foreground mb-6">
                    No fixed investment amounts — we're open to structured discussions tailored to your goals and ours. 
                    Our flexible framework accommodates various collaboration models.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Button onClick={handleGetInTouch} size="lg" className="bg-accent hover:bg-accent/90">
                      Get In Touch
                    </Button>
                    <Button onClick={handleEmail} variant="outline" size="lg">
                      Email Partnership Team
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-subtle-gradient">
          <div className="container mx-auto px-4">
            <Card className="bg-hero-gradient text-center shadow-soft animate-fade-in">
              <CardContent className="p-12">
                <h2 className="text-3xl font-bold text-hero-text mb-4">
                  Ready to Start Your Partnership Journey?
                </h2>
                <p className="text-xl text-hero-text/90 mb-8 max-w-2xl mx-auto">
                  Join our growing network of partners and unlock new opportunities for business growth and success.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button 
                    size="lg" 
                    className="bg-secondary text-primary hover:bg-secondary/90 shadow-button animate-scale-in"
                    style={{ animationDelay: '0.2s' }}
                    onClick={() => window.open("mailto:info@vertatechsolution.com?subject=Partnership%20Application", "_blank")}
                  >
                    Apply to Partner
                  </Button>
                  <Button 
                    size="lg" 
                    variant="outline" 
                    className="border-hero-text/30 text-hero-text hover:bg-hero-text/10 animate-scale-in"
                    style={{ animationDelay: '0.4s' }}
                  >
                    Download Partner Kit
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>
      </main>
      <LiveChat />
      <Footer />
    </div>
  );
};

export default Partner;