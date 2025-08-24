import Navigation from "@/components/ui/navigation";
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

        {/* Open Positions */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Open Positions</h2>
              <p className="text-lg text-muted-foreground">
                Explore exciting career opportunities with VertaTech Solutions
              </p>
            </div>

            <div className="space-y-6 max-w-4xl mx-auto">
              {positions.map((position, index) => (
                <Card key={index} className="shadow-card hover:shadow-soft transition-all duration-300">
                  <CardHeader>
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                      <div>
                        <CardTitle className="text-xl mb-2">{position.title}</CardTitle>
                        <CardDescription>{position.description}</CardDescription>
                      </div>
                      <Badge variant="secondary">{position.department}</Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="grid md:grid-cols-3 gap-4 mb-6">
                      <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                        <MapPin className="h-4 w-4" />
                        <span>{position.location}</span>
                      </div>
                      <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                        <Clock className="h-4 w-4" />
                        <span>{position.type}</span>
                      </div>
                      <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                        <DollarSign className="h-4 w-4" />
                        <span>{position.salary}</span>
                      </div>
                    </div>

                    <div className="mb-6">
                      <h4 className="font-semibold mb-2">Requirements:</h4>
                      <ul className="space-y-1">
                        {position.requirements.map((req, reqIndex) => (
                          <li key={reqIndex} className="flex items-center space-x-2 text-sm text-muted-foreground">
                            <div className="w-1.5 h-1.5 bg-accent rounded-full" />
                            <span>{req}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <Button className="w-full md:w-auto">Apply Now</Button>
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

export default Career;