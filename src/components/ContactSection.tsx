import React, { useState } from 'react';
import { Mail, Send, CheckCircle, Radio, Copy, Check } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    topic: 'Research Collaboration',
    message: ''
  });
  const [copied, setCopied] = useState(false);
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  const topics = [
    'Research Collaboration',
    'Full-Time Role / Internship',
    'Edge AI & Systems',
    'Technical Discussion'
  ];

  const handleCopyEmail = () => {
    navigator.clipboard.writeText('manan31206@gmail.com');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');

    const subject = `[Portfolio Inquiry: ${formData.topic}] from ${formData.name}`;
    const body = `${formData.message}\n\n---\nSender: ${formData.name}\nEmail: ${formData.email}\nTopic: ${formData.topic}`;
    const mailtoUrl = `mailto:manan31206@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

    window.location.href = mailtoUrl;
    setStatus('success');
    setTimeout(() => {
      setStatus('idle');
      setFormData({ name: '', email: '', topic: 'Research Collaboration', message: '' });
    }, 3000);
  };

  return (
    <section id="contact" className="py-20 px-4 sm:px-8 lg:px-12 2xl:px-16 w-full max-w-[1720px] mx-auto scroll-mt-24">
      {/* Section Header */}
      <div className="mb-12">
        <div className="flex flex-wrap items-center gap-3 mb-3">
          <span className="cartouche-label text-xs">
            [07 // FIELD DISPATCH]
          </span>
          <span className="font-serif tracking-widest text-xs uppercase text-[#1a3055]/70 font-bold">
            DIRECT COMMUNICATIONS RELAY
          </span>
        </div>
        <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#1a3055] mb-4">
          Direct Dispatch & Transmission
        </h2>
        <p className="font-serif text-sm sm:text-base max-w-3xl text-[#1a3055]/85 leading-relaxed">
          Whether you want to discuss research collaborations, high-impact engineering roles, or explore technical architectures, dispatch a direct message below.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Column (5 cols): Coordinates */}
        <div className="lg:col-span-5 space-y-4">
          <div className="woodblock-card woodblock-bar-indigo p-6 sm:p-8 space-y-4 relative group">
            <div>
              <h3 className="font-serif text-xs uppercase tracking-widest text-[#1a3055] font-bold pb-2 border-b-2 border-[#1a3055]/20 flex items-center justify-between">
                <span>Direct Contact Coordinates</span>
                <Radio className="w-4 h-4 text-[#d4553a] animate-pulse" />
              </h3>

              {/* Email Card */}
              <div className="p-4 bg-[#f5f0e1] border-2 border-[#1a3055] space-y-2 mt-4 shadow-woodblock">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-serif font-bold text-[#1a3055] flex items-center gap-2">
                    <div className="p-1.5 bg-[#1a3055] text-[#f5f0e1]">
                      <Mail className="w-3.5 h-3.5" />
                    </div>
                    Electronic Mail
                  </span>
                  <button
                    onClick={handleCopyEmail}
                    className="seal-btn-secondary px-2.5 py-1 text-[10px] flex items-center gap-1 font-serif uppercase tracking-wider"
                  >
                    {copied ? <Check className="w-3 h-3 text-[#747800]" /> : <Copy className="w-3 h-3 text-[#1a3055]" />}
                    {copied ? 'Copied' : 'Copy'}
                  </button>
                </div>
                <div className="text-sm font-bold text-[#1a3055] font-serif select-all">
                  manan31206@gmail.com
                </div>
              </div>

              {/* LinkedIn Card */}
              <a
                href="https://www.linkedin.com/in/manan-sharma-3980b1324/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 bg-[#f5f0e1] border-2 border-[#1a3055] block hover:bg-[#c9a227]/20 transition-all group/link mt-3 shadow-woodblock"
              >
                <div className="flex items-center justify-between">
                  <span className="text-xs font-serif font-bold text-[#1a3055] flex items-center gap-2">
                    <div className="p-1.5 bg-[#2a5a8c] text-[#f5f0e1]">
                      <LinkedinIcon className="w-3.5 h-3.5" />
                    </div>
                    LinkedIn Network
                  </span>
                  <span className="text-xs text-[#1a3055] group-hover/link:text-[#d4553a] font-bold">↗</span>
                </div>
                <div className="text-xs font-bold text-[#2a5a8c] mt-2 font-serif truncate">
                  linkedin.com/in/manan-sharma-3980b1324
                </div>
              </a>

              {/* GitHub Card */}
              <a
                href="https://github.com/manan316"
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 bg-[#f5f0e1] border-2 border-[#1a3055] block hover:bg-[#c9a227]/20 transition-all group/link mt-3 shadow-woodblock"
              >
                <div className="flex items-center justify-between">
                  <span className="text-xs font-serif font-bold text-[#1a3055] flex items-center gap-2">
                    <div className="p-1.5 bg-[#1a3055] text-[#f5f0e1]">
                      <GithubIcon className="w-3.5 h-3.5" />
                    </div>
                    GitHub Repositories
                  </span>
                  <span className="text-xs text-[#1a3055] group-hover/link:text-[#d4553a] font-bold">↗</span>
                </div>
                <div className="text-xs font-bold text-[#1a3055] mt-2 font-serif truncate">
                  github.com/manan316
                </div>
              </a>

              {/* Location & Status Info */}
              <div className="pt-3 border-t-2 border-[#1a3055]/20 text-xs font-serif text-[#1a3055] space-y-1.5">
                <div className="flex justify-between items-center">
                  <span className="text-[#1a3055]/70 font-bold uppercase tracking-wider text-[11px]">PHYSICAL STATION</span>
                  <span className="text-[#1a3055] font-bold">Jammu & Kashmir, India</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-[#1a3055]/70 font-bold uppercase tracking-wider text-[11px]">COMMUNICATION RELAY</span>
                  <span className="text-[#747800] font-bold uppercase tracking-wider">ACTIVE & MONITORED</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column (7 cols): Direct Message Dispatch Console */}
        <div className="lg:col-span-7">
          <div className="woodblock-card woodblock-bar-vermilion p-6 sm:p-8 relative">
            <div>
              <div className="flex items-center justify-between pb-4 mb-6 border-b-2 border-[#1a3055]/20">
                <div>
                  <h3 className="font-serif text-base sm:text-xl font-bold text-[#1a3055]">
                    Dispatch Direct Transmission
                  </h3>
                  <p className="font-serif text-xs text-[#1a3055]/70 mt-0.5">
                    Opens your email client with structured headers and immediate delivery.
                  </p>
                </div>
                <span className="cartouche-label text-[10px]">
                  DIRECT RELAY
                </span>
              </div>

              {/* Form */}
              <form onSubmit={handleSubmit} className="space-y-5">
                {/* Topic Selector */}
                <div>
                  <label className="block text-xs font-serif uppercase tracking-widest text-[#1a3055] font-bold mb-2">
                    Topic of Discussion
                  </label>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                    {topics.map((t) => (
                      <button
                        key={t}
                        type="button"
                        onClick={() => setFormData({ ...formData, topic: t })}
                        className={`p-2 text-xs font-serif font-bold text-center border-2 border-[#1a3055] transition-all duration-150 ${
                          formData.topic === t
                            ? 'bg-[#d4553a] text-[#f5f0e1] shadow-woodblock translate-x-0.5 translate-y-0.5'
                            : 'bg-[#f5f0e1] text-[#1a3055] hover:bg-[#c9a227]/20'
                        }`}
                      >
                        {t}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Name & Email Inputs */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-serif uppercase tracking-widest text-[#1a3055] font-bold mb-1.5">
                      Your Name
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Dr. Alex Mercer"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="woodblock-input w-full text-xs sm:text-sm font-serif"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-serif uppercase tracking-widest text-[#1a3055] font-bold mb-1.5">
                      Your Email Address
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="alex@domain.org"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="woodblock-input w-full text-xs sm:text-sm font-serif"
                    />
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label className="block text-xs font-serif uppercase tracking-widest text-[#1a3055] font-bold mb-1.5">
                    Transmission Message
                  </label>
                  <textarea
                    required
                    rows={4}
                    placeholder="Provide details about the project, opportunity, or research collaboration..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="woodblock-input w-full text-xs sm:text-sm font-serif resize-none"
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={status === 'submitting'}
                  className="seal-btn-primary w-full py-3.5 text-sm flex items-center justify-center gap-2 group font-serif font-bold uppercase tracking-widest"
                >
                  {status === 'submitting' ? (
                    <span>Opening Transmission Client...</span>
                  ) : status === 'success' ? (
                    <span className="flex items-center gap-1.5 text-[#f5f0e1]">
                      <CheckCircle className="w-4 h-4 text-[#f5f0e1]" /> Message Dispatched!
                    </span>
                  ) : (
                    <>
                      <Send className="w-4 h-4 text-[#f5f0e1] group-hover:translate-x-1 group-hover:-translate-y-0.5 transition-transform" />
                      <span>Send Transmission via Email</span>
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
