import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Play, Quote } from "lucide-react";

export const GuruBlessings = () => {
  return (
    <section className="py-16 bg-gradient-blessing relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[conic-gradient(from_45deg,rgba(255,255,255,0.1)_0deg,transparent_60deg,rgba(255,255,255,0.1)_120deg,transparent_180deg)] bg-[length:100px_100px]"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Guru Image */}
          <div className="mb-8">
            <div className="w-32 h-32 md:w-40 md:h-40 mx-auto rounded-full bg-white/20 backdrop-blur-sm border-4 border-white/30 flex items-center justify-center shadow-blessing mb-6">
              <div className="text-white/60 text-sm text-center">
                Guru's<br />Blessed<br />Portrait
              </div>
            </div>
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">
              P. Lakshmi Narasimha Murthy Garu
            </h3>
            <p className="text-white/90 text-lg">
              Our Revered Guru & Spiritual Guide
            </p>
          </div>

          {/* Blessing Message */}
          <Card className="bg-white/10 backdrop-blur-sm border-white/20 shadow-blessing">
            <CardContent className="p-8">
              <Quote className="h-8 w-8 text-white/80 mx-auto mb-6" />
              
              <blockquote className="text-lg md:text-xl text-white/95 italic mb-6 leading-relaxed">
                "May the divine blessings of the Almighty guide every soul seeking spiritual fulfillment through these sacred rituals. Under divine grace, we perform each ceremony with complete devotion and adherence to ancient Vedic traditions."
              </blockquote>
              
              <div className="text-white/80 font-medium">
                - Sri P. Lakshmi Narasimha Murthy
              </div>
            </CardContent>
          </Card>

          {/* Video Section */}
          <div className="mt-8">
            <Card className="bg-white/10 backdrop-blur-sm border-white/20 shadow-blessing max-w-2xl mx-auto">
              <CardContent className="p-6">
                <div className="aspect-video bg-black/30 rounded-lg flex items-center justify-center mb-4">
                  <Button 
                    size="lg" 
                    className="bg-white/20 hover:bg-white/30 text-white border-white/40"
                    onClick={() => {/* Video play logic */}}
                  >
                    <Play className="h-8 w-8 mr-2 fill-white" />
                    Watch Guru's Message
                  </Button>
                </div>
                <p className="text-white/80 text-sm">
                  Listen to our Guru's guidance on spiritual practices and the importance of Vedic rituals
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Divine Guidance Notice */}
          <div className="mt-8 text-center">
            <p className="text-white/90 text-lg">
              🕉️ Under the divine guidance of Sri P. Lakshmi Narasimha Murthy Garu 🕉️
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};