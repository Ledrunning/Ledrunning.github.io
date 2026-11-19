export const bio = [
  `Senior Software Engineer with 10+ years of experience in software development, including commercial C#/.NET development since 2017. 
  Specializing in backend engineering, distributed systems, REST APIs and complex system integrations across fintech, 
  aviation, healthcare and industrial domains. Strong background in designing and developing backend services, 
  microservices and asynchronous communication workflows. Experienced in building reliable integrations, 
  implementing secure service-to-service communication (mTLS) and working with messaging platforms such as RabbitMQ, 
  NServiceBus and Azure Service Bus. Proficient in PostgreSQL, SQL Server, Docker and CI/CD, 
  with a strong focus on software design, maintainable code, system reliability and code quality.`,
];

export const skills = [
  {
    title: "Languages:",
    skillName: "C, C#, JavaScript, TypeScript",
    color: "1",
  },
  {
    title: "Backend:",
    skillName: `NET 6/8/10, ASP.NET Core, REST APIs, Microservices, Distributed Systems, Middleware`,
    color: "6",
  },
  {
    title: "Architecture & Design:",
    skillName:
      "Service Integration, Clean Architecture, SOLID, Design Patterns, Clean Code, EventDriven Architecture",
    color: "4",
  },
  {
    title: "Messaging & Integration:",
    skillName:
      "RabbitMQ, NServiceBus, Azure Service Bus, MQTT, TCP/IP, UDP, mTLS",
    color: "4",
  },
  {
    title: "ORMs and Database Tools:",
    skillName: "Dapper, ADO.NET, FluentMigrator, Fluent API, Entity Framework",
    color: "4",
    percentage: "80",
  },
  {
    title: "Data Access & Databases:",
    skillName:
      "Entity Framework Core, Dapper, Fluent API, ADO.NET, PostgreSQL, SQL Server,MongoDB, Azure Cosmos DB, Elasticsearch",
    color: "4",
  },
  {
    title: "Quality & Testing:",
    skillName:
      "Unit Testing, Integration Testing, SonarQube, Roslyn, Static Analysis, Code Reviews",
    color: "4",
  },
  {
    title: "Infrastructure & Monitoring:",
    skillName:
      "Docker, GitHub Actions, Azure DevOps, Grafana, Prometheus, ELK Stack",
    color: "7",
  },
  {
    title: "Additional:",
    skillName:
      "Industrial protocols, Vue.js, TypeScript/JavaScript, WPF, WinForms, Avalonia, Cloud: Azure (working knowledge)",
    color: "7",
  },
];

export const education = [
  {
    title: "German language courses",
    duration: "2023 - 2024",
    subtitle: "Milling Sprachenschulen - Milling GmbH",
    details: [],
    tags: ["Sprachschule", "Deutsch", "Deutsche Sprache"],
    icon: "book",
  },
  {
    title:
      "Biomedical electronics - Specialist Degree / Evaluated by ZAB: German university degree, between Bachelor's and Master's level",
    duration: "2008 - 2009",
    subtitle: "Sevastopol State Technical University",
    details: [],
    tags: [
      "Digital & Analog electronics",
      "Microcontrollers",
      "Firmware development",
      "Medical devices design",
      "Bioelectronics",
      "Semiconductors",
    ],
    icon: "graduation-cap",
  },
  {
    title: "Bachelor's degree in Electronics",
    duration: "2003 - 2008",
    subtitle: "Sevastopol State Technical University",
    details: [],
    tags: [
      "Physics",
      "Circuit design",
      "Power electronics",
      "PCB Route",
      "Mathematics",
    ],
    icon: "book",
  },
];

