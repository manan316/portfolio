import React, { useState } from 'react';
import { ExperienceItem, ResearchItem, TrainingWorkshopItem } from '../types/portfolio';
import { ZoomIn } from 'lucide-react';

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
  description: string;
  highlights?: string[];
  skills?: string[];
  thumbnail?: string;
  thumbnailLabel?: string;
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
      badge: 'BEST PRESENTATION AWARD',
      description: 'Awarded Best Presentation for GeoChange AI — an end-to-end multi-sensor remote sensing and NASA ORNL biomass carbon accounting platform for terrestrial disturbance tracking.',
      highlights: [
        'Automated STAC catalog querying across AWS Earth Search and Microsoft Planetary Computer.',
        'Validated pixel-level annual change dating (2021–2026) with sub-pixel registration and QA60 cloud gating.',
        'Engineered publication-ready PDF and GeoJSON environmental risk dispatch.'
      ],
      skills: ['Remote Sensing', 'Sentinel-2', 'NASA Carbon Model', 'FastAPI', 'Leaflet', 'Pitch & Defense']
    },
    {
      id: 'uct-internship',
      category: 'industry',
      title: 'Embedded & Internet of Things Engineer (Intern)',
      organization: 'UniConverge Technologies',
      period: 'Jun 2026 – Jul 2026',
      location: 'Noida, Uttar Pradesh, India',
      badge: 'INDUSTRIAL INTERNSHIP',
      description: 'Developed custom embedded Linux firmware utilizing OpenWrt build environments across MIPS (MT7628) and ARM (NanoPi Allwinner H3) gateways. Engineered hardware integration for Semtech SX1303 LoRa basebands.',
      highlights: [
        'Compiled custom OpenWrt firmware with stripped kernel packages for low-power edge gateways.',
        'Wrote custom Device Tree Overlays (.dts) and optimized kernel SPI bus drivers for SX1303 basebands.',
        'Tuned Linux TCP/IP networking stack and ChirpStack packet forwarders for edge throughput.'
      ],
      skills: ['OpenWrt', 'LoRaWAN', 'SX1303 Baseband', 'Linux Kernel', 'SPI Drivers', 'MIPS / ARM', 'ChirpStack'],
      thumbnail: '/images/uct_cert_thumb.png',
      thumbnailLabel: 'UniConverge Technologies Certificate'
    },
    {
      id: 'iitr-internship',
      category: 'research',
      title: 'Research Intern (Computer Vision & Edge AI)',
      organization: 'Indian Institute of Technology (IIT), Roorkee',
      period: 'Jun 2025 – Jul 2025',
      location: 'Roorkee, Uttarakhand, India',
      badge: 'TIER-1 INSTITUTE RESEARCH',
      description: 'Engineered a custom YOLOv8 object detection pipeline accelerated using the Intel OpenVINO toolkit for high-FPS, low-power inference on Neural Processing Units (NPUs).',
      highlights: [
        'Fine-tuned custom YOLOv8 models and converted to OpenVINO Intermediate Representation (IR).',
        'Accelerated continuous inference on Intel Core Ultra NPU hardware with ultra-low thermal dissipation.',
        'Built asynchronous video stream pipelines with OpenCV eliminating UI frame drops.'
      ],
      skills: ['Intel OpenVINO', 'YOLOv8', 'NPU Acceleration', 'Computer Vision', 'PyTorch', 'OpenCV'],
      thumbnail: '/images/iitr_letter_thumb.png',
      thumbnailLabel: 'IIT Roorkee Research Internship Letter'
    },
    {
      id: 'savera-ojasews',
      category: 'research',
      title: 'Lead Architect — Project SAVERA (OJASEWS)',
      organization: 'SAVERA Geotechnical Early-Warning Initiative',
      period: 'Oct 2026 – Present',
      location: 'Jammu & Kashmir, India',
      badge: 'HIMALAYAN SAFETY FLAGSHIP',
      description: 'Architected OJASEWS: an autonomous geotechnical slope simulation, procedural 3D digital twin, and life-safety early warning platform designed to monitor slope failure precursors across steep Himalayan corridors (Samroli, NH-44).',
      highlights: [
        'Combined Mohr-Coulomb physics heuristics with a 4-class Random Forest ML classifier for dual-track risk arbitration.',
        'Constructed a procedural Three.js 3D terrain twin with dynamic slope shader heatmaps and rainfall particle effects.',
        'Engineered sub-second mobile push notifications via ntfy.sh with priority bypass and lock-screen alerts.'
      ],
      skills: ['Geotechnical AI', 'Three.js / WebGL', 'FastAPI', 'ntfy.sh', 'ESP32 / IoT', 'Mohr-Coulomb Physics']
    },
    {
      id: 'btech-ju',
      category: 'academic',
      title: 'Bachelor of Technology (B.Tech) — AI & Mathematics',
      organization: 'University of Jammu',
      period: 'Aug 2024 – Aug 2028',
      location: 'Jammu & Kashmir, India',
      badge: 'ACADEMIC DEGREE',
      description: 'Undergraduate studies in Artificial Intelligence, Advanced Linear Algebra, Discrete Mathematics, Operating Systems, Algorithm Design, and Numerical Computing.',
      highlights: [
        'Organised Innovathon 1.0 — National Level Hackathon at University of Jammu.',
        'Technical lead for departmental high-performance computing initiatives.'
      ],
      skills: ['Artificial Intelligence', 'Mathematics', 'Algorithms', 'Operating Systems', 'DSP']
    },
    {
      id: 'ide-bootcamp',
      category: 'honors',
      title: 'Innovation, Design and Entrepreneurship (IDE) Bootcamp',
      organization: 'University of Ladakh · MoE & AICTE (Govt. of India)',
      period: 'Edition 3 · 2026',
      location: 'Leh, Ladakh, India',
      badge: 'NATIONAL INNOVATION BOOTCAMP',
      description: 'Selected participant at the residential IDE Bootcamp hosted at University of Ladakh, supported by the Ministry of Education, AICTE, Wadhwani Foundation, and SBI Foundation, focusing on deep-tech venture design.',
      highlights: [
        'Rapid prototyping of edge AI hardware and life-safety early-warning architectures.',
        'Market viability analysis and deployment modeling for rugged high-altitude terrains.'
      ],
      skills: ['Deep-Tech Prototyping', 'Venture Design', 'AICTE / MoE', 'Systems Validation']
    },
    {
      id: 'brm-theatre',
      category: 'honors',
      title: "Dual Lead Role in 'Rashmirathi' (Arjuna & Guru Kripacharya)",
      organization: '25th Bharat Rang Mahotsav (BRM) International Theatre Festival',
      period: 'Feb 2026',
      location: 'National School of Drama (NSD) Circuit',
      badge: 'CULTURAL / POLYMATH HONOR',
      description: "Selected to perform dual prominent roles as warrior Arjuna and Guru Kripacharya in Ramdhari Singh Dinkar's monumental epic drama 'Rashmirathi' at Asia's largest international theatre festival, organized by NSD, New Delhi and University of Jammu.",
      highlights: [
        'Delivered complex verse recitation and theatrical performance under national festival direction.',
        'High-stakes stage presence, articulation, and discipline under pressure.'
      ],
      skills: ['Public Defense', 'Stage Presence', 'Classical Verse Recitation', 'Cross-Domain Polymath']
    },
    {
      id: 'iit-jammu-workshop',
      category: 'research',
      title: 'Visual Attention Modeling & High-Speed Instrumentation',
      organization: 'Indian Institute of Technology (IIT), Jammu',
      period: '2024',
      location: 'Jammu, India',
      badge: 'IIT RESEARCH WORKSHOP',
      description: 'Participated in an intensive hands-on instrumentation workshop focused on high-speed eye-tracking hardware, spatial gaze calibration, visual attention trajectory modeling, and statistical signal filtering.',
      highlights: [
        'Hands-on experimentation with high-speed optical instrumentation and spatio-temporal calibration.',
        'Statistical validation and signal filtering of continuous gaze coordinates.'
      ],
      skills: ['Instrumentation', 'Signal Processing', 'Spatial Calibration', 'Statistical Analysis']
    },
    {
      id: 'ncsc-scientist',
      category: 'honors',
      title: 'Junior Scientist Selection — 26th National Children Science Congress',
      organization: 'NCSTC · IIT Kanpur',
      period: 'Dec 2018',
      location: 'IIT Kanpur, Uttar Pradesh, India',
      badge: 'NATIONAL SCIENCE HONOR',
      description: 'Selected as Junior Scientist to present original scientific research at IIT Kanpur after winning district and state level competitive evaluations.',
      highlights: [
        'Presented original research on environmental science methodologies.',
        'Evaluated by national scientist panels and faculty at IIT Kanpur.'
      ],
      skills: ['Scientific Method', 'Environmental Research', 'Public Defense']
    }
  ];

  const filteredEvents = events.filter((ev) =>
    activeFilter === 'all' ? true : ev.category === activeFilter
  );

  return (
    <section id="journey" className="pt-24 sm:pt-32 lg:pt-40 px-4 sm:px-8 max-w-[1600px] mx-auto scroll-mt-24 hairline-divider">
      {/* Section Header */}
      <div className="pb-12 sm:pb-16">
        <div className="flex items-center gap-2 font-mono text-[11px] tracking-[0.2em] uppercase text-[#71717a]">
          <span className="w-2 h-2 bg-[#ff4d00] inline-block"></span>
          <span>03 // CHRONICLES OF ENDEAVOR</span>
          <span>· RESEARCH LABS · INDUSTRY · HONORS</span>
        </div>
        <h2 className="fluid-heading text-[#0a0a0a] uppercase tracking-[-0.04em] leading-[0.88] font-black break-words mt-4 mb-6">
          FIELD CHRONICLES.
        </h2>
        <p className="text-lg sm:text-xl text-[#0a0a0a] font-normal leading-[1.5] max-w-3xl">
          The engineering journey spanning tier-1 research institutes (IIT Roorkee), high-throughput industrial IoT firmware (UniConverge), international hackathon victories, and celebrated cultural polymath achievements.
        </p>
      </div>

      {/* Monospace Filter Tabs */}
      <div className="flex flex-wrap gap-2 pb-8 border-b border-[#0a0a0a]/15 font-mono text-[11px] tracking-[0.2em] uppercase">
        {[
          { key: 'all', label: 'ALL CHRONICLES' },
          { key: 'industry', label: 'INDUSTRY & FIRMWARE' },
          { key: 'research', label: 'RESEARCH LABS' },
          { key: 'honors', label: 'HACKATHONS & HONORS' },
          { key: 'academic', label: 'ACADEMIC' }
        ].map((tab) => (
          <button
            key={tab.key}
            onClick={() => setActiveFilter(tab.key as TimelineFilter)}
            className={`px-4 py-2 transition-colors ${
              activeFilter === tab.key
                ? 'bg-[#0a0a0a] text-white font-medium'
                : 'text-[#71717a] hover:text-[#0a0a0a] border border-[#0a0a0a]/15'
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Editorial Index Rows */}
      <div className="divide-y divide-[#0a0a0a]/15">
        {filteredEvents.map((ev, i) => (
          <div
            key={ev.id}
            className="index-row py-10 sm:py-14 grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 items-start group"
          >
            {/* Left Metadata (4 cols) */}
            <div className="lg:col-span-4 space-y-2 font-mono text-[11px] tracking-[0.2em] uppercase text-[#71717a]">
              <div className="flex items-center gap-3">
                <span className="text-[#0a0a0a] font-bold">
                  {String(i + 1).padStart(2, '0')} / {String(filteredEvents.length).padStart(2, '0')}
                </span>
                <span className="text-[#ff4d00]">· {ev.badge}</span>
              </div>
              <div className="text-[#0a0a0a] font-medium">{ev.period}</div>
              {ev.location && <div>{ev.location}</div>}

              {/* Receding thumbnail if present */}
              {ev.thumbnail && (
                <div
                  onClick={() =>
                    onOpenImage({
                      url: ev.thumbnail!,
                      caption: ev.thumbnailLabel || ev.title
                    })
                  }
                  className="pt-4 cursor-pointer"
                >
                  <div className="w-40 h-24 bg-[#e4e4e7] overflow-hidden relative group/thumb">
                    <img
                      src={ev.thumbnail}
                      alt={ev.title}
                      className="w-full h-full object-cover grayscale contrast-125 group-hover/thumb:grayscale-0 transition-all duration-200"
                    />
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover/thumb:opacity-100 flex items-center justify-center transition-opacity">
                      <span className="text-[10px] text-white font-mono uppercase tracking-[0.15em] flex items-center gap-1">
                        <ZoomIn className="w-3 h-3 text-[#ff4d00]" /> ZOOM
                      </span>
                    </div>
                  </div>
                  <div className="text-[10px] text-[#71717a] mt-1 truncate">
                    {ev.thumbnailLabel}
                  </div>
                </div>
              )}
            </div>

            {/* Right Content (8 cols) */}
            <div className="lg:col-span-8 space-y-4">
              <div>
                <h3 className="index-title text-2xl sm:text-3xl lg:text-4xl font-bold text-[#0a0a0a] tracking-tight leading-[1.1] transition-colors duration-150">
                  {ev.title}
                </h3>
                <div className="font-mono text-xs text-[#71717a] tracking-[0.1em] uppercase mt-1">
                  {ev.organization}
                </div>
              </div>

              <p className="text-base text-[#0a0a0a] font-normal leading-[1.5]">
                {ev.description}
              </p>

              {ev.highlights && ev.highlights.length > 0 && (
                <ul className="space-y-1.5 font-mono text-xs text-[#0a0a0a] tracking-[0.05em] pt-1">
                  {ev.highlights.map((h, hIdx) => (
                    <li key={hIdx} className="flex items-start gap-2">
                      <span className="text-[#ff4d00] font-bold">—</span>
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>
              )}

              {ev.skills && (
                <div className="flex flex-wrap gap-1.5 pt-2">
                  {ev.skills.map((s) => (
                    <span key={s} className="type-tag text-[10px]">
                      {s}
                    </span>
                  ))}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
