import React, { useState, useEffect, useRef } from 'react';
import { 
  Terminal, 
  ShieldCheck, 
  Zap, 
  Cpu, 
  HardDrive, 
  Wifi, 
  Activity, 
  CornerDownLeft, 
  Sparkles,
  Lock,
  Battery
} from 'lucide-react';

interface KernelBootSequenceProps {
  onComplete: () => void;
}

export const KernelBootSequence: React.FC<KernelBootSequenceProps> = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);
  const [currentStepIndex, setCurrentStepIndex] = useState(0);
  const [isReady, setIsReady] = useState(false);
  const [fading, setFading] = useState(false);
  
  const logContainerRef = useRef<HTMLDivElement | null>(null);

  const bootLogs = [
    { type: 'sys', tag: '[  0.000000]', text: 'BIOS-e820: [mem 0x0000000000000000-0x000000000009fbff] usable' },
    { type: 'sys', tag: '[  0.004120]', text: 'Linux version 6.8.0-RT-manan (x86_64) (gcc 13.2.0, PREEMPT_RT #1 SMP)' },
    { type: 'ok',  tag: '[  OK  ]',      text: 'Detected 16x Intel Core Ultra Cores // SMP Initialized & Calibrated' },
    { type: 'sys', tag: '[  0.082910]', text: 'ACPI: Core revision 20240322 // Initializing DSDT & SSDT system tables' },
    { type: 'ok',  tag: '[  OK  ]',      text: 'Mounted /dev/nvme0n1p1 on root filesystem [EXT4-fs] (rw,relatime)' },
    { type: 'sys', tag: '[  0.194200]', text: 'Loading Cryptographic Subsystem: SHA-512, AES-256-GCM, RSA-4096 Keys' },
    { type: 'ok',  tag: '[  OK  ]',      text: 'Started udev Kernel Device Manager & Hotplug Bus Arbiter' },
    { type: 'sys', tag: '[  0.421800]', text: 'Probing Hardware: Intel AI NPU / VPU Accelerator found on PCIe 00:0b.0' },
    { type: 'ok',  tag: '[  OK  ]',      text: 'Loaded Intel OpenVINO 2024.1 NPU Low-Power Inference Runtime' },
    { type: 'sys', tag: '[  0.718000]', text: 'net: Initializing OpenWrt IEEE 802.11 & LoRaWAN 868/915MHz Protocol' },
    { type: 'ok',  tag: '[  OK  ]',      text: 'Started Network Time Synchronization (NTP daemon online)' },
    { type: 'sys', tag: '[  1.104200]', text: 'Loading Pre-trained Weights: YOLOv8 NPU, Res U-Net, ETS Timeseries' },
    { type: 'ok',  tag: '[  OK  ]',      text: 'Started Deep Neural Inference Engine & Signal Processing Pipeline' },
    { type: 'sys', tag: '[  1.642000]', text: 'Connecting Secure Telemetry Socket: 32.72° N, 74.85° E (Jammu, IN)' },
    { type: 'ok',  tag: '[  OK  ]',      text: 'Authenticated Remote Node Link // Sub-millisecond IPC Latency' },
    { type: 'sys', tag: '[  2.210400]', text: 'Decrypting Operator Credentials: MANAN SHARMA // IIT Roorkee, UCT' },
    { type: 'ok',  tag: '[  OK  ]',      text: 'Cryptographic Keyring Validated: SEC_LEVEL = ROOT_01 [AUTHENTICATED]' },
    { type: 'sys', tag: '[  3.189000]', text: 'Initializing Three.js WebGL 3D Spatial Telemetry Graphics Pipeline' },
    { type: 'ok',  tag: '[  OK  ]',      text: 'Started System Telemetry & Linux Kernel Daemon (PRTS)' },
    { type: 'sys', tag: '[  4.500000]', text: 'Reached Target: Graphical Cyberdeck HUD & Systems Command Center' },
    { type: 'ok',  tag: '[  OK  ]',      text: 'SYSTEM BOOTED SUCCESSFULLY // OPERATOR: MANAN SHARMA' }
  ];

  const handleFinish = () => {
    setFading(true);
    setTimeout(onComplete, 450);
  };

  // Keyboard shortcut listener
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        handleFinish();
      }
      if (e.key === 'Enter' || e.key === ' ') {
        handleFinish();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  // 5.2s OS loading progression, then holds for user launch prompt
  useEffect(() => {
    const startTime = Date.now();
    const targetDuration = 5200;

    const interval = setInterval(() => {
      const elapsed = Date.now() - startTime;
      const progressRatio = Math.min(elapsed / targetDuration, 1);
      
      const easedProgress = Math.floor(Math.pow(progressRatio, 0.85) * 100);
      setProgress(easedProgress);

      const logIndex = Math.min(
        Math.floor(progressRatio * bootLogs.length),
        bootLogs.length - 1
      );
      setCurrentStepIndex(logIndex);

      if (elapsed >= targetDuration) {
        clearInterval(interval);
        setProgress(100);
        setCurrentStepIndex(bootLogs.length - 1);
        setIsReady(true);
      }
    }, 45);

    return () => clearInterval(interval);
  }, []);

  // Auto-scroll CLI stream
  useEffect(() => {
    if (logContainerRef.current) {
      logContainerRef.current.scrollTop = logContainerRef.current.scrollHeight;
    }
  }, [currentStepIndex]);

  return (
    <div 
      className={`fixed inset-0 z-[9999] flex flex-col justify-between bg-[#040508] text-[#F1F5F9] font-mono select-none p-3 sm:p-6 lg:p-8 overflow-hidden transition-opacity duration-500 ${
        fading ? 'opacity-0 pointer-events-none' : 'opacity-100'
      }`}
    >
      {/* Background Matrix Dot Grid & Ambient Cyber Radiance */}
      <div className="absolute inset-0 bg-dark-grid opacity-90 pointer-events-none"></div>
      <div className="absolute top-1/4 left-1/4 w-[45rem] h-[45rem] bg-[#00F0FF]/8 rounded-full blur-[180px] pointer-events-none"></div>
      <div className="absolute bottom-1/4 right-1/4 w-[45rem] h-[45rem] bg-[#00FF9D]/6 rounded-full blur-[180px] pointer-events-none"></div>

      {/* Laser Scanline Beam */}
      <div className="absolute inset-x-0 h-1 bg-gradient-to-r from-transparent via-[#00F0FF] to-transparent opacity-40 animate-pulse pointer-events-none"></div>

      {/* TOP CYBERDECK HUD HEADER */}
      <div className="relative z-10 w-full flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 pb-3 border-b border-[#00F0FF]/30 bg-[#080B14]/90 backdrop-blur-xl px-4 sm:px-6 py-3 rounded-2xl shadow-[0_8px_32px_rgba(0,0,0,0.8),inset_0_1px_1px_rgba(255,255,255,0.08)]">
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-1.5">
            <span className="w-3 h-3 rounded-full bg-[#EF4444] inline-block shadow-[0_0_8px_#EF4444]"></span>
            <span className="w-3 h-3 rounded-full bg-[#FFB800] inline-block shadow-[0_0_8px_#FFB800]"></span>
            <span className="w-3 h-3 rounded-full bg-[#00FF9D] inline-block shadow-[0_0_10px_#00FF9D] animate-pulse"></span>
          </div>
          <div className="flex items-center gap-2 text-[#00F0FF] pl-2 font-bold tracking-wider text-xs sm:text-sm">
            <Terminal className="w-4 h-4 text-[#00F0FF] animate-pulse" />
            <span>CYBERDECK PRTS-9000 // FIRMWARE 6.8.0-RT-MANAN</span>
          </div>
        </div>

        <div className="flex items-center gap-3 w-full sm:w-auto justify-between sm:justify-end text-xs">
          <div className="hidden md:flex items-center gap-2 text-[#94A3B8] bg-[#0F121E] px-3 py-1 rounded-xl border border-white/[0.08]">
            <Battery className="w-3.5 h-3.5 text-[#00FF9D]" />
            <span>BUS 98% [NOMINAL]</span>
          </div>

          <span className="text-[11px] text-[#00FF9D] font-bold bg-[#00FF9D]/10 px-3 py-1 rounded-full border border-[#00FF9D]/30 shadow-xs flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-[#00FF9D] beacon-pulse shadow-[0_0_6px_#00FF9D]"></span>
            SEC_LEVEL: ROOT_01
          </span>

          <button
            onClick={handleFinish}
            className="text-xs text-[#94A3B8] hover:text-[#00F0FF] flex items-center gap-1.5 bg-[#0F121E] px-3.5 py-1.5 rounded-xl border border-white/[0.08] hover:border-[#00F0FF] transition-all interactive-btn"
          >
            <Zap className="w-3.5 h-3.5 text-[#00FF9D]" />
            <span>ESC / SKIP</span>
          </button>
        </div>
      </div>

      {/* HARDWARE GAUGES STRIP */}
      <div className="relative z-10 w-full my-3 grid grid-cols-2 sm:grid-cols-4 gap-3">
        <div className="p-3 rounded-2xl bg-[#0F121E]/80 backdrop-blur-md border border-white/[0.08] space-y-1.5 shadow-md">
          <div className="flex items-center justify-between text-[10px] text-[#64748B]">
            <span className="flex items-center gap-1"><Cpu className="w-3.5 h-3.5 text-[#00F0FF]" /> CPU SMP</span>
            <span className="text-[#00FF9D] font-bold">16 CORES</span>
          </div>
          <div className="h-1.5 w-full bg-[#08090D] rounded-full overflow-hidden">
            <div className="h-full bg-[#00F0FF] rounded-full" style={{ width: `${Math.min(progress * 0.9 + 10, 100)}%` }}></div>
          </div>
          <div className="text-[11px] font-bold text-white truncate">4.8 GHz TURBO OK</div>
        </div>

        <div className="p-3 rounded-2xl bg-[#0F121E]/80 backdrop-blur-md border border-white/[0.08] space-y-1.5 shadow-md">
          <div className="flex items-center justify-between text-[10px] text-[#64748B]">
            <span className="flex items-center gap-1"><HardDrive className="w-3.5 h-3.5 text-[#38BDF8]" /> ROOT STORAGE</span>
            <span className="text-[#38BDF8] font-bold">NVMe M.2</span>
          </div>
          <div className="h-1.5 w-full bg-[#08090D] rounded-full overflow-hidden">
            <div className="h-full bg-[#38BDF8] rounded-full" style={{ width: `${Math.min(progress * 0.95 + 5, 100)}%` }}></div>
          </div>
          <div className="text-[11px] font-bold text-white truncate">EXT4 32GB OK</div>
        </div>

        <div className="p-3 rounded-2xl bg-[#0F121E]/80 backdrop-blur-md border border-white/[0.08] space-y-1.5 shadow-md">
          <div className="flex items-center justify-between text-[10px] text-[#64748B]">
            <span className="flex items-center gap-1"><Wifi className="w-3.5 h-3.5 text-[#00FF9D]" /> WIRELESS</span>
            <span className="text-[#00FF9D] font-bold">868/915MHz</span>
          </div>
          <div className="h-1.5 w-full bg-[#08090D] rounded-full overflow-hidden">
            <div className="h-full bg-[#00FF9D] rounded-full" style={{ width: `${Math.min(progress * 0.88 + 12, 100)}%` }}></div>
          </div>
          <div className="text-[11px] font-bold text-white truncate">OpenWrt / LoRaWAN</div>
        </div>

        <div className="p-3 rounded-2xl bg-[#0F121E]/80 backdrop-blur-md border border-white/[0.08] space-y-1.5 shadow-md">
          <div className="flex items-center justify-between text-[10px] text-[#64748B]">
            <span className="flex items-center gap-1"><Activity className="w-3.5 h-3.5 text-[#A855F7]" /> INTEL NPU</span>
            <span className="text-[#A855F7] font-bold">VPU LOAD</span>
          </div>
          <div className="h-1.5 w-full bg-[#08090D] rounded-full overflow-hidden">
            <div className="h-full bg-gradient-to-r from-[#A855F7] to-[#00FF9D] rounded-full" style={{ width: `${Math.min(progress * 0.85 + 15, 100)}%` }}></div>
          </div>
          <div className="text-[11px] font-bold text-white truncate">OPENVINO RT READY</div>
        </div>
      </div>

      {/* MAIN FULL-WIDTH CLI CONSOLE (TTY1) */}
      <div className="relative z-10 flex-1 w-full bg-[#070912]/95 backdrop-blur-xl p-4 sm:p-6 rounded-3xl border border-[#00F0FF]/30 shadow-[inset_0_2px_20px_rgba(0,0,0,0.9),0_8px_32px_rgba(0,0,0,0.6)] overflow-hidden flex flex-col justify-between corner-brackets my-2 min-h-0">
        
        <div className="flex items-center justify-between pb-2.5 border-b border-white/[0.08] text-[11px] text-[#64748B]">
          <div className="flex items-center gap-2 text-[#00F0FF] font-bold">
            <span className="w-2 h-2 rounded-full bg-[#00F0FF] animate-ping"></span>
            <span>TTY1 / SYSTEMD LIVE KERNEL STREAM</span>
          </div>
          <span>LOG_CHANNEL // STDOUT (UTF-8)</span>
        </div>

        {/* Auto-scrolling CLI logs */}
        <div 
          ref={logContainerRef}
          className="flex-1 space-y-2.5 overflow-y-auto font-mono text-xs sm:text-sm scroll-smooth my-3 pr-2"
        >
          {bootLogs.slice(0, currentStepIndex + 1).map((log, idx) => (
            <div key={idx} className="flex items-start gap-3 animate-fadeIn leading-relaxed">
              <span className={log.type === 'ok' ? 'text-[#00FF9D] font-bold shrink-0 bg-[#00FF9D]/10 px-1.5 py-0.5 rounded border border-[#00FF9D]/30 text-xs' : 'text-[#00F0FF] font-bold shrink-0 text-xs'}>
                {log.tag}
              </span>
              <span className={idx === currentStepIndex ? 'text-white font-bold' : 'text-[#94A3B8]'}>
                {log.text}
                {idx === currentStepIndex && !isReady && <span className="inline-block w-2 h-4 ml-1.5 bg-[#00FF9D] animate-pulse"></span>}
              </span>
            </div>
          ))}
        </div>

        <div className="pt-2.5 border-t border-white/[0.08] flex items-center justify-between text-[11px] text-[#64748B]">
          <span>BAUD: 115200 // BUFFER: 100% OK</span>
          <span className="text-[#00FF9D] font-bold flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-[#00FF9D]"></span>
            PIPE: ACTIVE
          </span>
        </div>
      </div>

      {/* BOTTOM CYBERDECK CONTROLS & SPECTRUM PROGRESS */}
      <div className="relative z-10 w-full pt-2 space-y-2.5">
        
        {/* Progress Display Bar */}
        <div className="space-y-1.5">
          <div className="flex items-center justify-between text-xs font-mono">
            <span className="text-[#94A3B8] flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#00FF9D] beacon-pulse shadow-[0_0_8px_#00FF9D]"></span>
              <span>{isReady ? 'CYBERDECK READY // ENGAGE OPERATOR HUD:' : 'COMPILING HARDWARE REGISTERS & NEURAL WEIGHTS:'}</span>
            </span>
            <span className="text-[#00FF9D] font-bold text-sm">{progress}%</span>
          </div>

          {/* Full-width Glowing Spectrum Bar */}
          <div className="h-2.5 w-full bg-[#131828] rounded-full overflow-hidden p-0.5 border border-[#1E263D]">
            <div 
              className="h-full bg-gradient-to-r from-[#00F0FF] via-[#38BDF8] via-[#00FF9D] to-[#8B5CF6] rounded-full transition-all duration-75 ease-out shadow-[0_0_20px_#00F0FF]"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>

        {/* Interactive Cyberdeck Trigger State */}
        {isReady ? (
          <div className="p-3.5 sm:p-4 rounded-2xl bg-gradient-to-r from-[#00FF9D]/15 via-[#00F0FF]/15 to-[#38BDF8]/15 border-2 border-[#00FF9D] flex flex-col sm:flex-row items-center justify-between gap-3 shadow-[0_0_40px_rgba(0,255,157,0.4)] animate-fadeIn">
            <div className="flex items-center gap-3 text-center sm:text-left">
              <div className="w-10 h-10 rounded-2xl bg-[#00FF9D]/20 border border-[#00FF9D] flex items-center justify-center text-[#00FF9D] shrink-0">
                <Sparkles className="w-5 h-5 animate-spin" style={{ animationDuration: '6s' }} />
              </div>
              <div>
                <div className="text-sm font-bold text-white uppercase tracking-wider flex items-center gap-2 justify-center sm:justify-start">
                  <span>CYBERDECK ENGAGED</span>
                  <span className="w-2 h-2 rounded-full bg-[#00FF9D] inline-block"></span>
                </div>
                <div className="text-xs text-[#00FF9D]">
                  Click the button or press <strong className="text-white bg-black/50 px-1.5 py-0.5 rounded border border-white/20">[ ENTER ]</strong> to launch Graphical HUD
                </div>
              </div>
            </div>

            <button
              onClick={handleFinish}
              className="w-full sm:w-auto px-8 py-3 rounded-xl bg-gradient-to-r from-[#00FF9D] to-[#00F0FF] hover:from-[#00F0FF] hover:to-[#38BDF8] text-[#08090D] font-mono text-sm font-black uppercase tracking-wider flex items-center justify-center gap-2 shadow-[0_0_25px_rgba(0,255,157,0.7)] hover:shadow-[0_0_40px_rgba(0,240,255,0.9)] transition-all interactive-btn hover:scale-105"
            >
              <span>INITIALIZE OS [ OK ]</span>
              <CornerDownLeft className="w-4 h-4" />
            </button>
          </div>
        ) : (
          <div className="flex items-center justify-between text-[11px] text-[#64748B] px-1">
            <span className="flex items-center gap-1.5 text-[#00FF9D]">
              <Lock className="w-3.5 h-3.5" />
              <span>AUTHENTICATED OPERATOR // MANAN SHARMA</span>
            </span>
            <button
              onClick={handleFinish}
              className="text-[#00F0FF] font-semibold hover:underline"
            >
              CLICK OR PRESS ESC TO SKIP BOOT →
            </button>
          </div>
        )}

      </div>

    </div>
  );
};
