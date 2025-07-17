import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Heart, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

const poojaServices = [
  {
    id: "ganesh-pooja",
    title: "Ganesh Pooja",
    description: "Invoke Lord Ganesh's blessings for removing obstacles and new beginnings",
    duration: "2-3 hours",
    price: "₹2,500"
  },
  {
    id: "punyaha-vaachanam",
    title: "Punyaha Vaachanam",
    description: "Sacred purification ritual for cleansing and blessing ceremonies",
    duration: "1-2 hours",
    price: "₹1,500"
  },
  {
    id: "bhoomi-pooja",
    title: "Bhoomi Pooja",
    description: "Ground breaking ceremony for new construction projects",
    duration: "2-3 hours",
    price: "₹3,000"
  },
  {
    id: "gruha-pravesham",
    title: "Gruha Pravesham",
    description: "House warming ceremony for entering new homes",
    duration: "3-4 hours",
    price: "₹4,000"
  },
  {
    id: "vaasthu-shanti-pooja",
    title: "Vaasthu Shanti Pooja",
    description: "Ritual for harmonizing living spaces according to Vastu principles",
    duration: "2-3 hours",
    price: "₹3,500"
  },
  {
    id: "navagraha-shanti-pooja",
    title: "Navagraha Shanti Pooja",
    description: "Nine planetary peace ritual for cosmic harmony",
    duration: "3-4 hours",
    price: "₹4,500"
  },
  {
    id: "lakshmi-pooja",
    title: "Lakshmi Pooja",
    description: "Worship of Goddess Lakshmi for wealth and prosperity",
    duration: "2-3 hours",
    price: "₹2,000"
  },
  {
    id: "pumsavanam",
    title: "Pumsavanam",
    description: "Pregnancy protection ritual for mother and child welfare",
    duration: "1-2 hours",
    price: "₹1,800"
  },
  {
    id: "seemantham",
    title: "Seemantham",
    description: "Baby shower ceremony for expecting mothers",
    duration: "2-3 hours",
    price: "₹2,500"
  },
  {
    id: "jathakarma",
    title: "Jathakarma",
    description: "Birth ceremony performed immediately after child birth",
    duration: "1-2 hours",
    price: "₹1,500"
  },
  {
    id: "namakaranam",
    title: "Namakaranam",
    description: "Naming ceremony and cradle ceremony for newborns",
    duration: "2-3 hours",
    price: "₹2,200"
  },
  {
    id: "annaprasana",
    title: "Annaprasana",
    description: "Baby's first feeding ceremony with solid food",
    duration: "2-3 hours",
    price: "₹2,000"
  },
  {
    id: "aksharabyasam",
    title: "Aksharabyasam",
    description: "Child's first schooling ceremony for education blessings",
    duration: "2-3 hours",
    price: "₹2,800"
  },
  {
    id: "kesa-kandana",
    title: "Kesa Kandana",
    description: "Child's first haircut ceremony for spiritual purification",
    duration: "1-2 hours",
    price: "₹1,800"
  },
  {
    id: "upanayanam",
    title: "Upanayanam",
    description: "Sacred thread ceremony marking spiritual initiation",
    duration: "4-6 hours",
    price: "₹6,000"
  }
];

const PoojaPage = () => {
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
              <Heart className="h-10 w-10" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Pooja Services</h1>
            <p className="text-xl opacity-90 max-w-2xl mx-auto">
              Traditional worship ceremonies for life's sacred moments and spiritual growth
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {poojaServices.map((service) => (
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

      {/* Contact Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-foreground mb-4">
            Need a Custom Pooja Service?
          </h2>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Pandit ji can perform all kinds of traditional pooja ceremonies according to your specific needs and family traditions.
          </p>
          <Button size="lg" className="shadow-warm">
            Contact for Custom Pooja
          </Button>
        </div>
      </section>
    </div>
  );
};

export default PoojaPage;