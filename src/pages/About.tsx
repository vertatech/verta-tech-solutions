import Navigation from "@/components/ui/navigation";
import { Card, CardContent } from "@/components/ui/card";
import { Users, Target, Award, Globe } from "lucide-react";

const About = () => {
  const stats = [
    { icon: Users, label: "Happy Clients", value: "500+" },
    { icon: Target, label: "Projects Completed", value: "1000+" },
    { icon: Award, label: "Years Experience", value: "10+" },
    { icon: Globe, label: "Counties Served", value: "20+" }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="bg-hero-gradient py-20">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-hero-text mb-6">
              About VertaTech Solutions
            </h1>
            <p className="text-xl text-hero-text/90 max-w-3xl mx-auto">
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

            {/* About Content */}
            <div className="max-w-4xl mx-auto">
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div>
                  <h2 className="text-3xl font-bold mb-6">Our Story</h2>
                  <p className="text-lg text-muted-foreground mb-6">
                    Founded with a vision to bridge the digital divide in Kenya, VertaTech Solutions has been at the forefront of technological innovation for over a decade. We started as a small team of passionate tech enthusiasts and have grown into a leading technology solutions provider.
                  </p>
                  <p className="text-lg text-muted-foreground">
                    Our commitment to excellence, innovation, and customer satisfaction has enabled us to serve businesses across Kenya, helping them navigate the complex digital landscape with confidence.
                  </p>
                </div>
                <div className="bg-subtle-gradient p-8 rounded-lg">
                  <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
                  <p className="text-muted-foreground mb-6">
                    To empower businesses and organizations across Kenya with cutting-edge technology solutions that drive growth, efficiency, and digital transformation.
                  </p>
                  <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
                  <p className="text-muted-foreground">
                    To be Kenya's most trusted technology partner, leading the digital frontier and creating innovative solutions that shape the future of business.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default About;