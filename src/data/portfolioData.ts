import {
  PersonalInfo,
  ExperienceItem,
  ProjectItem,
  ResearchItem,
  SkillCategory,
  EducationItem,
  TrainingWorkshopItem,
  CertificationItem
} from '../types/portfolio';

export const personalInfo: PersonalInfo = {
  name: "Manan Sharma",
  pronouns: "He/Him",
  role: "Polymath Developer & Systems Architect | AI/ML, Embedded Linux & Geospatial",
  headline: "Polymath Systems Developer · Operating Across Silicon, Linux Kernel, Agentic AI, MCP & Satellite Earth Observation",
  subHeadline: "B.Tech Artificial Intelligence & Mathematics · University of Jammu",
  status: "ACTIVE // OPEN TO OPPORTUNITIES",
  location: "Jammu & Kashmir, India",
  email: "manan31206@gmail.com",
  github: "https://github.com/manan316",
  linkedin: "https://www.linkedin.com/in/manan-sharma-3980b1324/",
  resumeUrl: "/Resume.pdf",
  profileImage: "/images/profile.png",
  aboutBio: "A full-blown polymath developer and systems architect operating without boundaries across computer science, low-level Linux development, networking protocols, embedded IoT hardware, geospatial satellite analysis (GEE & STAC), agentic AI workflows with Model Context Protocol (MCP), deep learning computer vision, and mathematical modeling. Capable of architecting, coding, and deploying entire platforms from bare-metal silicon registers to distributed cloud infrastructure.",
  currentPursuits: [
    "Developing custom embedded Linux firmware & kernel driver optimizations for LoRaWAN gateway architectures",
    "Pioneering edge AI inference acceleration on NPUs with Intel OpenVINO",
    "Architecting autonomous agentic AI workflows and tools using Model Context Protocol (MCP)",
    "Processing planetary Earth observation datasets via Google Earth Engine (GEE) and STAC catalogs",
    "Researching digital signal processing (DSP) and mathematical modeling for geotechnical early-warning systems"
  ],
  pastHighlights: [
    "Won Best Presentation Award at INDU X 5.0 International Hackathon (2026) for GeoChange AI (Satellite Remote Sensing)",
    "Architected OJASEWS: Autonomous Geotechnical Landslide Simulation, 3D Digital Twin & Early-Warning Research Platform",
    "Researched Computer Vision & NPU acceleration at Indian Institute of Technology (IIT), Roorkee",
    "Engineered custom OpenWrt firmware & SX1303 LoRa hardware integration at UniConverge Technologies",
    "Developed SlipSense: AI-powered landslide segmentation using custom CRUNet on 14-band multispectral satellite imagery",
    "Created NeuroView: High-throughput 3D spatial telemetry & signal visualization platform with WebGL shaders & cascading LLMs",
    "Organised Innovathon 1.0 National level Hackathon at University of Jammu",
    "Performed dual lead role as Arjuna & Guru Kripacharya in 'Rashmirathi' at 25th Bharat Rang Mahotsav (BRM) International Theatre Festival (2026)",
    "Selected as Junior Scientist at 26th National Children Science Congress (NCSC), IIT Kanpur (2018)",
    "Participated in Visual Attention Modeling & High-Speed Instrumentation Workshop at IIT Jammu (2024)",
    "Selected Participant at Innovation, Design and Entrepreneurship (IDE) Bootcamp (Edition 3) at University of Ladakh (2026)"
  ]
};

