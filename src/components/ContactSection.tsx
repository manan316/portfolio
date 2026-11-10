import React, { useState } from 'react';
import { personalInfo } from '../data/portfolioData';
import { SectorRibbon } from './SectorRibbon';
import { GithubIcon, LinkedinIcon } from './Icons';
import { 
  Mail, 
  Send, 
  Copy, 
  Check, 
  MapPin, 
  Sparkles,
  AlertCircle,
  CheckCircle2
} from 'lucide-react';
import { 
  MemphisCircle, 
  MemphisTriangle, 
  MemphisWave, 
  MemphisZigzag, 
  MemphisCardOrnaments,
  MemphisZigzagDivider 
} from './MemphisOrnament';

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

    if (!accessKey) {
      const subject = encodeURIComponent(
        formData.subject.trim()
          ? `[Portfolio Contact] ${formData.subject.trim()} — from ${formData.name.trim()}`
          : `[Portfolio Contact] Message from ${formData.name.trim()}`
      );
      const body = encodeURIComponent(
        `Sender Name: ${formData.name.trim()}\n` +
        `Sender Email: ${formData.email.trim()}\n\n` +
        `Message:\n${formData.message.trim()}\n\n` +
        `---\nTransmitted via Manan Sharma's Portfolio (1981 Milan Memphis Edition)`
      );
      window.location.href = `mailto:${personalInfo.email}?subject=${subject}&body=${body}`;
      setStatus('success');
      return;
    }

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          access_key: accessKey,
          name: formData.name.trim(),
          email: formData.email.trim(),
          subject: formData.subject.trim() || 'Portfolio Contact Transmission',
          message: formData.message.trim(),
          from_name: 'Manan Sharma Portfolio Contact Form',
        })
      });

      const result = await response.json();
      if (result.success) {
        setStatus('success');
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        setStatus('error');
        setErrorMsg(result.message || 'Transmission failed. Direct email fallback recommended.');
      }
    } catch (err) {
      setStatus('error');
      setErrorMsg('Network error. Click Direct Email to transmit via your mail client.');
    }
  };

  return (
    <section id="contact" className="relative bg-[#fdf6e3] text-black overflow-hidden pt-4 pb-24">
      {/* Sector Ribbon */}
      <SectorRibbon sectorNumber="07" sectorName="DIRECT TRANSMISSION // ESTABLISH UPLINK" color="coral" />

      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 pt-16">
        
        {/* Section Heading */}
        <div className="mb-12">
          <div className="inline-block bg-[#1dd1a1] text-black px-3.5 py-1 text-xs font-black uppercase tracking-wider border-3 border-black shadow-[3px_3px_0_#000000] tilt-neg-1 mb-2">
            // GET IN TOUCH
          </div>
          <h2 className="memphis-heading text-black">
            INITIATE TRANSMISSION
          </h2>
          <p className="font-sans font-bold text-base text-black/80 mt-1 max-w-xl">
            Whether for research collaborations, systems engineering roles, or technical dialogue—let's connect.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          
          {/* Left Column: Direct Info Tiles */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Quick Contact Card */}
            <div className="memphis-card group tilt-neg-1">
              <MemphisCardOrnaments variant={3} />

              <div className="pb-4 border-b-4 border-black mb-5">
                <span className="font-mono text-xs font-bold text-[#ff6b6b] uppercase block">
                  FAST ROUTING
                </span>
                <h3 className="font-sans font-black text-2xl text-black">
                  Direct Coordinates
                </h3>
              </div>

              {/* Email Tile */}
              <div className="p-4 bg-[#fdf6e3] border-3 border-black shadow-[3px_3px_0_#000000] mb-4 space-y-2">
                <div className="flex items-center justify-between">
                  <span className="font-sans font-black text-xs uppercase text-[#5f27cd]">
                    PRIMARY INBOX
                  </span>
                  <button
                    onClick={handleCopyEmail}
                    className="p-1.5 bg-white border-2 border-black hover:bg-[#feca57] transition-colors"
                    title="Copy Email Address"
                  >
                    {copied ? <Check className="w-4 h-4 text-[#1dd1a1]" /> : <Copy className="w-4 h-4 text-black" />}
                  </button>
                </div>
                <a
                  href={`mailto:${personalInfo.email}`}
                  className="font-mono font-bold text-sm sm:text-base text-black hover:text-[#ff6b6b] break-all block"
                >
                  {personalInfo.email}
                </a>
                {copied && (
                  <span className="text-[10px] font-mono font-bold bg-[#1dd1a1] text-black px-2 py-0.5 border border-black inline-block">
                    COPIED TO CLIPBOARD!
                  </span>
                )}
              </div>

              {/* Social Tiles */}
              <div className="grid grid-cols-2 gap-3 mb-4">
                <a
                  href={personalInfo.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="p-3 bg-white border-3 border-black shadow-[3px_3px_0_#000000] hover:bg-[#48dbfb] transition-colors flex items-center gap-2"
                >
                  <LinkedinIcon className="w-5 h-5 text-black shrink-0" />
                  <span className="font-sans font-black text-xs uppercase text-black">LINKEDIN</span>
                </a>

                <a
                  href={personalInfo.github}
                  target="_blank"
                  rel="noreferrer"
                  className="p-3 bg-white border-3 border-black shadow-[3px_3px_0_#000000] hover:bg-[#ff6b6b] hover:text-white transition-colors flex items-center gap-2"
                >
                  <GithubIcon className="w-5 h-5 text-black shrink-0" />
                  <span className="font-sans font-black text-xs uppercase">GITHUB</span>
                </a>
              </div>

              {/* Location Badge */}
              <div className="p-3 bg-[#feca57] border-3 border-black shadow-[3px_3px_0_#000000] flex items-center gap-2">
                <MapPin className="w-4 h-4 text-black shrink-0" />
                <span className="font-sans font-black text-xs uppercase text-black">
                  {personalInfo.location}
                </span>
              </div>

            </div>

          </div>

          {/* Right Column: Memphis Contact Form */}
          <div className="lg:col-span-7">
            <div className="memphis-card group tilt-pos-1">
              <MemphisCardOrnaments variant={4} />

              <div className="pb-4 border-b-4 border-black mb-6 flex items-center justify-between">
                <div>
                  <span className="font-mono text-xs font-bold text-[#ff6b6b] uppercase block">
                    TRANSMISSION FORM
                  </span>
                  <h3 className="font-sans font-black text-2xl text-black">
                    Send a Direct Message
                  </h3>
                </div>
                <span className="memphis-badge bg-[#feca57] text-black hidden sm:inline-flex">
                  150MS POP SWAP
                </span>
              </div>

              {status === 'success' && (
                <div className="p-4 bg-[#1dd1a1] border-3 border-black shadow-[3px_3px_0_#000000] mb-6 flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-black shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-sans font-black text-sm uppercase">TRANSMISSION RECEIVED!</h4>
                    <p className="font-sans font-bold text-xs text-black/90 mt-0.5">
                      Your message was successfully routed. I will reply shortly!
                    </p>
                  </div>
                </div>
              )}

              {status === 'error' && (
                <div className="p-4 bg-[#ff6b6b] text-white border-3 border-black shadow-[3px_3px_0_#000000] mb-6 flex items-start gap-3">
                  <AlertCircle className="w-5 h-5 text-white shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-sans font-black text-sm uppercase">TRANSMISSION NOTICE</h4>
                    <p className="font-sans font-bold text-xs text-white/90 mt-0.5">
                      {errorMsg || 'Failed to submit. Please contact directly via email.'}
                    </p>
                  </div>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-4">
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Name */}
                  <div className="space-y-1.5">
                    <label className="font-sans font-black text-xs uppercase tracking-wider text-black block">
                      YOUR NAME *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Alan Turing"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="memphis-input"
                    />
                  </div>

                  {/* Email */}
                  <div className="space-y-1.5">
                    <label className="font-sans font-black text-xs uppercase tracking-wider text-black block">
                      YOUR EMAIL *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="turing@princeton.edu"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="memphis-input"
                    />
                  </div>
                </div>

                {/* Subject */}
                <div className="space-y-1.5">
                  <label className="font-sans font-black text-xs uppercase tracking-wider text-black block">
                    TRANSMISSION SUBJECT
                  </label>
                  <input
                    type="text"
                    placeholder="Collaboration, Research, or Systems Opportunity..."
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className="memphis-input"
                  />
                </div>

                {/* Message */}
                <div className="space-y-1.5">
                  <label className="font-sans font-black text-xs uppercase tracking-wider text-black block">
                    TRANSMISSION PAYLOAD (MESSAGE) *
                  </label>
                  <textarea
                    required
                    rows={5}
                    placeholder="Write your message here..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="memphis-input resize-none"
                  />
                </div>

                {/* Submit Pop Button */}
                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={status === 'loading'}
                    className="memphis-btn w-full py-3.5 text-sm"
                  >
                    <Send className="w-4 h-4" />
                    <span>{status === 'loading' ? 'TRANSMITTING...' : 'SEND TRANSMISSION'}</span>
                  </button>
                </div>

              </form>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
