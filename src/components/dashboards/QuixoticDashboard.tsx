"use client";

import { useState } from "react";
import { 
  CreditCard, 
  Plus, 
  Search, 
  Bell, 
  Settings, 
  ArrowUpRight, 
  ArrowDownLeft, 
  Calendar, 
  ChevronDown, 
  Send, 
  Wifi,
  Sparkles
} from "lucide-react";

export default function QuixoticDashboard() {
  const [activeNav, setActiveNav] = useState("Dashboard");

  return (
    <div className="w-full min-h-[720px] bg-[#edf2ef] text-slate-800 rounded-3xl p-6 md:p-8 flex flex-col md:flex-row gap-6 shadow-2xl font-sans">
      
      {/* Floating Sidebar */}
      <aside className="w-full md:w-16 bg-white p-3 rounded-3xl shadow-sm border border-slate-200/80 flex flex-col items-center justify-between gap-6">
        <div className="w-10 h-10 rounded-2xl bg-emerald-600 text-white font-black flex items-center justify-center shadow-md">
          Q
        </div>
        <div className="space-y-4 text-slate-400">
          <div className="p-2 rounded-xl bg-emerald-600 text-white"><CreditCard className="w-4 h-4" /></div>
          <div className="p-2 rounded-xl hover:bg-slate-100"><Calendar className="w-4 h-4" /></div>
          <div className="p-2 rounded-xl hover:bg-slate-100"><Settings className="w-4 h-4" /></div>
        </div>
        <div className="p-2 rounded-xl text-slate-400 hover:text-slate-700">
          <Settings className="w-4 h-4" />
        </div>
      </aside>

      {/* Main Canvas */}
      <div className="flex-1 space-y-6">
        
        {/* Header */}
        <div className="flex flex-col lg:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <span className="text-xl font-black text-emerald-800 tracking-tight">Quixotic</span>
            <div className="flex items-center bg-white p-1 rounded-full border border-slate-200 text-xs font-bold text-slate-600">
              {["Dashboard", "Reports", "Documents", "History", "Contacts"].map((item) => (
                <button
                  key={item}
                  onClick={() => setActiveNav(item)}
                  className={`px-4 py-1.5 rounded-full transition-all ${
                    activeNav === item ? "bg-slate-900 text-white" : "hover:text-slate-900"
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>

          <div className="flex items-center gap-3">
            <button className="p-2 rounded-full bg-white border border-slate-200 text-slate-600"><Search className="w-4 h-4" /></button>
            <button className="p-2 rounded-full bg-white border border-slate-200 text-slate-600"><Bell className="w-4 h-4" /></button>
            <div className="w-8 h-8 rounded-full overflow-hidden border border-emerald-500">
              <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face" alt="Sujon" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>

        {/* Title */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <h2 className="text-2xl font-black text-slate-900">Welcome Back, Sujon</h2>
          <div className="flex items-center gap-2">
            <span className="px-3 py-1.5 rounded-xl bg-white border border-slate-200 text-xs font-bold text-slate-700">
              29 Jun, 2025 - 29 August, 2025
            </span>
            <button className="px-4 py-1.5 rounded-xl bg-slate-900 text-white text-xs font-bold shadow-md">
              + Add New Wallet
            </button>
          </div>
        </div>

        {/* Layout Grid (3 Columns) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          
          {/* Left Column (Card & Payment History) - 4 Cols */}
          <div className="lg:col-span-4 space-y-6">
            
            {/* Realistic Green VISA Credit Card */}
            <div className="p-6 rounded-3xl bg-gradient-to-br from-emerald-600 via-emerald-700 to-teal-900 text-white shadow-xl space-y-4 relative overflow-hidden">
              <div className="flex items-center justify-between">
                <span className="font-black text-lg tracking-wider">VISA</span>
                <Wifi className="w-5 h-5 rotate-90 opacity-80" />
              </div>
              <div className="pt-2">
                <span className="text-[10px] text-emerald-200 block font-mono">Credit Card</span>
                <div className="text-2xl font-black tracking-tight">$ 78,989.09</div>
              </div>
              <div className="flex items-center justify-between text-[11px] font-mono opacity-90 pt-2">
                <span>•••• 909090</span>
                <span>EXP 09/26</span>
              </div>
            </div>

            {/* Weekly Revenue Metric */}
            <div className="p-4 rounded-2xl bg-white shadow-sm border border-slate-200/80 flex items-center justify-between">
              <div>
                <span className="text-xs text-slate-400 font-semibold block">Weekly Revenue</span>
                <span className="text-lg font-black text-slate-900">+3,945 USD</span>
              </div>
              <span className="px-2.5 py-1 rounded-full bg-emerald-100 text-emerald-700 text-xs font-bold">+12.8%</span>
            </div>

            {/* Payment History Table */}
            <div className="p-5 rounded-3xl bg-white shadow-sm border border-slate-200/80 space-y-3">
              <h4 className="font-bold text-xs text-slate-900">Payment History</h4>
              <div className="space-y-3 text-xs">
                {[
                  { name: "Dribbble Design", date: "16 Jun 2025", amount: "89,345.23 USD" },
                  { name: "Google Pay", date: "15 Jun 2025", amount: "12,345.89 USD" },
                  { name: "Amazon Shopping", date: "14 Jun 2025", amount: "32,123.67 USD" }
                ].map((item) => (
                  <div key={item.name} className="flex items-center justify-between pb-2 border-b border-slate-100 last:border-none">
                    <div>
                      <span className="font-bold text-slate-900 block">{item.name}</span>
                      <span className="text-[10px] text-slate-400">{item.date}</span>
                    </div>
                    <div className="text-right">
                      <span className="font-bold text-slate-900 block">{item.amount}</span>
                      <span className="text-[10px] text-emerald-600 font-semibold">● Successful</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* Center Column (Textured Engagement Bar Chart) - 4 Cols */}
          <div className="lg:col-span-4 p-6 rounded-3xl bg-white shadow-sm border border-slate-200/80 space-y-4 flex flex-col justify-between">
            <div className="flex items-center justify-between">
              <h3 className="font-bold text-slate-900 text-sm">Engagement Rate</h3>
              <div className="flex items-center gap-1 bg-slate-100 p-1 rounded-full text-[10px] font-bold">
                <span className="px-2 py-0.5 text-slate-500">Monthly</span>
                <span className="px-2 py-0.5 rounded-full bg-emerald-600 text-white">Annually</span>
              </div>
            </div>

            <div className="h-56 flex items-end justify-between gap-3 pt-4">
              {[
                { month: "JAN", height: "45%" },
                { month: "FEB", height: "60%" },
                { month: "MAR", height: "50%" },
                { month: "APR", height: "95%", active: true, tag: "+17.8%" },
                { month: "MAY", height: "70%" },
                { month: "JUN", height: "80%" }
              ].map((b) => (
                <div key={b.month} className="flex-1 flex flex-col items-center gap-2 relative">
                  {b.tag && (
                    <span className="absolute -top-7 px-2 py-0.5 rounded-full bg-emerald-600 text-white text-[9px] font-black shadow-md">
                      {b.tag}
                    </span>
                  )}
                  <div className="w-full bg-emerald-100 rounded-2xl h-full flex items-end p-1">
                    <div style={{ height: b.height }} className={`w-full rounded-xl ${b.active ? "bg-emerald-600 shadow-md" : "bg-emerald-400"}`} />
                  </div>
                  <span className="text-[10px] font-bold text-slate-400">{b.month}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column (Total Balance & Mandatory Payments) - 4 Cols */}
          <div className="lg:col-span-4 space-y-6">
            
            {/* Total Balance Card */}
            <div className="p-6 rounded-3xl bg-white shadow-sm border border-slate-200/80 space-y-4">
              <span className="text-xs text-slate-400 font-semibold block">Total Balance</span>
              <div className="text-3xl font-black text-slate-900">$32,678.90</div>

              <div className="flex gap-2">
                <button className="flex-1 py-2.5 rounded-xl bg-emerald-600 text-white text-xs font-bold flex items-center justify-center gap-1 shadow-md">
                  <Send className="w-3.5 h-3.5" /> Send
                </button>
                <button className="flex-1 py-2.5 rounded-xl bg-slate-100 text-slate-700 text-xs font-bold flex items-center justify-center gap-1">
                  <ArrowDownLeft className="w-3.5 h-3.5" /> Receive
                </button>
              </div>
            </div>

            {/* Amount of Credit Card */}
            <div className="p-6 rounded-3xl bg-white shadow-sm border border-slate-200/80 space-y-2">
              <span className="text-xs text-slate-400 font-semibold block">Amount of credit</span>
              <div className="text-3xl font-black text-slate-900">$8,945.89</div>
              <span className="text-[11px] font-bold text-emerald-600 block">+12.8%</span>
            </div>

            {/* Mandatory Payments Avatars */}
            <div className="p-6 rounded-3xl bg-white shadow-sm border border-slate-200/80 space-y-3">
              <span className="text-xs font-bold text-slate-900 block">Mandatory Payments</span>
              <div className="flex items-center -space-x-2">
                {["https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop", "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop", "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop"].map((img, i) => (
                  <img key={i} src={img} className="w-8 h-8 rounded-full border-2 border-white object-cover" alt="User" />
                ))}
                <span className="w-8 h-8 rounded-full bg-emerald-600 text-white font-bold text-xs flex items-center justify-center border-2 border-white">
                  +2
                </span>
              </div>
            </div>

          </div>

        </div>

      </div>

    </div>
  );
}