export const experiences: ExperienceItem[] = [
  {
    id: "uct-iot",
    company: "UniConverge Technologies",
    role: "Embedded & Internet of Things Engineer (Intern)",
    type: "Internship · On-site",
    location: "Noida, Uttar Pradesh, India",
    duration: "Jun 2026 – Jul 2026 · 2 mos",
    period: "Jun 2026 – Present",
    description: "Developed custom embedded Linux firmware utilizing OpenWrt build environments, establishing seamless interoperability across MIPS (MT7628) and ARM (NanoPi - Allwinner H3) gateway architectures. Engineered robust hardware integration for SX1303 LoRa basebands by writing custom device tree overlays, optimizing kernel-space SPI drivers, and tuning the Linux TCP/IP stack for high-throughput, low-latency edge networking.",
    keyContributions: [
      "Built custom embedded Linux firmware images with cross-compilation toolchains for MT7628 (MIPS) and NanoPi Allwinner H3 (ARM).",
      "Engineered hardware integration for Semtech SX1303 LoRa baseband concentrators via custom device tree overlays (.dts).",
      "Optimized kernel-space SPI drivers & tuned Linux TCP/IP networking stack for low-latency edge throughput.",
      "Configured ChirpStack packet forwarders and IoT network infrastructure for industrial edge deployments."
    ],
    skills: ["OpenWrt", "LoRaWAN", "ChirpStack", "Linux Firmware", "Kernel Customization", "SPI Drivers", "MIPS / ARM", "TCP/IP"],
    thumbnail: "/images/uct_cert_thumb.png",
    thumbnailLabel: "UCT Internship Certificate"
  },
  {
    id: "iit-roorkee",
    company: "Indian Institute of Technology, Roorkee",
    role: "Research Intern (Computer Vision & Edge AI)",
    type: "Internship · On-site",
    location: "Roorkee, Uttarakhand, India",
    duration: "Jun 2025 – Jul 2025 · 2 mos",
    period: "Jun 2025 – Jul 2025",
    description: "Engineered a custom YOLOv8 object detection pipeline accelerated using the Intel OpenVINO toolkit for high-FPS, low-power inference on Neural Processing Units (NPUs). Fine-tuned models and converted weights to OpenVINO Intermediate Representation (IR), delivering significant latency reduction compared to standard CPU inference without thermal throttling.",
    keyContributions: [
      "Fine-tuned custom YOLOv8 architectures and converted models to OpenVINO Intermediate Representation (IR).",
      "Benchmarked and accelerated continuous NPU-based inference on Intel Core Ultra architectures.",
      "Eliminated pipeline bottlenecks using OpenCV and asynchronous video stream ingestion."
    ],
    skills: ["Intel OpenVINO", "YOLOv8", "NPU Acceleration", "Computer Vision", "PyTorch", "Model Optimization", "OpenCV"],
    thumbnail: "/images/iitr_letter_thumb.png",
    thumbnailLabel: "IIT Roorkee Internship Letter"
  }
];

