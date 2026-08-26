"use client";

import React, { useState } from "react";
import {
  UserPlus,
  Share2,
  CheckSquare,
  Bot,
  Key,
  PieChart,
  Grid,
  Plus,
  Send,
  Paperclip,
  Smile,
  Mic,
  ArrowUpRight,
  Sparkles,
  Lock
} from "lucide-react";

export default function timateoCollabDashboard() {
  const [message, setMessage] = useState("");
  const [messagesList, setMessagesList] = useState<string[]>([]);

  const handleSendMessage = () => {
    if (!message.trim()) return;
    setMessagesList([...messagesList, message]);
    setMessage("");
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 font-sans p-4 sm:p-8 flex flex-col justify-between max-w-5xl mx-auto space-y-8 animate-fade-in">
      
      {/* Top Welcome Section */}
      <div className="space-y-6 pt-6 text-center">
        
        {/* Decorative Brand Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-100 text-blue-700 font-semibold text-xs border border-blue-200 shadow-sm">
          <Sparkles className="w-4 h-4 text-blue-600" />
          <span>TIMATEO COLLABORATION WORKSPACE</span>
        </div>

        <div className="max-w-2xl mx-auto space-y-3">
          <h1 className="text-3xl font-black text-slate-900 tracking-tight">
            Welcome to your new timateo Workspace! 🎉
          </h1>
          <p className="text-sm text-slate-500">
            Collaborate seamlessly with your team, share files, integrate AI assistants, and assign real-time tasks.
          </p>
        </div>

        {/* Quick Action Buttons Row */}
        <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
          <button className="px-5 py-2.5 rounded-2xl bg-blue-100 hover:bg-blue-200 text-blue-800 font-bold text-xs shadow-sm flex items-center gap-2 transition-all">
            <UserPlus className="w-4 h-4 text-blue-600" />
            <span>Add Members</span>
          </button>

          <button className="px-5 py-2.5 rounded-2xl bg-sky-100 hover:bg-sky-200 text-sky-800 font-bold text-xs shadow-sm flex items-center gap-2 transition-all">
            <Share2 className="w-4 h-4 text-sky-600" />
            <span>Share a File</span>
          </button>

          <button className="px-5 py-2.5 rounded-2xl bg-indigo-100 hover:bg-indigo-200 text-indigo-800 font-bold text-xs shadow-sm flex items-center gap-2 transition-all">
            <CheckSquare className="w-4 h-4 text-indigo-600" />
            <span>Assign Tasks</span>
          </button>
        </div>
      </div>

      {/* Suggested Apps Carousel */}
      <div className="bg-white border border-slate-200 rounded-3xl p-6 shadow-sm space-y-4">
        <div className="flex items-center justify-between">
          <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">
            Suggested Apps to Enhance Your Space
          </span>
          <button className="text-xs text-blue-600 font-bold hover:underline">Explore Marketplace →</button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-4 gap-4">
          <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 hover:border-blue-400 transition-all flex items-center gap-3 cursor-pointer group">
            <div className="p-2.5 rounded-xl bg-blue-500 text-white shadow-md"><Key className="w-5 h-5" /></div>
            <div>
              <div className="font-bold text-slate-900 text-xs group-hover:text-blue-600">1Password SaaS</div>
              <div className="text-[10px] text-slate-400">Vault Security</div>
            </div>
          </div>

          <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 hover:border-blue-400 transition-all flex items-center gap-3 cursor-pointer group">
            <div className="p-2.5 rounded-xl bg-purple-600 text-white shadow-md"><Bot className="w-5 h-5" /></div>
            <div>
              <div className="font-bold text-slate-900 text-xs group-hover:text-purple-600">timateo AI Assistant</div>
              <div className="text-[10px] text-slate-400">LLM Copilot</div>
            </div>
          </div>

          <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 hover:border-blue-400 transition-all flex items-center gap-3 cursor-pointer group">
            <div className="p-2.5 rounded-xl bg-pink-500 text-white shadow-md"><PieChart className="w-5 h-5" /></div>
            <div>
              <div className="font-bold text-slate-900 text-xs group-hover:text-pink-600">Poll in Chat</div>
              <div className="text-[10px] text-slate-400">Team Voting</div>
            </div>
          </div>

          <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 hover:border-blue-400 transition-all flex items-center justify-center cursor-pointer group">
            <Grid className="w-5 h-5 text-slate-400 group-hover:text-blue-600" />
          </div>
        </div>
      </div>

      {/* Pending Invites Banner */}
      <div className="p-4 rounded-2xl bg-amber-50 border border-amber-200 text-amber-900 text-xs flex items-center justify-between shadow-sm">
        <div className="flex items-center gap-2.5">
          <span className="w-2 h-2 rounded-full bg-amber-500 animate-pulse" />
          <span><strong>keamk364@gmail.com</strong> was invited by <strong>Racheal Njuguna</strong> and hasn&apos;t joined yet.</span>
        </div>
        <button className="px-3 py-1 rounded-xl bg-amber-200 hover:bg-amber-300 font-bold text-[11px]">Resend Invite</button>
      </div>

      {/* Chat Messages Log */}
      {messagesList.length > 0 && (
        <div className="space-y-2">
          {messagesList.map((msg, i) => (
            <div key={i} className="p-3 rounded-2xl bg-blue-600 text-white text-xs font-medium max-w-md ml-auto shadow-md">
              {msg}
            </div>
          ))}
        </div>
      )}

      {/* Bottom Message Input Bar */}
      <div className="sticky bottom-4 bg-white border border-slate-200 rounded-3xl p-3 shadow-xl flex items-center gap-3">
        <button className="p-2.5 rounded-2xl bg-blue-100 text-blue-600 hover:bg-blue-200 transition-all">
          <Plus className="w-5 h-5" />
        </button>

        <input
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && handleSendMessage()}
          placeholder="Message timateo workspace (History is ON)..."
          className="flex-1 bg-transparent border-none text-xs text-slate-900 placeholder-slate-400 focus:outline-none"
        />

        <div className="flex items-center gap-2 text-slate-400">
          <button className="p-2 hover:text-slate-600"><Paperclip className="w-4 h-4" /></button>
          <button className="p-2 hover:text-slate-600"><Smile className="w-4 h-4" /></button>
          <button className="p-2 hover:text-slate-600"><Mic className="w-4 h-4" /></button>
          <button
            onClick={handleSendMessage}
            className="p-2.5 rounded-2xl bg-blue-600 hover:bg-blue-700 text-white shadow-md transition-all"
          >
            <Send className="w-4 h-4" />
          </button>
        </div>
      </div>

    </div>
  );
}
