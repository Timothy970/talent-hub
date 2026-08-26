"use client";

import { useState } from "react";
import { 
  Home, 
  Users, 
  GraduationCap, 
  BarChart3, 
  BookOpen, 
  MessageSquare, 
  Settings, 
  HelpCircle, 
  LogOut, 
  Search, 
  Bell, 
  Calendar as CalendarIcon, 
  TrendingUp, 
  TrendingDown, 
  ArrowUpRight, 
  RotateCw,
  Sparkles
} from "lucide-react";

export default function SkillSetDashboard() {
  const [timeframe, setTimeframe] = useState("Month");

  return (
    <div className="w-full min-h-[720px] bg-[#f0f0f2] text-slate-800 rounded-3xl overflow-hidden flex flex-col md:flex-row shadow-2xl font-sans">
      
      {/* Sidebar */}
      <aside className="w-full md:w-60 bg-white p-6 flex flex-col justify-between border-r border-slate-200/80">
        <div>
          {/* Brand */}
          <div className="flex items-center gap-2 mb-8">
            <span className="text-xl font-black text-slate-900 tracking-tight">SkillSet</span>
          </div>

          {/* Navigation links */}
          <nav className="space-y-1.5 text-xs font-semibold text-slate-500">
            {[
              { label: "Dashboard", icon: Home, active: true },
              { label: "Mentors", icon: Users },
              { label: "Students", icon: GraduationCap },
              { label: "Analytics", icon: BarChart3 },
              { label: "Courses", icon: BookOpen },
              { label: "Forum", icon: MessageSquare }
            ].map((item) => {
              const Icon = item.icon;
              return (
                <button
                  key={item.label}
                  className={`w-full flex items-center gap-3 px-3.5 py-2.5 rounded-xl transition-all ${
                    item.active
                      ? "bg-slate-100 text-slate-900 font-bold"
                      : "hover:bg-slate-50 text-slate-500"
                  }`}
                >
                  <Icon className="w-4 h-4 text-slate-700" />
                  <span>{item.label}</span>
                </button>
              );
            })}
          </nav>
        </div>

        {/* Upgrade Pro Card & Bottom Nav */}
        <div className="space-y-6 mt-8">
          <div className="p-4 rounded-2xl bg-slate-900 text-white shadow-xl flex flex-col items-start gap-2">
            <span className="font-bold text-xs">Upgrade To Pro</span>
            <p className="text-[10px] text-slate-400 leading-tight">Get access to additional features and contact</p>
            <button className="w-full py-1.5 rounded-xl bg-white/20 hover:bg-white/30 text-white font-bold text-xs transition-colors mt-1">
              Upgrade
            </button>
          </div>

          <div className="space-y-1 text-xs font-semibold text-slate-500 pt-4 border-t border-slate-200/80">
            <button className="w-full flex items-center gap-3 px-3.5 py-2 hover:text-slate-900">
              <Settings className="w-4 h-4 text-slate-500" />
              <span>Settings</span>
            </button>
            <button className="w-full flex items-center gap-3 px-3.5 py-2 hover:text-slate-900">
              <HelpCircle className="w-4 h-4 text-slate-500" />
              <span>Help Center</span>
            </button>
            <button className="w-full flex items-center gap-3 px-3.5 py-2 text-rose-600 hover:text-rose-700">
              <LogOut className="w-4 h-4" />
              <span>Log out</span>
            </button>
          </div>
        </div>
      </aside>

      {/* Main Content Dashboard */}
      <div className="flex-1 p-6 md:p-8 space-y-6">
        
        {/* Top Header */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <h2 className="text-2xl font-bold text-slate-900">Dashboard</h2>

          <div className="flex items-center gap-3 w-full md:w-auto">
            {/* Search Bar */}
            <div className="relative flex-1 md:w-64">
              <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
              <input
                type="text"
                placeholder="Search..."
                className="w-full pl-9 pr-4 py-2 text-xs rounded-full bg-white border border-slate-200 shadow-sm focus:outline-none focus:ring-2 focus:ring-slate-400"
              />
            </div>

            {/* Notifications */}
            <button className="p-2.5 rounded-full bg-white border border-slate-200 text-slate-600 hover:bg-slate-50 shadow-sm">
              <Bell className="w-4 h-4" />
            </button>

            {/* Profile Avatar */}
            <div className="w-9 h-9 rounded-full overflow-hidden border border-slate-300 shadow-sm">
              <img
                src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&h=100&fit=crop&crop=face"
                alt="Profile"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>

        {/* Timeframe Filter Pills */}
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center bg-white p-1 rounded-full border border-slate-200 shadow-sm text-xs font-semibold text-slate-600">
            {["Day", "Week", "Month", "Year"].map((tf) => (
              <button
                key={tf}
                onClick={() => setTimeframe(tf)}
                className={`px-4 py-1.5 rounded-full transition-all ${
                  timeframe === tf
                    ? "bg-slate-700 text-white font-bold shadow-sm"
                    : "hover:text-slate-900"
                }`}
              >
                {tf}
              </button>
            ))}
          </div>

          <div className="flex items-center gap-2 px-3 py-1.5 rounded-2xl bg-white border border-slate-200 shadow-sm text-xs font-semibold text-slate-700">
            <CalendarIcon className="w-3.5 h-3.5 text-slate-500" />
            <span>1 Sep 2024 - 31 Sep 2024</span>
          </div>
        </div>

        {/* Top 4 KPI Metrics Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          
          {/* Card 1: Total Revenue (Black Featured) */}
          <div className="p-5 rounded-3xl bg-slate-900 text-white shadow-xl space-y-2">
            <span className="text-xs text-slate-400 font-medium">Total Revenue</span>
            <div className="text-2xl font-bold tracking-tight">$23,902</div>
            <div className="flex items-center gap-1 text-[11px] font-semibold text-emerald-400">
              <TrendingUp className="w-3.5 h-3.5" />
              <span>4.2% from last month</span>
            </div>
          </div>

          {/* Card 2: Active Users */}
          <div className="p-5 rounded-3xl bg-white shadow-sm border border-slate-200/80 space-y-2">
            <span className="text-xs text-slate-500 font-medium">Active Users</span>
            <div className="text-2xl font-bold text-slate-900 tracking-tight">16,815</div>
            <div className="flex items-center gap-1 text-[11px] font-semibold text-emerald-600">
              <TrendingUp className="w-3.5 h-3.5" />
              <span>1.7% from last month</span>
            </div>
          </div>

          {/* Card 3: New Users */}
          <div className="p-5 rounded-3xl bg-white shadow-sm border border-slate-200/80 space-y-2">
            <span className="text-xs text-slate-500 font-medium">New Users</span>
            <div className="text-2xl font-bold text-slate-900 tracking-tight">1,457</div>
            <div className="flex items-center gap-1 text-[11px] font-semibold text-rose-500">
              <TrendingDown className="w-3.5 h-3.5" />
              <span>2.9% from last month</span>
            </div>
          </div>

          {/* Card 4: Total Mentors */}
          <div className="p-5 rounded-3xl bg-white shadow-sm border border-slate-200/80 space-y-2">
            <span className="text-xs text-slate-500 font-medium">Total Mentors</span>
            <div className="text-2xl font-bold text-slate-900 tracking-tight">2,023</div>
            <div className="flex items-center gap-1 text-[11px] font-semibold text-emerald-600">
              <TrendingUp className="w-3.5 h-3.5" />
              <span>0.9% from last month</span>
            </div>
          </div>

        </div>

        {/* Middle Section: Chart & Calendar */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          
          {/* Revenue Bar Chart (2 Cols) */}
          <div className="lg:col-span-2 p-6 rounded-3xl bg-white shadow-sm border border-slate-200/80 space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="font-bold text-slate-900 text-sm">Total Revenue</h3>
              <button className="p-1.5 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-600">
                <ArrowUpRight className="w-4 h-4" />
              </button>
            </div>

            {/* Custom Bar Chart Visual */}
            <div className="pt-4 pb-2">
              <div className="h-44 flex items-end justify-between gap-3 px-4">
                {[
                  { month: "Jan", height: "60%", value: "6K" },
                  { month: "Feb", height: "45%", value: "4.5K" },
                  { month: "Mar", height: "90%", value: "9K", active: true },
                  { month: "Apr", height: "55%", value: "5.5K" },
                  { month: "May", height: "85%", value: "8.5K" },
                  { month: "Jun", height: "35%", value: "3.5K" },
                ].map((bar) => (
                  <div key={bar.month} className="flex-1 flex flex-col items-center gap-2 group cursor-pointer">
                    <div className="w-full max-w-[48px] bg-slate-100 rounded-2xl h-full flex items-end p-1">
                      <div
                        style={{ height: bar.height }}
                        className={`w-full rounded-xl transition-all duration-300 ${
                          bar.active
                            ? "bg-slate-700 shadow-md scale-105"
                            : "bg-slate-900 group-hover:bg-slate-700"
                        }`}
                      />
                    </div>
                    <span className="text-[11px] font-semibold text-slate-400">{bar.month}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Calendar & Community Widget (1 Col) */}
          <div className="p-6 rounded-3xl bg-white shadow-sm border border-slate-200/80 space-y-6">
            {/* Calendar Widget */}
            <div className="space-y-3">
              <div className="flex items-center justify-between text-xs font-bold text-slate-900">
                <span>September 2024</span>
              </div>
              
              <div className="grid grid-cols-5 text-center text-xs gap-1">
                {["Tue", "Wed", "Thu", "Fri", "Sat"].map((day) => (
                  <span key={day} className="text-[11px] font-medium text-slate-400 py-1">{day}</span>
                ))}
                {["17", "18", "19", "20", "21"].map((num) => (
                  <div
                    key={num}
                    className={`py-2 rounded-xl text-xs font-bold transition-colors ${
                      num === "19"
                        ? "bg-slate-700 text-white shadow-md"
                        : "hover:bg-slate-100 text-slate-700"
                    }`}
                  >
                    {num}
                  </div>
                ))}
              </div>
            </div>

            {/* Community Growth Ring */}
            <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
              <div>
                <span className="text-xs font-bold text-slate-900 block">Community growth</span>
                <span className="text-[11px] font-semibold text-emerald-600 flex items-center gap-1 mt-0.5">
                  <TrendingUp className="w-3 h-3" />
                  0.9% from last month
                </span>
              </div>
              <div className="relative w-14 h-14 flex items-center justify-center rounded-full bg-slate-100 font-bold text-xs text-slate-900 border-4 border-slate-800 border-t-slate-300">
                65%
              </div>
            </div>

          </div>

        </div>

        {/* Bottom Data Table: Course Purchases */}
        <div className="p-6 rounded-3xl bg-white shadow-sm border border-slate-200/80 space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="font-bold text-slate-900 text-sm">Course Purchases</h3>
            <div className="flex items-center gap-2">
              <button className="p-1.5 rounded-full hover:bg-slate-100 text-slate-500">
                <RotateCw className="w-4 h-4" />
              </button>
              <button className="p-1.5 rounded-full hover:bg-slate-100 text-slate-500">
                <ArrowUpRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs">
              <thead>
                <tr className="text-slate-400 font-semibold border-b border-slate-100 pb-2">
                  <th className="py-2">Course Name</th>
                  <th className="py-2">Student Name</th>
                  <th className="py-2">Student ID</th>
                  <th className="py-2">Amount</th>
                  <th className="py-2 text-right">Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 font-medium">
                <tr>
                  <td className="py-3">
                    <div className="flex items-center gap-3">
                      <div className="w-9 h-6 rounded-lg bg-slate-800 overflow-hidden flex-shrink-0">
                        <img src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=100&h=80&fit=crop" alt="Course" className="w-full h-full object-cover" />
                      </div>
                      <span className="font-bold text-slate-900">Digital Marketing</span>
                    </div>
                  </td>
                  <td className="py-3 text-slate-600">Aria</td>
                  <td className="py-3 text-slate-600 font-mono">#3456791</td>
                  <td className="py-3 font-bold text-slate-900">$ 372,00</td>
                  <td className="py-3 text-right">
                    <span className="px-3 py-1 rounded-full bg-slate-500 text-white font-bold text-[11px]">
                      Paid
                    </span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

      </div>

    </div>
  );
}
