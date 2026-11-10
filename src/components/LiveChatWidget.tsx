import React, { useState, useRef, useEffect } from 'react';
import { useStudio } from '../context/StudioContext';
import { MessageSquare, X, Send, Sparkles, Clock, CheckCircle2 } from 'lucide-react';

export const LiveChatWidget: React.FC = () => {
  const { isChatOpen, openChat, closeChat, chatMessages, sendMessage, selectChatOption } = useStudio();
  const [inputText, setInputText] = useState('');
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isChatOpen) {
      messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }
  }, [chatMessages, isChatOpen]);

  const handleSend = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputText.trim()) return;
    sendMessage(inputText.trim());
    setInputText('');
  };

  return (
    <>
      {/* Docked Floating Launcher Button */}
      {!isChatOpen && (
        <div className="fixed bottom-6 right-6 z-50 flex items-center gap-3">
          {/* Tooltip Badge */}
          <div className="hidden sm:flex items-center gap-2 px-3 py-1.5 rounded-full bg-zinc-900/90 dark:bg-zinc-900/90 light:bg-white text-xs font-mono text-zinc-300 dark:text-zinc-300 light:text-zinc-800 border border-white/[0.1] dark:border-white/[0.1] light:border-zinc-300 shadow-xl backdrop-blur-md animate-bounce">
            <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
            <span>Talk to an Engineer &bull; Instant Quote</span>
          </div>

          {/* Launcher Circle */}
          <button
            onClick={() => openChat()}
            className="w-14 h-14 rounded-full bg-gradient-to-tr from-cyan-500 via-sky-500 to-indigo-600 hover:from-cyan-400 hover:to-indigo-500 text-black flex items-center justify-center shadow-2xl shadow-cyan-500/30 transition-transform hover:scale-105 relative group"
            aria-label="Open Customer Sales Chat"
          >
            <MessageSquare className="w-6 h-6 fill-black" />
            <span className="absolute top-1 right-1 w-3.5 h-3.5 rounded-full bg-emerald-400 border-2 border-black animate-pulse" />
          </button>
        </div>
      )}

      {/* Expanded Interactive Customer Chat Window */}
      {isChatOpen && (
        <div className="fixed bottom-6 right-4 sm:right-6 z-50 w-[94vw] sm:w-[420px] max-h-[85vh] h-[600px] flex flex-col rounded-3xl overflow-hidden border border-white/[0.12] dark:border-white/[0.12] light:border-zinc-300 bg-[#090d16]/95 dark:bg-[#090d16]/95 light:bg-white shadow-2xl backdrop-blur-2xl animate-fadeIn">
          
          {/* Chat Header */}
          <div className="p-4 px-5 border-b border-white/[0.08] dark:border-white/[0.08] light:border-zinc-200 bg-zinc-900/80 dark:bg-zinc-900/80 light:bg-zinc-50 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-full bg-gradient-to-br from-cyan-400 to-indigo-500 p-[1.5px]">
                <div className="w-full h-full bg-black rounded-full flex items-center justify-center text-cyan-300 text-xs font-bold font-mono">
                  SJ
                </div>
              </div>
              <div className="flex flex-col text-left">
                <span className="text-sm font-bold text-white dark:text-white light:text-zinc-900 tracking-tight">
                  Sonu Jha Studio Chat
                </span>
                <span className="text-[11px] font-mono text-emerald-400 flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  Engineering Lead Online (SLA &lt; 5m)
                </span>
              </div>
            </div>

            <button
              onClick={closeChat}
              className="p-1.5 rounded-lg text-zinc-400 hover:text-white dark:hover:text-white light:hover:text-black hover:bg-white/[0.05] light:hover:bg-zinc-200 transition-colors"
              aria-label="Close Chat"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Messages Stream */}
          <div className="flex-1 p-4 overflow-y-auto space-y-4 text-xs font-sans text-left">
            {chatMessages.map((msg) => (
              <div
                key={msg.id}
                className={`flex flex-col ${msg.sender === 'user' ? 'items-end' : 'items-start'} space-y-1.5`}
              >
                <div
                  className={`max-w-[85%] p-3.5 rounded-2xl leading-relaxed ${
                    msg.sender === 'user'
                      ? 'bg-gradient-to-r from-cyan-500 to-indigo-600 text-black font-medium rounded-tr-none shadow-md'
                      : 'bg-zinc-900/90 dark:bg-zinc-900/90 light:bg-zinc-100 text-zinc-200 dark:text-zinc-200 light:text-zinc-800 border border-white/[0.06] dark:border-white/[0.06] light:border-zinc-200 rounded-tl-none'
                  }`}
                >
                  <p>{msg.text}</p>

                  {/* Render Custom Quote Card if attached */}
                  {msg.quote && (
                    <div className="mt-3 p-3 rounded-xl bg-black/60 dark:bg-black/60 light:bg-white border border-cyan-500/30 text-xs font-mono space-y-2">
                      <div className="font-bold text-cyan-400 flex items-center gap-1.5 text-[11px] uppercase tracking-wider">
                        <CheckCircle2 className="w-3.5 h-3.5" /> Project Specification Quote
                      </div>
                      <div className="text-white dark:text-white light:text-zinc-900 font-bold font-sans">
                        {msg.quote.serviceName}
                      </div>

                      {msg.quote.features.length > 0 && (
                        <div className="space-y-1 text-[11px] text-zinc-400">
                          <span className="font-semibold text-zinc-300">Selected Features:</span>
                          <ul className="list-disc list-inside space-y-0.5">
                            {msg.quote.features.map((feat, fIdx) => (
                              <li key={fIdx}>{feat}</li>
                            ))}
                          </ul>
                        </div>
                      )}

                      <div className="pt-2 border-t border-white/[0.08] flex items-center justify-between text-xs">
                        <span className="flex items-center gap-1 text-emerald-400 font-bold">
                          <Clock className="w-3.5 h-3.5" /> {msg.quote.estimatedDays} Days Delivery
                        </span>
                        <span className="text-white dark:text-white light:text-zinc-900 font-bold">
                          ${msg.quote.estimatedCost.toLocaleString()}
                        </span>
                      </div>
                    </div>
                  )}
                </div>

                {/* Option Quick Selection Pills */}
                {msg.options && (
                  <div className="flex flex-wrap gap-1.5 pt-1 max-w-[95%]">
                    {msg.options.map((opt, oIdx) => (
                      <button
                        key={oIdx}
                        onClick={() => selectChatOption(opt)}
                        className="text-[11px] font-mono px-2.5 py-1 rounded-full bg-zinc-800/80 dark:bg-zinc-800/80 light:bg-zinc-200 hover:bg-cyan-500 hover:text-black text-zinc-300 dark:text-zinc-300 light:text-zinc-700 transition-colors border border-white/[0.06] dark:border-white/[0.06] light:border-zinc-300"
                      >
                        {opt}
                      </button>
                    ))}
                  </div>
                )}

                <span className="text-[10px] font-mono text-zinc-500 px-1">
                  {msg.time}
                </span>
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>

          {/* Chat Input Bar */}
          <form
            onSubmit={handleSend}
            className="p-3 border-t border-white/[0.08] dark:border-white/[0.08] light:border-zinc-200 bg-zinc-900/60 dark:bg-zinc-900/60 light:bg-zinc-50 flex items-center gap-2"
          >
            <input
              type="text"
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              placeholder="Ask for quote, scope, or delivery timeline..."
              className="flex-1 bg-zinc-950 dark:bg-zinc-950 light:bg-white text-xs font-sans text-white dark:text-white light:text-zinc-900 border border-white/[0.1] dark:border-white/[0.1] light:border-zinc-300 rounded-xl px-3.5 py-2.5 focus:outline-none focus:border-cyan-400"
            />
            <button
              type="submit"
              className="p-2.5 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-black font-bold transition-all shadow-md shadow-cyan-500/20 disabled:opacity-50"
              disabled={!inputText.trim()}
              aria-label="Send message"
            >
              <Send className="w-4 h-4" />
            </button>
          </form>

        </div>
      )}
    </>
  );
};
