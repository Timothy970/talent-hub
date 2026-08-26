import Link from "next/link";
import { DASHBOARDS } from "@/data/dashboardsData";
import { Layers } from "lucide-react";

export default function Footer() {
  return (
    <footer className="w-full border-t border-slate-800/80 bg-slate-950 text-slate-400 text-xs py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          
          {/* Brand */}
          <div className="space-y-3 md:col-span-1">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-xl bg-gradient-to-tr from-indigo-500 to-pink-500 flex items-center justify-center text-white">
                <Layers className="w-4 h-4" />
              </div>
              <span className="font-bold text-white text-base">Talent UI Hub</span>
            </div>
            <p className="text-slate-400 text-xs leading-relaxed">
              State-of-the-art Next.js showcase featuring 10 custom interactive dashboards, animated loaders, and reusable UI components.
            </p>
          </div>

          {/* Dashboards list */}
          <div className="space-y-2 md:col-span-2">
            <h4 className="font-bold text-white uppercase text-[10px] tracking-wider font-mono">10 Live Dashboard Showcase</h4>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
              {DASHBOARDS.map((d) => (
                <Link key={d.id} href={`/dashboards/${d.id}`} className="hover:text-indigo-400 transition-colors">
                  {d.title} ({d.category})
                </Link>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-2 md:col-span-1">
            <h4 className="font-bold text-white uppercase text-[10px] tracking-wider font-mono">Quick Navigation</h4>
            <div className="space-y-1.5 flex flex-col">
              <Link href="/" className="hover:text-white">Showcase Hub</Link>
              <Link href="/loaders" className="hover:text-white">Loaders Gallery</Link>
              <Link href="/components-gallery" className="hover:text-white">UI Component Library</Link>
            </div>
          </div>

        </div>

        <div className="pt-6 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-slate-500">
          <div>© {new Date().getFullYear()} Talent UI Hub. Built with Next.js 14+ & Tailwind CSS.</div>
          <div className="flex gap-4">
            <a href="#" className="hover:underline">Documentation</a>
            <a href="#" className="hover:underline">Privacy Policy</a>
            <a href="#" className="hover:underline">Terms of Service</a>
          </div>
        </div>

      </div>
    </footer>
  );
}