export const projects = {
  webProjects: [
    {
      projectName: "CryptoRates",
      image: "images/cryptorates.png",
      summary:
        "A real-time crypto price dashboard built around one gateway. The ASP.NET Core service polls CoinGecko",
      preview: "https://github.com/Ledrunning/CryptoRates",
      techStack: [
        ".NET 10",
        "C#",
        "Long pooling",
        "Telegram.Bot",
        "OpenWeather API",
        "MS SQL",
        "GitHub Actions (CI)",
      ],
    },
    {
      projectName: "CrudBor",
      image: "images/crudbot.png",
      summary:
        "Telegram bot that returns current weather from OpenWeather API and OpenWeatherGeo",
      preview: "https://github.com/Ledrunning/CrudBot",
      techStack: [
        ".NET 10",
        "ASP.NET Core minimal API",
        "SignalR",
        "BackgroundService",
        "HttpClient with resilience",
        "rate limiting",
        "ProblemDetails",
        "xUnit",
        "GitHub Actions",
        "WPF (MVVM, Material Design)",
        "Vue 3",
        "TypeScript",
        "Vite",
      ],
    },
    {
      projectName: "Bitcoin Query",
      image: "images/bitcoinQuery.png",
      summary:
        "Client-server application for retrieving and querying the daily closing prices of bitcoin in US-Dollar.",
      preview: "https://github.com/Ledrunning/BitcoinQuery",
      techStack: [
        "C#",
        "SignalR",
        ".NET 8",
        "REST API",
        "Hangfire",
        "WPF Client",
        "Autofac",
        "NLog",
        "nUnit",
      ],
    },
    {
      projectName: "Image-Uploader",
      image: "images/imageUploader.png",
      summary:
        "The application allows users to upload images to the server and view them on a desktop application.",
      preview: "https://github.com/Ledrunning/Image-Uploader",
      techStack: [
        "C#",
        "WPF",
        "ASP .NET Core 2.0",
        "REST API",
        "MSSQL",
        "Vue.js",
      ],
    },
    {
      projectName: "githubvue",
      image: "images/githubVue.png",
      summary:
        "Web client displays information about GitHub repositories, including repository details and recent commits.",
      preview: "https://github.com/Ledrunning/githubvue",
      techStack: ["Vue.js", "HTML", "CSS", "REST API"],
    },
  ],
  softwareProjects: [
    {
      projectName: "TinyPlayer",
      image: "images/tinyPlayer.png",
      summary:
        "A lightweight video player built with WPF, GStreamer, and the WPF-UI framework featuring a modern Fluent Design interface.",
      preview: "https://github.com/Ledrunning/TinyPlayer",
      techStack: [
        "WPF",
        "C#",
        ".NET10",
        "GStreamer",
        "Videosink",
        "Video piplines",
      ],
    },
    {
      projectName: "Employees Accounting",
      image: "images/empAccounting.png",
      summary:
        "Client-server application designed for employee accounting utilizing face detection technology.",
      preview: "https://github.com/Ledrunning/EmployeesAccounting",
      techStack: ["WPF", "ASP .NET6", "REST API", "MSSQL", "EMGU CV"],
    },
    {
      projectName: "Airplane Simulation Trajectory",
      image: "images/aircraftTrajectory.png",
      summary:
        "Airplane Simulation Trajectory is a WPF 3D application that demonstrates " +
        "the simulation of an airplane's trajectory over the ground.",
      preview: "https://github.com/Ledrunning/AirplaneSimulationTrajectory",
      techStack: [
        "C#",
        "WPF",
        ".NET Framework 4.8 ",
        "MVVM",
        "SimpleInjector",
        "Helix3D",
      ],
    },
    {
      projectName: "VideoBroadcast",
      image: "images/videoBroadcast.png",
      summary:
        "VideoBroadcast is a Client-Server application written in C# " +
        "It focuses on video broadcasting via protocols like RTP/RTSP or HTTP.",
      preview: "https://github.com/Ledrunning/VideoBroadcast",
      techStack: [
        "C#",
        "Windows Forms",
        ".NET Framework 4.6",
        "VLC",
        "RTP/RTSP",
        "HTTP",
      ],
    },
    {
      projectName: "FacialDetection",
      image: "images/faceDetection.jpg",
      summary:
        "Simple WPF MVVM Desktop application for facial detection in real time from web camera via Emgu.",
      preview: "https://github.com/Ledrunning/FacialDetection",
      techStack: ["C#", "WPF", ".NET Framework 4.7.1", "MVVM", "EmguCV"],
    },
    {
      projectName: "TinnyMonitor",
      image: "images/tinnyMonitor.png",
      summary: "Desktop application for the hardware weather station.",
      preview: "https://github.com/Ledrunning/TinnyMonitor",
      techStack: ["Windows Forms", "MVP", "C#", "OxyPlot"],
    },
    {
      projectName: "uMap",
      image: "images/uMap.png",
      summary:
        "Simple WPF MVVM application to display a world map using Open Street Map provider.",
      preview: "https://github.com/Ledrunning/uMap",
      techStack: ["WPF", "MVVM", "Desktop", "C#", "OpenStreetMap"],
    },
  ],
};

