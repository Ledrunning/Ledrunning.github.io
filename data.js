export const bio = [
  `With over 10 years of experience, I have developed a wide range of software solutions across 
  domains such as warehousing, healthcare, fintech, aviation, and industrial engineering. 
  I specialize in web development, desktop applications, and embedded systems, primarily using C#, 
  .NET frameworks, and related technologies. My background in electronics engineering allows me 
  to combine interdisciplinary knowledge and apply it to complex, innovative projects. 
  I am passionate about learning new skills and continuously expanding my technical horizons.`,
];

export const skills = [
  {
    title: "Languages",
    skillName: "C, C#, JavaScript, TypeScript",
    color: "1",
    percentage: "90",
  },
  {
    title: "Frameworks/Libraries",
    skillName: `.NET Core, .NET Framework, Vue.js`,
    color: "6",
    percentage: "85",
  },
  {
    title: "Design",
    skillName: "HTML, XAML, GTK, Bootstrap, Foundation",
    color: "4",
    percentage: "60",
  },
  {
    title: "Databases:",
    skillName: "SQLite, MongoDB, MSSQL, Cosmos DB",
    color: "4",
    percentage: "70",
  },
  {
    title: "ORMs and Database Tools:",
    skillName: "Dapper, ADO.NET, FluentMigrator, Fluent API, Entity Framework",
    color: "4",
    percentage: "80",
  },
  {
    title: "Tools & Platforms:",
    skillName: "Azure, Docker, Git, Jira, AppVeyor, Confluence, YouTrack",
    color: "4",
    percentage: "85",
  },
  {
    title: "Principles & Practices:",
    skillName: "SOLID, OOP, DRY, CI/CD",
    color: "4",
    percentage: "90",
  },
  {
    title: "Version Control",
    skillName: "GitHub, JIRA, Bitbucket",
    color: "7",
    percentage: "90",
  },
  {
    title: "Unit Test",
    skillName: " MSTest, Nunit, Moq",
    color: "7",
    percentage: "70",
  },
  {
    title: "Tools",
    skillName: "Postman, NServiceBus Analyzer, Chrome DevTools",
    color: "3",
    percentage: "80",
  },
  {
    title: "IDE",
    skillName: "VS Code, Visual Studio, Rider, ReSharper",
    color: "6",
    percentage: "100",
  },
  {
    title: "Protocols",
    skillName: "I2C, SPI, UART, Modbus TCP/RTU, CAN, IO-Link",
    color: "1",
    percentage: "80",
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
    title: "Biomedical electronics - Master Degree",
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
      projectName: "Bitcoin Query",
      image: "images/bitcoinQuery.png",
      summary:
        "Client-server application for retrieving and querying the daily closing prices of bitcoin in US-Dollar.",
      preview: "https://github.com/Ledrunning/BitcoinQuery",
      techStack: [
        "C#",
        "WPF",
        "SignalR",
        "Autofac",
        "NLog",
        ".NET 8",
        "REST API",
        "Hangfire",
        "Unit Tests",
      ],
    },
    {
      projectName: "Image-Uploader",
      image: "images/imageUploader.png",
      summary:
        "The application allows users to upload images to the server and view them on a desktop application.",
      preview: "https://github.com/Ledrunning/Image-Uploader",
      techStack: [
        "Vue.js",
        "C#",
        "WPF",
        "ASP .NET Core 2.0",
        "REST API",
        "MSSQL",
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
        "Airplane Simulation Trajectory is a WPF (Windows Presentation Foundation) 3D application that demonstrates" +
        "the simulation of an airplane's trajectory over the ground. The application utilizes the Helix Toolkit (Helix3D) for rendering 3D graphics," +
        "providing an immersive experience of tracking the path of an airplane.",
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
        "VideoBroadcast is a Client-Server application written in C# targeting .NET 4.6.1." +
        "It focuses on video broadcasting via protocols like RTP/RTSP or HTTP, leveraging the power of the VLC library and the VlcDotNet wrapper.",
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
      projectName: "WiFiOutdoorSensor",
      image: "images/wifiOutdoorSens.png",
      summary:
        "wireless outdoor temperature and humidity monitoring system. It uses ESP8266 for network communication," +
        "BMP180 for barometric pressure measurements, and DHT-22 for temperature and humidity data. Powered by a battery," +
        "it's designed to be low-power and can be accessed via a web server, an Android application, or a Windows desktop application.",
      preview: "https://github.com/Ledrunning/WiFiOutdoorSensor",
      techStack: ["C++", "Android", "Java", "C#", "Windows Forms"],
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
  embeddedProjects: [
    {
      projectName: "animationClock",
      image: "images/clock.png",
      summary: "Animation clock on STM32 + ILI9341",
      preview: "https://github.com/Ledrunning/animationClock",
      techStack: ["C", "STM32", "Keil", "Hardware", "PCB", "Microcontrollers"],
    },
    {
      projectName: "tiny_thermometer",
      image: "images/thermometer.png",
      summary:
        "A simple temperature and humidity meter displaying values on an 8x2 LCD using" +
        "a DHT-22 sensor with a 5V external power supply on a small Avr microcontroller Attiny 2313 with 2Kb program memory." +
        "The firmware is written in C language in Atmel Studio 7",
      preview: "https://github.com/Ledrunning/tiny_thermometer",
      techStack: ["C", "Atmel", "Microcontrollers", "Hardware", "PCB"],
    },
    {
      projectName: "RaspberryPi_expansion_card",
      image: "images/rpiboard.png",
      summary: "A simple expansion board for RaspberryPi",
      preview: "https://github.com/Ledrunning/RaspberryPi_expansion_card",
      techStack: ["Python", "Raspberry Pi", "Hardware", "PCB"],
    },
    {
      projectName: "LightController",
      image: "images/lightController.png",
      summary:
        "Open source project to control light in the room, garage, street, house etc",
      preview: "https://github.com/Ledrunning/LightController",
      techStack: ["C", "Atmel", "Microcontrollers", "Hardware", "PCB"],
    },
  ],
};

export const experience = [
  {
    title: "item Industrietechnik GmbH",
    duration: "May 2024 - Current",
    subtitle: "Software Engineer",
    details: [
      "IoT & Smart Product Development: Full-cycle software engineering for connected devices;",
      "Middleware & Device Communication: Building high-level APIs (.NET) to interface with hardware and sensors;",
      "Industrial Connectivity: Implementing protocols (MQTT, Modbus, TCP/UDP) for reliable device-to-server communication;",
      " IoT Edge Integration: Low-level programming concepts applied to system integration;",
      "Web-based HMI & Dashboards: Developing complex browser-based frontends for device control and monitoring;",
    ],
    tags: [
      "Avalonia",
      "Desktop development",
      ".NET Core MVC",
      ".NET6",
      ".NET8",
      ".NET9",
      "MSSQL",
      "PostgreSQL",
      "Razor",
      "ESP-IDF",
      "Embedded C",
      "IoT",
      "JavaScript",
      "JQuery",
      "Foundation",
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
      "TypeScript",
      "Vue.js",
      "Bootstrap",
      ".NET Core MVC",
      ".NET6",
      "MSSQL",
      "Razor",
    ],
    icon: "truck ",
  },
  {
    title: "Arsis",
    duration: "Jul 2022 - Oct 2022",
    subtitle: "Senior .NET Developer",
    details: [
      "Full-Stack Development (Healthcare): Engineered web portals for pharmaceutical inventory management for leading international companies;",
      "Backend Tooling: Designed and implemented server-side utilities to automate data processing workflows;",
    ],
    tags: [
      "TypeScript",
      "Vue.js",
      "Bootstrap",
      ".NET Core MVC",
      ".NET6",
      "MSSQL",
      "Razor",
      "Azure Cosmos DB",
      "Entity Framework",
      "Software Design Patterns",
    ],
    icon: "truck ",
  },
  {
    title: "U - Tek",
    duration: "Jul 2018 - Jul 2022",
    subtitle: "C# Developer",
    details: [
      "Fintech Backend: Developed secure core services for a UK-based financial product;",
      "In-Flight Entertainment System: Developed the backend and middleware for a passenger multimedia system. Implemented Hardware Control APIs to manage cabin lighting and built a content synchronization service using Syncthing API;",
      "Aviation Safety: Designed a solution for determining the runway slip coefficient, implementing complex calculation logic for airport safety;",
      "Smart Storage System: Designed the control software for automated wire reel storage, optimizing inventory placement and retrieval algorithms;",
    ],
    tags: [
      "GStreamer",
      "GTK3.0",
      "RESTApi",
      "EF5/6",
      "ADO .NET",
      "SyngThing",
      ".NET Framework",
      ".NET Core",
      "WPF",
      "Windows Forms",
      "MSSQL",
      "SQLight",
      "Video/Audio Broadcasting",
      "Nservicebus",
    ],
    icon: "heartbeat",
  },
  {
    title: "Viburn Ltd",
    duration: "Sep 2017 - Jul 2018",
    subtitle: ".NET Developer",
    details: [
      "Computer Vision and Advanced Algorithms: Enterprise applications (WPF and Windows Forms in C#) integrating OpenCV and EMGU CV for face detection and recognition have been developed;",
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
    title: "H2O Ltd",
    duration: "Jul 2014 - Jul 2018",
    subtitle: "Electronic Engineer",
    details: [
      "Embedded Systems & Firmware: Developed firmware and hardware solutions using AVR and STM32 microcontrollers;",
      "Industrial Automation: Programmed PLCs and industrial controllers, including integration with Raspberry Pi based systems;",
      "Diagnostic Software Tools: Developed a desktop application for frequency converter analysis (PID tracing and real-time charting) via Modbus RTU;",
    ],
    tags: [
      "WPF",
      "Firmware",
      "C#",
      "Embedded C",
      "Windows Forms",
      "PLC Programming",
      "SCADA",
    ],
    icon: "qrcode ",
  },
  {
    title: "Microtronic",
    duration: "Sep 2011 - Jul 2014",
    subtitle: "Electronic Engineer",
    details: [
      "Electronic Design & Development: Modelled and developed custom electronic devices and hardware components for industrial applications;",
      "Ship Automation Systems: Engineered automation modules and programmed PLC logic for critical ship systems;",
    ],
    tags: [
      "Hardware Development",
      "Firmware",
      "Microcontrollers",
      "Embedded C",
      "P-CAD",
      "OrCAD",
      "SCADA",
    ],
    icon: "qrcode ",
  },
  {
    title: "Fiolent",
    duration: "Sep 2011 - Jul 2014",
    subtitle: "Electronic Engineer",
    details: [
      "Modeled and developed electronic devices and ship automation modules;",
      "Created software for PLC;",
    ],
    tags: [
      "Hardware Development",
      "Firmware",
      "Microcontrollers",
      "Embedded C",
      "P-CAD",
      "OrCAD",
      "Circuit Design",
    ],
    icon: "group ",
  },
];

export const contact = [
  {
    label:
      "Please feel welcome to contact me via email. Whether you would like to discuss a technology or a business opportunity, I would be delighted to hear from you.",
    data: [
      {
        text: "",
        link: "",
      },
    ],
  },
];

export const footer = [
  {
    label: "Dev Profiles",
    data: [
      {
        text: "Stackoverflow",
        link: "https://stackoverflow.com/users/8070900/jdo",
      },
      {
        text: "GitHub",
        link: "https://github.com/Ledrunning",
      },
      {
        text: "Reddit",
        link: "https://www.reddit.com/user/Ledrunnin/",
      },
      {
        text: "Hackaday",
        link: "https://hackaday.io/Jdo",
      },
    ],
  },
  {
    label: "Resources",
    data: [
      {
        text: "Enable Dark/Light Mode",
        func: "enableDarkMode()",
      },
      {
        text: "Print this page",
        func: "window.print()",
      },
      {
        text: "Clone this page",
        link: "https://github.com/Ledrunning/Ledrunning.github.io",
      },
    ],
  },
  {
    label: "Social Profiles",
    data: [
      {
        text: "Linkedin",
        link: "https://www.linkedin.com/in/osman-mazinov-lennarovich/",
      },
      {
        text: "Xing",
        link: "https://www.xing.com/profile/Osman_Mazinov/",
      },
    ],
  },
  {
    label: "copyright-text",
    data: [
      "The core powered by Vinay Somawat.",
      "&copy; No Copyrights. Feel free to use this template.",
      "The template was taken from <a href='https://github.com/vinaysomawat/vinaysomawat.github.io'>Vinay Somawat</a>",
    ],
  },
];
