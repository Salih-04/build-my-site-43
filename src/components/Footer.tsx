import { Link } from "react-router-dom";
import { Leaf, Phone, Mail, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <Leaf className="h-8 w-8" />
              <span className="text-xl font-bold">AgroLivex</span>
            </div>
            <p className="text-primary-foreground/80 mb-4 max-w-md">
              Empowering Ethiopian farmers through sustainable livestock production, 
              training, and market connections for a thriving agricultural future.
            </p>
            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4" />
                <span>+251 11 123 4567</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4" />
                <span>info@agrolivex.com</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="h-4 w-4" />
                <span>Addis Ababa, Ethiopia</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
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

          {/* Services */}
          <div>
            <h3 className="font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              <li className="text-primary-foreground/80">Cattle Fattening</li>
              <li className="text-primary-foreground/80">Farmer Training</li>
              <li className="text-primary-foreground/80">Market Linkage</li>
              <li className="text-primary-foreground/80">Consulting</li>
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

export default Footer;