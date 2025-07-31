import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Users, TrendingUp, MessageCircle, ArrowRight, CheckCircle, Star, Activity } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import heroImage from "@/assets/hero-cattle.jpg";
import farmerTraining from "/lovable-uploads/75eec144-cb5d-4ae1-9537-73e82852138e.png";
import cattleFacility from "/lovable-uploads/bff5046c-f10a-45a7-b7e0-5731c0b8b7d3.png";
import marketLinkage from "/lovable-uploads/6f1935fb-88ca-4011-be46-b5c8b0a6ec7c.png";
import testimonialImage from "/lovable-uploads/51e9d36d-7ba4-45f6-9b96-469598617024.png";

const Index = () => {
  const services = [
    {
      icon: Activity,
      title: "Livestock Fattening",
      description: "Supplying high quality fattened livestock, raised with modern technique and sustainable Practices",
      image: cattleFacility,
    },
    {
      icon: Users,
      title: "Farmer Training",
      description: "Comprehensive training programs for smallholder farmers on best practices.",
      image: farmerTraining,
    },
    {
      icon: TrendingUp,
      title: "Market Linkage",
      description: "connecting farmers with buyers, input suppliers, financial services and Veterinary care Providers.",
      image: marketLinkage,
    },
  ];

  const stats = [
    { number: "100+", label: "Farmers Trained" },
    { number: "1,100+", label: "Cattle, Sheep & Goat Supplied" },
    { number: "20+", label: "Market Partners" },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${heroImage})` }}
        >
          <div className="absolute inset-0 bg-black/40"></div>
        </div>
        
        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            Empowering Africa's livestock
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto">
            Transforming livestock production through sustainable practices, 
            farmer training, and market connections.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="text-lg">
              <Link to="/services">
                Our Services <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="text-lg bg-white/10 text-white border-white hover:bg-white hover:text-primary">
              <Link to="/contact">
                Get Started
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl font-bold mb-2">{stat.number}</div>
                <div className="text-primary-foreground/80">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">Our Product and Services</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Comprehensive solutions for sustainable livestock production and farmer empowerment
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="aspect-video overflow-hidden">
                  <img 
                    src={service.image} 
                    alt={service.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardHeader>
                  <div className="flex items-center space-x-3 mb-2">
                    <service.icon className="h-8 w-8 text-primary" />
                    <CardTitle>{service.title}</CardTitle>
                  </div>
                  <CardDescription className="text-base">
                    {service.description}
                  </CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Button asChild size="lg">
              <Link to="/services">
                View All Services <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* About Preview */}
      <section className="py-20 bg-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-foreground mb-6">About AgroLivex</h2>
              <p className="text-lg text-muted-foreground mb-6">
                We are dedicated to transforming Africa's livestock sector through 
                innovative practices, comprehensive training, and sustainable market solutions.
              </p>
              <div className="space-y-4 mb-8">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-6 w-6 text-primary" />
                  <span>Sustainable livestock production methods</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-6 w-6 text-primary" />
                  <span>Comprehensive farmer training programs</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-6 w-6 text-primary" />
                  <span>Strong market linkage networks</span>
                </div>
              </div>
              <Button asChild>
                <Link to="/about">
                  Learn More About Us <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
            <div className="relative">
              <img 
                src={testimonialImage} 
                alt="Farmer training session"
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="py-20 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="mb-8">
            <div className="flex justify-center mb-4">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-6 w-6 text-yellow-400 fill-current" />
              ))}
            </div>
            <blockquote className="text-2xl font-medium text-foreground mb-6">
              "AgroLivex Transformed out farming operations. Their training and support 
              helped us to reduce Feeding costs and improve productivity while maintaining quality."
            </blockquote>
            <cite className="text-muted-foreground">
              - Nursa Khedir, Smallholder Farmer
            </cite>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Transform Your Farm?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Join hundreds of farmers who have increased their productivity and income 
            with AgroLivex's proven methods and support.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" variant="secondary">
              <Link to="/contact">
                Contact Us Today
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="bg-white/10 text-white border-white hover:bg-white hover:text-primary">
              <Link to="/services">
                View Our Services
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
