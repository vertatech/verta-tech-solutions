import Navigation from "@/components/ui/navigation";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Handshake, TrendingUp, Users, Award, Globe, Target } from "lucide-react";

const Partner = () => {
  const partnerBenefits = [
    {
      icon: TrendingUp,
      title: "Revenue Growth",
      description: "Access to high-value technology projects and recurring revenue opportunities"
    },
    {
      icon: Users,
      title: "Network Expansion",
      description: "Connect with industry leaders and expand your professional network"
    },
    {
      icon: Award,
      title: "Certification Programs",
      description: "Exclusive training and certification programs to enhance your expertise"
    },
    {
      icon: Globe,
      title: "Market Reach",
      description: "Leverage our brand and market presence to reach new customers"
    }
  ];

  const partnerTypes = [
    {
      title: "Technology Partners",
      description: "Software and hardware vendors looking to expand their reach in Kenya",
      benefits: ["Product integration support", "Co-marketing opportunities", "Technical training"],
      requirements: ["Proven track record", "Quality products/services", "Local support capability"]
    },
    {
      title: "Reseller Partners",
      description: "Sales organizations wanting to offer our technology solutions",
      benefits: ["Competitive margins", "Sales training", "Marketing support"],
      requirements: ["Established customer base", "Sales experience", "Market knowledge"]
    },
    {
      title: "Implementation Partners",
      description: "System integrators and consultants specializing in technology deployment",
      benefits: ["Technical certification", "Project referrals", "Implementation training"],
      requirements: ["Technical expertise", "Implementation experience", "Certified professionals"]
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
              Partner With Us
            </h1>
            <p className="text-xl text-hero-text/90 max-w-3xl mx-auto">
              Join VertaTech's partner ecosystem and grow your business while delivering cutting-edge technology solutions across Kenya.
            </p>
          </div>
        </section>

        {/* Partner Benefits */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold mb-4">Why Partner With VertaTech?</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Unlock new opportunities and accelerate your growth with our comprehensive partner program
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
              {partnerBenefits.map((benefit, index) => (
                <Card key={index} className="text-center shadow-card hover:shadow-soft transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <benefit.icon className="h-8 w-8 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
                    <p className="text-muted-foreground">{benefit.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Partner Types */}
        <section className="py-20 bg-subtle-gradient">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold mb-4">Partnership Opportunities</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Choose the partnership model that best fits your business goals and capabilities
              </p>
            </div>

            <div className="grid lg:grid-cols-3 gap-8">
              {partnerTypes.map((type, index) => (
                <Card key={index} className="shadow-card">
                  <CardHeader>
                    <CardTitle className="text-xl flex items-center">
                      <Handshake className="h-6 w-6 mr-2 text-primary" />
                      {type.title}
                    </CardTitle>
                    <CardDescription className="text-base">
                      {type.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-6">
                      <div>
                        <h4 className="font-semibold mb-3 flex items-center">
                          <Target className="h-4 w-4 mr-2 text-accent" />
                          Benefits
                        </h4>
                        <ul className="space-y-2">
                          {type.benefits.map((benefit, benefitIndex) => (
                            <li key={benefitIndex} className="flex items-center space-x-2">
                              <div className="w-1.5 h-1.5 bg-accent rounded-full" />
                              <span className="text-sm text-muted-foreground">{benefit}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div>
                        <h4 className="font-semibold mb-3">Requirements</h4>
                        <ul className="space-y-2">
                          {type.requirements.map((requirement, reqIndex) => (
                            <li key={reqIndex} className="flex items-center space-x-2">
                              <div className="w-1.5 h-1.5 bg-primary rounded-full" />
                              <span className="text-sm text-muted-foreground">{requirement}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <Card className="bg-hero-gradient text-center shadow-soft">
              <CardContent className="p-12">
                <h2 className="text-3xl font-bold text-hero-text mb-4">
                  Ready to Start Your Partnership Journey?
                </h2>
                <p className="text-xl text-hero-text/90 mb-8 max-w-2xl mx-auto">
                  Join our growing network of partners and unlock new opportunities for business growth and success.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button size="lg" className="bg-secondary text-primary hover:bg-secondary/90 shadow-button">
                    Apply to Partner
                  </Button>
                  <Button size="lg" variant="outline" className="border-hero-text/30 text-hero-text hover:bg-hero-text/10">
                    Download Partner Kit
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Partner;