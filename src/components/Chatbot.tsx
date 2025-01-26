import { useState, useRef, useEffect } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { ScrollArea } from "./ui/scroll-area";
import { MessageCircle, X, Loader2 } from "lucide-react";
import { useToast } from "./ui/use-toast";

interface Message {
  role: "user" | "assistant";
  content: string;
}

const INITIAL_MESSAGE = `Hi! 👋 I'm your BKBCK assistant. I can help you with:
- Course information and navigation
- Academic queries
- Campus facilities
- Admission process
- Student services
- General guidance

How can I assist you today?`;

export const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      role: "assistant",
      content: INITIAL_MESSAGE,
    },
  ]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const scrollAreaRef = useRef<HTMLDivElement>(null);
  const { toast } = useToast();

  useEffect(() => {
    if (scrollAreaRef.current) {
      scrollAreaRef.current.scrollTop = scrollAreaRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    const userMessage = { role: "user" as const, content: input };
    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setIsLoading(true);

    try {
      // Here we'll integrate with Gemini API once we have the secure key setup
      // For now, showing a placeholder response
      setTimeout(() => {
        const assistantMessage = {
          role: "assistant" as const,
          content: "I'm being configured to help you better with Gemini AI. For now, please contact our support team at support@bkbck.edu.in for immediate assistance.",
        };
        setMessages((prev) => [...prev, assistantMessage]);
        setIsLoading(false);
      }, 1000);
    } catch (error) {
      console.error("Error:", error);
      toast({
        title: "Error",
        description: "Failed to get response. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <Button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-4 right-4 rounded-full p-4 shadow-lg"
        size="icon"
      >
        <MessageCircle className="h-6 w-6" />
      </Button>

      {isOpen && (
        <div className="fixed bottom-20 right-4 w-[380px] rounded-lg border bg-background shadow-xl">
          <div className="flex items-center justify-between border-b p-4">
            <div className="flex items-center gap-2">
              <MessageCircle className="h-5 w-5 text-primary" />
              <h2 className="font-semibold">Student Assistant</h2>
            </div>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsOpen(false)}
            >
              <X className="h-4 w-4" />
            </Button>
          </div>

          <ScrollArea className="h-[500px] p-4" ref={scrollAreaRef}>
            <div className="space-y-4">
              {messages.map((message, i) => (
                <div
                  key={i}
                  className={`flex ${
                    message.role === "assistant" ? "justify-start" : "justify-end"
                  }`}
                >
                  <div
                    className={`rounded-lg px-4 py-2 ${
                      message.role === "assistant"
                        ? "bg-secondary text-secondary-foreground"
                        : "bg-primary text-primary-foreground"
                    } max-w-[80%] whitespace-pre-wrap`}
                  >
                    {message.content}
                  </div>
                </div>
              ))}
              {isLoading && (
                <div className="flex justify-start">
                  <div className="flex items-center gap-2 rounded-lg bg-secondary px-4 py-2 text-secondary-foreground">
                    <Loader2 className="h-4 w-4 animate-spin" />
                    Typing...
                  </div>
                </div>
              )}
            </div>
          </ScrollArea>

          <form onSubmit={handleSubmit} className="border-t p-4">
            <div className="flex gap-2">
              <Input
                placeholder="Type your question..."
                value={input}
                onChange={(e) => setInput(e.target.value)}
                disabled={isLoading}
                className="flex-1"
              />
              <Button type="submit" disabled={isLoading}>
                {isLoading ? (
                  <Loader2 className="h-4 w-4 animate-spin" />
                ) : (
                  "Send"
                )}
              </Button>
            </div>
          </form>
        </div>
      )}
    </>
  );
};