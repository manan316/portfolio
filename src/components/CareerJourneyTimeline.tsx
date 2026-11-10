import React, { useState } from 'react';
import { ExperienceItem, ResearchItem, TrainingWorkshopItem } from '../types/portfolio';
import { Briefcase, Award, GraduationCap, Microscope, Calendar, MapPin, ZoomIn, CheckCircle2, Trophy, Lightbulb } from 'lucide-react';

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
  badgeColor?: string;
  description: string;
  highlights?: string[];
  skills?: string[];
  thumbnail?: string;
  thumbnailLabel?: string;
  icon: React.ReactNode;
  glowClass: string;
}

export const CareerJourneyTimeline: React.FC<CareerJourneyTimelineProps> = ({
  experiences,
  researchWork,
  trainingWorkshops,
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
      badgeColor: 'bg-amber-500/15 text-amber-300 border-amber-500/30',
      description: 'Awarded Best Presentation for GeoChange AI — an end-to-end multi-sensor remote sensing and NASA ORNL biomass carbon accounting platform for terrestrial disturbance tracking.',
      highlights: [
        'Automated STAC catalog querying across AWS Earth Search and Microsoft Planetary Computer.',
        'Validated pixel-level annual change dating (2021–2026) with sub-pixel registration and QA60 cloud gating.',
        'Engineered publication-ready PDF and GeoJSON environmental risk dispatch.'
      ],
      skills: ['Remote Sensing', 'Sentinel-2', 'NASA Carbon Model', 'FastAPI', 'Leaflet', 'Pitch & Defense'],
      icon: <Trophy className="w-5 h-5 text-amber-400" />,
      glowClass: 'bento-glow-amber'
    },
    {
      id: 'uct-internship',
      category: 'industry',
      title: 'Embedded & Internet of Things Engineer (Intern)',
      organization: 'UniConverge Technologies',
      period: 'Jun 2026 – Jul 2026',
      location: 'Noida, Uttar Pradesh, India',
      badge: 'Industrial Internship',
      badgeColor: 'bg-emerald-500/15 text-emerald-300 border-emerald-500/30',
      description: 'Developed custom embedded Linux firmware utilizing OpenWrt build environments across MIPS (MT7628) and ARM (NanoPi Allwinner H3) gateways. Engineered hardware integration for Semtech SX1303 LoRa basebands.',
      highlights: [
        'Compiled custom OpenWrt firmware with stripped kernel packages for low-power edge gateways.',
        'Wrote custom Device Tree Overlays (.dts) and optimized kernel SPI bus drivers for SX1303 basebands.',
        'Tuned Linux TCP/IP networking stack and ChirpStack packet forwarders for edge throughput.'
      ],
      skills: ['OpenWrt', 'LoRaWAN', 'SX1303 Baseband', 'Linux Kernel', 'SPI Drivers', 'MIPS / ARM', 'ChirpStack'],
      thumbnail: '/images/uct_cert_thumb.png',
      thumbnailLabel: 'UniConverge Technologies Internship Certificate',
      icon: <Briefcase className="w-5 h-5 text-emerald-400" />,
      glowClass: 'bento-glow-emerald'
    },
    {
      id: 'iitr-internship',
      category: 'research',
      title: 'Research Intern (Computer Vision & Edge AI)',
      organization: 'Indian Institute of Technology (IIT), Roorkee',
      period: 'Jun 2025 – Jul 2025',
      location: 'Roorkee, Uttarakhand, India',
      badge: 'Tier-1 Institute Research',
      badgeColor: 'bg-cyan-500/15 text-cyan-300 border-cyan-500/30',
      description: 'Engineered a custom YOLOv8 object detection pipeline accelerated using the Intel OpenVINO toolkit for high-FPS, low-power inference on Neural Processing Units (NPUs).',
      highlights: [
        'Fine-tuned custom YOLOv8 models and converted to OpenVINO Intermediate Representation (IR).',
        'Accelerated continuous inference on Intel Core Ultra NPU hardware with ultra-low thermal dissipation.',
        'Built asynchronous video stream pipelines with OpenCV eliminating UI frame drops.'
      ],
      skills: ['Intel OpenVINO', 'YOLOv8', 'NPU Acceleration', 'Computer Vision', 'PyTorch', 'OpenCV'],
      thumbnail: '/images/iitr_letter_thumb.png',
      thumbnailLabel: 'IIT Roorkee Research Internship Letter',
      icon: <Microscope className="w-5 h-5 text-cyan-400" />,
      glowClass: 'bento-glow-cyan'
    },
    {
      id: 'savera-ojasews',
      category: 'research',
      title: 'Lead Architect — Project SAVERA (OJASEWS)',
      organization: 'SAVERA Geotechnical Early-Warning Initiative',
      period: 'Oct 2026 – Present',
      location: 'Jammu & Kashmir, India',
      badge: 'Himalayan Safety Flagship',
      badgeColor: 'bg-rose-500/15 text-rose-300 border-rose-500/30',
      description: 'Architected OJASEWS: an autonomous geotechnical slope simulation, procedural 3D digital twin, and life-safety early warning platform designed to monitor slope failure precursors across steep Himalayan corridors (Samroli, NH-44).',
      highlights: [
        'Combined Mohr-Coulomb physics heuristics with a 4-class Random Forest ML classifier for dual-track risk arbitration.',
        'Constructed a procedural Three.js 3D terrain twin with dynamic slope shader heatmaps and rainfall particle effects.',
        'Engineered sub-second mobile push notifications via ntfy.sh with priority bypass and lock-screen alerts.'
      ],
      skills: ['Geotechnical AI', 'Three.js / WebGL', 'FastAPI', 'ntfy.sh', 'ESP32 / IoT', 'Mohr-Coulomb Physics'],
      icon: <Microscope className="w-5 h-5 text-rose-400" />,
      glowClass: 'bento-glow-rose'
    },
    {
      id: 'btech-ju',
      category: 'academic',
      title: 'Bachelor of Technology (B.Tech) — AI & Mathematics',
      organization: 'University of Jammu',
      period: 'Aug 2024 – Aug 2028',
      location: 'Jammu & Kashmir, India',
      badge: 'Academic Degree',
      badgeColor: 'bg-indigo-500/15 text-indigo-300 border-indigo-500/30',
      description: 'Undergraduate studies in Artificial Intelligence, Advanced Linear Algebra, Discrete Mathematics, Operating Systems, Algorithm Design, and Numerical Computing.',
      highlights: [
        'Organised Innovathon 1.0 — National Level Hackathon at University of Jammu.',
        'Technical lead for departmental high-performance computing initiatives.'
      ],
      skills: ['Artificial Intelligence', 'Mathematics', 'Algorithms', 'Operating Systems', 'DSP'],
      icon: <GraduationCap className="w-5 h-5 text-indigo-400" />,
      glowClass: 'bento-glow-violet'
    },
    {
      id: 'ide-bootcamp',
      category: 'honors',
      title: 'Innovation, Design and Entrepreneurship (IDE) Bootcamp',
      organization: 'University of Ladakh · MoE & AICTE (Govt. of India)',
      period: 'Edition 3 · 2026',
      location: 'Leh, Ladakh, India',
      badge: 'National Innovation Bootcamp',
      badgeColor: 'bg-amber-500/15 text-amber-300 border-amber-500/30',
      description: 'Selected participant at the residential IDE Bootcamp hosted at University of Ladakh, supported by the Ministry of Education, AICTE, Wadhwani Foundation, and SBI Foundation, focusing on deep-tech venture design.',
      highlights: [
        'Rapid prototyping of edge AI hardware and life-safety early-warning architectures.',
        'Market viability analysis and deployment modeling for rugged high-altitude terrains.'
      ],
      skills: ['Deep-Tech Prototyping', 'Venture Design', 'AICTE / MoE', 'Systems Validation'],
      icon: <Lightbulb className="w-5 h-5 text-amber-400" />,
      glowClass: 'bento-glow-amber'
    },
    {
      id: 'iit-jammu-workshop',
      category: 'research',
      title: 'Visual Attention Modeling & High-Speed Instrumentation',
      organization: 'Indian Institute of Technology (IIT), Jammu',
      period: '2024',
      location: 'Jammu, India',
      badge: 'IIT Research Workshop',
      badgeColor: 'bg-cyan-500/15 text-cyan-300 border-cyan-500/30',
      description: 'Participated in an intensive hands-on instrumentation workshop focused on high-speed eye-tracking hardware, spatial gaze calibration, visual attention trajectory modeling, and statistical signal filtering.',
      highlights: [
        'Hands-on experimentation with high-speed optical instrumentation and spatio-temporal calibration.',
        'Statistical validation and signal filtering of continuous gaze coordinates.'
      ],
      skills: ['Instrumentation', 'Signal Processing', 'Spatial Calibration', 'Statistical Analysis'],
      icon: <Microscope className="w-5 h-5 text-cyan-400" />,
      glowClass: 'bento-glow-cyan'
    }
  ];

  const filteredEvents = events.filter((ev) =>
    activeFilter === 'all' ? true : ev.category === activeFilter
  );

  return (
    <section id="journey" className="py-20 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto scroll-mt-24">
      {/* Section Header */}
      <div className="mb-12">
        <div className="flex items-center gap-2 mb-3">
          <span className="bento-badge text-indigo-400 bg-indigo-500/10 border-indigo-500/20">
            [03 // CAREER & RESEARCH CHRONICLE]
          </span>
          <span className="text-xs text-zinc-400 font-mono">
            INTERNSHIPS · RESEARCH LABS · HONORS
          </span>
        </div>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white mb-4">
          Experience & Research Journey
        </h2>
        <p className="text-zinc-400 text-sm sm:text-base max-w-2xl font-normal leading-relaxed">
          The engineering journey spanning tier-1 research institutes (IIT Roorkee), high-throughput industrial IoT firmware (UniConverge), national hackathon leadership, and international awards.
        </p>
      </div>

      {/* Filter Tabs */}
      <div className="flex flex-wrap gap-2 mb-10">
        {[
          { key: 'all', label: 'All Chronicles' },
          { key: 'industry', label: 'Industry & Internships' },
          { key: 'research', label: 'Research Labs' },
          { key: 'honors', label: 'Hackathons & Honors' },
          { key: 'academic', label: 'Academic' }
        ].map((tab) => (
          <button
            key={tab.key}
            onClick={() => setActiveFilter(tab.key as TimelineFilter)}
            className={`px-4 py-2 rounded-full text-xs font-semibold transition-all ${
              activeFilter === tab.key
                ? 'bg-gradient-to-r from-cyan-400 to-indigo-500 text-zinc-950 font-bold shadow-lg shadow-cyan-500/20'
                : 'bg-white/5 text-zinc-400 hover:text-white hover:bg-white/10 border border-white/5'
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Bento Timeline Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {filteredEvents.map((ev) => (
          <div key={ev.id} className={`bento-card p-6 flex flex-col justify-between ${ev.glowClass} group`}>
            <div>
              {/* Top Row */}
              <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                <span className={`px-3 py-1 rounded-full text-xs font-semibold border ${ev.badgeColor || 'bg-white/5 text-zinc-300 border-white/10'}`}>
                  {ev.badge}
                </span>
                <span className="text-[11px] font-mono text-zinc-400">
                  {ev.period}
                </span>
              </div>

              {/* Title & Organization */}
              <div className="flex items-start gap-3 my-2">
                <div className="p-2.5 rounded-xl bg-white/5 border border-white/10 shrink-0 group-hover:scale-110 transition-transform duration-300">
                  {ev.icon}
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white tracking-tight leading-snug">
                    {ev.title}
                  </h3>
                  <div className="text-xs text-zinc-300 font-medium mt-1">
                    {ev.organization} {ev.location && <span className="text-zinc-500">· {ev.location}</span>}
                  </div>
                </div>
              </div>

              {/* Description */}
              <p className="text-xs text-zinc-300 font-normal leading-relaxed my-4">
                {ev.description}
              </p>

              {/* Highlights */}
              {ev.highlights && (
                <div className="space-y-2 mb-4 text-xs text-zinc-300 bg-zinc-950/40 p-3.5 rounded-xl border border-white/5">
                  {ev.highlights.map((h, i) => (
                    <div key={i} className="flex items-start gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0 mt-0.5" />
                      <span>{h}</span>
                    </div>
                  ))}
                </div>
              )}

              {/* Skills */}
              {ev.skills && (
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {ev.skills.map((s) => (
                    <span key={s} className="px-2 py-0.5 rounded-md text-[10px] font-mono bg-white/5 text-zinc-400 border border-white/5">
                      {s}
                    </span>
                  ))}
                </div>
              )}
            </div>

            {/* Credential Trigger */}
            {ev.thumbnail && (
              <div className="pt-3 border-t border-white/10 flex items-center justify-between">
                <button
                  onClick={() =>
                    onOpenImage({
                      url: ev.thumbnail!,
                      caption: ev.thumbnailLabel || ev.title
                    })
                  }
                  className="bento-btn-secondary text-xs py-1.5 px-3.5 flex items-center gap-1.5 hover:border-cyan-400/40"
                >
                  <ZoomIn className="w-3.5 h-3.5 text-cyan-400" />
                  <span>Verify Credential Document</span>
                </button>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};
