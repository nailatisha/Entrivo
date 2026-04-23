"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import Link from "next/link";
import { MessageCircle, Send, X } from "lucide-react";
import { findChatbotResponse } from "@/data/chatbotData";

type Sender = "bot" | "user";

type ChatMessage = {
  id: string;
  sender: Sender;
  content: string[];
  showConsultantButton?: boolean;
};

const quickReplies = [
  "What does Entrivo do?",
  "What services do you offer?",
  "Which ASEAN country should I enter?",
  "How much does it cost?",
  "How do I get started?"
];

const welcomeMessage: ChatMessage = {
  id: "welcome-message",
  sender: "bot",
  content: [
    "Hi there! 👋 I'm Entrivo's AI Assistant, here to help you navigate your ASEAN expansion journey. You can ask me about our services, ASEAN markets, export regulations, or anything else about expanding your business. What would you like to know?"
  ]
};

function toParagraphs(response: string | string[]) {
  return Array.isArray(response) ? response : [response];
}

export function EntrivoChatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [isTyping, setIsTyping] = useState(false);
  const [hasUserInteracted, setHasUserInteracted] = useState(false);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const scrollAreaRef = useRef<HTMLDivElement | null>(null);

  const canSend = useMemo(() => inputValue.trim().length > 0, [inputValue]);

  useEffect(() => {
    if (isOpen && messages.length === 0) {
      setMessages([welcomeMessage]);
    }
  }, [isOpen, messages.length]);

  useEffect(() => {
    if (!scrollAreaRef.current) return;
    scrollAreaRef.current.scrollTop = scrollAreaRef.current.scrollHeight;
  }, [messages, isTyping]);

  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  const sendMessage = (rawText: string) => {
    const trimmed = rawText.trim();
    if (!trimmed) return;

    setHasUserInteracted(true);
    setInputValue("");

    setMessages((prev) => [
      ...prev,
      {
        id: `user-${Date.now()}`,
        sender: "user",
        content: [trimmed]
      }
    ]);

    setIsTyping(true);
    const typingDelay = 1000 + Math.floor(Math.random() * 500);

    timeoutRef.current = setTimeout(() => {
      const matched = findChatbotResponse(trimmed) as { response: string | string[]; isFallback: boolean };

      setMessages((prev) => [
        ...prev,
        {
          id: `bot-${Date.now()}`,
          sender: "bot",
          content: toParagraphs(matched.response),
          showConsultantButton: matched.isFallback
        }
      ]);
      setIsTyping(false);
    }, typingDelay);
  };

  return (
    <div className="fixed bottom-5 right-5 z-50">
      {isOpen ? (
        <div className="chat-widget-open flex h-[550px] w-[400px] flex-col overflow-hidden rounded-2xl border border-sage/40 bg-warm-white shadow-2xl">
          <header className="flex items-start justify-between bg-navy p-4 text-white">
            <div>
              <p className="font-heading text-xl font-semibold">Entrivo AI Assistant</p>
              <p className="text-xs text-sage">your Bridge to ASEAN</p>
            </div>
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-2 text-xs text-sage">
                <span className="h-2.5 w-2.5 rounded-full bg-emerald-400" />
                Online
              </div>
              <button
                type="button"
                aria-label="Close chat"
                className="rounded-md p-1 text-white transition hover:bg-white/20"
                onClick={() => setIsOpen(false)}
              >
                <X className="h-5 w-5" />
              </button>
            </div>
          </header>

          <div ref={scrollAreaRef} className="flex-1 space-y-3 overflow-y-auto bg-warm-white p-4">
            {messages.map((message) => {
              const isBot = message.sender === "bot";

              return (
                <div key={message.id} className={`animate-fade-in flex ${isBot ? "justify-start" : "justify-end"}`}>
                  <div className={`max-w-[82%] ${isBot ? "flex items-start gap-2" : ""}`}>
                    {isBot ? (
                      <div className="mt-1 grid h-7 w-7 place-items-center rounded-full bg-navy text-xs font-semibold text-white">
                        E
                      </div>
                    ) : null}

                    <div
                      className={`rounded-2xl px-4 py-2 text-sm ${
                        isBot ? "bg-sage/25 text-charcoal" : "bg-navy text-white"
                      }`}
                    >
                      {message.content.map((paragraph, index) => (
                        <p key={`${message.id}-${index}`} className={index > 0 ? "mt-2" : ""}>
                          {paragraph}
                        </p>
                      ))}

                      {message.showConsultantButton ? (
                        <Link
                          href="/contact"
                          className="mt-3 inline-flex rounded-full border border-navy px-3 py-1.5 text-xs font-semibold text-navy transition hover:bg-navy hover:text-white"
                        >
                          Speak to a Consultant
                        </Link>
                      ) : null}
                    </div>
                  </div>
                </div>
              );
            })}

            {messages.length > 0 && !hasUserInteracted ? (
              <div className="animate-fade-in flex flex-wrap gap-2 pl-9">
                {quickReplies.map((quickReply) => (
                  <button
                    key={quickReply}
                    type="button"
                    onClick={() => sendMessage(quickReply)}
                    className="rounded-full border border-navy px-3 py-1 text-xs font-medium text-navy transition hover:bg-navy hover:text-white"
                  >
                    {quickReply}
                  </button>
                ))}
              </div>
            ) : null}

            {isTyping ? (
              <div className="animate-fade-in flex justify-start">
                <div className="flex items-start gap-2">
                  <div className="mt-1 grid h-7 w-7 place-items-center rounded-full bg-navy text-xs font-semibold text-white">E</div>
                  <div className="rounded-2xl bg-sage/25 px-4 py-3">
                    <div className="flex items-center gap-1.5">
                      <span className="typing-dot h-2 w-2 rounded-full bg-navy/70" />
                      <span className="typing-dot h-2 w-2 rounded-full bg-navy/70 [animation-delay:120ms]" />
                      <span className="typing-dot h-2 w-2 rounded-full bg-navy/70 [animation-delay:240ms]" />
                    </div>
                  </div>
                </div>
              </div>
            ) : null}
          </div>

          <form
            className="border-t border-sage/30 bg-white p-3"
            onSubmit={(event) => {
              event.preventDefault();
              sendMessage(inputValue);
            }}
          >
            <div className="flex items-center gap-2">
              <input
                type="text"
                value={inputValue}
                onChange={(event) => setInputValue(event.target.value)}
                placeholder="Ask me anything about ASEAN expansion..."
                className="w-full rounded-full border border-sage/60 px-4 py-2 text-sm text-charcoal outline-none ring-navy transition focus:ring-2"
              />
              <button
                type="submit"
                disabled={!canSend}
                className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-gold text-navy transition hover:brightness-95 disabled:cursor-not-allowed disabled:opacity-50"
                aria-label="Send message"
              >
                <Send className="h-4 w-4" />
              </button>
            </div>
          </form>
        </div>
      ) : (
        <button
          type="button"
          aria-label="Open Entrivo AI Assistant"
          onClick={() => setIsOpen(true)}
          className="grid h-14 w-14 place-items-center rounded-full bg-navy text-white shadow-xl transition hover:scale-[1.03]"
        >
          <MessageCircle className="h-6 w-6" />
        </button>
      )}
    </div>
  );
}
