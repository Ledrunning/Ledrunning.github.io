export const bio = [
  `With over 10 years of expertise, I have developed a range of software solutions for various domains, such as healthcare, 
    fintech, aviation, and industrial engineering. I have expertise in web development, desktop applications, and embedded systems, 
    using C#, .NET frameworks, and other technologies. My background in electronics engineering enables 
    me to combine interdisciplinary knowledge and apply it to complex and innovative projects. 
    I am passionate about learning new skills and exploring new challenges. Currently, I am studying German language and contributing to open source development. 
    I am also interested in artificial intelligence, computer vision, cloud computing, and electronics.`,
];

export const skills = [
  {
    title: "Languages",
    skillName: "C, C#, TypeScript",
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
    skillName: "HTML, XAML, GTK, Bootstrap",
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
    skillName: "VS Code, Visual Studio, ReSharper",
    color: "6",
    percentage: "100",
  },
];

export const education = [
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
      summary: "Client-server application for retrieving and querying the daily closing prices of bitcoin in US-Dollar.",
      preview: "https://github.com/Ledrunning/BitcoinQuery",
      techStack: ["C#", "WPF", "SignalR", "Autofac",  "NLog", ".NET 8", "REST API", "Hangfire", "Unit Tests"],
    },
    {
      projectName: "Image-Uploader",
      image: "images/imageUploader.png",
      summary: "The application allows users to upload images to the server and view them on a desktop application.",
      preview: "https://github.com/Ledrunning/Image-Uploader",
      techStack: ["Vue.js", "C#", "WPF", "ASP .NET Core 2.0", "REST API", "MSSQL"],
    },
    {
      projectName: "githubvue",
      image: "images/githubVue.png",
      summary: "Web client displays information about GitHub repositories, including repository details and recent commits.",
      preview: "https://github.com/Ledrunning/githubvue",
      techStack: ["Vue.js", "HTML", "CSS", "REST API"],
    },
  ],
  softwareProjects: [
    {
      projectName: "Employees Accounting",
      image: "images/empAccounting.png",
      summary: "Client-server application designed for employee accounting utilizing face detection technology.",
      preview: "https://github.com/Ledrunning/EmployeesAccounting",
      techStack: ["WPF", "ASP .NET6", "REST API", "MSSQL", "EMGU CV"],
    },
    {
      projectName: "Airplane Simulation Trajectory",
      image: "images/aircraftTrajectory.png",
      summary: "Airplane Simulation Trajectory is a WPF (Windows Presentation Foundation) 3D application that demonstrates" + 
                "the simulation of an airplane's trajectory over the ground. The application utilizes the Helix Toolkit (Helix3D) for rendering 3D graphics," + 
                "providing an immersive experience of tracking the path of an airplane.",
      preview: "https://github.com/Ledrunning/AirplaneSimulationTrajectory",
      techStack: ["C#", "WPF", ".NET Framework 4.8 ", "MVVM", "SimpleInjector", "Helix3D"],
    },
    {
      projectName: "VideoBroadcast",
      image: "images/videoBroadcast.png",
      summary: "VideoBroadcast is a Client-Server application written in C# targeting .NET 4.6.1." + 
               "It focuses on video broadcasting via protocols like RTP/RTSP or HTTP, leveraging the power of the VLC library and the VlcDotNet wrapper.",
      preview: "https://github.com/Ledrunning/VideoBroadcast",
      techStack: ["C#", "Windows Forms", ".NET Framework 4.6", "VLC", "RTP/RTSP", "HTTP"],
    },
    {
      projectName: "FacialDetection",
      image: "images/faceDetection.jpg",
      summary: "Simple WPF MVVM Desktop application for facial detection in real time from web camera via Emgu.", 
      preview: "https://github.com/Ledrunning/FacialDetection",
      techStack: ["C#", "WPF", ".NET Framework 4.7.1", "MVVM", "EmguCV"],
    },
    {
      projectName: "WiFiOutdoorSensor",
      image: "/images/wifiOutdoorSens.png",
      summary: "wireless outdoor temperature and humidity monitoring system. It uses ESP8266 for network communication," + 
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
      image: "uMap.png",
      summary: "Simple WPF MVVM application to display a world map using Open Street Map provider.",
      preview: "https://github.com/Ledrunning/uMap",
      techStack: ["WPF", "MVVM", "Desktop", "C#", "OpenStreetMap"],
    },
  ],
  embeddedProjects: [
    {
      projectName: "animationClock",
      image: "clock.png",
      summary: "Animation clock on STM32 + ILI9341",
      preview: "https://github.com/Ledrunning/animationClock",
      techStack: ["C", "STM32", "Keil", "Hardware", "PCB", "Microcontrollers"],
    },
    {
      projectName: "tiny_thermometer",
      image: "thermometer.png",
      summary: "A simple temperature and humidity meter displaying values on an 8x2 LCD using" + 
      "a DHT-22 sensor with a 5V external power supply on a small Avr microcontroller Attiny 2313 with 2Kb program memory." +
      "The firmware is written in C language in Atmel Studio 7",
      preview: "https://github.com/Ledrunning/tiny_thermometer",
      techStack: ["C", "Atmel", "Microcontrollers", "Hardware", "PCB"],
    },
    {
      projectName: "RaspberryPi_expansion_card",
      image: "clock.png",
      summary: "A simple expansion board for RaspberryPi",
      preview: "https://github.com/Ledrunning/RaspberryPi_expansion_card",
      techStack: ["C", "Atmel", "Microcontrollers", "Hardware", "PCB"],
    },
  ],
};

export const experience = [
  {
    title: "Arsis",
    duration: "Jul 2022 - Oct 2022",
    subtitle: ".NET Developer",
    details: [
      "Developed portals for medicines accounting for leading international healthcare companies as a full-stack developer;",
      "Developed server tools for a healthcare company;",
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
    title: "U - Tek",
    duration: "Jul 2018 - Jul 2022",
    subtitle: "Software Engineer",
    details: [
      "Wrote corporate WPF and Windows Forms applications in C#;",
      "Designed a smart storage system for wire reels;",
      "Created the system for determining the slip coefficient on the runway;",
      "Developed a multimedia entertainment system for passenger aircraft.",
      "Wrote low-level and middleware API for cabin light control system.",
      "Created file synchronization system from server to passengers seat media system via Syncthing using Syncthing API;",
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
    ],
    icon: "heartbeat ",
  },
  {
    title: "Viburn Ltd",
    duration: "Sep 2017 - Jul 2018",
    subtitle: ".NET Developer",
    details: [
      "Developed the financial product for a UK fintech company as a back-end developer;",
      "Worked with Open CV and EMGU CV for facial detection and recognition;",
      "Created a desktop application to keep track of serial numbers;",
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
      "Development of embedded devices, and firmware for AVR and STM32 microcontrollers;",
      "Raspberry Pi, PLC, and industrial controllers programming;",
      "Wrote desktop application for frequency converter PID tracing and chart drawing via Modbus RTU;",
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
            text:"",
            link:""
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
      "The template was taken from Vinay Somawat <a href='https://github.com/vinaysomawat/vinaysomawat.github.io'>link text</a>",
    ],
  },
];
