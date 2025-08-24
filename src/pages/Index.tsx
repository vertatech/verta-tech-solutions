import Navigation from "@/components/ui/navigation";
import HeroSection from "@/components/hero-section";
import WorkShowcase from "@/components/work-showcase";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <HeroSection />
      <WorkShowcase />
    </div>
  );
};

export default Index;
