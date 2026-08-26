"use client";

import React, { useState } from "react";
import {
  Users,
  Home,
  FileCheck,
  BarChart2,
  Megaphone,
  Settings,
  Lock,
  Search,
  Plus,
  Download,
  Calendar,
  CheckCircle,
  Clock,
  AlertCircle,
  FileText,
  Shield,
  Eye,
  Edit,
  Trash2,
  Filter
} from "lucide-react";

export default function timateoCivicDashboard() {
  const [activeTab, setActiveTab] = useState<
    | "dashboard"
    | "residents"
    | "households"
    | "census"
    | "reports"
    | "announcements"
    | "settings"
    | "login"
  >("dashboard");

  const navTabs = [
    { id: "dashboard", label: "Civic Dashboard", icon: BarChart2 },
    { id: "residents", label: "Residents", icon: Users },
    { id: "households", label: "Households", icon: Home },
    { id: "census", label: "Census Surveys", icon: FileCheck },
    { id: "reports", label: "Public Reports", icon: FileText },
    { id: "announcements", label: "Announcements", icon: Megaphone },
    { id: "settings", label: "Settings", icon: Settings },
    { id: "login", label: "Civic Auth", icon: Lock },
  ];

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 font-sans p-4 sm:p-6 space-y-6">
      
      {/* Light Mode Header Banner */}
      <div className="bg-white border border-slate-200 rounded-2xl p-4 shadow-sm space-y-4">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-blue-600 flex items-center justify-center font-black text-white text-xl shadow-md">
              T
            </div>
            <div>
              <h1 className="text-xl font-bold text-slate-900 flex items-center gap-2">
                timateo Civic & Population Hub
                <span className="text-xs px-2.5 py-0.5 rounded-full bg-blue-100 text-blue-700 font-semibold border border-blue-200">
                  PUBLIC SECTOR
                </span>
              </h1>
              <p className="text-xs text-slate-500">
                Civic Demographics, Resident Directory, Households & Census Analytics
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="relative">
              <Search className="w-4 h-4 text-slate-400 absolute left-3 top-2.5" />
              <input
                type="text"
                placeholder="Search residents, households..."
                className="pl-9 pr-4 py-1.5 rounded-xl bg-slate-100 border border-slate-200 text-xs text-slate-900 placeholder-slate-400 focus:outline-none focus:border-blue-500 w-56"
              />
            </div>
            <button className="px-3.5 py-1.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white text-xs font-semibold shadow-md transition-all flex items-center gap-1.5">
              <Plus className="w-3.5 h-3.5" />
              <span>Add Record</span>
            </button>
          </div>
        </div>

        {/* Sub-Tabs Pills */}
        <div className="flex items-center gap-2 overflow-x-auto pb-1 custom-scrollbar border-t border-slate-100 pt-3">
          {navTabs.map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-medium flex items-center gap-2 whitespace-nowrap transition-all ${
                  isActive
                    ? "bg-blue-600 text-white font-bold shadow-md shadow-blue-500/20"
                    : "bg-slate-100 hover:bg-slate-200 text-slate-600"
                }`}
              >
                <Icon className="w-3.5 h-3.5" />
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* RENDER CIVIC SUB-VIEW */}
      <div className="transition-all">

        {/* 1. CIVIC MAIN DASHBOARD */}
        {activeTab === "dashboard" && (
          <div className="space-y-6 animate-fade-in">
            
            {/* Demographics KPI Row */}
            <div className="grid grid-cols-2 lg:grid-cols-6 gap-4">
              <div className="p-4 rounded-2xl bg-white border border-slate-200 shadow-sm"><div className="text-xs text-slate-500 font-medium">Total Population</div><div className="text-2xl font-black text-slate-900 mt-1">5,892</div><div className="text-[10px] text-emerald-600 mt-1">↑ +2.35% vs last year</div></div>
              <div className="p-4 rounded-2xl bg-white border border-slate-200 shadow-sm"><div className="text-xs text-slate-500 font-medium">Male</div><div className="text-2xl font-black text-slate-900 mt-1">2,894</div><div className="text-[10px] text-blue-600 mt-1">49.08% of total</div></div>
              <div className="p-4 rounded-2xl bg-white border border-slate-200 shadow-sm"><div className="text-xs text-slate-500 font-medium">Female</div><div className="text-2xl font-black text-slate-900 mt-1">2,998</div><div className="text-[10px] text-pink-600 mt-1">50.92% of total</div></div>
              <div className="p-4 rounded-2xl bg-white border border-slate-200 shadow-sm"><div className="text-xs text-slate-500 font-medium">Senior Citizens</div><div className="text-2xl font-black text-slate-900 mt-1">812</div><div className="text-[10px] text-emerald-600 mt-1">↑ 13.78% of total</div></div>
              <div className="p-4 rounded-2xl bg-white border border-slate-200 shadow-sm"><div className="text-xs text-slate-500 font-medium">Youth (0-17)</div><div className="text-2xl font-black text-slate-900 mt-1">1,256</div><div className="text-[10px] text-amber-600 mt-1">21.31% of total</div></div>
              <div className="p-4 rounded-2xl bg-white border border-slate-200 shadow-sm"><div className="text-xs text-slate-500 font-medium">Households</div><div className="text-2xl font-black text-slate-900 mt-1">1,785</div><div className="text-[10px] text-purple-600 mt-1">Avg Size: 3.30</div></div>
            </div>

            {/* Graphs Row */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              
              <div className="lg:col-span-2 p-5 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-4">
                <div className="flex items-center justify-between">
                  <h3 className="font-bold text-slate-900 text-sm">Population Growth Over Years</h3>
                  <span className="text-xs text-slate-500">2018 - 2026</span>
                </div>
                <div className="h-48 w-full flex items-end justify-between gap-3 pt-4 border-b border-slate-100 pb-2">
                  {[3850, 4120, 4350, 4712, 5098, 5452, 5757, 5892].map((pop, idx) => (
                    <div key={idx} className="flex-1 flex flex-col items-center gap-2">
                      <div className="w-full bg-blue-500/20 rounded-t-lg h-36 flex items-end hover:bg-blue-600 transition-all">
                        <div style={{ height: `${(pop / 6000) * 100}%` }} className="w-full bg-blue-600 rounded-t-lg" />
                      </div>
                      <span className="text-[10px] text-slate-500">{2018 + idx}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Age Group Donut */}
              <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-4">
                <h3 className="font-bold text-slate-900 text-sm">Population by Age Group</h3>
                <div className="flex justify-center py-2">
                  <div className="w-36 h-36 rounded-full border-8 border-blue-600 border-t-emerald-500 border-r-amber-400 flex items-center justify-center text-center">
                    <div>
                      <div className="text-xl font-bold text-slate-900">5,892</div>
                      <div className="text-[10px] text-slate-500">Total</div>
                    </div>
                  </div>
                </div>
                <div className="space-y-2 text-xs">
                  <div className="flex justify-between text-slate-600"><span>0-17 Youth</span><span className="font-bold text-slate-900">1,256 (21.3%)</span></div>
                  <div className="flex justify-between text-slate-600"><span>18-59 Adults</span><span className="font-bold text-slate-900">3,824 (64.8%)</span></div>
                  <div className="flex justify-between text-slate-600"><span>60+ Seniors</span><span className="font-bold text-slate-900">812 (13.8%)</span></div>
                </div>
              </div>

            </div>
          </div>
        )}

        {/* 2. RESIDENTS DIRECTORY */}
        {activeTab === "residents" && (
          <div className="space-y-6 animate-fade-in">
            <div className="flex items-center justify-between">
              <h2 className="text-lg font-bold text-slate-900">Residents Management & Master Directory</h2>
              <button className="px-4 py-2 rounded-xl bg-blue-600 text-white text-xs font-bold shadow-sm">+ Add Resident</button>
            </div>

            <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-4">
              <table className="w-full text-left text-xs">
                <thead>
                  <tr className="border-b border-slate-200 text-slate-400 uppercase text-[10px]">
                    <th className="py-2.5 px-3">Resident ID</th>
                    <th className="py-2.5 px-3">Name</th>
                    <th className="py-2.5 px-3">Age / Gender</th>
                    <th className="py-2.5 px-3">Purok Address</th>
                    <th className="py-2.5 px-3">Status</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {[
                    { id: "BR-0001", name: "Dela Cruz, Juan Miguel", age: "28 / Male", address: "Purok 3, Sitio Maligaya", status: "Active" },
                    { id: "BR-0002", name: "Reyes, Maria Angelina", age: "32 / Female", address: "Purok 1, Sitio Centro", status: "Active" },
                    { id: "BR-0003", name: "Santos, Luke Anderson", age: "17 / Male", address: "Purok 2, Sitio Kanluran", status: "Active" },
                    { id: "BR-0004", name: "Garcia, Teresita Aling", age: "65 / Female", address: "Purok 4, Sitio Silangan", status: "Active" },
                  ].map((res, i) => (
                    <tr key={i} className="hover:bg-slate-50">
                      <td className="py-3 px-3 font-mono font-bold text-blue-600">{res.id}</td>
                      <td className="py-3 px-3 font-semibold text-slate-900">{res.name}</td>
                      <td className="py-3 px-3 text-slate-600">{res.age}</td>
                      <td className="py-3 px-3 text-slate-600">{res.address}</td>
                      <td className="py-3 px-3">
                        <span className="px-2.5 py-0.5 rounded-full bg-emerald-100 text-emerald-700 text-[10px] font-bold">
                          {res.status}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* 3. HOUSEHOLDS */}
        {activeTab === "households" && (
          <div className="space-y-6 animate-fade-in">
            <h2 className="text-lg font-bold text-slate-900">Households Structure & Directory</h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs">
              {[
                { name: "Dela Cruz Family", head: "Juan Miguel Dela Cruz", members: "5 Members", type: "Nuclear" },
                { name: "Reyes Household", head: "Maria Angelina Reyes", members: "4 Members", type: "Extended" },
                { name: "Santos Residence", head: "Luke Anderson Santos", members: "3 Members", type: "Nuclear" },
              ].map((h, i) => (
                <div key={i} className="p-4 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-2">
                  <div className="font-bold text-slate-900 text-sm">{h.name}</div>
                  <div className="text-slate-500">Head: {h.head}</div>
                  <div className="flex justify-between items-center pt-2 border-t border-slate-100">
                    <span className="font-bold text-blue-600">{h.members}</span>
                    <span className="px-2 py-0.5 rounded bg-blue-50 text-blue-700 text-[10px] font-semibold">{h.type}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* 4. CENSUS */}
        {activeTab === "census" && (
          <div className="space-y-6 animate-fade-in">
            <h2 className="text-lg font-bold text-slate-900">Census Records & Survey Tracker</h2>
            <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-3 text-xs">
              <div className="font-bold text-slate-800">Census Completion by Purok</div>
              <div className="space-y-2">
                {[
                  { purok: "Purok 1 - Sitio Centro", pct: "96%" },
                  { purok: "Purok 2 - Sitio Kanluran", pct: "94%" },
                  { purok: "Purok 3 - Sitio Maligaya", pct: "92%" },
                ].map((p, idx) => (
                  <div key={idx} className="space-y-1">
                    <div className="flex justify-between text-slate-600 font-medium"><span>{p.purok}</span><span>{p.pct}</span></div>
                    <div className="w-full bg-slate-100 h-2 rounded-full overflow-hidden"><div style={{ width: p.pct }} className="bg-blue-600 h-full rounded-full" /></div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* 5. REPORTS */}
        {activeTab === "reports" && (
          <div className="space-y-6 animate-fade-in">
            <h2 className="text-lg font-bold text-slate-900">Civic Public Reports Library</h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs">
              {["Population Summary Report", "Household Distribution", "Senior Citizens Registry", "Voter Statistics Report"].map((rep, i) => (
                <div key={i} className="p-4 rounded-2xl bg-white border border-slate-200 shadow-sm flex items-center justify-between">
                  <div><div className="font-bold text-slate-900">{rep}</div><div className="text-[10px] text-slate-400">PDF / Excel Export</div></div>
                  <button className="px-3 py-1.5 rounded-lg bg-blue-50 text-blue-600 font-bold hover:bg-blue-100">Download</button>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* 6. ANNOUNCEMENTS */}
        {activeTab === "announcements" && (
          <div className="space-y-6 animate-fade-in">
            <h2 className="text-lg font-bold text-slate-900">Community Announcements Board</h2>
            <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-3 text-xs">
              {[
                { title: "Barangay General Assembly Meeting", cat: "Community", date: "May 19, 2026", status: "Published" },
                { title: "Free Medical Check-up Drive", cat: "Health", date: "May 22, 2026", status: "Scheduled" },
                { title: "Clean-up Drive Notice", cat: "Environment", date: "May 18, 2026", status: "Published" },
              ].map((anc, idx) => (
                <div key={idx} className="p-3 rounded-xl bg-slate-50 border border-slate-200 flex justify-between items-center">
                  <div>
                    <div className="font-bold text-slate-900">{anc.title}</div>
                    <div className="text-[10px] text-slate-500">{anc.cat} • {anc.date}</div>
                  </div>
                  <span className="px-2.5 py-1 rounded-full bg-blue-100 text-blue-700 font-bold text-[10px]">{anc.status}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* 7. SETTINGS */}
        {activeTab === "settings" && (
          <div className="space-y-6 animate-fade-in">
            <h2 className="text-lg font-bold text-slate-900">Civic System Settings & Access Roles</h2>
            <div className="p-5 rounded-2xl bg-white border border-slate-200 max-w-xl space-y-3 text-xs">
              <div><label className="text-slate-500 font-semibold">Community Office Name</label><input type="text" defaultValue="timateo Civic Center" className="w-full p-2 rounded bg-slate-50 border border-slate-200 mt-1" /></div>
              <button className="px-4 py-2 rounded-xl bg-blue-600 text-white font-bold">Save Settings</button>
            </div>
          </div>
        )}

        {/* 8. AUTH */}
        {activeTab === "login" && (
          <div className="py-12 flex justify-center animate-fade-in">
            <div className="w-full max-w-sm p-6 rounded-2xl bg-white border border-slate-200 shadow-xl space-y-4">
              <div className="text-center space-y-1">
                <div className="w-12 h-12 rounded-2xl bg-blue-600 text-white font-black text-xl mx-auto flex items-center justify-center shadow-md">T</div>
                <h3 className="text-lg font-bold text-slate-900">timateo Civic Portal</h3>
                <p className="text-xs text-slate-500">Sign in to access resident demographics</p>
              </div>
              <div className="space-y-3 text-xs">
                <input type="email" defaultValue="admin@timateocivic.gov" className="w-full p-2.5 rounded-xl bg-slate-50 border border-slate-200" />
                <input type="password" defaultValue="••••••••" className="w-full p-2.5 rounded-xl bg-slate-50 border border-slate-200" />
                <button className="w-full py-2.5 rounded-xl bg-blue-600 text-white font-bold shadow-md">Sign In</button>
              </div>
            </div>
          </div>
        )}

      </div>
    </div>
  );
}
