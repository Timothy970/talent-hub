"use client";

import { useState } from "react";
import { 
  LayoutDashboard, 
  Briefcase, 
  LineChart, 
  Globe, 
  Users, 
  Settings, 
  HelpCircle, 
  Search, 
  Bell, 
  Sparkles, 
  TrendingUp, 
  TrendingDown, 
  ChevronDown, 
  ArrowUpRight,
  Bot
} from "lucide-react";

export default function HeliosDashboard() {
  const [activeTab, setActiveTab] = useState("Wallet");
  const [chartRange, setChartRange] = useState("1Y");

  return (
    <div className="w-full min-h-[720px] bg-[#141217] text-slate-100 rounded-3xl p-6 md:p-8 flex flex-col md:flex-row gap-6 shadow-2xl font-sans relative overflow-hidden">
      
      {/* Background Rose Glow */}
      <div className="absolute top-0 right-1/4 w-96 h-96 rounded-full bg-pink-600/10 blur-[120px] pointer-events-none" />

      {/* Dark Sidebar */}
      <aside className="w-full md:w-60 bg-[#1c1921] p-6 rounded-3xl border border-white/5 flex flex-col justify-between z-10">
        <div>
          <div className="flex items-center gap-2.5 mb-8">
            <div className="w-8 h-8 rounded-xl bg-pink-500/20 text-pink-400 border border-pink-500/30 flex items-center justify-center font-bold">
              H
            </div>
            <span className="text-base font-bold text-white tracking-tight">Helios Investments</span>
          </div>

          <nav className="space-y-1.5 text-xs font-semibold text-slate-400">
            {[
              { label: "Dashboard", icon: LayoutDashboard, active: true },
              { label: "Portfolio", icon: Briefcase },
              { label: "Analysis", icon: LineChart },
              { label: "Market", icon: Globe },
              { label: "Community", icon: Users }
            ].map((item) => {
              const Icon = item.icon;
              return (
                <button
                  key={item.label}
                  className={`w-full flex items-center gap-3 px-4 py-3 rounded-2xl transition-all ${
                    item.active
                      ? "bg-gradient-to-r from-pink-500/20 to-purple-500/20 text-pink-300 border border-pink-500/30 font-bold"
                      : "hover:bg-white/5 hover:text-white"
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  <span>{item.label}</span>
                </button>
              );
            })}
          </nav>
        </div>

        <div className="space-y-1 text-xs font-semibold text-slate-400 pt-6 border-t border-white/5">
          <button className="w-full flex items-center gap-3 px-4 py-2 hover:text-white">
            <Settings className="w-4 h-4" />
            <span>Settings</span>
          </button>
          <button className="w-full flex items-center gap-3 px-4 py-2 hover:text-white">
            <HelpCircle className="w-4 h-4" />
            <span>Support</span>
          </button>
        </div>
      </aside>

      {/* Main Content Area */}
      <div className="flex-1 space-y-6 z-10">
        
        {/* Top Header */}
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-4">
          <div>
            <h2 className="text-2xl font-bold text-white">Welcome, Nadia</h2>
            <p className="text-xs text-slate-400">Here's your investment portfolio overview</p>
          </div>

          <div className="flex items-center gap-3 w-full lg:w-auto">
            {/* AI Prompt Input */}
            <div className="relative flex-1 lg:w-72 bg-[#1c1921] rounded-full border border-white/10 px-3.5 py-2 flex items-center gap-2 text-xs">
              <Bot className="w-4 h-4 text-pink-400" />
              <input
                type="text"
                placeholder="Ask helios.ai anything"
                className="bg-transparent text-white placeholder-slate-500 focus:outline-none w-full text-xs"
              />
            </div>

            <button className="p-2.5 rounded-full bg-[#1c1921] border border-white/10 text-slate-400 hover:text-white">
              <Bell className="w-4 h-4" />
            </button>
            <button className="p-2.5 rounded-full bg-[#1c1921] border border-white/10 text-slate-400 hover:text-white">
              <Settings className="w-4 h-4" />
            </button>

            <div className="flex items-center gap-2 pl-2">
              <img
                src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&h=100&fit=crop&crop=face"
                alt="Nadia"
                className="w-9 h-9 rounded-full object-cover border border-pink-500/30"
              />
            </div>
          </div>
        </div>

        {/* Content Layout (3 Grid Columns) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          
          {/* Left Column (Wallet & AI Card) - 4 Cols */}
          <div className="lg:col-span-4 space-y-6">
            
            {/* Category Pills */}
            <div className="flex items-center gap-2">
              {["Market", "Wallet", "Tools"].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-4 py-1.5 rounded-full text-xs font-bold transition-all ${
                    activeTab === tab
                      ? "bg-slate-700 text-white shadow-lg"
                      : "bg-[#1c1921] text-slate-400 hover:text-white border border-white/5"
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>

            {/* Total Holding Card */}
            <div className="p-6 rounded-3xl bg-[#1c1921] border border-white/10 space-y-3">
              <div className="flex items-center justify-between text-xs text-slate-400">
                <span>Total Holding</span>
                <button className="flex items-center gap-1 px-2.5 py-1 rounded-full bg-white/5 text-xs text-white">
                  <span>6M</span> <ChevronDown className="w-3 h-3" />
                </button>
              </div>
              <div className="text-3xl font-black text-white">$ 12,304.11</div>
            </div>

            {/* AI Insights Card */}
            <div className="p-6 rounded-3xl bg-gradient-to-b from-pink-950/40 via-[#1c1921] to-[#1c1921] border border-pink-500/20 space-y-3">
              <h4 className="font-bold text-sm text-white">Decisions Powered by Data</h4>
              <p className="text-xs text-slate-400 leading-relaxed">
                Move beyond guesswork with AI-driven investment insights tailored to your strategy.
              </p>
              <button className="w-full py-2.5 rounded-full bg-gradient-to-r from-pink-500 to-purple-600 hover:opacity-90 text-white font-bold text-xs shadow-lg shadow-pink-500/20 transition-all">
                Explore AI Insights
              </button>
            </div>

          </div>

          {/* Center Column (Watchlist) - 4 Cols */}
          <div className="lg:col-span-4 space-y-4 p-6 rounded-3xl bg-[#1c1921] border border-white/10">
            <div className="flex items-center justify-between">
              <h3 className="font-bold text-white text-sm">Watchlist</h3>
            </div>

            <div className="flex items-center gap-2">
              <span className="px-3 py-1 rounded-full bg-slate-700 text-white text-[11px] font-bold">Most Viewed</span>
              <span className="px-3 py-1 rounded-full bg-white/5 text-slate-400 text-[11px] font-semibold">Gain</span>
              <span className="px-3 py-1 rounded-full bg-white/5 text-slate-400 text-[11px] font-semibold">Lose</span>
            </div>

            <div className="space-y-3 pt-2">
              {[
                { name: "Spotify", ticker: "NYSE: SPOT", price: "$11,770.3", change: "+16.31%" },
                { name: "Amazon", ticker: "NYSE: AMZN", price: "$10,280.8", change: "+8.11%" },
                { name: "MSFT", ticker: "NYSE: MSFT", price: "$8,510.2", change: "+4.89%" },
                { name: "NVDA", ticker: "NYSE: NVDA", price: "$2,110.2", change: "+2.12%" }
              ].map((stock) => (
                <div key={stock.name} className="flex items-center justify-between p-3 rounded-2xl bg-white/5 hover:bg-white/10 transition-colors">
                  <div>
                    <span className="font-bold text-xs text-white block">{stock.name}</span>
                    <span className="text-[10px] text-slate-500 font-mono">{stock.ticker}</span>
                  </div>
                  <div className="text-right">
                    <span className="font-bold text-xs text-white block">{stock.price}</span>
                    <span className="text-[10px] font-semibold text-emerald-400">{stock.change}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column (My Portfolio Grid) - 4 Cols */}
          <div className="lg:col-span-4 space-y-4 p-6 rounded-3xl bg-[#1c1921] border border-white/10">
            <div className="flex items-center justify-between">
              <h3 className="font-bold text-white text-sm">My Portfolio</h3>
              <button className="text-xs text-slate-400 hover:text-white flex items-center gap-1">
                See all <ArrowUpRight className="w-3 h-3" />
              </button>
            </div>

            <div className="grid grid-cols-2 gap-3">
              {[
                { symbol: "AAPL", units: 104, price: "$ 1,721.3", change: "+12.31%" },
                { symbol: "AMZN", units: 12, price: "$ 1,721.3", change: "+12.31%" },
                { symbol: "MSFT", units: 41, price: "$ 1,721.3", change: "+12.31%" },
                { symbol: "NVDA", units: 16, price: "$ 1,721.3", change: "+12.31%" }
              ].map((item) => (
                <div key={item.symbol} className="p-3.5 rounded-2xl bg-white/5 space-y-2">
                  <div className="text-xs font-bold text-white">{item.price}</div>
                  <span className="text-[10px] text-emerald-400 font-semibold block">{item.change}</span>
                  <div className="flex items-center justify-between text-[10px] text-slate-400 pt-1 border-t border-white/5">
                    <span className="font-mono">{item.symbol}</span>
                    <span>Units {item.units}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* Portfolio Performance Graph */}
        <div className="p-6 rounded-3xl bg-[#1c1921] border border-white/10 space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="font-bold text-white text-sm">Portfolio Performance</h3>
            <div className="flex items-center gap-1 bg-white/5 p-1 rounded-full text-xs font-bold">
              {["1D", "1W", "1M", "6M", "1Y"].map((r) => (
                <button
                  key={r}
                  onClick={() => setChartRange(r)}
                  className={`px-3 py-1 rounded-full transition-colors ${
                    chartRange === r ? "bg-slate-700 text-white" : "text-slate-400 hover:text-white"
                  }`}
                >
                  {r}
                </button>
              ))}
            </div>
          </div>

          {/* SVG Area Chart Visual */}
          <div className="relative h-44 w-full pt-4">
            <svg className="w-full h-full" viewBox="0 0 800 160" preserveAspectRatio="none">
              <defs>
                <linearGradient id="heliosGrad" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#ec4899" stopOpacity="0.4" />
                  <stop offset="100%" stopColor="#ec4899" stopOpacity="0.0" />
                </linearGradient>
              </defs>
              <path
                d="M0,120 Q100,40 200,90 T400,60 T600,100 T800,70 L800,160 L0,160 Z"
                fill="url(#heliosGrad)"
              />
              <path
                d="M0,120 Q100,40 200,90 T400,60 T600,100 T800,70"
                fill="none"
                stroke="#ec4899"
                strokeWidth="3"
              />
              <circle cx="400" cy="60" r="5" fill="#ffffff" stroke="#ec4899" strokeWidth="3" />
            </svg>

            {/* Active Marker Tooltip */}
            <div className="absolute top-2 left-1/2 -translate-x-1/2 bg-slate-900 border border-pink-500/40 px-3 py-1.5 rounded-xl shadow-xl text-center">
              <span className="text-[10px] text-slate-400 block font-mono">1st Jun 2025</span>
              <span className="text-xs font-bold text-white">$ 16,500 <span className="text-emerald-400 font-semibold">+35%</span></span>
            </div>
          </div>

          <div className="flex justify-between text-[11px] font-mono text-slate-500 pt-2 border-t border-white/5">
            {["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"].map((m) => (
              <span key={m}>{m}</span>
            ))}
          </div>
        </div>

      </div>

    </div>
  );
}
