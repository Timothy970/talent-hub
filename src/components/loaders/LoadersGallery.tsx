"use client";

import { useState } from "react";
import { Loader, Sparkles, Copy, Check, Code } from "lucide-react";

export default function LoadersGallery() {
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const copyCode = (id: string, code: string) => {
    navigator.clipboard.writeText(code);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  const LOADERS = [
    {
      id: "loader-1",
      title: "Pulse Orbit Ring",
      description: "Dual orbital rings spinning in 3D perspective with glowing core.",
      jsxSnippet: `<div className="relative w-12 h-12 flex items-center justify-center">
  <div className="absolute inset-0 rounded-full border-2 border-indigo-500/30 border-t-indigo-500 animate-spin" />
  <div className="absolute inset-2 rounded-full border-2 border-pink-500/30 border-b-pink-500 animate-spin-slow" />
  <div className="w-2 h-2 rounded-full bg-white animate-pulse" />
</div>`,
      render: () => (
        <div className="relative w-12 h-12 flex items-center justify-center">
          <div className="absolute inset-0 rounded-full border-2 border-indigo-500/30 border-t-indigo-500 animate-spin" />
          <div className="absolute inset-2 rounded-full border-2 border-pink-500/30 border-b-pink-500 animate-spin-slow" />
          <div className="w-2 h-2 rounded-full bg-white animate-pulse" />
        </div>
      )
    },
    {
      id: "loader-2",
      title: "Neon Gradient Spinner",
      description: "Smooth gradient spinning ring with intense glow halo.",
      jsxSnippet: `<div className="w-12 h-12 rounded-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 p-1 animate-spin shadow-lg shadow-indigo-500/50">
  <div className="w-full h-full bg-slate-950 rounded-full" />
</div>`,
      render: () => (
        <div className="w-12 h-12 rounded-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 p-1 animate-spin shadow-lg shadow-indigo-500/50">
          <div className="w-full h-full bg-slate-950 rounded-full" />
        </div>
      )
    },
    {
      id: "loader-3",
      title: "Staggered Dots Wave",
      description: "Three bouncing gradient dots with staggered keyframe delays.",
      jsxSnippet: `<div className="flex items-center gap-2">
  <div className="w-3 h-3 rounded-full bg-indigo-500 animate-bounce" />
  <div className="w-3 h-3 rounded-full bg-purple-500 animate-bounce [animation-delay:0.2s]" />
  <div className="w-3 h-3 rounded-full bg-pink-500 animate-bounce [animation-delay:0.4s]" />
</div>`,
      render: () => (
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-indigo-500 animate-bounce" />
          <div className="w-3 h-3 rounded-full bg-purple-500 animate-bounce [animation-delay:0.2s]" />
          <div className="w-3 h-3 rounded-full bg-pink-500 animate-bounce [animation-delay:0.4s]" />
        </div>
      )
    },
    {
      id: "loader-4",
      title: "Sonar Pulse Radar",
      description: "Concentric expanding radar pulse wave effect.",
      jsxSnippet: `<div className="relative w-12 h-12 flex items-center justify-center">
  <div className="absolute inset-0 rounded-full bg-emerald-500/30 animate-ping" />
  <div className="relative w-4 h-4 rounded-full bg-emerald-400 shadow-lg shadow-emerald-500/50" />
</div>`,
      render: () => (
        <div className="relative w-12 h-12 flex items-center justify-center">
          <div className="absolute inset-0 rounded-full bg-emerald-500/30 animate-ping" />
          <div className="relative w-4 h-4 rounded-full bg-emerald-400 shadow-lg shadow-emerald-500/50" />
        </div>
      )
    },
    {
      id: "loader-5",
      title: "Glass Shimmer Bar",
      description: "Smooth glassmorphism linear progress bar with moving sheen.",
      jsxSnippet: `<div className="w-48 h-3 rounded-full bg-slate-900 overflow-hidden border border-white/10 relative">
  <div className="h-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 w-full animate-pulse" />
  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-shimmer" />
</div>`,
      render: () => (
        <div className="w-48 h-3 rounded-full bg-slate-900 overflow-hidden border border-white/10 relative">
          <div className="h-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 w-full animate-pulse" />
        </div>
      )
    },
    {
      id: "loader-6",
      title: "Card Skeleton Glow",
      description: "Realistic UI skeleton placeholder with shimmering highlight pass.",
      jsxSnippet: `<div className="w-full p-4 rounded-2xl bg-slate-900 border border-white/5 space-y-3">
  <div className="h-4 w-2/3 bg-slate-800 rounded animate-pulse" />
  <div className="h-3 w-full bg-slate-800/60 rounded animate-pulse" />
  <div className="h-3 w-4/5 bg-slate-800/60 rounded animate-pulse" />
</div>`,
      render: () => (
        <div className="w-48 p-3 rounded-2xl bg-slate-900 border border-white/5 space-y-2">
          <div className="h-3 w-2/3 bg-slate-800 rounded animate-pulse" />
          <div className="h-2 w-full bg-slate-800/60 rounded animate-pulse" />
          <div className="h-2 w-4/5 bg-slate-800/60 rounded animate-pulse" />
        </div>
      )
    },
    {
      id: "loader-7",
      title: "Cyberpunk Morphing Square",
      description: "Rotating square with neon glow and border animation.",
      jsxSnippet: `<div className="w-10 h-10 border-2 border-cyan-400 rounded-lg animate-spin shadow-lg shadow-cyan-500/50" />`,
      render: () => (
        <div className="w-10 h-10 border-2 border-cyan-400 rounded-lg animate-spin shadow-lg shadow-cyan-500/50" />
      )
    },
    {
      id: "loader-8",
      title: "Equalizer Frequency Bars",
      description: "Animated vertical bar wave equalizer.",
      jsxSnippet: `<div className="flex items-end gap-1.5 h-8">
  <div className="w-1.5 bg-indigo-500 rounded-full h-full animate-pulse" />
  <div className="w-1.5 bg-purple-500 rounded-full h-3/4 animate-pulse [animation-delay:0.15s]" />
  <div className="w-1.5 bg-pink-500 rounded-full h-1/2 animate-pulse [animation-delay:0.3s]" />
  <div className="w-1.5 bg-emerald-500 rounded-full h-full animate-pulse [animation-delay:0.45s]" />
</div>`,
      render: () => (
        <div className="flex items-end gap-1.5 h-8">
          <div className="w-1.5 bg-indigo-500 rounded-full h-full animate-pulse" />
          <div className="w-1.5 bg-purple-500 rounded-full h-3/4 animate-pulse [animation-delay:0.15s]" />
          <div className="w-1.5 bg-pink-500 rounded-full h-1/2 animate-pulse [animation-delay:0.3s]" />
          <div className="w-1.5 bg-emerald-500 rounded-full h-full animate-pulse [animation-delay:0.45s]" />
        </div>
      )
    }
  ];

  return (
    <div className="space-y-8 max-w-7xl mx-auto px-4 py-8">
      
      {/* Header */}
      <div className="text-center space-y-3">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-pink-500/10 text-pink-400 border border-pink-500/20 text-xs font-mono font-bold">
          <Loader className="w-3.5 h-3.5 animate-spin-slow" />
          LOADERS & ANIMATIONS
        </div>
        <h1 className="text-3xl font-black tracking-tight text-white sm:text-4xl">
          Beautiful UI Loaders & Spinners
        </h1>
        <p className="text-sm text-slate-400 max-w-2xl mx-auto">
          Copy-paste ready, zero-dependency Tailwind CSS animated loaders, spinners, skeletons, and status indicators.
        </p>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {LOADERS.map((loader) => (
          <div
            key={loader.id}
            className="p-6 rounded-3xl bg-slate-900/60 border border-slate-800/80 shadow-xl flex flex-col justify-between space-y-6 hover:border-slate-700 transition-all group"
          >
            <div>
              <div className="h-28 rounded-2xl bg-slate-950 flex items-center justify-center border border-white/5 group-hover:border-indigo-500/30 transition-colors">
                {loader.render()}
              </div>

              <div className="mt-4 space-y-1">
                <h3 className="font-bold text-white text-sm">{loader.title}</h3>
                <p className="text-xs text-slate-400 leading-relaxed">{loader.description}</p>
              </div>
            </div>

            <button
              onClick={() => copyCode(loader.id, loader.jsxSnippet)}
              className="w-full py-2 px-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-semibold flex items-center justify-center gap-2 transition-colors border border-white/5"
            >
              {copiedId === loader.id ? (
                <>
                  <Check className="w-3.5 h-3.5 text-emerald-400" />
                  <span className="text-emerald-400">Copied JSX!</span>
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5 text-slate-400" />
                  <span>Copy Code</span>
                </>
              )}
            </button>
          </div>
        ))}
      </div>

    </div>
  );
}
