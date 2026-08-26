"use client";

import { useState } from "react";
import { 
  LayoutDashboard, 
  ShoppingBag, 
  PieChart, 
  Box, 
  Layers, 
  Tag, 
  Search, 
  Bell, 
  Calendar, 
  ChevronDown, 
  ChevronLeft, 
  ChevronRight, 
  Settings, 
  SlidersHorizontal,
  MoreVertical,
  CheckCircle2,
  Clock,
  Truck
} from "lucide-react";

interface Order {
  id: string;
  name: string;
  avatar: string;
  address: string;
  date: string;
  price: string;
  status: "Pending" | "Dispatch" | "Completed";
  highlighted?: boolean;
}

const ORDERS_DATA: Order[] = [
  { id: "#2632", name: "Brooklyn Zoe", avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop&crop=face", address: "302 Snider Street, RUTLAND, VT, 05701", date: "31 Jul 2020", price: "$64.00", status: "Pending" },
  { id: "#2633", name: "John McCormick", avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face", address: "1095 Wiseman Street, CALMAR, IA, 52132", date: "01 Aug 2020", price: "$35.00", status: "Dispatch", highlighted: true },
  { id: "#2634", name: "Sandra Pugh", avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face", address: "1640 Thom Street, SALE CITY, GA, 31784", date: "02 Aug 2020", price: "$74.00", status: "Completed" },
  { id: "#2635", name: "Vernie Hart", avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop&crop=face", address: "3898 Oak Drive, DOVER, DE, 19901", date: "02 Aug 2020", price: "$82.00", status: "Pending" },
  { id: "#2636", name: "Mark Clark", avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face", address: "1915 Augusta Park, NASSAU, NY, 12062", date: "03 Aug 2020", price: "$39.00", status: "Dispatch" },
  { id: "#2637", name: "Rebekah Foster", avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&h=100&fit=crop&crop=face", address: "3445 Park Boulevard, BIOLA, CA, 93606", date: "03 Aug 2020", price: "$67.00", status: "Pending" }
];

export default function EProductDashboard() {
  const [activeNav, setActiveNav] = useState("Order");
  const [activeTab, setActiveTab] = useState("All orders");
  const [selectedRow, setSelectedRow] = useState<string>("#2633");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredOrders = ORDERS_DATA.filter(order => {
    if (activeTab !== "All orders" && order.status.toLowerCase() !== activeTab.toLowerCase()) {
      return false;
    }
    if (searchQuery && !order.name.toLowerCase().includes(searchQuery.toLowerCase()) && !order.id.toLowerCase().includes(searchQuery.toLowerCase())) {
      return false;
    }
    return true;
  });

  return (
    <div className="w-full min-h-[720px] bg-slate-100 text-slate-800 rounded-3xl overflow-hidden flex flex-col md:flex-row shadow-2xl font-sans">
      
      {/* Royal Blue Sidebar */}
      <aside className="w-full md:w-64 bg-blue-600 text-white p-6 flex flex-col justify-between relative select-none">
        <div>
          {/* Logo */}
          <div className="flex items-center gap-2 mb-10">
            <span className="text-2xl font-black tracking-tight text-white">eProduct</span>
          </div>

          {/* Nav Items */}
          <nav className="space-y-2">
            {[
              { label: "Dashboard", icon: LayoutDashboard },
              { label: "Order", icon: ShoppingBag },
              { label: "Statistic", icon: PieChart },
              { label: "Product", icon: Box },
              { label: "Stock", icon: Layers },
              { label: "Offer", icon: Tag }
            ].map((item) => {
              const Icon = item.icon;
              const isActive = activeNav === item.label;
              return (
                <button
                  key={item.label}
                  onClick={() => setActiveNav(item.label)}
                  className={`w-full flex items-center gap-3 px-4 py-3 rounded-2xl text-sm font-semibold transition-all relative ${
                    isActive
                      ? "bg-white text-blue-600 shadow-xl shadow-blue-900/30"
                      : "text-blue-100 hover:bg-blue-500/50"
                  }`}
                >
                  <Icon className="w-5 h-5" />
                  <span>{item.label}</span>
                </button>
              );
            })}
          </nav>
        </div>

        {/* Footer Links */}
        <div className="mt-8 pt-6 border-t border-blue-500/40 text-xs text-blue-200 flex items-center gap-3 font-medium">
          <a href="#" className="hover:underline">Facebook</a>
          <span>•</span>
          <a href="#" className="hover:underline">Twitter</a>
          <span>•</span>
          <a href="#" className="hover:underline">Google</a>
        </div>
      </aside>

      {/* Main Order Content Area */}
      <div className="flex-1 bg-slate-50 p-6 md:p-8 flex flex-col justify-between">
        
        <div>
          {/* Top Bar Header */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-6">
            <div>
              <h2 className="text-2xl font-bold text-slate-900">Order</h2>
              <p className="text-xs text-slate-500 font-medium">28 orders found</p>
            </div>

            <div className="flex items-center gap-3 w-full sm:w-auto">
              <div className="relative flex-1 sm:w-64">
                <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
                <input
                  type="text"
                  placeholder="Search orders..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-9 pr-4 py-2 text-xs rounded-xl bg-white border border-slate-200 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <button className="p-2 rounded-xl bg-white border border-slate-200 text-slate-600 hover:bg-slate-100 relative shadow-sm">
                <Bell className="w-4 h-4" />
                <span className="w-2 h-2 rounded-full bg-red-500 absolute top-1.5 right-1.5" />
              </button>

              <div className="w-9 h-9 rounded-xl overflow-hidden border border-slate-300 shadow-sm">
                <img
                  src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&h=100&fit=crop&crop=face"
                  alt="User"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>

          {/* Tabs & Date Filter */}
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-4 border-b border-slate-200 pb-4 mb-6">
            <div className="flex items-center gap-6">
              {["All orders", "Dispatch", "Pending", "Completed"].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`text-xs font-bold transition-all relative pb-2 -mb-4 ${
                    activeTab === tab
                      ? "text-slate-900 border-b-2 border-blue-600"
                      : "text-slate-400 hover:text-slate-600"
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>

            <div className="flex items-center gap-2 bg-white px-3 py-1.5 rounded-xl border border-slate-200 shadow-sm text-xs font-semibold text-slate-600">
              <Calendar className="w-3.5 h-3.5 text-slate-400" />
              <span>31 Jul 2020</span>
              <span className="text-slate-400 font-normal">To</span>
              <Calendar className="w-3.5 h-3.5 text-slate-400" />
              <span>03 Aug 2020</span>
            </div>
          </div>

          {/* Orders Data Table */}
          <div className="overflow-x-auto">
            <table className="w-full text-left border-separate border-spacing-y-2">
              <thead>
                <tr className="text-[11px] font-bold text-slate-400 uppercase tracking-wider px-4">
                  <th className="py-2 px-4">Id</th>
                  <th className="py-2 px-4">Name</th>
                  <th className="py-2 px-4">Address</th>
                  <th className="py-2 px-4">Date</th>
                  <th className="py-2 px-4">Price</th>
                  <th className="py-2 px-4">Status</th>
                  <th className="py-2 px-4 text-right">Action</th>
                </tr>
              </thead>
              <tbody className="text-xs font-medium">
                {filteredOrders.map((order) => {
                  const isSelected = selectedRow === order.id;
                  return (
                    <tr
                      key={order.id}
                      onClick={() => setSelectedRow(order.id)}
                      className={`cursor-pointer transition-all duration-200 rounded-2xl ${
                        isSelected
                          ? "bg-blue-600 text-white shadow-xl shadow-blue-500/25 scale-[1.01]"
                          : "bg-white text-slate-700 hover:bg-slate-100 shadow-sm border border-slate-200/60"
                      }`}
                    >
                      <td className={`py-4 px-4 font-bold rounded-l-2xl ${isSelected ? "text-white" : "text-slate-900"}`}>
                        {order.id}
                      </td>

                      <td className="py-4 px-4">
                        <div className="flex items-center gap-2.5">
                          <img
                            src={order.avatar}
                            alt={order.name}
                            className="w-7 h-7 rounded-full object-cover shadow-sm"
                          />
                          <span className="font-semibold">{order.name}</span>
                        </div>
                      </td>

                      <td className={`py-4 px-4 text-[11px] max-w-xs truncate ${isSelected ? "text-blue-100" : "text-slate-500"}`}>
                        {order.address}
                      </td>

                      <td className={`py-4 px-4 ${isSelected ? "text-blue-100" : "text-slate-500"}`}>
                        {order.date}
                      </td>

                      <td className={`py-4 px-4 font-bold ${isSelected ? "text-white" : "text-slate-900"}`}>
                        {order.price}
                      </td>

                      <td className="py-4 px-4">
                        <span
                          className={`inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-[11px] font-semibold ${
                            isSelected
                              ? "bg-white/20 text-white"
                              : order.status === "Pending"
                              ? "bg-amber-50 text-amber-600"
                              : order.status === "Dispatch"
                              ? "bg-blue-50 text-blue-600"
                              : "bg-emerald-50 text-emerald-600"
                          }`}
                        >
                          <span className={`w-1.5 h-1.5 rounded-full ${
                            isSelected ? "bg-white" : order.status === "Pending" ? "bg-amber-500" : order.status === "Dispatch" ? "bg-blue-500" : "bg-emerald-500"
                          }`} />
                          {order.status}
                        </span>
                      </td>

                      <td className="py-4 px-4 rounded-r-2xl text-right">
                        <div className="flex items-center justify-end gap-1">
                          <button
                            className={`p-1.5 rounded-lg transition-colors ${
                              isSelected ? "hover:bg-white/20 text-white" : "hover:bg-slate-200 text-slate-500"
                            }`}
                          >
                            <Settings className="w-3.5 h-3.5" />
                          </button>
                          <button
                            className={`p-1.5 rounded-lg transition-colors ${
                              isSelected ? "hover:bg-white/20 text-white" : "hover:bg-slate-200 text-slate-500"
                            }`}
                          >
                            <ChevronDown className="w-3.5 h-3.5" />
                          </button>
                        </div>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>

        {/* Table Footer Pagination */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mt-6 pt-4 border-t border-slate-200 text-xs font-semibold text-slate-500">
          <div>Showing 06-12 of 28</div>

          <div className="flex items-center gap-1">
            <button className="p-1.5 rounded-lg hover:bg-slate-200 text-slate-400">
              <ChevronLeft className="w-4 h-4" />
            </button>
            {[1, 2, 3, 4, 5].map((page) => (
              <button
                key={page}
                className={`w-7 h-7 rounded-lg text-xs font-bold transition-all ${
                  page === 2
                    ? "bg-blue-600 text-white shadow-md shadow-blue-500/30"
                    : "hover:bg-slate-200 text-slate-600"
                }`}
              >
                {page}
              </button>
            ))}
            <button className="p-1.5 rounded-lg hover:bg-slate-200 text-slate-600">
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>

      </div>

    </div>
  );
}
