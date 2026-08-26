"use client";

import { useState } from "react";
import { 
  Component, 
  Sparkles, 
  Search, 
  Check, 
  ChevronRight, 
  Star, 
  Bell, 
  SlidersHorizontal, 
  ArrowUpRight, 
  ShieldCheck, 
  Copy
} from "lucide-react";

export default function ComponentsGallery() {
  const [activeTab, setActiveTab] = useState("Buttons");
  const [copiedSection, setCopiedSection] = useState<string | null>(null);

  const triggerCopy = (sec: string) => {
    setCopiedSection(sec);
    setTimeout(() => setCopiedSection(null), 2000);
  };

  return (
    <div className="space-y-8 max-w-7xl mx-auto px-4 py-8">
      
      {/* Header */}
      <div className="text-center space-y-3">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-xs font-mono font-bold">
          <Component className="w-3.5 h-3.5" />
          UI COMPONENT LIBRARY
        </div>
        <h1 className="text-3xl font-black tracking-tight text-white sm:text-4xl">
          Reusable UI Components
        </h1>
        <p className="text-sm text-slate-400 max-w-2xl mx-auto">
          Crafted with Tailwind CSS, custom design tokens, glassmorphism, and micro-interactions.
        </p>
      </div>

      {/* Component Category Tabs */}
      <div className="flex items-center justify-center gap-2 overflow-x-auto p-1 bg-slate-900/60 rounded-full border border-slate-800 w-fit mx-auto">
        {["Buttons", "Stat Cards", "Badges", "Inputs & Controls"].map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveTab(cat)}
            className={`px-5 py-2 rounded-full text-xs font-bold transition-all ${
              activeTab === cat
                ? "bg-gradient-to-r from-indigo-500 to-purple-600 text-white shadow-lg"
                : "text-slate-400 hover:text-white"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Showcase Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        
        {/* Buttons Showcase */}
        {activeTab === "Buttons" && (
          <>
            <div className="p-6 rounded-3xl bg-slate-900/60 border border-slate-800 space-y-4">
              <h3 className="font-bold text-white text-sm">Gradient CTA Button</h3>
              <div className="p-6 rounded-2xl bg-slate-950 flex items-center justify-center border border-white/5">
                <button className="px-6 py-2.5 rounded-xl bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white font-bold text-xs shadow-lg shadow-indigo-500/25 hover:scale-105 active:scale-95 transition-all">
                  Get Started Free
                </button>
              </div>
            </div>

            <div className="p-6 rounded-3xl bg-slate-900/60 border border-slate-800 space-y-4">
              <h3 className="font-bold text-white text-sm">Glassmorphic Pill Button</h3>
              <div className="p-6 rounded-2xl bg-slate-950 flex items-center justify-center border border-white/5">
                <button className="px-6 py-2 rounded-full bg-white/10 backdrop-blur-md text-white border border-white/20 hover:bg-white/20 font-bold text-xs transition-all">
                  Explore Components
                </button>
              </div>
            </div>

            <div className="p-6 rounded-3xl bg-slate-900/60 border border-slate-800 space-y-4">
              <h3 className="font-bold text-white text-sm">Neon Glow Border Button</h3>
              <div className="p-6 rounded-2xl bg-slate-950 flex items-center justify-center border border-white/5">
                <button className="relative px-6 py-2.5 rounded-xl bg-slate-900 text-lime-400 font-bold text-xs border border-lime-400/50 shadow-lg shadow-lime-400/20 hover:bg-lime-400 hover:text-slate-950 transition-all">
                  Enterprise Plan
                </button>
              </div>
            </div>
          </>
        )}

        {/* Stat Cards Showcase */}
        {activeTab === "Stat Cards" && (
          <>
            <div className="p-6 rounded-3xl bg-slate-900/60 border border-slate-800 space-y-4">
              <h3 className="font-bold text-white text-sm">Dark Hero Stat Card</h3>
              <div className="p-5 rounded-2xl bg-slate-900 border border-white/10 text-white space-y-2">
                <span className="text-xs text-slate-400 font-medium">Total Revenue</span>
                <div className="text-2xl font-black">$23,902</div>
                <span className="text-[11px] font-bold text-emerald-400">↑ 4.2% from last month</span>
              </div>
            </div>

            <div className="p-6 rounded-3xl bg-slate-900/60 border border-slate-800 space-y-4">
              <h3 className="font-bold text-white text-sm">Sports Fixture Card</h3>
              <div className="p-5 rounded-2xl bg-teal-900/40 border border-teal-500/30 text-white space-y-2 text-center">
                <span className="text-xs text-teal-300 font-mono">Juventus vs Sassuolo</span>
                <div className="text-xl font-black">21:00, 11 Nov</div>
              </div>
            </div>
          </>
        )}

        {/* Badges Showcase */}
        {activeTab === "Badges" && (
          <>
            <div className="p-6 rounded-3xl bg-slate-900/60 border border-slate-800 space-y-4 col-span-full">
              <h3 className="font-bold text-white text-sm">Status & Category Badges</h3>
              <div className="p-6 rounded-2xl bg-slate-950 flex flex-wrap items-center gap-3 border border-white/5">
                <span className="px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 text-xs font-bold">Active</span>
                <span className="px-3 py-1 rounded-full bg-amber-500/20 text-amber-400 border border-amber-500/30 text-xs font-bold">Pending</span>
                <span className="px-3 py-1 rounded-full bg-blue-500/20 text-blue-400 border border-blue-500/30 text-xs font-bold">Dispatch</span>
                <span className="px-3 py-1 rounded-full bg-rose-500/20 text-rose-400 border border-rose-500/30 text-xs font-bold">Cancelled</span>
                <span className="px-3 py-1 rounded-full bg-purple-500/20 text-purple-400 border border-purple-500/30 text-xs font-bold">Pro Plan</span>
                <span className="px-3 py-1 rounded-full bg-slate-800 text-slate-300 text-xs font-bold">Coming Soon</span>
              </div>
            </div>
          </>
        )}

        {/* Inputs & Controls Showcase */}
        {activeTab === "Inputs & Controls" && (
          <>
            <div className="p-6 rounded-3xl bg-slate-900/60 border border-slate-800 space-y-4 col-span-full">
              <h3 className="font-bold text-white text-sm">Search & Command Palette Bar</h3>
              <div className="p-6 rounded-2xl bg-slate-950 border border-white/5 max-w-lg mx-auto">
                <div className="relative bg-slate-900 rounded-xl px-4 py-2.5 border border-white/10 flex items-center justify-between text-xs text-slate-400">
                  <div className="flex items-center gap-2">
                    <Search className="w-4 h-4 text-indigo-400" />
                    <input type="text" placeholder="Search components, dashboards..." className="bg-transparent text-white focus:outline-none w-full" />
                  </div>
                  <kbd className="px-2 py-0.5 rounded bg-slate-800 text-[10px] font-mono text-slate-400 border border-white/5">⌘K</kbd>
                </div>
              </div>
            </div>
          </>
        )}

      </div>

    </div>
  );
}
