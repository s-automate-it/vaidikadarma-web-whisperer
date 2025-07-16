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
            <div className="w-32 h-32 md:w-40 md:h-40 mx-auto rounded-full bg-white/20 backdrop-blur-sm border-4 border-white/30 overflow-hidden shadow-blessing mb-6">
              <img 
                src="/lovable-uploads/16f0b540-13df-44c5-b272-44a6ba88ee7e.png" 
                alt="Venkata Shivanaga Kumar" 
                className="w-full h-full object-cover"
              />
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">
              Venkata Shivanaga Kumar
            </h3>
            </div>
          </div>

          {/* Blessing Message */}
          <Card className="bg-white/10 backdrop-blur-sm border-white/20 shadow-blessing">
            <CardContent className="p-8">
              <Quote className="h-8 w-8 text-white/80 mx-auto mb-6" />
              
              <div className="mb-6">
                <div className="text-lg md:text-xl text-white/95 mb-4 leading-relaxed font-sanskrit">
                  ధర్మేణధ్రియతేవిశ్వంధర్మేణ ధ్రియతేమహీ।<br />
                  ధర్మంతువైదికంప్రోక్తంసర్వభూతోపకారకమ్।।1<br /><br />
                  
                  వైదికంధర్మమాశ్రిత్యకరిష్యేజీవనంముదా।<br />
                  జన్మనాదీక్షితోభూత్వాసర్వభూతహితేరత:।।2<br /><br />
                  
                  ఆంధ్రదేశేతు సంభూత:శివనాగఇతిశ్రుత:।<br />
                  పౌరోహిత్యక్రియాదక్షోలోభమోహవివర్జిత:।।3
                </div>
                
                <blockquote className="text-base md:text-lg text-white/90 italic leading-relaxed">
                  "The universe is sustained by dharma, and the Earth is upheld by dharma.
                  Dharma, as declared in the Vedas, benefits all living beings.<br /><br />
                  
                  By following the Vedic dharma, one should live a joyful life.
                  Having been consecrated from birth, one must dedicate themselves to the welfare of all beings.<br /><br />
                  
                  Born in the land of Andhra, known as Shiva Naga,
                  He is skilled in priestly duties, free from greed and delusion."
                </blockquote>
              </div>
            </CardContent>
          </Card>

          {/* Video Section */}
          <div className="mt-8">
            <Card className="bg-white/10 backdrop-blur-sm border-white/20 shadow-blessing max-w-2xl mx-auto">
              <CardContent className="p-6">
                <div className="aspect-video rounded-lg overflow-hidden mb-4">
                  <iframe
                    width="100%"
                    height="100%"
                    src="https://www.youtube.com/embed/T1RMG1z_gOs"
                    title="Guru's Message"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                    className="w-full h-full"
                  ></iframe>
                </div>
                <p className="text-white/80 text-sm">
                  Listen to spiritual practices and the importance of Vedic rituals
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Divine Guidance Notice */}
          <div className="mt-8 text-center">
            <p className="text-white/90 text-lg">
              🕉️🕉️🕉️🕉️🕉️🕉️🕉️🕉️🕉️🕉️
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
