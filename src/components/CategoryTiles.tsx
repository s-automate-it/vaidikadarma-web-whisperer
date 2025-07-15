import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Flame, Home, Heart, Crown, Star } from "lucide-react";

const categories = [
  {
    id: "abhishekam",
    title: "Abhishekam",
    description: "Sacred ritual bathing of deities with milk, honey, and holy water",
    icon: Star,
    color: "from-primary to-primary-glow"
  },
  {
    id: "homam",
    title: "Homam",
    description: "Fire rituals for prosperity, health, and spiritual purification",
    icon: Flame,
    color: "from-accent to-primary"
  },
  {
    id: "pooja",
    title: "Pooja Services",
    description: "Traditional worship ceremonies for various occasions",
    icon: Heart,
    color: "from-secondary to-primary"
  },
  {
    id: "kalyanam",
    title: "Kalyanam",
    description: "Sacred marriage ceremonies following Vedic traditions",
    icon: Crown,
    color: "from-primary-glow to-accent"
  },
  {
    id: "vratams",
    title: "Vratams",
    description: "Spiritual observances and fasting rituals for devotion",
    icon: Home,
    color: "from-accent to-secondary"
  }
];

export const CategoryTiles = () => {
  return (
    <section id="categories" className="py-16 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Sacred Ritual Categories
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Choose from 50+ time-honored rituals performed by Vedic scholars
          </p>
        </div>

        {/* Category Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {categories.map((category) => (
            <Card 
              key={category.id} 
              className="group hover:shadow-warm transition-all duration-300 hover:-translate-y-1 cursor-pointer border-border/50"
            >
              <CardHeader className="text-center pb-4">
                <div className={`w-16 h-16 mx-auto rounded-full bg-gradient-to-br ${category.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <category.icon className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-lg font-semibold text-foreground">
                  {category.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-0">
                <CardDescription className="text-sm text-muted-foreground mb-4 line-clamp-3">
                  {category.description}
                </CardDescription>
                <Button 
                  variant="outline" 
                  size="sm" 
                  className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors"
                >
                  View Rituals
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-4">
            Can't find what you're looking for?
          </p>
          <Button size="lg" className="shadow-warm">
            Browse All Rituals
          </Button>
        </div>
      </div>
    </section>
  );
};