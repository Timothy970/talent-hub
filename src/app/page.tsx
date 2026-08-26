import Header from "@/components/shell/Header";
import Footer from "@/components/shell/Footer";
import Link from "next/link";
import Image from "next/image";
import { DASHBOARDS, COMING_SOON_CATEGORIES } from "@/data/dashboardsData";
import {
  ArrowRight,
  Sparkles,
  LayoutDashboard,
  Loader,
  Component,
  Lock,
  Bot,
  Kanban,
  ShoppingBag,
  CreditCard,
  Settings,
  BarChart3,
  CheckCircle2,
  Eye
} from "lucide-react";

export default function Home() {
  const iconMap: Record<string, any> = {
    Bot,
    Lock,
    Kanban,
    ShoppingBag,
    CreditCard,
    Settings,
    BarChart3
  };

  return (
    <div className="min-h-screen bg-[#090d16] text-slate-100 flex flex-col font-sans selection:bg-indigo-500 selection:text-white">
      <Header />

      <main className="flex-1 space-y-16 pb-20">

        {/* Hero Section */}
        <section className="relative overflow-hidden pt-12 pb-16 lg:pt-20 lg:pb-24 border-b border-slate-800/80">

          {/* Background Ambient Glow */}
          <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[350px] bg-gradient-to-tr from-indigo-600/20 via-purple-600/20 to-pink-600/10 rounded-full blur-[140px] pointer-events-none" />

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-6">

            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-indigo-500/10 text-indigo-300 border border-indigo-500/30 text-xs font-mono font-bold shadow-lg shadow-indigo-500/10 animate-fade-in">
              <Sparkles className="w-3.5 h-3.5 text-pink-400" />
              <span>14+ TIMATEO DASHBOARD SUITES + CARDS HUB</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white max-w-4xl mx-auto leading-tight">
              Showcase of Modern UI Components &{" "}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400">
                14+ timateo Dashboard Suites
              </span>
            </h1>

            <p className="text-base sm:text-lg text-slate-400 max-w-2xl mx-auto leading-relaxed">
              Explore 14+ pixel-perfect interactive dashboard suites featuring timateo Enterprise Control Center, Civic Population Hub, Team Collaboration Space, and Adventure Travel Explorer — plus a standalone Cards Hub, Loaders, and UI Component Library.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
              <Link
                href="/dashboards/timateo-enterprise"
                className="px-6 py-3.5 rounded-2xl bg-gradient-to-r from-indigo-500 via-purple-600 to-pink-600 text-white font-bold text-sm shadow-xl shadow-indigo-500/25 hover:scale-105 active:scale-95 transition-all flex items-center gap-2"
              >
                <LayoutDashboard className="w-4 h-4" />
                <span>Explore timateo Suites</span>
                <ArrowRight className="w-4 h-4" />
              </Link>

              <Link
                href="/cards-gallery"
                className="px-6 py-3.5 rounded-2xl bg-slate-900 hover:bg-slate-800 text-white font-bold text-sm border border-slate-800 hover:border-slate-700 transition-all flex items-center gap-2"
              >
                <Component className="w-4 h-4 text-purple-400" />
                <span>Cards Hub</span>
              </Link>

              <Link
                href="/loaders"
                className="px-6 py-3.5 rounded-2xl bg-slate-900 hover:bg-slate-800 text-white font-bold text-sm border border-slate-800 hover:border-slate-700 transition-all flex items-center gap-2"
              >
                <Loader className="w-4 h-4 text-pink-400 animate-spin-slow" />
                <span>Loaders Gallery</span>
              </Link>
            </div>

            {/* Live Stats Row */}
            <div className="pt-10 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
              <div className="p-4 rounded-2xl bg-slate-900/60 border border-slate-800">
                <div className="text-2xl font-black text-white">14+</div>
                <div className="text-xs text-slate-400 font-medium">Dashboard Suites</div>
              </div>
              <div className="p-4 rounded-2xl bg-slate-900/60 border border-slate-800">
                <div className="text-2xl font-black text-indigo-400">25+</div>
                <div className="text-xs text-slate-400 font-medium">Screenshot Designs</div>
              </div>
              <div className="p-4 rounded-2xl bg-slate-900/60 border border-slate-800">
                <div className="text-2xl font-black text-emerald-400">100%</div>
                <div className="text-xs text-slate-400 font-medium">Responsive & Interactive</div>
              </div>
              <div className="p-4 rounded-2xl bg-slate-900/60 border border-slate-800">
                <div className="text-2xl font-black text-pink-400">4</div>
                <div className="text-xs text-slate-400 font-medium">Hub Pillars</div>
              </div>
            </div>

          </div>
        </section>

        {/* 10 Dashboard Showcase Grid */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">

          <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-4">
            <div>
              <span className="text-xs font-mono font-bold text-indigo-400 uppercase tracking-wider block">
                Interactive Showcase
              </span>
              <h2 className="text-3xl font-black text-white tracking-tight mt-1">
                10 Showcase Dashboard Templates
              </h2>
            </div>
            <p className="text-xs text-slate-400 max-w-md">
              Recreated from artwork screenshots into fully interactive, responsive Next.js dashboard components.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {DASHBOARDS.map((dash, index) => (
              <div
                key={dash.id}
                className="group p-5 rounded-3xl bg-slate-900/60 border border-slate-800/90 hover:border-slate-700 shadow-xl hover:shadow-2xl transition-all duration-300 flex flex-col justify-between space-y-5 relative overflow-hidden"
              >
                <div className="space-y-4">
                  {/* Thumbnail Image */}
                  <div className="relative w-full aspect-video rounded-2xl overflow-hidden border border-slate-800 bg-slate-950">
                    <Image
                      src={dash.image}
                      alt={dash.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                      unoptimized
                    />
                    <div className="absolute top-3 left-3 px-2.5 py-1 rounded-full bg-slate-950/80 backdrop-blur-md text-[11px] font-mono font-bold text-white border border-white/10">
                      #{String(index + 1).padStart(2, "0")} {dash.category}
                    </div>
                  </div>

                  <div>
                    <h3 className="text-lg font-bold text-white group-hover:text-indigo-400 transition-colors flex items-center justify-between">
                      <span>{dash.title}</span>
                      <span className="text-xs font-normal text-slate-400 font-sans">{dash.subtitle}</span>
                    </h3>
                    <p className="text-xs text-slate-400 mt-1.5 leading-relaxed">
                      {dash.description}
                    </p>
                  </div>

                  {/* Feature Pills */}
                  <div className="flex flex-wrap gap-1.5">
                    {dash.features.slice(0, 3).map((feat, i) => (
                      <span key={i} className="px-2.5 py-0.5 rounded-md bg-slate-800 text-[10px] text-slate-300 font-medium">
                        • {feat}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Launch Button */}
                <Link
                  href={`/dashboards/${dash.id}`}
                  className="w-full py-2.5 px-4 rounded-xl bg-slate-800 hover:bg-indigo-600 text-white font-bold text-xs flex items-center justify-center gap-2 transition-all group-hover:shadow-lg group-hover:shadow-indigo-600/25"
                >
                  <span>Launch Live Dashboard</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            ))}
          </div>

        </section>

        {/* Coming Soon Categories Grid Section */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8 pt-8">

          <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-4">
            <div>
              <span className="text-xs font-mono font-bold text-pink-400 uppercase tracking-wider block">
                Roadmap & Expansion
              </span>
              <h2 className="text-3xl font-black text-white tracking-tight mt-1 flex items-center gap-3">
                Upcoming Categories
                <span className="px-3 py-0.5 rounded-full bg-pink-500/10 text-pink-400 border border-pink-500/20 text-xs font-bold font-mono">
                  Coming Soon
                </span>
              </h2>
            </div>
            <p className="text-xs text-slate-400 max-w-md">
              Future component sets currently in design & development pipeline.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {COMING_SOON_CATEGORIES.map((cat) => {
              const IconComponent = iconMap[cat.iconName] || Lock;
              return (
                <div
                  key={cat.title}
                  className="p-6 rounded-3xl bg-slate-900/40 border border-slate-800/60 shadow-lg relative space-y-4 hover:border-pink-500/30 transition-all opacity-95 group"
                >
                  <div className="flex items-center justify-between">
                    <div className="p-3 rounded-2xl bg-pink-500/10 text-pink-400 border border-pink-500/20">
                      <IconComponent className="w-5 h-5" />
                    </div>
                    <span className="px-3 py-1 rounded-full bg-amber-500/10 text-amber-400 border border-amber-500/20 font-mono text-[10px] font-bold">
                      {cat.badge}
                    </span>
                  </div>

                  <div>
                    <h3 className="font-bold text-white text-base flex items-center justify-between">
                      <span>{cat.title}</span>
                      <span className="text-[10px] text-slate-500 font-mono">{cat.expectedDate}</span>
                    </h3>
                    <p className="text-xs text-slate-400 mt-1 leading-relaxed">
                      {cat.description}
                    </p>
                  </div>

                  <div className="pt-2 border-t border-slate-800/80 space-y-1">
                    <span className="text-[10px] font-mono text-slate-500 uppercase font-semibold block">Planned Features:</span>
                    <div className="flex flex-wrap gap-1.5">
                      {cat.features.map((f, idx) => (
                        <span key={idx} className="px-2 py-0.5 rounded bg-slate-800/60 text-[10px] text-slate-400">
                          {f}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

        </section>

      </main>

      <Footer />
    </div>
  );
}