export const experience = [
  {
    title: "item Industrietechnik GmbH",
    duration: "May 2024 - Current",
    subtitle: "Software Engineer · Backend & Integration",
    details: [
      "Design and develop C#/.NET backend services and middleware for distributed applications, contributing to system architecture, technical decisions and technology selection",
      "Build asynchronous messaging and integration components using RabbitMQ, connecting backend services with external systems and distributed components",
      "Implement secure communication between distributed services and connected systems using mutual TLS (mTLS) and authentication mechanisms",
      "Improve service observability through health checks, diagnostics, metrics and Grafana dashboards",
      "Strengthen engineering practices by introducing coding conventions, promoting code reviews, and implementing static analysis and SonarQube quality gates",
    ],
    tags: [
      "C#",
      "ASP .NET Core MVC",
      ".NET6",
      ".NET8",
      ".NET9",
      ".NET10",
      "MSSQL",
      "REST",
      "Async messaging",
      "Postgres",
      "Entity Framework Core",
      "RabbitMQ",
      "NServiceBus",
      "Elsa",
      "SOLID",
      "Design Patterns",
      "Distributed Systems",
      "Microservices",
      "Layered Architecture",
      "Vertical Slice Architecture",
      "AI-Assisted Engineering",
      "Docker",
      "CI/CD",
    ],
    icon: "heartbeat",
  },
  {
    title: "Open Source Development",
    duration: "Oct 2022 - May 2024",
    subtitle: "Software Developer",
    details: [
      "Contributing to open-source projects and maintaining my GitHub repositories;",
      "Developing personal projects and creating side projects;",
    ],
    tags: [
      "C#",
      ".NET Core MVC",
      "Entity Framework Core",
      ".NET6",
      "Back-end",
      "Software Architecture",
      "MSSQL",
      "Razor",
      "JavaScript",
      "TypeScript",
      "Vue.js",
      "Bootstrap",
      "Docker",
      "CI/CD",
    ],
    icon: "truck ",
  },
  {
    title: "Arsis",
    duration: "Jul 2018 - Oct 2022",
    subtitle: "Software Engineer (Backend / Healthcare / Pharma)",
    details: [
      "Designed and developed C#/.NET backend microservices for a UK-based fintech platform, including fraud-detection and cargo-tracking functionality, as well as supporting services for notifications and file storage",
      "Implemented asynchronous service communication and messaging workflows with NServiceBus and Azure Service Bus, backed by Azure Cosmos DB storage",
      "Connected in-house microservices to an API gateway and integrated Elasticsearch for search and logging",
      "Designed and developed high-reliability backend services and web applications using .NET / C# for regulated pharmaceutical and healthcare environments, implementing secure multi-tenant data storage and fine-grained RBAC",
      "Developed backend and middleware components for an aircraft passenger multimedia system, including integration APIs and content-synchronization functionality",
      "Built backend services for aviation runway-safety functionality, with unit and integration tests supporting reliability",
      "Developed software components for automated inventory management and retrieval workflows",
    ],
    tags: [
      "C#",
      ".NET5",
      ".NET6",
      "Entity Framework Core",
      "Dapper",
      "RESTApi",
      "ADO .NET",
      ".NET Framework",
      ".NET Core",
      "TypeScript",
      "Vue.js",
      "WPF",
      "Windows Forms",
      "MSSQL",
      "SQLight",
      "Cosmos DB",
      "Nservicebus",
      "Azure Bus",
      "Azure Pipelines",
      "RabbitMQ",
      "Elsa",
      "Docker",
      "CI/CD",
    ],
    icon: "heartbeat",
  },
  {
    title: "Viburn",
    duration: "Sep 2017 - Jul 2018",
    subtitle: ".Software Engineer (.NET)",
    details: [
      "Developed C#/.NET applications and database solutions for data tracking and automated access control",
    ],
    tags: [
      "WPF",
      "WCF",
      "ADO .NET",
      ".NET Framework",
      "Windows Forms",
      "MSSQL",
    ],
    icon: "qrcode ",
  },
  {
    title: "H2O",
    duration: "Jul 2014 - Jul 2018",
    subtitle: "Embedded Software Engineer",
    details: [
      "Designed firmware. Developed C#/.NET diagnostic applications, data visualization tools, and communication components for industrial equipment",
    ],
    tags: ["WPF", "Firmware", "C#", "Windows Forms"],
    icon: "qrcode ",
  },
  {
    title: "Earlier roles 2008 – 2014",
    duration: "Sep 2011 - Jul 2014",
    subtitle: "System Software Engineer",
    details: [
      "Microtronic (2011–2014): developed low-level software and communication protocols in C for embedded systems",
      "Fiolent (2008–2010): developed real-time control software and automation logic for industrial and marine control systems.",
    ],
    tags: ["", "", ""],
    icon: "qrcode ",
  },
];

export const footer = [
  {
    label: "Social Profiles",
    data: [
      {
        text: "Linkedin",
        link: "https://www.linkedin.com/in/osman-mazinov/",
      },
      {
        text: "Xing",
        link: "https://www.xing.com/profile/Osman_Mazinov/",
      },
    ],
  },
];
