import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, ArrowLeft, Star, Clock, Users } from "lucide-react";
import { Footer } from "@/components/Footer";
import { StickyContactCTA } from "@/components/StickyContactCTA";
import { useState } from "react";

const homamServices = [
  {
    id: "chandi-homam",
    name: "Chandi Homam",
    description: "Performed to invoke divine protection and spiritual power through the worship of Goddess Chandi",
    duration: "3-4 hours",
    participants: "Family + Priest",
    price: "Contact for pricing",
    benefits: ["Protection from negativity", "Spiritual empowerment", "Health and prosperity"],
    featured: true
  },
  {
    id: "ganapathi-homam",
    name: "Ganapathi Homam",
    description: "Removes obstacles and brings success in new ventures and important life events",
    duration: "2-3 hours", 
    participants: "Family + Priest",
    price: "Contact for pricing",
    benefits: ["Obstacle removal", "Success in endeavors", "Mental clarity"],
    featured: false
  },
  {
    id: "navagraha-homam",
    name: "Navagraha Homam",
    description: "Balances planetary influences and reduces doshas for better life outcomes",
    duration: "4-5 hours",
    participants: "Family + Priest",
    price: "Contact for pricing", 
    benefits: ["Planetary peace", "Reduced doshas", "Overall well-being"],
    featured: true
  },
  {
    id: "lakshmi-homam",
    name: "Lakshmi Homam",
    description: "Attracts wealth, prosperity, and abundance into your life and home",
    duration: "2-3 hours",
    participants: "Family + Priest", 
    price: "Contact for pricing",
    benefits: ["Financial prosperity", "Business success", "Home abundance"],
    featured: false
  }
];

const CategoryPage = () => {
  const [searchQuery, setSearchQuery] = useState("");
  
  const filteredServices = homamServices.filter(service =>
    service.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    service.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <section className="bg-gradient-sacred py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Button 
              variant="ghost" 
              className="text-white/80 hover:text-white mb-6"
              onClick={() => window.history.back()}
            >
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Categories
            </Button>
            
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Homam Services
            </h1>
            <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto">
              Sacred fire rituals performed with authentic Vedic procedures for spiritual purification and divine blessings
            </p>
          </div>
        </div>
      </section>

      {/* Search Section */}
      <section className="py-8 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-muted-foreground h-5 w-5" />
              <Input
                type="text"
                placeholder="Search homam services..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-12 py-4 text-lg rounded-lg border-border/50 focus:border-primary"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {filteredServices.map((service) => (
              <Card 
                key={service.id}
                className={`relative overflow-hidden transition-all duration-300 hover:shadow-warm hover:-translate-y-1 ${
                  service.featured ? "ring-2 ring-primary/20" : ""
                }`}
              >
                {service.featured && (
                  <div className="absolute top-4 right-4">
                    <div className="bg-primary text-primary-foreground px-3 py-1 rounded-full text-xs font-medium flex items-center">
                      <Star className="h-3 w-3 mr-1 fill-current" />
                      Featured
                    </div>
                  </div>
                )}

                <CardHeader className="pb-4">
                  <CardTitle className="text-xl font-bold text-foreground pr-8">
                    {service.name}
                  </CardTitle>
                  <CardDescription className="text-muted-foreground leading-relaxed">
                    {service.description}
                  </CardDescription>
                </CardHeader>

                <CardContent className="space-y-4">
                  {/* Service Details */}
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div className="flex items-center text-muted-foreground">
                      <Clock className="h-4 w-4 mr-2" />
                      <span>{service.duration}</span>
                    </div>
                    <div className="flex items-center text-muted-foreground">
                      <Users className="h-4 w-4 mr-2" />
                      <span>{service.participants}</span>
                    </div>
                  </div>

                  {/* Benefits */}
                  <div>
                    <h4 className="font-medium text-foreground mb-2">Key Benefits:</h4>
                    <ul className="space-y-1">
                      {service.benefits.map((benefit, idx) => (
                        <li key={idx} className="text-sm text-muted-foreground flex items-center">
                          <span className="w-1.5 h-1.5 bg-primary rounded-full mr-2 flex-shrink-0"></span>
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Price and CTA */}
                  <div className="pt-4 border-t border-border/50">
                    <div className="flex items-center justify-between">
                      <span className="text-lg font-semibold text-primary">
                        {service.price}
                      </span>
                      <Button className="shadow-warm">
                        View Details
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* No Results */}
          {filteredServices.length === 0 && (
            <div className="text-center py-12">
              <p className="text-muted-foreground text-lg">
                No services found matching your search.
              </p>
              <Button 
                variant="outline" 
                className="mt-4"
                onClick={() => setSearchQuery("")}
              >
                Clear Search
              </Button>
            </div>
          )}
        </div>
      </section>

      <Footer />
      <StickyContactCTA />
    </div>
  );
};

export default CategoryPage;