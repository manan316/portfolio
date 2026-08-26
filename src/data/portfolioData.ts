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
  role: "Software Engineer & AI/ML / Embedded Systems Researcher",
  headline: "Engineer, Researcher & Polymath | Exploring Cloud, IoT, AI/ML, Computer Vision, Linux, Networking | Ex-Intern IIT Roorkee, UCT",
  subHeadline: "B.Tech Information Technology & Mathematics · University of Jammu",
  status: "PRTS_LINK ACTIVE // SYS_READY",
  location: "Jammu & Kashmir, India",
  email: "manan31206@gmail.com",
  github: "https://github.com/manan316",
  linkedin: "https://www.linkedin.com/in/manan-sharma-3980b1324/",
  resumeUrl: "/Resume.pdf",
  profileImage: "/images/profile.png",
  aboutBio: "Passionate Software Engineer with a strong foundation in scalable development and a versatile command of modern programming languages. Specializes in building robust applications within Linux environments and developing end-to-end IoT solutions that process complex, real-world data. Leverages a unique background in deep learning algorithms to build intelligent, high-performance systems and integrate edge AI across diverse domains. Dedicated to writing clean, maintainable code to drive impactful technical solutions.",
  currentPursuits: [
    "Developing custom embedded Linux firmware & kernel driver optimizations for LoRaWAN gateway architectures",
    "Pioneering edge AI inference acceleration on NPUs with Intel OpenVINO",
    "Researching digital signal processing (DSP) and deep neural architectures for multi-channel temporal telemetry",
    "Exploring scalable agentic workflows with Model Context Protocol (MCP)"
  ],
  pastHighlights: [
    "Researched Computer Vision & NPU acceleration at Indian Institute of Technology (IIT), Roorkee",
    "Engineered custom OpenWrt firmware & SX1303 LoRa hardware integration at UniConverge Technologies",
    "Developed SlipSense: AI-powered landslide segmentation using custom CRUNet on 14-band multispectral satellite imagery",
    "Created NeuroView: High-throughput 3D spatial telemetry & signal visualization platform with WebGL shaders & cascading LLMs",
    "Organised Innovathon 1.0 National level Hackathon at University of Jammu",
    "Performed double role as Arjuna & Guru Kripacharya in 'Rashmirathi' at 25th Bharat Rang Mahotsav (BRM) International Theatre Festival (2026)",
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
    type: "Research Internship · On-site",
    location: "Roorkee, Uttarakhand, India",
    duration: "Jun 2025 – Jul 2025 · 2 mos",
    period: "Jun 2025 – Jul 2025",
    description: "Worked on Computer Vision models and data annotation tools, and developed a custom YOLOv8-based Object Detection System optimized using Intel’s OpenVINO library for efficient real-time inference on NPU and accelerated performance.",
    keyContributions: [
      "Engineered high-performance real-time Object Detection pipelines using custom-trained YOLOv8 architectures.",
      "Accelerated deep learning inference on Intel Core Ultra Neural Processing Units (NPUs) using the Intel OpenVINO toolkit.",
      "Built internal data annotation and model validation pipelines for sustained low-power computer vision tasks.",
      "Demonstrated real-time high-throughput inference directly on AI PC edge hardware."
    ],
    skills: ["Computer Vision", "YOLOv8", "Intel OpenVINO", "NPU Acceleration", "Deep Learning", "Python", "OpenCV"],
    thumbnail: "/images/iitr_letter_thumb.png",
    thumbnailLabel: "IIT Roorkee Research Letter"
  }
];

