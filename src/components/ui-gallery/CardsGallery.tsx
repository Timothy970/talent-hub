"use client";

import React, { useState } from "react";
import {
  Layers,
  Users,
  Briefcase,
  ShoppingBag,
  CreditCard,
  ArrowUpRight,
  ShieldCheck,
  Zap,
  Globe,
  Grid,
  Sparkles,
  Key,
  Copy,
  Check
} from "lucide-react";

export default function CardsGallery() {
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);

  const handleCopyCode = (index: number) => {
    setCopiedIndex(index);
    setTimeout(() => setCopiedIndex(null), 2000);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12 animate-fade-in">

      {/* Header Banner */}
      <div className="text-center space-y-4 max-w-3xl mx-auto">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-purple-500/10 text-purple-300 border border-purple-500/30 text-xs font-mono font-bold">
          <Layers className="w-3.5 h-3.5 text-purple-400" />
          <span>STANDALONE UI CARDS HUB</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
          Modular UI Cards & Components Library
        </h1>
        <p className="text-sm text-slate-400">
          Reusable, pixel-perfect KPI stat cards, security posture gauges, project summaries, and integration cards extracted from our timateo Dashboard Suites.
        </p>
      </div>

      {/* 1. KPI & METRIC STAT CARDS */}
      <div className="space-y-4">
        <h2 className="text-lg font-bold text-white flex items-center gap-2 border-b border-slate-800 pb-2">
          <Zap className="w-4 h-4 text-indigo-400" />
          <span>1. KPI & Revenue Metric Cards</span>
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="p-5 rounded-2xl bg-slate-900/90 border border-slate-800 shadow-lg relative overflow-hidden group hover:border-indigo-500/40 transition-all">
            <div className="flex items-center justify-between">
              <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Total Users</span>
              <div className="p-2 rounded-xl bg-indigo-500/10 text-indigo-400"><Users className="w-4 h-4" /></div>
            </div>
            <div className="text-2xl font-black text-white mt-2">12,458</div>
            <div className="flex items-center gap-1 mt-2 text-xs font-medium text-emerald-400">
              <ArrowUpRight className="w-3.5 h-3.5" />
              <span>+12.5% vs last month</span>
            </div>
          </div>

          <div className="p-5 rounded-2xl bg-slate-900/90 border border-slate-800 shadow-lg relative overflow-hidden group hover:border-indigo-500/40 transition-all">
            <div className="flex items-center justify-between">
              <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Active Projects</span>
              <div className="p-2 rounded-xl bg-blue-500/10 text-blue-400"><Briefcase className="w-4 h-4" /></div>
            </div>
            <div className="text-2xl font-black text-white mt-2">328</div>
            <div className="flex items-center gap-1 mt-2 text-xs font-medium text-emerald-400">
              <ArrowUpRight className="w-3.5 h-3.5" />
              <span>+8.2% vs last month</span>
            </div>
          </div>

          <div className="p-5 rounded-2xl bg-slate-900/90 border border-slate-800 shadow-lg relative overflow-hidden group hover:border-indigo-500/40 transition-all">
            <div className="flex items-center justify-between">
              <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Total Orders</span>
              <div className="p-2 rounded-xl bg-emerald-500/10 text-emerald-400"><ShoppingBag className="w-4 h-4" /></div>
            </div>
            <div className="text-2xl font-black text-white mt-2">5,982</div>
            <div className="flex items-center gap-1 mt-2 text-xs font-medium text-emerald-400">
              <ArrowUpRight className="w-3.5 h-3.5" />
              <span>+15.3% vs last month</span>
            </div>
          </div>

          <div className="p-5 rounded-2xl bg-slate-900/90 border border-slate-800 shadow-lg relative overflow-hidden group hover:border-indigo-500/40 transition-all">
            <div className="flex items-center justify-between">
              <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Revenue</span>
              <div className="p-2 rounded-xl bg-amber-500/10 text-amber-400"><CreditCard className="w-4 h-4" /></div>
            </div>
            <div className="text-2xl font-black text-white mt-2">$87,546</div>
            <div className="flex items-center gap-1 mt-2 text-xs font-medium text-emerald-400">
              <ArrowUpRight className="w-3.5 h-3.5" />
              <span>+10.7% vs last month</span>
            </div>
          </div>
        </div>
      </div>

      {/* 2. SECURITY & DEVICE POSTURE CARDS */}
      <div className="space-y-4">
        <h2 className="text-lg font-bold text-white flex items-center gap-2 border-b border-slate-800 pb-2">
          <ShieldCheck className="w-4 h-4 text-emerald-400" />
          <span>2. Security Posture & Health Cards</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800 text-center space-y-3 shadow-lg">
            <div className="text-xs text-slate-400 font-bold uppercase tracking-wider">Security Posture Score</div>
            <div className="w-28 h-28 mx-auto rounded-full border-8 border-emerald-400 flex items-center justify-center text-3xl font-black text-white">
              76/100
            </div>
            <div className="text-xs text-emerald-400 font-semibold">Posture Status: Good</div>
          </div>

          <div className="md:col-span-2 p-5 rounded-2xl bg-slate-900 border border-slate-800 space-y-3 text-xs shadow-lg">
            <div className="font-bold text-white">Active Security Threat Alerts</div>
            <div className="p-3.5 rounded-xl bg-slate-950 border border-rose-500/30 text-rose-300 flex items-center justify-between">
              <span>Impossible travel login detected (New York -&gt; Berlin)</span>
              <span className="px-2 py-0.5 rounded bg-rose-500/20 text-rose-400 font-bold text-[10px]">HIGH RISK</span>
            </div>
            <div className="p-3.5 rounded-xl bg-slate-950 border border-amber-500/30 text-amber-300 flex items-center justify-between">
              <span>Multiple failed password login attempts (Emily Davis)</span>
              <span className="px-2 py-0.5 rounded bg-amber-500/20 text-amber-400 font-bold text-[10px]">MEDIUM RISK</span>
            </div>
          </div>
        </div>
      </div>

      {/* 3. INTEGRATION CARDS */}
      <div className="space-y-4">
        <h2 className="text-lg font-bold text-white flex items-center gap-2 border-b border-slate-800 pb-2">
          <Grid className="w-4 h-4 text-purple-400" />
          <span>3. Integration & Connected Tool Cards</span>
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs">
          {[
            { name: "Slack", cat: "Communication & Alerts", status: "Connected" },
            { name: "Microsoft 365", cat: "Productivity & Calendar", status: "Connected" },
            { name: "Google Workspace", cat: "Drive & Docs Sync", status: "Connected" },
            { name: "HubSpot", cat: "CRM Automation", status: "Needs Review" },
            { name: "Stripe", cat: "Payments & Billing", status: "Connected" },
            { name: "AWS S3", cat: "Infrastructure Storage", status: "Connected" },
          ].map((item, idx) => (
            <div key={idx} className="p-4 rounded-2xl bg-slate-900 border border-slate-800 flex items-center justify-between shadow-sm hover:border-purple-500/40 transition-all">
              <div>
                <div className="font-bold text-white text-sm">{item.name}</div>
                <div className="text-[10px] text-slate-400 mt-0.5">{item.cat}</div>
              </div>
              <span className={`px-2.5 py-1 rounded-full text-[10px] font-bold ${item.status === "Connected" ? "bg-emerald-500/20 text-emerald-400 border border-emerald-500/30" : "bg-amber-500/20 text-amber-400 border border-amber-500/30"}`}>
                {item.status}
              </span>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
}
