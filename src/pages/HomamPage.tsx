import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Flame, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

const homamServices = [
  {
    id: "chandi-homam",
    title: "Chandi Homam",
    description: "Powerful fire ritual to Goddess Chandi for protection and victory",
    duration: "4-5 hours",
    price: "₹8,000"
  },
  {
    id: "ganapathi-homam",
    title: "Ganapathi Homam",
    description: "Fire ritual to Lord Ganesha for removing obstacles and new beginnings",
    duration: "2-3 hours",
    price: "₹4,000"
  },
  {
    id: "rudra-homam",
    title: "Rudra Homam",
    description: "Sacred fire ritual to Lord Shiva for spiritual transformation",
    duration: "3-4 hours",
    price: "₹6,000"
  },
  {
    id: "sudharshana-homam",
    title: "Sudharshana Homam",
    description: "Fire ritual with Vishnu's discus for protection from enemies",
    duration: "3-4 hours",
    price: "₹5,500"
  },
  {
    id: "ayushya-homam",
    title: "Ayushya Homam",
    description: "Longevity and health fire ritual for extended life",
    duration: "2-3 hours",
    price: "₹4,500"
  },
  {
    id: "mruthyunjaya-homam",
    title: "Mruthyunjaya Homam",
    description: "Victory over death fire ritual for health and longevity",
    duration: "3-4 hours",
    price: "₹6,500"
  },
  {
    id: "navagraha-santhi-homam",
    title: "Navagraha Santhi Homam",
    description: "Nine planetary peace fire ritual for cosmic harmony",
    duration: "4-5 hours",
    price: "₹7,000"
  },
  {
    id: "nakshatra-homam",
    title: "Nakshatra Homam",
    description: "Star constellation specific fire ritual for astrological benefits",
    duration: "2-3 hours",
    price: "₹4,000"
  },
  {
    id: "lakshmi-homam",
    title: "Lakshmi Homam",
    description: "Fire ritual to Goddess Lakshmi for wealth and prosperity",
    duration: "2-3 hours",
    price: "₹4,500"
  },
  {
    id: "vaastu-homam",
    title: "Vaastu Homam",
    description: "Fire ritual for harmonizing living and working spaces",
    duration: "3-4 hours",
    price: "₹5,000"
  }
];

const HomamPage = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <section className="bg-gradient-to-br from-accent to-primary py-16">
        <div className="container mx-auto px-4">
          <Link to="/" className="inline-flex items-center text-primary-foreground mb-6 hover:underline">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Home
          </Link>
          <div className="text-center text-primary-foreground">
            <div className="w-20 h-20 mx-auto rounded-full bg-white/20 flex items-center justify-center mb-6">
              <Flame className="h-10 w-10" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Homam</h1>
            <p className="text-xl opacity-90 max-w-2xl mx-auto">
              Sacred fire rituals for prosperity, health, and spiritual purification
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {homamServices.map((service) => (
              <Card 
                key={service.id}
                className="hover:shadow-warm transition-all duration-300 hover:-translate-y-1 cursor-pointer"
              >
                <CardHeader>
                  <CardTitle className="text-lg font-semibold text-foreground">
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

      {/* About Homam */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-foreground mb-8 text-center">
              The Power of Sacred Fire Rituals
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="bg-background p-6 rounded-lg border text-center">
                <div className="w-12 h-12 mx-auto rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <Flame className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">Purification</h3>
                <p className="text-sm text-muted-foreground">
                  Fire rituals purify the environment and participants spiritually
                </p>
              </div>
              
              <div className="bg-background p-6 rounded-lg border text-center">
                <div className="w-12 h-12 mx-auto rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <Flame className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">Protection</h3>
                <p className="text-sm text-muted-foreground">
                  Creates protective spiritual barriers against negative influences
                </p>
              </div>
              
              <div className="bg-background p-6 rounded-lg border text-center">
                <div className="w-12 h-12 mx-auto rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <Flame className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">Prosperity</h3>
                <p className="text-sm text-muted-foreground">
                  Invokes divine blessings for material and spiritual abundance
                </p>
              </div>
            </div>

            <div className="text-center">
              <p className="text-muted-foreground mb-6 text-lg">
                Each Homam is performed with authentic Vedic procedures, proper mantras, and sacred materials 
                to ensure maximum spiritual benefits.
              </p>
              <Button size="lg" className="shadow-warm">
                Book Your Sacred Fire Ritual
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomamPage;