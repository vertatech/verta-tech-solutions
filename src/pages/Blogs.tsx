import Navigation from "@/components/ui/navigation";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Calendar, User, ArrowRight, X, Clock, Share2, Facebook, Twitter, Linkedin } from "lucide-react";
import Footer from "@/components/footer";
import { useState } from "react";

const Blogs = () => {
  const posts = [
    {
      title: "The Future of Digital Transformation in Kenya",
      excerpt: "Exploring how businesses in Kenya are embracing digital technologies to stay competitive in the modern market.",
      content: "Digital transformation has become a critical success factor for businesses across Kenya. As we navigate an increasingly connected world, companies that embrace digital technologies are positioning themselves for sustained growth and competitive advantage. In this comprehensive analysis, we explore the key trends, challenges, and opportunities shaping Kenya's digital landscape.\n\nThe COVID-19 pandemic accelerated digital adoption across all sectors, forcing businesses to rapidly implement remote work solutions, e-commerce platforms, and digital customer engagement strategies. This unprecedented shift has created new opportunities for innovation while highlighting the importance of robust digital infrastructure.\n\nKey areas of focus include cloud computing adoption, mobile-first strategies, and the integration of artificial intelligence and machine learning technologies. Kenyan businesses are increasingly recognizing that digital transformation is not just about technology implementation, but about fundamental changes in business processes, culture, and customer experiences.\n\nLooking ahead, successful digital transformation requires strategic planning, employee training, and partnerships with reliable technology providers. Companies that invest in comprehensive digital strategies today will be best positioned to thrive in tomorrow's digital economy.",
      author: "John Kamau",
      date: "March 15, 2024",
      time: "10:30 AM",
      category: "Digital Transformation",
      readTime: "5 min read",
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&h=400&fit=crop&crop=center"
    },
    {
      title: "Best Practices for Network Security in 2024",
      excerpt: "Essential security measures every business should implement to protect their network infrastructure from cyber threats.",
      content: "Network security has evolved into one of the most critical aspects of business operations in 2024. With cyber threats becoming more sophisticated and frequent, organizations must implement comprehensive security measures to protect their digital assets and maintain customer trust.\n\nThe current threat landscape includes advanced persistent threats (APTs), ransomware attacks, phishing campaigns, and zero-day exploits. These threats require a multi-layered approach to security that combines technology solutions with employee awareness and training programs.\n\nEssential security measures include implementing robust firewalls, intrusion detection systems, regular security audits, and employee cybersecurity training. Additionally, businesses should adopt a zero-trust security model, ensuring that every access request is verified regardless of the user's location or device.\n\nRegular software updates, strong password policies, and backup strategies are fundamental components of any security framework. By implementing these best practices, businesses can significantly reduce their risk exposure and ensure continuity of operations even in the face of cyber threats.",
      author: "Mary Wanjiku",
      date: "March 10, 2024",
      time: "2:15 PM",
      category: "Cybersecurity",
      readTime: "7 min read",
      image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&h=400&fit=crop&crop=center"
    },
    {
      title: "Mobile App Development Trends in East Africa",
      excerpt: "Latest trends and technologies shaping mobile application development across East African markets.",
      content: "East Africa's mobile app development landscape is experiencing unprecedented growth, driven by increasing smartphone penetration, improved internet infrastructure, and a growing tech-savvy population. This dynamic environment presents unique opportunities for developers and businesses looking to tap into the region's potential.\n\nKey trends shaping the market include the rise of fintech applications, m-commerce platforms, and agricultural technology solutions. Mobile money services like M-Pesa have established a strong foundation for digital financial services, creating opportunities for innovative banking and payment solutions.\n\nCross-platform development frameworks like React Native and Flutter are gaining popularity, allowing developers to create applications that work seamlessly across iOS and Android platforms while maintaining cost efficiency. Progressive Web Apps (PWAs) are also emerging as a viable alternative for businesses seeking to reach users across different devices and connection speeds.\n\nThe integration of artificial intelligence, machine learning, and blockchain technologies is opening new possibilities for innovative applications. As the market continues to mature, developers who focus on user experience, security, and scalability will be best positioned for success in this rapidly evolving landscape.",
      author: "David Muthoni",
      date: "March 5, 2024",
      time: "11:45 AM",
      category: "Mobile Development",
      readTime: "6 min read",
      image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&h=400&fit=crop&crop=center"
    },
    {
      title: "CCTV Systems: A Complete Buyer's Guide",
      excerpt: "Everything you need to know before investing in a CCTV system for your business or home security needs.",
      content: "Choosing the right CCTV system is a critical decision that impacts the security and operations of your business or home. With numerous options available in the market, understanding key features, technologies, and considerations is essential for making an informed investment.\n\nModern CCTV systems offer a range of advanced features including high-definition recording, night vision capabilities, motion detection, and remote monitoring through mobile applications. IP cameras have largely replaced analog systems, offering superior image quality and network integration capabilities.\n\nKey factors to consider include camera resolution (4K vs HD), storage requirements, network bandwidth, and installation complexity. Indoor and outdoor cameras have different specifications, with weatherproof ratings being crucial for external installations.\n\nIntegration with existing security systems, scalability for future expansion, and ongoing maintenance requirements should also influence your decision. Professional installation ensures optimal camera placement, proper network configuration, and system reliability. When selecting a CCTV provider, look for companies with proven track records, comprehensive warranties, and reliable technical support services.",
      author: "Grace Kiprotich",
      date: "February 28, 2024",
      time: "9:20 AM",
      category: "Security Systems",
      readTime: "8 min read",
      image: "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=800&h=400&fit=crop&crop=center"
    }
  ];

  const [selectedPost, setSelectedPost] = useState(null);

  const shareArticle = (post, platform) => {
    const url = encodeURIComponent(window.location.href);
    const title = encodeURIComponent(post.title);
    const text = encodeURIComponent(post.excerpt);
    
    let shareUrl = '';
    switch (platform) {
      case 'facebook':
        shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${url}`;
        break;
      case 'twitter':
        shareUrl = `https://twitter.com/intent/tweet?url=${url}&text=${title}`;
        break;
      case 'linkedin':
        shareUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${url}`;
        break;
    }
    
    if (shareUrl) {
      window.open(shareUrl, '_blank', 'width=600,height=400');
    }
  };

  const handleReadMore = (post) => {
    setSelectedPost(post);
  };

  const handleCloseArticle = () => {
    setSelectedPost(null);
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="bg-hero-gradient py-20">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-hero-text mb-6">
              Tech Insights & Blog
            </h1>
            <p className="text-xl text-hero-text/90 max-w-3xl mx-auto">
              Stay updated with the latest technology trends, insights, and best practices from our expert team.
            </p>
          </div>
        </section>

        {/* Blog Posts */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
              {posts.map((post, index) => (
                <Card key={index} className="shadow-card hover:shadow-soft transition-all duration-300 overflow-hidden">
                  <div className="aspect-video overflow-hidden">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <CardHeader>
                    <div className="flex items-center justify-between mb-2">
                      <Badge variant="secondary">{post.category}</Badge>
                      <span className="text-sm text-muted-foreground">{post.readTime}</span>
                    </div>
                    <CardTitle className="text-xl hover:text-primary transition-colors">
                      {post.title}
                    </CardTitle>
                    <CardDescription className="text-base">
                      {post.excerpt}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                        <div className="flex items-center space-x-1">
                          <User className="h-4 w-4" />
                          <span>{post.author}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Calendar className="h-4 w-4" />
                          <span>{post.date}</span>
                        </div>
                      </div>
                    </div>
                    <Button 
                      variant="outline" 
                      className="w-full group"
                      onClick={() => handleReadMore(post)}
                    >
                      Read Full Article
                      <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Full Article Modal */}
        {selectedPost && (
          <div className="fixed inset-0 bg-black/50 z-50 flex items-start justify-center p-4 overflow-y-auto">
            <div className="bg-background w-full max-w-4xl rounded-lg shadow-xl my-8 animate-fade-in">
              <div className="sticky top-0 bg-background border-b p-6 flex items-center justify-between rounded-t-lg">
                <div className="flex items-center space-x-4">
                  <Badge variant="secondary">{selectedPost.category}</Badge>
                  <span className="text-sm text-muted-foreground">{selectedPost.readTime}</span>
                </div>
                <Button 
                  variant="ghost" 
                  size="sm"
                  onClick={handleCloseArticle}
                  className="hover:bg-muted"
                >
                  <X className="h-5 w-5" />
                </Button>
              </div>
              
              <div className="p-6">
                <div className="aspect-video overflow-hidden rounded-lg mb-6">
                  <img
                    src={selectedPost.image}
                    alt={selectedPost.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                
                <h1 className="text-3xl md:text-4xl font-bold mb-4">{selectedPost.title}</h1>
                
                <div className="flex items-center space-x-6 text-sm text-muted-foreground mb-8 pb-6 border-b">
                  <div className="flex items-center space-x-2">
                    <User className="h-4 w-4" />
                    <span>{selectedPost.author}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Calendar className="h-4 w-4" />
                    <span>{selectedPost.date}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Clock className="h-4 w-4" />
                    <span>{selectedPost.time}</span>
                  </div>
                </div>
                
                <div className="prose prose-lg max-w-none">
                  {selectedPost.content.split('\n\n').map((paragraph, index) => (
                    <p key={index} className="text-muted-foreground leading-relaxed mb-6">
                      {paragraph}
                    </p>
                  ))}
                </div>
                
                <div className="mt-8 pt-6 border-t">
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                        <User className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <p className="font-semibold">{selectedPost.author}</p>
                        <p className="text-sm text-muted-foreground">Published on {selectedPost.date} at {selectedPost.time}</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-2">
                      <span className="text-sm text-muted-foreground mr-2">Share:</span>
                      <Button
                        size="sm"
                        variant="outline"
                        className="p-2"
                        onClick={() => shareArticle(selectedPost, 'facebook')}
                      >
                        <Facebook className="h-4 w-4" />
                      </Button>
                      <Button
                        size="sm"
                        variant="outline"
                        className="p-2"
                        onClick={() => shareArticle(selectedPost, 'twitter')}
                      >
                        <Twitter className="h-4 w-4" />
                      </Button>
                      <Button
                        size="sm"
                        variant="outline"
                        className="p-2"
                        onClick={() => shareArticle(selectedPost, 'linkedin')}
                      >
                        <Linkedin className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                  
                  <div className="flex justify-center">
                    <Button onClick={handleCloseArticle}>
                      Close Article
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </main>
      <Footer />
    </div>
  );
};

export default Blogs;