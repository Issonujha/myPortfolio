import { ServiceOffering, CustomerInquiry, OrderMilestone, ProductCaseStudy } from '../types';

export const STUDIO_SERVICES: ServiceOffering[] = [
  {
    id: 'web-dev',
    name: 'Web Applications & Enterprise Portals',
    badge: 'Core Engineering',
    headline: 'High-Performance Full-Stack Web Systems',
    description: 'Custom web applications, enterprise SaaS dashboards, and high-conversion portals built with React 19, Next.js, and Spring Boot 3 backends.',
    baseDeliveryDays: 5,
    basePrice: 1500,
    category: 'Engineering',
    icon: 'Globe',
    deliverables: [
      'Production-Ready Next.js / React 19 Application',
      'Secure Spring Boot 3 RESTful API & Database Schema',
      'Responsive Mobile-First UI & Modern Tailwind Styling',
      'Automated CI/CD Pipeline & Zero-Downtime Deployment'
    ],
    techStack: ['React 19', 'Next.js', 'TypeScript', 'Spring Boot 3', 'Tailwind CSS', 'PostgreSQL', 'Redis'],
    features: [
      { id: 'auth', name: 'OAuth 2.0 & Role-Based Access Control', description: 'Stateless JWT auth with user roles and social logins', additionalDays: 2, additionalPrice: 400, isPopular: true },
      { id: 'payments', name: 'Payment Gateway Integration', description: 'Stripe, Razorpay, or PayPal recurring subscriptions and checkout', additionalDays: 2, additionalPrice: 500, isPopular: true },
      { id: 'admin-cms', name: 'Executive Admin CMS & Analytics', description: 'Full-featured back-office portal with CRUD and data exports', additionalDays: 3, additionalPrice: 650 },
      { id: 'realtime-ws', name: 'Realtime WebSockets & Push Alerts', description: 'Bi-directional live event streaming and notification hub', additionalDays: 2, additionalPrice: 450 },
      { id: 'microservices', name: 'Distributed Microservices Architecture', description: 'Eureka service discovery, Feign RPC, and Hystrix circuit-breakers', additionalDays: 4, additionalPrice: 950 },
    ]
  },
  {
    id: 'mobile-app',
    name: 'Mobile Apps & Server-Driven UI',
    badge: 'iOS & Android Native',
    headline: 'Cross-Platform Apps with Remote Screen Orchestration',
    description: 'React Native & native Android/iOS mobile applications powered by custom Server-Driven UI (`platform-sdui-core`) to ship UI updates without app store delays.',
    baseDeliveryDays: 10,
    basePrice: 2800,
    category: 'Engineering',
    icon: 'Smartphone',
    deliverables: [
      'Cross-Platform iOS & Android Native Binaries (APK / IPA)',
      'Server-Driven UI Engine for Dynamic Layout Updates',
      'Offline-First Local Database & State Synchronization',
      'App Store & Google Play Release Preparation'
    ],
    techStack: ['React Native', 'Expo', 'Android Kotlin', 'iOS Swift', 'SDUI Core', 'Spring Boot', 'SQLite'],
    features: [
      { id: 'sdui-core', name: 'Server-Driven UI (SDUI) Remote Engine', description: 'Hydrate declarative JSON layouts directly from backend without re-releasing app', additionalDays: 3, additionalPrice: 850, isPopular: true },
      { id: 'push-fcm', name: 'Push Notifications & WorkManager Sync', description: 'Automated background notifications, FCM sync, and local badges', additionalDays: 2, additionalPrice: 350 },
      { id: 'biometrics', name: 'Biometric Authentication (FaceID/Fingerprint)', description: 'Hardware-backed keychain and encrypted local biometric auth', additionalDays: 1, additionalPrice: 300 },
      { id: 'app-payments', name: 'In-App Purchases & Mobile Checkouts', description: 'Apple IAP, Google Play Billing, and native UPI/Card flows', additionalDays: 3, additionalPrice: 600, isPopular: true },
    ]
  },
  {
    id: 'ai-agents',
    name: 'AI & Autonomous Agent Systems',
    badge: 'Next-Gen Intelligence',
    headline: 'The 8-Layer Production AI Stack',
    description: 'Enterprise AI agent architectures with zero-mutation guardrails, semantic vector caching for $0 repeated query costs, and Model Context Protocol (MCP) tool calling.',
    baseDeliveryDays: 7,
    basePrice: 3200,
    category: 'Engineering',
    icon: 'Bot',
    deliverables: [
      'Hardened 8-Layer Enterprise AI Stack Architecture',
      'Semantic Vector Cache Engine (Cosine Similarity Matching)',
      'MCP Tool Command Dispatcher with Zero-Mutation Guarantees',
      'OpenTelemetry Distributed Tracing & Benchmark Evaluation Suite'
    ],
    techStack: ['Spring AI', 'Python', 'LangChain', 'MCP Protocol', 'Gemini Flash', 'OpenTelemetry', 'Pinecone/Qdrant'],
    features: [
      { id: 'layer6-guardrails', name: 'Layer 6 Prompt Injection & Safety Guardrails', description: 'Input classifier blocking prompt injections and enforcing read-only rules', additionalDays: 2, additionalPrice: 600, isPopular: true },
      { id: 'layer7-cache', name: 'Layer 7 Semantic Vector Caching', description: 'Sub-15ms vector cache hits for repeated queries with zero API token cost', additionalDays: 2, additionalPrice: 550, isPopular: true },
      { id: 'layer4-mcp', name: 'Layer 4 MCP Internal Service Tool Dispatch', description: 'Command pattern tool calling directly into internal Java/Spring microservices', additionalDays: 3, additionalPrice: 750 },
      { id: 'rag-pipeline', name: 'Custom RAG Knowledge Base Pipeline', description: 'Chunking, embedding, and deterministic document retrieval grounding', additionalDays: 3, additionalPrice: 700 },
    ]
  },
  {
    id: 'desktop-apps',
    name: 'Cross-Platform Desktop Applications',
    badge: 'Desktop Systems',
    headline: 'Fast, Native Desktop Utilities & Tools',
    description: 'High-performance desktop applications for macOS, Windows, and Linux built using Tauri, Electron, and lightweight native system daemons.',
    baseDeliveryDays: 7,
    basePrice: 2200,
    category: 'Engineering',
    icon: 'Monitor',
    deliverables: [
      'Universal macOS (DMG), Windows (MSI/EXE), and Linux (AppImage) Installers',
      'Low-Memory Local Daemon with Hardware System Tray Support',
      'Auto-Update Delivery Pipeline & Code Signing Readiness'
    ],
    techStack: ['Tauri', 'Rust', 'Electron', 'TypeScript', 'Node.js', 'Native C++'],
    features: [
      { id: 'tray-daemon', name: 'Background System Tray Daemon', description: 'Runs quietly in menu bar/tray with hotkeys and system resource monitoring', additionalDays: 2, additionalPrice: 400 },
      { id: 'offline-sync', name: 'Local SQLite Encryption & Cloud Sync', description: 'Encrypted on-disk database with conflict-free background replication', additionalDays: 3, additionalPrice: 600, isPopular: true },
      { id: 'native-hooks', name: 'OS Hardware Hooks & File System Listeners', description: 'Low-level file watchers, window management, and hardware hooks', additionalDays: 2, additionalPrice: 500 },
    ]
  },
  {
    id: 'system-integrations',
    name: 'Enterprise System & API Integrations',
    badge: 'Backend Architecture',
    headline: 'Unified Microservices, API Gateways & ERP Sync',
    description: 'Bridge disparate systems with resilient API gateways, event-driven message brokers, third-party ERP/CRM connectors, and microservice meshes.',
    baseDeliveryDays: 4,
    basePrice: 1800,
    category: 'Engineering',
    icon: 'Network',
    deliverables: [
      'High-Throughput API Gateway with Rate Limiting & SSL Termination',
      'Event-Driven Message Queue (Redis / Kafka / RabbitMQ)',
      'Automated Third-Party Sync & Error Reconciliation Pipeline'
    ],
    techStack: ['Spring Cloud', 'Netflix Eureka', 'Redis', 'Kafka', 'Nginx', 'Docker', 'REST / GraphQL'],
    features: [
      { id: 'erp-sync', name: 'CRM & ERP Realtime Data Bridge', description: 'Automate bidirectional syncing between Salesforce, HubSpot, SAP or custom DBs', additionalDays: 3, additionalPrice: 700, isPopular: true },
      { id: 'circuit-breakers', name: 'Resilience4j / Hystrix Circuit Breakers', description: 'Automated fallback routing and circuit tripping to prevent cascade outages', additionalDays: 2, additionalPrice: 450 },
      { id: 'webhook-engine', name: 'High-Capacity Webhook Delivery Engine', description: 'Guaranteed at-least-once webhook dispatching with exponential backoff retries', additionalDays: 2, additionalPrice: 500 },
    ]
  },
  {
    id: 'excel-bi',
    name: 'Excel Dashboards & Automated Business Intelligence',
    badge: 'Data & Analytics',
    headline: 'Automated Financial Models & KPI Cockpits',
    description: 'Dynamic executive Excel dashboards, automated financial models, VBA macro automations, and live BI reporting pipelines connected to real databases.',
    baseDeliveryDays: 3,
    basePrice: 850,
    category: 'Data & Automation',
    icon: 'FileSpreadsheet',
    deliverables: [
      'Fully Dynamic Excel / Google Sheets Executive KPI Dashboard',
      'Automated VBA / Python Data Pipeline Ingestion Scripts',
      'Interactive Scenario Modeling, Slicers & Financial Statements',
      'User Documentation & Formula Audit Report'
    ],
    techStack: ['Advanced Excel', 'VBA / Macros', 'Power Query', 'Power BI', 'Google Sheets API', 'Python Pandas'],
    features: [
      { id: 'vba-automation', name: 'Automated VBA One-Click Data Cleansing', description: 'Automates raw CSV/ERP data ingestion, schema validation, and formatting in seconds', additionalDays: 1, additionalPrice: 250, isPopular: true },
      { id: 'dynamic-kpi', name: 'Dynamic Executive KPI Cockpit', description: 'Interactive visual charts, heatmaps, and financial metrics with custom slicers', additionalDays: 1, additionalPrice: 300, isPopular: true },
      { id: 'live-db-connect', name: 'Live SQL Database / API Data Feed', description: 'Connects your spreadsheet directly to MySQL/Postgres for automated refreshes', additionalDays: 2, additionalPrice: 400 },
    ]
  },
  {
    id: 'logo-branding',
    name: 'Logo Design & Brand Identity Creative Suite',
    badge: 'Creative & Design',
    headline: 'Distinctive Vector Marks & Visual Identity Systems',
    description: 'High-end branding, bespoke vector logo marks, typography hierarchies, curated color palettes, and comprehensive brand guideline books delivered on tight turnarounds.',
    baseDeliveryDays: 2,
    basePrice: 650,
    category: 'Design & Creative',
    icon: 'Palette',
    deliverables: [
      'Original Vector Logo Marks (SVG, AI, EPS, PNG, PDF in Light & Dark variants)',
      'Complete Visual Brand Identity Guidelines Book (Typography & Color Systems)',
      'Stationery & Digital Collateral Mockups (Business cards, email signatures)',
      'Full Commercial Ownership & Copyright Transfer Documentation'
    ],
    techStack: ['Figma', 'Adobe Illustrator', 'Vector Math', 'Typography Standards'],
    features: [
      { id: 'express-48h', name: 'Express 48h Turnaround Delivery', description: 'Dedicated priority sprint delivering initial concept iterations in 48 hours', additionalDays: 0, additionalPrice: 200, isPopular: true },
      { id: 'brand-book', name: 'Comprehensive Brand Book & Style Guide', description: 'Detailed 20+ page digital manual with usage rules, spacing, and voice guidelines', additionalDays: 1, additionalPrice: 300 },
      { id: 'icon-set', name: 'Custom Bespoke Vector Iconography Set', description: 'Matching set of 24 custom SVG icons crafted specifically for your platform', additionalDays: 1, additionalPrice: 250 },
    ]
  },
  {
    id: 'marketing-banners',
    name: 'High-Conversion Marketing Banners & Visuals',
    badge: 'Marketing & Media',
    headline: 'High-Impact Ad Creatives & Promotional Media',
    description: 'High-conversion advertising banners, social media marketing suites, web leaderboards, and 3D promotional assets optimized for CTR and brand authority.',
    baseDeliveryDays: 2,
    basePrice: 500,
    category: 'Design & Creative',
    icon: 'Sparkles',
    deliverables: [
      'Comprehensive Digital Ad Banner Suite (Google Display, Meta, LinkedIn)',
      'High-Resolution Hero Graphics with 3D Abstract Visual Accents',
      'Social Media Launch Kit (Post templates, story banners, cover graphics)',
      'Source Figma Files with Organized Component Libraries'
    ],
    techStack: ['Figma', 'Adobe Photoshop', 'Blender 3D Renders', 'High-DPI SVG'],
    features: [
      { id: 'ad-pack-10', name: 'Complete 10-Size Omnichannel Ad Package', description: 'Standard IAB sizes: 728x90, 300x250, 160x600, 1080x1080, 1080x1920 etc.', additionalDays: 1, additionalPrice: 250, isPopular: true },
      { id: '3d-render-asset', name: 'Custom 3D Product Glassmorphism Artwork', description: 'Bespoke 3D rendered abstract hero artwork crafted for your product pitch', additionalDays: 1, additionalPrice: 300 },
      { id: 'animated-html5', name: 'Interactive Animated HTML5 Banners', description: 'Lightweight animated GSAP / CSS ad banners with smooth kinetic effects', additionalDays: 2, additionalPrice: 400 },
    ]
  }
];

