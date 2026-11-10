import React, { useState } from 'react';
import { ExperienceItem, ResearchItem, TrainingWorkshopItem } from '../types/portfolio';
import { MemphisCardOrnaments } from './MemphisOrnament';
import { Briefcase, Award, GraduationCap, Microscope, Calendar, MapPin, ZoomIn, CheckCircle2, Trophy, Theater } from 'lucide-react';

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
}

export const CareerJourneyTimeline: React.FC<CareerJourneyTimelineProps> = ({
  experiences,
  researchWork,
  trainingWorkshops,
  onOpenImage,
}) => {
  const [activeFilter, setActiveFilter] = useState<TimelineFilter>('all');

  // Unified Timeline Event Stream
  const events: TimelineEvent[] = [
    {
      id: 'indux-hackathon',
      category: 'honors',
      title: 'Best Presentation Award — INDU X 5.0 International Hackathon',
      organization: 'Vikrant University (in partnership with ARINA AI & GO KLOUD)',
      period: 'Nov 2026',
      location: 'Gwalior, Madhya Pradesh, India',
      badge: '🏆 1st Prize / Best Presentation',
      badgeColor: 'bg-honey',
      description: 'Awarded Best Presentation among international teams for GeoChange AI — an end-to-end multi-sensor remote sensing and NASA ORNL biomass carbon accounting platform for terrestrial disturbance tracking.',
      highlights: [
        'Demonstrated automated STAC catalog querying across AWS Earth Search & Microsoft Planetary Computer.',
        'Validated pixel-level annual change dating (2021–2026) with sub-pixel registration and QA60 cloud gating.',
        'Presented automated publication-ready PDF and GeoJSON environmental risk dispatch.'
      ],
      skills: ['Remote Sensing', 'Sentinel-2', 'NASA Carbon Model', 'FastAPI', 'Leaflet', 'Pitch & Defense'],
      icon: <Trophy className="w-5 h-5 text-honey" />
    },
    {
      id: 'uct-internship',
      category: 'industry',
      title: 'Embedded & Internet of Things Engineer (Intern)',
      organization: 'UniConverge Technologies',
      period: 'Jun 2026 – Jul 2026',
      location: 'Noida, Uttar Pradesh, India',
      badge: 'Industrial Internship',
      badgeColor: 'bg-mint',
      description: 'Developed custom embedded Linux firmware utilizing OpenWrt build environments across MIPS (MT7628) and ARM (NanoPi Allwinner H3) gateways. Engineered hardware integration for Semtech SX1303 LoRa basebands.',
      highlights: [
        'Compiled custom OpenWrt firmware with stripped kernel packages for low-power edge gateways.',
        'Wrote custom Device Tree Overlays (.dts) and optimized kernel SPI bus drivers for SX1303 basebands.',
        'Tuned Linux TCP/IP networking stack and ChirpStack packet forwarders for high-throughput edge telemetry.'
      ],
      skills: ['OpenWrt', 'LoRaWAN', 'SX1303 Baseband', 'Linux Kernel', 'SPI Drivers', 'MIPS / ARM', 'ChirpStack'],
      thumbnail: '/images/uct_cert_thumb.png',
      thumbnailLabel: 'UniConverge Technologies Internship Certificate',
      icon: <Briefcase className="w-5 h-5 text-mint" />
    },
    {
      id: 'iitr-internship',
      category: 'research',
      title: 'Research Intern (Computer Vision & Edge AI)',
      organization: 'Indian Institute of Technology (IIT), Roorkee',
      period: 'Jun 2025 – Jul 2025',
      location: 'Roorkee, Uttarakhand, India',
      badge: 'Tier-1 Institute Research',
      badgeColor: 'bg-electric-blue',
      description: 'Worked on deep learning Computer Vision architectures and data pipelines. Engineered a custom YOLOv8 object detection pipeline accelerated using the Intel OpenVINO toolkit for high-FPS, low-power inference on Neural Processing Units (NPUs).',
      highlights: [
        'Fine-tuned custom YOLOv8 models on domain datasets and converted to OpenVINO Intermediate Representation (IR).',
        'Accelerated continuous inference on Intel Core Ultra NPU hardware with ultra-low thermal dissipation.',
        'Built asynchronous video stream pipelines with OpenCV eliminating UI frame drops during sustained vision tasks.'
      ],
      skills: ['Intel OpenVINO', 'YOLOv8', 'NPU Acceleration', 'Computer Vision', 'PyTorch', 'OpenCV'],
      thumbnail: '/images/iitr_letter_thumb.png',
      thumbnailLabel: 'IIT Roorkee Research Internship Letter',
      icon: <Microscope className="w-5 h-5 text-electric-blue" />
    },
    {
      id: 'savera-ojasews',
      category: 'research',
      title: 'Architect & Lead Researcher — Project SAVERA (OJASEWS)',
      organization: 'SAVERA Geotechnical Early-Warning Initiative',
      period: 'Oct 2026 – Present',
      location: 'Jammu & Kashmir, India',
      badge: 'Himalayan Safety Flagship',
      badgeColor: 'bg-coral',
      description: 'Architected OJASEWS: an autonomous geotechnical slope simulation, procedural 3D digital twin, and life-safety early warning platform designed to monitor slope failure precursors across steep Himalayan highway corridors (Samroli, NH-44).',
      highlights: [
        'Combined Mohr-Coulomb physics heuristics with a 4-class Random Forest ML classifier for dual-track risk arbitration.',
        'Constructed a procedural Three.js 3D terrain twin with dynamic slope shader heatmaps and rainfall particle effects.',
        'Engineered sub-second mobile push notifications via ntfy.sh with priority bypass and lock-screen alerts.'
      ],
      skills: ['Geotechnical AI', 'Three.js / WebGL', 'FastAPI', 'ntfy.sh', 'ESP32 / IoT', 'Mohr-Coulomb Physics'],
      icon: <Microscope className="w-5 h-5 text-coral" />
    },
    {
      id: 'btech-ju',
      category: 'academic',
      title: 'Bachelor of Technology (B.Tech) — AI & Mathematics',
      organization: 'University of Jammu',
      period: 'Aug 2024 – Aug 2028 (Ongoing)',
      location: 'Jammu & Kashmir, India',
      badge: 'Academic Degree',
      badgeColor: 'bg-paper',
      description: 'Comprehensive undergraduate studies in Artificial Intelligence, Advanced Linear Algebra, Discrete Mathematics, Operating Systems, Algorithm Design, and Numerical Computing.',
      highlights: [
        'Organised Innovathon 1.0 — National Level Hackathon at University of Jammu.',
        'Lead technical developer for departmental high-performance computing and robotics initiatives.'
      ],
      skills: ['Artificial Intelligence', 'Mathematics', 'Algorithms', 'Operating Systems', 'DSP'],
      icon: <GraduationCap className="w-5 h-5 text-black" />
    },
    {
      id: 'brm-theatre',
      category: 'honors',
      title: "Double Role in 'Rashmirathi' (Arjuna & Guru Kripacharya)",
      organization: '25th Bharat Rang Mahotsav (BRM) International Theatre Festival',
      period: 'Feb 2026',
      location: 'National School of Drama (NSD) Circuit',
      badge: 'Cultural / Polymath Honor',
      badgeColor: 'bg-bubblegum',
      description: "Selected to perform dual prominent roles as warrior Arjuna and Guru Kripacharya in Ramdhari Singh Dinkar's monumental epic drama 'Rashmirathi' at Asia's largest international theatre festival.",
      highlights: [
        'Delivered complex verse recitation and theatrical performance under national festival direction.',
        'Demonstrates voice modulation, high-stakes stage presence, and discipline under pressure.'
      ],
      skills: ['Public Presentation', 'Stage Discipline', 'Classical Verse Recitation', 'Cross-Domain Polymath'],
      icon: <Theater className="w-5 h-5 text-purple-700" />
    },
    {
      id: 'ide-bootcamp',
      category: 'honors',
      title: 'Innovation, Design and Entrepreneurship (IDE) Bootcamp (Edition 3)',
      organization: 'Ministry of Education & University of Ladakh',
      period: '2026',
      location: 'Leh, Ladakh, India',
      badge: 'National Innovation Camp',
      badgeColor: 'bg-honey',
      description: 'Selected participant for intensive 5-day bootcamp on deep-tech product design, frugal engineering for high-altitude zones, and venture creation.',
      skills: ['Design Thinking', 'High-Altitude Engineering', 'Rapid Prototyping', 'Venture Strategy'],
      icon: <Award className="w-5 h-5 text-honey" />
    },
    {
      id: 'ncsc-scientist',
      category: 'honors',
      title: 'Junior Scientist Selection — 26th National Children Science Congress',
      organization: 'National Council for Science & Technology Communication (NCSTC) · IIT Kanpur',
      period: 'Dec 2018',
      location: 'IIT Kanpur, Uttar Pradesh, India',
      badge: 'Early Science Prodigy',
      badgeColor: 'bg-mint',
      description: 'Selected as Junior Scientist to present original environmental science research at IIT Kanpur after winning district and state level science congress evaluations.',
      skills: ['Scientific Method', 'Environmental Research', 'Public Defense', 'Experimental Rigor'],
      icon: <Award className="w-5 h-5 text-mint" />
    }
  ];

  const filteredEvents = events.filter((ev) =>
    activeFilter === 'all' ? true : ev.category === activeFilter
  );

  return (
    <section id="journey" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto scroll-mt-24">
      {/* Section Header */}
      <div className="mb-12">
        <div className="flex flex-wrap items-center gap-3 mb-4">
          <span className="memphis-badge bg-grape text-white border-4 border-black px-4 py-1.5 text-xs font-black tracking-widest uppercase">
            [04 // CAREER & RESEARCH CHRONICLE]
          </span>
          <span className="bg-honey text-black border-3 border-black px-3 py-1 text-xs font-black tracking-wider uppercase">
            INTERNSHIPS · LABS · AWARDS · THEATRE
          </span>
        </div>
        <h2 className="memphis-heading text-black pop-swap mb-4">
          CAREER, RESEARCH & HONORS TIMELINE
        </h2>
        <p className="text-black text-base sm:text-lg font-bold max-w-3xl leading-relaxed">
          The engineering journey bridging Tier-1 research labs (IIT Roorkee), high-throughput industrial IoT firmware (UniConverge), international hackathons, and cultural polymath achievements.
        </p>
      </div>

      {/* Filter Tabs */}
      <div className="flex flex-wrap gap-3 mb-10">
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
            className={`memphis-tab-btn text-xs sm:text-sm py-2 px-3 sm:px-4 ${
              activeFilter === tab.key ? 'active' : ''
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Timeline Stream */}
      <div className="relative border-l-4 border-black ml-4 sm:ml-8 pl-6 sm:pl-10 space-y-8">
        {filteredEvents.map((ev, idx) => (
          <div key={ev.id} className="relative group/timeline">
            {/* Timeline Node Pin */}
            <div className="absolute -left-[38px] sm:-left-[54px] top-6 w-9 h-9 sm:w-11 sm:h-11 bg-white border-4 border-black flex items-center justify-center shadow-[2px_2px_0_#000] group-hover/timeline:bg-honey transition-colors">
              {ev.icon}
            </div>

            {/* Event Card */}
            <div className="memphis-card bg-paper p-6 sm:p-8 relative overflow-hidden group">
              <MemphisCardOrnaments variant={(((idx % 4) + 1) as 1 | 2 | 3 | 4)} />

              {/* Header */}
              <div className="flex flex-wrap items-start justify-between gap-3 pb-4 mb-4 border-b-3 border-black">
                <div>
                  <div className="flex flex-wrap items-center gap-2 mb-2">
                    {ev.badge && (
                      <span
                        className={`${
                          ev.badgeColor || 'bg-honey'
                        } text-black border-2 border-black px-2.5 py-0.5 text-xs font-black uppercase tracking-wider`}
                      >
                        {ev.badge}
                      </span>
                    )}
                    <span className="text-xs font-bold bg-white border-2 border-black px-2 py-0.5 flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5" /> {ev.period}
                    </span>
                    {ev.location && (
                      <span className="text-xs font-bold text-gray-700 hidden sm:flex items-center gap-1">
                        <MapPin className="w-3.5 h-3.5" /> {ev.location}
                      </span>
                    )}
                  </div>
                  <h3 className="text-xl sm:text-2xl font-black text-black leading-tight">
                    {ev.title}
                  </h3>
                  <div className="text-sm font-black text-gray-800 mt-1">
                    {ev.organization}
                  </div>
                </div>

                {/* Optional Certificate Thumbnail Trigger */}
                {ev.thumbnail && (
                  <button
                    onClick={() =>
                      onOpenImage({
                        url: ev.thumbnail!,
                        caption: ev.thumbnailLabel || ev.title
                      })
                    }
                    className="bg-white border-3 border-black p-1.5 shadow-memphis-sm hover:bg-honey transition-colors group/thumb shrink-0"
                  >
                    <div className="w-20 h-14 overflow-hidden border-2 border-black relative">
                      <img
                        src={ev.thumbnail}
                        alt={ev.title}
                        className="w-full h-full object-cover group-hover/thumb:scale-105 transition-transform"
                      />
                      <div className="absolute inset-0 bg-black/30 opacity-0 group-hover/thumb:opacity-100 flex items-center justify-center">
                        <ZoomIn className="w-4 h-4 text-white" />
                      </div>
                    </div>
                    <span className="text-[9px] font-black uppercase tracking-wider block text-center mt-1 text-black">
                      Verify Credential
                    </span>
                  </button>
                )}
              </div>

              {/* Description */}
              <p className="text-xs sm:text-sm font-bold text-black leading-relaxed mb-4">
                {ev.description}
              </p>

              {/* Highlights */}
              {ev.highlights && (
                <div className="space-y-2 mb-4 bg-white border-3 border-black p-4 shadow-memphis-sm">
                  {ev.highlights.map((h, i) => (
                    <div key={i} className="flex items-start gap-2.5 text-xs sm:text-sm font-bold text-black">
                      <CheckCircle2 className="w-4 h-4 text-mint shrink-0 mt-0.5" />
                      <span className="leading-snug">{h}</span>
                    </div>
                  ))}
                </div>
              )}

              {/* Skills Tags */}
              {ev.skills && (
                <div className="flex flex-wrap gap-1.5 pt-2">
                  {ev.skills.map((s) => (
                    <span
                      key={s}
                      className="bg-white hover:bg-electric-blue text-black border-2 border-black px-2.5 py-1 text-[11px] font-black"
                    >
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