export const projects: ProjectItem[] = [
  {
    id: "ojasews",
    title: "OJASEWS — Autonomous Geotechnical Landslide Simulation & 3D Digital Twin",
    subtitle: "Physics-Informed Slope Failure Modeling, Real-Time ESP32 Ingestion & ntfy.sh Mobile Early Warning",
    category: "IoT & Digital Twins",
    featured: true,
    date: "Oct 2026 – Present",
    description: "Architected OJASEWS under the SAVERA initiative — an advanced geotechnical simulation, digital twin visualization, and life-safety early-warning platform engineered to monitor landslide precursors across steep Himalayan terrain corridors (modeled after the critical Samroli sector on the Jammu-Srinagar NH-44 highway). The platform models the complete geotechnical warning lifecycle: ingesting continuous synthetic telemetry across 7 physics simulation scenarios alongside real-world ESP32 IoT sensor telemetry, validating data quality, and executing a dual-track AI risk assessment engine. Automatically dispatches urgent mobile push notifications via ntfy.sh to field subscribers and synchronizes real-time 3D terrain states.",
    architectureDetails: [
      "Procedural Three.js 3D Himalayan digital twin featuring custom elevation and slope shaders, dynamic risk heatmap blending, live rainfall particle simulation, and downhill debris-flow animation during slope failure.",
      "Dual-track risk assessment arbiter combining an explainable geotechnical physics heuristic (moisture trend, tilt velocity, precipitation infiltration lag) with a 4-class Random Forest ML classifier.",
      "Dual telemetry ingestion supporting 7 physics simulation scenarios with reproducible deterministic seeds and live physical ESP32 microcontroller nodes (capacitive soil moisture, MEMS tilt, tipping-bucket rain).",
      "Sub-second asynchronous mobile push dispatch engine via ntfy.sh with priority bypass, cooldown safeguards, lock-screen alerts, and instant camera QR code subscription.",
      "Full-stack telemetry workbench featuring real-time synchronized Recharts time-series, liquid slosh risk gauge, persistent SQLite audit trails, and RFC-4180 CSV / JSON research export."
    ],
    technologies: ["Python 3.11", "FastAPI", "React 19", "TypeScript", "Three.js", "WebGL / GLSL", "ESP32 / IoT", "Random Forest", "ntfy.sh", "Docker", "Tailwind CSS"],
    badge: "SAVERA Flagship System",
    images: [
      {
        url: "/images/ojasews_command_center.png",
        caption: "Command Center, Liquid Slosh Risk Gauge & Real-Time Alert Feed"
      },
      {
        url: "/images/ojasews_digital_twin.png",
        caption: "Procedural 3D Terrain Digital Twin with Dynamic Slope Heatmap Shaders"
      },
      {
        url: "/images/ojasews_simulation_lab.png",
        caption: "Hardware & Physics Ingestion Matrix — Moisture, Tilt, Rain & Cohesion"
      }
    ]
  },
  {
    id: "geochange-ai",
    title: "GeoChange AI — Satellite-Driven Environmental Intelligence & Change Detection",
    subtitle: "Multi-Sensor Remote Sensing, Pixel-Level Annual Change Dating & NASA Carbon Accounting",
    category: "Geospatial & Environmental AI",
    featured: true,
    date: "Nov 2026",
    description: "Developed GeoChange AI — an end-to-end remote sensing platform that detects, quantifies, and visualizes terrestrial land-cover transformations over multi-year intervals (2021–2026). Winner of the Best Presentation Award at the INDU X 5.0 International Hackathon (Vikrant University, Gwalior in partnership with ARINA AI and GO KLOUD). Enforces a strict Data Readiness Gate before comparing pixels, evaluating multi-band cloud masks (Cloud Score+ / QA60) at 10m resolution across redundant STAC providers (AWS Earth Search, Microsoft Planetary Computer, CDSE). Combines Sentinel-2 optical bands, multi-spectral indices (dNDVI, dNDWI, dNDBI), Google Dynamic World ML land-cover classifications, and Landsat 8/9 thermal radiometry into actionable indicators.",
    architectureDetails: [
      "Rigorous Data Readiness Gate with multi-catalog STAC querying, sub-pixel registration, normalization, and cryptographic audit certification.",
      "Multi-class land cover transition detection (built-up expansion, vegetation loss/gain, water bodies) with confidence scoring and hectare measurements.",
      "Pixel-level annual change dating (Year of Change) tracking composites from 2021 to 2026 with 50m spatial smoothing and scrubbable timeline player.",
      "NASA/ORNL Global Aboveground Biomass Carbon accounting calculating lost carbon storage in tonnes of CO2 equivalent (tCO2e) with 10th-to-90th percentile uncertainty bounds.",
      "Landsat 8/9 daytime thermal infrared coupling quantifying urban surface temperature differentials (Δ°C), and automated publication-ready ReportLab PDF / GeoJSON report generation."
    ],
    technologies: ["Python", "FastAPI", "Sentinel-2 (10m)", "Google Earth Engine", "Dynamic World", "Landsat 8/9 Thermal", "NASA/ORNL Carbon", "Leaflet", "ReportLab", "GeoJSON", "STAC APIs"],
    badge: "Best Presentation Award — INDU X 5.0",
    images: [
      {
        url: "/images/geochange_dashboard.png",
        caption: "GeoChange AI Command Center & Multi-Catalog Data Readiness Hub"
      },
      {
        url: "/images/geochange_map.png",
        caption: "Pixel-Level Annual Change Dating (2021–2026) with Scrubbable Timeline Player"
      },
      {
        url: "/images/geochange_indicators.png",
        caption: "NASA/ORNL Biomass Carbon Accounting & CO2 Equivalent Loss Modeling"
      }
    ]
  },
  {
    id: "neuroview",
    title: "NeuroView — 3D Spatial Telemetry & Real-Time WebGL",
    subtitle: "High-Throughput Spatial Signal Processing, Custom GLSL Shaders & Cascading LLMs",
    category: "Deep Learning & Neural Systems",
    featured: true,
    date: "Jun 2026 – Jul 2026",
    description: "Developed NeuroView, a high-concurrency 3D spatial telemetry and signal visualization platform that bridges low-latency scientific computing with modern WebGL pipelines. Engineered an asynchronous FastAPI backend using specialized numerical processing libraries (MNE-Python, NumPy) to parse high-density binary scientific data streams and map 3D coordinate matrices. Built an interactive Three.js (WebGL) frontend featuring custom GLSL shaders for real-time Inverse Distance Weighting (IDW) scalar field heatmap interpolation across arbitrary 3D geometric surfaces. Integrated an automated diagnostic pipeline utilizing cascading LLMs (Groq API, DeepSeek) for real-time anomaly detection. Delivered a fully Dockerized, cloud-native application optimized for distributed spatial telemetry.",
    architectureDetails: [
      "High-throughput asynchronous FastAPI backend streaming multi-channel temporal sensor data and spatial coordinates.",
      "Three.js WebGL 3D spatial rendering engine with custom GLSL shaders for real-time IDW scalar field interpolation.",
      "Cascading agentic LLM pipeline (Groq API + DeepSeek) providing automated telemetry analysis and diagnostic reporting.",
      "Complete multi-stage Docker containerization with CI/CD optimization for microservice-based edge and cloud deployments."
    ],
    technologies: ["Python", "FastAPI", "Three.js", "WebGL / GLSL", "NumPy / MNE", "Groq API", "DeepSeek", "Docker"],
    badge: "3D Spatial Telemetry & Shaders",
    images: [
      {
        url: "/images/neuroview_brain.png",
        caption: "3D Spatial Telemetry & Scalar Heatmap Surface Rendering"
      },
      {
        url: "/images/neuroview_data.png",
        caption: "Synchronized High-Frequency Sensor Signal Ingestion & Spectral Decomp"
      }
    ]
  },
  {
    id: "slipsense",
    title: "SlipSense — Res U-Net Landslide Detection & Mapping",
    subtitle: "AI-Powered Semantic Segmentation on 14-Band Multispectral Satellite Imagery",
    category: "Edge AI & Vision",
    featured: true,
    date: "Sep 2025 – Dec 2025",
    description: "Developed an AI-powered landslide segmentation system using custom designed Residual U-Net (CRUNet) and DeepLabV3+ based on Atrous Spatial Pyramid Pooling (ASPP) on 14-band multispectral satellite imagery (HDF5), exposed via a Flask REST API for inference. Designed to handle severe topographical challenges and complex remote sensing data for disaster mitigation.",
    architectureDetails: [
      "Custom Residual U-Net (CRUNet) and DeepLabV3+ with ASPP for multi-scale feature capture.",
      "14-band multispectral satellite imagery preprocessing pipeline (HDF5 format & QGIS geospatial alignment).",
      "High-throughput Flask REST API inference backend for rapid deployment in geological hazard response."
    ],
    technologies: ["Python", "PyTorch", "DeepLabV3+", "Residual U-Net", "HDF5", "Multispectral Vision", "Flask", "QGIS"],
    badge: "14-Band Multispectral Satellite AI",
    images: [
      {
        url: "/images/slipsense_banner.png",
        caption: "SlipSense AI-Powered Landslide Segmentation Interface"
      },
      {
        url: "/images/slipsense_dataupload.png",
        caption: "Sentinel-2 .h5 Multispectral Imagery Ingestion"
      },
      {
        url: "/images/slipsense_analysis.png",
        caption: "DeepLabV3+ Semantic Segmentation Mask & Hazard Overlay"
      }
    ]
  },
  {
    id: "yolo-openvino",
    title: "YOLO-Based Live Object Detection on NPU",
    subtitle: "Hardware-Accelerated Low-Power Edge Vision with Intel OpenVINO",
    category: "Edge AI & Vision",
    featured: true,
    date: "Jun 2025 – Jul 2025",
    description: "Engineered a custom YOLOv8-based real-time object detection architecture optimized using Intel's OpenVINO toolkit. Deployed for continuous, low-power inference directly on Neural Processing Units (NPUs) powered by Intel Core Ultra AI PC architecture, achieving sustained high FPS without taxing host CPU/GPU.",
    architectureDetails: [
      "YOLOv8 deep learning model fine-tuned on COCO dataset and converted to OpenVINO Intermediate Representation (IR).",
      "Asynchronous inference pipeline leveraging Intel Core Ultra NPU for ultra-low power consumption.",
      "Real-time video stream ingestion and bounding box generation with OpenCV."
    ],
    technologies: ["Python", "YOLOv8", "Intel OpenVINO", "NPU Acceleration", "COCO Dataset", "OpenCV"],
    badge: "Intel NPU Accelerated",
    images: [
      {
        url: "/images/yolonp1.png",
        caption: "Real-Time YOLOv8 Object Detection Inference"
      },
      {
        url: "/images/yolonp2.png",
        caption: "Intel(R) AI Boost NPU Hardware Utilization & Performance"
      }
    ]
  },
  {
    id: "openwrt-router",
    title: "Custom Raspberry Pi Router & Network Hardening",
    subtitle: "Custom OpenWrt Firmware, Gateway Security & Traffic Hardening",
    category: "Embedded & Systems",
    featured: false,
    date: "Jan 2024",
    description: "Engineered a secure, custom network router on a Raspberry Pi 3 by compiling, customizing, and deploying OpenWrt Linux firmware. Hardened personal network infrastructure by configuring custom routing rules, iptables firewall policies, and gateway security protocols.",
    architectureDetails: [
      "Compiled custom OpenWrt firmware with stripped kernel packages tailored for Raspberry Pi 3 hardware.",
      "Configured robust iptables routing rules, NAT masquerading, and stateful packet inspection.",
      "Hardened DNS-over-HTTPS (DoH) and intrusion prevention mechanisms."
    ],
    technologies: ["OpenWrt", "Linux Kernel", "Raspberry Pi", "Bash", "iptables", "Network Security", "Networking"],
    badge: "Embedded Linux Build",
    images: [
      {
        url: "/images/router_prototype.png",
        caption: "Hardware Router Prototype Built on Raspberry Pi 3"
      }
    ]
  },
  {
    id: "ets-temp-prediction",
    title: "Temperature Prediction Platform (ETS Model)",
    subtitle: "High-Performance Multi-Language Forecasting (Python + C)",
    category: "Time Series & Scientific",
    featured: false,
    date: "Oct 2024 – Jan 2025",
    description: "A hybrid multi-language platform that predicts daily average temperatures using Exponential Smoothing (ETS) models implemented in Python, and computes discrete derivatives via compiled C routines to analyze short-term temperature fluctuations with high numerical precision.",
    architectureDetails: [
      "Exponential Smoothing (ETS) time series model built in Python with statistical decomposition.",
      "Optimized discrete derivative calculator written in ANSI C for rapid numerical trend analysis.",
      "Modular inter-process data pipeline linking C computation binaries with Python analytics."
    ],
    technologies: ["Python", "C", "ETS Modeling", "Time Series", "Scientific Computing", "Derivative Analysis"],
    badge: "Multi-Language Pipeline (Python + C)",
    githubUrl: "https://github.com/manan316",
    images: [
      {
        url: "/images/ets_forecast.png",
        caption: "ETS Model Training & Temperature Forecast Execution (Python)"
      },
      {
        url: "/images/ets_derivatives.png",
        caption: "High-Precision Discrete Derivative Calculation Matrix (C Implementation)"
      }
    ]
  },
  {
    id: "cnn-lstm-sentiment",
    title: "Hybrid CNN-LSTM Sentiment & Emotion Classification",
    subtitle: "Contextual and Sequential Emotion Classification on GoEmotions",
    category: "Deep Learning & Neural Systems",
    featured: false,
    date: "Aug 2025 – Sep 2025",
    description: "Developed a hybrid CNN-LSTM deep learning system trained on the fine-grained GoEmotions dataset for multi-class emotion classification. Implemented robust text preprocessing, word embeddings, and CNN feature extraction coupled with LSTM sequential memory to capture nuanced emotional patterns from textual data.",
    architectureDetails: [
      "Custom CNN layer for local n-gram feature extraction followed by LSTM for long-range sequential context.",
      "Pretrained word embeddings with tokenization pipelines handling multi-label classification.",
      "Evaluated across 28 distinct emotion categories from Reddit conversations."
    ],
    technologies: ["Python", "TensorFlow", "Keras", "LSTM", "CNN", "NLP", "Word2Vec", "GoEmotions Dataset"],
    badge: "Sequential NLP & Deep Learning",
    images: [
      {
        url: "/images/CNNLSTM.png",
        caption: "Hybrid CNN-LSTM Multi-Class Emotion Classification Architecture & Accuracy Progression"
      }
    ]
  }
];

