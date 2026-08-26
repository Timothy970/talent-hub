import Header from "@/components/shell/Header";
import Footer from "@/components/shell/Footer";
import ComponentsGallery from "@/components/ui-gallery/ComponentsGallery";

export default function ComponentsGalleryPage() {
  return (
    <div className="min-h-screen bg-[#090d16] text-slate-100 flex flex-col font-sans">
      <Header />
      <main className="flex-1 pb-16">
        <ComponentsGallery />
      </main>
      <Footer />
    </div>
  );
}
