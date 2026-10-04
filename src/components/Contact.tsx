import React, { useState } from 'react';
import { Mail, Send, CheckCircle2, AlertCircle } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { GithubIcon, LinkedinIcon } from './SocialIcons';

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const validateForm = () => {
    const newErrors: { [key: string]: string } = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Valid email address is required';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message content is required';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message should be at least 10 characters';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) return;

    setIsSubmitting(true);

    // Simulated API payload dispatch for Formspree / EmailJS backend integration
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({ name: '', email: '', subject: '', message: '' });
      
      // Auto-reset success message after 6 seconds
      setTimeout(() => setIsSubmitted(false), 6000);
    }, 1200);
  };

  return (
    <section id="contact" className="py-24 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-card border border-cyan-500/30 text-cyan-400 text-xs font-semibold uppercase tracking-widest mb-4">
            <Mail className="w-3.5 h-3.5" />
            <span>Get In Touch</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white dark:text-white light:text-slate-900 tracking-tight">
            Let's Build Something Together.
          </h2>
          <p className="text-gray-400 text-sm max-w-xl mt-2">
            I'm always interested in learning, building, collaborating and exploring new opportunities.
          </p>
          <div className="w-16 h-1 bg-gradient-to-r from-cyan-500 to-indigo-600 rounded-full mt-4" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Direct Contact Cards */}
          <div className="lg:col-span-5 space-y-6">
            <div className="glass-panel p-8 rounded-3xl border border-white/10 shadow-2xl space-y-6">
              
              <div>
                <h3 className="text-xl font-extrabold text-white">Contact Information</h3>
                <p className="text-xs text-gray-400 mt-1">
                  Feel free to reach out directly via email or connect through professional networks.
                </p>
              </div>

              {/* Email Card */}
              <a
                href={`mailto:${PERSONAL_INFO.email}`}
                className="glass-card p-4 rounded-2xl border border-white/10 hover:border-cyan-500/40 transition-all flex items-center gap-4 group"
              >
                <div className="p-3 rounded-xl bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 group-hover:scale-110 transition-transform">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs uppercase font-mono text-gray-400 font-semibold block">Email Address</span>
                  <span className="text-sm font-bold text-white group-hover:text-cyan-400 transition-colors">
                    {PERSONAL_INFO.email}
                  </span>
                </div>
              </a>

              {/* GitHub Card */}
              <a
                href={PERSONAL_INFO.github}
                target="_blank"
                rel="noopener noreferrer"
                className="glass-card p-4 rounded-2xl border border-white/10 hover:border-cyan-500/40 transition-all flex items-center gap-4 group"
              >
                <div className="p-3 rounded-xl bg-purple-500/10 border border-purple-500/20 text-purple-400 group-hover:scale-110 transition-transform">
                  <GithubIcon className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs uppercase font-mono text-gray-400 font-semibold block">GitHub Profile</span>
                  <span className="text-sm font-bold text-white group-hover:text-cyan-400 transition-colors">
                    github.com (Bhavya Singampalli)
                  </span>
                </div>
              </a>

              {/* LinkedIn Card */}
              <a
                href={PERSONAL_INFO.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="glass-card p-4 rounded-2xl border border-white/10 hover:border-cyan-500/40 transition-all flex items-center gap-4 group"
              >
                <div className="p-3 rounded-xl bg-blue-500/10 border border-blue-500/20 text-blue-400 group-hover:scale-110 transition-transform">
                  <LinkedinIcon className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs uppercase font-mono text-gray-400 font-semibold block">LinkedIn Network</span>
                  <span className="text-sm font-bold text-white group-hover:text-cyan-400 transition-colors">
                    linkedin.com (Bhavya Singampalli)
                  </span>
                </div>
              </a>

            </div>
          </div>

          {/* Right Interactive Form */}
          <div className="lg:col-span-7">
            <div className="glass-panel p-8 rounded-3xl border border-white/10 shadow-2xl space-y-6">
              
              <div>
                <h3 className="text-xl font-extrabold text-white">Send a Direct Message</h3>
                <p className="text-xs text-gray-400 mt-1">
                  Fill in your details below and I will get back to you promptly.
                </p>
              </div>

              {isSubmitted && (
                <div className="p-4 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-semibold flex items-center gap-3 animate-in fade-in duration-200">
                  <CheckCircle2 className="w-5 h-5 shrink-0" />
                  <span>Thank you! Your message has been sent successfully. I will get back to you soon.</span>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-4">
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Name Input */}
                  <div className="space-y-1">
                    <label htmlFor="name" className="text-xs font-mono font-semibold text-gray-300 block">
                      Your Name *
                    </label>
                    <input
                      id="name"
                      type="text"
                      placeholder="John Doe"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className={`w-full px-4 py-3 rounded-xl glass-card border text-sm text-white placeholder-gray-500 focus:outline-none transition-colors ${
                        errors.name ? 'border-rose-500 focus:border-rose-500' : 'border-white/10 focus:border-cyan-500'
                      }`}
                    />
                    {errors.name && (
                      <span className="text-[11px] text-rose-400 flex items-center gap-1 mt-0.5">
                        <AlertCircle className="w-3 h-3" />
                        {errors.name}
                      </span>
                    )}
                  </div>

                  {/* Email Input */}
                  <div className="space-y-1">
                    <label htmlFor="email" className="text-xs font-mono font-semibold text-gray-300 block">
                      Your Email *
                    </label>
                    <input
                      id="email"
                      type="email"
                      placeholder="john@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className={`w-full px-4 py-3 rounded-xl glass-card border text-sm text-white placeholder-gray-500 focus:outline-none transition-colors ${
                        errors.email ? 'border-rose-500 focus:border-rose-500' : 'border-white/10 focus:border-cyan-500'
                      }`}
                    />
                    {errors.email && (
                      <span className="text-[11px] text-rose-400 flex items-center gap-1 mt-0.5">
                        <AlertCircle className="w-3 h-3" />
                        {errors.email}
                      </span>
                    )}
                  </div>
                </div>

                {/* Subject Input */}
                <div className="space-y-1">
                  <label htmlFor="subject" className="text-xs font-mono font-semibold text-gray-300 block">
                    Subject / Topic
                  </label>
                  <input
                    id="subject"
                    type="text"
                    placeholder="Project Inquiry / Internship Opportunity"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl glass-card border border-white/10 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-cyan-500 transition-colors"
                  />
                </div>

                {/* Message Input */}
                <div className="space-y-1">
                  <label htmlFor="message" className="text-xs font-mono font-semibold text-gray-300 block">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    placeholder="Hello Bhavya, I would like to discuss..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className={`w-full px-4 py-3 rounded-xl glass-card border text-sm text-white placeholder-gray-500 focus:outline-none transition-colors ${
                      errors.message ? 'border-rose-500 focus:border-rose-500' : 'border-white/10 focus:border-cyan-500'
                    }`}
                  />
                  {errors.message && (
                    <span className="text-[11px] text-rose-400 flex items-center gap-1 mt-0.5">
                      <AlertCircle className="w-3 h-3" />
                      {errors.message}
                    </span>
                  )}
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-gradient-to-r from-cyan-500 via-indigo-600 to-purple-600 text-white font-semibold text-sm shadow-xl shadow-cyan-500/20 hover:shadow-cyan-500/40 hover:scale-[1.01] active:scale-[0.99] transition-all disabled:opacity-50"
                >
                  {isSubmitting ? (
                    <span>Sending Message...</span>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      <span>Send Message</span>
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
