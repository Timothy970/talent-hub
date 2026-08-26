export interface DashboardMeta {
  id: string;
  title: string;
  subtitle: string;
  category: string;
  theme: string;
  image: string;
  accentColor: string;
  badgeText: string;
  description: string;
  features: string[];
}

export const DASHBOARDS: DashboardMeta[] = [
  {
    id: "eproduct",
    title: "eProduct",
    subtitle: "Order Management Dashboard",
    category: "E-Commerce",
    theme: "Royal Blue & Clean White",
    image: "/images/dashboards/1786818174664.webp",
    accentColor: "from-blue-600 to-indigo-600",
    badgeText: "Order Matrix",
    description: "Curved active tab navigation, order status tabs, glowing floating table rows, pagination, and date range filters.",
    features: [
      "Curved sidebar selection indicator",
      "Floating row popup with dispatch/pending actions",
      "Multi-status order table filter",
      "Date range picker & quick search"
    ]
  },
  {
    id: "skillset",
    title: "SkillSet",
    subtitle: "EdTech & Learning Analytics",
    category: "Education",
    theme: "Warm Light Gray & Charcoal",
    image: "/images/dashboards/1786818174673.webp",
    accentColor: "from-neutral-800 to-stone-900",
    badgeText: "Learning Hub",
    description: "Monochrome pill navigation, bar chart statistics with highlighted active bar, mini calendar widget, and 65% community growth meter.",
    features: [
      "Total Revenue black hero card with trend indicator",
      "Interactive vertical bar chart with monthly filters",
      "Mini September calendar picker widget",
      "Course purchase transaction log with user avatars"
    ]
  },
  {
    id: "aurex-living",
    title: "Aurex Living",
    subtitle: "Real Estate & Property Marketplace",
    category: "Real Estate",
    theme: "Soft Cream & Skeuomorphic Gray",
    image: "/images/dashboards/1786818174678.webp",
    accentColor: "from-amber-600 to-orange-700",
    badgeText: "Property Hub",
    description: "Hero 3D house architecture banner, sold/rented sales metrics, property object carousel cards, and interactive map radar.",
    features: [
      "Real estate 3D house banner highlight",
      "Interactive Property Object cards with save/share actions",
      "Filter pills (District, Type, Status, Cost)",
      "Property radar map pulse widget"
    ]
  },
  {
    id: "coachpro",
    title: "CoachPro",
    subtitle: "Sports & Football Club Analytics",
    category: "Sports",
    theme: "Soft Mint Teal & Pastel Glass",
    image: "/images/dashboards/1786818174685.webp",
    accentColor: "from-teal-500 to-emerald-600",
    badgeText: "Sports Analytics",
    description: "Next match VS card (Juventus vs Sassuolo), standings table with team crests, games stats progress bar, and 3D promotional action card.",
    features: [
      "Live fixture match highlight banner",
      "League standings table with points & goals breakdown",
      "Possession % circular radial gauge",
      "3D setup training promotional call-out"
    ]
  },
  {
    id: "helios",
    title: "Helios Investments",
    subtitle: "AI Wealth & Stock Portfolio",
    category: "Finance & AI",
    theme: "Deep Dark Charcoal & Rose Glow",
    image: "/images/dashboards/1786818174690.webp",
    accentColor: "from-fuchsia-600 to-pink-600",
    badgeText: "AI Wealth",
    description: "Dark ambient interface with rose glow, AI Insights banner prompt, stock watchlist tickers with gain/loss badges, and smooth area chart with tooltip.",
    features: [
      "Decisions Powered by Data AI prompt action card",
      "Live Watchlist tickers (Spotify, NVDA, MSFT, Amazon)",
      "Interactive smoothed area performance chart",
      "Portfolio holding distribution cards"
    ]
  },
  {
    id: "ultraleads",
    title: "Ultraleads",
    subtitle: "Sales & CRM Growth Overview",
    category: "CRM & Sales",
    theme: "Aqua Cyan & Clean White",
    image: "/images/dashboards/1786818174695.webp",
    accentColor: "from-cyan-500 to-blue-500",
    badgeText: "Sales CRM",
    description: "Arched radial customer volume gauge (145 New Customers), user growth progress, weekly customer satisfaction bar chart, and regional order map list.",
    features: [
      "Circular arch customer volume gauge meter",
      "User growth progress breakdown bar",
      "Weekly customer satisfaction vertical bar chart (+76%)",
      "Regional order map list with location pins"
    ]
  },
  {
    id: "dwison",
    title: "Dwison",
    subtitle: "Dark Mode Enterprise Analytics",
    category: "Enterprise",
    theme: "Midnight Graphite & Electric Lime",
    image: "/images/dashboards/1786818174701.webp",
    accentColor: "from-lime-400 to-emerald-500",
    badgeText: "Enterprise Dark",
    description: "ARR ($1.5M) & Net Revenue ($3.1M) metrics, revenue goal gauge (71%), sales donut chart breakdown, manager contacts list, and glowing upsell card.",
    features: [
      "Neon green highlighted active navigation",
      "Sales overview donut breakdown chart",
      "Total profit sparkline graph",
      "Premium Plan ($30/mo) glowing CTA card & contact panel"
    ]
  },
  {
    id: "finnova",
    title: "Finnova",
    subtitle: "Modern Invoicing & Payouts",
    category: "Fintech",
    theme: "Crisp White & Indigo Dark Split",
    image: "/images/dashboards/1786818174707.webp",
    accentColor: "from-indigo-600 to-violet-600",
    badgeText: "Fintech Suite",
    description: "Overdue & payout KPI cards, credit card instant payout selector, split-panel dark indigo unpaid invoice builder with line items.",
    features: [
      "Instant Payout credit card selector (Visa, Stripe, PayPal)",
      "Unpaid Invoices dark indigo split table",
      "Interactive invoice details viewer with itemized pricing",
      "Overdue and monthly payout progress graphs"
    ]
  },
  {
    id: "youcare",
    title: "Youcare",
    subtitle: "Healthcare & Patient Monitoring",
    category: "Medical",
    theme: "Sky Blue & Clean Minimal",
    image: "/images/dashboards/1786818174712.webp",
    accentColor: "from-sky-500 to-blue-600",
    badgeText: "Health Tech",
    description: "News From The Doctor banner, patient health report dual bar chart, QR code medical profile card, and doctor directory list.",
    features: [
      "News from the doctor highlighted info widget",
      "Medical information card with scannable QR profile",
      "Patient health report dual-color stacked bars",
      "My Doctor contact cards with status badges"
    ]
  },
  {
    id: "quixotic",
    title: "Quixotic",
    subtitle: "Personal Banking & Wallet",
    category: "Banking",
    theme: "Soft Neutral White & Emerald Green",
    image: "/images/dashboards/1786818174718.webp",
    accentColor: "from-emerald-600 to-teal-700",
    badgeText: "Personal Wallet",
    description: "Realistic green VISA credit card ($78,989.09), textured engagement rate bar chart, total balance line graph with Send/Receive drawer, and transaction log.",
    features: [
      "Interactive green virtual VISA credit card",
      "Engagement rate pill bar chart with +17.8% peak label",
      "Payment history table with brand logos (Google Pay, Amazon)",
      "Mandatory payments team avatars stacked list"
    ]
  }
];

