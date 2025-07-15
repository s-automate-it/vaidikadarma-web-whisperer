import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import { useState } from "react";

const filterChips = [
  { id: "baby", label: "Baby", active: false },
  { id: "marriage", label: "Marriage", active: false },
  { id: "health", label: "Health", active: false },
  { id: "wealth", label: "Wealth", active: false },
  { id: "house", label: "House", active: false }
];

export const SearchAndFilters = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeFilters, setActiveFilters] = useState<string[]>([]);

  const toggleFilter = (filterId: string) => {
    setActiveFilters(prev => 
      prev.includes(filterId) 
        ? prev.filter(id => id !== filterId)
        : [...prev, filterId]
    );
  };

  return (
    <section className="py-12 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Search Bar */}
          <div className="relative mb-6">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-muted-foreground h-5 w-5" />
            <Input
              type="text"
              placeholder="Search by name or purpose: 'Gruha Pravesham'"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-12 py-6 text-lg rounded-lg border-border/50 focus:border-primary shadow-sm"
            />
          </div>

          {/* Filter Chips */}
          <div className="text-center">
            <p className="text-sm text-muted-foreground mb-4">Quick filters:</p>
            <div className="flex flex-wrap justify-center gap-3">
              {filterChips.map((chip) => (
                <Button
                  key={chip.id}
                  variant={activeFilters.includes(chip.id) ? "default" : "outline"}
                  size="sm"
                  onClick={() => toggleFilter(chip.id)}
                  className={`rounded-full transition-all ${
                    activeFilters.includes(chip.id) 
                      ? "shadow-warm" 
                      : "hover:border-primary"
                  }`}
                >
                  {chip.label}
                </Button>
              ))}
            </div>
          </div>

          {/* Active Filters Display */}
          {activeFilters.length > 0 && (
            <div className="mt-4 text-center">
              <p className="text-sm text-muted-foreground">
                Filtering by: {activeFilters.join(", ")}
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};