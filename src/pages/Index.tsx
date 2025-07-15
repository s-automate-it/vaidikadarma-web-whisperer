import { Hero } from "@/components/Hero";
import { CategoryTiles } from "@/components/CategoryTiles";
import { SearchAndFilters } from "@/components/SearchAndFilters";
import { PanchangCalendar } from "@/components/PanchangCalendar";
import { GuruBlessings } from "@/components/GuruBlessings";
import { Testimonials } from "@/components/Testimonials";
import { StickyContactCTA } from "@/components/StickyContactCTA";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <Hero />
      
      {/* Search and Filters */}
      <SearchAndFilters />
      
      {/* Category Tiles */}
      <CategoryTiles />
      
      {/* Panchang Calendar */}
      <PanchangCalendar />
      
      {/* Guru's Blessings */}
      <GuruBlessings />
      
      {/* Testimonials */}
      <Testimonials />
      
      {/* Footer */}
      <Footer />
      
      {/* Sticky Contact CTA */}
      <StickyContactCTA />
    </div>
  );
};

export default Index;
