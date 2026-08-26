"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { 
  LayoutDashboard, 
  Loader, 
  Component, 
  ChevronDown, 
  Search, 
  Layers,
  ArrowRight
} from "lucide-react";
import { DASHBOARDS } from "@/data/dashboardsData";
import { useState } from "react";

export default function Header() {
  const pathname = usePathname();
  const [dashDropdownOpen, setDashDropdownOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-slate-800/80 bg-slate-950/80 backdrop-blur-xl transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          
          {/* Brand & Logo */}
          <div className="flex items-center gap-3">
            <Link href="/" className="flex items-center gap-2.5 group">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-indigo-500 via-purple-500 to-pink-500 p-0.5 shadow-lg shadow-indigo-500/20 group-hover:scale-105 transition-transform duration-300">
                <div className="w-full h-full bg-slate-950 rounded-[10px] flex items-center justify-center">
                  <Layers className="w-5 h-5 text-indigo-400 group-hover:text-pink-400 transition-colors" />
                </div>
              </div>
              <div className="flex flex-col">
                <span className="font-bold text-lg tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-white via-slate-200 to-slate-400">
                  Talent UI Hub
                </span>
                <span className="text-[10px] text-indigo-400 font-mono tracking-wider uppercase font-semibold">
                  10 Modern Dashboards
                </span>
              </div>
            </Link>
          </div>

          {/* Navigation Links */}
          <nav className="hidden md:flex items-center gap-1">
            <Link
              href="/"
              className={`px-3.5 py-2 rounded-lg text-sm font-medium transition-all ${
                pathname === "/" 
                  ? "bg-indigo-600/15 text-indigo-400 border border-indigo-500/30" 
                  : "text-slate-300 hover:text-white hover:bg-slate-800/60"
              }`}
            >
              Showcase Hub
            </Link>

            {/* Dashboards Dropdown */}
            <div className="relative" onMouseLeave={() => setDashDropdownOpen(false)}>
              <button
                onClick={() => setDashDropdownOpen(!dashDropdownOpen)}
                onMouseEnter={() => setDashDropdownOpen(true)}
                className={`px-3.5 py-2 rounded-lg text-sm font-medium flex items-center gap-1.5 transition-all ${
                  pathname.startsWith("/dashboards")
                    ? "bg-indigo-600/15 text-indigo-400 border border-indigo-500/30"
                    : "text-slate-300 hover:text-white hover:bg-slate-800/60"
                }`}
              >
                <LayoutDashboard className="w-4 h-4 text-indigo-400" />
                <span>Dashboards (10)</span>
                <ChevronDown className={`w-3.5 h-3.5 transition-transform ${dashDropdownOpen ? "rotate-180" : ""}`} />
              </button>

              {dashDropdownOpen && (
                <div className="absolute top-full left-0 mt-1 w-80 rounded-2xl bg-slate-900/95 border border-slate-750 shadow-2xl backdrop-blur-2xl p-2 z-50 animate-in fade-in zoom-in-95 duration-150">
                  <div className="px-3 py-1.5 text-xs font-semibold text-slate-400 uppercase tracking-wider font-mono">
                    Select Dashboard Template
                  </div>
                  <div className="max-h-96 overflow-y-auto space-y-1 pr-1 custom-scrollbar">
                    {DASHBOARDS.map((dash, index) => (
                      <Link
                        key={dash.id}
                        href={`/dashboards/${dash.id}`}
                        onClick={() => setDashDropdownOpen(false)}
                        className={`flex items-center justify-between p-2.5 rounded-xl transition-all ${
                          pathname === `/dashboards/${dash.id}`
                            ? "bg-indigo-600/20 text-white border border-indigo-500/30"
                            : "hover:bg-slate-800/80 text-slate-300 hover:text-white"
                        }`}
                      >
                        <div className="flex items-center gap-2.5">
                          <span className="w-5 text-center text-xs font-mono font-bold text-slate-500">
                            {String(index + 1).padStart(2, "0")}
                          </span>
                          <div>
                            <div className="text-sm font-semibold leading-none">{dash.title}</div>
                            <div className="text-[11px] text-slate-400 mt-1">{dash.subtitle}</div>
                          </div>
                        </div>
                        <span className="text-[10px] px-2 py-0.5 rounded-full bg-slate-800 text-indigo-300 border border-indigo-500/20 font-medium">
                          {dash.category}
                        </span>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Loaders Page Link */}
            <Link
              href="/loaders"
              className={`px-3.5 py-2 rounded-lg text-sm font-medium flex items-center gap-1.5 transition-all ${
                pathname === "/loaders"
                  ? "bg-indigo-600/15 text-indigo-400 border border-indigo-500/30"
                  : "text-slate-300 hover:text-white hover:bg-slate-800/60"
              }`}
            >
              <Loader className="w-4 h-4 text-pink-400 animate-spin-slow" />
              <span>Loaders</span>
            </Link>

            {/* Components Gallery */}
            <Link
              href="/components-gallery"
              className={`px-3.5 py-2 rounded-lg text-sm font-medium flex items-center gap-1.5 transition-all ${
                pathname === "/components-gallery"
                  ? "bg-indigo-600/15 text-indigo-400 border border-indigo-500/30"
                  : "text-slate-300 hover:text-white hover:bg-slate-800/60"
              }`}
            >
              <Component className="w-4 h-4 text-emerald-400" />
              <span>UI Components</span>
            </Link>
          </nav>

          {/* Right Action Badge */}
          <div className="flex items-center gap-3">
            <span className="hidden lg:inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              10 Dashboards Live
            </span>

            <Link
              href="/dashboards/eproduct"
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-gradient-to-r from-indigo-500 to-purple-600 text-white font-medium text-sm shadow-lg shadow-indigo-500/25 hover:opacity-90 hover:scale-[1.02] active:scale-[0.98] transition-all"
            >
              <span>Explore Dashboards</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

        </div>
      </div>
    </header>
  );
}