export const MOCK_CUSTOMER_INQUIRIES: CustomerInquiry[] = [
  {
    id: 'inq-101',
    clientName: 'Naveen Sharma (FinEdge)',
    clientEmail: 'naveen@finedge.tech',
    serviceId: 'web-dev',
    serviceName: 'Web Applications & Enterprise Portals',
    selectedFeatures: ['OAuth 2.0 & Role-Based Access Control', 'Payment Gateway Integration', 'Executive Admin CMS'],
    estimatedDays: 9,
    estimatedCost: 3050,
    status: 'Proposal Sent',
    targetDeadline: 'Nov 20, 2026',
    createdAt: 'Today, 11:20 AM',
    notes: 'Needs multi-tenant institutional client portal with Stripe payouts and custom reporting.'
  },
  {
    id: 'inq-102',
    clientName: 'Priya Mehta (Apex Logistics)',
    clientEmail: 'priya.m@apexlogistics.io',
    serviceId: 'mobile-app',
    serviceName: 'Mobile Apps & Server-Driven UI',
    selectedFeatures: ['Server-Driven UI Remote Engine', 'Push Notifications & WorkManager Sync'],
    estimatedDays: 15,
    estimatedCost: 4000,
    status: 'New Lead',
    targetDeadline: 'Nov 26, 2026',
    createdAt: 'Yesterday, 4:45 PM',
    notes: 'Driver telemetry & dispatch mobile app with live GPS map tracking and SDUI card hydration.'
  },
  {
    id: 'inq-103',
    clientName: 'Dr. Vikram Malhotra (EduMatrix)',
    clientEmail: 'vikram@edumatrix.in',
    serviceId: 'ai-agents',
    serviceName: 'AI & Autonomous Agent Systems',
    selectedFeatures: ['Layer 6 Prompt Injection & Safety Guardrails', 'Layer 7 Semantic Vector Caching', 'Custom RAG Knowledge Base Pipeline'],
    estimatedDays: 12,
    estimatedCost: 5050,
    status: 'In Discussion',
    targetDeadline: 'Dec 02, 2026',
    createdAt: 'Nov 9, 2026',
    notes: 'School assessment AI agent evaluating student assignments with strict zero-mutation security.'
  },
  {
    id: 'inq-104',
    clientName: 'Ananya Roy (Vanguard Capital)',
    clientEmail: 'ananya@vanguardcap.com',
    serviceId: 'excel-bi',
    serviceName: 'Excel Dashboards & Business Intelligence',
    selectedFeatures: ['Automated VBA One-Click Data Cleansing', 'Dynamic Executive KPI Cockpit'],
    estimatedDays: 5,
    estimatedCost: 1400,
    status: 'Contract Signed',
    targetDeadline: 'Nov 16, 2026',
    createdAt: 'Nov 8, 2026',
    notes: 'Portfolio KPI consolidation sheet pulling raw trade data and computing IRR and VaR metrics.'
  }
];

