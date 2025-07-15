import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, CalendarDays, Star, Clock, Sun } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const panchangEvents = [
  {
    date: "Jan 15",
    day: "Monday",
    tithi: "Purnima",
    event: "Makar Sankranti",
    rituals: ["Abhishekam", "Homam"],
    auspicious: true
  },
  {
    date: "Jan 22",
    day: "Monday",
    tithi: "Saptami",
    event: "Vasant Panchami",
    rituals: ["Saraswati Pooja"],
    auspicious: true
  },
  {
    date: "Jan 30",
    day: "Tuesday",
    tithi: "Amavasya",
    event: "Amavasya",
    rituals: ["Pitru Paksha"],
    auspicious: false
  },
  {
    date: "Feb 5",
    day: "Monday",
    tithi: "Panchami",
    event: "Regular Day",
    rituals: ["General Pooja"],
    auspicious: true
  }
];

export const PanchangCalendar = () => {
  return (
    <section className="py-16 bg-card">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12">
            <div className="flex items-center justify-center mb-4">
              <Calendar className="h-8 w-8 text-primary mr-3" />
              <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                Panchang Calendar
              </h2>
            </div>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Find auspicious days to perform your pooja with divine timing
            </p>
          </div>

          {/* Calendar Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {panchangEvents.map((event, index) => (
              <Card 
                key={index}
                className={`relative overflow-hidden transition-all duration-300 hover:shadow-warm hover:-translate-y-1 ${
                  event.auspicious ? "border-primary/30" : "border-muted"
                }`}
              >
                {/* Auspicious Indicator */}
                {event.auspicious && (
                  <div className="absolute top-2 right-2">
                    <Star className="h-5 w-5 text-accent fill-accent" />
                  </div>
                )}

                <CardHeader className="pb-3">
                  <div className="flex items-center justify-between">
                    <div>
                      <CardTitle className="text-lg font-semibold">
                        {event.date}
                      </CardTitle>
                      <CardDescription className="text-sm">
                        {event.day}
                      </CardDescription>
                    </div>
                    <div className="text-right">
                      <div className="flex items-center text-primary mb-1">
                        <Sun className="h-4 w-4 mr-1" />
                        <span className="text-sm font-medium">{event.tithi}</span>
                      </div>
                    </div>
                  </div>
                </CardHeader>

                <CardContent>
                  <h4 className="font-semibold text-foreground mb-2">
                    {event.event}
                  </h4>
                  
                  <div className="space-y-2">
                    <div className="flex flex-wrap gap-1">
                      {event.rituals.map((ritual, idx) => (
                        <Badge 
                          key={idx} 
                          variant="secondary"
                          className="text-xs"
                        >
                          {ritual}
                        </Badge>
                      ))}
                    </div>
                    
                    <div className={`text-xs font-medium ${
                      event.auspicious ? "text-primary" : "text-muted-foreground"
                    }`}>
                      {event.auspicious ? "✨ Auspicious Day" : "⚫ Regular Day"}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Calendar Actions */}
          <div className="text-center space-y-4">
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="outline" size="lg" className="shadow-sm">
                <CalendarDays className="h-5 w-5 mr-2" />
                View Full Calendar
              </Button>
              <Button size="lg" className="shadow-warm">
                <Clock className="h-5 w-5 mr-2" />
                Check Muhurat Times
              </Button>
            </div>
            
            <p className="text-sm text-muted-foreground">
              Export to Google Calendar • Apple Calendar • Outlook
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};