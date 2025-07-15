import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Clock, Users, Star, Download, CheckCircle, Phone, MessageCircle } from "lucide-react";
import { Footer } from "@/components/Footer";
import { StickyContactCTA } from "@/components/StickyContactCTA";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const serviceDetails = {
  name: "Chandi Homam",
  description: "A powerful fire ritual dedicated to Goddess Chandi (Durga) for divine protection, spiritual empowerment, and removal of negative influences. This ceremony invokes the fierce yet benevolent energy of the Divine Mother.",
  duration: "3-4 hours",
  participants: "Family members + Vedic Priest",
  bestTime: "Early morning (6 AM - 10 AM) or Evening (6 PM - 8 PM)",
  frequency: "Monthly on Ashtami or Navami tithi",
  benefits: [
    "Protection from negative energies and evil forces",
    "Spiritual empowerment and inner strength",
    "Health and healing for family members", 
    "Success in overcoming obstacles and challenges",
    "Peace and harmony in home environment",
    "Blessings for children's education and career"
  ],
  mantras: [
    "Durga Saptashati Path",
    "Chandi Kavach",
    "Devi Suktam",
    "Durga Ashtakam"
  ]
};

const requiredItems = [
  {
    category: "Puja Essentials",
    items: [
      "Sacred thread (Jandhyam) - 1 bundle",
      "Turmeric powder (Haldi) - 250g",
      "Kumkum (Sindoor) - 100g", 
      "Sandalwood powder - 100g",
      "Camphor (Kapur) - 2 packets",
      "Incense sticks (Agarbatti) - 3 packets",
      "Cotton wicks - 1 packet",
      "Sacred ash (Vibhuti) - 100g"
    ]
  },
  {
    category: "Homam Materials",
    items: [
      "Ghee (Pure cow ghee) - 1 kg",
      "Sesame oil - 500ml",
      "Dried coconut pieces - 1 kg", 
      "Samidha sticks (Sacred wood) - 2 bundles",
      "Dried fruits and nuts - 500g",
      "Jaggery (Gud) - 500g",
      "Black sesame seeds - 250g",
      "Rice (uncooked) - 2 kg"
    ]
  },
  {
    category: "Offerings & Flowers",
    items: [
      "Red roses - 21 pieces",
      "Marigold flowers - 2 garlands", 
      "Lotus flowers - 5 pieces (if available)",
      "Tulsi leaves - 1 handful",
      "Banana - 12 pieces",
      "Coconut - 5 whole coconuts",
      "Sweets (Laddu/Halwa) - 2 kg",
      "Panchamrit ingredients (milk, curd, honey, ghee, sugar)"
    ]
  }
];

