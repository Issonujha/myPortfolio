export interface Project {
  id: string;
  title: string;
  year: string;
  role: string;
  summary: string;
  description: string;
  techStack: string[];
  metrics?: string[];
  highlights?: string[];
  githubUrl?: string;
  demoUrl?: string;
  apkDownloadUrl?: string;
  architectureDetails?: {
    layers?: string[];
    guarantees?: string[];
  };
}

export interface ExperienceItem {
  period: string;
  role: string;
  company: string;
  companyUrl?: string;
  location: string;
  summary: string;
  bullets: string[];
  skills: string[];
}

export interface ApkItem {
  version: string;
  date: string;
  fileSize: string;
  highlights: string;
  downloadUrl: string;
}

export const PORTFOLIO_CONTENT = {
  profile: {
    name: "Sonu Kumar Jha",
    title: "Software Engineer & Systems Architect",
    tagline: "I build resilient backend microservices, server-driven UI platforms, and autonomous multi-agent AI architectures.",
    about1: "I am a software engineer with over 1.5+ years of production experience at Actolap Solutions and lead architect across independent enterprise platforms. My work centers on distributed systems, resilient Java/Spring Boot microservices, high-concurrency event loops, and type-safe client architectures.",
    about2: "Lately, I've been focused on bridging LLM reasoning loops with deterministic backend architectures: designing an 8-Layer Enterprise AI Stack with zero-mutation guardrails, building Server-Driven UI (SDUI) platforms (`Dukaandaar`) that render dynamic mobile and web interfaces without app-store releases, and engineering low-level Android VPN packet filtering utilities (`UsageDataTrack`).",
    about3: "When I'm not writing code, I enjoy deep-diving into system design, network protocols, Linux kernel behavior, and contributing to open-source developer tooling.",
    email: "sjha9563@gmail.com",
    github: "https://github.com/Issonujha",
    linkedin: "https://www.linkedin.com/in/sonu-jha-633765167/",
    location: "Noida / Delhi NCR, India",
    resumeUrl: "https://bit.ly/sonuJhaResume2024",
  },

  navigation: [
    { label: "About", href: "#about" },
    { label: "Experience", href: "#experience" },
    { label: "Projects", href: "#projects" },
    { label: "Architecture", href: "#architecture" },
    { label: "Android APKs", href: "#apks" },
    { label: "Skills", href: "#skills" },
  ],

  experiences: [
    {
      period: "2023 — PRESENT",
      role: "Software Developer",
      company: "Actolap Solutions Pvt. Ltd.",
      location: "Noida, India",
      summary: "Engineer high-throughput enterprise backend microservices, RESTful APIs, and cross-platform integrations across Ad Tech and IoT domains.",
      bullets: [
        "Architected and deployed distributed Spring Boot microservices utilizing Netflix Eureka for service discovery, Feign Clients for declarative RPC, and Hystrix circuit breakers for zero-downtime failover.",
        "Designed and implemented stateless JWT and OAuth 2.0 authentication filters with fine-grained role-based access control (RBAC).",
        "Optimized relational database queries and indices across MySQL, significantly cutting query latency on high-volume reporting endpoints.",
        "Collaborated across full-stack initiatives with React and TypeScript, delivering robust user interfaces integrated with backend microservices."
      ],
      skills: ["Java 17", "Spring Boot", "Microservices", "Eureka", "Feign", "Hystrix", "MySQL", "Redis", "React", "TypeScript", "Docker"]
    },
    {
      period: "2024 — PRESENT",
      role: "Lead Platform Architect",
      company: "Dukaandaar & Central AI Hub Initiatives",
      location: "Noida, India",
      summary: "Spearheaded system architecture for retail commerce, Server-Driven UI (SDUI), and production multi-agent AI ecosystems.",
      bullets: [
        "Authored the complete 8-Layer Enterprise AI Stack specification with semantic vector caching, complexity-based model routing, and O(1) MCP tool execution.",
        "Developed `platform-sdui-core`, an engine delivering declarative UI component trees to React Native (Android/iOS) and React 19 web clients.",
        "Built UsageDataTrack (v1.11–v1.44), an Android system utility with hardware VPN packet inspection and WorkManager multi-tier auto-updates."
      ],
      skills: ["System Architecture", "Multi-Agent AI", "SDUI", "React Native", "Spring Boot 3.3", "Android VpnService", "Redis"]
    }
  ] as ExperienceItem[],

  projects: [
    {
      id: "central-ai-hub",
      title: "Central AI Hub & Multi-Agent Network",
      year: "2025–2026",
      role: "Lead Architect",
      summary: "Enterprise 8-layer production AI stack with semantic vector caching, complexity model cascades, and zero-mutation MCP tool execution.",
      description: "A hardened production AI framework that moves beyond naive LLM wrappers. Implements an 8-layer pipeline: Layer 6 Guardrails (input classifiers & injection blocks), Layer 7 Semantic Cache & Model Router, Layer 5 RBAC OAuth 2.1 identity propagation, Layer 4 MCP internal service execution via Spring Boot command pattern, and Layer 8 OpenTelemetry distributed tracing.",
      techStack: ["Spring Boot 3", "Model Context Protocol", "Semantic Vector Cache", "OpenTelemetry", "SSE", "Java 17"],
      githubUrl: "https://github.com/Issonujha/central-ai-hub",
      highlights: [
        "Guaranteed Zero-Mutation Sandbox: AI agent interacts purely through read-only command-pattern microservices.",
        "$0 Token Semantic Caching: Re-queries resolved locally via cosine vector similarity matching.",
        "OpenTelemetry Distributed Tracing: Full observability covering prompt ingestion, router latency, tool dispatch, and SSE streaming."
      ],
      architectureDetails: {
        layers: [
          "Layer 6: Guardrails & Prompt Injection Classifier",
          "Layer 7: Semantic Vector Cache & Complexity Router",
          "Layer 5: RBAC & OAuth 2.1 Identity Propagation",
          "Layer 2: Grounded System Persona & Instruction Builder",
          "Layer 3: RAG & Structured Knowledge Base Schemas",
          "Layer 4: MCP Tools & Internal Service Execution (:8080)",
          "Layer 1: Raw Model Generation with Chunked SSE Streaming",
          "Layer 8: Observability, Distributed Tracing & Evals"
        ],
        guarantees: [
          "Zero Direct Database Access by AI Agent",
          "O(1) Command Pattern Tool Dispatching",
          "Deterministic Tool Parameter Grounding"
        ]
      }
    },
    {
      id: "dukaandaar",
      title: "Dukaandaar (दुकानदार) SDUI Commerce",
      year: "2024–2026",
      role: "Platform Architect",
      summary: "Distributed hyper-local B2B/B2C commerce engine powered by a custom Server-Driven UI (`platform-sdui-core`) framework.",
      description: "Engineered a distributed retail platform that solves client deployment lag through Server-Driven UI. The backend dynamically composes and delivers JSON component trees, allowing real-time screen reconfigurations on React Native mobile and React 19 web without submitting new builds to app stores. Backed by transactional MySQL 8.4, MongoDB for dynamic catalogs, and Redis for atomic inventory locks.",
      techStack: ["Java 17", "Spring Boot 3.3", "React Native", "React 19", "MySQL 8.4", "Redis 7", "Nginx"],
      githubUrl: "https://github.com/Issonujha/Dukaandaar",
      highlights: [
        "Server-Driven UI Core: Shared cross-platform declarative component tree renderer (`platform-sdui-core`).",
        "Decoupled Microservice Suite: `auth-service`, `platform-auth-client`, `sca-job-agent`, and `rn-backend`.",
        "Atomic Inventory Locking: Redis-backed state machine for carts and order fulfillment under concurrency."
      ]
    },
    {
      id: "usage-data-track",
      title: "UsageDataTrack: Android Network Firewall",
      year: "2024–2025",
      role: "Android Engineer",
      summary: "Native Android utility with hardware VPN packet filtering, per-app internet killswitch, and WorkManager background auto-updater.",
      description: "Low-level Android application utilizing the `VpnService` API to inspect packets and enforce granular per-app internet blocks. Drops QUIC UDP 443 to force TLS SNI inspection, fixes false-positive URL blocking from homepage shortcut tiles, and runs multi-tiered background auto-updates via WorkManager and FCM triggers.",
      techStack: ["Android Native", "Kotlin / Java", "VpnService API", "WorkManager", "UsageStats API"],
      apkDownloadUrl: "/apk/app-v1.44.apk",
      githubUrl: "https://github.com/Issonujha/UsageDataTrack",
      highlights: [
        "VpnService Packet Filter: Intercepts network packets at OS layer to provide granular per-app firewall enforcement.",
        "Resilient Auto-Update Engine: WorkManager multi-tier auto-updater with direct system installer prompt.",
        "Session Timeline: Day-wise app session telemetry reconstructed from UsageStatsManager."
      ]
    },
    {
      id: "enterprise-microservices",
      title: "Resilient Microservices Hub & Okta Auth",
      year: "2024",
      role: "Backend Engineer",
      summary: "High-availability microservice cluster with Netflix Eureka service discovery, Feign RPC, Hystrix fallback, and Okta RBAC.",
      description: "Demonstrated production microservices architecture implementing dynamic service discovery, declarative inter-service Feign communication, and Hystrix circuit-breaker fallback patterns to eliminate single points of failure. Enforces enterprise authentication using Okta OAuth 2.0 with downstream stateless JWT propagation.",
      techStack: ["Java Spring Boot", "Netflix Eureka", "Feign Client", "Hystrix", "Okta Auth", "JWT", "RestTemplate"],
      githubUrl: "https://github.com/Issonujha/Microservices-Eureka-Hystrix-Feign-Client-or-RestTemplate",
      highlights: [
        "Fault-Tolerant Circuit Breakers: Automatic fallback routing preventing cascade outages across downstream microservices.",
        "Enterprise RBAC: Dual Okta and JWT authentication pipeline with stateless token validation."
      ]
    }
  ] as Project[],

  skills: [
    {
      category: "Languages & Runtimes",
      items: ["Java (8, 17, 21)", "TypeScript", "JavaScript (ES6+)", "Kotlin", "SQL", "HTML5 & CSS3"]
    },
    {
      category: "Backend & Microservices",
      items: ["Spring Boot 3.x", "Spring Cloud (Eureka, Feign, Hystrix)", "RESTful APIs", "Redis", "MySQL", "MongoDB", "OAuth 2.1 & JWT", "Node.js"]
    },
    {
      category: "Frontend & Mobile",
      items: ["Server-Driven UI (SDUI)", "React 19 & Next.js", "React Native (Expo / Bare)", "Android Native (VpnService, WorkManager)", "Tailwind CSS"]
    },
    {
      category: "AI & Systems Architecture",
      items: ["Multi-Agent AI Systems", "8-Layer AI Architecture", "Model Context Protocol (MCP)", "Semantic Vector Caching", "OpenTelemetry Tracing", "Docker"]
    }
  ],

  apks: [
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
  ] as ApkItem[],
};
