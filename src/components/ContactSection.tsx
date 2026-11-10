import React, { useState } from 'react';
import { Mail, MapPin, Send, CheckCircle, Radio, Copy, Check, Sparkles } from 'lucide-react';
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
        <div className="flex items-center gap-2 mb-3">
          <span className="bento-badge text-cyan-800 bg-cyan-50 border-cyan-300 font-semibold">
            [07 // INITIATE TRANSMISSION]
          </span>
          <span className="text-xs text-slate-500 font-mono">
            DIRECT COMMUNICATION RELAY
          </span>
        </div>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900 mb-4">
          Get in Touch
        </h2>
        <p className="text-slate-600 text-sm sm:text-base max-w-3xl font-normal leading-relaxed">
          Whether you want to discuss research collaborations, high-impact engineering roles, or explore technical architectures, dispatch a direct message below.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Column (5 cols): Coordinates */}
        <div className="lg:col-span-5 space-y-4">
          <div className="bento-card p-6 sm:p-8 space-y-4 bento-glow-cyan relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-48 h-48 bg-cyan-400/10 rounded-full blur-2xl pointer-events-none" />

            <div className="relative z-10">
              <h3 className="text-xs font-mono uppercase tracking-wider text-cyan-800 font-bold pb-2 border-b border-slate-200 flex items-center justify-between">
                <span>Direct Contact Coordinates</span>
                <Radio className="w-3.5 h-3.5 text-cyan-600 animate-pulse" />
              </h3>

              {/* Email Card */}
              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 space-y-2 mt-4 hover:border-cyan-500/40 transition-all shadow-xs">
                <div className="flex items-center justify-between">
                  <span className="text-xs text-slate-700 font-semibold flex items-center gap-2">
                    <div className="p-1.5 rounded-lg bg-cyan-100 text-cyan-700">
                      <Mail className="w-3.5 h-3.5" />
                    </div>
                    Electronic Mail
                  </span>
                  <button
                    onClick={handleCopyEmail}
                    className="px-2.5 py-1 rounded-md text-[10px] font-mono text-slate-700 hover:text-slate-950 bg-white hover:bg-slate-100 border border-slate-200 flex items-center gap-1 transition-all shadow-xs"
                  >
                    {copied ? <Check className="w-3 h-3 text-emerald-600" /> : <Copy className="w-3 h-3 text-cyan-600" />}
                    {copied ? 'Copied' : 'Copy'}
                  </button>
                </div>
                <div className="text-sm font-bold text-slate-900 font-mono select-all">
                  manan31206@gmail.com
                </div>
              </div>

              {/* LinkedIn Card */}
              <a
                href="https://www.linkedin.com/in/manan-sharma-3980b1324/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 rounded-2xl bg-slate-50 border border-slate-200 block hover:border-indigo-400 hover:bg-indigo-50/40 transition-all group/link mt-3 shadow-xs"
              >
                <div className="flex items-center justify-between">
                  <span className="text-xs text-slate-700 font-semibold flex items-center gap-2">
                    <div className="p-1.5 rounded-lg bg-indigo-100 text-indigo-700">
                      <LinkedinIcon className="w-3.5 h-3.5" />
                    </div>
                    LinkedIn Network
                  </span>
                  <span className="text-xs text-slate-400 group-hover/link:text-indigo-600 font-bold">↗</span>
                </div>
                <div className="text-xs font-semibold text-slate-700 mt-2 font-mono truncate">
                  linkedin.com/in/manan-sharma-3980b1324
                </div>
              </a>

              {/* GitHub Card */}
              <a
                href="https://github.com/manan316"
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 rounded-2xl bg-slate-50 border border-slate-200 block hover:border-slate-400 hover:bg-slate-100 transition-all group/link mt-3 shadow-xs"
              >
                <div className="flex items-center justify-between">
                  <span className="text-xs text-slate-700 font-semibold flex items-center gap-2">
                    <div className="p-1.5 rounded-lg bg-slate-200 text-slate-800">
                      <GithubIcon className="w-3.5 h-3.5" />
                    </div>
                    GitHub Repositories
                  </span>
                  <span className="text-xs text-slate-400 group-hover/link:text-slate-900 font-bold">↗</span>
                </div>
                <div className="text-xs font-semibold text-slate-700 mt-2 font-mono truncate">
                  github.com/manan316
                </div>
              </a>

              {/* Location & Status Info */}
              <div className="pt-3 border-t border-slate-200 text-xs font-mono text-slate-600 space-y-1">
                <div className="flex justify-between items-center">
                  <span className="text-slate-500">PHYSICAL LOCATION</span>
                  <span className="text-slate-800 font-bold">Jammu & Kashmir, India</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-slate-500">COMMUNICATION LINK</span>
                  <span className="text-emerald-700 font-bold">READY // ACTIVE</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column (7 cols): Direct Message Dispatch Console */}
        <div className="lg:col-span-7">
          <div className="bento-card p-6 sm:p-8 bento-glow-violet relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-violet-400/10 rounded-full blur-3xl pointer-events-none" />

            <div className="relative z-10">
              <div className="flex items-center justify-between pb-4 mb-6 border-b border-slate-200">
                <div>
                  <h3 className="text-base sm:text-lg font-bold text-slate-900">
                    Dispatch Direct Transmission
                  </h3>
                  <p className="text-xs text-slate-500 mt-0.5">
                    Opens your email client with structured headers and immediate delivery.
                  </p>
                </div>
                <span className="text-[10px] font-mono text-violet-800 bg-violet-50 px-2.5 py-1 rounded-full border border-violet-200 font-bold">
                  DIRECT RELAY
                </span>
              </div>

              {/* Form */}
              <form onSubmit={handleSubmit} className="space-y-5">
                {/* Topic Selector */}
                <div>
                  <label className="block text-xs font-mono uppercase tracking-wider text-slate-700 font-bold mb-2">
                    Topic of Discussion
                  </label>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                    {topics.map((t) => (
                      <button
                        key={t}
                        type="button"
                        onClick={() => setFormData({ ...formData, topic: t })}
                        className={`p-2 rounded-xl text-xs font-semibold text-center transition-all ${
                          formData.topic === t
                            ? 'bg-slate-900 text-white font-bold shadow-xs'
                            : 'bg-slate-100 text-slate-700 hover:bg-slate-200/80 border border-slate-200'
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
                    <label className="block text-xs font-mono uppercase tracking-wider text-slate-700 font-bold mb-1.5">
                      Your Name
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Dr. Alex Mercer"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="bento-input w-full text-xs sm:text-sm"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-mono uppercase tracking-wider text-slate-700 font-bold mb-1.5">
                      Your Email Address
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="alex@domain.org"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="bento-input w-full text-xs sm:text-sm"
                    />
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label className="block text-xs font-mono uppercase tracking-wider text-slate-700 font-bold mb-1.5">
                    Transmission Message
                  </label>
                  <textarea
                    required
                    rows={4}
                    placeholder="Provide details about the project, opportunity, or research collaboration..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="bento-input w-full text-xs sm:text-sm resize-none"
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={status === 'submitting'}
                  className="bento-btn-primary w-full py-3 text-sm flex items-center justify-center gap-2 group font-bold shadow-md"
                >
                  {status === 'submitting' ? (
                    <span>Opening Transmission Client...</span>
                  ) : status === 'success' ? (
                    <span className="flex items-center gap-1.5 text-emerald-300">
                      <CheckCircle className="w-4 h-4" /> Message Ready & Dispatched!
                    </span>
                  ) : (
                    <>
                      <Send className="w-4 h-4 text-cyan-300 group-hover:translate-x-1 group-hover:-translate-y-0.5 transition-transform" />
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
