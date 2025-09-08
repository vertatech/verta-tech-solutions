import Navigation from "@/components/ui/navigation";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star, Building, TrendingUp, Users } from "lucide-react";
import LiveChat from "@/components/live-chat";
import Footer from "@/components/footer";

const SuccessStories = () => {
  const stories = [
    {
      clientName: "John Kamau",
      company: "Nairobi Tech Hub",
      title: "IT Director",
      service: "Complete Network Infrastructure Overhaul",
      testimonial: "VertaTech transformed our entire network infrastructure. The improvement in performance and reliability has been remarkable.",
      rating: 5
    },
    {
      clientName: "Sarah Wanjiku",
      company: "Mombasa Manufacturing Ltd",
      title: "Operations Manager",
      service: "CCTV Security System & Access Control",
      testimonial: "The security system has given us complete peace of mind. We can monitor all our facilities remotely.",
      rating: 5
    },
    {
      clientName: "David Ochieng",
      company: "EduTech Kenya",
      title: "CEO",
      service: "Learning Management System Development",
      testimonial: "VertaTech delivered exactly what we needed. The platform has revolutionized how we deliver education.",
      rating: 5
    },
    {
      clientName: "Grace Mutua",
      company: "HealthCare Solutions Ltd",
      title: "MD",
      service: "Hospital Management System",
      testimonial: "Our hospital operations have been streamlined significantly. Patient data management is now seamless.",
      rating: 4
    },
    {
      clientName: "Michael Kiprotich",
      company: "AgriTech Innovations",
      title: "Founder",
      service: "Agricultural Monitoring System",
      testimonial: "The IoT-based monitoring system has improved our crop yields by 35%. Excellent work by VertaTech.",
      rating: 5
    },
    {
      clientName: "Janet Achieng",
      company: "Retail Plus Kenya",
      title: "CEO",
      service: "E-commerce Platform Development",
      testimonial: "Our online sales have tripled since launching the platform. The system is user-friendly and robust.",
      rating: 4
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
              Gallery and Success Stories
            </h1>
            <p className="text-xl text-hero-text/90 max-w-3xl mx-auto">
              Discover how we've helped businesses across Kenya achieve their digital transformation goals and drive measurable results.
            </p>
          </div>
        </section>

        {/* Gallery Section - YouTube Video */}
        <section className="py-20 bg-muted/20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Gallery</h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Take a look at our latest work and company highlights
              </p>
            </div>
            
            <div className="max-w-4xl mx-auto">
              <Card className="overflow-hidden shadow-card">
                <div className="aspect-video">
                  <iframe
                    src="https://www.youtube.com/embed/zfNGsJk7AGU?si=G56CAXslWTeodODj"
                    title="VertaTech Solutions Company Video"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                    className="w-full h-full"
                  ></iframe>
                </div>
                <CardContent className="p-6">
                  <CardTitle className="text-xl mb-2">VertaTech Solutions - Company Overview</CardTitle>
                  <CardDescription>
                    Discover how VertaTech Solutions is transforming businesses across Kenya with innovative technology solutions.
                  </CardDescription>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Success Stories */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Success Stories</h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Real results from our satisfied clients across various industries
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {stories.map((story, index) => (
                <Card key={index} className="shadow-card hover:shadow-soft transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="text-center mb-4">
                      <div className="flex justify-center items-center space-x-1 mb-3">
                        {Array.from({ length: 5 }).map((_, i) => (
                          <Star 
                            key={i} 
                            className={`h-5 w-5 ${
                              i < story.rating 
                                ? 'fill-yellow-400 text-yellow-400' 
                                : 'text-gray-300'
                            }`} 
                          />
                        ))}
                      </div>
                      <h3 className="text-xl font-semibold mb-1">{story.clientName}</h3>
                      <p className="text-sm text-muted-foreground mb-2">{story.title}</p>
                      <p className="text-sm font-medium text-primary">{story.company}</p>
                    </div>
                    
                    <div className="mb-4">
                      <Badge variant="secondary" className="mb-3">{story.service}</Badge>
                    </div>
                    
                    <blockquote className="text-center text-muted-foreground italic">
                      "{story.testimonial}"
                    </blockquote>
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

export default SuccessStories;