const ServiceDetail = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <section className="bg-gradient-sacred py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Button 
              variant="ghost" 
              className="text-white/80 hover:text-white mb-6"
              onClick={() => window.history.back()}
            >
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Homam Services
            </Button>
            
            <div className="text-center">
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
                {serviceDetails.name}
              </h1>
              <p className="text-lg md:text-xl text-white/90 max-w-3xl mx-auto leading-relaxed">
                {serviceDetails.description}
              </p>
              
              <div className="flex flex-wrap justify-center gap-4 mt-8">
                <Badge variant="secondary" className="text-base px-4 py-2">
                  <Clock className="h-4 w-4 mr-2" />
                  {serviceDetails.duration}
                </Badge>
                <Badge variant="secondary" className="text-base px-4 py-2">
                  <Users className="h-4 w-4 mr-2" />
                  {serviceDetails.participants}
                </Badge>
                <Badge variant="secondary" className="text-base px-4 py-2">
                  <Star className="h-4 w-4 mr-2 fill-current" />
                  Highly Recommended
                </Badge>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service Details */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8">
            
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-8">
              
              {/* Benefits */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <CheckCircle className="h-6 w-6 text-primary mr-3" />
                    Divine Benefits
                  </CardTitle>
                  <CardDescription>
                    Spiritual and material blessings received through this sacred ritual
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {serviceDetails.benefits.map((benefit, idx) => (
                      <li key={idx} className="flex items-start">
                        <span className="w-2 h-2 bg-primary rounded-full mr-3 mt-2 flex-shrink-0"></span>
                        <span className="text-foreground">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>

              {/* Required Items */}
              <Card>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div>
                      <CardTitle>Required Items for Puja</CardTitle>
                      <CardDescription>
                        Prepare these items before the ritual ceremony
                      </CardDescription>
                    </div>
                    <Button variant="outline" size="sm">
                      <Download className="h-4 w-4 mr-2" />
                      Download PDF
                    </Button>
                  </div>
                </CardHeader>
                <CardContent>
                  <Accordion type="multiple" className="w-full">
                    {requiredItems.map((category, idx) => (
                      <AccordionItem key={idx} value={`category-${idx}`}>
                        <AccordionTrigger className="text-left font-semibold">
                          {category.category} ({category.items.length} items)
                        </AccordionTrigger>
                        <AccordionContent>
                          <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 pt-2">
                            {category.items.map((item, itemIdx) => (
                              <li key={itemIdx} className="flex items-center text-sm">
                                <CheckCircle className="h-4 w-4 text-primary mr-2 flex-shrink-0" />
                                <span>{item}</span>
                              </li>
                            ))}
                          </ul>
                        </AccordionContent>
                      </AccordionItem>
                    ))}
                  </Accordion>
                  
                  <div className="mt-6 p-4 bg-muted/50 rounded-lg">
                    <p className="text-sm text-muted-foreground">
                      <strong>Note:</strong> Our priest will guide you through the exact quantities and arrangements needed. 
                      Some items can be arranged by us if requested in advance.
                    </p>
                  </div>
                </CardContent>
              </Card>

              {/* Mantras and Procedures */}
              <Card>
                <CardHeader>
                  <CardTitle>Sacred Mantras & Procedures</CardTitle>
                  <CardDescription>
                    Ancient Vedic chants and rituals performed during the ceremony
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 gap-4">
                    {serviceDetails.mantras.map((mantra, idx) => (
                      <div key={idx} className="flex items-center p-3 bg-muted/30 rounded-lg">
                        <span className="text-primary font-medium">🕉️</span>
                        <span className="ml-3 font-medium">{mantra}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              
              {/* Booking Card */}
              <Card className="sticky top-4">
                <CardHeader>
                  <CardTitle className="text-center">Book This Ceremony</CardTitle>
                  <CardDescription className="text-center">
                    Reserve your date with our Vedic priests
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-primary mb-2">
                      Contact for Pricing
                    </div>
                    <p className="text-sm text-muted-foreground">
                      Customized based on location and requirements
                    </p>
                  </div>
                  
                  <div className="space-y-3">
                    <Button 
                      size="lg" 
                      className="w-full shadow-warm"
                      onClick={() => window.open('https://docs.google.com/forms/d/e/1FAIpQLSc...', '_blank')}
                    >
                      Fill Booking Form
                    </Button>
                    
                    <div className="grid grid-cols-2 gap-2">
                      <Button 
                        variant="outline"
                        onClick={() => window.open('https://wa.me/1234567890?text=I would like to book Chandi Homam', '_blank')}
                      >
                        <MessageCircle className="h-4 w-4 mr-2" />
                        WhatsApp
                      </Button>
                      <Button 
                        variant="outline"
                        onClick={() => window.open('tel:+1234567890')}
                      >
                        <Phone className="h-4 w-4 mr-2" />
                        Call
                      </Button>
                    </div>
                  </div>
                  
                  <div className="text-xs text-muted-foreground text-center pt-4 border-t">
                    Need help? Talk to us instantly for personalized guidance
                  </div>
                </CardContent>
              </Card>

              {/* Service Info */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Service Information</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3 text-sm">
                  <div>
                    <strong className="text-foreground">Best Time:</strong>
                    <p className="text-muted-foreground">{serviceDetails.bestTime}</p>
                  </div>
                  <div>
                    <strong className="text-foreground">Frequency:</strong>
                    <p className="text-muted-foreground">{serviceDetails.frequency}</p>
                  </div>
                  <div>
                    <strong className="text-foreground">Advance Booking:</strong>
                    <p className="text-muted-foreground">Minimum 3 days required</p>
                  </div>
                  <div>
                    <strong className="text-foreground">Service Area:</strong>
                    <p className="text-muted-foreground">All 50 US States</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <StickyContactCTA />
    </div>
  );
};

export default ServiceDetail;