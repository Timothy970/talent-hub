"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { DASHBOARDS, DashboardMeta } from "@/data/dashboardsData";
import { 
  ChevronLeft, 
  ChevronRight, 
  Eye, 
  X, 
  Code, 
  Check, 
  Sparkles, 
  ExternalLink,
  Layers,
  Info
} from "lucide-react";

interface DashboardShellProps {
  currentDashboard: DashboardMeta;
  children: React.ReactNode;
}

export default function DashboardShell({ currentDashboard, children }: DashboardShellProps) {
  const [showModal, setShowModal] = useState(false);
  const [activeViewMode, setActiveViewMode] = useState<"live" | "compare">("live");

  const [scale, setScale] = useState<number>(85);

  const currentIndex = DASHBOARDS.findIndex((d) => d.id === currentDashboard.id);
  const prevDashboard = DASHBOARDS[(currentIndex - 1 + DASHBOARDS.length) % DASHBOARDS.length];
  const nextDashboard = DASHBOARDS[(currentIndex + 1) % DASHBOARDS.length];

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col">
      {/* Top Banner Control Bar for the Dashboard Showcase */}
      <div className="w-full bg-slate-900/90 border-b border-slate-800 px-4 py-2.5 sticky top-16 z-40 backdrop-blur-md">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-3">
          
          {/* Left Title & Status */}
          <div className="flex items-center gap-3">
            <span className="px-2.5 py-1 rounded-lg bg-indigo-500/10 text-indigo-400 font-mono text-xs border border-indigo-500/20 font-bold">
              DASHBOARD {currentIndex + 1} / {DASHBOARDS.length}
            </span>
            <div>
              <h1 className="text-base font-bold text-white flex items-center gap-2">
                {currentDashboard.title}
                <span className="text-xs font-normal text-slate-400">({currentDashboard.subtitle})</span>
              </h1>
            </div>
          </div>

          {/* Center Navigation Arrows */}
          <div className="flex items-center gap-2">
            <Link
              href={`/dashboards/${prevDashboard.id}`}
              className="p-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors flex items-center gap-1 text-xs font-medium"
              title={`Previous: ${prevDashboard.title}`}
            >
              <ChevronLeft className="w-4 h-4" />
              <span className="hidden sm:inline">Prev ({prevDashboard.title})</span>
            </Link>

            <span className="text-slate-600 font-mono text-xs px-1">•</span>

            <Link
              href={`/dashboards/${nextDashboard.id}`}
              className="p-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors flex items-center gap-1 text-xs font-medium"
              title={`Next: ${nextDashboard.title}`}
            >
              <span className="hidden sm:inline">Next ({nextDashboard.title})</span>
              <ChevronRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Right Controls: Scale Selector & Reference Image Inspector */}
          <div className="flex items-center gap-3">
            {/* Screen Fit / Scale Controls */}
            <div className="flex items-center gap-1 bg-slate-800/90 p-1 rounded-xl border border-slate-750 text-xs">
              <span className="text-[10px] font-mono text-slate-400 px-1.5 uppercase font-bold">Fit View:</span>
              {[100, 90, 85, 75, 65].map((s) => (
                <button
                  key={s}
                  onClick={() => setScale(s)}
                  className={`px-2 py-0.5 rounded-lg text-[11px] font-bold transition-all ${
                    scale === s
                      ? "bg-indigo-600 text-white shadow-md shadow-indigo-600/30"
                      : "text-slate-400 hover:text-white hover:bg-slate-700/60"
                  }`}
                >
                  {s}%
                </button>
              ))}
            </div>

            <button
              onClick={() => setShowModal(true)}
              className="px-3 py-1.5 rounded-xl bg-indigo-600/20 hover:bg-indigo-600/30 text-indigo-300 border border-indigo-500/30 text-xs font-semibold flex items-center gap-1.5 transition-all shadow-sm"
            >
              <Eye className="w-3.5 h-3.5 text-indigo-400" />
              <span className="hidden sm:inline">Reference Image</span>
            </button>
          </div>

        </div>
      </div>

      {/* Main Interactive Dashboard Canvas with Dynamic Zoom Scaling */}
      <main className="flex-1 w-full bg-slate-950 p-2 sm:p-4 overflow-x-auto flex justify-center">
        <div 
          className="w-full max-w-[1600px] mx-auto rounded-3xl overflow-hidden shadow-2xl border border-slate-800/80 bg-slate-900/40 transition-all duration-200"
          style={{
            zoom: scale / 100,
          }}
        >
          {children}
        </div>
      </main>

      {/* Reference Image Inspector Modal */}
      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-xl animate-in fade-in duration-200">
          <div className="relative w-full max-w-5xl bg-slate-900 rounded-3xl border border-slate-750 shadow-2xl overflow-hidden flex flex-col max-h-[90vh]">
            
            {/* Modal Header */}
            <div className="flex items-center justify-between px-6 py-4 border-b border-slate-800 bg-slate-900">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-xl bg-indigo-500/10 text-indigo-400 border border-indigo-500/20">
                  <Eye className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white">Reference UI Design</h3>
                  <p className="text-xs text-slate-400">Comparing live interactive component with source artwork</p>
                </div>
              </div>
              <button
                onClick={() => setShowModal(false)}
                className="p-2 rounded-xl text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Body */}
            <div className="p-6 overflow-y-auto space-y-4">
              <div className="relative w-full aspect-video rounded-2xl overflow-hidden border border-slate-800 bg-slate-950 flex items-center justify-center">
                <Image
                  src={currentDashboard.image}
                  alt={currentDashboard.title}
                  fill
                  className="object-contain"
                  unoptimized
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
                <div className="p-4 rounded-2xl bg-slate-950/60 border border-slate-800">
                  <span className="font-semibold text-indigo-400 block mb-1">Key Visual Elements:</span>
                  <ul className="space-y-1 text-slate-300 list-disc list-inside">
                    {currentDashboard.features.map((feat, i) => (
                      <li key={i}>{feat}</li>
                    ))}
                  </ul>
                </div>
                <div className="p-4 rounded-2xl bg-slate-950/60 border border-slate-800">
                  <span className="font-semibold text-indigo-400 block mb-1">Design Token Specs:</span>
                  <p className="text-slate-300 leading-relaxed mb-2">{currentDashboard.description}</p>
                  <span className="inline-block px-2.5 py-1 rounded-md bg-indigo-500/20 text-indigo-300 font-mono text-[11px]">
                    Theme: {currentDashboard.theme}
                  </span>
                </div>
              </div>
            </div>

            {/* Modal Footer */}
            <div className="px-6 py-4 bg-slate-950 border-t border-slate-800 flex items-center justify-end">
              <button
                onClick={() => setShowModal(false)}
                className="px-5 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-medium text-sm transition-colors"
              >
                Back to Live Demo
              </button>
            </div>

          </div>
        </div>
      )}
    </div>
  );
}
