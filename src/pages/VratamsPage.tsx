import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Home, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

const vratamServices = [
  {
    id: "sankastahara-chaturdhi-vratham",
    title: "Sankastahara Chaturdhi Vratham",
    description: "Monthly Ganesha fasting ritual for removing obstacles",
    duration: "Full day observance",
    price: "₹1,500"
  },
  {
    id: "satyanarayana-vratham",
    title: "Satyanarayana Vratham",
    description: "Lord Vishnu's truthfulness and prosperity ritual",
    duration: "4-5 hours",
    price: "₹2,500"
  },
  {
    id: "kedhara-vratham",
    title: "Kedhara Vratham",
    description: "Special vow for Lord Shiva's blessings and liberation",
    duration: "3-4 hours",
    price: "₹2,000"
  },
  {
    id: "varalakshmi-vratham",
    title: "Varalakshmi Vratham",
    description: "Goddess Lakshmi's boon-granting observance for women",
    duration: "Half day",
    price: "₹2,200"
  },
  {
    id: "venkateswara-vratham",
    title: "Venkateswara Vratham",
    description: "Lord Venkateswara's special devotional observance",
    duration: "4-5 hours",
    price: "₹3,000"
  },
  {
    id: "shasthi-devi-vratham",
    title: "Shasthi Devi Vratham",
    description: "Goddess of children's protection and fertility ritual",
    duration: "3-4 hours",
    price: "₹1,800"
  },
  {
    id: "ananntha-padmanabha-swamy-vratham",
    title: "Ananntha Padmanabha Swamy Vratham",
    description: "Eternal Vishnu's devotional observance for prosperity",
    duration: "5-6 hours",
    price: "₹3,500"
  },
  {
    id: "mangala-gowri-vratham",
    title: "Mangala Gowri Vratham",
    description: "Auspicious Goddess Parvati's ritual for married women",
    duration: "Half day",
    price: "₹2,000"
  },
  {
    id: "lakshmi-kubera-vratam",
    title: "Lakshmi Kubera Vratam",
    description: "Wealth deities' combined ritual for financial prosperity",
    duration: "4-5 hours",
    price: "₹3,200"
  },
  {
    id: "polalaamavasya-vratham",
    title: "Polalaamavasya Vratham",
    description: "New moon day observance for spiritual purification",
    duration: "Full day",
    price: "₹1,800"
  }
];

const VratamsPage = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <section className="bg-gradient-to-br from-accent to-secondary py-16">
        <div className="container mx-auto px-4">
          <Link to="/" className="inline-flex items-center text-primary-foreground mb-6 hover:underline">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Home
          </Link>
          <div className="text-center text-primary-foreground">
            <div className="w-20 h-20 mx-auto rounded-full bg-white/20 flex items-center justify-center mb-6">
              <Home className="h-10 w-10" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Vratams</h1>
            <p className="text-xl opacity-90 max-w-2xl mx-auto">
              Sacred observances and fasting rituals for spiritual devotion and divine blessings
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {vratamServices.map((service) => (
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

      {/* About Vratams */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-foreground mb-8 text-center">
              Understanding Vratam Observances
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              <div className="bg-background p-6 rounded-lg border">
                <h3 className="text-xl font-semibold text-foreground mb-4">Spiritual Discipline</h3>
                <p className="text-muted-foreground mb-4">
                  Vratams are spiritual observances that combine fasting, prayer, and ritual worship 
                  to purify the mind and body while seeking divine blessings.
                </p>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• Self-discipline and control</li>
                  <li>• Mental purification</li>
                  <li>• Spiritual growth</li>
                </ul>
              </div>
              
              <div className="bg-background p-6 rounded-lg border">
                <h3 className="text-xl font-semibold text-foreground mb-4">Divine Benefits</h3>
                <p className="text-muted-foreground mb-4">
                  Each vratam is dedicated to specific deities and performed for particular intentions 
                  like health, prosperity, family welfare, or spiritual advancement.
                </p>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• Fulfillment of desires</li>
                  <li>• Protection from negativity</li>
                  <li>• Material and spiritual prosperity</li>
                </ul>
              </div>
            </div>

            <div className="text-center">
              <p className="text-muted-foreground mb-6 text-lg">
                Pandit ji will guide you through the proper observance of each vratam, ensuring you receive 
                the maximum spiritual and material benefits from these sacred practices.
              </p>
              <Button size="lg" className="shadow-warm">
                Start Your Spiritual Journey
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default VratamsPage;