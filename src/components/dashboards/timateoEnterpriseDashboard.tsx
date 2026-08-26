"use client";

import React, { useState } from "react";
import {
  LayoutDashboard,
  TrendingUp,
  FileText,
  Activity,
  Users,
  Briefcase,
  ShoppingBag,
  Package,
  CreditCard,
  Settings,
  Grid,
  ShieldCheck,
  ShieldAlert,
  Lock,
  Search,
  Plus,
  ArrowUpRight,
  Download,
  Zap,
  X,
  Server,
  Database,
  Mail,
  Globe
} from "lucide-react";

export default function timateoEnterpriseDashboard() {
  const [activeTab, setActiveTab] = useState<
    | "overview"
    | "analytics"
    | "reports"
    | "activity"
    | "users"
    | "projects"
    | "orders"
    | "products"
    | "invoices"
    | "settings"
    | "integrations"
    | "security"
    | "audit-logs"
    | "login"
  >("overview");

  const [selectedUser, setSelectedUser] = useState<any>(null);

  const navTabs = [
    { id: "overview", label: "Overview", icon: LayoutDashboard },
    { id: "analytics", label: "Analytics", icon: TrendingUp },
    { id: "reports", label: "Reports", icon: FileText },
    { id: "activity", label: "Activity Feed", icon: Activity },
    { id: "users", label: "Users & RBAC", icon: Users },
    { id: "projects", label: "Projects", icon: Briefcase },
    { id: "orders", label: "Orders", icon: ShoppingBag },
    { id: "products", label: "Products", icon: Package },
    { id: "invoices", label: "Invoices", icon: CreditCard },
    { id: "settings", label: "Settings", icon: Settings },
    { id: "integrations", label: "Integrations", icon: Grid },
    { id: "security", label: "Security", icon: ShieldCheck },
    { id: "audit-logs", label: "Audit Logs", icon: ShieldAlert },
    { id: "login", label: "Auth Portal", icon: Lock },
  ];

  return (
    <div className="min-h-screen bg-[#0b0e14] text-slate-100 font-sans p-4 sm:p-6 space-y-6">
      
      {/* Header Banner & Sub-Tabs Navigation */}
      <div className="bg-slate-900/80 border border-slate-800 rounded-2xl p-4 shadow-xl backdrop-blur-md space-y-4">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-indigo-600 via-purple-600 to-pink-500 p-0.5 shadow-lg shadow-indigo-500/20">
              <div className="w-full h-full bg-slate-950 rounded-[10px] flex items-center justify-center font-black text-indigo-400">
                T
              </div>
            </div>
            <div>
              <h1 className="text-xl font-bold text-white flex items-center gap-2">
                timateo Control Center
                <span className="text-xs px-2 py-0.5 rounded-full bg-indigo-500/20 text-indigo-300 border border-indigo-500/30 font-mono font-medium">
                  ENTERPRISE
                </span>
              </h1>
              <p className="text-xs text-slate-400">
                Unified Operations, Security Posture & Intelligent Analytics
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="relative">
              <Search className="w-4 h-4 text-slate-400 absolute left-3 top-2.5" />
              <input
                type="text"
                placeholder="Search across timateo (⌘K)..."
                className="pl-9 pr-4 py-1.5 rounded-xl bg-slate-950 border border-slate-800 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-indigo-500 w-60"
              />
            </div>
            <button className="px-3.5 py-1.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-semibold shadow-lg shadow-indigo-600/30 transition-all flex items-center gap-1.5">
              <Plus className="w-3.5 h-3.5" />
              <span>New Action</span>
            </button>
          </div>
        </div>

        {/* Scrollable Sub-Tab Pills */}
        <div className="flex items-center gap-1.5 overflow-x-auto pb-1 custom-scrollbar border-t border-slate-800/60 pt-3">
          {navTabs.map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                className={`px-3 py-1.5 rounded-xl text-xs font-medium flex items-center gap-2 whitespace-nowrap transition-all ${
                  isActive
                    ? "bg-indigo-600 text-white shadow-lg shadow-indigo-600/30 border border-indigo-400/30 font-bold"
                    : "bg-slate-950/60 hover:bg-slate-800 text-slate-400 hover:text-slate-200 border border-slate-800/60"
                }`}
              >
                <Icon className={`w-3.5 h-3.5 ${isActive ? "text-white" : "text-slate-400"}`} />
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* RENDER ACTIVE SUB-VIEW */}
      <div className="transition-all">
        
        {/* 1. OVERVIEW DASHBOARD */}
        {activeTab === "overview" && (
          <div className="space-y-6 animate-fade-in">
            
            {/* Top KPI Cards Grid */}
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

            {/* Main Graphs & Donut Split */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              
              {/* Line Chart Component */}
              <div className="lg:col-span-2 p-5 rounded-2xl bg-slate-900/90 border border-slate-800 shadow-lg space-y-4">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="font-bold text-white text-sm">Revenue Overview</h3>
                    <p className="text-xs text-slate-400">Monthly revenue performance breakdown</p>
                  </div>
                  <span className="px-2.5 py-1 rounded-lg bg-slate-800 text-xs text-slate-300 border border-slate-700">This Year</span>
                </div>

                <div className="h-56 w-full flex items-end justify-between gap-2 pt-6 border-b border-slate-800 pb-2 px-2">
                  {[35, 42, 38, 55, 62, 58, 70, 65, 88, 76, 92, 85].map((val, idx) => (
                    <div key={idx} className="flex-1 flex flex-col items-center gap-2 group">
                      <div className="relative w-full bg-slate-800/80 rounded-t-lg overflow-hidden h-44 flex items-end">
                        <div
                          style={{ height: `${val}%` }}
                          className="w-full bg-gradient-to-t from-indigo-600 to-purple-500 group-hover:from-indigo-500 group-hover:to-pink-500 transition-all rounded-t-lg"
                        />
                      </div>
                      <span className="text-[10px] text-slate-500 font-mono">
                        {["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"][idx]}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Project Status Donut Widget */}
              <div className="p-5 rounded-2xl bg-slate-900/90 border border-slate-800 shadow-lg space-y-4">
                <div className="flex items-center justify-between">
                  <h3 className="font-bold text-white text-sm">Project Status</h3>
                  <span className="text-xs text-indigo-400 font-medium">328 Total</span>
                </div>

                <div className="flex flex-col items-center justify-center py-4">
                  <div className="relative w-36 h-36 rounded-full border-8 border-indigo-500 flex items-center justify-center border-t-emerald-400 border-r-amber-400 border-l-purple-500">
                    <div className="text-center">
                      <div className="text-2xl font-black text-white">328</div>
                      <div className="text-[10px] text-slate-400 font-medium uppercase">Projects</div>
                    </div>
                  </div>
                </div>

                <div className="space-y-2 text-xs">
                  <div className="flex items-center justify-between">
                    <span className="flex items-center gap-2 text-slate-400"><span className="w-2.5 h-2.5 rounded-full bg-emerald-400" /> Completed</span>
                    <span className="font-bold text-white">128 (39%)</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="flex items-center gap-2 text-slate-400"><span className="w-2.5 h-2.5 rounded-full bg-indigo-500" /> In Progress</span>
                    <span className="font-bold text-white">96 (29%)</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="flex items-center gap-2 text-slate-400"><span className="w-2.5 h-2.5 rounded-full bg-amber-400" /> On Hold</span>
                    <span className="font-bold text-white">64 (20%)</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="flex items-center gap-2 text-slate-400"><span className="w-2.5 h-2.5 rounded-full bg-rose-500" /> Cancelled</span>
                    <span className="font-bold text-white">40 (12%)</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Recent Projects Table & System Health Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              
              <div className="lg:col-span-2 p-5 rounded-2xl bg-slate-900/90 border border-slate-800 shadow-lg space-y-4">
                <div className="flex items-center justify-between">
                  <h3 className="font-bold text-white text-sm">Recent Projects</h3>
                  <button onClick={() => setActiveTab("projects")} className="text-xs text-indigo-400 hover:underline">View All Projects →</button>
                </div>

                <div className="overflow-x-auto custom-scrollbar">
                  <table className="w-full text-left text-xs">
                    <thead>
                      <tr className="border-b border-slate-800 text-slate-400 uppercase tracking-wider text-[10px]">
                        <th className="py-2.5 px-3">Project Name</th>
                        <th className="py-2.5 px-3">Client</th>
                        <th className="py-2.5 px-3">Status</th>
                        <th className="py-2.5 px-3">Progress</th>
                        <th className="py-2.5 px-3 text-right">Due Date</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-800/60">
                      {[
                        { name: "E-Commerce Dashboard", client: "TechCorp Inc.", status: "In Progress", progress: 75, due: "Dec 15, 2024", color: "bg-indigo-500" },
                        { name: "Mobile App Redesign", client: "InnovateLabs", status: "Completed", progress: 100, due: "Dec 10, 2024", color: "bg-emerald-400" },
                        { name: "Website Corporate Redesign", client: "DesignStudio", status: "In Progress", progress: 60, due: "Dec 20, 2024", color: "bg-indigo-500" },
                        { name: "Analytics Platform Integration", client: "DataCorp", status: "On Hold", progress: 25, due: "Jan 5, 2025", color: "bg-amber-400" },
                      ].map((proj, idx) => (
                        <tr key={idx} className="hover:bg-slate-800/40 transition-colors">
                          <td className="py-3 px-3 font-semibold text-white">{proj.name}</td>
                          <td className="py-3 px-3 text-slate-400">{proj.client}</td>
                          <td className="py-3 px-3">
                            <span className={`px-2 py-0.5 rounded-full text-[10px] font-semibold ${proj.status === "Completed" ? "bg-emerald-500/20 text-emerald-400 border border-emerald-500/30" : proj.status === "In Progress" ? "bg-indigo-500/20 text-indigo-300 border border-indigo-500/30" : "bg-amber-500/20 text-amber-300 border border-amber-500/30"}`}>
                              {proj.status}
                            </span>
                          </td>
                          <td className="py-3 px-3">
                            <div className="w-24 bg-slate-800 h-1.5 rounded-full overflow-hidden">
                              <div style={{ width: `${proj.progress}%` }} className={`h-full ${proj.color}`} />
                            </div>
                          </td>
                          <td className="py-3 px-3 text-right text-slate-400">{proj.due}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              {/* System Health Overview */}
              <div className="p-5 rounded-2xl bg-slate-900/90 border border-slate-800 shadow-lg space-y-4">
                <div className="flex items-center justify-between">
                  <h3 className="font-bold text-white text-sm">System Health</h3>
                  <span className="text-[10px] text-emerald-400 font-mono">99.9% Uptime</span>
                </div>

                <div className="space-y-3 text-xs">
                  {[
                    { name: "API Server", status: "Operational", metric: "99.9%", icon: Server, color: "text-emerald-400" },
                    { name: "Database Cluster", status: "Operational", metric: "99.8%", icon: Database, color: "text-emerald-400" },
                    { name: "File Storage (S3)", status: "Operational", metric: "99.9%", icon: Grid, color: "text-emerald-400" },
                    { name: "Email Gateway", status: "Degraded", metric: "98.5%", icon: Mail, color: "text-amber-400" },
                    { name: "Global Edge CDN", status: "Operational", metric: "99.9%", icon: Globe, color: "text-emerald-400" },
                  ].map((sys, idx) => {
                    const SysIcon = sys.icon;
                    return (
                      <div key={idx} className="p-2.5 rounded-xl bg-slate-950/60 border border-slate-800/80 flex items-center justify-between">
                        <div className="flex items-center gap-2.5">
                          <SysIcon className="w-4 h-4 text-indigo-400" />
                          <div>
                            <div className="font-semibold text-white">{sys.name}</div>
                            <div className="text-[10px] text-slate-400">{sys.status}</div>
                          </div>
                        </div>
                        <span className={`font-mono font-bold ${sys.color}`}>{sys.metric}</span>
                      </div>
                    );
                  })}
                </div>
              </div>

            </div>

          </div>
        )}

        {/* 2. ANALYTICS & REVENUE INTELLIGENCE */}
        {activeTab === "analytics" && (
          <div className="space-y-6 animate-fade-in">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-lg font-bold text-white">Revenue Intelligence & Analytics</h2>
                <p className="text-xs text-slate-400">Deep dive into revenue performance, acquisition trends, and user retention.</p>
              </div>
              <div className="flex items-center gap-2">
                <button className="px-3 py-1.5 rounded-xl bg-slate-900 border border-slate-800 text-xs text-slate-300 flex items-center gap-1.5">
                  <Download className="w-3.5 h-3.5" /> Export Insights
                </button>
              </div>
            </div>

            {/* Metrics Breakdown Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
              {[
                { label: "Total Revenue", val: "$87,546", change: "+10.7%" },
                { label: "New Revenue", val: "$43,125", change: "+14.3%" },
                { label: "Recurring Revenue", val: "$41,421", change: "+8.4%" },
                { label: "Avg Order Value", val: "$312.48", change: "+5.2%" },
                { label: "Revenue per User", val: "$128.74", change: "+6.1%" },
              ].map((m, idx) => (
                <div key={idx} className="p-4 rounded-2xl bg-slate-900/90 border border-slate-800 shadow-md">
                  <div className="text-[11px] text-slate-400 font-medium">{m.label}</div>
                  <div className="text-xl font-black text-white mt-1">{m.val}</div>
                  <div className="text-[10px] text-emerald-400 font-semibold mt-1">{m.change} vs prior month</div>
                </div>
              ))}
            </div>

            {/* Main Donut & Geographic Performance */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              
              <div className="lg:col-span-2 p-5 rounded-2xl bg-slate-900/90 border border-slate-800 space-y-4">
                <h3 className="font-bold text-white text-sm">Revenue by Acquisition Source</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 items-center pt-2">
                  <div className="flex justify-center">
                    <div className="w-40 h-40 rounded-full border-[12px] border-indigo-500 border-t-purple-500 border-r-pink-500 border-l-emerald-400 flex items-center justify-center">
                      <div className="text-center">
                        <div className="text-xl font-black text-white">$87,546</div>
                        <div className="text-[10px] text-slate-400">Total Share</div>
                      </div>
                    </div>
                  </div>
                  <div className="space-y-2 text-xs">
                    <div className="flex justify-between p-2 rounded-lg bg-slate-950"><span className="text-slate-300">Direct Sales</span><span className="font-bold text-indigo-400">42.1% ($36,842)</span></div>
                    <div className="flex justify-between p-2 rounded-lg bg-slate-950"><span className="text-slate-300">Referrals</span><span className="font-bold text-purple-400">24.7% ($21,628)</span></div>
                    <div className="flex justify-between p-2 rounded-lg bg-slate-950"><span className="text-slate-300">Organic Search</span><span className="font-bold text-emerald-400">18.3% ($16,032)</span></div>
                    <div className="flex justify-between p-2 rounded-lg bg-slate-950"><span className="text-slate-300">Paid Search</span><span className="font-bold text-pink-400">9.6% ($8,402)</span></div>
                  </div>
                </div>
              </div>

              {/* AI Insights Card */}
              <div className="p-5 rounded-2xl bg-gradient-to-b from-indigo-950/60 to-slate-900 border border-indigo-500/30 space-y-3">
                <div className="flex items-center gap-2 text-indigo-300 text-xs font-bold uppercase tracking-wider">
                  <Zap className="w-4 h-4 text-pink-400" />
                  <span>AI Executive Insights</span>
                </div>
                <div className="space-y-2 text-xs text-slate-300">
                  <div className="p-3 rounded-xl bg-slate-950/80 border border-slate-800">
                    <p className="font-semibold text-white">Revenue increased by 10.7%</p>
                    <p className="text-[11px] text-slate-400 mt-1">Driven primarily by 28% growth in new Enterprise SaaS logos in North America.</p>
                  </div>
                  <div className="p-3 rounded-xl bg-slate-950/80 border border-slate-800">
                    <p className="font-semibold text-white">Holiday Promotion Impact</p>
                    <p className="text-[11px] text-slate-400 mt-1">Annual subscription conversions up +18% over the past 14 days.</p>
                  </div>
                </div>
              </div>

            </div>
          </div>
        )}

        {/* 3. REPORTS BUILDER */}
        {activeTab === "reports" && (
          <div className="space-y-6 animate-fade-in">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-lg font-bold text-white">Executive Performance Report Builder</h2>
                <p className="text-xs text-slate-400">Build, customize, and deliver automated executive intelligence reports.</p>
              </div>
              <button className="px-4 py-2 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-bold shadow-lg shadow-indigo-600/30">
                Publish Report
              </button>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
              <div className="p-4 rounded-2xl bg-slate-900 border border-slate-800 space-y-3 text-xs">
                <div className="font-bold text-white uppercase text-[11px] tracking-wider">Canvas Drag Modules</div>
                {["KPI Summary Widget", "Line Chart Performance", "Area Chart Trend", "Bar Chart Comparison", "Donut Chart Share", "Data Table Module", "Metrics List Widget"].map((mod, i) => (
                  <div key={i} className="p-2.5 rounded-xl bg-slate-950 border border-slate-800 hover:border-indigo-500 cursor-grab text-slate-300 flex items-center justify-between">
                    <span>{mod}</span>
                    <Plus className="w-3.5 h-3.5 text-indigo-400" />
                  </div>
                ))}
              </div>

              <div className="lg:col-span-3 p-6 rounded-2xl bg-slate-950 border border-slate-800 space-y-6">
                <div className="border-b border-slate-800 pb-4 flex justify-between items-center">
                  <div>
                    <h3 className="text-base font-bold text-white">Executive Performance Report (Q4 2026)</h3>
                    <p className="text-xs text-slate-400">Draft • Saved 2 mins ago</p>
                  </div>
                  <span className="px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-400 text-xs font-medium border border-emerald-500/30">Scheduled Weekly</span>
                </div>

                <div className="grid grid-cols-3 gap-4">
                  <div className="p-4 rounded-xl bg-slate-900 border border-slate-800"><div className="text-slate-400 text-xs">Total Revenue</div><div className="text-xl font-bold text-white">$87,546</div></div>
                  <div className="p-4 rounded-xl bg-slate-900 border border-slate-800"><div className="text-slate-400 text-xs">New Accounts</div><div className="text-xl font-bold text-white">328</div></div>
                  <div className="p-4 rounded-xl bg-slate-900 border border-slate-800"><div className="text-slate-400 text-xs">System Uptime</div><div className="text-xl font-bold text-white">99.8%</div></div>
                </div>

                <div className="p-6 rounded-xl bg-slate-900 border border-slate-800 text-center text-slate-400 text-xs border-dashed">
                  + Drop modules here to build custom report sections
                </div>
              </div>
            </div>
          </div>
        )}

        {/* 4. REAL-TIME ACTIVITY FEED */}
        {activeTab === "activity" && (
          <div className="space-y-6 animate-fade-in">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-lg font-bold text-white">Real-time Activity Feed</h2>
                <p className="text-xs text-slate-400">Platform updates, system alerts, approvals, and user comments.</p>
              </div>
              <div className="flex gap-2">
                {["All Events (1,248)", "Unread (23)", "Alerts (12)", "Approvals (8)"].map((chip, idx) => (
                  <button key={idx} className={`px-3 py-1 rounded-xl text-xs font-medium ${idx === 0 ? "bg-indigo-600 text-white" : "bg-slate-900 text-slate-400 hover:text-white border border-slate-800"}`}>
                    {chip}
                  </button>
                ))}
              </div>
            </div>

            <div className="p-5 rounded-2xl bg-slate-900 border border-slate-800 space-y-4">
              {[
                { time: "10:42 AM", title: "Project 'E-Commerce Dashboard' status updated to In Progress", actor: "Sarah Johnson", type: "PROJECT", tag: "Updated" },
                { time: "10:36 AM", title: "Approval request for Budget Increase ($12,500) approved", actor: "James Mitchell", type: "FINANCE", tag: "APPROVAL" },
                { time: "10:22 AM", title: "New comment on Analytics Platform: 'The revenue graph looks great!'", actor: "Emily Davis", type: "COMMENT", tag: "Comment" },
                { time: "10:15 AM", title: "System alert triggered: High CPU usage (92%) on API Server #3", actor: "System Monitor", type: "ALERT", tag: "HIGH ALERT" },
                { time: "09:41 AM", title: "New user account created: spencer.brown@timateo.com", actor: "Admin Spencer", type: "USER", tag: "New User" },
              ].map((act, idx) => (
                <div key={idx} className="p-3.5 rounded-xl bg-slate-950 border border-slate-800 flex items-center justify-between hover:border-slate-700 transition-all text-xs">
                  <div className="flex items-center gap-3">
                    <span className="font-mono text-slate-500 text-[11px]">{act.time}</span>
                    <span className="font-semibold text-white">{act.title}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-slate-400">{act.actor}</span>
                    <span className={`px-2 py-0.5 rounded text-[10px] font-bold uppercase ${act.tag === "HIGH ALERT" ? "bg-rose-500/20 text-rose-400 border border-rose-500/30" : act.tag === "APPROVAL" ? "bg-amber-500/20 text-amber-300 border border-amber-500/30" : "bg-indigo-500/20 text-indigo-300"}`}>
                      {act.tag}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* 5. USERS & RBAC MANAGEMENT */}
        {activeTab === "users" && (
          <div className="space-y-6 animate-fade-in">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-lg font-bold text-white">Users & Role-Based Access Control</h2>
                <p className="text-xs text-slate-400">Manage members, granular team permissions, and security roles.</p>
              </div>
              <button className="px-4 py-2 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-bold shadow-lg shadow-indigo-600/30 flex items-center gap-1.5">
                <Plus className="w-4 h-4" /> Add New Member
              </button>
            </div>

            <div className="p-5 rounded-2xl bg-slate-900 border border-slate-800 space-y-4">
              <table className="w-full text-left text-xs">
                <thead>
                  <tr className="border-b border-slate-800 text-slate-400 uppercase text-[10px] tracking-wider">
                    <th className="py-2.5 px-3">User Name</th>
                    <th className="py-2.5 px-3">Role</th>
                    <th className="py-2.5 px-3">Team</th>
                    <th className="py-2.5 px-3">Status</th>
                    <th className="py-2.5 px-3 text-right">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-800">
                  {[
                    { name: "Sarah Johnson", email: "sarah.j@timateo.com", role: "Administrator", team: "Executive", status: "Active" },
                    { name: "Michael Chen", email: "michael.c@timateo.com", role: "Product Manager", team: "Product", status: "Active" },
                    { name: "Emily Davis", email: "emily.d@timateo.com", role: "Analyst", team: "Analytics", status: "Active" },
                    { name: "David Lee", email: "david.l@timateo.com", role: "Developer", team: "Engineering", status: "Active" },
                    { name: "Olivia Martinez", email: "olivia.m@timateo.com", role: "Marketing Lead", team: "Marketing", status: "Pending" },
                  ].map((usr, i) => (
                    <tr key={i} className="hover:bg-slate-800/50 cursor-pointer" onClick={() => setSelectedUser(usr)}>
                      <td className="py-3 px-3">
                        <div className="font-semibold text-white">{usr.name}</div>
                        <div className="text-[11px] text-slate-400">{usr.email}</div>
                      </td>
                      <td className="py-3 px-3 text-indigo-400 font-medium">{usr.role}</td>
                      <td className="py-3 px-3 text-slate-300">{usr.team}</td>
                      <td className="py-3 px-3">
                        <span className={`px-2 py-0.5 rounded-full text-[10px] ${usr.status === "Active" ? "bg-emerald-500/20 text-emerald-400 border border-emerald-500/30" : "bg-amber-500/20 text-amber-400 border border-amber-500/30"}`}>
                          {usr.status}
                        </span>
                      </td>
                      <td className="py-3 px-3 text-right text-indigo-400 font-semibold hover:underline">View Permissions</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Slide-over User Detail Drawer Modal */}
            {selectedUser && (
              <div className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-sm flex justify-end">
                <div className="w-full max-w-md bg-slate-900 border-l border-slate-800 h-full p-6 space-y-6 overflow-y-auto animate-in slide-in-from-right duration-200">
                  <div className="flex items-center justify-between border-b border-slate-800 pb-4">
                    <h3 className="font-bold text-white text-base">User Security Profile</h3>
                    <button onClick={() => setSelectedUser(null)} className="p-1 rounded-lg bg-slate-800 text-slate-400 hover:text-white"><X className="w-4 h-4" /></button>
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-white">{selectedUser.name}</h4>
                    <p className="text-xs text-slate-400">{selectedUser.email}</p>
                  </div>
                  <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 space-y-2 text-xs">
                    <div className="flex justify-between"><span className="text-slate-400">Assigned Role:</span><span className="font-bold text-indigo-400">{selectedUser.role}</span></div>
                    <div className="flex justify-between"><span className="text-slate-400">Team Scope:</span><span className="font-bold text-white">{selectedUser.team}</span></div>
                    <div className="flex justify-between"><span className="text-slate-400">2FA Security:</span><span className="font-bold text-emerald-400">Enabled</span></div>
                  </div>
                  <div className="space-y-2 text-xs">
                    <div className="font-bold text-slate-300">Access Matrix Summary</div>
                    <div className="p-2 rounded bg-slate-950 text-slate-400 flex justify-between"><span>Platform Access</span><span className="text-emerald-400">100% Full</span></div>
                    <div className="p-2 rounded bg-slate-950 text-slate-400 flex justify-between"><span>Data Export Privilege</span><span className="text-emerald-400">Granted</span></div>
                  </div>
                  <button onClick={() => setSelectedUser(null)} className="w-full py-2.5 rounded-xl bg-indigo-600 text-white font-bold text-xs">Save Access Changes</button>
                </div>
              </div>
            )}
          </div>
        )}

        {/* 6. PROJECTS PORTFOLIO */}
        {activeTab === "projects" && (
          <div className="space-y-6 animate-fade-in">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-lg font-bold text-white">Projects Portfolio Overview</h2>
                <p className="text-xs text-slate-400">Deliver enterprise projects on time, on budget, and with high impact.</p>
              </div>
              <button className="px-4 py-2 rounded-xl bg-indigo-600 text-white text-xs font-bold">+ New Project</button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-4 gap-4">
              <div className="p-4 rounded-2xl bg-slate-900 border border-slate-800"><div className="text-xs text-slate-400">Innovation & Growth</div><div className="text-xl font-bold text-white">$24.8M Budget</div><div className="text-xs text-emerald-400">68% On Track</div></div>
              <div className="p-4 rounded-2xl bg-slate-900 border border-slate-800"><div className="text-xs text-slate-400">Digital Transformation</div><div className="text-xl font-bold text-white">$18.4M Budget</div><div className="text-xs text-amber-400">54% At Risk</div></div>
              <div className="p-4 rounded-2xl bg-slate-900 border border-slate-800"><div className="text-xs text-slate-400">Customer Experience</div><div className="text-xl font-bold text-white">$12.7M Budget</div><div className="text-xs text-emerald-400">72% On Track</div></div>
              <div className="p-4 rounded-2xl bg-slate-900 border border-slate-800"><div className="text-xs text-slate-400">Core Operations</div><div className="text-xl font-bold text-white">$9.3M Budget</div><div className="text-xs text-amber-400">41% At Risk</div></div>
            </div>
          </div>
        )}

        {/* 7. ORDERS & LOGISTICS */}
        {activeTab === "orders" && (
          <div className="space-y-6 animate-fade-in">
            <h2 className="text-lg font-bold text-white">Orders & Logistics Management</h2>
            <div className="p-5 rounded-2xl bg-slate-900 border border-slate-800 text-xs">
              <div className="flex justify-between items-center border-b border-slate-800 pb-3 font-semibold text-slate-400">
                <span>Order ID</span><span>Customer</span><span>Status</span><span>Payment</span><span>Total</span>
              </div>
              <div className="divide-y divide-slate-800">
                {[
                  { id: "#ORD-98765", name: "Sarah Johnson", status: "Delivered", pay: "Paid (Visa)", total: "$312.48" },
                  { id: "#ORD-98764", name: "Michael Chen", status: "Shipped", pay: "Paid (Mastercard)", total: "$175.99" },
                  { id: "#ORD-98763", name: "Emily Davis", status: "Processing", pay: "Paid (Shop Pay)", total: "$89.00" },
                ].map((o, idx) => (
                  <div key={idx} className="py-3 flex justify-between items-center text-white">
                    <span className="font-mono text-indigo-400 font-bold">{o.id}</span>
                    <span>{o.name}</span>
                    <span className="px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-400">{o.status}</span>
                    <span className="text-slate-400">{o.pay}</span>
                    <span className="font-bold">{o.total}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* 8. PRODUCTS CATALOG */}
        {activeTab === "products" && (
          <div className="space-y-6 animate-fade-in">
            <h2 className="text-lg font-bold text-white">Products Catalog & Inventory</h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {[
                { name: "timateo Wireless Headphones", stock: "320 in stock", price: "$199.00", margin: "62%" },
                { name: "timateo Smart Watch Pro", stock: "85 in stock", price: "$249.00", margin: "58%" },
                { name: "timateo 4K Action Camera", stock: "12 (Low Stock)", price: "$349.00", margin: "45%" },
              ].map((p, i) => (
                <div key={i} className="p-4 rounded-2xl bg-slate-900 border border-slate-800 space-y-2">
                  <div className="font-bold text-white text-sm">{p.name}</div>
                  <div className="text-xs text-slate-400">{p.stock}</div>
                  <div className="flex justify-between items-center pt-2 border-t border-slate-800">
                    <span className="text-lg font-black text-indigo-400">{p.price}</span>
                    <span className="text-xs text-emerald-400 font-medium">Margin: {p.margin}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* 9. INVOICES & AR AGING */}
        {activeTab === "invoices" && (
          <div className="space-y-6 animate-fade-in">
            <h2 className="text-lg font-bold text-white">Invoices & Accounts Receivable Aging</h2>
            <div className="grid grid-cols-4 gap-4 text-xs">
              <div className="p-4 rounded-2xl bg-slate-900 border border-slate-800"><div className="text-slate-400">Current (0-30 Days)</div><div className="text-xl font-bold text-white">$326,419</div></div>
              <div className="p-4 rounded-2xl bg-slate-900 border border-slate-800"><div className="text-slate-400">31-60 Days</div><div className="text-xl font-bold text-amber-400">$42,761</div></div>
              <div className="p-4 rounded-2xl bg-slate-900 border border-slate-800"><div className="text-slate-400">61-90 Days</div><div className="text-xl font-bold text-orange-400">$21,340</div></div>
              <div className="p-4 rounded-2xl bg-slate-900 border border-slate-800"><div className="text-slate-400">91+ Days Overdue</div><div className="text-xl font-bold text-rose-500">$15,741</div></div>
            </div>
          </div>
        )}

        {/* 10. SYSTEM SETTINGS */}
        {activeTab === "settings" && (
          <div className="space-y-6 animate-fade-in">
            <h2 className="text-lg font-bold text-white">System Settings & Workspace Preferences</h2>
            <div className="p-5 rounded-2xl bg-slate-900 border border-slate-800 max-w-2xl space-y-4 text-xs">
              <div className="space-y-1"><label className="text-slate-400 font-semibold">Workspace Name</label><input type="text" defaultValue="timateo Enterprise Control Center" className="w-full p-2 rounded bg-slate-950 border border-slate-800 text-white" /></div>
              <div className="space-y-1"><label className="text-slate-400 font-semibold">Default Timezone</label><input type="text" defaultValue="UTC-6 (Central Time)" className="w-full p-2 rounded bg-slate-950 border border-slate-800 text-white" /></div>
              <button className="px-4 py-2 rounded-xl bg-indigo-600 text-white font-bold">Save Settings</button>
            </div>
          </div>
        )}

        {/* 11. INTEGRATIONS */}
        {activeTab === "integrations" && (
          <div className="space-y-6 animate-fade-in">
            <h2 className="text-lg font-bold text-white">Integrations Platform & Connected Tools</h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs">
              {["Slack (Communication)", "Microsoft 365 (Productivity)", "Google Workspace", "HubSpot (CRM)", "Stripe (Payments)", "AWS S3 (Cloud Storage)"].map((tool, i) => (
                <div key={i} className="p-4 rounded-2xl bg-slate-900 border border-slate-800 flex items-center justify-between">
                  <span className="font-semibold text-white">{tool}</span>
                  <span className="px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-400 font-bold">Connected</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* 12. SECURITY COMMAND CENTER */}
        {activeTab === "security" && (
          <div className="space-y-6 animate-fade-in">
            <h2 className="text-lg font-bold text-white">Security Command Center & Threat Posture</h2>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800 text-center space-y-3">
                <div className="text-xs text-slate-400 font-bold uppercase">Security Posture Score</div>
                <div className="w-28 h-28 mx-auto rounded-full border-8 border-emerald-400 flex items-center justify-center text-3xl font-black text-white">
                  76/100
                </div>
                <div className="text-xs text-emerald-400 font-semibold">Posture Status: Good</div>
              </div>
              <div className="lg:col-span-2 p-5 rounded-2xl bg-slate-900 border border-slate-800 space-y-3 text-xs">
                <div className="font-bold text-white">Recent Security Threat Alerts</div>
                <div className="p-3 rounded-xl bg-slate-950 border border-rose-500/30 text-rose-300 flex justify-between">
                  <span>Impossible travel login detected (New York -&gt; Berlin)</span>
                  <span className="font-bold">HIGH RISK</span>
                </div>
                <div className="p-3 rounded-xl bg-slate-950 border border-amber-500/30 text-amber-300 flex justify-between">
                  <span>Multiple failed password login attempts (Emily Davis)</span>
                  <span className="font-bold">MEDIUM RISK</span>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* 13. AUDIT LOGS */}
        {activeTab === "audit-logs" && (
          <div className="space-y-6 animate-fade-in">
            <h2 className="text-lg font-bold text-white">Audit Logs & Activity Trail</h2>
            <div className="p-5 rounded-2xl bg-slate-900 border border-slate-800 text-xs">
              <table className="w-full text-left">
                <thead>
                  <tr className="border-b border-slate-800 text-slate-400 uppercase text-[10px]">
                    <th className="py-2 px-2">Time</th><th className="py-2 px-2">Actor</th><th className="py-2 px-2">Event Type</th><th className="py-2 px-2">Severity</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-800 text-slate-300">
                  <tr><td className="py-2 px-2 font-mono text-slate-500">10:42 AM</td><td className="py-2 px-2">Sarah Johnson</td><td className="py-2 px-2">User Login Authentication</td><td className="py-2 px-2 text-rose-400 font-bold">High</td></tr>
                  <tr><td className="py-2 px-2 font-mono text-slate-500">10:37 AM</td><td className="py-2 px-2">Admin Spencer</td><td className="py-2 px-2">Role Updated (User Management)</td><td className="py-2 px-2 text-amber-400 font-bold">Medium</td></tr>
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* 14. AUTH PORTAL */}
        {activeTab === "login" && (
          <div className="py-12 flex justify-center animate-fade-in">
            <div className="w-full max-w-md p-8 rounded-3xl bg-slate-900/90 border border-slate-800 shadow-2xl space-y-6">
              <div className="text-center space-y-2">
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-indigo-500 to-purple-600 mx-auto flex items-center justify-center font-black text-white text-xl shadow-lg">
                  t
                </div>
                <h3 className="text-xl font-black text-white">Welcome back to timateo</h3>
                <p className="text-xs text-slate-400">Sign in to access your enterprise control center</p>
              </div>

              <div className="space-y-4 text-xs">
                <div>
                  <label className="text-slate-400 font-semibold">Email Address</label>
                  <input type="email" defaultValue="admin.spencer@timateo.com" className="w-full p-3 rounded-xl bg-slate-950 border border-slate-800 text-white mt-1" />
                </div>
                <div>
                  <label className="text-slate-400 font-semibold">Password</label>
                  <input type="password" defaultValue="••••••••••••" className="w-full p-3 rounded-xl bg-slate-950 border border-slate-800 text-white mt-1" />
                </div>
                <button className="w-full py-3.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-bold text-sm shadow-xl shadow-indigo-600/30">
                  Sign In to timateo
                </button>
              </div>
            </div>
          </div>
        )}

      </div>
    </div>
  );
}