export const MOCK_ORDER_MILESTONES: OrderMilestone[] = [
  {
    id: 'ord-801',
    orderNumber: 'ORD-2026-801',
    clientName: 'Vanguard Capital',
    projectTitle: 'Automated Portfolio KPI Dashboard',
    stage: 'Implementation',
    progressPercentage: 75,
    slaRemainingHours: 36,
    deadlineDate: 'Nov 16, 2026',
    status: 'In Progress',
    assignedLead: 'Sonu Jha'
  },
  {
    id: 'ord-802',
    orderNumber: 'ORD-2026-802',
    clientName: 'FinEdge Platforms',
    projectTitle: 'Multi-Tenant Institutional Portal',
    stage: 'Architecture',
    progressPercentage: 40,
    slaRemainingHours: 124,
    deadlineDate: 'Nov 20, 2026',
    status: 'In Progress',
    assignedLead: 'Sonu Jha'
  },
  {
    id: 'ord-803',
    orderNumber: 'ORD-2026-803',
    clientName: 'Dukaandaar Retail Mesh',
    projectTitle: 'Server-Driven UI Dynamic Core v2.4',
    stage: 'QA & Testing',
    progressPercentage: 92,
    slaRemainingHours: 14,
    deadlineDate: 'Nov 12, 2026',
    status: 'In Review',
    assignedLead: 'Sonu Jha'
  },
  {
    id: 'ord-804',
    orderNumber: 'ORD-2026-804',
    clientName: 'UsageDataTrack OS Engine',
    projectTitle: 'Android VPN Kernel Release v1.44',
    stage: 'Launched',
    progressPercentage: 100,
    slaRemainingHours: 0,
    deadlineDate: 'Nov 08, 2026',
    status: 'Delivered',
    assignedLead: 'Sonu Jha'
  }
];

