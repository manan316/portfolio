import React, { useState } from 'react';
import { personalInfo } from '../data/portfolioData';
import { SectorRibbon } from './SectorRibbon';
import { GithubIcon, LinkedinIcon } from './Icons';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { 
  Mail, 
  Send, 
  Copy, 
  Check, 
  Terminal, 
  MapPin, 
  FileText, 
  AlertCircle,
  ShieldCheck,
  Zap
} from 'lucide-react';

export const ContactSection: React.FC = () => {
  const [copied, setCopied] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMsg, setErrorMsg] = useState('');
  const containerRef = useScrollReveal<HTMLElement>();

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setErrorMsg('Please complete all required fields.');
      setStatus('error');
      return;
    }

    setStatus('loading');
    setErrorMsg('');

    const accessKey = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY;

    if (!accessKey) {
      const subject = encodeURIComponent(
        formData.subject.trim()
          ? `[Portfolio Contact] ${formData.subject.trim()} — from ${formData.name.trim()}`
          : `[Portfolio Contact] Transmission from ${formData.name.trim()}`
      );
      const body = encodeURIComponent(
        `Sender Name: ${formData.name.trim()}\n` +
        `Sender Email: ${formData.email.trim()}\n\n` +
        `Message:\n${formData.message.trim()}\n\n` +
        `---\nTransmitted via Manan Sharma's Portfolio (MANAN.SYS)`
      );
      window.location.href = `mailto:${personalInfo.email}?subject=${subject}&body=${body}`;
      setStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
      setTimeout(() => setStatus('idle'), 6000);
      return;
    }

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json'
        },
        body: JSON.stringify({
          access_key: accessKey,
          name: formData.name.trim(),
          email: formData.email.trim(),
          subject: formData.subject.trim() || `[Portfolio Contact] New message from ${formData.name.trim()}`,
          message: formData.message.trim(),
          from_name: `${formData.name.trim()} via Portfolio`,
        })
      });

      const data = await response.json();

      if (data.success) {
        setStatus('success');
        setFormData({ name: '', email: '', subject: '', message: '' });
        setTimeout(() => setStatus('idle'), 6000);
      } else {
        throw new Error(data.message || 'Transmission dispatch failed. Please try again.');
      }
    } catch (err: any) {
      setErrorMsg(err.message || 'Network error occurred. Please use direct email button.');
      setStatus('error');
    }
  };

  return (
    <section 
      id="contact" 
      ref={containerRef} 
      className="relative bg-dark-grid text-[#F8FAFC] border-t-2 border-[#1E293B] overflow-hidden"
    >
      {/* Sector Ribbon */}
      <SectorRibbon sectorNumber="07" sectorName="DIRECT TRANSMISSION // CONTACT & COLLABORATION" dark={true} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 py-16 sm:py-24">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-14 space-y-3 reveal-on-scroll">
          <div className="inline-flex items-center gap-2 font-mono text-xs font-bold text-[#00E5FF] px-3.5 py-1.5 rounded-full bg-[#0D131F] border border-[#1E293B] hover:border-[#00E5FF] transition-colors shadow-sm">
            <Terminal className="w-3.5 h-3.5 text-[#00E5FF]" />
            <span>ESTABLISH SECURE LINK</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-bold font-sans text-white">
            Initiate Contact & Transmission
          </h2>
          <p className="text-xs sm:text-sm text-[#94A3B8] font-sans">
            Open for research collaborations, engineering roles, and low-level / edge AI consulting.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14">
          
          {/* Left Column: Direct Credentials & Copy Bar */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Direct Email Card */}
            <div className="p-6 sm:p-7 rounded-2xl tactical-glass-card space-y-4 reveal-on-scroll reveal-delay-100 corner-brackets shadow-xl">
              <div className="flex items-center justify-between pb-2 border-b border-[#1E293B]">
                <span className="font-mono text-xs text-[#00E5FF] font-bold tracking-wider uppercase flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#00E5FF] beacon-pulse shadow-[0_0_6px_#00E5FF]"></span>
                  // DIRECT INBOX
                </span>
                <span className="text-[#10B981] font-mono text-[10px] font-bold flex items-center gap-1">
                  <ShieldCheck className="w-3.5 h-3.5" />
                  VERIFIED
                </span>
              </div>
              
              <div>
                <div className="text-xs font-mono text-[#64748B] uppercase font-semibold">EMAIL ADDRESS</div>
                <div className="text-base sm:text-lg font-mono font-bold text-white mt-1 break-all select-all">
                  {personalInfo.email}
                </div>
              </div>

              <div className="flex items-center gap-3 pt-2">
                <button
                  onClick={handleCopyEmail}
                  className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-mono font-bold transition-all interactive-btn ${
                    copied 
                      ? 'bg-[#10B981] text-white shadow-[0_0_18px_rgba(16,185,129,0.5)]' 
                      : 'bg-[#06090E] hover:bg-[#131C2E] text-white border border-[#1E293B]'
                  }`}
                >
                  {copied ? <Check className="w-3.5 h-3.5 text-white animate-bounce" /> : <Copy className="w-3.5 h-3.5 text-[#00E5FF]" />}
                  <span>{copied ? 'COPIED TO CLIPBOARD' : 'COPY EMAIL'}</span>
                </button>

                <a
                  href={`mailto:${personalInfo.email}`}
                  className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-[#00E5FF] hover:bg-[#38BDF8] text-[#06090E] text-xs font-mono font-bold transition-all shadow-md hover:shadow-[0_0_20px_rgba(0,229,255,0.4)] interactive-btn border border-[#00E5FF]"
                >
                  <Mail className="w-3.5 h-3.5" />
                  <span>SEND EMAIL</span>
                </a>
              </div>
            </div>

            {/* Tactical Channel Links */}
            <div className="p-6 rounded-2xl tactical-glass-card space-y-4 reveal-on-scroll reveal-delay-200 shadow-xl">
              <span className="font-mono text-xs text-[#94A3B8] font-bold tracking-wider uppercase block pb-2 border-b border-[#1E293B]">
                // VERIFIED PLATFORMS & REPOSITORIES
              </span>

              <div className="space-y-3">
                <a
                  href={personalInfo.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-3.5 rounded-xl bg-[#06090E] hover:bg-[#131C2E] border border-[#1E293B] hover:border-[#00E5FF] text-xs font-mono text-white transition-all group interactive-btn"
                >
                  <div className="flex items-center gap-3">
                    <div className="p-1.5 rounded-lg bg-[#00E5FF]/10 text-[#00E5FF]">
                      <LinkedinIcon className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="font-bold">LinkedIn Profile</div>
                      <div className="text-[10px] text-[#64748B]">Professional Network</div>
                    </div>
                  </div>
                  <span className="text-[#64748B] group-hover:text-[#00E5FF] group-hover:translate-x-1 transition-all">→</span>
                </a>

                <a
                  href={personalInfo.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-3.5 rounded-xl bg-[#06090E] hover:bg-[#131C2E] border border-[#1E293B] hover:border-[#FF5722] text-xs font-mono text-white transition-all group interactive-btn"
                >
                  <div className="flex items-center gap-3">
                    <div className="p-1.5 rounded-lg bg-[#FF5722]/10 text-[#FF5722]">
                      <GithubIcon className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="font-bold">GitHub Repositories</div>
                      <div className="text-[10px] text-[#64748B]">Open Source Codebases</div>
                    </div>
                  </div>
                  <span className="text-[#64748B] group-hover:text-[#FF5722] group-hover:translate-x-1 transition-all">→</span>
                </a>

                <a
                  href={personalInfo.resumeUrl}
                  download="Manan_Sharma_Resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-3.5 rounded-xl bg-[#06090E] hover:bg-[#131C2E] border border-[#1E293B] hover:border-[#38BDF8] text-xs font-mono text-white transition-all group interactive-btn"
                >
                  <div className="flex items-center gap-3">
                    <div className="p-1.5 rounded-lg bg-[#38BDF8]/10 text-[#38BDF8]">
                      <FileText className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="font-bold">Official Resume PDF</div>
                      <div className="text-[10px] text-[#64748B]">Complete Verified Credentials</div>
                    </div>
                  </div>
                  <span className="text-[#64748B] group-hover:text-[#38BDF8] group-hover:translate-y-0.5 transition-all">↓</span>
                </a>
              </div>
            </div>

            {/* Location & Response Latency */}
            <div className="p-4 rounded-2xl bg-[#0D131F]/90 border border-[#1E293B] flex items-center justify-between text-xs font-mono text-[#64748B] reveal-on-scroll reveal-delay-250 backdrop-blur-md">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-[#00E5FF]" />
                <span className="text-[#F8FAFC] font-semibold">{personalInfo.location}</span>
              </div>
              <span className="text-[#00E5FF] flex items-center gap-1.5 font-bold">
                <Zap className="w-3.5 h-3.5 text-[#00E5FF]" />
                LATENCY &lt; 24 HRS
              </span>
            </div>

          </div>

          {/* Right Column: Tactical Form */}
          <div className="lg:col-span-7">
            <div className="p-6 sm:p-8 rounded-2xl tactical-glass-card space-y-6 reveal-on-scroll reveal-delay-150 corner-brackets shadow-2xl">
              
              <div className="flex items-center justify-between border-b border-[#1E293B] pb-4">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#00E5FF] beacon-pulse shadow-[0_0_8px_#00E5FF]"></span>
                  <span className="font-mono text-xs font-bold text-white uppercase tracking-wider">
                    TRANSMISSION DISPATCH PROTOCOL
                  </span>
                </div>
                <span className="font-mono text-[10px] text-[#00E5FF] font-bold bg-[#00E5FF]/10 px-2.5 py-0.5 rounded-full border border-[#00E5FF]/30">
                  ENCRYPTED CHANNEL
                </span>
              </div>

              {status === 'success' ? (
                <div className="py-12 flex flex-col items-center text-center space-y-3 animate-fadeIn">
                  <div className="w-14 h-14 rounded-full bg-[#00E5FF]/20 border-2 border-[#00E5FF] flex items-center justify-center text-[#00E5FF] shadow-[0_0_25px_rgba(0,229,255,0.4)] animate-bounce">
                    <Check className="w-7 h-7" />
                  </div>
                  <h3 className="text-2xl font-bold font-sans text-white">Transmission Delivered</h3>
                  <p className="text-xs font-mono text-[#94A3B8] max-w-sm leading-relaxed">
                    Your message has been securely transmitted directly to my inbox. I will review and reply to your provided email address shortly.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  
                  {status === 'error' && (
                    <div className="p-3 rounded-xl bg-red-950/50 border border-red-800 text-red-200 text-xs font-mono flex items-center gap-2 animate-fadeIn">
                      <AlertCircle className="w-4 h-4 shrink-0 text-red-400" />
                      <span>{errorMsg}</span>
                    </div>
                  )}

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="font-mono text-[11px] text-[#94A3B8] block uppercase font-bold">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="Dr. Jane Doe / Engineer"
                        className="w-full px-4 py-3 rounded-xl bg-[#06090E] border border-[#1E293B] focus:border-[#00E5FF] focus:ring-2 focus:ring-[#00E5FF]/20 text-white text-xs font-mono focus:outline-none placeholder-[#64748B] transition-all"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label className="font-mono text-[11px] text-[#94A3B8] block uppercase font-bold">
                        Your Email *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="jane.doe@organization.edu"
                        className="w-full px-4 py-3 rounded-xl bg-[#06090E] border border-[#1E293B] focus:border-[#00E5FF] focus:ring-2 focus:ring-[#00E5FF]/20 text-white text-xs font-mono focus:outline-none placeholder-[#64748B] transition-all"
                      />
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label className="font-mono text-[11px] text-[#94A3B8] block uppercase font-bold">
                      Subject / Purpose
                    </label>
                    <input
                      type="text"
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      placeholder="Research Collaboration / Job Opportunity / Question"
                      className="w-full px-4 py-3 rounded-xl bg-[#06090E] border border-[#1E293B] focus:border-[#00E5FF] focus:ring-2 focus:ring-[#00E5FF]/20 text-white text-xs font-mono focus:outline-none placeholder-[#64748B] transition-all"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="font-mono text-[11px] text-[#94A3B8] block uppercase font-bold">
                      Message Content *
                    </label>
                    <textarea
                      required
                      rows={5}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Enter detailed message or project specification..."
                      className="w-full px-4 py-3 rounded-xl bg-[#06090E] border border-[#1E293B] focus:border-[#00E5FF] focus:ring-2 focus:ring-[#00E5FF]/20 text-white text-xs font-mono focus:outline-none placeholder-[#64748B] resize-none transition-all"
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    disabled={status === 'loading'}
                    className="w-full py-3.5 rounded-xl bg-[#00E5FF] hover:bg-[#38BDF8] disabled:opacity-50 text-[#06090E] font-mono text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 shadow-lg hover:shadow-[0_0_25px_rgba(0,229,255,0.5)] transition-all interactive-btn border border-[#00E5FF]"
                  >
                    {status === 'loading' ? (
                      <>
                        <div className="w-4 h-4 border-2 border-[#06090E] border-t-transparent rounded-full animate-spin"></div>
                        <span>ENCRYPTING & DISPATCHING...</span>
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        <span>DISPATCH TRANSMISSION</span>
                      </>
                    )}
                  </button>

                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
