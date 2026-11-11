export interface ProductShowcase {
  id: string;
  name: string;
  badge: string;
  headline: string;
  subhead: string;
  role: string;
  period: string;
  stats: { label: string; value: string }[];
  image?: string;
  imageCaption?: string;
  codeSnippet?: {
    language: string;
    filename: string;
    code: string;
  };
  features: { title: string; desc: string }[];
  techStack: string[];
  githubUrl?: string;
  apkDownloadUrl?: string;
}

export interface ExperienceItem {
  period: string;
  role: string;
  company: string;
  location: string;
  summary: string;
  bullets: string[];
  techStack: string[];
}

export interface ApkRelease {
  version: string;
  date: string;
  fileSize: string;
  highlights: string;
  downloadUrl: string;
}

export const PORTFOLIO_DATA = {
  profile: {
    name: "Sonu Kumar Jha",
    title: "Lead Software Engineer & Systems Architect",
    location: "Noida / Delhi NCR, India (Available Globally)",
    email: "sjha9563@gmail.com",
    github: "https://github.com/Issonujha",
    linkedin: "https://www.linkedin.com/in/sonu-jha-633765167/",
    resumeUrl: "/resources/Sonu_Kumar_Jha_Resume.pdf",
    avatar: "/resources/images/profile_photo.jpeg",
    bio: "Lead software engineer and systems architect with 3.5+ years of enterprise experience across Kaptune Media and Actolap Solutions. Specializing in Java 17/21, Spring Boot 3 microservices, high-scale fintech payment engines, Server-Driven UI (SDUI), and production Multi-Agent AI systems with zero-mutation guardrails."
  },

  metrics: [
    { label: "Microservices Architected", value: "15+" },
    { label: "Production AI Layers", value: "8-Layer" },
    { label: "Android Systems Releases", value: "v1.44" },
    { label: "Query Cache Hit Latency", value: "<15ms" },
  ],

  products: [
    {
      id: "central-ai-hub",
      name: "Central AI Hub",
      badge: "Enterprise AI Architecture",
      headline: "The 8-Layer Production AI Stack",
      subhead: "Deterministic, zero-mutation Multi-Agent AI system with semantic vector caching, complexity-based model cascades, and O(1) MCP tool execution.",
      role: "Lead Systems Architect",
      period: "2025–2026",
      stats: [
        { label: "Semantic Cache Miss RTT", value: "42ms" },
        { label: "Direct DB Mutations", value: "0" },
        { label: "Safety Pipeline Latency", value: "1.4ms" },
      ],
      image: "/resources/images/system_design_workflow.jpg",
      imageCaption: "System Design Workflow: Request Ingestion, Layer 6 Guardrails, Semantic Vector Cache, and MCP Command Pattern Dispatch.",
      features: [
        {
          title: "Layer 6 Input Guardrails",
          desc: "Classifies incoming requests to block jailbreaks, SQL injections, and enforce strict read-only execution."
        },
        {
          title: "Layer 7 Semantic Vector Cache",
          desc: "Cosine vector similarity lookup resolves repeated queries with $0 token cost and sub-15ms latency."
        },
        {
          title: "Layer 4 MCP Tool Dispatch",
          desc: "Dispatches commands to internal Spring Boot services (:8080 / :8081) using command patterns, eliminating database pollution."
        },
        {
          title: "Layer 8 OpenTelemetry Tracing",
          desc: "Distributed tracing spans tracking request traversal from edge proxy through router to SSE stream."
        }
      ],
      codeSnippet: {
        language: "java",
        filename: "CentralToolDispatcher.java",
        code: `@Service\npublic class CentralToolDispatcher implements ToolExecutor {\n    private final Map<String, ServiceCommand> commandRegistry;\n\n    @Override\n    public ToolResult dispatch(ToolRequest request, SecurityContext context) {\n        // Enforce RBAC & Zero-Mutation Policy\n        if (!context.hasRole("ROLE_ADMIN")) {\n            throw new AccessDeniedException("Unauthorized agent tool execution");\n        }\n        ServiceCommand command = commandRegistry.get(request.getToolName());\n        return command.executeReadOnly(request.getParameters());\n    }\n}`
      },
      techStack: ["Java 17", "Spring Boot 3", "Model Context Protocol", "Semantic Vector Cache", "OpenTelemetry", "SSE", "OAuth 2.1"],
      githubUrl: "https://github.com/Issonujha/central-ai-hub",
    },
    {
      id: "dukaandaar",
      name: "Dukaandaar (दुकानदार)",
      badge: "Server-Driven UI & Commerce",
      headline: "Distributed Retail & SDUI Framework",
      subhead: "A high-scale B2B/B2C retail commerce and distribution engine powered by a shared cross-platform Server-Driven UI (`platform-sdui-core`) engine.",
      role: "Platform Architect",
      period: "2024–2026",
      stats: [
        { label: "App Store Deployments Required", value: "0" },
        { label: "Client Platforms Hydrated", value: "iOS, Android, Web" },
        { label: "Inventory Concurrency State", value: "Atomic" },
      ],
      image: "/resources/images/admin_mobile_ui_mockup.jpg",
      imageCaption: "Mobile & Admin Console: Dynamic UI components rendered dynamically from backend JSON declarative trees.",
      features: [
        {
          title: "Server-Driven UI Engine",
          desc: "Backend composes declarative JSON component trees hydrated on React Native (iOS/Android) and React 19 web without app store review delays."
        },
        {
          title: "Decoupled Microservice Suite",
          desc: "Isolated services for authentication (`auth-service`), client SDKs (`platform-auth-client`), and background jobs (`sca-job-agent`)."
        },
        {
          title: "Atomic Inventory Locking",
          desc: "Redis-backed state machine manages carts and orders, guaranteeing atomic inventory reservation under concurrency."
        }
      ],
      codeSnippet: {
        language: "json",
        filename: "sdui-schema.json",
        code: `{\n  "type": "SCREEN_LAYOUT",\n  "version": "2.4.0",\n  "components": [\n    {\n      "widget": "INVENTORY_METRIC_CARD",\n      "title": "North Hub Stock",\n      "props": { "sku": 9482, "available": 1420, "status": "OPTIMAL" }\n    },\n    {\n      "widget": "DYNAMIC_ACTION_GRID",\n      "actions": ["REORDER_STOCK", "GENERATE_REPORT", "DISPATCH_DELIVERY"]\n    }\n  ]\n}`
      },
      techStack: ["Java 17", "Spring Boot 3.3", "React Native", "React 19", "MySQL 8.4", "Redis 7", "Nginx"],
      githubUrl: "https://github.com/Issonujha/Dukaandaar",
    },
    {
      id: "usage-data-track",
      name: "UsageDataTrack",
      badge: "Android OS & Security",
      headline: "Hardware VPN Packet Firewall & Auto-Updater",
      subhead: "Low-level Android security and telemetry utility featuring custom VPN packet filtering, QUIC UDP 443 termination, and multi-tier background auto-updates.",
      role: "Core Android Engineer",
      period: "2024–2025",
      stats: [
        { label: "Active Production Builds", value: "v1.11–v1.44" },
        { label: "OS Network Interception", value: "Hardware Level" },
        { label: "Background Auto-Updater", value: "WorkManager + FCM" },
      ],
      features: [
        {
          title: "OS VPN Packet Filtering",
          desc: "Utilizes Android VpnService to intercept and enforce granular per-app network firewalls and internet killswitches."
        },
        {
          title: "QUIC UDP 443 Termination",
          desc: "Drops QUIC UDP 443 packets to enforce TLS SNI inspection and prevent encrypted bypass tunnels."
        },
        {
          title: "WorkManager Auto-Updater",
          desc: "Multi-layered background update pipeline using PackageInstaller broadcasts and direct system installer prompts."
        }
      ],
      codeSnippet: {
        language: "kotlin",
        filename: "VpnTunnelService.kt",
        code: `class VpnTunnelService : VpnService() {\n    private fun configureTunnel(builder: Builder): ParcelFileDescriptor {\n        return builder\n            .addAddress("10.0.0.2", 32)\n            .addRoute("0.0.0.0", 0)\n            .addDisallowedApplication(packageName)\n            .setBlocking(true)\n            .establish()!!\n    }\n}`
      },
      techStack: ["Android Native", "Kotlin", "Java", "VpnService API", "WorkManager", "UsageStats API"],
      githubUrl: "https://github.com/Issonujha/UsageDataTrack",
      apkDownloadUrl: "/apk/app-v1.44.apk",
    },
    {
      id: "enterprise-microservices",
      name: "Resilient Microservices Hub",
      badge: "Distributed Systems & Identity",
      headline: "Eureka Discovery, Feign RPC & Okta Auth",
      subhead: "High-availability enterprise microservice framework with service discovery, fault-tolerant circuit breaking, and dual Okta/JWT token validation.",
      role: "Backend Engineer",
      period: "2024",
      stats: [
        { label: "Failover Downtime", value: "0ms" },
        { label: "Stateless Token Validation", value: "JWT + Okta" },
        { label: "RPC Protocol", value: "Declarative Feign" },
      ],
      features: [
        {
          title: "Service Discovery with Eureka",
          desc: "Dynamic registration and heartbeat discovery across distributed service nodes, eliminating hardcoded host mappings."
        },
        {
          title: "Circuit Breakers with Hystrix",
          desc: "Automated trip-and-fallback logic preventing cascade outages when downstream dependencies experience latency."
        },
        {
          title: "Enterprise Identity Pipeline",
          desc: "Okta OAuth 2.0 integration with downstream stateless JWT propagation and fine-grained RBAC filters."
        }
      ],
      codeSnippet: {
        language: "java",
        filename: "UserServiceClient.java",
        code: `@FeignClient(name = "auth-service", fallback = AuthFallback.class)\npublic interface UserServiceClient {\n    @GetMapping("/api/v1/auth/verify")\n    UserClaims verifyToken(@RequestHeader("Authorization") String token);\n}`
      },
      techStack: ["Java Spring Boot", "Netflix Eureka", "Feign Client", "Hystrix", "Okta Auth", "JWT", "Redis"],
      githubUrl: "https://github.com/Issonujha/Microservices-Eureka-Hystrix-Feign-Client-or-RestTemplate",
    }
  ] as ProductShowcase[],

  experiences: [
    {
      period: "June 2026 — Present",
      role: "Lead Software Engineer",
      company: "Kaptune Media India Pvt. Ltd.",
      location: "Noida, India",
      summary: "Lead engineering roadmap, sprint planning, and architectural governance for cross-functional pods delivering enterprise B2B SaaS.",
      bullets: [
        "Direct technical architecture and roadmap for a team of 6+ developers, ensuring 100% on-time milestone delivery.",
        "Spearhead core microservice migration to Java 17/21 and Spring Boot 3 with virtual threads, boosting throughput by 25%.",
        "Enforce automated CI/CD pipelines, strict code reviews, and test coverage standards, reducing production bugs by 30%."
      ],
      techStack: ["Java 21", "Spring Boot 3", "Microservices", "Docker", "Kubernetes", "AWS", "CI/CD", "PostgreSQL", "Kafka"]
    },
    {
      period: "June 2023 — May 2026",
      role: "Software Developer & Team Lead",
      company: "Actolap Solutions India Pvt. Ltd.",
      location: "Noida, India",
      summary: "Architected high-throughput enterprise backend microservices and payment gateways for Trackwick (Enterprise Field Operations Platform).",
      bullets: [
        "Architected scalable backend microservices for Trackwick sustaining high-volume daily enterprise transactions.",
        "Designed and launched ICICI Bank Dynamic QR Payment Gateway with asynchronous webhooks and instant ledger reconciliation (99.9% uptime).",
        "Engineered bidirectional connectors for Salesforce CRM, Zoho CRM, and Odoo ERP, saving 40+ operational hours weekly.",
        "Implemented multi-tier Redis caching and MySQL composite indexing, slashing p95 API response times by 45%.",
        "Automated secure enterprise document and email pipelines via Microsoft Graph API & OneDrive with role-based access control (RBAC)."
      ],
      techStack: ["Java 17", "Spring Boot", "Microservices", "Redis", "MySQL", "ICICI Bank API", "Salesforce API", "Odoo ERP", "Docker", "JUnit 5"]
    },
    {
      period: "2024 — Present",
      role: "Lead Platform Architect",
      company: "Dukaandaar & Central AI Hub Initiatives",
      location: "Noida, India",
      summary: "Spearheaded system architecture for retail commerce, Server-Driven UI (SDUI), and production multi-agent AI ecosystems.",
      bullets: [
        "Authored the complete 8-Layer Enterprise AI Stack specification with semantic vector caching, complexity routing, and MCP execution.",
        "Created `platform-sdui-core`, an engine delivering declarative UI component trees to React Native (Android/iOS) and React 19 web clients.",
        "Developed UsageDataTrack (v1.11–v1.44), an Android system utility with hardware VPN packet inspection and WorkManager auto-updates."
      ],
      techStack: ["Multi-Agent AI", "SDUI", "React Native", "Spring Boot 3.3", "Android VpnService", "Redis"]
    },
    {
      period: "August 2022 — December 2022",
      role: "Teaching Assistant (Internship)",
      company: "Coding Ninjas",
      location: "Remote",
      summary: "Mentored 200+ students in Java, Object-Oriented Programming (OOP), and Data Structures & Algorithms (DSA).",
      bullets: [
        "Conducted 1,000+ live debugging sessions and code reviews with a 95%+ student satisfaction rating.",
        "Guided students on algorithmic complexity optimization, memory efficiency, and coding best practices."
      ],
      techStack: ["Java", "Data Structures", "Algorithms", "OOP", "Debugging"]
    }
  ] as ExperienceItem[],

  skills: [
    {
      category: "AI & Autonomous Systems",
      items: ["Multi-Agent Architectures", "8-Layer Production AI Stack", "Model Context Protocol (MCP)", "Semantic Vector Caching", "Prompt Injection Defense", "OpenTelemetry Tracing"]
    },
    {
      category: "Backend & Distributed Systems",
      items: ["Java 17 / 21", "Spring Boot 3.x", "Spring Cloud (Eureka, Feign, Hystrix)", "RESTful APIs & GraphQL", "Redis (Pub/Sub & Queues)", "MySQL 8.4 & PostgreSQL", "OAuth 2.1 & JWT", "Node.js"]
    },
    {
      category: "Mobile & Frontend Engineering",
      items: ["Server-Driven UI (SDUI)", "React 19 & Next.js", "React Native (Expo / Bare)", "Android Native (VpnService, WorkManager)", "TypeScript", "Tailwind CSS"]
    },
    {
      category: "Infrastructure & DevOps",
      items: ["Docker & Containers", "Nginx (Reverse Proxy & Upstreams)", "Linux Systems Engineering", "GitHub Actions CI/CD", "Firebase Services"]
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
  ] as ApkRelease[],
};