export const FLAGSHIP_CASE_STUDIES: ProductCaseStudy[] = [
  {
    id: 'central-ai-hub',
    title: 'Central AI Hub',
    badge: 'Enterprise AI Stack',
    tagline: '8-Layer Production AI Stack with Semantic Vector Routing & MCP Execution',
    description: 'A hardened enterprise multi-agent hub that moves beyond naive LLM wrappers. Features Layer 6 Guardrails to prevent prompt injections, Layer 7 Semantic Vector Caching for $0 repeated query costs, Layer 5 RBAC OAuth 2.1 identity, and Layer 4 MCP tool calling directly into Spring Boot microservices with zero database pollution.',
    image: '/resources/images/system_design_workflow.jpg',
    imageCaption: 'Real Architecture Workflow: Ingestion &rarr; Layer 6 Guardrail &rarr; Semantic Vector Cache &rarr; Layer 4 MCP Command Dispatch &rarr; Distributed Tracing.',
    metrics: [
      { label: 'Query Cache Latency', value: '<15ms' },
      { label: 'Direct DB Mutations', value: '0' },
      { label: 'Repeated Query Token Cost', value: '$0.00' }
    ],
    highlights: [
      'Guaranteed Zero-Mutation Sandbox: Agent interacts exclusively through read-only command-pattern microservice endpoints.',
      'O(1) Command Pattern Dispatcher: High-speed Spring Boot tool dispatcher reusing proven enterprise Java services.',
      'Distributed OpenTelemetry Spans: End-to-end tracing capturing router latency, tool invocation, and SSE streaming.'
    ],
    techStack: ['Java 17', 'Spring Boot 3', 'MCP Protocol', 'Vector Caching', 'OpenTelemetry', 'SSE Streaming'],
    githubUrl: 'https://github.com/Issonujha/central-ai-hub'
  },
  {
    id: 'dukaandaar',
    title: 'Dukaandaar (दुकानदार)',
    badge: 'Server-Driven UI & Commerce',
    tagline: 'Distributed Retail Platform with Server-Driven UI (SDUI) Remote Hydration',
    description: 'A distributed retail commerce and distribution engine built around custom Server-Driven UI (`platform-sdui-core`). Allows real-time remote screen orchestration across React Native mobile (Android/iOS) and React 19 web without submitting new builds to App Stores. Backed by transactional MySQL 8.4 and atomic Redis locks.',
    image: '/resources/images/admin_mobile_ui_mockup.jpg',
    imageCaption: 'Mobile & Admin Console: Dynamic UI components hydrated on the fly from backend JSON declarative component trees.',
    metrics: [
      { label: 'App Store Review Delays', value: '0 Days' },
      { label: 'Client Platforms Hydrated', value: 'iOS, Android, Web' },
      { label: 'Inventory Concurrency', value: 'Atomic Lock' }
    ],
    highlights: [
      'Server-Driven UI Core: Shared cross-platform declarative component tree renderer (`platform-sdui-core`).',
      'Decoupled Microservice Suite: `auth-service`, `platform-auth-client`, `sca-job-agent`, and `rn-backend`.',
      'Atomic Inventory State Machine: Redis-backed state machine for carts and order fulfillment under concurrency.'
    ],
    techStack: ['Java 17', 'Spring Boot 3.3', 'React Native', 'React 19', 'MySQL 8.4', 'Redis 7', 'Nginx'],
    githubUrl: 'https://github.com/Issonujha/Dukaandaar'
  },
  {
    id: 'usage-data-track',
    title: 'UsageDataTrack',
    badge: 'Android OS & VPN Kernel',
    tagline: 'Native Android VPN Packet Firewall, SNI Inspection & Background Auto-Updater',
    description: 'A low-level Android system utility utilizing the VpnService API for granular per-app network packet inspection. Drops QUIC UDP 443 to enforce TLS SNI inspection, blocks background internet leakage, and features multi-tiered WorkManager background auto-update pipelines.',
    metrics: [
      { label: 'Active OS Builds', value: 'v1.11–v1.44' },
      { label: 'Packet Inspection', value: 'OS Hardware Level' },
      { label: 'Updater Pipeline', value: 'WorkManager + FCM' }
    ],
    highlights: [
      'VpnService Packet Filter: Intercepts network packets at the kernel level for granular per-app firewall enforcement.',
      'Resilient Auto-Update Engine: PackageInstaller broadcast receiver with direct system installer prompt fallback.',
      'Session Timeline Analyzer: Day-wise app session telemetry reconstructed from Android UsageStatsManager.'
    ],
    techStack: ['Android Native', 'Kotlin', 'Java', 'VpnService API', 'WorkManager', 'UsageStats API'],
    githubUrl: 'https://github.com/Issonujha/UsageDataTrack',
    apkUrl: '/apk/app-v1.44.apk'
  },
  {
    id: 'padhtai-hain',
    title: 'Padhtai-Hain (पढ़ते हैं)',
    badge: 'Enterprise EdTech Platform',
    tagline: 'Multi-Tenant School Management, Verified Study CMS & Telemetry Stream',
    description: 'Enterprise educational platform combining school administration, verified distraction-free study engines, and integrated AI tutoring adapters with real-time WebSocket telemetry.',
    metrics: [
      { label: 'Multi-Tenant Isolation', value: 'PostgreSQL JSONB' },
      { label: 'Realtime Push', value: 'STOMP / SockJS' },
      { label: 'Companion Integration', value: 'UsageDataTrack' }
    ],
    highlights: [
      'Multi-Tenant School Isolation: Fine-grained RBAC separating schools, teachers, students, and parents.',
      'Verified Study Engine: Integrated with UsageDataTrack Android telemetry to verify student study streaks.',
      'Fleet & Transport Tracking: Real-time vehicle GPS caching in Redis with WebSocket push alerts.'
    ],
    techStack: ['Java 21', 'Spring Boot 3.3', 'PostgreSQL 16', 'Redis 7', 'WebSockets', 'React', 'MinIO'],
    githubUrl: 'https://github.com/Issonujha/padhtai-hain'
  }
];

