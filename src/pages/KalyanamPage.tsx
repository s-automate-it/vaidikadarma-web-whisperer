import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Crown, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

const kalyanamServices = [
  {
    id: "engagements",
    title: "Engagements",
    description: "Traditional engagement ceremony with Vedic rituals and blessings",
    duration: "2-3 hours",
    price: "₹5,000"
  },
  {
    id: "vivahamu",
    title: "Vivahamu (Weddings)",
    description: "Complete Vedic wedding ceremony with all traditional rituals",
    duration: "6-8 hours",
    price: "₹15,000"
  },
  {
    id: "shasti-purthi",
    title: "Shasti Purthi",
    description: "60th wedding anniversary celebration ceremony",
    duration: "3-4 hours",
    price: "₹8,000"
  },
  {
    id: "ugra-bhema-ratha-shanthi",
    title: "Ugra & Bhema Ratha Shanthi",
    description: "Special ceremonies for milestone wedding anniversaries",
    duration: "4-5 hours",
    price: "₹10,000"
  }
];

const KalyanamPage = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <section className="bg-gradient-to-br from-primary-glow to-accent py-16">
        <div className="container mx-auto px-4">
          <Link to="/" className="inline-flex items-center text-primary-foreground mb-6 hover:underline">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Home
          </Link>
          <div className="text-center text-primary-foreground">
            <div className="w-20 h-20 mx-auto rounded-full bg-white/20 flex items-center justify-center mb-6">
              <Crown className="h-10 w-10" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Kalyanam (Wedding)</h1>
            <p className="text-xl opacity-90 max-w-2xl mx-auto">
              Sacred marriage ceremonies following ancient Vedic traditions and customs
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {kalyanamServices.map((service) => (
              <Card 
                key={service.id}
                className="hover:shadow-warm transition-all duration-300 hover:-translate-y-1 cursor-pointer"
              >
                <CardHeader>
                  <CardTitle className="text-xl font-semibold text-foreground">
                    {service.title}
                  </CardTitle>
                  <div className="flex justify-between items-center text-sm text-muted-foreground">
                    <span>{service.duration}</span>
                    <span className="font-semibold text-primary">{service.price}</span>
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription className="mb-4">
                    {service.description}
                  </CardDescription>
                  <Button className="w-full">
                    Book Now
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Info */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Complete Wedding Services
            </h2>
            <p className="text-muted-foreground max-w-3xl mx-auto mb-8">
              Pandit ji can perform all kinds of wedding ceremonies and related rituals, ensuring your special day is blessed according to ancient Vedic traditions.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="text-center p-6 bg-background rounded-lg border">
              <h3 className="font-semibold text-foreground mb-2">Pre-Wedding Rituals</h3>
              <p className="text-sm text-muted-foreground">Engagement, Haldi, Mehendi ceremonies</p>
            </div>
            <div className="text-center p-6 bg-background rounded-lg border">
              <h3 className="font-semibold text-foreground mb-2">Wedding Day</h3>
              <p className="text-sm text-muted-foreground">Complete Vedic wedding ceremony</p>
            </div>
            <div className="text-center p-6 bg-background rounded-lg border">
              <h3 className="font-semibold text-foreground mb-2">Post-Wedding</h3>
              <p className="text-sm text-muted-foreground">Griha Pravesh and other ceremonies</p>
            </div>
          </div>

          <div className="text-center">
            <Button size="lg" className="shadow-warm">
              Plan Your Wedding Ceremony
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default KalyanamPage;