export interface ComingSoonCategory {
  title: string;
  iconName: string;
  description: string;
  badge: string;
  expectedDate: string;
  features: string[];
}

export const COMING_SOON_CATEGORIES: ComingSoonCategory[] = [
  {
    title: "AI & LLM Interfaces",
    iconName: "Bot",
    description: "Conversational AI playgrounds, prompt templates, token usage meters, and vector store knowledge search UI.",
    badge: "Coming Soon",
    expectedDate: "Q3 2026",
    features: ["Streaming Response Cards", "Model Comparison Matrix", "Prompt Template Builder"]
  },
  {
    title: "Auth & Onboarding Flows",
    iconName: "Lock",
    description: "OAuth login modals, multi-factor authentication steps, passwordless magic links, and team invite steps.",
    badge: "Coming Soon",
    expectedDate: "Q3 2026",
    features: ["Social OAuth Buttons", "2FA Code Inputs", "Role Assignment Steps"]
  },
  {
    title: "Kanban & Project Boards",
    iconName: "Kanban",
    description: "Drag and drop workflow boards, sprint velocity burndown charts, swimlanes, and task detail side drawers.",
    badge: "Coming Soon",
    expectedDate: "Q4 2026",
    features: ["Drag & Drop Columns", "Tag & Priority Badges", "Assignee Avatars"]
  },
  {
    title: "E-Commerce Storefronts",
    iconName: "ShoppingBag",
    description: "Modern product display grids, interactive quick-view drawers, cart summary panels, and review ratings.",
    badge: "Coming Soon",
    expectedDate: "Q4 2026",
    features: ["360 Product Showcase", "Slide-Over Cart", "Checkout Flow"]
  },
  {
    title: "Pricing & Plan Tables",
    iconName: "CreditCard",
    description: "Monthly / Annual billing toggles, feature comparison matrices, enterprise quote request calculators.",
    badge: "Coming Soon",
    expectedDate: "Q4 2026",
    features: ["Billing Cycle Toggle", "Popular Plan Glow Badge", "Custom ROI Calculator"]
  },
  {
    title: "Settings & User Profiles",
    iconName: "Settings",
    description: "Profile preference centers, API key access logs, webhook testers, and team permissions matrix.",
    badge: "Coming Soon",
    expectedDate: "Q4 2026",
    features: ["API Key Reveal Toggle", "Webhook Tester Tool", "Granular RBAC Table"]
  },
  {
    title: "Charts & Data Viz Library",
    iconName: "BarChart3",
    description: "Advanced data visualization components including Sankey diagrams, heatmaps, candlestick charts, and radar graphs.",
    badge: "Coming Soon",
    expectedDate: "Q1 2027",
    features: ["Heatmap Grid", "Realtime Candlesticks", "Sankey Flow Diagrams"]
  }
];
