import Navigation from "@/components/ui/navigation";
import HeroSection from "@/components/hero-section";
import WorkShowcase from "@/components/work-showcase";
import LiveChat from "@/components/live-chat";
import Footer from "@/components/footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <HeroSection />
      <WorkShowcase />
      <LiveChat />
      <Footer />
    </div>
  );
};

export default Index;