export const APK_RELEASES_LIST = [
  {
    version: "v1.44",
    date: "Nov 2024",
    fileSize: "11 MB",
    highlights: "Multi-layer background auto-update via WorkManager and FCM trigger; uninstalled app reconciliation.",
    downloadUrl: "/apk/app-v1.44.apk"
  },
  {
    version: "v1.43",
    date: "Nov 2024",
    fileSize: "10 MB",
    highlights: "Automatic full scan uninstalled app reconciliation and reinstallation badges.",
    downloadUrl: "/apk/app-v1.43.apk"
  },
  {
    version: "v1.40",
    date: "Oct 2024",
    fileSize: "10 MB",
    highlights: "Samsung per-app data usage fallback and PM session timeline navigation fix.",
    downloadUrl: "/apk/app-v1.40.apk"
  },
  {
    version: "v1.35",
    date: "Oct 2024",
    fileSize: "10 MB",
    highlights: "Robust VPN tunnel, speed throttling, and auto-prompt installer.",
    downloadUrl: "/apk/app-v1.35.apk"
  },
  {
    version: "v1.30",
    date: "Oct 2024",
    fileSize: "10 MB",
    highlights: "Separate Screen Lock and Internet Killswitch; app-wise network firewall.",
    downloadUrl: "/apk/app-v1.30.apk"
  }
];
