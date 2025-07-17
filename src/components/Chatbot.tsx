import { useState, useRef, useEffect } from "react";
import { MessageCircle, Send, X, Bot, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";

interface Message {
  id: string;
  content: string;
  isBot: boolean;
  timestamp: Date;
}

const chatbotKnowledge = {
  greetings: ["hello", "hi", "hey", "namaste", "good morning", "good evening"],
  services: {
    pooja: {
      keywords: ["pooja", "puja", "worship", "ganesh", "lakshmi", "navagraha", "vastu", "bhoomi", "gruha", "pravesh", "naming", "namakaranam", "upanayanam", "seemantham", "annaprasana"],
      response: "We offer various Pooja services including:\n• Ganesh Pooja\n• Punyaha Vaachanam\n• Bhoomi Pooja (Ground breaking ceremony)\n• Gruha Pravesham (House warming ceremony)\n• Vaasthu Shanti Pooja\n• Navagraha Shanti Pooja\n• Lakshmi Pooja\n• Baby ceremonies: Pumsavanam, Seemantham, Jathakarma, Namakaranam, Annaprasana, Aksharabyasam, Kesa Kandana\n• Upanayanam (Sacred thread ceremony)\n\nWould you like more details about any specific pooja?"
    },
    wedding: {
      keywords: ["wedding", "marriage", "kalyanam", "vivaha", "engagement", "shasti", "purthi"],
      response: "We provide complete wedding services:\n• Engagement ceremonies\n• Vivahamu (Traditional weddings)\n• Shasti Purthi (60 years wedding anniversary ceremony)\n• Vugra & Bhema Ratha Shanthi\n\nPandit ji can perform all kinds of wedding ceremonies according to traditional customs."
    },
    abhishekam: {
      keywords: ["abhishekam", "rudra", "ekavara", "maahanyasa"],
      response: "We offer various Abhishekam services:\n• Ekavara Rudra Abhishekam\n• Maahanyasa purvaka Rudra Abhishekam\n• Rudra paashu patha Abhishekam\n\nPandit ji can perform all kinds of Abhishekam ceremonies with proper rituals and mantras."
    },
    homam: {
      keywords: ["homam", "havan", "fire", "chandi", "ganapathi", "rudra", "sudharshana", "ayushya", "mruthyunjaya"],
      response: "We conduct various Homam ceremonies:\n• Chandi Homam\n• Ganapathi Homam\n• Rudra Homam\n• Sudharshana Homam\n• Ayushya Homam\n• Mruthyunjaya Homam\n• Navagraha Santhi Homam\n• Nakshatra Homam\n• Lakshmi Homam\n• Vaastu Homam\n\nEach homam is performed with authentic procedures and sacred fire rituals."
    },
    vratam: {
      keywords: ["vratam", "vrat", "fast", "sankashta", "satyanarayana", "kedhara", "varalakshmi", "venkateswara"],
      response: "We guide and perform various Vratams:\n• Sankashta Hara Chaturthi Vratham\n• Satyanarayana Vratham\n• Kedhara Vratham\n• Varalakshmi Vratham\n• Venkateswara Vratham\n• Shasthi Devi Vratham\n• Anantha Padmanabha Swamy Vratham\n• Mangala Gowri Vratham\n• Lakshmi Kubera Vratam\n• Pola Amavasya Vratham\n\nEach vratam includes proper guidelines, rituals, and spiritual significance."
    }
  },
  contact: {
    keywords: ["contact", "phone", "call", "whatsapp", "book", "appointment", "schedule"],
    response: "You can contact us through:\n📞 Phone: +91 8919 991 300\n💬 WhatsApp: +91 8919 991 300\n\nWe're available for consultations and bookings. Feel free to reach out for any spiritual guidance or ceremony planning."
  },
  guru: {
    keywords: ["guru", "pandit", "priest", "venkata", "shivanaga", "kumar", "experience", "qualified"],
    response: "Our revered Guru, Venkata Shivanaga Kumar, is a highly experienced and qualified pandit with deep knowledge of Vedic traditions and rituals. He performs all ceremonies with authentic procedures and provides spiritual guidance to devotees."
  }
};

export const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      content: "🙏 Namaste! I'm here to help you with information about our spiritual services. Ask me about Poojas, Weddings, Abhishekams, Homams, or Vratams.",
      isBot: true,
      timestamp: new Date()
    }
  ]);
  const [input, setInput] = useState("");
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const generateResponse = (userMessage: string): string => {
    const message = userMessage.toLowerCase();
    
    // Check for greetings
    if (chatbotKnowledge.greetings.some(greeting => message.includes(greeting))) {
      return "🙏 Namaste! Welcome to our spiritual services. How can I assist you today? You can ask me about Poojas, Weddings, Abhishekams, Homams, or Vratams.";
    }

    // Check for services
    for (const [serviceType, service] of Object.entries(chatbotKnowledge.services)) {
      if (service.keywords.some(keyword => message.includes(keyword))) {
        return service.response;
      }
    }

    // Check for contact info
    if (chatbotKnowledge.contact.keywords.some(keyword => message.includes(keyword))) {
      return chatbotKnowledge.contact.response;
    }

    // Check for guru info
    if (chatbotKnowledge.guru.keywords.some(keyword => message.includes(keyword))) {
      return chatbotKnowledge.guru.response;
    }

    // Default response
    return "I can help you with information about our spiritual services:\n\n🕉️ Poojas (Ganesh, Lakshmi, Navagraha, Baby ceremonies, etc.)\n💒 Wedding ceremonies\n🔱 Abhishekams (Rudra, Ekavara, etc.)\n🔥 Homams (Chandi, Ganapathi, Rudra, etc.)\n🙏 Vratams (Satyanarayana, Varalakshmi, etc.)\n\nYou can also ask about our Guru or contact information. What would you like to know?";
  };

  const handleSendMessage = () => {
    if (!input.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      content: input,
      isBot: false,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);

    // Generate bot response
    const botResponse: Message = {
      id: (Date.now() + 1).toString(),
      content: generateResponse(input),
      isBot: true,
      timestamp: new Date()
    };

    setTimeout(() => {
      setMessages(prev => [...prev, botResponse]);
    }, 500);

    setInput("");
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      handleSendMessage();
    }
  };

  return (
    <>
      {/* Floating Chat Button */}
      {!isOpen && (
        <Button
          onClick={() => setIsOpen(true)}
          className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full shadow-lg bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700"
          size="icon"
        >
          <MessageCircle className="h-6 w-6 text-white" />
        </Button>
      )}

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-6 right-6 z-50 w-80 h-96 bg-background border border-border rounded-lg shadow-xl flex flex-col">
          {/* Header */}
          <div className="flex items-center justify-between p-4 border-b bg-gradient-to-r from-orange-500 to-red-600 text-white rounded-t-lg">
            <div className="flex items-center gap-2">
              <Bot className="h-5 w-5" />
              <span className="font-semibold">Spiritual Assistant</span>
            </div>
            <Button
              onClick={() => setIsOpen(false)}
              variant="ghost"
              size="icon"
              className="h-6 w-6 text-white hover:bg-white/20"
            >
              <X className="h-4 w-4" />
            </Button>
          </div>

          {/* Messages */}
          <ScrollArea className="flex-1 p-4">
            <div className="space-y-4">
              {messages.map((message) => (
                <div
                  key={message.id}
                  className={`flex ${message.isBot ? "justify-start" : "justify-end"}`}
                >
                  <div
                    className={`max-w-[80%] p-3 rounded-lg ${
                      message.isBot
                        ? "bg-muted text-foreground"
                        : "bg-gradient-to-r from-orange-500 to-red-600 text-white"
                    }`}
                  >
                    <div className="flex items-start gap-2">
                      {message.isBot && <Bot className="h-4 w-4 mt-0.5 flex-shrink-0" />}
                      <div className="text-sm whitespace-pre-line">{message.content}</div>
                      {!message.isBot && <User className="h-4 w-4 mt-0.5 flex-shrink-0" />}
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div ref={messagesEndRef} />
          </ScrollArea>

          {/* Input */}
          <div className="p-4 border-t">
            <div className="flex gap-2">
              <Input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Ask about our services..."
                className="flex-1"
              />
              <Button onClick={handleSendMessage} size="icon">
                <Send className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};