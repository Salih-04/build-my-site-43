import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Phone, Mail, MapPin, MessageCircle, Clock, Send } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: ""
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSelectChange = (value: string) => {
    setFormData(prev => ({
      ...prev,
      service: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: "Missing Information",
        description: "Please fill in all required fields.",
        variant: "destructive"
      });
      return;
    }

    // Simulate form submission
    toast({
      title: "Message Sent!",
      description: "Thank you for contacting us. We'll get back to you within 24 hours.",
    });

    // Reset form
    setFormData({
      name: "",
      email: "",
      phone: "",
      service: "",
      message: ""
    });
  };

  const whatsappNumber = "+251911234567"; // Replace with actual number
  const whatsappMessage = encodeURIComponent("Hello AgroLivex, I'm interested in your services.");
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="py-20 bg-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold text-foreground mb-6">Contact Us</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Ready to transform your farming operations? Get in touch with our team of experts.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            
            {/* Contact Information */}
            <div className="lg:col-span-1">
              <h2 className="text-3xl font-bold text-foreground mb-8">Get in Touch</h2>
              
              <div className="space-y-6">
                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-center space-x-4">
                      <Phone className="h-8 w-8 text-primary" />
                      <div>
                        <h3 className="font-semibold text-foreground">Phone</h3>
                        <p className="text-muted-foreground">+251 11 123 4567</p>
                        <p className="text-muted-foreground">+251 91 123 4567</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-center space-x-4">
                      <Mail className="h-8 w-8 text-primary" />
                      <div>
                        <h3 className="font-semibold text-foreground">Email</h3>
                        <p className="text-muted-foreground">info@agrolivex.com</p>
                        <p className="text-muted-foreground">support@agrolivex.com</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-center space-x-4">
                      <MapPin className="h-8 w-8 text-primary" />
                      <div>
                        <h3 className="font-semibold text-foreground">Office</h3>
                        <p className="text-muted-foreground">Bole Road, Addis Ababa</p>
                        <p className="text-muted-foreground">Ethiopia</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-center space-x-4">
                      <Clock className="h-8 w-8 text-primary" />
                      <div>
                        <h3 className="font-semibold text-foreground">Business Hours</h3>
                        <p className="text-muted-foreground">Mon - Fri: 8:00 AM - 6:00 PM</p>
                        <p className="text-muted-foreground">Saturday: 9:00 AM - 2:00 PM</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* WhatsApp Button */}
                <Button 
                  asChild 
                  size="lg" 
                  className="w-full bg-green-600 hover:bg-green-700 text-white"
                >
                  <a 
                    href={whatsappUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center justify-center space-x-2"
                  >
                    <MessageCircle className="h-5 w-5" />
                    <span>Chat on WhatsApp</span>
                  </a>
                </Button>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl">Send us a Message</CardTitle>
                  <CardDescription>
                    Fill out the form below and we'll get back to you within 24 hours.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <Label htmlFor="name">Full Name *</Label>
                        <Input
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          placeholder="Your full name"
                          required
                        />
                      </div>
                      <div>
                        <Label htmlFor="email">Email Address *</Label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          placeholder="your.email@example.com"
                          required
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <Label htmlFor="phone">Phone Number</Label>
                        <Input
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleInputChange}
                          placeholder="+251 91 123 4567"
                        />
                      </div>
                      <div>
                        <Label htmlFor="service">Service Interest</Label>
                        <Select onValueChange={handleSelectChange} value={formData.service}>
                          <SelectTrigger>
                            <SelectValue placeholder="Select a service" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="cattle-fattening">Cattle Fattening</SelectItem>
                            <SelectItem value="farmer-training">Farmer Training</SelectItem>
                            <SelectItem value="market-linkage">Market Linkage</SelectItem>
                            <SelectItem value="consulting">Consulting</SelectItem>
                            <SelectItem value="partnership">Partnership</SelectItem>
                            <SelectItem value="other">Other</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="message">Message *</Label>
                      <Textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        placeholder="Tell us about your needs, questions, or how we can help you..."
                        rows={5}
                        required
                      />
                    </div>

                    <Button type="submit" size="lg" className="w-full">
                      <Send className="mr-2 h-5 w-5" />
                      Send Message
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-secondary">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">Frequently Asked Questions</h2>
            <p className="text-xl text-muted-foreground">
              Common questions about our services and how we can help you
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <CardTitle>How long does the training program take?</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Our comprehensive farmer training programs typically run for 2-4 weeks, 
                  depending on the specific curriculum and your needs.
                </CardDescription>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>What is the cost of cattle fattening services?</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Costs vary based on the number of cattle and duration. 
                  Contact us for a personalized quote based on your specific requirements.
                </CardDescription>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Do you provide financing options?</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  We work with various partners to provide financing options for farmers. 
                  We can help connect you with appropriate funding sources.
                </CardDescription>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Which regions do you serve?</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  We currently operate in multiple regions across Ethiopia. 
                  Contact us to discuss service availability in your area.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;