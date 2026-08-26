"use client";

import { useState } from "react";
import { 
  LayoutDashboard, 
  Users, 
  MessageSquare, 
  BarChart2, 
  Calendar, 
  DollarSign, 
  ArrowLeftRight, 
  Trophy, 
  Search, 
  Bell, 
  Zap, 
  ChevronRight,
  Sparkles
} from "lucide-react";

export default function CoachProDashboard() {
  const [activeNav, setActiveNav] = useState("Dashboard");

  return (
    <div className="w-full min-h-[720px] bg-[#d9eee8] text-slate-800 rounded-3xl p-6 md:p-8 flex flex-col md:flex-row gap-6 shadow-2xl font-sans">
      
      {/* Mint Glass Sidebar */}
      <aside className="w-full md:w-56 bg-emerald-900/5 backdrop-blur-xl p-5 rounded-3xl border border-emerald-900/10 flex flex-col justify-between">
        <div>
          <div className="flex items-center gap-2 mb-8">
            <span className="text-xl font-black text-emerald-950 tracking-tight">CoachPro</span>
          </div>

          <nav className="space-y-1.5 text-xs font-bold text-emerald-900/70">
            {[
              { label: "Dashboard", icon: LayoutDashboard },
              { label: "Squad", icon: Users },
              { label: "Messenger", icon: MessageSquare },
              { label: "Statistic", icon: BarChart2 },
              { label: "Calendar", icon: Calendar },
              { label: "Finance", icon: DollarSign },
              { label: "Transfers", icon: ArrowLeftRight },
              { label: "Youth academy", icon: Trophy }
            ].map((item) => {
              const Icon = item.icon;
              const isActive = activeNav === item.label;
              return (
                <button
                  key={item.label}
                  onClick={() => setActiveNav(item.label)}
                  className={`w-full flex items-center gap-3 px-3.5 py-2.5 rounded-2xl transition-all ${
                    isActive
                      ? "bg-teal-700 text-white shadow-lg shadow-teal-900/20"
                      : "hover:bg-emerald-900/10 hover:text-emerald-950"
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  <span>{item.label}</span>
                </button>
              );
            })}
          </nav>
        </div>
      </aside>

      {/* Main Dashboard Canvas */}
      <div className="flex-1 space-y-6">
        
        {/* Header Bar */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div>
            <span className="text-xs text-teal-800 font-bold block">Welcome back, Andrea 👋</span>
            <h2 className="text-2xl font-black text-emerald-950">Dashboard</h2>
          </div>

          <div className="flex items-center gap-3">
            <button className="p-2.5 rounded-full bg-white/70 backdrop-blur-md text-teal-900 border border-white hover:bg-white shadow-sm">
              <Search className="w-4 h-4" />
            </button>
            <button className="p-2.5 rounded-full bg-white/70 backdrop-blur-md text-teal-900 border border-white hover:bg-white shadow-sm">
              <Bell className="w-4 h-4" />
            </button>
            <div className="flex items-center gap-2 bg-white/70 backdrop-blur-md px-3 py-1.5 rounded-full border border-white shadow-sm">
              <img
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face"
                alt="Andrea"
                className="w-7 h-7 rounded-full object-cover"
              />
              <span className="text-xs font-bold text-emerald-950">Andrea Pirlo</span>
            </div>
          </div>
        </div>

        {/* Content Layout Grid (Left & Right Columns) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          
          {/* Left Column (Match Fixture & League Table) - 7 Cols */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Next Game Match Card */}
            <div className="p-6 rounded-3xl bg-white/80 backdrop-blur-md shadow-sm border border-white/80 space-y-4">
              <div className="flex items-center justify-between text-xs font-bold text-emerald-950">
                <span>Next game</span>
                <button className="text-teal-700 hover:underline">View calendar</button>
              </div>

              <div className="text-center text-[11px] font-semibold text-slate-500">
                <span>🏆 Serie A</span> • <span>21:00, 11 November 2020</span>
              </div>

              <div className="flex items-center justify-center gap-8 py-2">
                <div className="flex flex-col items-center gap-1">
                  <div className="w-12 h-12 rounded-full bg-slate-900 text-white font-black text-xl flex items-center justify-center shadow-md">
                    J
                  </div>
                  <span className="font-bold text-xs text-emerald-950">Juventus</span>
                </div>

                <span className="w-8 h-8 rounded-full bg-rose-500 text-white font-black text-xs flex items-center justify-center shadow-sm">
                  VS
                </span>

                <div className="flex flex-col items-center gap-1">
                  <div className="w-12 h-12 rounded-full bg-emerald-700 text-white font-black text-xl flex items-center justify-center shadow-md">
                    S
                  </div>
                  <span className="font-bold text-xs text-emerald-950">Sassuolo</span>
                </div>
              </div>
            </div>

            {/* Standings League Table */}
            <div className="p-6 rounded-3xl bg-white/80 backdrop-blur-md shadow-sm border border-white/80 space-y-4">
              <div className="flex items-center justify-between text-xs font-bold text-emerald-950">
                <span>Standings</span>
                <button className="text-teal-700 hover:underline">View all</button>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full text-left text-xs font-medium">
                  <thead>
                    <tr className="text-[10px] font-bold text-slate-400 border-b border-slate-200/60 pb-2">
                      <th className="py-2">#</th>
                      <th className="py-2">TEAM</th>
                      <th className="py-2">MP</th>
                      <th className="py-2">W</th>
                      <th className="py-2">D</th>
                      <th className="py-2">L</th>
                      <th className="py-2">G</th>
                      <th className="py-2 text-right">PTS</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100">
                    {[
                      { pos: 1, team: "Juventus", mp: 8, w: 6, d: 1, l: 1, g: "13:5", pts: 19, active: true },
                      { pos: 2, team: "Atalanta", mp: 8, w: 5, d: 1, l: 3, g: "10:2", pts: 16 },
                      { pos: 3, team: "Inter", mp: 8, w: 5, d: 0, l: 3, g: "10:3", pts: 15 },
                      { pos: 4, team: "Napoli", mp: 8, w: 4, d: 1, l: 3, g: "14:6", pts: 13 },
                      { pos: 5, team: "Milan", mp: 8, w: 4, d: 1, l: 3, g: "8:4", pts: 13 },
                      { pos: 6, team: "Roma", mp: 8, w: 4, d: 0, l: 4, g: "7:3", pts: 12 }
                    ].map((row) => (
                      <tr key={row.pos} className={`hover:bg-emerald-50/50 ${row.active ? "font-bold text-emerald-950" : "text-slate-600"}`}>
                        <td className="py-2.5">{row.pos}</td>
                        <td className="py-2.5 flex items-center gap-2">
                          <span className="w-4 h-4 rounded-full bg-slate-900 text-[10px] text-white flex items-center justify-center">
                            {row.team[0]}
                          </span>
                          <span>{row.team}</span>
                        </td>
                        <td className="py-2.5">{row.mp}</td>
                        <td className="py-2.5">{row.w}</td>
                        <td className="py-2.5">{row.d}</td>
                        <td className="py-2.5">{row.l}</td>
                        <td className="py-2.5 text-slate-400 text-[11px]">{row.g}</td>
                        <td className="py-2.5 text-right font-black text-emerald-950">{row.pts}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

          </div>

          {/* Right Column (Stats Gauges & 3D Action Banner) - 5 Cols */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Games Statistic */}
            <div className="p-6 rounded-3xl bg-white/80 backdrop-blur-md shadow-sm border border-white/80 space-y-4">
              <div className="flex items-center justify-between text-xs font-bold text-emerald-950">
                <span>Games statistic</span>
                <button className="text-teal-700 hover:underline">View all statistic</button>
              </div>

              {/* Progress bar line */}
              <div className="w-full h-3 bg-slate-200 rounded-full overflow-hidden flex">
                <div className="h-full bg-teal-600 w-[60%]" />
                <div className="h-full bg-amber-400 w-[20%]" />
                <div className="h-full bg-rose-500 w-[20%]" />
              </div>

              <div className="grid grid-cols-4 text-center text-xs">
                <div><span className="text-[10px] text-slate-400 block font-semibold">PL</span><span className="font-bold text-slate-900">8</span></div>
                <div><span className="text-[10px] text-slate-400 block font-semibold">VICTORIES</span><span className="font-bold text-teal-700">6</span></div>
                <div><span className="text-[10px] text-slate-400 block font-semibold">DRAWS</span><span className="font-bold text-amber-600">1</span></div>
                <div><span className="text-[10px] text-slate-400 block font-semibold">LOST</span><span className="font-bold text-rose-600">1</span></div>
              </div>
            </div>

            {/* 2x2 Metric Cards Grid */}
            <div className="grid grid-cols-2 gap-4">
              <div className="p-5 rounded-3xl bg-white/80 backdrop-blur-md shadow-sm border border-white/80 space-y-1">
                <span className="text-[10px] uppercase font-bold tracking-wider text-slate-400 block">POSSESSION</span>
                <div className="text-2xl font-black text-emerald-950">65%</div>
              </div>

              <div className="p-5 rounded-3xl bg-white/80 backdrop-blur-md shadow-sm border border-white/80 space-y-1">
                <span className="text-[10px] uppercase font-bold tracking-wider text-slate-400 block">OVERALL PRICE</span>
                <div className="text-2xl font-black text-emerald-950">$690.2m</div>
              </div>

              <div className="p-5 rounded-3xl bg-white/80 backdrop-blur-md shadow-sm border border-white/80 space-y-1">
                <span className="text-[10px] uppercase font-bold tracking-wider text-slate-400 block">TRANSFER BUDGET</span>
                <div className="text-2xl font-black text-emerald-950">$240.6m</div>
              </div>

              <div className="p-5 rounded-3xl bg-white/80 backdrop-blur-md shadow-sm border border-white/80 space-y-1">
                <span className="text-[10px] uppercase font-bold tracking-wider text-slate-400 block">AVERAGE SCORE</span>
                <div className="text-2xl font-black text-emerald-950">7.2</div>
              </div>
            </div>

            {/* 3D Promotional Callout Banner */}
            <div className="p-6 rounded-3xl bg-gradient-to-r from-teal-700 via-teal-800 to-emerald-900 text-white shadow-xl relative overflow-hidden space-y-3">
              <span className="text-[10px] font-bold tracking-widest uppercase text-teal-200 block">DON'T FORGET</span>
              <h4 className="text-lg font-black leading-tight max-w-[200px]">Setup training for next week</h4>
              <button className="px-4 py-2 rounded-full bg-white text-teal-950 text-xs font-extrabold hover:bg-teal-50 transition-colors shadow-md">
                Go to training center
              </button>
            </div>

          </div>

        </div>

      </div>

    </div>
  );
}
