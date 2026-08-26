import Header from "@/components/shell/Header";
import Footer from "@/components/shell/Footer";
import LoadersGallery from "@/components/loaders/LoadersGallery";

export default function LoadersPage() {
  return (
    <div className="min-h-screen bg-[#090d16] text-slate-100 flex flex-col font-sans">
      <Header />
      <main className="flex-1 pb-16">
        <LoadersGallery />
      </main>
      <Footer />
    </div>
  );
}
