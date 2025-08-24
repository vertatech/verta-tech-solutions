import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";

const WorkShowcase = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const projects = [
    {
      id: 1,
      title: "Web Development",
      description: "Modern, responsive websites and web applications",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop&crop=center"
    },
    {
      id: 2,
      title: "System Development",
      description: "Custom software solutions and enterprise systems",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop&crop=center"
    },
    {
      id: 3,
      title: "Network Installation",
      description: "Professional network setup and configuration",
      image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&h=600&fit=crop&crop=center"
    },
    {
      id: 4,
      title: "CCTV Installation",
      description: "Security camera systems and monitoring solutions",
      image: "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=800&h=600&fit=crop&crop=center"
    },
    {
      id: 5,
      title: "Biometric Systems",
      description: "Advanced biometric access control solutions",
      image: "https://images.unsplash.com/photo-1633113089051-382085ae5fd4?w=800&h=600&fit=crop&crop=center"
    },
    {
      id: 6,
      title: "Cabinet Management",
      description: "Professional IT infrastructure and cable management",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&h=600&fit=crop&crop=center"
    }
  ];

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
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Our Work Showcase
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Explore our professional services and see the quality solutions we deliver to our clients
          </p>
        </div>

        {/* Carousel */}
        <div className="relative max-w-4xl mx-auto animate-scale-in">
          <div className="overflow-hidden rounded-lg">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {projects.map((project) => (
                <div key={project.id} className="w-full flex-shrink-0">
                  <Card className="bg-card border-0 shadow-card hover:shadow-soft transition-all duration-300">
                    <CardContent className="p-0">
                      <div className="relative group">
                        <img
                          src={project.image}
                          alt={project.title}
                          className="w-full h-64 md:h-80 object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                        <div className="absolute bottom-6 left-6 right-6 text-white">
                          <h3 className="text-2xl font-bold mb-2 animate-slide-in-left">{project.title}</h3>
                          <p className="text-white/90 animate-slide-in-right">{project.description}</p>
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
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white shadow-soft"
            onClick={prevSlide}
          >
            <ChevronLeft className="h-4 w-4" />
          </Button>
          
          <Button
            variant="outline"
            size="icon"
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white shadow-soft"
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