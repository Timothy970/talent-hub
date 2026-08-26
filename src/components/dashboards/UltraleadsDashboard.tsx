"use client";

import { useState } from "react";
import { 
  LayoutDashboard, 
  BarChart2, 
  FileText, 
  ShoppingBag, 
  Calendar, 
  Bell, 
  Settings, 
  Download, 
  Filter, 
  ChevronDown, 
  TrendingUp, 
  MapPin,
  Sparkles
} from "lucide-react";

export default function UltraleadsDashboard() {
  const [activeTab, setActiveTab] = useState("Dashboard");

  return (
    <div className="w-full bg-[#e6f2f5] text-slate-800 rounded-3xl p-4 sm:p-5 md:p-6 space-y-4 shadow-2xl font-sans">
      
      {/* Header Bar */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-3">
        <div className="flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-xl bg-gradient-to-tr from-cyan-500 to-blue-600 flex items-center justify-center text-white font-black shadow-md text-sm">
            U
          </div>
          <span className="text-lg font-black text-slate-900 tracking-tight">Ultraleads</span>
        </div>

        {/* Nav Tabs */}
        <div className="flex items-center bg-white/80 p-1 rounded-full border border-slate-200 shadow-sm text-xs font-bold text-slate-600">
          {["Dashboard", "Analytics", "Invoice", "Products", "Calendar"].map((item) => (
            <button
              key={item}
              onClick={() => setActiveTab(item)}
              className={`px-3.5 py-1 rounded-full transition-all ${
                activeTab === item
                  ? "bg-slate-800 text-white shadow-md"
                  : "hover:text-slate-900"
              }`}
            >
              {item}
            </button>
          ))}
        </div>

        {/* Profile */}
        <div className="flex items-center gap-2">
          <button className="p-1.5 rounded-full bg-white text-slate-600 border border-slate-200 shadow-sm"><Bell className="w-3.5 h-3.5" /></button>
          <button className="p-1.5 rounded-full bg-white text-slate-600 border border-slate-200 shadow-sm"><Settings className="w-3.5 h-3.5" /></button>
          <div className="flex items-center gap-2 pl-1">
            <img
              src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&h=100&fit=crop&crop=face"
              alt="Sarah"
              className="w-7 h-7 rounded-full object-cover border border-cyan-500"
            />
            <div className="text-left text-xs">
              <span className="font-bold text-slate-900 block leading-none text-[11px]">Sarah Collins</span>
              <span className="text-[9px] text-slate-400">Sales Manager</span>
            </div>
          </div>
        </div>
      </div>

      {/* Title & Action Controls */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
        <div>
          <h2 className="text-xl font-black text-slate-900">Sales Overview</h2>
          <p className="text-[11px] text-slate-500 font-medium">Your current sales summary and activity</p>
        </div>

        <div className="flex items-center gap-2">
          <button className="flex items-center gap-1 px-2.5 py-1 rounded-lg bg-white border border-slate-200 text-xs font-bold text-slate-700 shadow-sm">
            <span>Default View</span> <ChevronDown className="w-3 h-3" />
          </button>
          <button className="flex items-center gap-1 px-2.5 py-1 rounded-lg bg-white border border-slate-200 text-xs font-bold text-slate-700 shadow-sm">
            <Download className="w-3 h-3" /> <span>Export</span>
          </button>
          <button className="flex items-center gap-1 px-3 py-1 rounded-lg bg-cyan-600 text-white text-xs font-bold shadow-md shadow-cyan-600/30">
            <Filter className="w-3 h-3" /> <span>Filter</span>
          </button>
        </div>
      </div>

      {/* Top 3 Column Metric Layout */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
        
        {/* Total Sales & Purchases - 4 Cols */}
        <div className="md:col-span-4 space-y-3">
          <div className="p-4 rounded-2xl bg-slate-800 text-white shadow-xl space-y-1">
            <span className="text-[11px] text-slate-400 font-semibold block">Total Sales</span>
            <div className="text-2xl font-black">$542,376</div>
            <span className="inline-block px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 text-[10px] font-bold">
              + 22% vs last month
            </span>
          </div>

          <div className="p-4 rounded-2xl bg-white shadow-sm border border-slate-200/80 space-y-1">
            <span className="text-[11px] text-slate-500 font-semibold block">Total Purchase</span>
            <div className="text-2xl font-black text-slate-900">$275,920</div>
            <span className="inline-block px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-700 text-[10px] font-bold">
              + 8% vs last month
            </span>
          </div>
        </div>

        {/* User Growth Progress - 4 Cols */}
        <div className="md:col-span-4 p-4 rounded-2xl bg-white shadow-sm border border-slate-200/80 space-y-3 flex flex-col justify-between">
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold text-slate-900">User Growth</span>
            <div className="flex items-center gap-0.5 bg-slate-100 p-0.5 rounded-full text-[9px] font-bold text-slate-600">
              <span className="px-1.5 py-0.5 rounded-full bg-slate-800 text-white">2h</span>
              <span className="px-1.5 py-0.5">32h</span>
              <span className="px-1.5 py-0.5">A Week</span>
              <span className="px-1.5 py-0.5">Month</span>
            </div>
          </div>

          <div>
            <div className="text-2xl font-black text-slate-900">205,890</div>
            <span className="text-emerald-600 font-bold text-[11px]">+ 2216</span>
          </div>

          <div className="w-full h-3 bg-slate-100 rounded-full overflow-hidden">
            <div className="h-full bg-gradient-to-r from-cyan-400 to-blue-500 w-[75%]" />
          </div>

          <div className="flex justify-between text-[10px] font-medium text-slate-400">
            <span>Checking totally</span>
            <span className="font-bold text-slate-700">+210 today</span>
          </div>
        </div>

        {/* Customer Volume Arched Radial Gauge - 4 Cols */}
        <div className="md:col-span-4 p-4 rounded-2xl bg-white shadow-sm border border-slate-200/80 space-y-2 flex flex-col items-center justify-center text-center">
          <span className="text-xs font-bold text-slate-900 block self-start">Customers Volume</span>

          {/* Arched Radial Gauge Visual */}
          <div className="relative w-36 h-20 flex items-end justify-center overflow-hidden">
            <div className="w-32 h-32 rounded-full border-[12px] border-slate-100 border-t-cyan-400 border-r-cyan-500 rotate-[-45deg]" />
            <div className="absolute bottom-0 text-center">
              <span className="text-2xl font-black text-slate-900 block leading-none">145</span>
              <span className="text-[9px] text-slate-400 font-medium">New Customers</span>
            </div>
          </div>

          <p className="text-[10px] text-slate-500 font-medium">
            Your customer volume has increased <span className="text-emerald-600 font-bold">+25%</span>
          </p>
        </div>

      </div>

      {/* Bottom Grid: Statistics Bar Chart & Country Map List */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-4">
        
        {/* Customer Satisfaction Vertical Bar Chart - 6 Cols */}
        <div className="lg:col-span-6 p-4 rounded-2xl bg-white shadow-sm border border-slate-200/80 space-y-3">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="font-bold text-slate-900 text-xs">Statistics</h3>
              <p className="text-[10px] text-slate-400">Customer satisfaction increases every week</p>
            </div>
            <div className="text-xl font-black text-cyan-600">+76%</div>
          </div>

          <div className="h-32 flex items-end justify-between gap-2 pt-2 px-1">
            {[
              { day: "Mon", height: "45%" },
              { day: "Tue", height: "65%" },
              { day: "Wed", height: "80%" },
              { day: "Thu", height: "95%", active: true },
              { day: "Fri", height: "70%" },
              { day: "Sat", height: "55%" },
              { day: "Sun", height: "40%" },
            ].map((bar) => (
              <div key={bar.day} className="flex-1 flex flex-col items-center gap-1.5">
                <div className="w-full bg-cyan-100 rounded-lg h-full flex items-end p-0.5">
                  <div
                    style={{ height: bar.height }}
                    className={`w-full rounded-md ${bar.active ? "bg-cyan-500 shadow-md" : "bg-cyan-300"}`}
                  />
                </div>
                <span className="text-[10px] font-medium text-slate-500">{bar.day}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Most Order by Country List - 6 Cols */}
        <div className="lg:col-span-6 p-4 rounded-2xl bg-gradient-to-br from-cyan-50/50 to-blue-50/50 shadow-sm border border-cyan-200/60 space-y-2.5">
          <h3 className="font-bold text-slate-900 text-xs">Most Order by Country</h3>

          <div className="space-y-1.5">
            {[
              { name: "Jenny practiced a usage", order: "total order in 18:30", city: "San Fransisco" },
              { name: "Paul purchased item", order: "value order in $9.80", city: "Los Angeles" },
              { name: "Mike made repeat order", order: "value order in $8.90", city: "San Diego" }
            ].map((user, idx) => (
              <div key={idx} className="p-2.5 rounded-xl bg-white shadow-sm flex items-center justify-between">
                <div className="flex items-center gap-2.5">
                  <div className="w-7 h-7 rounded-full bg-cyan-500 text-white font-bold text-[11px] flex items-center justify-center">
                    {user.name[0]}
                  </div>
                  <div>
                    <span className="font-bold text-xs text-slate-900 block leading-tight">{user.name}</span>
                    <span className="text-[9px] text-slate-400">{user.order}</span>
                  </div>
                </div>
                <span className="px-2.5 py-0.5 rounded-full bg-cyan-600 text-white text-[10px] font-bold flex items-center gap-1">
                  <MapPin className="w-2.5 h-2.5" />
                  {user.city}
                </span>
              </div>
            ))}
          </div>
        </div>

      </div>

    </div>
  );
}
