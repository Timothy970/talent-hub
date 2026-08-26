"use client";

import { useState } from "react";
import { 
  Activity, 
  Plus, 
  Search, 
  Bell, 
  Settings, 
  Download, 
  Filter, 
  Calendar, 
  ChevronDown, 
  QrCode, 
  Heart, 
  User, 
  ArrowUpRight,
  Sparkles
} from "lucide-react";

export default function YoucareDashboard() {
  const [activeTab, setActiveTab] = useState("Dashboard");

  return (
    <div className="w-full min-h-[720px] bg-[#f0f4fa] text-slate-800 rounded-3xl p-6 md:p-8 space-y-6 shadow-2xl font-sans">
      
      {/* Top Header Bar */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-xl bg-blue-600 text-white font-black flex items-center justify-center shadow-md">
            <Activity className="w-5 h-5" />
          </div>
          <span className="text-xl font-black text-slate-900 tracking-tight">Youcare</span>
        </div>

        {/* Navigation Pills */}
        <div className="flex items-center bg-white p-1.5 rounded-full border border-slate-200 shadow-sm text-xs font-bold text-slate-600">
          {["Dashboard", "Patient", "Appointment", "Report"].map((item) => (
            <button
              key={item}
              onClick={() => setActiveTab(item)}
              className={`px-4 py-1.5 rounded-full transition-all ${
                activeTab === item
                  ? "bg-blue-600 text-white shadow-md"
                  : "hover:text-slate-900"
              }`}
            >
              {item}
            </button>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <button className="p-2 rounded-full bg-white border border-slate-200 text-slate-600 shadow-sm"><Settings className="w-4 h-4" /></button>
          <button className="p-2 rounded-full bg-white border border-slate-200 text-slate-600 shadow-sm"><Bell className="w-4 h-4" /></button>
          <div className="w-8 h-8 rounded-full overflow-hidden border border-blue-400">
            <img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&h=100&fit=crop&crop=face" alt="Selena" className="w-full h-full object-cover" />
          </div>
        </div>
      </div>

      {/* Greeting Banner */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <h2 className="text-2xl font-black text-blue-600">Good Morning, Selena!</h2>
        
        <div className="flex items-center gap-2">
          <button className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white border border-slate-200 text-xs font-bold text-slate-700 shadow-sm">
            <Filter className="w-3.5 h-3.5" /> <span>Filter</span>
          </button>
          <button className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white border border-slate-200 text-xs font-bold text-slate-700 shadow-sm">
            <Calendar className="w-3.5 h-3.5" /> <span>Monthly</span> <ChevronDown className="w-3.5 h-3.5" />
          </button>
          <button className="flex items-center gap-1.5 px-4 py-2 rounded-xl bg-blue-600 text-white text-xs font-bold shadow-md shadow-blue-600/30">
            <Plus className="w-3.5 h-3.5" /> <span>Check new</span>
          </button>
        </div>
      </div>

      {/* Row 1 Grid (4 Cards) */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
        
        {/* Health Report Pending Wave Graph - 4 Cols */}
        <div className="md:col-span-4 p-5 rounded-3xl bg-white shadow-sm border border-slate-200/80 space-y-3">
          <div className="flex items-center justify-between text-xs font-bold text-slate-900">
            <span>Health Report Pending</span>
            <span className="px-2 py-0.5 rounded-full bg-blue-50 text-blue-600 text-[10px]">Report</span>
          </div>

          <div className="h-28 w-full pt-2">
            <svg className="w-full h-full" viewBox="0 0 300 80">
              <path d="M0,40 Q50,60 100,20 T200,50 T300,30" fill="none" stroke="#2563eb" strokeWidth="2.5" />
            </svg>
          </div>
        </div>

        {/* Doctor News Blue Featured Banner - 3 Cols */}
        <div className="md:col-span-3 p-5 rounded-3xl bg-blue-600 text-white shadow-xl space-y-3 flex flex-col justify-between">
          <span className="px-3 py-1 rounded-full bg-white/20 font-bold text-[10px] self-start">Today's info</span>
          <div>
            <h4 className="font-black text-sm">News From The Doctor</h4>
            <p className="text-[11px] text-blue-100 mt-1 leading-relaxed">
              Our process is designed to make booking appointments easy.
            </p>
          </div>
          <div className="flex gap-1">
            <div className="h-1 bg-white rounded-full flex-1" />
            <div className="h-1 bg-white/40 rounded-full flex-1" />
            <div className="h-1 bg-white/40 rounded-full flex-1" />
          </div>
        </div>

        {/* Health Trend Chart - 2 Cols */}
        <div className="md:col-span-2 p-5 rounded-3xl bg-white shadow-sm border border-slate-200/80 space-y-2">
          <span className="text-xs font-bold text-slate-900 block">Health Trend</span>
          <div className="text-2xl font-black text-slate-900">85%</div>
          <span className="text-[10px] font-bold text-emerald-600 block">+0.75%</span>
        </div>

        {/* Checkup Progress - 3 Cols */}
        <div className="md:col-span-3 p-5 rounded-3xl bg-white shadow-sm border border-slate-200/80 space-y-3">
          <span className="text-xs font-bold text-slate-900 block">Checkup progress</span>
          <div className="space-y-2 text-xs font-semibold text-slate-700">
            <div className="p-2 rounded-xl bg-slate-50 flex items-center justify-between">
              <span>22 Agustus, 2024</span>
              <span className="w-2 h-2 rounded-full bg-blue-500" />
            </div>
            <div className="p-2 rounded-xl bg-slate-50 flex items-center justify-between">
              <span>16 Agustus, 2024</span>
              <span className="w-2 h-2 rounded-full bg-blue-500" />
            </div>
          </div>
        </div>

      </div>

      {/* Row 2 Grid (Medical Info, Health Report Bars, Doctor Directory) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        
        {/* Medical Information & QR Profile - 4 Cols */}
        <div className="lg:col-span-4 p-6 rounded-3xl bg-white shadow-sm border border-slate-200/80 space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="font-bold text-slate-900 text-sm">Medical Information</h3>
            <button className="text-xs text-blue-600 hover:underline">See Details</button>
          </div>

          <div className="flex items-center justify-between p-3 rounded-2xl bg-slate-50 border border-slate-100">
            <div className="flex items-center gap-3">
              <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face" alt="Patient" className="w-10 h-10 rounded-full object-cover" />
              <div>
                <span className="font-bold text-xs text-slate-900 block">Cameron Williamson</span>
                <span className="text-[10px] text-slate-400">Pasien</span>
              </div>
            </div>
            <div className="p-2 bg-white rounded-xl shadow-sm border border-slate-200">
              <QrCode className="w-6 h-6 text-slate-700" />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-2 text-xs">
            <div><span className="text-slate-400 text-[10px] block">Medical History</span><span className="font-bold text-slate-900">Inpatient care</span></div>
            <div><span className="text-slate-400 text-[10px] block">Medications</span><span className="font-bold text-slate-900">Herbal medicine</span></div>
            <div><span className="text-slate-400 text-[10px] block">Allergies</span><span className="font-bold text-slate-900">No allergies</span></div>
            <div><span className="text-slate-400 text-[10px] block">Physician</span><span className="font-bold text-slate-900">Dr. Leslie</span></div>
          </div>
        </div>

        {/* Patient Health Report Bars - 5 Cols */}
        <div className="lg:col-span-5 p-6 rounded-3xl bg-white shadow-sm border border-slate-200/80 space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="font-bold text-slate-900 text-sm">Patient health report</h3>
            <div className="flex gap-2 text-[10px] font-bold">
              <span className="text-blue-600">● Progress</span>
              <span className="text-slate-400">● Recovery</span>
            </div>
          </div>

          <div className="h-40 flex items-end justify-between gap-3 pt-2">
            {[
              { month: "Jan", height: "40%" },
              { month: "Feb", height: "90%", active: true },
              { month: "Mar", height: "50%" },
              { month: "Apr", height: "45%" },
              { month: "May", height: "80%" },
              { month: "Jun", height: "60%" }
            ].map((b) => (
              <div key={b.month} className="flex-1 flex flex-col items-center gap-2">
                <div className="w-full bg-slate-100 rounded-xl h-full flex items-end p-1">
                  <div style={{ height: b.height }} className={`w-full rounded-lg ${b.active ? "bg-blue-600 shadow-md" : "bg-blue-300"}`} />
                </div>
                <span className="text-[10px] font-medium text-slate-400">{b.month}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Doctor Directory - 3 Cols */}
        <div className="lg:col-span-3 p-6 rounded-3xl bg-white shadow-sm border border-slate-200/80 space-y-3">
          <h3 className="font-bold text-slate-900 text-sm">My Doctor</h3>

          <div className="space-y-3">
            {[
              { name: "Dr. Leslie Alexander", hosp: "Hasan Sadikin Hospital" },
              { name: "Dr. Savannah Nguyen", hosp: "Hasan Sadikin Hospital" },
              { name: "Dr. Darlene Robertson", hosp: "Hasan Sadikin Hospital" }
            ].map((doc, idx) => (
              <div key={idx} className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-full bg-blue-100 text-blue-600 font-bold text-xs flex items-center justify-center">
                  {doc.name[4]}
                </div>
                <div>
                  <span className="font-bold text-xs text-slate-900 block leading-tight">{doc.name}</span>
                  <span className="text-[10px] text-slate-400">{doc.hosp}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>

    </div>
  );
}
