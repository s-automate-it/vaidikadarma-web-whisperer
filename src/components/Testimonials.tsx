import { Card, CardContent } from "@/components/ui/card";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";

const testimonials = [
  {
    id: 1,
    name: "Ramesh & Priya Krishnan",
    location: "Dallas, TX",
    ritual: "Gruha Pravesham",
    rating: 5,
    text: "The ceremony was conducted with utmost devotion and adherence to traditions. Guruji's guidance made our new home feel truly blessed. The detailed preparation list helped us arrange everything perfectly.",
    date: "December 2024"
  },
  {
    id: 2,
    name: "Srinivas Family",
    location: "San Jose, CA", 
    ritual: "Satyanarayana Vratam",
    rating: 5,
    text: "We have been conducting our family pujas with Sri Guru Guha Peetam for over 3 years. The authentic Vedic procedures and the spiritual atmosphere created during each ceremony is remarkable.",
    date: "November 2024"
  },
  {
    id: 3,
    name: "Lakshmi Reddy",
    location: "Edison, NJ",
    ritual: "Chandi Homam",
    rating: 5,
    text: "The Chandi Homam performed for my daughter's health concerns brought amazing results. The entire family felt the divine energy throughout the ceremony. Highly recommend their services.",
    date: "October 2024"
  },
  {
    id: 4,
    name: "Venkat & Sowmya",
    location: "Atlanta, GA",
    ritual: "Kalyanam Ceremony",
    rating: 5,
    text: "Our wedding ceremony was absolutely perfect. Every Sanskrit mantra was explained, and the rituals were performed with such precision. Our families were deeply moved by the spiritual experience.",
    date: "September 2024"
  }
];

export const Testimonials = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const currentData = testimonials[currentTestimonial];

  return (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Blessed Testimonials
            </h2>
            <p className="text-lg text-muted-foreground">
              Families across the USA trust our Vaidika service
            </p>
          </div>

          {/* Main Testimonial Card */}
          <Card className="bg-card shadow-warm border-border/50 overflow-hidden">
            <CardContent className="p-8 md:p-12">
              {/* Stars Rating */}
              <div className="flex justify-center mb-6">
                {[...Array(currentData.rating)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-accent fill-accent" />
                ))}
              </div>

              {/* Testimonial Text */}
              <blockquote className="text-lg md:text-xl text-foreground leading-relaxed mb-8 text-center italic">
                "{currentData.text}"
              </blockquote>

              {/* Author Info */}
              <div className="text-center">
                <h4 className="text-lg font-semibold text-foreground mb-1">
                  {currentData.name}
                </h4>
                <p className="text-muted-foreground mb-1">
                  {currentData.location}
                </p>
                <div className="flex items-center justify-center gap-2 text-sm text-primary">
                  <span className="bg-primary/10 px-3 py-1 rounded-full">
                    {currentData.ritual}
                  </span>
                  <span className="text-muted-foreground">
                    • {currentData.date}
                  </span>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Navigation */}
          <div className="flex items-center justify-center mt-8 gap-4">
            <Button
              variant="outline"
              size="icon"
              onClick={prevTestimonial}
              className="rounded-full"
            >
              <ChevronLeft className="h-4 w-4" />
            </Button>

            {/* Dots Indicator */}
            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentTestimonial(index)}
                  className={`w-2 h-2 rounded-full transition-all ${
                    index === currentTestimonial 
                      ? "bg-primary w-6" 
                      : "bg-muted-foreground/30"
                  }`}
                />
              ))}
            </div>

            <Button
              variant="outline"
              size="icon"
              onClick={nextTestimonial}
              className="rounded-full"
            >
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>

          {/* Trust Indicators */}
          <div className="text-center mt-8">
            <div className="flex flex-wrap justify-center items-center gap-6 text-sm text-muted-foreground">
              <span>🕉️ 500+ Families Served</span>
              <span>📍 All 50 US States</span>
              <span>⭐ 5.0 Average Rating</span>
              <span>🏆 15+ Years Experience</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};