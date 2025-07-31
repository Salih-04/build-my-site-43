import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Target, Heart, Users, Award, ArrowRight } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import farmerTraining from "@/assets/farmer-training.jpg";

const About = () => {
  const values = [
    {
      icon: Target,
      title: "Mission-Driven",
      description: "Committed to transforming Africa's livestock sector through sustainable practices.",
    },
    {
      icon: Heart,
      title: "Community Focused",
      description: "Empowering smallholder farmers and building stronger rural communities.",
    },
    {
      icon: Users,
      title: "Collaborative",
      description: "Working together with farmers, partners, and stakeholders for shared success.",
    },
    {
      icon: Award,
      title: "Excellence",
      description: "Maintaining the highest standards in training, production, and market linkage.",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="py-20 bg-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold text-foreground mb-6">About AgroLivex</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We are dedicated to transforming Africa's livestock sector through 
              innovative practices, comprehensive training, and sustainable market solutions.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
            <div>
              <h2 className="text-4xl font-bold text-foreground mb-6">Our Mission</h2>
              <p className="text-lg text-muted-foreground mb-6">
                To empower smallholder farmers through sustainable livestock 
                production, comprehensive training programs, and reliable market connections 
                that improve livelihoods and food security.
              </p>
              <h3 className="text-2xl font-bold text-foreground mb-4">Our Vision</h3>
              <p className="text-lg text-muted-foreground">
                To be the leading catalyst for agricultural transformation in Africa, 
                creating a thriving livestock sector that benefits farmers, communities, 
                and the Continent's economy.
              </p>
            </div>
            <div className="relative">
              <img 
                src={farmerTraining} 
                alt="Our mission in action"
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">Our Values</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              The principles that guide our work and define our commitment to African agriculture
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="text-center">
                <CardHeader>
                  <div className="flex justify-center mb-4">
                    <value.icon className="h-12 w-12 text-primary" />
                  </div>
                  <CardTitle>{value.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    {value.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-foreground mb-6">Our Story</h2>
          </div>
          
          <div className="prose prose-lg mx-auto text-muted-foreground">
            <p className="text-lg mb-6">
              AgroLivex was founded with a simple yet powerful vision: to transform Africa's 
              livestock sector and improve the livelihoods of smallholder farmers across the continent.
            </p>
            
            <p className="text-lg mb-6">
              Recognizing the challenges faced by African farmers - from lack of modern 
              techniques to limited market access - our founders brought together expertise 
              in agriculture, business development, and community engagement to create 
              comprehensive solutions.
            </p>
            
            <p className="text-lg mb-6">
              Today, we work with hundreds of farmers, providing training in sustainable 
              livestock production, facilitating access to quality feed and veterinary 
              services, and connecting producers with reliable markets.
            </p>
            
            <p className="text-lg">
              Our approach combines traditional knowledge with modern techniques, ensuring 
              that our programs are both effective and culturally appropriate for African 
              farming communities.
            </p>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 bg-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">Our Team</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Experienced professionals dedicated to agricultural transformation
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="text-center">
              <CardHeader>
                <CardTitle>Dr. Bekele Megersa</CardTitle>
                <CardDescription>Founder & CEO</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  15+ years in agricultural development and livestock management. 
                  PhD in Animal Science from Addis Ababa University.
                </p>
              </CardContent>
            </Card>
            
            <Card className="text-center">
              <CardHeader>
                <CardTitle>Sarah Johnson</CardTitle>
                <CardDescription>Operations Director</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  International development expert with focus on sustainable 
                  agriculture and farmer training programs.
                </p>
              </CardContent>
            </Card>
            
            <Card className="text-center">
              <CardHeader>
                <CardTitle>Alemayehu Tadesse</CardTitle>
                <CardDescription>Training Coordinator</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Former extension agent with deep knowledge of Ethiopian 
                  farming practices and community engagement.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">Join Our Mission</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Whether you're a farmer, investor, or partner organization, 
            we invite you to be part of Africa's agricultural transformation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" variant="secondary">
              <Link to="/contact">
                Get Involved <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="bg-white/10 text-white border-white hover:bg-white hover:text-primary">
              <Link to="/services">
                Our Services
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;