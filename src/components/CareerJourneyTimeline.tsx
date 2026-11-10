import React, { useState } from 'react';
import { ExperienceItem, ResearchItem, TrainingWorkshopItem } from '../types/portfolio';
import { Briefcase, Award, GraduationCap, Microscope, ZoomIn, CheckCircle2, Trophy, Lightbulb, Theater } from 'lucide-react';

interface CareerJourneyTimelineProps {
  experiences: ExperienceItem[];
  researchWork: ResearchItem[];
  trainingWorkshops: TrainingWorkshopItem[];
  onOpenImage: (image: { url: string; caption: string }) => void;
}

type TimelineFilter = 'all' | 'industry' | 'research' | 'honors' | 'academic';

interface TimelineEvent {
  id: string;
  category: TimelineFilter;
  title: string;
  organization: string;
  period: string;
  location?: string;
  badge?: string;
  barClass: string;
  badgeBg: string;
  description: string;
  highlights?: string[];
  skills?: string[];
  thumbnail?: string;
  thumbnailLabel?: string;
  icon: React.ReactNode;
}

export const CareerJourneyTimeline: React.FC<CareerJourneyTimelineProps> = ({
  onOpenImage,
}) => {
  const [activeFilter, setActiveFilter] = useState<TimelineFilter>('all');

  const events: TimelineEvent[] = [
    {
      id: 'indux-hackathon',
      category: 'honors',
      title: 'Best Presentation Award — INDU X 5.0 International Hackathon',
      organization: 'Vikrant University (in partnership with ARINA AI & GO KLOUD)',
      period: 'Nov 2026',
      location: 'Gwalior, India',
      badge: '🏆 1st Prize / Best Presentation',
      barClass: 'woodblock-bar-gold',
      badgeBg: 'bg-[#c9a227] text-[#1a3055]',
      description: 'Awarded Best Presentation for GeoChange AI — an end-to-end multi-sensor remote sensing and NASA ORNL biomass carbon accounting platform for terrestrial disturbance tracking.',
      highlights: [
        'Automated STAC catalog querying across AWS Earth Search and Microsoft Planetary Computer.',
        'Validated pixel-level annual change dating (2021–2026) with sub-pixel registration and QA60 cloud gating.',
        'Engineered publication-ready PDF and GeoJSON environmental risk dispatch.'
      ],
      skills: ['Remote Sensing', 'Sentinel-2', 'NASA Carbon Model', 'FastAPI', 'Leaflet', 'Pitch & Defense'],
      icon: <Trophy className="w-5 h-5 text-[#c9a227]" />
    },
    {
      id: 'uct-internship',
      category: 'industry',
      title: 'Embedded & Internet of Things Engineer (Intern)',
      organization: 'UniConverge Technologies',
      period: 'Jun 2026 – Jul 2026',
      location: 'Noida, Uttar Pradesh, India',
      badge: 'Industrial Internship',
      barClass: 'woodblock-bar-grass',
      badgeBg: 'bg-[#747800] text-[#f5f0e1]',
      description: 'Developed custom embedded Linux firmware utilizing OpenWrt build environments across MIPS (MT7628) and ARM (NanoPi Allwinner H3) gateways. Engineered hardware integration for Semtech SX1303 LoRa basebands.',
      highlights: [
        'Compiled custom OpenWrt firmware with stripped kernel packages for low-power edge gateways.',
        'Wrote custom Device Tree Overlays (.dts) and optimized kernel SPI bus drivers for SX1303 basebands.',
        'Tuned Linux TCP/IP networking stack and ChirpStack packet forwarders for edge throughput.'
      ],
      skills: ['OpenWrt', 'LoRaWAN', 'SX1303 Baseband', 'Linux Kernel', 'SPI Drivers', 'MIPS / ARM', 'ChirpStack'],
      thumbnail: '/images/uct_cert_thumb.png',
      thumbnailLabel: 'UniConverge Technologies Internship Certificate',
      icon: <Briefcase className="w-5 h-5 text-[#747800]" />
    },
    {
      id: 'iitr-internship',
      category: 'research',
      title: 'Research Intern (Computer Vision & Edge AI)',
      organization: 'Indian Institute of Technology (IIT), Roorkee',
      period: 'Jun 2025 – Jul 2025',
      location: 'Roorkee, Uttarakhand, India',
      badge: 'Tier-1 Institute Research',
      barClass: 'woodblock-bar-ultramarine',
      badgeBg: 'bg-[#2a5a8c] text-[#f5f0e1]',
      description: 'Engineered a custom YOLOv8 object detection pipeline accelerated using the Intel OpenVINO toolkit for high-FPS, low-power inference on Neural Processing Units (NPUs).',
      highlights: [
        'Fine-tuned custom YOLOv8 models and converted to OpenVINO Intermediate Representation (IR).',
        'Accelerated continuous inference on Intel Core Ultra NPU hardware with ultra-low thermal dissipation.',
        'Built asynchronous video stream pipelines with OpenCV eliminating UI frame drops.'
      ],
      skills: ['Intel OpenVINO', 'YOLOv8', 'NPU Acceleration', 'Computer Vision', 'PyTorch', 'OpenCV'],
      thumbnail: '/images/iitr_letter_thumb.png',
      thumbnailLabel: 'IIT Roorkee Research Internship Letter',
      icon: <Microscope className="w-5 h-5 text-[#2a5a8c]" />
    },
    {
      id: 'savera-ojasews',
      category: 'research',
      title: 'Lead Architect — Project SAVERA (OJASEWS)',
      organization: 'SAVERA Geotechnical Early-Warning Initiative',
      period: 'Oct 2026 – Present',
      location: 'Jammu & Kashmir, India',
      badge: 'Himalayan Safety Flagship',
      barClass: 'woodblock-bar-vermilion',
      badgeBg: 'bg-[#d4553a] text-[#f5f0e1]',
      description: 'Architected OJASEWS: an autonomous geotechnical slope simulation, procedural 3D digital twin, and life-safety early warning platform designed to monitor slope failure precursors across steep Himalayan corridors (Samroli, NH-44).',
      highlights: [
        'Combined Mohr-Coulomb physics heuristics with a 4-class Random Forest ML classifier for dual-track risk arbitration.',
        'Constructed a procedural Three.js 3D terrain twin with dynamic slope shader heatmaps and rainfall particle effects.',
        'Engineered sub-second mobile push notifications via ntfy.sh with priority bypass and lock-screen alerts.'
      ],
      skills: ['Geotechnical AI', 'Three.js / WebGL', 'FastAPI', 'ntfy.sh', 'ESP32 / IoT', 'Mohr-Coulomb Physics'],
      icon: <Microscope className="w-5 h-5 text-[#d4553a]" />
    },
    {
      id: 'btech-ju',
      category: 'academic',
      title: 'Bachelor of Technology (B.Tech) — AI & Mathematics',
      organization: 'University of Jammu',
      period: 'Aug 2024 – Aug 2028',
      location: 'Jammu & Kashmir, India',
      badge: 'Academic Degree',
      barClass: 'woodblock-bar-indigo',
      badgeBg: 'bg-[#1a3055] text-[#f5f0e1]',
      description: 'Undergraduate studies in Artificial Intelligence, Advanced Linear Algebra, Discrete Mathematics, Operating Systems, Algorithm Design, and Numerical Computing.',
      highlights: [
        'Organised Innovathon 1.0 — National Level Hackathon at University of Jammu.',
        'Technical lead for departmental high-performance computing initiatives.'
      ],
      skills: ['Artificial Intelligence', 'Mathematics', 'Algorithms', 'Operating Systems', 'DSP'],
      icon: <GraduationCap className="w-5 h-5 text-[#1a3055]" />
    },
    {
      id: 'ide-bootcamp',
      category: 'honors',
      title: 'Innovation, Design and Entrepreneurship (IDE) Bootcamp',
      organization: 'University of Ladakh · MoE & AICTE (Govt. of India)',
      period: 'Edition 3 · 2026',
      location: 'Leh, Ladakh, India',
      badge: 'National Innovation Bootcamp',
      barClass: 'woodblock-bar-gold',
      badgeBg: 'bg-[#c9a227] text-[#1a3055]',
      description: 'Selected participant at the residential IDE Bootcamp hosted at University of Ladakh, supported by the Ministry of Education, AICTE, Wadhwani Foundation, and SBI Foundation, focusing on deep-tech venture design.',
      highlights: [
        'Rapid prototyping of edge AI hardware and life-safety early-warning architectures.',
        'Market viability analysis and deployment modeling for rugged high-altitude terrains.'
      ],
      skills: ['Deep-Tech Prototyping', 'Venture Design', 'AICTE / MoE', 'Systems Validation'],
      icon: <Lightbulb className="w-5 h-5 text-[#c9a227]" />
    },
    {
      id: 'brm-theatre',
      category: 'honors',
      title: "Dual Lead Role in 'Rashmirathi' (Arjuna & Guru Kripacharya)",
      organization: '25th Bharat Rang Mahotsav (BRM) International Theatre Festival',
      period: 'Feb 2026',
      location: 'National School of Drama (NSD) Circuit',
      badge: 'Cultural / Polymath Honor',
      barClass: 'woodblock-bar-vermilion',
      badgeBg: 'bg-[#d4553a] text-[#f5f0e1]',
      description: "Selected to perform dual prominent roles as warrior Arjuna and Guru Kripacharya in Ramdhari Singh Dinkar's monumental epic drama 'Rashmirathi' at Asia's largest international theatre festival, organized by NSD, New Delhi and University of Jammu.",
      highlights: [
        'Delivered complex verse recitation and theatrical performance under national festival direction.',
        'High-stakes stage presence, articulation, and discipline under pressure.'
      ],
      skills: ['Public Defense', 'Stage Presence', 'Classical Verse Recitation', 'Cross-Domain Polymath'],
      icon: <Theater className="w-5 h-5 text-[#d4553a]" />
    },
    {
      id: 'iit-jammu-workshop',
      category: 'research',
      title: 'Visual Attention Modeling & High-Speed Instrumentation',
      organization: 'Indian Institute of Technology (IIT), Jammu',
      period: '2024',
      location: 'Jammu, India',
      badge: 'IIT Research Workshop',
      barClass: 'woodblock-bar-ultramarine',
      badgeBg: 'bg-[#2a5a8c] text-[#f5f0e1]',
      description: 'Participated in an intensive hands-on instrumentation workshop focused on high-speed eye-tracking hardware, spatial gaze calibration, visual attention trajectory modeling, and statistical signal filtering.',
      highlights: [
        'Hands-on experimentation with high-speed optical instrumentation and spatio-temporal calibration.',
        'Statistical validation and signal filtering of continuous gaze coordinates.'
      ],
      skills: ['Instrumentation', 'Signal Processing', 'Spatial Calibration', 'Statistical Analysis'],
      icon: <Microscope className="w-5 h-5 text-[#2a5a8c]" />
    },
    {
      id: 'ncsc-scientist',
      category: 'honors',
      title: 'Junior Scientist Selection — 26th National Children Science Congress',
      organization: 'NCSTC · IIT Kanpur',
      period: 'Dec 2018',
      location: 'IIT Kanpur, Uttar Pradesh, India',
      badge: 'National Science Honor',
      barClass: 'woodblock-bar-grass',
      badgeBg: 'bg-[#747800] text-[#f5f0e1]',
      description: 'Selected as Junior Scientist to present original scientific research at IIT Kanpur after winning district and state level competitive evaluations.',
      highlights: [
        'Presented original research on environmental science methodologies.',
        'Evaluated by national scientist panels and faculty at IIT Kanpur.'
      ],
      skills: ['Scientific Method', 'Environmental Research', 'Public Defense'],
      icon: <Award className="w-5 h-5 text-[#747800]" />
    }
  ];

  const filteredEvents = events.filter((ev) =>
    activeFilter === 'all' ? true : ev.category === activeFilter
  );

  return (
    <section id="journey" className="py-20 px-4 sm:px-8 lg:px-12 2xl:px-16 w-full max-w-[1720px] mx-auto scroll-mt-24">
      {/* Section Header */}
      <div className="mb-12">
        <div className="flex flex-wrap items-center gap-3 mb-3">
          <span className="cartouche-label text-xs">
            [03 // CHRONICLES OF ENDEAVOR]
          </span>
          <span className="font-serif tracking-widest text-xs uppercase text-[#1a3055]/70 font-bold">
            RESEARCH LABS · INDUSTRIAL IOT · IMPERIAL HONORS
          </span>
        </div>
        <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#1a3055] mb-4">
          Chronicles & Field Research
        </h2>
        <p className="font-serif text-sm sm:text-base max-w-3xl text-[#1a3055]/85 leading-relaxed">
          The engineering journey spanning tier-1 research institutes (IIT Roorkee), high-throughput industrial IoT firmware (UniConverge), international hackathon victories, and celebrated cultural polymath achievements.
        </p>
      </div>

      {/* Woodblock Filter Tabs */}
      <div className="flex flex-wrap gap-2.5 mb-10">
        {[
          { key: 'all', label: 'All Chronicles' },
          { key: 'industry', label: 'Industry & Firmware' },
          { key: 'research', label: 'Research Institutes' },
          { key: 'honors', label: 'Hackathons & Honors' },
          { key: 'academic', label: 'Academic Foundation' }
        ].map((tab) => (
          <button
            key={tab.key}
            onClick={() => setActiveFilter(tab.key as TimelineFilter)}
            className={`px-4 py-2 text-xs font-serif font-bold uppercase tracking-widest border-3 border-[#1a3055] transition-all duration-150 ${
              activeFilter === tab.key
                ? 'bg-[#d4553a] text-[#f5f0e1] shadow-woodblock translate-x-0.5 translate-y-0.5'
                : 'bg-[#f5f0e1] text-[#1a3055] hover:bg-[#c9a227]/20 hover:shadow-woodblock hover:translate-x-0.5 hover:translate-y-0.5'
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Woodblock Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">
        {filteredEvents.map((ev) => (
          <div
            key={ev.id}
            className={`woodblock-card ${ev.barClass} p-6 sm:p-8 flex flex-col justify-between group relative`}
          >
            <div>
              {/* Top Row */}
              <div className="flex flex-wrap items-center justify-between gap-2 mb-4">
                <span className={`px-2.5 py-1 text-[11px] font-serif font-bold uppercase tracking-wider border-2 border-[#1a3055] ${ev.badgeBg}`}>
                  {ev.badge}
                </span>
                <span className="font-serif text-xs font-bold text-[#1a3055]/75 tracking-wider uppercase">
                  {ev.period}
                </span>
              </div>

              {/* Title & Org */}
              <h3 className="font-serif text-lg sm:text-xl font-bold text-[#1a3055] mb-1.5 tracking-tight leading-snug group-hover:text-[#d4553a] transition-colors">
                {ev.title}
              </h3>
              <div className="font-serif text-xs sm:text-sm font-bold text-[#2a5a8c] mb-3 flex items-center gap-1.5">
                <span>{ev.organization}</span>
                {ev.location && (
                  <span className="text-[#1a3055]/60 font-normal">· {ev.location}</span>
                )}
              </div>

              {/* Description */}
              <p className="font-serif text-xs sm:text-sm text-[#1a3055]/85 leading-relaxed mb-4">
                {ev.description}
              </p>

              {/* Woodblock Framed Thumbnail */}
              {ev.thumbnail && (
                <div
                  onClick={() =>
                    onOpenImage({
                      url: ev.thumbnail!,
                      caption: ev.thumbnailLabel || ev.title
                    })
                  }
                  className="mb-4 h-36 border-3 border-[#1a3055] relative cursor-pointer group/thumb bg-[#f5f0e1] overflow-hidden shadow-woodblock"
                >
                  <img
                    src={ev.thumbnail}
                    alt={ev.title}
                    className="w-full h-full object-cover group-hover/thumb:scale-105 transition-transform duration-200"
                  />
                  <div className="absolute inset-x-0 bottom-0 bg-[#1a3055] text-[#f5f0e1] px-2.5 py-1.5 flex items-center justify-between border-t-2 border-[#1a3055]">
                    <span className="text-[11px] font-serif font-bold tracking-wider uppercase truncate">
                      {ev.thumbnailLabel}
                    </span>
                    <ZoomIn className="w-3.5 h-3.5 text-[#c9a227] shrink-0 ml-1.5" />
                  </div>
                </div>
              )}

              {/* Key Highlights */}
              {ev.highlights && ev.highlights.length > 0 && (
                <div className="space-y-2 mb-4 text-xs font-serif text-[#1a3055] bg-[#f5f0e1] p-3.5 border-2 border-[#1a3055]">
                  {ev.highlights.map((h, i) => (
                    <div key={i} className="flex items-start gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#d4553a] shrink-0 mt-0.5" />
                      <span className="leading-snug">{h}</span>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Skills Woodblock Tags */}
            {ev.skills && (
              <div className="flex flex-wrap gap-1.5 pt-3 border-t-2 border-[#1a3055]/20">
                {ev.skills.map((s) => (
                  <span
                    key={s}
                    className="woodblock-tag text-[10px]"
                  >
                    {s}
                  </span>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};
