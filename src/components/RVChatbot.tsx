import { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { MessageCircle, X, Send } from "lucide-react";

interface Message {
  id: string;
  text: string;
  sender: "bot" | "user";
  timestamp: Date;
}

const botResponses: Record<string, string> = {
  zambian: "Great! For Zambians:\n\n💼 Limited Company: K4,990 (5-7 days)\n📝 Business Name: K1,700 (3-5 days)\n\nWhat's your company name? I'll collect your details.",
  foreigner: "Perfect! For Foreigners & Diaspora:\n\n🌍 New Company: $800 USD (7-10 days)\n🏢 Branch Registration: $2,000 USD (10-15 days)\n💳 Bank Account Help: $150 USD\n\nWhat service interests you?",
  default: "Hi! 👋 I'm RV AI from Raising Ventures Zambia.\n\nAre you registering as a:\n1️⃣ Zambian (Local)\n2️⃣ Foreigner/Diaspora",
};

export const RVChatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      text: botResponses.default,
      sender: "bot",
      timestamp: new Date(),
    },
  ]);
  const [input, setInput] = useState("");
  const [stage, setStage] = useState("initial");
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSendMessage = (text: string) => {
    if (!text.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      text: text,
      sender: "user",
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInput("");

    // Bot response logic
    setTimeout(() => {
      let botText = "";
      let newStage = stage;

      const lowerText = text.toLowerCase();

      if (stage === "initial") {
        if (
          lowerText.includes("zambian") ||
          lowerText.includes("local") ||
          lowerText.includes("1")
        ) {
          botText = botResponses.zambian;
          newStage = "zambian";
        } else if (
          lowerText.includes("foreigner") ||
          lowerText.includes("diaspora") ||
          lowerText.includes("2")
        ) {
          botText = botResponses.foreigner;
          newStage = "foreigner";
        } else {
          botText = "Please choose: 1️⃣ Zambian or 2️⃣ Foreigner/Diaspora";
        }
      } else if (stage === "zambian") {
        botText = `Thanks! 📋 I'll need:\n✓ Company Name\n✓ Your WhatsApp\n✓ Email\n\nWhat's your company name?`;
        newStage = "collecting_zambian";
      } else if (stage === "foreigner") {
        botText = `Excellent! 🌐 I'll need:\n✓ Company Name\n✓ Your Country\n✓ WhatsApp\n✓ Email\n\nWhat's your company name?`;
        newStage = "collecting_foreigner";
      } else if (stage.includes("collecting")) {
        botText = `Perfect! 📱 Send your WhatsApp number to +260 979 333 072 with your details:\n\nCompany: ${text}\nCountry: [Your country]\nEmail: [Your email]\n\nWe'll send payment details within 2 hours! 🚀`;
      }

      const botMessage: Message = {
        id: Date.now().toString(),
        text: botText,
        sender: "bot",
        timestamp: new Date(),
      };

      setMessages((prev) => [...prev, botMessage]);
      setStage(newStage);
    }, 500);
  };

  return (
    <>
      {/* Chat Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 w-14 h-14 bg-primary text-white rounded-full shadow-lg hover:shadow-xl hover:scale-110 transition-all flex items-center justify-center z-40"
        aria-label="Open chat"
      >
        {isOpen ? <X size={24} /> : <MessageCircle size={24} />}
      </button>

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-24 right-6 w-96 max-w-[calc(100vw-24px)] bg-white rounded-lg shadow-2xl flex flex-col h-96 z-40 border border-border">
          {/* Header */}
          <div className="bg-primary text-white p-4 rounded-t-lg">
            <h3 className="font-bold">RV AI Assistant</h3>
            <p className="text-xs opacity-90">
              Company Registration Expert
            </p>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-3 bg-background">
            {messages.map((msg) => (
              <div
                key={msg.id}
                className={`flex ${
                  msg.sender === "user" ? "justify-end" : "justify-start"
                }`}
              >
                <div
                  className={`max-w-xs px-4 py-2 rounded-lg ${
                    msg.sender === "bot"
                      ? "bg-primary text-white rounded-bl-none"
                      : "bg-accent text-white rounded-br-none"
                  }`}
                >
                  <p className="text-sm whitespace-pre-wrap">{msg.text}</p>
                </div>
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <div className="p-4 border-t border-border flex gap-2">
            <Input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyPress={(e) => {
                if (e.key === "Enter") {
                  handleSendMessage(input);
                }
              }}
              placeholder="Type your response..."
              className="flex-1 text-sm"
            />
            <Button
              onClick={() => handleSendMessage(input)}
              size="sm"
              className="bg-accent hover:bg-accent/90"
            >
              <Send size={16} />
            </Button>
          </div>
        </div>
      )}
    </>
  );
};
