import { useState } from 'react';
import bannerImg from '../assets/dejavu_banner_social.jpg';

export default function ContactSection() {
  const [form, setForm] = useState({ name: '', email: '', role: 'artist', message: '' });
  const [sent, setSent] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
    setForm({ name: '', email: '', role: 'artist', message: '' });
    setTimeout(() => setSent(false), 5000);
  };

  const inputClass =
    'w-full bg-transparent border-b border-white/10 focus:border-cyan-400 outline-none py-3 text-white placeholder-gray-700 font-mono-custom text-xs tracking-wider transition-colors duration-300';

  return (
    <section id="contact" className="relative py-32 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img src={bannerImg} alt="" className="w-full h-full object-cover opacity-[0.04]" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#050508] via-[#050508]/80 to-[#050508]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
          <div>
            <p className="reveal font-mono-custom text-[10px] tracking-[0.4em] text-cyan-400 uppercase mb-4">
              Get in Touch
            </p>
            <h2
              className="reveal font-display font-black leading-tight mb-8"
              style={{ fontSize: 'clamp(2.5rem, 5vw, 5rem)' }}
            >
              Ready to Create<br />
              <span className="gradient-text">History?</span>
            </h2>
            <p className="reveal text-gray-500 leading-relaxed mb-12">
              Whether you are an artist looking to sign, a collaborator with an idea, or a music lover who wants to stay in the loop — we want to hear from you.
            </p>

            <div className="reveal space-y-6">
              {[
                { label: 'BOOKINGS', value: 'bookings@dejavu-label.com' },
                { label: 'PRESS', value: 'press@dejavu-label.com' },
                { label: 'A&R', value: 'artists@dejavu-label.com' },
              ].map(({ label, value }) => (
                <div key={label} className="flex items-center gap-6">
                  <span className="font-mono-custom text-[9px] tracking-[0.35em] text-gray-700 w-20 flex-shrink-0">{label}</span>
                  <span className="w-8 h-px bg-white/10" />
                  <span className="font-mono-custom text-xs text-gray-400 hover:text-cyan-400 transition-colors duration-300 cursor-pointer">
                    {value}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="reveal-right">
            <div className="glass border border-white/5 p-8 lg:p-10">
              {sent ? (
                <div className="py-16 text-center">
                  <div className="w-12 h-12 border border-cyan-400/40 flex items-center justify-center mx-auto mb-4">
                    <svg width="20" height="16" viewBox="0 0 20 16" fill="none">
                      <path d="M1 8L7 14L19 2" stroke="#00e5ff" strokeWidth="1.5" />
                    </svg>
                  </div>
                  <p className="font-display font-bold text-xl mb-2">Message Sent</p>
                  <p className="font-mono-custom text-xs tracking-wider text-gray-600">We'll be in touch soon.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-8">
                  <div>
                    <label className="font-mono-custom text-[9px] tracking-[0.35em] text-gray-600 block mb-1">NAME</label>
                    <input
                      type="text"
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      required
                      placeholder="Your name"
                      className={inputClass}
                    />
                  </div>
                  <div>
                    <label className="font-mono-custom text-[9px] tracking-[0.35em] text-gray-600 block mb-1">EMAIL</label>
                    <input
                      type="email"
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      required
                      placeholder="your@email.com"
                      className={inputClass}
                    />
                  </div>
                  <div>
                    <label className="font-mono-custom text-[9px] tracking-[0.35em] text-gray-600 block mb-1">I AM A</label>
                    <select
                      name="role"
                      value={form.role}
                      onChange={handleChange}
                      className={`${inputClass} appearance-none bg-transparent`}
                      style={{ colorScheme: 'dark' }}
                    >
                      <option value="artist" style={{ background: '#0a0a0f' }}>Artist / Musician</option>
                      <option value="producer" style={{ background: '#0a0a0f' }}>Producer / Composer</option>
                      <option value="journalist" style={{ background: '#0a0a0f' }}>Journalist / Press</option>
                      <option value="fan" style={{ background: '#0a0a0f' }}>Fan / Listener</option>
                      <option value="other" style={{ background: '#0a0a0f' }}>Other</option>
                    </select>
                  </div>
                  <div>
                    <label className="font-mono-custom text-[9px] tracking-[0.35em] text-gray-600 block mb-1">MESSAGE</label>
                    <textarea
                      name="message"
                      value={form.message}
                      onChange={handleChange}
                      required
                      rows={4}
                      placeholder="Tell us your story..."
                      className={`${inputClass} resize-none`}
                    />
                  </div>
                  <button
                    type="submit"
                    data-cursor
                    className="w-full py-4 font-mono-custom text-xs tracking-[0.3em] bg-cyan-400 text-black hover:bg-transparent hover:text-cyan-400 border border-cyan-400 transition-all duration-400"
                  >
                    SEND MESSAGE
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
