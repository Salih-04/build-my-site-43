import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Activity, Users, TrendingUp, Clock, CheckCircle, ArrowRight } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import cattleFacility from "@/assets/cattle-facility.jpg";
import farmerTraining from "@/assets/farmer-training.jpg";
import marketLinkage from "@/assets/market-linkage.jpg";

const Services = () => {
  const services = [
    {
      icon: Activity,
      title: "Livestock Supply",
      description: "fatten and supply high quality livestock, raised with modern technique and Sustainable Practices.",
      image: "/lovable-uploads/06633a56-cb23-469a-84cc-7acf38e3477f.png",
      features: [
        "supply high quality cattle",
        "Supply high quality Sheep",
        "Supply high quality goat"
      ]
    },
    {
      icon: Users,
      title: "Farmer Training",
      description: "Comprehensive training programs for Smallholder farmers and livestock business on best practices",
      image: "/lovable-uploads/farmer-training-new.jpg",
      features: [
        "cost effective feeding techniques",
        "Methane emission reduction techniques",
        "Disease Prevention",
        "Feed Preparation techniques",
        "Business Planning"
      ]
    },
    {
      icon: TrendingUp,
      title: "Market linkage & connection through digital Platform",
      description: "Legebere digital Platform that connects Livestock farmers with markets, input suppliers, Financial services, veterinary care providers, and educational content",
      image: "/lovable-uploads/legebere-logo.png",
      features: [
        "Buyer network access",
        "Access to input Suppliers",
        "Access to Financial services",
        "Educational content"
      ]
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="py-20 bg-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold text-foreground mb-6">Our Services</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Comprehensive solutions for sustainable livestock production and farmer empowerment
            </p>
          </div>
        </div>
      </section>

      {/* Services Detail */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-20">
            {services.map((service, index) => (
              <div key={index} className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
              }`}>
                <div className={index % 2 === 1 ? 'lg:col-start-2' : ''}>
                  <div className="flex items-center space-x-3 mb-4">
                    <service.icon className="h-10 w-10 text-primary" />
                    <h2 className="text-4xl font-bold text-foreground">{service.title}</h2>
                  </div>
                  
                  <p className="text-lg text-muted-foreground mb-6">
                    {service.description}
                  </p>
                  
                  
                  <div className="space-y-3 mb-8">
                    <h3 className="text-xl font-semibold text-foreground">Key Features:</h3>
                    {service.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center space-x-3">
                        <CheckCircle className="h-5 w-5 text-primary" />
                        <span className="text-muted-foreground">{feature}</span>
                      </div>
                    ))}
                  </div>
                  
                  <Button asChild size="lg">
                    <Link to="/contact">
                      Get Started <ArrowRight className="ml-2 h-5 w-5" />
                    </Link>
                  </Button>
                </div>
                
                <div className={index % 2 === 1 ? 'lg:col-start-1' : ''}>
                  <img 
                    src={service.image} 
                    alt={service.title}
                    className="rounded-lg shadow-lg w-full"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">Our Process</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              A Structured approach to ensure the best services for our clients
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <Card className="text-center">
              <CardHeader>
                <div className="flex justify-center mb-4">
                  <div className="w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-xl font-bold">
                    1
                  </div>
                </div>
                <CardTitle>Assessment</CardTitle>
              </CardHeader>
              <CardContent>
              </CardContent>
            </Card>
            
            <Card className="text-center">
              <CardHeader>
                <div className="flex justify-center mb-4">
                  <div className="w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-xl font-bold">
                    2
                  </div>
                </div>
                <CardTitle>Planning</CardTitle>
              </CardHeader>
              <CardContent>
              </CardContent>
            </Card>
            
            <Card className="text-center">
              <CardHeader>
                <div className="flex justify-center mb-4">
                  <div className="w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-xl font-bold">
                    3
                  </div>
                </div>
                <CardTitle>Implementation</CardTitle>
              </CardHeader>
              <CardContent>
              </CardContent>
            </Card>
            
            <Card className="text-center">
              <CardHeader>
                <div className="flex justify-center mb-4">
                  <div className="w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-xl font-bold">
                    4
                  </div>
                </div>
                <CardTitle>Follow-up</CardTitle>
              </CardHeader>
              <CardContent>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Get Started?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Choose the service that best fits your needs, or contact us 
            for a customized solution.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" variant="secondary">
              <Link to="/contact">
                Contact Us Today
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="bg-white/10 text-white border-white hover:bg-white hover:text-primary">
              <Link to="/about">
                Learn More About Us
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Services;