import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { TrendingUp, Users, Award, Star, ArrowRight, Quote } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const Impact = () => {
  const stats = [
    {
      icon: Users,
      number: "500+",
      label: "Farmers Trained",
      description: "Smallholder farmers equipped with modern livestock management skills"
    },
    {
      icon: TrendingUp,
      number: "1,200+",
      label: "Cattle Processed",
      description: "Livestock successfully fattened and prepared for market"
    },
    {
      icon: Award,
      number: "50+",
      label: "Market Partners",
      description: "Reliable buyers and market connections established"
    },
    {
      icon: Star,
      number: "95%",
      label: "Success Rate",
      description: "Farmers reporting increased income and productivity"
    },
  ];

  const testimonials = [
    {
      name: "Almaz Tadesse",
      role: "Smallholder Farmer",
      location: "Oromia Region",
      quote: "AgroLivex transformed our farming operations. Their training and support helped us triple our cattle production while maintaining quality. My family's income has increased significantly.",
      rating: 5
    },
    {
      name: "Bekele Hailu",
      role: "Livestock Trader",
      location: "Addis Ababa",
      quote: "The quality of cattle from AgroLivex farmers is consistently excellent. Their fattening program produces healthy, market-ready livestock that our customers prefer.",
      rating: 5
    },
    {
      name: "Meron Assefa",
      role: "Agricultural Cooperative Leader",
      location: "SNNP Region",
      quote: "Our cooperative has partnered with AgroLivex for two years. Their training programs have empowered our members with knowledge and confidence to improve their livelihoods.",
      rating: 5
    },
    {
      name: "Dr. Yonas Mekonnen",
      role: "Veterinarian",
      location: "Amhara Region",
      quote: "The health protocols and feeding practices promoted by AgroLivex are scientifically sound. I've seen remarkable improvements in animal health and productivity.",
      rating: 5
    }
  ];

  const caseStudies = [
    {
      title: "Doubling Income in Rural Oromia",
      description: "How farmer training and market linkage helped a community cooperative increase their average income by 120% in one year.",
      results: [
        "25 farmers trained in modern techniques",
        "120% increase in average income",
        "Established direct market connections",
        "Reduced livestock mortality by 40%"
      ]
    },
    {
      title: "Sustainable Fattening Program Success",
      description: "A 6-month cattle fattening program that demonstrated the effectiveness of our approach with measurable outcomes.",
      results: [
        "200 cattle successfully fattened",
        "Average weight gain of 35kg per animal",
        "98% survival rate",
        "Premium prices achieved at market"
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
              Key milestones in our mission to transform Ethiopian agriculture
            </p>
          </div>
          
          <div className="space-y-8">
            <div className="flex items-center space-x-6">
              <div className="flex-shrink-0 w-16 h-16 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold">
                2022
              </div>
              <div>
                <h3 className="text-xl font-semibold text-foreground">AgroLivex Founded</h3>
                <p className="text-muted-foreground">Started with a vision to transform Ethiopian livestock sector</p>
              </div>
            </div>
            
            <div className="flex items-center space-x-6">
              <div className="flex-shrink-0 w-16 h-16 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold">
                2023
              </div>
              <div>
                <h3 className="text-xl font-semibold text-foreground">First Training Programs</h3>
                <p className="text-muted-foreground">Launched comprehensive farmer training in 3 regions</p>
              </div>
            </div>
            
            <div className="flex items-center space-x-6">
              <div className="flex-shrink-0 w-16 h-16 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold">
                2024
              </div>
              <div>
                <h3 className="text-xl font-semibold text-foreground">Expanding Impact</h3>
                <p className="text-muted-foreground">500+ farmers trained, 1,200+ cattle processed, growing network</p>
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
            Join us in creating positive change in Ethiopian agriculture. 
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

export default Impact;