"use client";

import { useState } from "react";
import { 
  CreditCard, 
  Plus, 
  Clock, 
  Calendar, 
  Search, 
  SlidersHorizontal, 
  ArrowUpRight, 
  CheckCircle2, 
  Zap,
  Sparkles
} from "lucide-react";

export default function FinnovaDashboard() {
  const [activeNav, setActiveNav] = useState("Invoices");
  const [selectedCard, setSelectedCard] = useState("Stripe");
  const [selectedInvoice, setSelectedInvoice] = useState("#INV-1003");

  return (
    <div className="w-full min-h-[720px] bg-[#f2f2f6] text-slate-800 rounded-3xl p-6 md:p-8 space-y-6 shadow-2xl font-sans">
      
      {/* Top Header */}
      <div className="flex flex-col lg:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-xl bg-indigo-600 text-white font-black flex items-center justify-center shadow-md">
            F
          </div>
          <div>
            <span className="text-xl font-black text-slate-900 tracking-tight block leading-none">FINNOVA</span>
            <span className="text-[10px] text-slate-400 font-medium">Smart Finances, Better Business</span>
          </div>
        </div>

        {/* Navigation Pills */}
        <div className="flex items-center bg-white p-1 rounded-full border border-slate-200 shadow-sm text-xs font-bold text-slate-600 overflow-x-auto">
          {["Overview", "Estimates", "Invoices", "Payments", "Recurring", "Checkouts"].map((item) => (
            <button
              key={item}
              onClick={() => setActiveNav(item)}
              className={`px-4 py-1.5 rounded-full transition-all whitespace-nowrap ${
                activeNav === item
                  ? "bg-indigo-600 text-white shadow-md"
                  : "hover:text-slate-900"
              }`}
            >
              {item === "Invoices" ? "+ Invoices" : item}
            </button>
          ))}
        </div>

        <button className="flex items-center gap-1.5 px-4 py-2 rounded-xl bg-indigo-600 text-white font-bold text-xs shadow-md hover:bg-indigo-700 transition-colors">
          <Plus className="w-4 h-4" /> <span>Create an invoice</span>
        </button>
      </div>

      {/* Title */}
      <div>
        <h2 className="text-2xl font-black text-slate-900">Invoices</h2>
        <p className="text-xs text-slate-500 font-medium">Manage and track all your invoices in one place.</p>
      </div>

      {/* Top 4 KPI Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        
        {/* Card 1: Overdue */}
        <div className="p-5 rounded-3xl bg-white shadow-sm border border-slate-200/80 space-y-3">
          <span className="text-xs text-slate-400 font-semibold block">Overdue</span>
          <div className="text-2xl font-black text-slate-900">$ 24,850.00</div>
          <span className="text-[11px] font-bold text-rose-500 block">↑ 12.5% from last month</span>
        </div>

        {/* Card 2: Due within next month */}
        <div className="p-5 rounded-3xl bg-white shadow-sm border border-slate-200/80 space-y-3">
          <span className="text-xs text-slate-400 font-semibold block">Due within next month</span>
          <div className="text-2xl font-black text-slate-900">$ 142,560.00</div>
          <span className="text-[11px] font-bold text-indigo-600 block">↑ 8.2% from last month</span>
        </div>

        {/* Card 3: Average time to get paid */}
        <div className="p-5 rounded-3xl bg-white shadow-sm border border-slate-200/80 space-y-3">
          <span className="text-xs text-slate-400 font-semibold block">Average time to get paid</span>
          <div className="text-2xl font-black text-slate-900">16 days</div>
          <span className="text-[11px] font-bold text-emerald-600 block">↓ 2 days from last month</span>
        </div>

        {/* Card 4: Available for Instant Payout */}
        <div className="p-5 rounded-3xl bg-white shadow-sm border border-slate-200/80 space-y-3">
          <span className="text-xs text-slate-400 font-semibold block">Available for Instant Payout</span>
          <div className="text-2xl font-black text-slate-900">$ 186,540.00</div>

          {/* Cards Selector */}
          <div className="flex items-center gap-1 pt-1">
            <button
              onClick={() => setSelectedCard("Stripe")}
              className={`px-3 py-1 rounded-xl text-[11px] font-bold transition-all ${
                selectedCard === "Stripe" ? "bg-indigo-600 text-white shadow-md" : "bg-slate-100 text-slate-600"
              }`}
            >
              •••• 6789 (Stripe)
            </button>
            <button className="px-3 py-1 rounded-xl bg-slate-900 text-white font-bold text-[11px]">
              Payout now
            </button>
          </div>
        </div>

      </div>

      {/* Bottom Dark Indigo Split Panel (Unpaid Invoices & Invoice Builder) */}
      <div className="rounded-3xl bg-[#1b1c2b] text-white p-6 shadow-2xl grid grid-cols-1 lg:grid-cols-12 gap-6 border border-indigo-900/40">
        
        {/* Left Unpaid Invoices List - 5 Cols */}
        <div className="lg:col-span-5 space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="font-bold text-sm text-white">Unpaid Invoices</h3>
            <span className="px-2.5 py-0.5 rounded-full bg-indigo-500/20 text-indigo-300 font-bold text-xs">5</span>
          </div>

          <div className="space-y-2">
            {[
              { id: "# INV-1001", due: "In 2 days", amount: "$ 68,750.00", status: "Unsent" },
              { id: "# INV-1002", due: "In 4 days", amount: "$ 21,480.00", status: "Viewed" },
              { id: "# INV-1003", due: "In 5 days", amount: "$ 47,980.00", status: "Unsent", active: true },
              { id: "# INV-1004", due: "In 16 days", amount: "$ 55,230.00", status: "Viewed" },
              { id: "# INV-1005", due: "In 19 days", amount: "$ 6,880.00", status: "Viewed" }
            ].map((inv) => (
              <div
                key={inv.id}
                onClick={() => setSelectedInvoice(inv.id)}
                className={`p-3.5 rounded-2xl cursor-pointer transition-all flex items-center justify-between ${
                  inv.id === selectedInvoice
                    ? "bg-indigo-600 text-white shadow-xl shadow-indigo-600/30 scale-[1.01]"
                    : "bg-white/5 hover:bg-white/10 text-slate-300"
                }`}
              >
                <div>
                  <span className="font-bold text-xs block">{inv.id}</span>
                  <span className="text-[10px] text-slate-400">{inv.due}</span>
                </div>
                <div className="text-right">
                  <span className="font-bold text-xs block">{inv.amount}</span>
                  <span className="text-[10px] font-semibold text-indigo-300">{inv.status}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Invoice Details Builder Card - 7 Cols */}
        <div className="lg:col-span-7 p-6 rounded-3xl bg-indigo-900/30 border border-indigo-500/20 space-y-6 flex flex-col justify-between">
          <div className="space-y-4">
            <div className="flex items-center justify-between border-b border-white/10 pb-4">
              <div>
                <span className="text-xs text-indigo-300 font-semibold block">Invoice details</span>
                <h4 className="text-xl font-black text-white">{selectedInvoice}</h4>
              </div>
              <div className="text-right">
                <span className="text-xs text-slate-400 block">Company</span>
                <span className="font-bold text-white text-base">BrightWave</span>
              </div>
            </div>

            {/* Line Items Grid */}
            <div className="grid grid-cols-3 gap-3">
              <div className="p-3.5 rounded-2xl bg-white/5 space-y-1">
                <span className="text-sm font-bold text-white block">$15,990.00</span>
                <span className="text-[10px] text-slate-400">UI/UX Design</span>
              </div>
              <div className="p-3.5 rounded-2xl bg-white/5 space-y-1">
                <span className="text-sm font-bold text-white block">$21,250.00</span>
                <span className="text-[10px] text-slate-400">Development</span>
              </div>
              <div className="p-3.5 rounded-2xl bg-white/5 space-y-1">
                <span className="text-sm font-bold text-white block">$10,740.00</span>
                <span className="text-[10px] text-slate-400">QA & Testing</span>
              </div>
            </div>
          </div>

          {/* Invoice Summary Footer */}
          <div className="pt-4 border-t border-white/10 flex items-center justify-between">
            <div>
              <span className="text-xs text-slate-400 block">Balance Due</span>
              <span className="text-2xl font-black text-white">$ 47,980.00</span>
            </div>
            <button className="px-6 py-2.5 rounded-xl bg-white text-slate-950 font-black text-xs hover:bg-slate-100 transition-colors shadow-lg">
              Payout now
            </button>
          </div>
        </div>

      </div>

    </div>
  );
}
