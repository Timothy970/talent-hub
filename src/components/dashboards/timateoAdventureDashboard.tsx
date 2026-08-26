"use client";

import React, { useState } from "react";
import {
  Compass,
  MapPin,
  Calendar,
  Star,
  ShieldCheck,
  Award,
  Headphones,
  Leaf,
  ChevronRight,
  ArrowRight,
  X,
  Check
} from "lucide-react";

export default function timateoAdventureDashboard() {
  const [selectedTrek, setSelectedTrek] = useState<any>(null);

  const treks = [
    {
      name: "Valley of Flowers",
      duration: "6 days / Moderate",
      rating: "4.8",
      reviews: "320 reviews",
      price: "$450",
      image: "🌸"
    },
    {
      name: "Hampta Pass Trek",
      duration: "5 days / Moderate",
      rating: "4.7",
      reviews: "210 reviews",
      price: "$380",
      image: "🏔️"
    },
    {
      name: "Kedarkantha Peak",
      duration: "4 days / Easy",
      rating: "4.9",
      reviews: "200 reviews",
      price: "$290",
      image: "❄️"
    },
    {
      name: "Manali Alpine Circuit",
      duration: "7 days / Challenging",
      rating: "4.9",
      reviews: "170 reviews",
      price: "$520",
      image: "⛰️"
    }
  ];

  return (
    <div className="min-h-screen bg-[#0f172a] text-slate-100 font-sans p-4 sm:p-8 space-y-8 animate-fade-in">
      
      {/* Hero Banner Showcase */}
      <div className="relative rounded-3xl overflow-hidden bg-gradient-to-r from-slate-900 via-indigo-950 to-slate-900 border border-slate-800 p-8 lg:p-12 shadow-2xl space-y-6">
        
        {/* Background Ambient Overlay */}
        <div className="absolute right-0 top-0 w-1/2 h-full bg-gradient-to-l from-orange-500/10 via-amber-500/10 to-transparent pointer-events-none" />

        <div className="relative z-10 max-w-2xl space-y-6">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-orange-500/20 text-orange-300 border border-orange-500/30 text-xs font-bold uppercase tracking-wider">
            <Compass className="w-4 h-4 text-orange-400" />
            <span>timateo Travel & Adventure Hub</span>
          </div>

          <h1 className="text-4xl sm:text-5xl font-black text-white leading-tight tracking-tight">
            Explore. Trek.{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-orange-400 via-amber-400 to-yellow-400">
              Unwind.
            </span>
          </h1>

          <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
            Curated mountain treks, snow peak adventures, and camping experiences crafted for every explorer.
          </p>

          <div className="flex flex-wrap items-center gap-4 pt-2">
            <button
              onClick={() => setSelectedTrek(treks[0])}
              className="px-6 py-3.5 rounded-2xl bg-gradient-to-r from-orange-500 to-amber-600 text-white font-bold text-sm shadow-xl shadow-orange-500/25 hover:scale-105 active:scale-95 transition-all flex items-center gap-2"
            >
              <span>Explore Treks 🚀</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Trail Map Card Visual */}
        <div className="relative z-10 pt-6 border-t border-slate-800/80">
          <div className="font-bold text-slate-400 text-xs uppercase tracking-wider mb-4">
            Popular Trekking Expeditions
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {treks.map((t, idx) => (
              <div
                key={idx}
                onClick={() => setSelectedTrek(t)}
                className="p-5 rounded-2xl bg-slate-900/90 border border-slate-800 hover:border-orange-500/60 shadow-lg cursor-pointer group transition-all"
              >
                <div className="text-3xl mb-3">{t.image}</div>
                <h3 className="font-bold text-white text-sm group-hover:text-orange-400 transition-colors">
                  {t.name}
                </h3>
                <p className="text-xs text-slate-400 mt-1">{t.duration}</p>
                <div className="flex items-center justify-between pt-4 mt-4 border-t border-slate-800">
                  <div className="flex items-center gap-1 text-xs text-amber-400 font-bold">
                    <Star className="w-3.5 h-3.5 fill-amber-400" />
                    <span>{t.rating} ({t.reviews})</span>
                  </div>
                  <span className="text-sm font-black text-white">{t.price}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>

      {/* Trust & Guarantee Badges Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="p-4 rounded-2xl bg-slate-900/80 border border-slate-800 flex items-center gap-3">
          <div className="p-2.5 rounded-xl bg-orange-500/10 text-orange-400"><ShieldCheck className="w-5 h-5" /></div>
          <div>
            <div className="font-bold text-white text-xs">Trusted & Safe</div>
            <div className="text-[10px] text-slate-400">Verified guides & safe travels</div>
          </div>
        </div>

        <div className="p-4 rounded-2xl bg-slate-900/80 border border-slate-800 flex items-center gap-3">
          <div className="p-2.5 rounded-xl bg-amber-500/10 text-amber-400"><Award className="w-5 h-5" /></div>
          <div>
            <div className="font-bold text-white text-xs">Best Price Guarantee</div>
            <div className="text-[10px] text-slate-400">Get the best deals always</div>
          </div>
        </div>

        <div className="p-4 rounded-2xl bg-slate-900/80 border border-slate-800 flex items-center gap-3">
          <div className="p-2.5 rounded-xl bg-indigo-500/10 text-indigo-400"><Headphones className="w-5 h-5" /></div>
          <div>
            <div className="font-bold text-white text-xs">24/7 Expedition Support</div>
            <div className="text-[10px] text-slate-400">We are here to help anytime</div>
          </div>
        </div>

        <div className="p-4 rounded-2xl bg-slate-900/80 border border-slate-800 flex items-center gap-3">
          <div className="p-2.5 rounded-xl bg-emerald-500/10 text-emerald-400"><Leaf className="w-5 h-5" /></div>
          <div>
            <div className="font-bold text-white text-xs">Sustainable Travel</div>
            <div className="text-[10px] text-slate-400">Leave no trace, just memories</div>
          </div>
        </div>
      </div>

      {/* Booking Drawer Modal */}
      {selectedTrek && (
        <div className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-sm flex justify-end">
          <div className="w-full max-w-md bg-slate-900 border-l border-slate-800 h-full p-6 space-y-6 overflow-y-auto animate-in slide-in-from-right duration-200">
            <div className="flex items-center justify-between border-b border-slate-800 pb-4">
              <h3 className="font-bold text-white text-base">Book Expedition</h3>
              <button onClick={() => setSelectedTrek(null)} className="p-1 rounded-lg bg-slate-800 text-slate-400 hover:text-white"><X className="w-4 h-4" /></button>
            </div>

            <div className="space-y-4">
              <div className="text-4xl">{selectedTrek.image}</div>
              <h4 className="text-xl font-bold text-white">{selectedTrek.name}</h4>
              <p className="text-xs text-slate-400">{selectedTrek.duration} • Rating: {selectedTrek.rating}</p>
              
              <div className="p-4 rounded-2xl bg-slate-950 border border-slate-800 space-y-2 text-xs">
                <div className="flex justify-between"><span className="text-slate-400">Package Cost:</span><span className="font-bold text-white">{selectedTrek.price} / person</span></div>
                <div className="flex justify-between"><span className="text-slate-400">Included:</span><span className="font-bold text-emerald-400">Guide, Meals, Gear</span></div>
              </div>

              <button onClick={() => setSelectedTrek(null)} className="w-full py-3 rounded-2xl bg-gradient-to-r from-orange-500 to-amber-600 text-white font-bold text-xs shadow-lg">
                Confirm Booking
              </button>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}