export const researchWork: ResearchItem[] = [
  {
    id: "temporal-signal-classification",
    title: "High-Dimensional Temporal Signal Classification via Deep Learning",
    domain: "Digital Signal Processing & Machine Learning",
    focus: "Decoding Multi-Channel Temporal Sensor Data & Feature Representation",
    institutions: "Academic & Independent Research",
    description: "Developing an end-to-end machine learning system to classify complex multi-channel temporal signals across high-dimensional time-series datasets. Applies advanced temporal filtering, artifact rejection via Independent Component Analysis (ICA), wavelet decomposition, and feature extraction across multi-channel sensor arrays to train robust discriminative classifiers.",
    technologies: ["Python", "Digital Signal Processing", "Scikit-Learn", "PyTorch", "MNE-Python", "Time Series Analysis"],
    keyInnovations: [
      "Multi-channel temporal feature extraction and frequency-band power spectral density (PSD) computation.",
      "Filtering baseline noise artifacts and sensor drift using Independent Component Analysis (ICA) and adaptive Butterworth filters.",
      "Discriminative classification and dimensionality reduction using ensemble learners and convolutional temporal blocks."
    ]
  },
  {
    id: "edge-npu-vision",
    title: "Edge AI Acceleration & Low-Power NPU Inference",
    domain: "Computer Vision & Edge Computing",
    focus: "Intel OpenVINO & Neural Processing Unit Pipeline Optimization",
    institutions: "Indian Institute of Technology (IIT), Roorkee",
    description: "Exploring hardware-aware deep learning deployment. Focused on quantization, graph optimization, and asynchronous inference scheduling to execute state-of-the-art vision models on constrained client hardware with minimal thermal footprint.",
    technologies: ["Intel OpenVINO", "YOLOv8", "NPU Architecture", "Model Quantization (INT8/FP16)", "Python"],
    keyInnovations: [
      "Benchmarked throughput and latency curves across CPU, GPU, and dedicated NPU execution units.",
      "Asynchronous pipeline design preventing UI frame-drop during sustained computer vision workloads.",
      "Efficient INT8 calibration preserving high mAP for object detection."
    ]
  },
  {
    id: "satellite-crunet",
    title: "Multispectral Satellite Remote Sensing for Hazard Mitigation",
    domain: "Geospatial Vision & Semantic Segmentation",
    focus: "14-Band Satellite Data Ingestion, Google Earth Engine & Residual U-Net",
    institutions: "SAVERA Geotechnical Initiative",
    description: "Architected multi-spectral satellite remote sensing pipelines using Google Earth Engine (GEE), Sentinel-2 optical bands, and custom Residual U-Net architectures to segment terrain disturbance precursors and calculate biomass carbon changes.",
    technologies: ["Google Earth Engine (GEE)", "Sentinel-2", "Residual U-Net", "DeepLabV3+", "QGIS", "Python"],
    keyInnovations: [
      "Sub-pixel registration and QA60 cloud gating across multi-temporal satellite passes.",
      "Atrous Spatial Pyramid Pooling (ASPP) for multi-scale landslide scar detection in rugged Himalayan topography.",
      "Coupled biomass carbon accounting using NASA ORNL models."
    ]
  }
];

