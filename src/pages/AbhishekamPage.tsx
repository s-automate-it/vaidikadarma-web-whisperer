import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Star, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

const abhishekamServices = [
  {
    id: "ekavara-rudra-abhishekam",
    title: "Ekavara Rudra Abhishekam",
    description: "Single recitation of Rudra with sacred abhishekam ritual",
    duration: "2-3 hours",
    price: "₹3,500"
  },
  {
    id: "maahanyasa-purvaka-rudra-abhishekam",
    title: "Maahanyasa Purvaka Rudra Abhishekam",
    description: "Grand Rudra abhishekam with complete Mahanyasa ritual",
    duration: "4-5 hours",
    price: "₹7,500"
  },
  {
    id: "rudra-paashu-patha-abhishekam",
    title: "Rudra Paashu Patha Abhishekam",
    description: "Special Rudra abhishekam with animal-specific mantras",
    duration: "3-4 hours",
    price: "₹5,000"
  }
];

const AbhishekamPage = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <section className="bg-gradient-to-br from-primary to-primary-glow py-16">
        <div className="container mx-auto px-4">
          <Link to="/" className="inline-flex items-center text-primary-foreground mb-6 hover:underline">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Home
          </Link>
          <div className="text-center text-primary-foreground">
            <div className="w-20 h-20 mx-auto rounded-full bg-white/20 flex items-center justify-center mb-6">
              <Star className="h-10 w-10" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Abhishekam</h1>
            <p className="text-xl opacity-90 max-w-2xl mx-auto">
              Sacred ritual bathing of deities with milk, honey, water and other holy substances
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {abhishekamServices.map((service) => (
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

      {/* About Abhishekam */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-foreground mb-8 text-center">
              About Abhishekam Rituals
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              <div className="bg-background p-6 rounded-lg border">
                <h3 className="text-xl font-semibold text-foreground mb-4">Spiritual Significance</h3>
                <p className="text-muted-foreground">
                  Abhishekam is a sacred ritual where deities are bathed with various substances like milk, 
                  honey, ghee, and water while chanting powerful mantras, especially Rudra mantras for Lord Shiva.
                </p>
              </div>
              
              <div className="bg-background p-6 rounded-lg border">
                <h3 className="text-xl font-semibold text-foreground mb-4">Benefits</h3>
                <ul className="text-muted-foreground space-y-2">
                  <li>• Removes negative energies</li>
                  <li>• Brings peace and prosperity</li>
                  <li>• Fulfills desires and wishes</li>
                  <li>• Provides spiritual purification</li>
                </ul>
              </div>
            </div>

            <div className="text-center">
              <p className="text-muted-foreground mb-6 text-lg">
                Pandit ji can perform all kinds of Abhishekam ceremonies according to your needs and devotional preferences.
              </p>
              <Button size="lg" className="shadow-warm">
                Schedule Your Abhishekam
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AbhishekamPage;