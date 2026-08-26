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
      className="relative bg-parchment-canvas text-[#1C1917] border-t-2 border-[#DECFC0] overflow-hidden"
    >
      {/* Sector Ribbon */}
      <SectorRibbon sectorNumber="07" sectorName="DIRECT TRANSMISSION // CONTACT & COLLABORATION" dark={false} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 py-16 sm:py-24">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-14 space-y-3 reveal-on-scroll">
          <div className="inline-flex items-center gap-2 font-mono text-xs font-bold text-[#A45238] px-3.5 py-1.5 rounded-full bg-[#FAF7F2] border border-[#DECFC0] hover:border-[#A45238] transition-colors shadow-2xs">
            <Terminal className="w-3.5 h-3.5 text-[#A45238]" />
            <span>ESTABLISH SECURE LINK</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-bold font-sans text-[#1C1917]">
            Initiate Contact & Transmission
          </h2>
          <p className="text-xs sm:text-sm text-[#78716C] font-sans">
            Open for research collaborations, engineering roles, and low-level / edge AI consulting.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14">
          
          {/* Left Column: Direct Credentials & Copy Bar */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Direct Email Card */}
            <div className="p-6 sm:p-7 rounded-2xl tactical-glass-card space-y-4 reveal-on-scroll reveal-delay-100 corner-brackets shadow-sm">
              <div className="flex items-center justify-between pb-2 border-b border-[#DECFC0]">
                <span className="font-mono text-xs text-[#A45238] font-bold tracking-wider uppercase flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#A45238] beacon-pulse shadow-[0_0_6px_#A45238]"></span>
                  // DIRECT INBOX
                </span>
                <span className="text-[#15803D] font-mono text-[10px] font-bold flex items-center gap-1">
                  <ShieldCheck className="w-3.5 h-3.5" />
                  VERIFIED
                </span>
              </div>
              
              <div>
                <div className="text-xs font-mono text-[#78716C] uppercase font-semibold">EMAIL ADDRESS</div>
                <div className="text-base sm:text-lg font-mono font-bold text-[#1C1917] mt-1 break-all select-all">
                  {personalInfo.email}
                </div>
              </div>

              <div className="flex items-center gap-3 pt-2">
                <button
                  onClick={handleCopyEmail}
                  className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-mono font-bold transition-all interactive-btn ${
                    copied 
                      ? 'bg-[#15803D] text-white shadow-sm' 
                      : 'bg-[#EFE6D7] hover:bg-[#E8DDD0] text-[#1C1917] border border-[#DECFC0]'
                  }`}
                >
                  {copied ? <Check className="w-3.5 h-3.5 text-white animate-bounce" /> : <Copy className="w-3.5 h-3.5 text-[#A45238]" />}
                  <span>{copied ? 'COPIED TO CLIPBOARD' : 'COPY EMAIL'}</span>
                </button>

                <a
                  href={`mailto:${personalInfo.email}`}
                  className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-[#1C1917] hover:bg-[#A45238] text-[#FAF5EE] text-xs font-mono font-bold transition-all shadow-sm interactive-btn border border-[#1C1917]"
                >
                  <Mail className="w-3.5 h-3.5" />
                  <span>SEND EMAIL</span>
                </a>
              </div>
            </div>

            {/* Tactical Channel Links */}
            <div className="p-6 rounded-2xl tactical-glass-card space-y-4 reveal-on-scroll reveal-delay-200 shadow-sm">
              <span className="font-mono text-xs text-[#78716C] font-bold tracking-wider uppercase block pb-2 border-b border-[#DECFC0]">
                // VERIFIED PLATFORMS & REPOSITORIES
              </span>

              <div className="space-y-3">
                <a
                  href={personalInfo.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-3.5 rounded-xl bg-[#EFE6D7] hover:bg-[#E8DDD0] border border-[#DECFC0] hover:border-[#A45238] text-xs font-mono text-[#1C1917] transition-all group interactive-btn"
                >
                  <div className="flex items-center gap-3">
                    <div className="p-1.5 rounded-lg bg-[#A45238]/10 text-[#A45238]">
                      <LinkedinIcon className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="font-bold">LinkedIn Profile</div>
                      <div className="text-[10px] text-[#78716C]">Professional Network</div>
                    </div>
                  </div>
                  <span className="text-[#8C7D6B] group-hover:text-[#A45238] group-hover:translate-x-1 transition-all">→</span>
                </a>

                <a
                  href={personalInfo.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-3.5 rounded-xl bg-[#EFE6D7] hover:bg-[#E8DDD0] border border-[#DECFC0] hover:border-[#E06D3B] text-xs font-mono text-[#1C1917] transition-all group interactive-btn"
                >
                  <div className="flex items-center gap-3">
                    <div className="p-1.5 rounded-lg bg-[#E06D3B]/10 text-[#E06D3B]">
                      <GithubIcon className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="font-bold">GitHub Repositories</div>
                      <div className="text-[10px] text-[#78716C]">Open Source Codebases</div>
                    </div>
                  </div>
                  <span className="text-[#8C7D6B] group-hover:text-[#E06D3B] group-hover:translate-x-1 transition-all">→</span>
                </a>

                <a
                  href={personalInfo.resumeUrl}
                  download="Manan_Sharma_Resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-3.5 rounded-xl bg-[#EFE6D7] hover:bg-[#E8DDD0] border border-[#DECFC0] hover:border-[#A45238] text-xs font-mono text-[#1C1917] transition-all group interactive-btn"
                >
                  <div className="flex items-center gap-3">
                    <div className="p-1.5 rounded-lg bg-[#A45238]/10 text-[#A45238]">
                      <FileText className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="font-bold">Official Resume PDF</div>
                      <div className="text-[10px] text-[#78716C]">Complete Verified Credentials</div>
                    </div>
                  </div>
                  <span className="text-[#8C7D6B] group-hover:text-[#A45238] group-hover:translate-y-0.5 transition-all">↓</span>
                </a>
              </div>
            </div>

            {/* Location & Response Latency */}
            <div className="p-4 rounded-2xl bg-[#FAF7F2] border border-[#DECFC0] flex items-center justify-between text-xs font-mono text-[#78716C] reveal-on-scroll reveal-delay-250 shadow-2xs">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-[#A45238]" />
                <span className="text-[#1C1917] font-semibold">{personalInfo.location}</span>
              </div>
              <span className="text-[#A45238] flex items-center gap-1.5 font-bold">
                <Zap className="w-3.5 h-3.5 text-[#A45238]" />
                LATENCY &lt; 24 HRS
              </span>
            </div>

          </div>

          {/* Right Column: Tactical Form */}
          <div className="lg:col-span-7">
            <div className="p-6 sm:p-8 rounded-2xl tactical-glass-card space-y-6 reveal-on-scroll reveal-delay-150 corner-brackets shadow-sm">
              
              <div className="flex items-center justify-between border-b border-[#DECFC0] pb-4">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#A45238] beacon-pulse shadow-[0_0_8px_#A45238]"></span>
                  <span className="font-mono text-xs font-bold text-[#1C1917] uppercase tracking-wider">
                    TRANSMISSION DISPATCH PROTOCOL
                  </span>
                </div>
                <span className="font-mono text-[10px] text-[#A45238] font-bold bg-[#A45238]/10 px-2.5 py-0.5 rounded-full border border-[#A45238]/25">
                  ENCRYPTED CHANNEL
                </span>
              </div>

              {status === 'success' ? (
                <div className="py-12 flex flex-col items-center text-center space-y-3 animate-fadeIn">
                  <div className="w-14 h-14 rounded-full bg-[#15803D]/15 border-2 border-[#15803D] flex items-center justify-center text-[#15803D] shadow-sm animate-bounce">
                    <Check className="w-7 h-7" />
                  </div>
                  <h3 className="text-2xl font-bold font-sans text-[#1C1917]">Transmission Delivered</h3>
                  <p className="text-xs font-mono text-[#78716C] max-w-sm leading-relaxed">
                    Your message has been securely transmitted directly to my inbox. I will review and reply to your provided email address shortly.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  
                  {status === 'error' && (
                    <div className="p-3 rounded-xl bg-red-100 border border-red-300 text-red-800 text-xs font-mono flex items-center gap-2 animate-fadeIn">
                      <AlertCircle className="w-4 h-4 shrink-0 text-red-600" />
                      <span>{errorMsg}</span>
                    </div>
                  )}

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="font-mono text-[11px] text-[#78716C] block uppercase font-bold">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="Dr. Jane Doe / Engineer"
                        className="w-full px-4 py-3 rounded-xl bg-[#EFE6D7] border border-[#DECFC0] focus:border-[#A45238] focus:ring-2 focus:ring-[#A45238]/20 text-[#1C1917] text-xs font-mono focus:outline-none placeholder-[#8C7D6B] transition-all"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label className="font-mono text-[11px] text-[#78716C] block uppercase font-bold">
                        Your Email *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="jane.doe@organization.edu"
                        className="w-full px-4 py-3 rounded-xl bg-[#EFE6D7] border border-[#DECFC0] focus:border-[#A45238] focus:ring-2 focus:ring-[#A45238]/20 text-[#1C1917] text-xs font-mono focus:outline-none placeholder-[#8C7D6B] transition-all"
                      />
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label className="font-mono text-[11px] text-[#78716C] block uppercase font-bold">
                      Subject / Purpose
                    </label>
                    <input
                      type="text"
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      placeholder="Research Collaboration / Job Opportunity / Question"
                      className="w-full px-4 py-3 rounded-xl bg-[#EFE6D7] border border-[#DECFC0] focus:border-[#A45238] focus:ring-2 focus:ring-[#A45238]/20 text-[#1C1917] text-xs font-mono focus:outline-none placeholder-[#8C7D6B] transition-all"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="font-mono text-[11px] text-[#78716C] block uppercase font-bold">
                      Message Content *
                    </label>
                    <textarea
                      required
                      rows={5}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Enter detailed message or project specification..."
                      className="w-full px-4 py-3 rounded-xl bg-[#EFE6D7] border border-[#DECFC0] focus:border-[#A45238] focus:ring-2 focus:ring-[#A45238]/20 text-[#1C1917] text-xs font-mono focus:outline-none placeholder-[#8C7D6B] resize-none transition-all"
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    disabled={status === 'loading'}
                    className="w-full py-3.5 rounded-xl bg-[#1C1917] hover:bg-[#A45238] disabled:opacity-50 text-[#FAF5EE] font-mono text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 shadow-md hover:shadow-[0_0_20px_rgba(164,82,56,0.3)] transition-all interactive-btn border border-[#1C1917]"
                  >
                    {status === 'loading' ? (
                      <>
                        <div className="w-4 h-4 border-2 border-[#FAF5EE] border-t-transparent rounded-full animate-spin"></div>
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
