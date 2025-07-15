import { Button } from "@/components/ui/button";
import { ArrowDown, Phone, MessageCircle } from "lucide-react";

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-sacred overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[length:60px_60px]"></div>
      </div>
      
      <div className="container mx-auto px-4 text-center relative z-10">
        {/* Main Title */}
        <div className="mb-8">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 leading-tight">
            SRI GURU GUHA PEETAM
          </h1>
          <h2 className="text-2xl md:text-4xl font-sanskrit font-semibold text-primary-glow mb-6">
            VAIDIKADARMA
          </h2>
          <p className="text-lg md:text-xl text-white/90 mb-2">
            With Blessings of our Guru
          </p>
          <p className="text-xl md:text-2xl font-semibold text-accent">
            P. Lakshmi Narasimha Murthy Garu
          </p>
        </div>

        {/* Guru Image Placeholder */}
        <div className="mb-8">
          <div className="w-32 h-32 md:w-40 md:h-40 mx-auto rounded-full bg-white/20 backdrop-blur-sm border-4 border-white/30 flex items-center justify-center shadow-blessing">
            <div className="text-white/60 text-sm text-center">
              Guru's<br />Blessed<br />Image
            </div>
          </div>
        </div>

        {/* Microcopy */}
        <p className="text-lg md:text-xl text-white/90 mb-8 max-w-2xl mx-auto">
          Book Hindu rituals the traditional way, anywhere in the USA
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
          <Button 
            size="lg" 
            className="bg-white text-primary hover:bg-white/90 shadow-warm text-lg px-8"
            onClick={() => document.getElementById('categories')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Explore Rituals
            <ArrowDown className="ml-2 h-5 w-5" />
          </Button>
          
          <div className="flex gap-2">
            <Button 
              variant="outline" 
              size="lg"
              className="border-white text-white hover:bg-white/10"
              onClick={() => window.open('tel:+1234567890')}
            >
              <Phone className="h-5 w-5 mr-2" />
              Call Now
            </Button>
            
            <Button 
              variant="outline" 
              size="lg"
              className="border-white text-white hover:bg-white/10"
              onClick={() => window.open('https://wa.me/1234567890')}
            >
              <MessageCircle className="h-5 w-5 mr-2" />
              WhatsApp
            </Button>
          </div>
        </div>

        {/* Trust Indicator */}
        <div className="text-white/80 text-sm">
          <p>🕉️ Families across the USA trust our Vaidika service 🕉️</p>
        </div>
      </div>
    </section>
  );
};