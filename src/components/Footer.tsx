import { Button } from "@/components/ui/button";
import { Phone, MessageCircle, Mail, MapPin, Clock, Globe } from "lucide-react";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-secondary text-secondary-foreground">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About Section */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-white">
              Sri Guru Guha Peetam
            </h3>
            <p className="text-secondary-foreground/80 text-sm leading-relaxed">
              Serving the spiritual needs of Hindu families across the USA with authentic Vedic rituals and ceremonies under the divine guidance of our revered Guru.
            </p>
            <div className="flex items-center text-sm text-secondary-foreground/80">
              <Clock className="h-4 w-4 mr-2 flex-shrink-0" />
              <span>Available 7 days a week for consultations</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white">
              Ritual Categories
            </h4>
            <ul className="space-y-2 text-sm">
              {['Abhishekam', 'Homam Services', 'Pooja Ceremonies', 'Kalyanam (Weddings)', 'Vratams & Fasting', 'House Blessings'].map((link) => (
                <li key={link}>
                  <button className="text-secondary-foreground/80 hover:text-white transition-colors text-left">
                    {link}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white">
              Resources
            </h4>
            <ul className="space-y-2 text-sm">
              {['Panchang Calendar', 'Ritual Gallery', 'FAQ', 'Preparation Lists', 'Muhurat Times', 'Testimonials'].map((link) => (
                <li key={link}>
                  <button className="text-secondary-foreground/80 hover:text-white transition-colors text-left">
                    {link}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white">
              Get in Touch
            </h4>
            <div className="space-y-3">
              <div className="flex items-center text-sm text-secondary-foreground/80">
                <Phone className="h-4 w-4 mr-3 flex-shrink-0" />
                <span>+1 (678) 851-1269</span>
              </div>
              <div className="flex items-center text-sm text-secondary-foreground/80">
                <MessageCircle className="h-4 w-4 mr-3 flex-shrink-0" />
                <span>WhatsApp: +1 (678) 851-1269</span>
              </div>
              <div className="flex items-center text-sm text-secondary-foreground/80">
                <Mail className="h-4 w-4 mr-3 flex-shrink-0" />
                <span>ganaskanda23@gmail.com</span>
              </div>
              <div className="flex items-start text-sm text-secondary-foreground/80">
                <MapPin className="h-4 w-4 mr-3 flex-shrink-0 mt-0.5" />
                <span>Serving all 50 US States<br />Based in Texas</span>
              </div>
            </div>
          </div>
        </div>

        {/* Contact CTAs */}
        <div className="border-t border-secondary-foreground/20 pt-8 mt-8">
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              size="lg"
              className="bg-green-500 hover:bg-green-600 text-white shadow-warm"
              onClick={() => window.open('https://wa.me/16788511269?text=Namaste! I would like to inquire about booking a ritual ceremony.', '_blank')}
            >
              <MessageCircle className="h-5 w-5 mr-2" />
              Chat on WhatsApp
            </Button>
            <Button 
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white/10"
              onClick={() => window.open('tel:+16788511269')}
            >
              <Phone className="h-5 w-5 mr-2" />
              Call Now
            </Button>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-secondary-foreground/20 bg-secondary/80">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-sm text-secondary-foreground/80">
              © {currentYear} Sri Guru Guha Peetam Vaidikadarma. All rights reserved.
            </div>
            
            <div className="flex items-center gap-6 text-sm">
              <button className="text-secondary-foreground/80 hover:text-white transition-colors">
                Privacy Policy
              </button>
              <button className="text-secondary-foreground/80 hover:text-white transition-colors">
                Terms of Service
              </button>
              <button className="flex items-center text-secondary-foreground/80 hover:text-white transition-colors">
                <Globe className="h-4 w-4 mr-1" />
                English | తెలుగు
              </button>
            </div>
          </div>

          {/* Divine Footer Message */}
          <div className="text-center mt-4 pt-4 border-t border-secondary-foreground/10">
            <p className="text-secondary-foreground/70 text-sm">
              🕉️ सर्वे भवन्तु सुखिनः सर्वे सन्तु निरामयाः | May all beings be happy and free from illness 🕉️
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};