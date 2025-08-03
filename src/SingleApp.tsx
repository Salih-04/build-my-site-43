import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route, Link, useLocation, useNavigate } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useInView } from "react-intersection-observer";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import {
  Menu,
  X,
  Phone,
  Mail,
  MapPin,
  Users,
  TrendingUp,
  Award,
  Star,
  ArrowRight,
  Quote,
  GraduationCap,
  ShoppingCart,
  Handshake,
  Target,
  Eye,
  Heart,
  CheckCircle,
  Clock,
  MessageSquare,
  Facebook,
  Twitter,
  Instagram,
  Linkedin
} from "lucide-react";

// CountingStat Component
interface CountingStatProps {
  number: string;
  label: string;
  shouldAnimate: boolean;
  delay: number;
}

const CountingStat: React.FC<CountingStatProps> = ({ number, label, shouldAnimate, delay }) => {
  const [currentNumber, setCurrentNumber] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    if (shouldAnimate && !isAnimating) {
      setIsAnimating(true);
      
      setTimeout(() => {
        const target = parseInt(number.replace(/[^0-9]/g, ''));
        const duration = 2000;
        const steps = 60;
        const increment = target / steps;
        let current = 0;
        
        const timer = setInterval(() => {
          current += increment;
          if (current >= target) {
            setCurrentNumber(target);
            clearInterval(timer);
          } else {
            setCurrentNumber(Math.floor(current));
          }
        }, duration / steps);

        return () => clearInterval(timer);
      }, delay);
    }
  }, [shouldAnimate, number, delay, isAnimating]);

  const formatNumber = (num: number) => {
    if (number.includes('+')) {
      return `${num.toLocaleString()}+`;
    }
    if (number.includes('%')) {
      return `${num}%`;
    }
    if (number.includes('M')) {
      return `${(num / 1000000).toFixed(1)}M`;
    }
    if (number.includes('K')) {
      return `${(num / 1000).toFixed(1)}K`;
    }
    return num.toLocaleString();
  };

  return (
    <div className="text-center p-6">
      <div className="text-4xl font-bold text-primary mb-2">
        {shouldAnimate ? formatNumber(currentNumber) : number}
      </div>
      <div className="text-muted-foreground">{label}</div>
    </div>
  );
};

// CountableStats Component
interface CountableStatsProps {
  stats: { number: string; label: string }[];
}

const CountableStats: React.FC<CountableStatsProps> = ({ stats }) => {
  const { ref, inView } = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });

  return (
    <div ref={ref} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
      {stats.map((stat, index) => (
        <CountingStat
          key={index}
          number={stat.number}
          label={stat.label}
          shouldAnimate={inView}
          delay={index * 200}
        />
      ))}
    </div>
  );
};

