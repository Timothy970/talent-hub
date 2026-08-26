"use client";

import { useState } from "react";
import { 
  Building2, 
  Search, 
  Bell, 
  Settings, 
  ArrowUpRight, 
  Heart, 
  MapPin, 
  SlidersHorizontal, 
  ChevronDown,
  Sparkles,
  Bed,
  Bath,
  Maximize2
} from "lucide-react";

export default function AurexLivingDashboard() {
  const [activeTab, setActiveTab] = useState("Dashboard");

  return (
    <div className="w-full min-h-[720px] bg-[#e4e4e8] text-slate-800 rounded-3xl p-6 md:p-8 space-y-6 shadow-2xl font-sans">
      
      {/* Top Header Bar */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-xl bg-slate-900 flex items-center justify-center text-white shadow-md">
            <Building2 className="w-5 h-5" />
          </div>
          <span className="text-xl font-extrabold text-slate-900 tracking-tight">Aurex Living</span>
        </div>

        {/* Navigation Pills */}
        <div className="flex items-center bg-slate-200/80 p-1.5 rounded-full border border-slate-300/60 text-xs font-bold text-slate-600">
          {["Dashboard", "Listing", "Appointments", "Message"].map((nav) => (
            <button
              key={nav}
              onClick={() => setActiveTab(nav)}
              className={`px-5 py-2 rounded-full transition-all ${
                activeTab === nav
                  ? "bg-slate-900 text-white shadow-lg shadow-slate-900/20"
                  : "hover:text-slate-900"
              }`}
            >
              {nav}
            </button>
          ))}
        </div>

        {/* Right Header Controls */}
        <div className="flex items-center gap-2">
          <button className="p-2.5 rounded-full bg-white border border-slate-200/80 text-slate-700 hover:bg-slate-50 shadow-sm">
            <Search className="w-4 h-4" />
          </button>
          <button className="p-2.5 rounded-full bg-white border border-slate-200/80 text-slate-700 hover:bg-slate-50 shadow-sm">
            <Bell className="w-4 h-4" />
          </button>
          <button className="p-2.5 rounded-full bg-white border border-slate-200/80 text-slate-700 hover:bg-slate-50 shadow-sm">
            <Settings className="w-4 h-4" />
          </button>
          <div className="w-9 h-9 rounded-full overflow-hidden border border-slate-300 shadow-sm ml-1">
            <img
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face"
              alt="Agent"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>

      {/* Main Grid Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        
        {/* Left Column (Stats & Table) - 7 Cols */}
        <div className="lg:col-span-7 space-y-6">
          
          {/* Sold / Rented Split Metrics */}
          <div className="p-6 rounded-3xl bg-white shadow-sm border border-slate-200/80 grid grid-cols-2 gap-4">
            <div>
              <span className="text-xs text-slate-400 font-semibold block">Apartments Sold</span>
              <div className="text-2xl font-black text-slate-900 mt-1">$ 276,88.39</div>
              <div className="w-full h-2.5 bg-slate-900 rounded-full mt-3" />
            </div>
            <div>
              <span className="text-xs text-slate-400 font-semibold block">Apartments rented</span>
              <div className="text-2xl font-black text-slate-900 mt-1">$ 346,59.43</div>
              <div className="w-full h-2.5 bg-amber-200 rounded-full mt-3" />
            </div>
          </div>

          {/* Revenue & Deals Row */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {/* Total Revenue */}
            <div className="p-5 rounded-3xl bg-white shadow-sm border border-slate-200/80 space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs text-slate-500 font-semibold">Total Revenue</span>
                <button className="p-1 rounded-full hover:bg-slate-100"><ArrowUpRight className="w-4 h-4 text-slate-500" /></button>
              </div>
              <div className="text-2xl font-black text-slate-900">$ 873,42.39</div>
              <span className="text-[11px] text-slate-400 block font-medium">This month</span>
            </div>

            {/* Average Sale Value */}
            <div className="p-5 rounded-3xl bg-white shadow-sm border border-slate-200/80 space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs text-slate-500 font-semibold">Average Sale Value</span>
                <span className="text-[11px] px-2 py-0.5 rounded-full bg-slate-100 text-slate-700 font-bold">Daily</span>
              </div>
              <div className="text-2xl font-black text-slate-900">$ 873,42.39</div>
              
              {/* Stacked bar progress */}
              <div className="space-y-1 pt-1">
                <div className="flex items-center justify-between text-[10px] font-bold text-slate-500">
                  <span>$27,500</span>
                  <span className="text-emerald-600 bg-emerald-50 px-1.5 py-0.5 rounded">+10%</span>
                </div>
                <div className="w-full h-2 bg-slate-900 rounded-full" />
              </div>
            </div>
          </div>

          {/* Filters Bar */}
          <div className="p-3 rounded-2xl bg-white shadow-sm border border-slate-200/80 flex flex-wrap items-center gap-2 text-xs font-semibold text-slate-700">
            <button className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-100 hover:bg-slate-200">
              <span>District</span> <ChevronDown className="w-3.5 h-3.5 text-slate-400" />
            </button>
            <button className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-100 hover:bg-slate-200">
              <span>Type</span> <ChevronDown className="w-3.5 h-3.5 text-slate-400" />
            </button>
            <button className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-100 hover:bg-slate-200">
              <span>Status</span> <ChevronDown className="w-3.5 h-3.5 text-slate-400" />
            </button>
            <button className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-100 hover:bg-slate-200">
              <span>Cost</span> <ChevronDown className="w-3.5 h-3.5 text-slate-400" />
            </button>
            <div className="ml-auto flex items-center gap-2">
              <Search className="w-4 h-4 text-slate-400" />
              <button className="p-1.5 rounded-xl bg-slate-100"><SlidersHorizontal className="w-4 h-4 text-slate-600" /></button>
            </div>
          </div>

          {/* Property List Table */}
          <div className="p-5 rounded-3xl bg-white shadow-sm border border-slate-200/80 overflow-x-auto">
            <table className="w-full text-left text-xs">
              <thead>
                <tr className="text-slate-400 font-bold border-b border-slate-100 pb-2">
                  <th className="py-2">Property name</th>
                  <th className="py-2">Type</th>
                  <th className="py-2">Agent name</th>
                  <th className="py-2">Cost</th>
                  <th className="py-2">Views</th>
                  <th className="py-2">Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 font-medium">
                <tr>
                  <td className="py-3">
                    <div className="flex items-center gap-2.5">
                      <div className="w-10 h-8 rounded-lg overflow-hidden flex-shrink-0 bg-slate-200">
                        <img src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=120&h=90&fit=crop" alt="House" className="w-full h-full object-cover" />
                      </div>
                      <div>
                        <span className="font-bold text-slate-900 block">Romance Living Rooms</span>
                        <span className="text-[10px] text-slate-400">32 W 32nd St, New York, NY</span>
                      </div>
                    </div>
                  </td>
                  <td className="py-3 text-slate-600">House</td>
                  <td className="py-3 text-slate-600">Riyad Noor</td>
                  <td className="py-3 font-bold text-slate-900">$ 987,000</td>
                  <td className="py-3 text-slate-500">1251 views</td>
                  <td className="py-3">
                    <span className="px-2.5 py-1 rounded-full bg-emerald-100 text-emerald-700 text-[10px] font-bold">Active</span>
                  </td>
                </tr>
                <tr>
                  <td className="py-3">
                    <div className="flex items-center gap-2.5">
                      <div className="w-10 h-8 rounded-lg overflow-hidden flex-shrink-0 bg-slate-200">
                        <img src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=120&h=90&fit=crop" alt="House" className="w-full h-full object-cover" />
                      </div>
                      <div>
                        <span className="font-bold text-slate-900 block">Romance Living Rooms</span>
                        <span className="text-[10px] text-slate-400">32 W 32nd St, New York, NY</span>
                      </div>
                    </div>
                  </td>
                  <td className="py-3 text-slate-600">Apartment</td>
                  <td className="py-3 text-slate-600">M.Mamun</td>
                  <td className="py-3 font-bold text-slate-900">$ 987,000</td>
                  <td className="py-3 text-slate-500">1251 views</td>
                  <td className="py-3">
                    <span className="px-2.5 py-1 rounded-full bg-amber-100 text-amber-700 text-[10px] font-bold">Pending</span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

        </div>

        {/* Right Column (Hero 3D House, Property Object Cards & Map) - 5 Cols */}
        <div className="lg:col-span-5 space-y-6">
          
          {/* Hero 3D Luxury House Rendering */}
          <div className="relative w-full h-56 rounded-3xl overflow-hidden shadow-xl border border-white/60 bg-slate-300">
            <img
              src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&h=600&fit=crop"
              alt="Luxury Villa"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 via-transparent to-transparent" />
            <div className="absolute bottom-4 left-4 right-4 text-white flex items-center justify-between">
              <div>
                <span className="text-xs font-medium uppercase tracking-wider text-slate-200">Featured Architecture</span>
                <h4 className="text-lg font-black">Modern Minimalist Villa</h4>
              </div>
              <span className="px-3 py-1 rounded-full bg-white/30 backdrop-blur-md font-bold text-xs">
                For Sale
              </span>
            </div>
          </div>

          {/* Property Object Cards Horizontal Carousel */}
          <div className="p-5 rounded-3xl bg-white shadow-sm border border-slate-200/80 space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="font-bold text-slate-900 text-sm">Property Object</h3>
              <button className="p-1 rounded-full hover:bg-slate-100"><Maximize2 className="w-4 h-4 text-slate-400" /></button>
            </div>

            <div className="grid grid-cols-2 gap-3">
              {[
                { title: "Romance Living Rooms", price: "$5,864.00", img: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=300&h=240&fit=crop" },
                { title: "Romance Living Rooms", price: "$5,864.00", img: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=300&h=240&fit=crop" }
              ].map((prop, idx) => (
                <div key={idx} className="rounded-2xl border border-slate-200/80 overflow-hidden bg-slate-50 space-y-2 p-2">
                  <div className="relative h-28 rounded-xl overflow-hidden">
                    <img src={prop.img} alt={prop.title} className="w-full h-full object-cover" />
                    <div className="absolute top-2 right-2 flex gap-1">
                      <button className="p-1 rounded-full bg-slate-900/60 text-white backdrop-blur-md"><Heart className="w-3 h-3" /></button>
                      <button className="p-1 rounded-full bg-slate-900/60 text-white backdrop-blur-md"><ArrowUpRight className="w-3 h-3" /></button>
                    </div>
                  </div>
                  <div>
                    <h5 className="font-bold text-xs text-slate-900 truncate">{prop.title}</h5>
                    <div className="text-xs font-black text-slate-900 mt-0.5">{prop.price}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Map Pulse Radar Widget */}
          <div className="p-5 rounded-3xl bg-slate-200/60 shadow-sm border border-slate-300/80 relative overflow-hidden h-44 flex flex-col justify-between">
            <div className="flex items-center justify-between text-xs font-bold text-slate-800">
              <span>Map View</span>
              <Maximize2 className="w-4 h-4 text-slate-500" />
            </div>

            <div className="relative w-full h-full flex items-center justify-center">
              <div className="absolute w-24 h-24 rounded-full bg-amber-400/30 animate-ping" />
              <div className="relative px-3 py-1.5 rounded-full bg-slate-900 text-white font-bold text-xs shadow-xl flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-amber-400" />
                <span>$3.85M - 6.85</span>
              </div>
            </div>
          </div>

        </div>

      </div>

    </div>
  );
}
