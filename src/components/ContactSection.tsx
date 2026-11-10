import React, { useState } from 'react';
import { Send, CheckCircle, Copy, Check, ArrowUpRight } from 'lucide-react';
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
    <section id="contact" className="pt-24 sm:pt-32 lg:pt-40 px-4 sm:px-8 max-w-[1600px] mx-auto scroll-mt-24 hairline-divider">
      {/* Section Header */}
      <div className="pb-12 sm:pb-16">
        <div className="flex items-center gap-2 font-mono text-[11px] tracking-[0.2em] uppercase text-[#71717a]">
          <span className="w-2 h-2 bg-[#ff4d00] inline-block"></span>
          <span>07 // DIRECT DISPATCH</span>
          <span>· COMMUNICATION RELAY</span>
        </div>
        <h2 className="fluid-heading text-[#0a0a0a] uppercase tracking-[-0.04em] leading-[0.88] font-black break-words mt-4 mb-6">
          INITIATE TRANSMISSION.
        </h2>
        <p className="text-lg sm:text-xl text-[#0a0a0a] font-normal leading-[1.5] max-w-3xl">
          Whether you want to discuss research collaborations, high-impact engineering roles, or explore technical architectures, dispatch a direct message below.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
        {/* Left Column (5 cols): Coordinates */}
        <div className="lg:col-span-5 space-y-8">
          <div className="font-mono text-[11px] tracking-[0.2em] uppercase text-[#ff4d00] pb-3 border-b border-[#0a0a0a]/15">
            [DIRECT CONTACT COORDINATES]
          </div>

          <div className="space-y-6">
            {/* Email */}
            <div className="p-6 border border-[#0a0a0a]/15 space-y-3">
              <div className="flex items-center justify-between font-mono text-[11px] tracking-[0.2em] uppercase text-[#71717a]">
                <span>ELECTRONIC MAIL</span>
                <button
                  onClick={handleCopyEmail}
                  className="text-[#ff4d00] hover:text-[#0a0a0a] flex items-center gap-1"
                >
                  {copied ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
                  <span>{copied ? 'COPIED' : 'COPY'}</span>
                </button>
              </div>
              <div className="text-lg sm:text-xl font-bold text-[#0a0a0a] select-all tracking-tight">
                manan31206@gmail.com
              </div>
            </div>

            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/in/manan-sharma-3980b1324/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-6 border border-[#0a0a0a]/15 block hover:border-[#ff4d00] transition-colors group"
            >
              <div className="flex items-center justify-between font-mono text-[11px] tracking-[0.2em] uppercase text-[#71717a] group-hover:text-[#ff4d00]">
                <span className="flex items-center gap-2">
                  <LinkedinIcon className="w-3.5 h-3.5" /> LINKEDIN NETWORK
                </span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </div>
              <div className="text-base font-bold text-[#0a0a0a] mt-2 tracking-tight truncate">
                linkedin.com/in/manan-sharma-3980b1324
              </div>
            </a>

            {/* GitHub */}
            <a
              href="https://github.com/manan316"
              target="_blank"
              rel="noopener noreferrer"
              className="p-6 border border-[#0a0a0a]/15 block hover:border-[#ff4d00] transition-colors group"
            >
              <div className="flex items-center justify-between font-mono text-[11px] tracking-[0.2em] uppercase text-[#71717a] group-hover:text-[#ff4d00]">
                <span className="flex items-center gap-2">
                  <GithubIcon className="w-3.5 h-3.5" /> GITHUB REPOSITORY
                </span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </div>
              <div className="text-base font-bold text-[#0a0a0a] mt-2 tracking-tight truncate">
                github.com/manan316
              </div>
            </a>

            {/* Telemetry info */}
            <div className="pt-4 font-mono text-[11px] tracking-[0.2em] uppercase text-[#71717a] space-y-2">
              <div className="flex justify-between">
                <span>LOCATION</span>
                <span className="text-[#0a0a0a]">JAMMU & KASHMIR, INDIA</span>
              </div>
              <div className="flex justify-between">
                <span>STATUS</span>
                <span className="text-[#ff4d00]">READY // DISPATCH ACTIVE</span>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column (7 cols): Direct Transmission Form */}
        <div className="lg:col-span-7">
          <div className="font-mono text-[11px] tracking-[0.2em] uppercase text-[#ff4d00] pb-3 border-b border-[#0a0a0a]/15">
            [DISPATCH TRANSMISSION]
          </div>

          <form onSubmit={handleSubmit} className="pt-6 space-y-8">
            {/* Topic Selector */}
            <div>
              <label className="block font-mono text-[11px] tracking-[0.2em] uppercase text-[#71717a] mb-3">
                SELECT TOPIC
              </label>
              <div className="grid grid-cols-2 gap-2 font-mono text-[11px] tracking-[0.15em] uppercase">
                {topics.map((t) => (
                  <button
                    key={t}
                    type="button"
                    onClick={() => setFormData({ ...formData, topic: t })}
                    className={`p-3 text-left border transition-colors ${
                      formData.topic === t
                        ? 'bg-[#0a0a0a] text-white border-[#0a0a0a]'
                        : 'bg-transparent text-[#71717a] border-[#0a0a0a]/15 hover:text-[#0a0a0a] hover:border-[#0a0a0a]'
                    }`}
                  >
                    {t}
                  </button>
                ))}
              </div>
            </div>

            {/* Name & Email */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label className="block font-mono text-[11px] tracking-[0.2em] uppercase text-[#71717a] mb-1">
                  YOUR NAME
                </label>
                <input
                  type="text"
                  required
                  placeholder="DR. ALEX MERCER"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="type-input w-full"
                />
              </div>
              <div>
                <label className="block font-mono text-[11px] tracking-[0.2em] uppercase text-[#71717a] mb-1">
                  EMAIL ADDRESS
                </label>
                <input
                  type="email"
                  required
                  placeholder="ALEX@ORGANIZATION.COM"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="type-input w-full"
                />
              </div>
            </div>

            {/* Message */}
            <div>
              <label className="block font-mono text-[11px] tracking-[0.2em] uppercase text-[#71717a] mb-1">
                TRANSMISSION MESSAGE
              </label>
              <textarea
                required
                rows={4}
                placeholder="PROVIDE DETAILS REGARDING THE PROJECT, RESEARCH, OR OPPORTUNITY..."
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="type-input w-full resize-none font-sans text-base"
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={status === 'submitting'}
              className="btn-orange w-full py-4 text-xs tracking-[0.2em]"
            >
              {status === 'submitting' ? (
                <span>PREPARING RELAY...</span>
              ) : status === 'success' ? (
                <span className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4" /> DISPATCHED TO CLIENT
                </span>
              ) : (
                <>
                  <Send className="w-4 h-4" />
                  <span>TRANSMIT DISPATCH VIA EMAIL</span>
                </>
              )}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};
