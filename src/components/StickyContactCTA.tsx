import { Button } from "@/components/ui/button";
import { Phone, MessageCircle, X } from "lucide-react";
import { useState } from "react";

export const StickyContactCTA = () => {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-3">
      {/* Close Button */}
      <div className="flex justify-end">
        <Button
          variant="ghost"
          size="icon"
          onClick={() => setIsVisible(false)}
          className="h-6 w-6 bg-black/20 hover:bg-black/30 text-white rounded-full"
        >
          <X className="h-4 w-4" />
        </Button>
      </div>

      {/* Contact Buttons */}
      <div className="flex flex-col gap-2">
        {/* WhatsApp Button */}
        <Button
          size="lg"
          className="bg-green-500 hover:bg-green-600 text-white shadow-lg hover:shadow-xl transition-all duration-300 rounded-full px-6"
          onClick={() => window.open('https://wa.me/1234567890?text=Namaste! I would like to inquire about booking a ritual ceremony.', '_blank')}
        >
          <MessageCircle className="h-5 w-5 mr-2" />
          WhatsApp
        </Button>

        {/* Phone Button */}
        <Button
          size="lg"
          variant="secondary"
          className="shadow-lg hover:shadow-xl transition-all duration-300 rounded-full px-6"
          onClick={() => window.open('tel:+1234567890')}
        >
          <Phone className="h-5 w-5 mr-2" />
          Call Now
        </Button>
      </div>

      {/* Helper Text */}
      <div className="bg-card/95 backdrop-blur-sm rounded-lg px-3 py-2 shadow-lg border border-border/50 max-w-[200px]">
        <p className="text-xs text-muted-foreground text-center">
          📞 Speak to us now for instant assistance
        </p>
      </div>
    </div>
  );
};