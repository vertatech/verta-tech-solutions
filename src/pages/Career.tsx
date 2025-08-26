import Navigation from "@/components/ui/navigation";
import LiveChat from "@/components/live-chat";
import Footer from "@/components/footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { MapPin, Clock, DollarSign } from "lucide-react";

const Career = () => {
  const positions = [
    {
      title: "Senior Software Developer",
      department: "Development",
      location: "Nairobi, Kenya",
      type: "Full-time",
      salary: "KES 150,000 - 250,000",
      description: "Join our development team to build cutting-edge web and mobile applications for our clients.",
      requirements: ["5+ years experience", "React/Vue.js expertise", "Node.js knowledge", "Team leadership skills"]
    },
    {
      title: "Network Engineer",
      department: "Infrastructure",
      location: "Mombasa, Kenya",
      type: "Full-time",
      salary: "KES 120,000 - 180,000",
      description: "Design and implement network infrastructure solutions for enterprise clients.",
      requirements: ["CCNA certification", "3+ years experience", "Network security knowledge", "Project management skills"]
    },
    {
      title: "Digital Marketing Specialist",
      department: "Marketing",
      location: "Remote",
      type: "Contract",
      salary: "KES 80,000 - 120,000",
      description: "Drive our digital marketing initiatives and help grow our brand presence across Kenya.",
      requirements: ["SEO/SEM expertise", "Social media management", "Content creation", "Analytics experience"]
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
              Join Our Team
            </h1>
            <p className="text-xl text-hero-text/90 max-w-3xl mx-auto">
              Be part of Kenya's leading technology company and help shape the digital future. We're always looking for talented individuals to join our growing team.
            </p>
          </div>
        </section>

        {/* No Vacancy Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-2xl mx-auto">
              <div className="w-24 h-24 bg-muted rounded-full flex items-center justify-center mx-auto mb-8">
                <div className="text-4xl">📋</div>
              </div>
              <h2 className="text-3xl font-bold mb-4">No Current Openings</h2>
              <p className="text-lg text-muted-foreground mb-8">
                We don't have any open positions at the moment, but we're always growing! 
                Send us your CV and we'll keep you in mind for future opportunities.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  onClick={() => window.open("mailto:careers@vertatechsolutions.co.ke?subject=Future%20Opportunities", "_blank")}
                  size="lg"
                >
                  Send Your CV
                </Button>
                <Button 
                  variant="outline" 
                  size="lg"
                >
                  Get In Touch
                </Button>
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

export default Career;