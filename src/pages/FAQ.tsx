import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, HelpCircle, Phone, MessageCircle } from "lucide-react";
import { Footer } from "@/components/Footer";
import { StickyContactCTA } from "@/components/StickyContactCTA";
import { useState } from "react";

const faqData = [
  {
    category: "General Questions",
    questions: [
      {
        q: "Can the ritual be performed at home or does it need to be at a temple?",
        a: "Most of our rituals can be performed at your home, creating a sacred space in your living area. Our priest will guide you on the setup requirements. Some elaborate ceremonies may require temple facilities, which we can arrange."
      },
      {
        q: "Do I need to arrange all the puja items myself?",
        a: "We provide detailed preparation lists for each ritual. While you can arrange the items yourself, we also offer assistance in sourcing specific items if needed. Our priest will guide you on essential vs. optional items based on your location and requirements."
      },
      {
        q: "What if I don't know my nakshatra or birth details?",
        a: "No worries! Our priest can perform the rituals with general timing suitable for your family. For personalized ceremonies requiring birth details, we can help you calculate your nakshatra and muhurat timings during consultation."
      },
      {
        q: "How far in advance should I book a ceremony?",
        a: "We recommend booking at least 3 days in advance for regular ceremonies and 1-2 weeks for elaborate rituals or specific auspicious dates. For festivals and special occasions, earlier booking is advisable."
      },
      {
        q: "Do you serve areas outside major cities?",
        a: "Yes, we serve all 50 US states. Our network of qualified Vedic priests can reach you wherever you are. Travel charges may apply for remote locations, which will be discussed during booking."
      }
    ]
  },
  {
    category: "Ritual Specific",
    questions: [
      {
        q: "What's the difference between Homam and regular Pooja?",
        a: "Homam involves fire rituals with specific offerings made to Agni (fire god) while chanting mantras. Regular Pooja is worship without fire ritual. Homam is considered more powerful for specific intentions like removing obstacles or attracting prosperity."
      },
      {
        q: "Can children participate in the ceremonies?",
        a: "Absolutely! Children's participation in rituals is encouraged as it instills spiritual values. Our priests are experienced in involving children appropriately based on their age and attention span."
      },
      {
        q: "What if I miss the exact muhurat time?",
        a: "While muhurat times are ideal, the sincerity of devotion is most important. Our priest can perform the ceremony within a suitable time window if you miss the exact muhurat."
      },
      {
        q: "Are English explanations provided during Sanskrit mantras?",
        a: "Yes! Our priests explain the meaning and significance of mantras in English, making the ceremony meaningful for all family members, especially children born in the US."
      }
    ]
  },
  {
    category: "Booking & Pricing",
    questions: [
      {
        q: "How is the pricing determined?",
        a: "Pricing depends on the complexity of the ritual, duration, travel distance, and specific requirements. We provide transparent pricing during consultation with no hidden charges."
      },
      {
        q: "What payment methods do you accept?",
        a: "We accept cash, check, Venmo, Zelle, and bank transfers. Payment terms will be discussed during booking confirmation."
      },
      {
        q: "Is there a cancellation policy?",
        a: "We understand emergencies happen. Cancellations 24 hours before the ceremony incur no charges. Same-day cancellations may have minimal charges to cover priest's travel expenses."
      },
      {
        q: "Can ceremonies be rescheduled?",
        a: "Yes, ceremonies can be rescheduled based on priest availability and your convenience. We try our best to accommodate changes while maintaining the spiritual efficacy of the timing."
      }
    ]
  },
  {
    category: "Spiritual Guidance", 
    questions: [
      {
        q: "Which ritual should I choose for my specific needs?",
        a: "Our experienced priest will guide you based on your spiritual goals, current life situation, and astrological considerations. A brief consultation helps determine the most suitable ceremony for your family."
      },
      {
        q: "How often should these rituals be performed?",
        a: "Frequency depends on the specific ritual and your spiritual practice. Some like Satyanarayana Pooja can be monthly, while others like Griha Pravesham are one-time ceremonies. Our priest will provide personalized guidance."
      },
      {
        q: "Do I need to follow any specific preparations or fasting?",
        a: "Some ceremonies recommend simple preparations like taking a bath, wearing clean clothes, and maintaining a positive mindset. Specific fasting requirements, if any, will be communicated during booking."
      },
      {
        q: "What if some family members cannot attend?",
        a: "The ceremony can still be performed with available family members. The priest will ensure the spiritual benefits extend to all family members through specific mantras and prayers, regardless of physical presence."
      }
    ]
  }
];

