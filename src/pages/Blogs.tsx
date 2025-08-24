import Navigation from "@/components/ui/navigation";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Calendar, User, ArrowRight } from "lucide-react";

const Blogs = () => {
  const posts = [
    {
      title: "The Future of Digital Transformation in Kenya",
      excerpt: "Exploring how businesses in Kenya are embracing digital technologies to stay competitive in the modern market.",
      author: "John Kamau",
      date: "March 15, 2024",
      category: "Digital Transformation",
      readTime: "5 min read",
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&h=400&fit=crop&crop=center"
    },
    {
      title: "Best Practices for Network Security in 2024",
      excerpt: "Essential security measures every business should implement to protect their network infrastructure from cyber threats.",
      author: "Mary Wanjiku",
      date: "March 10, 2024",
      category: "Cybersecurity",
      readTime: "7 min read",
      image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&h=400&fit=crop&crop=center"
    },
    {
      title: "Mobile App Development Trends in East Africa",
      excerpt: "Latest trends and technologies shaping mobile application development across East African markets.",
      author: "David Muthoni",
      date: "March 5, 2024",
      category: "Mobile Development",
      readTime: "6 min read",
      image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&h=400&fit=crop&crop=center"
    },
    {
      title: "CCTV Systems: A Complete Buyer's Guide",
      excerpt: "Everything you need to know before investing in a CCTV system for your business or home security needs.",
      author: "Grace Kiprotich",
      date: "February 28, 2024",
      category: "Security Systems",
      readTime: "8 min read",
      image: "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=800&h=400&fit=crop&crop=center"
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
                    <Button variant="outline" className="w-full group">
                      Read Article
                      <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </Button>
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

export default Blogs;