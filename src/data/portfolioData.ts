export interface Project {
  id: string;
  title: string;
  tagline: string;
  category: 'AI & Systems' | 'SDUI & Platforms' | 'Android & OS' | 'Microservices';
  featured: boolean;
  year: string;
  role: string;
  metrics?: string[];
  techStack: string[];
  description: string;
  architectureDetails?: {
    layers?: string[];
    highlights: string[];
    systemDiagram?: string;
  };
  githubUrl?: string;
  demoUrl?: string;
  apkDownloadUrl?: string;
  image?: string;
}

export interface SkillCategory {
  title: string;
  description: string;
  skills: { name: string; level: 'Expert' | 'Advanced' | 'Proficient'; highlight?: boolean }[];
}

export interface Experience {
  period: string;
  role: string;
  company: string;
  location: string;
  summary: string;
  bullets: string[];
  technologies: string[];
}

export interface ApkRelease {
  version: string;
  releaseDate: string;
  highlights: string;
  downloadUrl: string;
  fileSize: string;
}

export const PORTFOLIO_DATA = {
  personal: {
    name: "Sonu Kumar Jha",
    title: "AI Systems & Distributed Platforms Architect",
    location: "Noida / Delhi NCR, India (Available Globally)",
    email: "sjha9563@gmail.com",
    github: "https://github.com/Issonujha",
    linkedin: "https://www.linkedin.com/in/sonu-jha-633765167/",
    bio: "Systems architect and full-stack engineer specializing in Autonomous Multi-Agent AI architectures, Server-Driven UI (SDUI) platforms, and low-level Android network engines. Expert in Java/Spring Boot microservices, high-concurrency event loops, and type-safe modern frontend ecosystems.",
    resumeUrl: "https://bit.ly/sonuJhaResume2024",
    avatar: "/resources/images/profile_photo.jpeg",
  },

  stats: [
    { label: "Production Microservices", value: "15+" },
    { label: "Agentic Layers Architected", value: "8-Layer" },
    { label: "Android Systems Engine", value: "v1.44" },
    { label: "Architecture Latency Target", value: "<150ms" },
  ],

  projects: [
    {
      id: "central-ai-hub",
      title: "Central AI Hub & Multi-Agent Network",
      tagline: "Enterprise 8-Layer AI Stack with Semantic Routing, Model Cascades & MCP Tools",
      category: "AI & Systems",
      featured: true,
      year: "2025–2026",
      role: "Lead Systems Architect",
      metrics: ["$0 cache hits for repeated queries", "8-Layer zero-mutation safety", "Deterministic tool dispatch"],
      techStack: ["Multi-Agent AI", "Spring Boot 3", "Model Context Protocol (MCP)", "Semantic Vector Cache", "OpenTelemetry", "SSE Streaming"],
      description: "A production-grade, multi-agent AI hub designed for cross-platform enterprise orchestration. Replaces naive LLM wrappers with an 8-layer hardened stack: input guardrails, semantic vector caching, complexity-based model routing (Gemini Flash / DeepSeek), strict RBAC OAuth 2.1 identity, MCP tool dispatching, and distributed OpenTelemetry tracing.",
      architectureDetails: {
        layers: [
          "Layer 6: Guardrails & Read-Only Safety Enforcers",
          "Layer 7: Semantic Vector Cache & Complexity Router",
          "Layer 5: RBAC & OAuth 2.1 Identity Propagation",
          "Layer 2: Grounded System Persona & Instruction Builder",
          "Layer 3: RAG & Structured Knowledge Base Schemas",
          "Layer 4: MCP Tools & Internal Service Execution (:8080 / :8081)",
          "Layer 1: Raw Model Generation with Chunked SSE Streaming",
          "Layer 8: Observability, Distributed Tracing & CI Benchmark Evals",
        ],
        highlights: [
          "Zero Direct Database Mutation: Agent interacts exclusively through verified microservice command patterns.",
          "O(1) Tool Dispatcher: Command pattern in Spring Boot reusing existing enterprise Java services.",
          "Distributed Tracing: End-to-end spans tracing user prompt → vector cache → model router → MCP tool → SSE stream."
        ]
      },
      githubUrl: "https://github.com/Issonujha/central-ai-hub",
    },
    {
      id: "dukaandaar",
      title: "Dukaandaar (दुकानदार) SDUI Platform",
      tagline: "Distributed B2B/B2C Commerce & Server-Driven UI (SDUI) Framework",
      category: "SDUI & Platforms",
      featured: true,
      year: "2024–2026",
      role: "Principal Platform Architect",
      metrics: ["Multi-tenant isolation", "Shared Mobile + Web SDUI Core", "Zero app release UI updates"],
      techStack: ["Java 17", "Spring Boot 3.3", "React 19", "React Native", "MySQL 8.4", "MongoDB", "Redis 7", "Nginx"],
      description: "A hyper-local B2B/B2C retail commerce and distribution engine built around a custom Server-Driven UI (SDUI) architecture (`platform-sdui-core`). Allows real-time remote screen orchestration across React Native mobile and React 19 web without app-store redeployments. Backed by transactional MySQL 8.4, Redis caching, and decoupled auth client libraries.",
      architectureDetails: {
        highlights: [
          "Server-Driven UI Engine: Backend delivers declarative component trees directly rendered by native clients.",
          "Decoupled Microservice Suite: `auth-service`, `platform-auth-client`, `sca-job-agent`, and `rn-backend`.",
          "High Concurrency Order Pipeline: Redis-backed state machine for carts, atomic stock locking, and instant payments."
        ]
      },
      githubUrl: "https://github.com/Issonujha/Dukaandaar",
    },
    {
      id: "usage-data-track",
      title: "UsageDataTrack: Android OS Network Engine",
      tagline: "Native Android VPN Tunnel, Per-App Firewall & Automated Lifecycle Deployer",
      category: "Android & OS",
      featured: true,
      year: "2024–2025",
      role: "Core Android Engineer",
      metrics: ["Multi-layer WorkManager & FCM auto-updates", "Hardware packet inspection", "Samsung fallback support"],
      techStack: ["Android Native", "Kotlin / Java", "VpnService API", "Network Packet Filtering", "WorkManager", "UsageStats API"],
      description: "A low-level Android utility and security application featuring a custom VPN tunnel for granular per-app internet cutoff and packet inspection. Includes WorkManager multi-tier silent background auto-updates, anti-tamper update blockers, Chrome homepage shortcut tile false-positive fixes, and Samsung per-app data usage fallbacks.",
      architectureDetails: {
        highlights: [
          "Hardware VPN Packet Filter: Drops QUIC UDP 443 to enforce TLS SNI inspection and individual package traffic blocking.",
          "Resilient Background Updater: PackageInstaller broadcast receiver with direct system installer fallback.",
          "Session Timeline Analyzer: Day-wise session timeline navigation synced from Android UsageStatsManager."
        ]
      },
      apkDownloadUrl: "/apk/app-v1.44.apk",
      githubUrl: "https://github.com/Issonujha/UsageDataTrack",
    },
    {
      id: "enterprise-microservices",
      title: "Resilient Microservices Hub & Okta Auth",
      tagline: "Eureka Service Discovery, Feign Client Communication & Hystrix Circuit Breakers",
      category: "Microservices",
      featured: true,
      year: "2024",
      role: "Backend Engineer",
      metrics: ["Zero downtime failover", "Circuit breaker fallback paths", "Okta & JWT enterprise RBAC"],
      techStack: ["Java Spring Boot", "Netflix Eureka", "Feign Client", "Hystrix", "Okta Auth", "JWT", "RestTemplate"],
      description: "High-availability enterprise microservice framework implementing Netflix OSS Eureka for dynamic service discovery, Feign Clients for declarative RPC, Hystrix circuit breakers for graceful degradation, and dual Okta/JWT authentication for strict role-based authorization.",
      architectureDetails: {
        highlights: [
          "Circuit Breaker Resilience: Automated trip-and-fallback logic preventing cascading service failures.",
          "Enterprise Token Pipeline: Okta OAuth 2.0 integration with stateless JWT validation across distributed downstream nodes."
        ]
      },
      githubUrl: "https://github.com/Issonujha/Microservices-Eureka-Hystrix-Feign-Client-or-RestTemplate",
    },
    {
      id: "padhtai-hain",
      title: "Padhtai Hain: EdTech Ecosystem",
      tagline: "Interactive Assessment Architecture with Real-Time Analytics",
      category: "SDUI & Platforms",
      featured: false,
      year: "2024–2025",
      role: "Full-Stack Architect",
      techStack: ["Spring Boot", "React", "TypeScript", "Tailwind CSS", "PostgreSQL", "SSE"],
      description: "Comprehensive educational platform offering interactive classroom experiences, progress metrics, and integrated AI tutoring adapters with real-time streaming feedback.",
      githubUrl: "https://github.com/Issonujha/padhtai-hain",
    }
  ] as Project[],

  skills: [
    {
      title: "AI & Agentic Architectures",
      description: "Production LLM systems, cognitive architectures, and agentic tool dispatching.",
      skills: [
        { name: "Autonomous Multi-Agent Networks", level: "Expert", highlight: true },
        { name: "8-Layer Production AI Stack", level: "Expert", highlight: true },
        { name: "Model Context Protocol (MCP)", level: "Advanced", highlight: true },
        { name: "Semantic Vector Caching", level: "Advanced" },
        { name: "Prompt Injection & Safety Guardrails", level: "Advanced" },
        { name: "OpenTelemetry AI Tracing", level: "Advanced" },
      ]
    },
    {
      title: "Backend & Distributed Systems",
      description: "High-throughput services, event-driven pipelines, and transactional reliability.",
      skills: [
        { name: "Java 17+ / Spring Boot 3.x", level: "Expert", highlight: true },
        { name: "Distributed Microservices Architecture", level: "Expert", highlight: true },
        { name: "RESTful API & GraphQL Design", level: "Expert" },
        { name: "Redis (Caching, Pub/Sub, Queues)", level: "Advanced" },
        { name: "MySQL 8 / PostgreSQL", level: "Advanced" },
        { name: "OAuth 2.1 & JWT Security", level: "Expert", highlight: true },
        { name: "Node.js & Express / NestJS", level: "Advanced" },
      ]
    },
    {
      title: "Mobile & Frontend Engineering",
      description: "Server-Driven UI engines, native mobile internals, and modern reactive interfaces.",
      skills: [
        { name: "Server-Driven UI (SDUI) Engines", level: "Expert", highlight: true },
        { name: "React 19 & Next.js", level: "Expert", highlight: true },
        { name: "React Native (Expo / Bare)", level: "Advanced" },
        { name: "Native Android (Java/Kotlin, VPN, NDK)", level: "Advanced", highlight: true },
        { name: "TypeScript & State Management", level: "Expert" },
        { name: "Tailwind CSS & Modern UX", level: "Expert" },
      ]
    },
    {
      title: "DevOps & Cloud Infrastructure",
      description: "Continuous delivery, containerization, and reverse proxy topology.",
      skills: [
        { name: "Docker & Container Orchestration", level: "Advanced" },
        { name: "Nginx (Reverse Proxy, SSL, Upstreams)", level: "Advanced" },
        { name: "Linux / macOS Systems Engineering", level: "Advanced" },
        { name: "GitHub Actions CI/CD", level: "Advanced" },
        { name: "Firebase (Auth, Storage, RTDB)", level: "Advanced" },
      ]
    }
  ] as SkillCategory[],

  experience: [
    {
      period: "2023 – Present",
      role: "Software Developer & Systems Architect",
      company: "Actolap Solutions Pvt. Ltd.",
      location: "Noida, India",
      summary: "Designing enterprise software architectures, building distributed microservices, and leading system integrations across Ad Tech, IoT, and high-concurrency client solutions.",
      bullets: [
        "Architected scalable backend microservices utilizing Spring Boot, Eureka service discovery, and Feign client IPC.",
        "Engineered RESTful APIs with fine-grained JWT role-based access control (RBAC) and OAuth 2.0.",
        "Implemented high-performance asynchronous data processing routines and optimized database queries.",
        "Collaborated across full-stack initiatives combining modern React/TypeScript frontends with robust Java services.",
      ],
      technologies: ["Java 17", "Spring Boot", "Microservices", "React", "TypeScript", "Redis", "MySQL", "Docker"]
    },
    {
      period: "2024 – Present",
      role: "Founder & Lead Architect",
      company: "Dukaandaar & Central AI Hub Initiatives",
      location: "Noida, India",
      summary: "Spearheading the architecture of modern AI-first products, custom Server-Driven UI frameworks, and native Android security tools.",
      bullets: [
        "Authored the complete 8-Layer Enterprise AI Stack specification with semantic vector caching and MCP execution.",
        "Created `platform-sdui-core` enabling dynamic UI delivery for retail platforms without native app re-releases.",
        "Developed UsageDataTrack (v1.11–v1.44) with native Android VPN traffic filtering and WorkManager auto-updates.",
      ],
      technologies: ["AI Agents", "SDUI", "React Native", "Android VpnService", "Spring Boot 3", "Tailwind CSS"]
    }
  ] as Experience[],

  apkReleases: [
    {
      version: "v1.44",
      releaseDate: "Nov 2024",
      highlights: "Multi-layer background auto-update via WorkManager and FCM trigger",
      downloadUrl: "/apk/app-v1.44.apk",
      fileSize: "11 MB"
    },
    {
      version: "v1.43",
      releaseDate: "Nov 2024",
      highlights: "Automatic full scan uninstalled app reconciliation",
      downloadUrl: "/apk/app-v1.43.apk",
      fileSize: "10 MB"
    },
    {
      version: "v1.40",
      releaseDate: "Oct 2024",
      highlights: "Samsung per-app data usage fallback & PM session timeline order",
      downloadUrl: "/apk/app-v1.40.apk",
      fileSize: "10 MB"
    },
    {
      version: "v1.35",
      releaseDate: "Oct 2024",
      highlights: "Robust VPN tunnel, speed throttling and auto-prompt dialog",
      downloadUrl: "/apk/app-v1.35.apk",
      fileSize: "10 MB"
    },
    {
      version: "v1.30",
      releaseDate: "Oct 2024",
      highlights: "Screen Lock and Internet Killswitch with app-wise firewall",
      downloadUrl: "/apk/app-v1.30.apk",
      fileSize: "10 MB"
    }
  ] as ApkRelease[],
};
