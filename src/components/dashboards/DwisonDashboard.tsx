"use client";

import { useState } from "react";
import { 
  LayoutDashboard, 
  ShoppingBag, 
  BarChart3, 
  Users, 
  MessageSquare, 
  Star, 
  Settings, 
  HelpCircle, 
  Search, 
  Bell, 
  ChevronDown, 
  Phone, 
  CheckCircle2, 
  Sparkles,
  TrendingUp
} from "lucide-react";

export default function DwisonDashboard() {
  const [activeNav, setActiveNav] = useState("Overview");

  return (
    <div className="w-full min-h-[720px] bg-[#0d0f12] text-slate-100 rounded-3xl p-6 md:p-8 flex flex-col xl:flex-row gap-6 shadow-2xl font-sans relative overflow-hidden">
      
      {/* Sidebar */}
      <aside className="w-full xl:w-60 bg-[#15181e] p-6 rounded-3xl border border-white/5 flex flex-col justify-between">
        <div className="space-y-6">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-xl bg-lime-400 text-slate-950 font-black flex items-center justify-center text-sm shadow-lg shadow-lime-400/20">
              D
            </div>
            <span className="text-base font-black text-white tracking-tight">DWISON</span>
          </div>

          {/* Quick Search */}
          <div className="relative bg-[#1c2028] rounded-xl px-3 py-2 border border-white/5 flex items-center justify-between text-xs text-slate-400">
            <div className="flex items-center gap-2">
              <Search className="w-3.5 h-3.5" />
              <span>Search...</span>
            </div>
            <kbd className="px-1.5 py-0.5 rounded bg-slate-800 text-[10px] font-mono text-slate-400">⌘K</kbd>
          </div>

          {/* Nav Links */}
          <div className="space-y-4">
            <div>
              <span className="text-[10px] font-bold uppercase tracking-wider text-slate-500 block mb-2">Dashboards</span>
              <div className="space-y-1 text-xs font-semibold text-slate-400">
                {[
                  { label: "Overview", icon: LayoutDashboard, active: true },
                  { label: "eCommerce", icon: ShoppingBag },
                  { label: "Analytics", icon: BarChart3 },
                  { label: "Customers", icon: Users }
                ].map((item) => {
                  const Icon = item.icon;
                  return (
                    <button
                      key={item.label}
                      className={`w-full flex items-center gap-3 px-3.5 py-2.5 rounded-xl transition-all ${
                        item.active
                          ? "bg-lime-400 text-slate-950 font-bold shadow-lg shadow-lime-400/20"
                          : "hover:bg-white/5 hover:text-white"
                      }`}
                    >
                      <Icon className="w-4 h-4" />
                      <span>{item.label}</span>
                    </button>
                  );
                })}
              </div>
            </div>

            <div>
              <span className="text-[10px] font-bold uppercase tracking-wider text-slate-500 block mb-2">Settings</span>
              <div className="space-y-1 text-xs font-semibold text-slate-400">
                <button className="w-full flex items-center gap-3 px-3.5 py-2 hover:text-white"><MessageSquare className="w-4 h-4" /><span>Messages</span></button>
                <button className="w-full flex items-center gap-3 px-3.5 py-2 hover:text-white"><Star className="w-4 h-4" /><span>Customer Reviews</span></button>
                <button className="w-full flex items-center gap-3 px-3.5 py-2 hover:text-white"><Settings className="w-4 h-4" /><span>Settings</span></button>
                <button className="w-full flex items-center gap-3 px-3.5 py-2 hover:text-white"><HelpCircle className="w-4 h-4" /><span>Help Centre</span></button>
              </div>
            </div>
          </div>
        </div>
      </aside>

      {/* Center Dashboard Canvas */}
      <div className="flex-1 space-y-6">
        
        {/* Header Bar */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div>
            <span className="text-xs text-slate-400 font-mono">Dashboards / Overview</span>
            <h2 className="text-2xl font-black text-white">Overview</h2>
          </div>

          <div className="flex items-center gap-3">
            <button className="px-3 py-1.5 rounded-xl bg-[#15181e] border border-white/10 text-xs font-bold text-slate-300 flex items-center gap-1">
              <span>Today</span> <ChevronDown className="w-3.5 h-3.5" />
            </button>
            <button className="p-2 rounded-xl bg-[#15181e] border border-white/10 text-slate-400"><Bell className="w-4 h-4" /></button>
          </div>
        </div>

        {/* Top 4 KPI Metrics */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          
          <div className="p-5 rounded-2xl bg-[#15181e] border border-white/5 space-y-2">
            <span className="text-xs text-slate-400 font-medium">Net revenue</span>
            <div className="text-2xl font-black text-white">$3,131,021</div>
            <span className="text-[11px] font-semibold text-lime-400 flex items-center gap-1">
              <TrendingUp className="w-3 h-3" /> 0.4% vs last month
            </span>
          </div>

          <div className="p-5 rounded-2xl bg-[#15181e] border border-white/5 space-y-2">
            <span className="text-xs text-slate-400 font-medium">ARR</span>
            <div className="text-2xl font-black text-white">$1,511,121</div>
            <span className="text-[11px] font-semibold text-lime-400 flex items-center gap-1">
              <TrendingUp className="w-3 h-3" /> 32% vs last quarter
            </span>
          </div>

          <div className="p-5 rounded-2xl bg-[#15181e] border border-white/5 space-y-2">
            <span className="text-xs text-slate-400 font-medium">Quarterly revenue goal</span>
            <div className="text-2xl font-black text-white">71%</div>
            <span className="text-[11px] text-slate-500 font-mono">Goal: $1.1M</span>
          </div>

          <div className="p-5 rounded-2xl bg-[#15181e] border border-white/5 space-y-2">
            <span className="text-xs text-slate-400 font-medium">New orders</span>
            <div className="text-2xl font-black text-white">18,221</div>
            <span className="text-[11px] font-semibold text-lime-400 flex items-center gap-1">
              <TrendingUp className="w-3 h-3" /> 11% vs last quarter
            </span>
          </div>

        </div>

        {/* Sales Overview Donut & CTA Row */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          
          {/* Donut Sales Overview - 7 Cols */}
          <div className="lg:col-span-7 p-6 rounded-2xl bg-[#15181e] border border-white/5 space-y-4">
            <h3 className="font-bold text-white text-sm">Sales Overview</h3>

            <div className="flex flex-col sm:flex-row items-center gap-6 pt-2">
              {/* Donut Visual */}
              <div className="relative w-36 h-36 flex items-center justify-center">
                <div className="w-36 h-36 rounded-full border-[16px] border-lime-400 border-t-emerald-600 border-r-lime-500 flex items-center justify-center">
                  <div className="text-center">
                    <span className="text-lg font-black text-white block leading-none">102k</span>
                    <span className="text-[9px] text-slate-400">Weekly Visits</span>
                  </div>
                </div>
              </div>

              {/* Legend & Sales breakdown */}
              <div className="flex-1 space-y-3 text-xs">
                <div className="p-3 rounded-xl bg-white/5">
                  <span className="text-slate-400 block text-[11px]">Number of Sales</span>
                  <span className="text-lg font-black text-white">$71,020</span>
                </div>

                <div className="grid grid-cols-2 gap-2 text-[11px]">
                  <div><span className="text-lime-400">●</span> Electronic: <span className="font-bold text-white">$55,640</span></div>
                  <div><span className="text-emerald-500">●</span> Furniture: <span className="font-bold text-white">$11,420</span></div>
                  <div><span className="text-lime-200">●</span> Clothes: <span className="font-bold text-white">$1,840</span></div>
                  <div><span className="text-teal-400">●</span> Shoes: <span className="font-bold text-white">$2,120</span></div>
                </div>
              </div>
            </div>
          </div>

          {/* Premium Plan Glowing CTA - 5 Cols */}
          <div className="lg:col-span-5 p-6 rounded-2xl bg-gradient-to-br from-emerald-950 via-[#15181e] to-[#15181e] border border-lime-400/30 space-y-4 flex flex-col justify-between">
            <div className="flex items-center justify-between">
              <span className="px-3 py-1 rounded-full bg-lime-400/20 text-lime-400 font-bold text-xs">Premium Plan</span>
            </div>

            <div>
              <div className="text-3xl font-black text-white">$30 <span className="text-xs font-normal text-slate-400">/ Per Month Per User</span></div>
              <p className="text-xs text-slate-400 mt-2 leading-relaxed">
                Improve your workplace, view and analyze your profits and losses.
              </p>
            </div>

            <button className="w-full py-3 rounded-xl bg-lime-400 text-slate-950 font-black text-xs hover:bg-lime-300 transition-colors shadow-lg shadow-lime-400/20">
              Get Started
            </button>
          </div>

        </div>

      </div>

      {/* Right Notifications & Manager Contacts Column */}
      <div className="w-full xl:w-72 bg-[#15181e] p-6 rounded-3xl border border-white/5 space-y-6">
        
        {/* Notifications */}
        <div className="space-y-3">
          <h4 className="font-bold text-white text-xs">Notifications</h4>
          <div className="space-y-2 text-xs text-slate-400">
            <div className="p-2.5 rounded-xl bg-white/5 font-semibold text-slate-300">56 New users registered.</div>
            <div className="p-2.5 rounded-xl bg-white/5 font-semibold text-slate-300">132 Orders placed.</div>
            <div className="p-2.5 rounded-xl bg-white/5 font-semibold text-slate-300">5 Unread messages.</div>
          </div>
        </div>

        {/* Manager Contacts */}
        <div className="space-y-3 pt-4 border-t border-white/5">
          <h4 className="font-bold text-white text-xs">Contacts of your managers</h4>

          <div className="space-y-2">
            {[
              { name: "Daniel Craig", active: false },
              { name: "Kate Morrison", active: false },
              { name: "Nataniel Donowan", active: true },
              { name: "Elisabeth Wayne", active: false }
            ].map((contact) => (
              <div
                key={contact.name}
                className={`p-2.5 rounded-xl flex items-center justify-between ${
                  contact.active ? "bg-lime-400 text-slate-950 font-bold" : "bg-white/5 text-slate-300"
                }`}
              >
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 rounded-full bg-slate-700 font-bold text-[10px] flex items-center justify-center">
                    {contact.name[0]}
                  </div>
                  <span className="text-xs">{contact.name}</span>
                </div>
                {contact.active && (
                  <button className="p-1 rounded-full bg-slate-950 text-lime-400"><Phone className="w-3 h-3" /></button>
                )}
              </div>
            ))}
          </div>
        </div>

      </div>

    </div>
  );
}
