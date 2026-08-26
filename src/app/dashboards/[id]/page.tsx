import { notFound } from "next/navigation";
import Header from "@/components/shell/Header";
import Footer from "@/components/shell/Footer";
import DashboardShell from "@/components/shell/DashboardShell";
import { DASHBOARDS } from "@/data/dashboardsData";

import EProductDashboard from "@/components/dashboards/EProductDashboard";
import SkillSetDashboard from "@/components/dashboards/SkillSetDashboard";
import AurexLivingDashboard from "@/components/dashboards/AurexLivingDashboard";
import CoachProDashboard from "@/components/dashboards/CoachProDashboard";
import HeliosDashboard from "@/components/dashboards/HeliosDashboard";
import UltraleadsDashboard from "@/components/dashboards/UltraleadsDashboard";
import DwisonDashboard from "@/components/dashboards/DwisonDashboard";
import FinnovaDashboard from "@/components/dashboards/FinnovaDashboard";
import YoucareDashboard from "@/components/dashboards/YoucareDashboard";
import QuixoticDashboard from "@/components/dashboards/QuixoticDashboard";
import TimateoEnterpriseDashboard from "@/components/dashboards/timateoEnterpriseDashboard";
import TimateoCivicDashboard from "@/components/dashboards/timateoCivicDashboard";
import TimateoCollabDashboard from "@/components/dashboards/timateoCollabDashboard";
import TimateoAdventureDashboard from "@/components/dashboards/timateoAdventureDashboard";

export function generateStaticParams() {
  return DASHBOARDS.map((dash) => ({
    id: dash.id,
  }));
}

export default async function DashboardPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const dashboardMeta = DASHBOARDS.find((d) => d.id === id);

  if (!dashboardMeta) {
    notFound();
  }

  const renderDashboardComponent = () => {
    switch (id) {
      case "timateo-enterprise":
        return <TimateoEnterpriseDashboard />;
      case "timateo-civic":
        return <TimateoCivicDashboard />;
      case "timateo-collab":
        return <TimateoCollabDashboard />;
      case "timateo-adventure":
        return <TimateoAdventureDashboard />;
      case "eproduct":
        return <EProductDashboard />;
      case "skillset":
        return <SkillSetDashboard />;
      case "aurex-living":
        return <AurexLivingDashboard />;
      case "coachpro":
        return <CoachProDashboard />;
      case "helios":
        return <HeliosDashboard />;
      case "ultraleads":
        return <UltraleadsDashboard />;
      case "dwison":
        return <DwisonDashboard />;
      case "finnova":
        return <FinnovaDashboard />;
      case "youcare":
        return <YoucareDashboard />;
      case "quixotic":
        return <QuixoticDashboard />;
      default:
        return <TimateoEnterpriseDashboard />;
    }
  };

  return (
    <div className="min-h-screen bg-[#090d16] text-slate-100 flex flex-col font-sans">
      <Header />
      <DashboardShell currentDashboard={dashboardMeta}>
        {renderDashboardComponent()}
      </DashboardShell>
      <Footer />
    </div>
  );
}