export const skillCategories: SkillCategory[] = [
  {
    category: "Agentic AI, Deep Learning & Vision",
    description: "Autonomous agents, Model Context Protocol, neural architectures, and edge vision",
    icon: "Brain",
    skills: [
      { name: "Agentic AI & Autonomous Workflows" },
      { name: "Model Context Protocol (MCP)" },
      { name: "PyTorch & PyTorch Lightning" },
      { name: "Intel OpenVINO IR Acceleration" },
      { name: "YOLOv8 Edge Object Detection" },
      { name: "DeepLabV3+ with ASPP" },
      { name: "Residual U-Net (CRUNet)" },
      { name: "Cascading LLM Orchestration" },
      { name: "OpenCV & Video Pipelines" },
      { name: "Hugging Face Transformers" }
    ]
  },
  {
    category: "Embedded Systems, IoT & Hardware",
    description: "Firmware, microcontrollers, wireless basebands, and hardware protocols",
    icon: "Cpu",
    skills: [
      { name: "Embedded Linux & OpenWrt Buildroot" },
      { name: "Device Tree Overlays (.dts)" },
      { name: "Kernel SPI / I2C / UART Drivers" },
      { name: "LoRaWAN & Semtech SX1303" },
      { name: "ChirpStack IoT Gateway Stack" },
      { name: "ESP32 & Arduino C++" },
      { name: "MIPS (MT7628) & ARM (Allwinner)" },
      { name: "Hardware Prototyping & PCB Design" }
    ]
  },
  {
    category: "Networking & Linux Development",
    description: "Operating systems, TCP/IP networking, kernel configuration, and low-level C",
    icon: "Server",
    skills: [
      { name: "Linux/UNIX Systems Programming" },
      { name: "Kernel Customization & Syscalls" },
      { name: "TCP/IP Protocol Stack Tuning" },
      { name: "Network Hardening & iptables" },
      { name: "POSIX Sockets & Packet Forwarding" },
      { name: "C & Modern C++ (C++17/20)" },
      { name: "Bash / Shell Script Automation" },
      { name: "Network Security & Cryptography" }
    ]
  },
  {
    category: "Geospatial, Satellite & GEE",
    description: "Planetary computing, multi-spectral remote sensing, and Earth Engine",
    icon: "Layers",
    skills: [
      { name: "Google Earth Engine (GEE)" },
      { name: "Sentinel-2 Multi-Spectral (10m)" },
      { name: "Landsat 8/9 Thermal Radiometry" },
      { name: "NASA ORNL Biomass Carbon Models" },
      { name: "STAC Catalog Querying (AWS/MSPC)" },
      { name: "QGIS & Geospatial Analysis" },
      { name: "Google Dynamic World ML" },
      { name: "HDF5 & Raster GeoTIFF Processing" }
    ]
  },
  {
    category: "Mathematical Modeling, Stats & CS",
    description: "Algorithmic theory, numerical methods, physical simulations, and statistics",
    icon: "Code2",
    skills: [
      { name: "Computer Science & Algorithmic Theory" },
      { name: "Mohr-Coulomb Geotechnical Modeling" },
      { name: "Inverse Distance Weighting (IDW)" },
      { name: "Time Series Forecasting (ETS Models)" },
      { name: "Statistical Signal Filtering & DSP" },
      { name: "Random Forest & Ensemble Methods" },
      { name: "Linear Algebra & Vector Calculus" },
      { name: "Discrete Derivative Computation" }
    ]
  },
  {
    category: "Cloud, Systems & Full-Stack Engine",
    description: "Modern web, WebGL shaders, distributed APIs, and containerization",
    icon: "Layers",
    skills: [
      { name: "Docker Multi-Stage Containerization" },
      { name: "FastAPI Asynchronous Microservices" },
      { name: "Three.js (WebGL & GLSL Shaders)" },
      { name: "Cloudflare Workers & Edge Runtime" },
      { name: "React 19 & TypeScript" },
      { name: "PostgreSQL & SQLite Database Engines" },
      { name: "Redis Caching" },
      { name: "CI/CD & Git Automation" }
    ]
  }
];

