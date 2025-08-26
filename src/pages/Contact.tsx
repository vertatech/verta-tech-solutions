import Navigation from "@/components/ui/navigation";
import LiveChat from "@/components/live-chat";
import Footer from "@/components/footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Phone, Mail, MapPin, Clock, MessageCircle } from "lucide-react";

const Contact = () => {
  const contactInfo = [
    {
      icon: Phone,
      title: "Phone",
      details: ["+254 720 496 076", "+254 733 123 456"],
      description: "Call us during business hours"
    },
    {
      icon: Mail,
      title: "Email",
      details: ["info@vertatech.co.ke", "support@vertatech.co.ke"],
      description: "We'll respond within 24 hours"
    },
    {
      icon: MapPin,
      title: "Office Location",
      details: ["Nairobi, Kenya", "Westlands Business District"],
      description: "Visit us for in-person consultations"
    },
    {
      icon: Clock,
      title: "Business Hours",
      details: ["Mon - Fri: 8:00 AM - 6:00 PM", "Sat: 9:00 AM - 2:00 PM"],
      description: "Emergency support available 24/7"
    }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    const formData = new FormData(form);
    
    const name = `${formData.get('firstName')} ${formData.get('lastName')}`;
    const email = formData.get('email');
    const phone = formData.get('phone');
    const company = formData.get('company');
    const service = formData.get('service');
    const message = formData.get('message');
    
    const subject = `Service Inquiry from ${name}`;
    const body = `Name: ${name}
Email: ${email}
Phone: ${phone}
Company: ${company}
Service Interest: ${service}

Message:
${message}`;
    
    const mailtoLink = `mailto:info@vertatechsolutions.co.ke?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.open(mailtoLink, '_blank');
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="bg-hero-gradient py-20">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-hero-text mb-6">
              Get In Touch
            </h1>
            <p className="text-xl text-hero-text/90 max-w-3xl mx-auto">
              Ready to transform your business with cutting-edge technology? Let's discuss your project and find the perfect solution together.
            </p>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12">
              {/* Contact Form */}
              <Card className="shadow-card">
                <CardHeader>
                  <CardTitle className="text-2xl">Send us a Message</CardTitle>
                  <CardDescription>
                    Fill out the form below and we'll get back to you as soon as possible.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="firstName">First Name</Label>
                        <Input id="firstName" name="firstName" placeholder="Your first name" required />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="lastName">Last Name</Label>
                        <Input id="lastName" name="lastName" placeholder="Your last name" required />
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <Input id="email" name="email" type="email" placeholder="your.email@example.com" required />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone Number</Label>
                      <Input id="phone" name="phone" placeholder="+254 XXX XXX XXX" required />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="company">Company (Optional)</Label>
                      <Input id="company" name="company" placeholder="Your company name" />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="service">Service Interest</Label>
                      <select name="service" className="w-full p-3 border border-input rounded-md bg-background" required>
                        <option value="">Select a service</option>
                        <option value="Web & System Development">Web & System Development</option>
                        <option value="Mobile App Development">Mobile App Development</option>
                        <option value="CCTV & Network Installations">CCTV & Network Installations</option>
                        <option value="Biometric Systems">Biometric Systems</option>
                        <option value="IT Security Solutions">IT Security Solutions</option>
                        <option value="General Consultation">General Consultation</option>
                      </select>
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="message">Message</Label>
                      <Textarea 
                        id="message" 
                        name="message"
                        placeholder="Tell us about your project requirements..."
                        className="min-h-[120px]"
                        required
                      />
                    </div>
                    
                    <div className="flex flex-col sm:flex-row gap-3">
                      <Button type="submit" className="flex-1">
                        Send Message
                      </Button>
                      <Button 
                        type="button" 
                        variant="outline" 
                        onClick={() => window.open("https://wa.me/254720496076?text=Hello%20VertaTech%2C%20I%27m%20interested%20in%20your%20services", "_blank")}
                        className="flex-1 bg-accent text-accent-foreground hover:bg-accent/90"
                      >
                        <MessageCircle className="h-4 w-4 mr-2" />
                        WhatsApp Us
                      </Button>
                    </div>
                  </form>
                </CardContent>
              </Card>

              {/* Contact Information */}
              <div className="space-y-6">
                <div className="mb-8">
                  <h2 className="text-3xl font-bold mb-4">Contact Information</h2>
                  <p className="text-lg text-muted-foreground">
                    We're here to help you with all your technology needs. Reach out to us through any of these channels.
                  </p>
                </div>

                {contactInfo.map((info, index) => (
                  <Card key={index} className="shadow-card">
                    <CardContent className="p-6">
                      <div className="flex items-start space-x-4">
                        <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                          <info.icon className="h-6 w-6 text-primary" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-lg mb-1">{info.title}</h3>
                          <div className="space-y-1 mb-2">
                            {info.details.map((detail, detailIndex) => (
                              <p key={detailIndex} className="text-foreground font-medium">
                                {detail}
                              </p>
                            ))}
                          </div>
                          <p className="text-sm text-muted-foreground">{info.description}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>
      <LiveChat />
      <Footer />
    </div>
  );
};

export default Contact;