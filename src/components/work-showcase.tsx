import { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";

// Import work showcase images
import webDevelopmentImg from "@/assets/web-development.jpg";
import systemDevelopmentImg from "@/assets/system-development.jpg";
import networkInstallationImg from "@/assets/network-installation.jpg";
import cctvInstallationImg from "@/assets/cctv-installation.jpg";
import biometricSystemsImg from "@/assets/biometric-systems.jpg";
import itConsultingImg from "@/assets/it-consulting.jpg";

const WorkShowcase = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const projects = [
    {
      id: 1,
      title: "Web Development", 
      description: "Modern, responsive websites and web applications",
      image: webDevelopmentImg
    },
    {
      id: 2,
      title: "System Development",
      description: "Custom software solutions and enterprise systems", 
      image: systemDevelopmentImg
    },
    {
      id: 3,
      title: "Network Installation",
      description: "Professional network setup and configuration",
      image: networkInstallationImg
    },
    {
      id: 4,
      title: "CCTV Installation", 
      description: "Security camera systems and monitoring solutions",
      image: cctvInstallationImg
    },
    {
      id: 5,
      title: "Biometric Systems",
      description: "Advanced biometric access control solutions",
      image: biometricSystemsImg
    },
    {
      id: 6,
      title: "IT Consulting",
      description: "Strategic technology guidance and digital transformation",
      image: itConsultingImg
    }
  ];

  // Auto-play functionality with 3-second delay
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex === projects.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000);

    return () => clearInterval(interval);
  }, [projects.length]);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === projects.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? projects.length - 1 : prevIndex - 1
    );
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <section className="py-20 bg-subtle-gradient">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Our Work Showcase
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Explore our professional services and see the quality solutions we deliver to our clients
          </p>
        </div>

        {/* Carousel */}
        <div className="relative max-w-6xl mx-auto">
          <div className="overflow-hidden rounded-xl shadow-soft">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {projects.map((project) => (
                <div key={project.id} className="w-full flex-shrink-0">
                  <Card className="bg-card border-0 shadow-none">
                    <CardContent className="p-0">
                      <div className="relative group">
                        <img
                          src={project.image}
                          alt={project.title}
                          className="w-full h-80 md:h-96 lg:h-[32rem] object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                        <div className="absolute bottom-8 left-8 right-8 text-white">
                          <h3 className="text-3xl md:text-4xl font-bold mb-3">{project.title}</h3>
                          <p className="text-lg text-white/90">{project.description}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Buttons */}
          <Button
            variant="outline"
            size="icon"
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white shadow-soft z-10"
            onClick={prevSlide}
          >
            <ChevronLeft className="h-4 w-4" />
          </Button>
          
          <Button
            variant="outline"
            size="icon"
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white shadow-soft z-10"
            onClick={nextSlide}
          >
            <ChevronRight className="h-4 w-4" />
          </Button>

          {/* Dots Indicator */}
          <div className="flex justify-center mt-6 space-x-2">
            {projects.map((_, index) => (
              <button
                key={index}
                className={`w-3 h-3 rounded-full transition-all ${
                  index === currentIndex 
                    ? "bg-primary scale-110" 
                    : "bg-muted-foreground/30 hover:bg-muted-foreground/50"
                }`}
                onClick={() => goToSlide(index)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkShowcase;