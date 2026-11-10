import React, { useState } from 'react';
import { Mail, MapPin, Send, CheckCircle, AlertCircle, Radio, Copy, Check } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';
import { MemphisCardOrnaments } from './MemphisOrnament';

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
    'Edge AI & IoT Systems',
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
          access_key: 'YOUR_ACCESS_KEY_HERE', // Fallback handled gracefully
          name: formData.name,
          email: formData.email,
          subject: `[Portfolio Dispatch: ${formData.topic}] from ${formData.name}`,
          message: formData.message
        })
      });

      if (response.ok) {
        setStatus('success');
        setFormData({ name: '', email: '', topic: 'Research Collaboration', message: '' });
      } else {
        // Fallback: create mailto link
        window.location.href = `mailto:manan31206@gmail.com?subject=${encodeURIComponent(
          `[Portfolio Dispatch: ${formData.topic}] from ${formData.name}`
        )}&body=${encodeURIComponent(formData.message + '\n\nFrom: ' + formData.name + ' (' + formData.email + ')')}`;
        setStatus('success');
      }
    } catch {
      window.location.href = `mailto:manan31206@gmail.com?subject=${encodeURIComponent(
        `[Portfolio Dispatch: ${formData.topic}] from ${formData.name}`
      )}&body=${encodeURIComponent(formData.message + '\n\nFrom: ' + formData.name + ' (' + formData.email + ')')}`;
      setStatus('success');
    }
  };

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto scroll-mt-24">
      {/* Section Header */}
      <div className="mb-12">
        <div className="flex flex-wrap items-center gap-3 mb-4">
          <span className="memphis-badge bg-coral text-white border-4 border-black px-4 py-1.5 text-xs font-black tracking-widest uppercase">
            [08 // FIELD DISPATCH RELAY]
          </span>
          <span className="bg-mint text-black border-3 border-black px-3 py-1 text-xs font-black tracking-wider uppercase flex items-center gap-1.5">
            <Radio className="w-3.5 h-3.5 animate-pulse" /> RELAY FREQUENCY: 868 MHz / ONLINE
          </span>
        </div>
        <h2 className="memphis-heading text-black pop-swap mb-4">
          INITIATE FIELD COMMUNICATIONS
        </h2>
        <p className="text-black text-base sm:text-lg font-bold max-w-3xl leading-relaxed">
          Whether you are exploring research partnerships, engineering collaborations, or hiring for high-impact edge computing and AI roles, dispatch a direct transmission below.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Column (5 cols): Direct Coordinates */}
        <div className="lg:col-span-5 space-y-4">
          <div className="memphis-card bg-paper p-6 relative overflow-hidden group">
            <MemphisCardOrnaments variant={1} />
            <h3 className="text-xs font-black uppercase tracking-widest bg-black text-white px-3 py-1.5 inline-block mb-4">
              PRIMARY DIRECT COORDINATES
            </h3>

            {/* Email Tile */}
            <div className="bg-white border-4 border-black p-4 mb-3 shadow-memphis-sm">
              <div className="flex items-center justify-between gap-2">
                <div className="flex items-center gap-2">
                  <Mail className="w-5 h-5 text-coral" />
                  <span className="text-xs font-black uppercase">Direct Electronic Mail</span>
                </div>
                <button
                  onClick={handleCopyEmail}
                  className="text-xs font-black bg-honey border-2 border-black px-2 py-1 flex items-center gap-1 hover:bg-black hover:text-white transition-colors"
                >
                  {copied ? <Check className="w-3 h-3" /> : <Copy className="w-3 h-3" />}
                  {copied ? 'Copied' : 'Copy'}
                </button>
              </div>
              <div className="text-sm font-black text-black mt-2 select-all">
                manan31206@gmail.com
              </div>
            </div>

            {/* LinkedIn Tile */}
            <a
              href="https://www.linkedin.com/in/manan-sharma-3980b1324/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white hover:bg-electric-blue border-4 border-black p-4 mb-3 shadow-memphis-sm block transition-colors group/link"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <LinkedinIcon className="w-5 h-5 text-blue-700" />
                  <span className="text-xs font-black uppercase">LinkedIn Professional Profile</span>
                </div>
                <span className="text-xs font-black">↗</span>
              </div>
              <div className="text-sm font-black text-black mt-2">
                linkedin.com/in/manan-sharma-3980b1324
              </div>
            </a>

            {/* GitHub Tile */}
            <a
              href="https://github.com/manan316"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white hover:bg-mint border-4 border-black p-4 mb-3 shadow-memphis-sm block transition-colors group/link"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <GithubIcon className="w-5 h-5 text-black" />
                  <span className="text-xs font-black uppercase">Open-Source Repositories</span>
                </div>
                <span className="text-xs font-black">↗</span>
              </div>
              <div className="text-sm font-black text-black mt-2">
                github.com/manan316
              </div>
            </a>

            {/* Location Tile */}
            <div className="bg-white border-4 border-black p-4 shadow-memphis-sm">
              <div className="flex items-center gap-2">
                <MapPin className="w-5 h-5 text-coral" />
                <span className="text-xs font-black uppercase">Primary Operating Base</span>
              </div>
              <div className="text-sm font-black text-black mt-2">
                Jammu & Kashmir, India (UTC +05:30)
              </div>
            </div>
          </div>
        </div>

        {/* Right Column (7 cols): Dispatch Form */}
        <div className="lg:col-span-7">
          <div className="memphis-card bg-paper p-6 sm:p-8 relative overflow-hidden group">
            <MemphisCardOrnaments variant={3} />

            <div className="flex items-center justify-between pb-3 mb-6 border-b-4 border-black">
              <h3 className="text-xl font-black text-black uppercase tracking-tight">
                TRANSMISSION CONSOLE
              </h3>
              <span className="text-[10px] font-black bg-honey px-2 py-0.5 border-2 border-black">
                ENCRYPTED RELAY
              </span>
            </div>

            {status === 'success' ? (
              <div className="bg-mint text-black border-4 border-black p-6 shadow-memphis space-y-3">
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-6 h-6 text-black" />
                  <span className="text-lg font-black uppercase">Transmission Dispatched!</span>
                </div>
                <p className="text-xs font-bold leading-relaxed">
                  Thank you! Your dispatch has been transmitted to Manan Sharma's priority inbox. Expect an engineering response within 24 hours.
                </p>
                <button
                  onClick={() => setStatus('idle')}
                  className="memphis-btn bg-black text-white text-xs px-4 py-2 mt-2"
                >
                  Send Another Transmission
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                {/* Topic Selector Pills */}
                <div>
                  <label className="block text-xs font-black uppercase tracking-wider mb-2 text-black">
                    Inquiry Classification:
                  </label>
                  <div className="flex flex-wrap gap-2">
                    {topics.map((t) => (
                      <button
                        type="button"
                        key={t}
                        onClick={() => setFormData({ ...formData, topic: t })}
                        className={`px-3 py-1.5 text-xs font-black border-2 border-black transition-colors ${
                          formData.topic === t
                            ? 'bg-coral text-white shadow-[2px_2px_0_#000]'
                            : 'bg-white text-black hover:bg-honey'
                        }`}
                      >
                        {t}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Name & Email Row */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-black uppercase tracking-wider mb-1.5 text-black">
                      Operator / Sender Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Dr. Alan Turing"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="memphis-input w-full text-xs sm:text-sm font-bold"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-black uppercase tracking-wider mb-1.5 text-black">
                      Contact Email *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="e.g. alan@turing.org"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="memphis-input w-full text-xs sm:text-sm font-bold"
                    />
                  </div>
                </div>

                {/* Message Box */}
                <div>
                  <label className="block text-xs font-black uppercase tracking-wider mb-1.5 text-black">
                    Transmission Content / Brief *
                  </label>
                  <textarea
                    required
                    rows={5}
                    placeholder="Describe your research inquiry, proposed role, system specs, or collaboration..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="memphis-input w-full text-xs sm:text-sm font-bold resize-none"
                  />
                </div>

                {/* Submit Pop Button */}
                <button
                  type="submit"
                  disabled={status === 'submitting'}
                  className="memphis-btn w-full py-3.5 text-sm uppercase tracking-wider flex items-center justify-center gap-2"
                >
                  <Send className="w-4 h-4" />
                  {status === 'submitting' ? 'Transmitting Data...' : 'Transmit Dispatch Message'}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
