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
      projectName: "Image-Uploader",
      image: "",
      summary: " The application allows users to upload images to the server and view them on a desktop application.",
      preview: "",
      techStack: ["Vue.js", "C#", "WPF", "ASP .NET Core 2.0", "REST API", "MSSQL"],
    },
    {
      projectName: "githubvue",
      image: "",
      summary: "Web client displays information about GitHub repositories, including repository details and recent commits.",
      preview: "",
      techStack: ["Vue.js", "HTML", "CSS", "REST API"],
    },
  ],
  softwareProjects: [
    {
      projectName: "Employees Accounting",
      image: "",
      summary: "Client-server application designed for employee accounting utilizing face detection technology.",
      preview: "",
      techStack: ["WPF", "ASP .NET6", "REST API", "MSSQL", "EMGU CV"],
    },
  ],
  androidProjects: [
    {
      projectName: "",
      image: "",
      summary: "",
      preview: "",
      techStack: ["", "", ""],
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
      "Made with &hearts; by Vinay Somawat.",
      "&copy; No Copyrights. Feel free to use this template.",
      "The template was taken from Vinay Somawat <a href='https://github.com/vinaysomawat/vinaysomawat.github.io'>link text</a>",
    ],
  },
];
