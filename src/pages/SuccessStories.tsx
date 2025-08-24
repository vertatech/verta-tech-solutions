import Navigation from "@/components/ui/navigation";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star, Building, TrendingUp, Users } from "lucide-react";

const SuccessStories = () => {
  const stories = [
    {
      client: "Nairobi Tech Hub",
      industry: "Technology",
      project: "Complete Network Infrastructure Overhaul",
      challenge: "Outdated network infrastructure causing frequent downtime and security vulnerabilities",
      solution: "Implemented modern enterprise-grade network solution with redundancy and advanced security",
      results: ["99.9% uptime achieved", "50% increase in network speed", "Zero security incidents"],
      testimonial: "VertaTech transformed our entire network infrastructure. The improvement in performance and reliability has been remarkable.",
      clientRole: "IT Director",
      rating: 5,
      image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&h=400&fit=crop&crop=center"
    },
    {
      client: "Mombasa Manufacturing Ltd",
      industry: "Manufacturing",
      project: "CCTV Security System & Access Control",
      challenge: "Security concerns and need for monitoring across multiple facility locations",
      solution: "Deployed comprehensive CCTV system with biometric access control and remote monitoring",
      results: ["24/7 security monitoring", "30% reduction in security incidents", "Improved operational efficiency"],
      testimonial: "The security system has given us complete peace of mind. We can monitor all our facilities remotely.",
      clientRole: "Operations Manager",
      rating: 5,
      image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=400&fit=crop&crop=center"
    },
    {
      client: "EduTech Kenya",
      industry: "Education",
      project: "Learning Management System Development",
      challenge: "Need for digital learning platform to serve students across Kenya",
      solution: "Developed custom web and mobile learning management system with offline capabilities",
      results: ["10,000+ students onboarded", "95% user satisfaction rate", "Available in 3 local languages"],
      testimonial: "VertaTech delivered exactly what we needed. The platform has revolutionized how we deliver education.",
      clientRole: "CEO",
      rating: 5,
      image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&h=400&fit=crop&crop=center"
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
              Success Stories
            </h1>
            <p className="text-xl text-hero-text/90 max-w-3xl mx-auto">
              Discover how we've helped businesses across Kenya achieve their digital transformation goals and drive measurable results.
            </p>
          </div>
        </section>

        {/* Success Stories */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="space-y-12">
              {stories.map((story, index) => (
                <Card key={index} className="shadow-card overflow-hidden">
                  <div className="grid lg:grid-cols-2">
                    <div className="aspect-video lg:aspect-auto">
                      <img
                        src={story.image}
                        alt={story.client}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="p-8">
                      <div className="flex items-center justify-between mb-4">
                        <Badge variant="secondary">{story.industry}</Badge>
                        <div className="flex items-center space-x-1">
                          {Array.from({ length: story.rating }).map((_, i) => (
                            <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                          ))}
                        </div>
                      </div>
                      
                      <CardHeader className="p-0 mb-6">
                        <CardTitle className="text-2xl mb-2">{story.client}</CardTitle>
                        <CardDescription className="text-lg font-medium text-primary">
                          {story.project}
                        </CardDescription>
                      </CardHeader>

                      <CardContent className="p-0 space-y-6">
                        <div>
                          <h4 className="font-semibold mb-2 flex items-center">
                            <Building className="h-4 w-4 mr-2" />
                            Challenge
                          </h4>
                          <p className="text-muted-foreground">{story.challenge}</p>
                        </div>

                        <div>
                          <h4 className="font-semibold mb-2 flex items-center">
                            <TrendingUp className="h-4 w-4 mr-2" />
                            Solution
                          </h4>
                          <p className="text-muted-foreground">{story.solution}</p>
                        </div>

                        <div>
                          <h4 className="font-semibold mb-2">Results</h4>
                          <ul className="space-y-2">
                            {story.results.map((result, resultIndex) => (
                              <li key={resultIndex} className="flex items-center space-x-2">
                                <div className="w-2 h-2 bg-accent rounded-full" />
                                <span className="text-muted-foreground">{result}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        <div className="bg-muted/50 p-4 rounded-lg">
                          <blockquote className="text-foreground italic mb-2">
                            "{story.testimonial}"
                          </blockquote>
                          <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                            <Users className="h-4 w-4" />
                            <span>{story.clientRole}, {story.client}</span>
                          </div>
                        </div>
                      </CardContent>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default SuccessStories;