export const educationList: EducationItem[] = [
  {
    institution: "University of Jammu",
    degree: "Bachelor of Technology — B.Tech, Artificial Intelligence & Mathematics",
    duration: "Aug 2024 – Aug 2028",
    location: "Jammu & Kashmir, India",
    highlights: [
      "Core coursework: Artificial Intelligence, Applied Mathematics, Data Structures, Algorithms, Linear Algebra, Machine Learning, Operating Systems, Computer Networks.",
      "Performed dual lead role as Arjuna and Guru Kripacharya in 'Rashmirathi' at the 25th Bharat Rang Mahotsav (BRM) 2026 by National School of Drama (NSD).",
      "Organizing Team Member for Innovathon 1.0 — University of Jammu's premier National level Hackathon.",
      "Undergraduate researcher in edge AI acceleration, embedded Linux firmware, agentic AI, and geospatial satellite vision."
    ],
    skills: ["Artificial Intelligence", "Mathematics", "Machine Learning", "Software Development", "Data Structures", "System Design"]
  }
];

export const trainingsAndWorkshops: TrainingWorkshopItem[] = [
  {
    title: "Innovation, Design and Entrepreneurship (IDE) Bootcamp",
    institution: "University of Ladakh",
    year: "Edition 3 · 2026",
    description: "Selected participant at the residential IDE Bootcamp hosted at University of Ladakh, supported by the Ministry of Education, AICTE, Wadhwani Foundation, and SBI Foundation. Focused on deep-tech venture prototyping and rapid validation of life-safety technologies."
  },
  {
    title: "Visual Attention Modeling & High-Speed Instrumentation Workshop",
    institution: "Indian Institute of Technology (IIT), Jammu",
    year: "2024",
    description: "Participated in an intensive hands-on instrumentation workshop focused on high-speed eye-tracking hardware, spatial gaze calibration, visual attention trajectory modeling, and statistical signal filtering."
  },
  {
    title: "Junior Scientist Selection — 26th National Children Science Congress",
    institution: "NCSTC · IIT Kanpur",
    year: "2018",
    description: "Selected as Junior Scientist to present original scientific research at IIT Kanpur after winning district and state level competitive evaluations."
  }
];

export const certifications: CertificationItem[] = [
  {
    title: "AI Agents 101: Building AI Agents with MCP and Open-Source Inference",
    issuer: "AMD (Advanced Micro Devices)",
    issueDate: "Aug 2026",
    skills: ["Agentic AI", "Model Context Protocol (MCP)", "Open-Source Inference", "Async Workflows"],
    thumbnail: "/images/amd_cert_thumb.png",
    credentialUrl: "#"
  },
  {
    title: "Embedded & IoT Engineering Industrial Certification",
    issuer: "UniConverge Technologies (UCT)",
    issueDate: "Jul 2026",
    skills: ["Embedded Linux", "OpenWrt", "LoRaWAN", "ChirpStack", "Kernel Drivers", "Sensors"],
    thumbnail: "/images/uct_cert_thumb.png",
    credentialUrl: "#"
  }
];
