import React, { useState } from 'react';
import { personalInfo } from '../data/portfolioData';
import { SectorRibbon } from './SectorRibbon';
import { GithubIcon, LinkedinIcon } from './Icons';
import { 
  Mail, 
  Send, 
  Copy, 
  Check, 
  Terminal, 
  MapPin, 
  FileText, 
  AlertCircle
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

    // If Web3Forms key is not configured in .env, seamlessly fall back to direct mailto client
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
    <section id="contact" className="relative bg-[#0A0E17] text-[#F4EFE6] border-t-2 border-[#FF5722]">
      {/* Sector Ribbon */}
      <SectorRibbon sectorNumber="07" sectorName="DIRECT TRANSMISSION // CONTACT & COLLABORATION" dark={true} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 py-16 sm:py-24">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-14 space-y-3">
          <div className="inline-flex items-center gap-2 font-mono text-xs font-bold text-[#00E5FF] px-3 py-1 rounded-full bg-[#131C2E] border border-[#253347]">
            <Terminal className="w-3.5 h-3.5" />
            <span>ESTABLISH SECURE LINK</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-bold font-sans text-white">
            Initiate Contact
          </h2>
          <p className="text-xs sm:text-sm text-[#94A3B8] font-sans">
            Open for research collaborations, engineering roles, and low-level / edge AI consulting.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14">
          
          {/* Left Column: Direct Credentials & Copy Bar */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Direct Email Card */}
            <div className="p-6 rounded-xl bg-[#0D131F] border border-[#253347] space-y-4">
              <span className="font-mono text-xs text-[#00E5FF] font-bold tracking-wider uppercase">
                // DIRECT INBOX
              </span>
              <div>
                <div className="text-sm font-mono text-[#64748B]">EMAIL ADDRESS</div>
                <div className="text-base sm:text-lg font-mono font-bold text-white mt-1 break-all">
                  {personalInfo.email}
                </div>
              </div>

              <div className="flex items-center gap-3 pt-2">
                <button
                  onClick={handleCopyEmail}
                  className="flex items-center gap-2 px-4 py-2 rounded-lg bg-[#1E293B] hover:bg-[#2D3F58] text-xs font-mono font-bold text-white transition-all"
                >
                  {copied ? <Check className="w-3.5 h-3.5 text-[#00E5FF]" /> : <Copy className="w-3.5 h-3.5" />}
                  <span>{copied ? 'COPIED TO CLIPBOARD' : 'COPY EMAIL'}</span>
                </button>

                <a
                  href={`mailto:${personalInfo.email}`}
                  className="flex items-center gap-2 px-4 py-2 rounded-lg bg-[#FF5722] hover:bg-[#E64A19] text-xs font-mono font-bold text-white transition-all shadow-md hover:shadow-orange-500/20"
                >
                  <Mail className="w-3.5 h-3.5" />
                  <span>SEND EMAIL</span>
                </a>
              </div>
            </div>

            {/* Tactical Channel Links */}
            <div className="p-6 rounded-xl bg-[#0D131F] border border-[#253347] space-y-4">
              <span className="font-mono text-xs text-[#8899A6] font-bold tracking-wider uppercase">
                // VERIFIED PLATFORMS
              </span>

              <div className="space-y-3">
                <a
                  href={personalInfo.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-3 rounded-lg bg-[#131C2E] hover:bg-[#1A263D] border border-[#253347] hover:border-[#00E5FF] text-xs font-mono text-white transition-all group"
                >
                  <div className="flex items-center gap-3">
                    <LinkedinIcon className="w-4 h-4 text-[#00E5FF]" />
                    <span>LinkedIn Profile</span>
                  </div>
                  <span className="text-[#64748B] group-hover:text-white">→</span>
                </a>

                <a
                  href={personalInfo.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-3 rounded-lg bg-[#131C2E] hover:bg-[#1A263D] border border-[#253347] hover:border-[#FF5722] text-xs font-mono text-white transition-all group"
                >
                  <div className="flex items-center gap-3">
                    <GithubIcon className="w-4 h-4 text-[#FF5722]" />
                    <span>GitHub Repositories</span>
                  </div>
                  <span className="text-[#64748B] group-hover:text-white">→</span>
                </a>

                <a
                  href={personalInfo.resumeUrl}
                  download="Manan_Sharma_Resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-3 rounded-lg bg-[#131C2E] hover:bg-[#1A263D] border border-[#253347] hover:border-[#E5A93C] text-xs font-mono text-white transition-all group"
                >
                  <div className="flex items-center gap-3">
                    <FileText className="w-4 h-4 text-[#E5A93C]" />
                    <span>Official Resume PDF</span>
                  </div>
                  <span className="text-[#64748B] group-hover:text-white">↓</span>
                </a>
              </div>
            </div>

            {/* Location & Response Latency */}
            <div className="p-4 rounded-xl bg-[#0D131F]/60 border border-[#253347] flex items-center justify-between text-xs font-mono text-[#64748B]">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-[#FF5722]" />
                <span>{personalInfo.location}</span>
              </div>
              <span className="text-[#00E5FF]">TYPICAL LATENCY: &lt; 24 HRS</span>
            </div>

          </div>

          {/* Right Column: Tactical Form */}
          <div className="lg:col-span-7">
            <div className="p-6 sm:p-8 rounded-xl bg-[#0D131F] border border-[#253347] space-y-6">
              
              <div className="flex items-center justify-between border-b border-[#253347] pb-4">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#FF5722]"></span>
                  <span className="font-mono text-xs font-bold text-white uppercase tracking-wider">
                    TRANSMISSION DISPATCH PROTOCOL
                  </span>
                </div>
                <span className="font-mono text-[10px] text-[#64748B]">
                  ENCRYPTED CHANNEL
                </span>
              </div>

              {status === 'success' ? (
                <div className="py-12 flex flex-col items-center text-center space-y-3 animate-fadeIn">
                  <div className="w-12 h-12 rounded-full bg-[#00E5FF]/20 border border-[#00E5FF] flex items-center justify-center text-[#00E5FF]">
                    <Check className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold font-sans text-white">Transmission Delivered</h3>
                  <p className="text-xs font-mono text-[#94A3B8] max-w-sm">
                    Your message has been securely transmitted directly to my inbox. I will review and reply to your provided email address shortly.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  
                  {status === 'error' && (
                    <div className="p-3 rounded bg-red-950/50 border border-red-800 text-red-200 text-xs font-mono flex items-center gap-2">
                      <AlertCircle className="w-4 h-4 shrink-0" />
                      <span>{errorMsg}</span>
                    </div>
                  )}

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="font-mono text-[11px] text-[#8899A6] block uppercase font-medium">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="Dr. Jane Doe / Engineer"
                        className="w-full px-3.5 py-2.5 rounded-lg bg-[#131C2E] border border-[#253347] focus:border-[#FF5722] text-white text-xs font-mono focus:outline-none placeholder-[#475569]"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label className="font-mono text-[11px] text-[#8899A6] block uppercase font-medium">
                        Your Email *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="jane.doe@organization.edu"
                        className="w-full px-3.5 py-2.5 rounded-lg bg-[#131C2E] border border-[#253347] focus:border-[#FF5722] text-white text-xs font-mono focus:outline-none placeholder-[#475569]"
                      />
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label className="font-mono text-[11px] text-[#8899A6] block uppercase font-medium">
                      Subject / Purpose
                    </label>
                    <input
                      type="text"
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      placeholder="Research Collaboration / Job Opportunity / Question"
                      className="w-full px-3.5 py-2.5 rounded-lg bg-[#131C2E] border border-[#253347] focus:border-[#FF5722] text-white text-xs font-mono focus:outline-none placeholder-[#475569]"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="font-mono text-[11px] text-[#8899A6] block uppercase font-medium">
                      Message Content *
                    </label>
                    <textarea
                      required
                      rows={5}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Enter detailed message or project specification..."
                      className="w-full px-3.5 py-2.5 rounded-lg bg-[#131C2E] border border-[#253347] focus:border-[#FF5722] text-white text-xs font-mono focus:outline-none placeholder-[#475569] resize-none"
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    disabled={status === 'loading'}
                    className="w-full py-3 rounded-lg bg-[#FF5722] hover:bg-[#E64A19] disabled:opacity-50 text-white font-mono text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 shadow-lg hover:shadow-orange-500/25 transition-all"
                  >
                    {status === 'loading' ? (
                      <>
                        <div className="w-3.5 h-3.5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                        <span>ENCRYPTING & DISPATCHING...</span>
                      </>
                    ) : (
                      <>
                        <Send className="w-3.5 h-3.5" />
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
