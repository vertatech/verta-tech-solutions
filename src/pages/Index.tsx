import Navigation from "@/components/ui/navigation";
import HeroSection from "@/components/hero-section";
import WorkShowcase from "@/components/work-showcase";
import LiveChat from "@/components/live-chat";
import Footer from "@/components/footer";
import SEOHead from "@/components/seo-head";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <SEOHead 
        title="VertaTech Solutions - Leading Kenya's Digital Transformation"
        description="Expert technology solutions in Kenya. Specializing in networking, security systems, CCTV installation, custom software development, and digital transformation services."
        keywords="technology solutions Kenya, networking services, CCTV installation, software development, digital transformation, IT consulting, cybersecurity, web development, system integration"
        canonical="https://vertatechsolutions.co.ke"
      />
      
      <Navigation />
      <HeroSection />
      <WorkShowcase />
      
      {/* YouTube Video Section */}
      <section className="py-16 bg-subtle-gradient overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 animate-fade-in-up">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Watch Our Story
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Discover how VertaTech Solutions is transforming Kenya's digital landscape
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto animate-scale-in" style={{ animationDelay: '0.3s' }}>
            <div className="relative w-full h-0 pb-[56.25%] rounded-xl overflow-hidden shadow-soft hover:shadow-card transition-all duration-500 group">
              <iframe
                className="absolute top-0 left-0 w-full h-full group-hover:scale-105 transition-transform duration-500"
                src="https://www.youtube.com/embed/zfNGsJk7AGU"
                title="VertaTech Solutions - Company Overview"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      </section>
      
      <LiveChat />
      <Footer />
    </div>
  );
};

export default Index;