// Navigation Component
const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Impact", path: "/impact" },
    { name: "Contact", path: "/contact" },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="sticky top-0 z-50 w-full bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-2">
            <Link to="/" className="flex items-center space-x-2">
              <img 
                src="/lovable-uploads/e7ae4a6f-2a34-4e3c-a11b-c55f903b8f99.png" 
                alt="AgroLivex Logo" 
                className="h-10 w-auto"
              />
            </Link>
          </div>

          <nav className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`px-3 py-2 text-sm font-medium transition-colors hover:text-primary ${
                  isActive(item.path)
                    ? "text-primary border-b-2 border-primary"
                    : "text-muted-foreground"
                }`}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          <div className="hidden md:flex">
            <Button asChild>
              <Link to="/contact">Get Started</Link>
            </Button>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-muted-foreground hover:text-foreground"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 border-t">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  className={`block px-3 py-2 text-base font-medium transition-colors hover:text-primary ${
                    isActive(item.path) ? "text-primary" : "text-muted-foreground"
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <div className="px-3 py-2">
                <Button asChild className="w-full">
                  <Link to="/contact" onClick={() => setIsOpen(false)}>
                    Get Started
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

// Footer Component
const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <img 
                src="/lovable-uploads/e7ae4a6f-2a34-4e3c-a11b-c55f903b8f99.png" 
                alt="AgroLivex Logo" 
                className="h-8 w-auto"
              />
            </div>
            <p className="text-primary-foreground/80 mb-4 max-w-md">
              Empowering African farmers through sustainable livestock production, 
              training, and market connections for a thriving agricultural future.
            </p>
            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4" />
                <span>+251904795093</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4" />
                <span>agrolivex1@gmail.com</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="h-4 w-4" />
                <span>Mojo, Ethiopia</span>
              </div>
            </div>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  Our Services
                </Link>
              </li>
              <li>
                <Link to="/impact" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  Impact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              <li className="text-primary-foreground/80">Livestock Supply</li>
              <li className="text-primary-foreground/80">Farmer Training</li>
              <li className="text-primary-foreground/80">Market linkage</li>
              <li className="text-primary-foreground/80">Advisory service</li>
              <li className="text-primary-foreground/80">Access to Finance</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center">
          <p className="text-primary-foreground/80">
            &copy; 2024 AgroLivex. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

// Index Page Component
const Index = () => {
  const stats = [
    { number: "100+", label: "Farmers Trained" },
    { number: "1100+", label: "Livestock Supplied" },
    { number: "20+", label: "Market Partners" },
    { number: "95%", label: "Success Rate" },
  ];

  const services = [
    {
      icon: Users,
      title: "Livestock Supply",
      description: "Quality cattle, sheep, and goats for fattening and breeding programs with comprehensive support.",
      image: "/src/assets/cattle-facility.jpg"
    },
    {
      icon: GraduationCap,
      title: "Farmer Training",
      description: "Comprehensive training programs on modern livestock management and sustainable practices.",
      image: "/src/assets/farmer-training.jpg"
    },
    {
      icon: ShoppingCart,
      title: "Market Linkage",
      description: "Connect farmers directly with buyers, ensuring fair prices and reliable market access.",
      image: "/src/assets/market-linkage.jpg"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 bg-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl lg:text-6xl font-bold text-foreground mb-6">
                Transforming <span className="text-primary">African Agriculture</span> Together
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                Empowering farmers through sustainable livestock production, training, and market connections for a thriving agricultural future.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg">
                  <Link to="/services">
                    Our Services <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button asChild size="lg" variant="outline">
                  <Link to="/contact">Get Started Today</Link>
                </Button>
              </div>
            </div>
            <div className="relative">
              <img 
                src="/src/assets/hero-cattle.jpg" 
                alt="Cattle in field" 
                className="rounded-lg shadow-2xl w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">Our Impact in Numbers</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              See the measurable difference we're making in Ethiopian agriculture
            </p>
          </div>
          <CountableStats stats={stats} />
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">Our Core Services</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Comprehensive solutions for sustainable livestock farming
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="h-full">
                <CardHeader>
                  <div className="flex justify-center mb-4">
                    <service.icon className="h-12 w-12 text-primary" />
                  </div>
                  <CardTitle className="text-center">{service.title}</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <img 
                    src={service.image}
                    alt={service.title}
                    className="w-full h-48 object-cover rounded-lg mb-4"
                  />
                  <CardDescription className="text-base">
                    {service.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* About Preview */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-foreground mb-6">
                Building Sustainable Agricultural Communities
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                AgroLivex is dedicated to transforming the African livestock sector through innovative approaches that benefit farmers, communities, and the environment.
              </p>
              <div className="space-y-4 mb-8">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-6 w-6 text-primary" />
                  <span>Sustainable livestock management practices</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-6 w-6 text-primary" />
                  <span>Direct market access for farmers</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-6 w-6 text-primary" />
                  <span>Comprehensive training and support</span>
                </div>
              </div>
              <Button asChild>
                <Link to="/about">
                  Learn More About Us <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
            <div>
              <img 
                src="/src/assets/farmer-training.jpg"
                alt="Farmer training session"
                className="rounded-lg shadow-xl w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="py-20 bg-secondary">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="mb-8">
            <div className="flex justify-center mb-4">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-6 w-6 text-yellow-400 fill-current" />
              ))}
            </div>
            <blockquote className="text-2xl font-medium text-foreground mb-6">
              "AgroLivex transformed our farming operations. Their training and support helped us reduce feeding costs and improve productivity while maintaining quality."
            </blockquote>
            <div className="text-lg">
              <div className="font-semibold text-foreground">Nursa Khedir</div>
              <div className="text-muted-foreground">Smallholder Farmer, Oromia Region</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Transform Your Farm?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Join hundreds of farmers who have improved their livestock operations with our support. 
            Start your journey to sustainable farming today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" variant="secondary">
              <Link to="/contact">
                Contact Us Today <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="bg-white/10 text-white border-white hover:bg-white hover:text-primary">
              <Link to="/services">
                Explore Our Services
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

// About Page Component
const About = () => {
  const values = [
    {
      icon: Target,
      title: "Excellence",
      description: "We strive for the highest quality in all our services and deliverables"
    },
    {
      icon: Eye,
      title: "Innovation",
      description: "We embrace new technologies and methods to improve agricultural practices"
    },
    {
      icon: Heart,
      title: "Sustainability",
      description: "We promote environmentally responsible farming practices for future generations"
    },
    {
      icon: Handshake,
      title: "Partnership",
      description: "We build strong, collaborative relationships with farmers and communities"
    }
  ];

  const team = [
    {
      name: "Nure Abdulhussein",
      role: "Founder & CEO",
      image: "/lovable-uploads/6f1935fb-88ca-4011-be46-b5c8b0a6ec7c.png",
      description: "Agricultural economist with 10+ years of experience in livestock development"
    },
    {
      name: "Dr. Sarah Johnson",
      role: "Chief Veterinarian",
      image: "/lovable-uploads/75eec144-cb5d-4ae1-9537-73e82852138e.png",
      description: "Veterinary expert specializing in livestock health and sustainable farming practices"
    },
    {
      name: "Michael Chen",
      role: "Training Director",
      image: "/lovable-uploads/91000936-282e-491c-b269-7a565105e6dd.png",
      description: "Adult education specialist focused on farmer capacity building and knowledge transfer"
    }
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
              Dedicated to transforming African agriculture through sustainable livestock production, 
              farmer empowerment, and innovative market solutions.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl flex items-center">
                  <Target className="h-8 w-8 text-primary mr-3" />
                  Our Mission
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-lg">
                  To empower African farmers through sustainable livestock production, comprehensive training, 
                  and reliable market connections, creating prosperity for rural communities while promoting 
                  environmental stewardship.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-2xl flex items-center">
                  <Eye className="h-8 w-8 text-primary mr-3" />
                  Our Vision
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-lg">
                  A thriving African agricultural sector where every farmer has access to quality livestock, 
                  modern farming knowledge, and profitable market opportunities, contributing to food security 
                  and economic development across the continent.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">Our Core Values</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              The principles that guide everything we do
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="text-center h-full">
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
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">Our Story</h2>
            <p className="text-xl text-muted-foreground">
              How AgroLivex came to life
            </p>
          </div>
          
          <div className="prose prose-lg max-w-none text-muted-foreground">
            <p className="text-lg leading-relaxed mb-6">
              AgroLivex was founded with a simple yet powerful vision: to transform the agricultural landscape 
              of Africa by empowering farmers with the knowledge, resources, and market access they need to thrive. 
              Our journey began when our founder, an agricultural economist, witnessed firsthand the challenges 
              faced by smallholder farmers in rural Ethiopia.
            </p>
            
            <p className="text-lg leading-relaxed mb-6">
              Recognizing the immense potential of the African livestock sector, we set out to bridge the gap 
              between traditional farming methods and modern, sustainable practices. Through partnerships with 
              local communities, veterinary experts, and market stakeholders, we've developed comprehensive 
              programs that address the entire value chain.
            </p>
            
            <p className="text-lg leading-relaxed">
              Today, AgroLivex stands as a testament to what's possible when passion meets purpose. We've trained 
              hundreds of farmers, supplied thousands of livestock, and created lasting market connections that 
              benefit entire communities. Our commitment to sustainability and innovation continues to drive us 
              forward as we expand our impact across Africa.
            </p>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 bg-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">Meet Our Team</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Dedicated professionals committed to agricultural transformation
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <Card key={index} className="text-center">
                <CardHeader>
                  <img 
                    src={member.image}
                    alt={member.name}
                    className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
                  />
                  <CardTitle>{member.name}</CardTitle>
                  <CardDescription className="text-primary font-semibold">
                    {member.role}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    {member.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">Join Our Mission</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Ready to be part of the agricultural transformation? Let's work together to build 
            a more prosperous and sustainable future for African farmers.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" variant="secondary">
              <Link to="/contact">
                Get in Touch <ArrowRight className="ml-2 h-5 w-5" />
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

// Services Page Component
const Services = () => {
  const services = [
    {
      icon: Users,
      title: "Livestock Supply",
      description: "We provide high-quality cattle, sheep, and goats specifically selected for fattening and breeding programs.",
      image: "/src/assets/cattle-facility.jpg",
      features: [
        "Quality breeding stock selection",
        "Health certification and documentation",
        "Transportation and delivery services",
        "Post-delivery support and monitoring"
      ]
    },
    {
      icon: GraduationCap,
      title: "Farmer Training",
      description: "Comprehensive training programs designed to enhance farming knowledge and sustainable practices.",
      image: "/src/assets/farmer-training.jpg",
      features: [
        "Modern livestock management techniques",
        "Sustainable farming practices",
        "Business and financial management",
        "Technology integration and adoption"
      ]
    },
    {
      icon: ShoppingCart,
      title: "Market Linkage",
      description: "Direct connections between farmers and buyers, ensuring fair prices and reliable market access.",
      image: "/src/assets/market-linkage.jpg",
      features: [
        "Direct buyer connections",
        "Price negotiation support",
        "Quality assurance standards",
        "Logistics and transportation coordination"
      ]
    }
  ];

  const process = [
    {
      step: "01",
      title: "Assessment",
      description: "We evaluate your current farming operations and identify opportunities for improvement."
    },
    {
      step: "02",
      title: "Planning",
      description: "Together we develop a customized plan tailored to your specific needs and goals."
    },
    {
      step: "03",
      title: "Implementation",
      description: "We provide the livestock, training, and market connections to execute your plan."
    },
    {
      step: "04",
      title: "Follow-up",
      description: "Ongoing support and monitoring to ensure long-term success and sustainability."
    }
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
              Comprehensive solutions for sustainable livestock farming and agricultural development
            </p>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-20">
            {services.map((service, index) => (
              <div key={index} className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
              }`}>
                <div className={index % 2 === 1 ? 'lg:col-start-2' : ''}>
                  <div className="flex items-center mb-6">
                    <service.icon className="h-12 w-12 text-primary mr-4" />
                    <h2 className="text-4xl font-bold text-foreground">{service.title}</h2>
                  </div>
                  <p className="text-xl text-muted-foreground mb-8">
                    {service.description}
                  </p>
                  <ul className="space-y-3 mb-8">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center space-x-3">
                        <CheckCircle className="h-6 w-6 text-primary" />
                        <span className="text-muted-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button asChild>
                    <Link to="/contact">
                      Get Started <ArrowRight className="ml-2 h-5 w-5" />
                    </Link>
                  </Button>
                </div>
                <div className={index % 2 === 1 ? 'lg:col-start-1' : ''}>
                  <img 
                    src={service.image}
                    alt={service.title}
                    className="rounded-lg shadow-xl w-full h-auto"
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
            <h2 className="text-4xl font-bold text-foreground mb-4">How We Work</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Our proven process ensures successful outcomes for every farmer we work with
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {process.map((step, index) => (
              <Card key={index} className="text-center relative">
                <CardHeader>
                  <div className="text-6xl font-bold text-primary/20 mb-4">{step.step}</div>
                  <CardTitle className="text-xl">{step.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    {step.description}
                  </CardDescription>
                </CardContent>
                {index < process.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                    <ArrowRight className="h-8 w-8 text-primary/40" />
                  </div>
                )}
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Get Started?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Transform your farming operations with our comprehensive services. 
            Contact us today to discuss your specific needs and goals.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" variant="secondary">
              <Link to="/contact">
                Contact Us Today <ArrowRight className="ml-2 h-5 w-5" />
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

// Impact Page Component
const Impact = () => {
  const stats = [
    {
      icon: Users,
      number: "100+",
      label: "Farmers Trained",
      description: "small holder farmers trained with cost effective, Methane emission reduction and modern livestock managemet techniques"
    },
    {
      icon: TrendingUp,
      number: "1,100+",
      label: "Cattle, Sheep & goat supplied",
      description: "Livestock successfully fattened and prepared for market"
    },
    {
      icon: Award,
      number: "20+",
      label: "Market Partners",
      description: "Reliable buyers and market connections established"
    },
  ];

  const testimonials = [
    {
      name: "Nursa Khedir",
      role: "Smallholder Farmer",
      location: "Oromia Region",
      quote: "AgroLivex Transformed out farming operations. Their training and support helped us to reduce Feeding costs and improve productivity while maintaining quality.",
      rating: 5
    },
    {
      name: "Assefa Hailu",
      role: "Butcher",
      location: "Addis Ababa",
      quote: "The quality of Cattle from Agrolivex is consistently excellent. Their Cattle Fattening Provides healthy, market ready livestock that our customers Prefer.",
      rating: 5
    },
    {
      name: "Dr Bekele Abera",
      role: "Veterinarian",
      location: "oromia Region",
      quote: "The Feeding techniques and sustainable Practices Promoted by Agrolivex are scientifically sound. I've seen remarkable improvements in animal health and productivity.",
      rating: 5
    }
  ];

  const caseStudies = [
    {
      title: "improving income and animal Productivity in Rural oromia",
      description: "How farmer training and market linkage helped Small holder farmers increase their income and animal productivity",
      results: [
        "more than 100 farmers trained in cost effective and Methane emission reduction techniques",
        "increased income and animal productivity",
        "Established direct market Connections",
        "improved awareness in sustainable Practices"
      ]
    },
    {
      title: "livestock fattening success",
      description: "more than 1000 livestock fattened in past 6 months demonstrated the effectiveness of our approach with measurable outcomes.",
      results: [
        "1,100+ livestock successfully fattened and supplied",
        "tested &  Proved our cost effective and methane emission reduction techniques",
        "affordable and competitive prices at Market"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="py-20 bg-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold text-foreground mb-6">Our Impact</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Measuring the real difference we're making in Ethiopian agriculture and rural livelihoods
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <Card key={index} className="text-center">
                <CardHeader>
                  <div className="flex justify-center mb-4">
                    <stat.icon className="h-12 w-12 text-primary" />
                  </div>
                  <div className="text-4xl font-bold text-foreground mb-2">{stat.number}</div>
                  <CardTitle>{stat.label}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    {stat.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-20 bg-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">Success Stories</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Real examples of how our programs create lasting change
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {caseStudies.map((study, index) => (
              <Card key={index}>
                <CardHeader>
                  <CardTitle className="text-2xl">{study.title}</CardTitle>
                  <CardDescription className="text-base">
                    {study.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <h4 className="font-semibold mb-4 text-foreground">Key Results:</h4>
                  <ul className="space-y-2">
                    {study.results.map((result, resultIndex) => (
                      <li key={resultIndex} className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-primary rounded-full"></div>
                        <span className="text-muted-foreground">{result}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">What People Say</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Hear from the farmers, partners, and community members we work with
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="relative">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <Quote className="h-8 w-8 text-primary/20" />
                    <div className="flex">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                      ))}
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <blockquote className="text-muted-foreground mb-6 italic">
                    "{testimonial.quote}"
                  </blockquote>
                  <div>
                    <div className="font-semibold text-foreground">{testimonial.name}</div>
                    <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                    <div className="text-sm text-muted-foreground">{testimonial.location}</div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Impact Timeline */}
      <section className="py-20 bg-secondary">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">Our Journey</h2>
            <p className="text-xl text-muted-foreground">
              key Milestones in African agriculture
            </p>
          </div>
          
          <div className="space-y-8">
            <div className="flex items-center space-x-6">
              <div className="flex-shrink-0 w-16 h-16 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold text-sm">
                2024,Q4
              </div>
              <div>
                <h3 className="text-xl font-semibold text-foreground">AgroLivex Founded</h3>
                <p className="text-muted-foreground">Started with a vision to African livestock sector</p>
              </div>
            </div>
            
            <div className="flex items-center space-x-6">
              <div className="flex-shrink-0 w-16 h-16 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold text-sm">
                2025,Q1
              </div>
              <div>
                <h3 className="text-xl font-semibold text-foreground">First Training Programs</h3>
                <p className="text-muted-foreground">Launched farmer training</p>
              </div>
            </div>
            
            <div className="flex items-center space-x-6">
              <div className="flex-shrink-0 w-16 h-16 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold text-sm">
                2025,Q3
              </div>
              <div>
                <h3 className="text-xl font-semibold text-foreground">Expanding Impact</h3>
                <p className="text-muted-foreground">100+ farmers trained, 1,100+ livestock supplied, growing network</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">Be Part of Our Impact</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Join us in creating positive change in African agriculture. 
            Together, we can build a more prosperous rural future.
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

// Contact Page Component
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
    
    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: "Error",
        description: "Please fill in all required fields.",
        variant: "destructive",
      });
      return;
    }

    console.log("Form submitted:", formData);
    
    toast({
      title: "Message Sent!",
      description: "Thank you for your message. We'll get back to you soon.",
    });

    setFormData({
      name: "",
      email: "",
      phone: "",
      service: "",
      message: ""
    });
  };

  const whatsappMessage = encodeURIComponent(
    "Hello AgroLivex! I'm interested in learning more about your livestock services. Could you please provide more information?"
  );

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="py-20 bg-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold text-foreground mb-6">Contact Us</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Ready to transform your farming operations? Get in touch with our team of agricultural experts.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-8">Get in Touch</h2>
              
              <div className="space-y-6 mb-8">
                <div className="flex items-center space-x-4">
                  <div className="bg-primary/10 p-3 rounded-lg">
                    <Phone className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">Phone</h3>
                    <p className="text-muted-foreground">+251904795093</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="bg-primary/10 p-3 rounded-lg">
                    <Mail className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">Email</h3>
                    <p className="text-muted-foreground">agrolivex1@gmail.com</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="bg-primary/10 p-3 rounded-lg">
                    <MapPin className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">Office</h3>
                    <p className="text-muted-foreground">Mojo, Ethiopia</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="bg-primary/10 p-3 rounded-lg">
                    <Clock className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">Business Hours</h3>
                    <p className="text-muted-foreground">Mon - Fri: 8:00 AM - 6:00 PM</p>
                  </div>
                </div>
              </div>

              {/* WhatsApp Button */}
              <div className="mb-8">
                <h3 className="text-xl font-semibold text-foreground mb-4">Prefer to chat?</h3>
                <Button asChild size="lg" className="bg-green-600 hover:bg-green-700">
                  <a 
                    href={`https://wa.me/251904795093?text=${whatsappMessage}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <MessageSquare className="mr-2 h-5 w-5" />
                    Chat on WhatsApp
                  </a>
                </Button>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <Card>
                <CardHeader>
                  <CardTitle>Send us a Message</CardTitle>
                  <CardDescription>
                    Fill out the form below and we'll get back to you within 24 hours.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="name">Name *</Label>
                        <Input
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          required
                          placeholder="Your full name"
                        />
                      </div>
                      <div>
                        <Label htmlFor="email">Email *</Label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          required
                          placeholder="your.email@example.com"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="phone">Phone</Label>
                        <Input
                          id="phone"
                          name="phone"
                          type="tel"
                          value={formData.phone}
                          onChange={handleInputChange}
                          placeholder="+251 XXX XXX XXX"
                        />
                      </div>
                      <div>
                        <Label htmlFor="service">Service Interest</Label>
                        <Select value={formData.service} onValueChange={handleSelectChange}>
                          <SelectTrigger>
                            <SelectValue placeholder="Select a service" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="livestock-supply">Livestock Supply</SelectItem>
                            <SelectItem value="farmer-training">Farmer Training</SelectItem>
                            <SelectItem value="market-linkage">Market Linkage</SelectItem>
                            <SelectItem value="advisory-service">Advisory Service</SelectItem>
                            <SelectItem value="access-to-finance">Access to Finance</SelectItem>
                            <SelectItem value="general-inquiry">General Inquiry</SelectItem>
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
                        required
                        rows={5}
                        placeholder="Tell us about your farming goals and how we can help..."
                      />
                    </div>

                    <Button type="submit" className="w-full">
                      Send Message
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

// NotFound Page Component
const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">404</h1>
        <p className="text-xl text-gray-600 mb-4">Oops! Page not found</p>
        <a href="/" className="text-blue-500 hover:text-blue-700 underline">
          Return to Home
        </a>
      </div>
    </div>
  );
};

// Main App Component
const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/impact" element={<Impact />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;