const FAQ = () => {
  const [searchQuery, setSearchQuery] = useState("");
  
  const filteredFAQs = faqData.map(category => ({
    ...category,
    questions: category.questions.filter(
      faq => 
        faq.q.toLowerCase().includes(searchQuery.toLowerCase()) ||
        faq.a.toLowerCase().includes(searchQuery.toLowerCase())
    )
  })).filter(category => category.questions.length > 0);

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <section className="bg-gradient-sacred py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex items-center justify-center mb-4">
              <HelpCircle className="h-8 w-8 text-white mr-3" />
              <h1 className="text-4xl md:text-5xl font-bold text-white">
                Frequently Asked Questions
              </h1>
            </div>
            <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto">
              Clear answers for common questions about our Vedic rituals and services
            </p>
          </div>
        </div>
      </section>

      {/* Search */}
      <section className="py-8 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-muted-foreground h-5 w-5" />
              <Input
                type="text"
                placeholder="Search frequently asked questions..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-12 py-4 text-lg rounded-lg border-border/50 focus:border-primary"
              />
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Content */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {filteredFAQs.length > 0 ? (
              <div className="space-y-8">
                {filteredFAQs.map((category, categoryIdx) => (
                  <Card key={categoryIdx}>
                    <CardHeader>
                      <CardTitle className="text-xl text-primary">
                        {category.category}
                      </CardTitle>
                      <CardDescription>
                        {category.questions.length} question{category.questions.length !== 1 ? 's' : ''}
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <Accordion type="multiple" className="w-full">
                        {category.questions.map((faq, faqIdx) => (
                          <AccordionItem key={faqIdx} value={`faq-${categoryIdx}-${faqIdx}`}>
                            <AccordionTrigger className="text-left font-medium">
                              {faq.q}
                            </AccordionTrigger>
                            <AccordionContent className="text-muted-foreground leading-relaxed">
                              {faq.a}
                            </AccordionContent>
                          </AccordionItem>
                        ))}
                      </Accordion>
                    </CardContent>
                  </Card>
                ))}
              </div>
            ) : (
              <div className="text-center py-12">
                <p className="text-muted-foreground text-lg mb-4">
                  No FAQs found matching your search.
                </p>
                <Button 
                  variant="outline"
                  onClick={() => setSearchQuery("")}
                >
                  Clear Search
                </Button>
              </div>
            )}

            {/* Contact Section */}
            <Card className="mt-12 bg-gradient-primary text-white">
              <CardHeader className="text-center">
                <CardTitle className="text-2xl text-white">
                  Still Have Questions?
                </CardTitle>
                <CardDescription className="text-white/90">
                  Our knowledgeable team is here to help with personalized guidance
                </CardDescription>
              </CardHeader>
              <CardContent className="text-center">
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button 
                    size="lg"
                    variant="secondary"
                    onClick={() => window.open('https://wa.me/1234567890?text=I have questions about your ritual services', '_blank')}
                  >
                    <MessageCircle className="h-5 w-5 mr-2" />
                    Chat on WhatsApp
                  </Button>
                  <Button 
                    size="lg"
                    variant="outline"
                    className="border-white text-white hover:bg-white/10"
                    onClick={() => window.open('tel:+1234567890')}
                  >
                    <Phone className="h-5 w-5 mr-2" />
                    Call for Consultation
                  </Button>
                </div>
                <p className="mt-4 text-white/80 text-sm">
                  Available 7 days a week for spiritual guidance and ceremony planning
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
      <StickyContactCTA />
    </div>
  );
};

export default FAQ;