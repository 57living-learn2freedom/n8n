"use client";

import {
  useCallback,
  useEffect,
  useRef,
  useState,
  type KeyboardEvent,
} from "react";
import { Bot, Send, X } from "lucide-react";
import {
  CHATBOT_GREETING,
  getChatbotResponse,
} from "@/lib/chatbot";

interface ChatMessage {
  id: string;
  role: "user" | "bot";
  text: string;
}

const BOT_REPLY_DELAY_MS = 800;

function createMessage(role: ChatMessage["role"], text: string): ChatMessage {
  return { id: `${role}-${Date.now()}-${Math.random()}`, role, text };
}

function MessageBubble({ message }: { message: ChatMessage }) {
  const isUser = message.role === "user";

  return (
    <div className={`flex gap-2 ${isUser ? "flex-row-reverse" : ""}`}>
      {!isUser && (
        <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-red-100 text-red-700">
          <Bot className="h-4 w-4" />
        </div>
      )}
      <div
        className={`max-w-[85%] rounded-2xl px-4 py-3 text-sm leading-relaxed shadow-sm ${
          isUser
            ? "rounded-tr-sm bg-red-700 text-white"
            : "rounded-tl-sm bg-white text-zinc-700 ring-1 ring-zinc-200"
        }`}
      >
        {message.text}
      </div>
    </div>
  );
}

export default function ChatbotWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    createMessage("bot", CHATBOT_GREETING),
  ]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const chatEndRef = useRef<HTMLDivElement>(null);
  const replyTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const scrollToBottom = useCallback(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, []);

  useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping, scrollToBottom]);

  useEffect(() => {
    if (!isOpen) return;

    function handleEscape(e: globalThis.KeyboardEvent) {
      if (e.key === "Escape") setIsOpen(false);
    }

    document.body.style.overflow = "hidden";
    document.addEventListener("keydown", handleEscape);

    return () => {
      document.body.style.overflow = "";
      document.removeEventListener("keydown", handleEscape);
    };
  }, [isOpen]);

  useEffect(() => {
    return () => {
      if (replyTimerRef.current) clearTimeout(replyTimerRef.current);
    };
  }, []);

  function handleSend() {
    const trimmed = input.trim();
    if (!trimmed || isTyping) return;

    const userMessage = createMessage("user", trimmed);
    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setIsTyping(true);

    replyTimerRef.current = setTimeout(() => {
      const botReply = createMessage("bot", getChatbotResponse(trimmed));
      setMessages((prev) => [...prev, botReply]);
      setIsTyping(false);
    }, BOT_REPLY_DELAY_MS);
  }

  function handleInputKeyDown(e: KeyboardEvent<HTMLInputElement>) {
    if (e.key === "Enter") {
      e.preventDefault();
      handleSend();
    }
  }

  return (
    <>
      {isOpen && (
        <button
          type="button"
          className="fixed inset-0 z-40 bg-zinc-900/30 backdrop-blur-[2px]"
          onClick={() => setIsOpen(false)}
          aria-label="Close chat panel"
        />
      )}

      <div
        className={`fixed z-50 flex w-full flex-col bg-white shadow-2xl transition-transform duration-300 ease-out
          inset-x-0 bottom-0 h-[min(92dvh,720px)] max-w-none rounded-t-2xl
          sm:inset-y-0 sm:right-0 sm:left-auto sm:top-0 sm:h-full sm:max-w-md sm:rounded-none
          ${
            isOpen
              ? "translate-y-0 sm:translate-x-0"
              : "translate-y-full sm:translate-y-0 sm:translate-x-full"
          }`}
        role="dialog"
        aria-modal="true"
        aria-labelledby="chatbot-title"
        aria-hidden={!isOpen}
      >
        <div className="flex shrink-0 items-center justify-between rounded-t-2xl border-b border-zinc-200 bg-red-700 px-4 py-4 text-white sm:rounded-none sm:px-5">
          <div className="flex items-center gap-2">
            <Bot className="h-5 w-5" />
            <h2 id="chatbot-title" className="text-base font-bold">
              AI Support
            </h2>
          </div>
          <button
            type="button"
            onClick={() => setIsOpen(false)}
            className="rounded-lg p-2 transition-colors hover:bg-white/20"
            aria-label="Close chat"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        <div className="min-h-0 flex-1 space-y-4 overflow-y-auto overscroll-contain bg-zinc-50 px-4 py-5">
          {messages.map((message) => (
            <MessageBubble key={message.id} message={message} />
          ))}

          {isTyping && (
            <div className="flex gap-2">
              <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-red-100 text-red-700">
                <Bot className="h-4 w-4" />
              </div>
              <div className="rounded-2xl rounded-tl-sm bg-white px-4 py-3 shadow-sm ring-1 ring-zinc-200">
                <span className="inline-flex gap-1">
                  <span className="h-2 w-2 animate-bounce rounded-full bg-zinc-400 [animation-delay:0ms]" />
                  <span className="h-2 w-2 animate-bounce rounded-full bg-zinc-400 [animation-delay:150ms]" />
                  <span className="h-2 w-2 animate-bounce rounded-full bg-zinc-400 [animation-delay:300ms]" />
                </span>
              </div>
            </div>
          )}

          <div ref={chatEndRef} />
        </div>

        <div className="shrink-0 border-t border-zinc-200 bg-white p-3 pb-[max(0.75rem,env(safe-area-inset-bottom))] sm:p-4">
          <div className="flex items-center gap-2">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleInputKeyDown}
              placeholder="Type your message..."
              disabled={isTyping}
              className="min-w-0 flex-1 rounded-lg border border-zinc-300 px-4 py-2.5 text-base text-zinc-800 placeholder:text-zinc-400 focus:border-red-600 focus:outline-none focus:ring-2 focus:ring-red-600/20 disabled:bg-zinc-50 sm:text-sm"
              aria-label="Chat message input"
            />
            <button
              type="button"
              onClick={handleSend}
              disabled={!input.trim() || isTyping}
              className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-red-700 text-white transition-colors hover:bg-red-800 disabled:bg-zinc-200 disabled:text-zinc-400 sm:h-10 sm:w-10"
              aria-label="Send message"
            >
              <Send className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>

      {!isOpen && (
        <div className="group fixed bottom-4 right-4 z-50 sm:bottom-6 sm:right-6">
          <span className="pointer-events-none absolute bottom-full right-0 mb-2 hidden whitespace-nowrap rounded-lg bg-zinc-900 px-3 py-1.5 text-xs font-medium text-white opacity-0 shadow-lg transition-opacity duration-200 group-hover:opacity-100 sm:block">
            AI Assistant
          </span>
          <button
            type="button"
            onClick={() => setIsOpen(true)}
            className="flex h-14 w-14 items-center justify-center rounded-full bg-red-700 text-white shadow-lg shadow-red-700/30 transition-transform hover:scale-105 hover:bg-red-800 active:scale-95"
            aria-label="Open AI Assistant chat"
          >
            <Bot className="h-7 w-7" />
          </button>
        </div>
      )}
    </>
  );
}
