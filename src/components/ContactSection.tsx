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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          access_key: 'YOUR_ACCESS_KEY_HERE',
          name: formData.name,
          email: formData.email,
          subject: `[Portfolio Transmission: ${formData.topic}] from ${formData.name}`,
          message: formData.message
        })
      });

      if (response.ok) {
        setStatus('success');
        setFormData({ name: '', email: '', topic: 'Research Collaboration', message: '' });
      } else {
        window.location.href = `mailto:manan31206@gmail.com?subject=${encodeURIComponent(
          `[Portfolio Transmission: ${formData.topic}] from ${formData.name}`
        )}&body=${encodeURIComponent(formData.message + '\n\nFrom: ' + formData.name + ' (' + formData.email + ')')}`;
        setStatus('success');
      }
    } catch {
      window.location.href = `mailto:manan31206@gmail.com?subject=${encodeURIComponent(
        `[Portfolio Transmission: ${formData.topic}] from ${formData.name}`
      )}&body=${encodeURIComponent(formData.message + '\n\nFrom: ' + formData.name + ' (' + formData.email + ')')}`;
      setStatus('success');
    }
  };

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto scroll-mt-24">
      {/* Section Header */}
      <div className="mb-12">
        <div className="flex items-center gap-2 mb-3">
          <span className="bento-badge text-cyan-400 bg-cyan-500/10 border-cyan-500/20">
            [07 // INITIATE TRANSMISSION]
          </span>
          <span className="text-xs text-zinc-400 font-mono">
            DIRECT COMMUNICATION RELAY
          </span>
        </div>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white mb-4">
          Get in Touch
        </h2>
        <p className="text-zinc-400 text-sm sm:text-base max-w-2xl font-normal leading-relaxed">
          Whether you want to discuss research collaborations, high-impact engineering roles, or explore technical architectures, dispatch a direct transmission below.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        {/* Left Column (5 cols): Coordinates */}
        <div className="lg:col-span-5 space-y-4">
          <div className="bento-card p-6 space-y-4 bento-glow-cyan relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-48 h-48 bg-cyan-500/10 rounded-full blur-2xl pointer-events-none" />

            <div className="relative z-10">
              <h3 className="text-xs font-mono uppercase tracking-wider text-cyan-400 pb-2 border-b border-white/10 flex items-center justify-between">
                <span>Direct Contact Coordinates</span>
                <Radio className="w-3.5 h-3.5 text-cyan-400 animate-pulse" />
              </h3>

              {/* Email Card */}
              <div className="p-4 rounded-2xl bg-zinc-950/60 border border-white/10 space-y-2 mt-4 hover:border-cyan-400/30 transition-all">
                <div className="flex items-center justify-between">
                  <span className="text-xs text-zinc-300 font-medium flex items-center gap-2">
                    <div className="p-1.5 rounded-lg bg-cyan-500/10 text-cyan-400">
                      <Mail className="w-3.5 h-3.5" />
                    </div>
                    Electronic Mail
                  </span>
                  <button
                    onClick={handleCopyEmail}
                    className="px-2.5 py-1 rounded-md text-[10px] font-mono text-zinc-300 hover:text-white bg-white/5 hover:bg-white/10 border border-white/10 flex items-center gap-1 transition-all"
                  >
                    {copied ? <Check className="w-3 h-3 text-emerald-400" /> : <Copy className="w-3 h-3 text-cyan-400" />}
                    {copied ? 'Copied' : 'Copy'}
                  </button>
                </div>
                <div className="text-sm font-bold text-white font-mono select-all">
                  manan31206@gmail.com
                </div>
              </div>

              {/* LinkedIn Card */}
              <a
                href="https://www.linkedin.com/in/manan-sharma-3980b1324/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 rounded-2xl bg-zinc-950/60 border border-white/10 block hover:border-blue-500/40 hover:bg-blue-500/5 transition-all group/link mt-3"
              >
                <div className="flex items-center justify-between">
                  <span className="text-xs text-zinc-300 font-medium flex items-center gap-2">
                    <div className="p-1.5 rounded-lg bg-blue-500/10 text-blue-400">
                      <LinkedinIcon className="w-3.5 h-3.5" />
                    </div>
                    LinkedIn Network
                  </span>
                  <span className="text-xs text-zinc-500 group-hover/link:text-blue-400">↗</span>
                </div>
                <div className="text-xs font-semibold text-zinc-300 mt-2 font-mono truncate">
                  linkedin.com/in/manan-sharma-3980b1324
                </div>
              </a>

              {/* GitHub Card */}
              <a
                href="https://github.com/manan316"
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 rounded-2xl bg-zinc-950/60 border border-white/10 block hover:border-emerald-500/40 hover:bg-emerald-500/5 transition-all group/link mt-3"
              >
                <div className="flex items-center justify-between">
                  <span className="text-xs text-zinc-300 font-medium flex items-center gap-2">
                    <div className="p-1.5 rounded-lg bg-emerald-500/10 text-emerald-400">
                      <GithubIcon className="w-3.5 h-3.5" />
                    </div>
                    Open-Source Code
                  </span>
                  <span className="text-xs text-zinc-500 group-hover/link:text-emerald-400">↗</span>
                </div>
                <div className="text-xs font-semibold text-zinc-300 mt-2 font-mono">
                  github.com/manan316
                </div>
              </a>

              {/* Location */}
              <div className="p-4 rounded-2xl bg-zinc-950/60 border border-white/10 mt-3">
                <span className="text-xs text-zinc-300 font-medium flex items-center gap-2 mb-1">
                  <div className="p-1.5 rounded-lg bg-rose-500/10 text-rose-400">
                    <MapPin className="w-3.5 h-3.5" />
                  </div>
                  Operational Base
                </span>
                <div className="text-xs font-semibold text-zinc-300 font-mono">
                  Jammu & Kashmir, India (UTC +05:30)
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column (7 cols): Form */}
        <div className="lg:col-span-7">
          <div className="bento-card p-6 sm:p-8 bento-glow-violet relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-violet-500/10 rounded-full blur-3xl pointer-events-none" />

            <div className="relative z-10">
              <div className="flex items-center justify-between pb-3 mb-6 border-b border-white/10">
                <span className="text-xs font-mono uppercase tracking-wider text-violet-300 flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5" /> Transmission Console
                </span>
                <span className="text-[10px] font-mono text-emerald-400 bg-emerald-500/10 px-2.5 py-0.5 rounded-full border border-emerald-500/20 font-semibold">
                  ENCRYPTED RELAY
                </span>
              </div>

              {status === 'success' ? (
                <div className="p-6 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 space-y-3">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-emerald-400" />
                    <span className="text-sm font-semibold text-white">Transmission Received</span>
                  </div>
                  <p className="text-xs text-zinc-300 leading-relaxed">
                    Thank you! Your dispatch has been transmitted to Manan Sharma. You will receive an engineering response shortly.
                  </p>
                  <button
                    onClick={() => setStatus('idle')}
                    className="bento-btn-secondary text-xs mt-2"
                  >
                    Send Another Transmission
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  {/* Topic Pills */}
                  <div>
                    <label className="block text-xs font-medium text-zinc-300 mb-2">
                      Inquiry Classification:
                    </label>
                    <div className="flex flex-wrap gap-1.5">
                      {topics.map((t) => (
                        <button
                          type="button"
                          key={t}
                          onClick={() => setFormData({ ...formData, topic: t })}
                          className={`px-3 py-1 rounded-full text-xs font-medium transition-all ${
                            formData.topic === t
                              ? 'bg-gradient-to-r from-cyan-400 to-indigo-500 text-zinc-950 font-bold shadow-sm shadow-cyan-500/20'
                              : 'bg-white/5 border border-white/5 text-zinc-400 hover:text-white'
                          }`}
                        >
                          {t}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-medium text-zinc-300 mb-1.5">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Dr. Alan Turing"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="bento-input w-full text-xs"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-medium text-zinc-300 mb-1.5">
                        Your Email *
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="e.g. alan@turing.org"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="bento-input w-full text-xs"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-zinc-300 mb-1.5">
                      Transmission Brief / Message *
                    </label>
                    <textarea
                      required
                      rows={4}
                      placeholder="Describe your research inquiry, proposed role, or technical collaboration..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="bento-input w-full text-xs resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={status === 'submitting'}
                    className="bento-btn-primary w-full py-3 text-xs"
                  >
                    <Send className="w-3.5 h-3.5 text-zinc-950" />
                    <span>{status === 'submitting' ? 'Transmitting...' : 'Dispatch Transmission'}</span>
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
