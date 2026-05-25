import { useState, useEffect } from 'react';

const NAV_LINKS = ['Artists', 'Releases', 'About', 'Contact'];

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? 'bg-[#050508]/90 backdrop-blur-md border-b border-white/5' : ''
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">
        <a href="#" className="flex items-center gap-3">
          <div className="relative w-7 h-7">
            <div className="absolute inset-0 rounded-full border border-cyan-400/30" />
            <div className="absolute inset-[9px] rounded-full bg-cyan-400" />
          </div>
          <span className="font-display text-lg font-bold tracking-wider">
            DeJa<span className="text-cyan-400">Vu</span>
          </span>
        </a>

        <nav className="hidden md:flex items-center gap-10">
          {NAV_LINKS.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              className="font-mono-custom text-[10px] tracking-[0.3em] text-gray-500 hover:text-cyan-400 transition-colors duration-300 uppercase"
            >
              {link}
            </a>
          ))}
        </nav>

        <button
          className="md:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span className={`block w-6 h-px bg-white transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-2' : ''}`} />
          <span className={`block w-6 h-px bg-white transition-all duration-300 ${menuOpen ? 'opacity-0' : ''}`} />
          <span className={`block w-6 h-px bg-white transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
        </button>
      </div>

      {menuOpen && (
        <div className="md:hidden bg-[#050508]/95 backdrop-blur-md border-b border-white/5 px-6 pb-6">
          {NAV_LINKS.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              onClick={() => setMenuOpen(false)}
              className="block font-mono-custom text-[10px] tracking-[0.35em] text-gray-400 hover:text-cyan-400 py-3 uppercase border-b border-white/5 transition-colors duration-300"
            >
              {link}
            </a>
          ))}
        </div>
      )}
    </header>
  );
}