export const projects: ProjectItem[] = [
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
    githubUrl: "https://github.com/manan316/neuroview",
    badge: "Featured System Build",
    images: [
      {
        url: "/images/neuroview_brain.png",
        caption: "3D Spatial Telemetry & Scalar Heatmap Surface Rendering"
      },
      {
        url: "/images/neuroview_data.png",
        caption: "NeuroView Real-Time Signal Ingestion & Parser Pipeline"
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
    mentor: "Dr. Jatinder Manhas",
    description: "Developed an AI-powered landslide segmentation system using custom designed Residual U-Net (CRUNet) and DeepLabV3+ based on Atrous Spatial Pyramid Pooling (ASPP) on 14-band multispectral satellite imagery (HDF5), exposed via a Flask REST API for inference. Designed to handle severe topographical challenges and complex remote sensing data for disaster mitigation.",
    architectureDetails: [
      "Custom Residual U-Net (CRUNet) and DeepLabV3+ with ASPP for multi-scale feature capture.",
      "14-band multispectral satellite imagery preprocessing pipeline (HDF5 format & QGIS geospatial alignment).",
      "High-throughput Flask REST API inference backend for rapid deployment in geological hazard response."
    ],
    technologies: ["Python", "PyTorch", "DeepLabV3+", "Residual U-Net", "HDF5", "Multispectral Vision", "Flask", "QGIS"],
    badge: "Satellite AI Innovation",
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
    technologies: ["Python", "PyTorch / TensorFlow", "CNN", "LSTM", "NLP", "Word Embeddings", "GoEmotions Dataset"],
    badge: "Hybrid Neural Architecture",
    images: [
      {
        url: "/images/CNNLSTM.png",
        caption: "Hybrid CNN-LSTM Deep Learning Pipeline Architecture"
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
    focus: "Custom Residual U-Net (CRUNet) on 14-Band HDF5 Satellite Data",
    description: "Researched deep semantic segmentation architectures for complex geological terrain in the Himalayan region. Built CRUNet to combine high-resolution spatial details with broad multi-scale receptive fields from 14-band satellite sensors.",
    technologies: ["CRUNet", "DeepLabV3+", "HDF5", "Multispectral Remote Sensing", "PyTorch", "QGIS"],
    keyInnovations: [
      "Designed Residual connections inside U-Net encoder blocks to eliminate vanishing gradients on 14 spectral channels.",
      "Integrated Atrous Spatial Pyramid Pooling (ASPP) to capture variable-scale landslide scars.",
      "Facilitated rapid geospatial risk assessment for disaster management teams."
    ]
  }
];

export const skillCategories: SkillCategory[] = [
  {
    category: "AI, Deep Learning & Vision",
    description: "Neural architectures, computer vision, NLP, and signal processing",
    icon: "Brain",
    skills: [
      { name: "PyTorch" },
      { name: "TensorFlow" },
      { name: "Keras" },
      { name: "Intel OpenVINO" },
      { name: "Computer Vision (YOLOv8, OpenCV)" },
      { name: "DeepLabV3+ / U-Net (CRUNet)" },
      { name: "NLP & Transformers" },
      { name: "CNN & LSTM Networks" },
      { name: "Digital Signal Processing (DSP)" },
      { name: "Scikit-learn" },
      { name: "Model Context Protocol (MCP)" }
    ]
  },
  {
    category: "Embedded Systems, IoT & Linux",
    description: "Firmware engineering, kernel customization, and wireless protocols",
    icon: "Cpu",
    skills: [
      { name: "OpenWrt Build Environments" },
      { name: "Linux Firmware Development" },
      { name: "Kernel Customization & SPI Drivers" },
      { name: "Device Tree Overlays (.dts)" },
      { name: "LoRaWAN & SX1303 Baseband" },
      { name: "ChirpStack IoT Stack" },
      { name: "Raspberry Pi & Arduino" },
      { name: "MIPS (MT7628) & ARM (NanoPi)" },
      { name: "PCB Design & Hardware Prototyping" }
    ]
  },
  {
    category: "Programming Languages",
    description: "Systems, scientific, application, and scripting languages",
    icon: "Code2",
    skills: [
      { name: "Python" },
      { name: "C" },
      { name: "C++" },
      { name: "Rust" },
      { name: "R" },
      { name: "JavaScript" },
      { name: "TypeScript" },
      { name: "Kotlin" },
      { name: "MATLAB" },
      { name: "Bash / Shell Scripting" },
      { name: "PowerShell" },
      { name: "SQL" }
    ]
  },
  {
    category: "Systems, Cloud & DevOps",
    description: "Infrastructure, networking, containerization, and cloud platforms",
    icon: "Server",
    skills: [
      { name: "Linux/UNIX System Administration" },
      { name: "TCP/IP Networking" },
      { name: "Docker" },
      { name: "Microsoft Azure" },
      { name: "Google Cloud Platform (GCP)" },
      { name: "Amazon Web Services (AWS)" },
      { name: "Git / Version Control" },
      { name: "Cryptography & Security" },
      { name: "DevOps & CI/CD Pipelines" },
      { name: "DBMS" }
    ]
  },
  {
    category: "Full Stack, WebGL & Specialized Tools",
    description: "Modern APIs, 3D graphics, data visualization, and spatial analytics",
    icon: "Layers",
    skills: [
      { name: "FastAPI" },
      { name: "Flask" },
      { name: "Three.js (WebGL & GLSL Shaders)" },
      { name: "React" },
      { name: "HTML5 / CSS3" },
      { name: "Figma" },
      { name: "PowerBI & Tableau" },
      { name: "QGIS (Geospatial Analysis)" },
      { name: "Unity 3D & AR/VR" },
      { name: "CAD" },
      { name: "IBM SPSS Statistics" }
    ]
  }
];

export const educationList: EducationItem[] = [
  {
    institution: "University of Jammu",
    degree: "Bachelor of Technology — B.Tech, Information Technology & Mathematics",
    duration: "Aug 2024 – Aug 2028",
    location: "Jammu & Kashmir, India",
    highlights: [
      "Core coursework: Information Technology, Discrete & Applied Mathematics, Data Structures, Algorithms, Linear Algebra, Machine Learning, DBMS, Software Engineering.",
      "Performed double role as Arjuna and Guru Kripacharya in 'Rashmirathi' at the 25th Bharat Rang Mahotsav (BRM) 2026 by National School of Drama (NSD).",
      "Organizing Team Member for Innovathon 1.0 — University of Jammu's premier National level Hackathon.",
      "Active researcher in systems programming, high-performance computing, applied mathematics, and edge AI computer vision."
    ],
    skills: ["Information Technology", "Mathematics", "Artificial Intelligence", "Software Development", "Data Structures", "System Design"]
  }
];

export const trainingsAndWorkshops: TrainingWorkshopItem[] = [
  {
    title: "Junior Scientist — 26th National Children Science Congress (NCSC)",
    institution: "Indian Institute of Technology (IIT), Kanpur",
    year: "2018",
    description: "Selected and participated as Junior Scientist at the prestigious 26th NCSC held at Kendriya Vidyalaya, Indian Institute of Technology, Kanpur, presenting scientific research.",
    category: "SCIENCE CONGRESS / HONOR"
  },
  {
    title: "Visual Attention Modeling & High-Speed Instrumentation Workshop",
    institution: "Indian Institute of Technology (IIT), Jammu",
    year: "2024",
    description: "Participated in an intensive hands-on workshop focusing on high-speed eye-tracking instrumentation, visual attention trajectory modeling, spatial gaze calibration, and statistical research methodologies.",
    category: "WORKSHOP / RESEARCH"
  },
  {
    title: "Innovathon 1.0 National Hackathon Management",
    institution: "University of Jammu",
    year: "2025",
    description: "Core member of the event organizing team managing operations, technical logistics, and participant mentoring for the National-level Innovathon 1.0 hackathon.",
    category: "LEADERSHIP / HACKATHON"
  },
  {
    title: "Actor (Arjuna & Guru Kripacharya) — 25th Bharat Rang Mahotsav (BRM)",
    institution: "National School of Drama (NSD) & University of Jammu",
    year: "2026",
    description: "Performed a dual role portraying Arjuna and Guru Kripacharya in the dramatic presentation of Ramdhari Singh Dinkar's epic 'Rashmirathi' at the 25th Bharat Rang Mahotsav International Theatre Festival, organized by NSD, New Delhi (Ministry of Culture) and University of Jammu.",
    category: "THEATRE / BRM FESTIVAL"
  },
  {
    title: "Innovation, Design and Entrepreneurship (IDE) Bootcamp",
    institution: "University of Ladakh (MoE & AICTE)",
    year: "2026",
    description: "Selected student participant at the residential IDE Bootcamp (Edition 3 - Phase 3) hosted at the University of Ladakh, organized by the Ministry of Education (Govt. of India), AICTE, Wadhwani Foundation, and SBI Foundation.",
    category: "BOOTCAMP / INNOVATION"
  }
];

export const certifications: CertificationItem[] = [
  {
    title: "AI Agents 101: Building AI Agents with MCP and Open-Source Inference",
    issuer: "AMD (Advanced Micro Devices)",
    issueDate: "Aug 2026",
    skills: ["Artificial Intelligence (AI)", "Model Context Protocol (MCP)", "Open-Source Inference", "Agentic Workflows"],
    thumbnail: "/images/amd_cert_thumb.png"
  },
  {
    title: "Embedded & IoT Engineering Industrial Certification",
    issuer: "UniConverge Technologies (UCT)",
    issueDate: "Jul 2026",
    skills: ["Embedded Linux", "OpenWrt", "LoRaWAN", "ChirpStack", "Kernel Drivers"],
    thumbnail: "/images/uct_cert_thumb.png"
  }
];
