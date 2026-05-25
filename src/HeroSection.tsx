import { useEffect, useRef } from 'react';
import gsap from 'gsap';

export default function HeroSection() {
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const badgeRef = useRef<HTMLDivElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const tl = gsap.timeline({ delay: 0.8 });
    tl.fromTo(badgeRef.current,
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out' }
    )
    .fromTo(titleRef.current?.querySelectorAll('.char') ?? [],
      { opacity: 0, y: 60, rotateX: -40 },
      { opacity: 1, y: 0, rotateX: 0, duration: 1, ease: 'power3.out', stagger: 0.04 },
      '-=0.2'
    )
    .fromTo(subtitleRef.current,
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 0.9, ease: 'power3.out' },
      '-=0.4'
    )
    .fromTo(ctaRef.current,
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out' },
      '-=0.3'
    )
    .fromTo(scrollRef.current,
      { opacity: 0 },
      { opacity: 1, duration: 1, ease: 'power2.out' },
      '-=0.2'
    );
  }, []);

  const words = ['SOUNDS', 'THAT STAY', 'WITH YOU'];

  return (
    <section className="relative w-full h-screen flex items-center justify-center overflow-hidden">
      {/* Gradient overlays */}
      <div className="absolute inset-0 z-10 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-b from-[#050508] via-transparent to-[#050508]" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#050508]/60 via-transparent to-[#050508]/60" />
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] rounded-full"
          style={{ background: 'radial-gradient(ellipse, rgba(0,229,255,0.04) 0%, transparent 70%)' }}
        />
      </div>

      {/* Content */}
      <div className="relative z-20 text-center px-6 max-w-6xl mx-auto">
        <div ref={badgeRef} className="inline-flex items-center gap-3 mb-10 opacity-0">
          <span className="block w-8 h-px bg-cyan-400" />
          <span className="font-mono-custom text-[10px] tracking-[0.4em] text-cyan-400 uppercase">
            Est. MMXXIV &nbsp;·&nbsp; Music Label
          </span>
          <span className="block w-8 h-px bg-cyan-400" />
        </div>

        <h1
          ref={titleRef}
          className="font-display font-black leading-none mb-8 perspective-[1000px]"
          style={{ fontSize: 'clamp(5rem, 14vw, 13rem)' }}
        >
          {['D','e','J','a','V','u'].map((char, i) => (
            <span
              key={i}
              className={`char inline-block opacity-0 ${i < 4 ? 'text-white' : 'text-cyan-400 glow-cyan'}`}
              style={{ letterSpacing: '-0.02em' }}
            >
              {char}
            </span>
          ))}
        </h1>

        <p
          ref={subtitleRef}
          className="font-mono-custom text-xs tracking-[0.5em] text-gray-500 uppercase opacity-0 mb-12"
        >
          {words.join(' · ')}
        </p>

        <div ref={ctaRef} className="flex items-center justify-center gap-6 opacity-0">
          <button
            data-cursor
            className="group relative overflow-hidden px-10 py-4 font-mono-custom text-xs tracking-[0.25em] text-black bg-cyan-400 hover:bg-transparent hover:text-cyan-400 border border-cyan-400 transition-all duration-400"
            onClick={() => document.querySelector('#artists')?.scrollIntoView({ behavior: 'smooth' })}
          >
            <span className="relative z-10">EXPLORE ARTISTS</span>
          </button>
          <button
            data-cursor
            className="font-mono-custom text-xs tracking-[0.25em] text-gray-400 hover:text-white transition-colors duration-300 flex items-center gap-2"
            onClick={() => document.querySelector('#releases')?.scrollIntoView({ behavior: 'smooth' })}
          >
            <span>NEW RELEASES</span>
            <svg width="16" height="8" viewBox="0 0 16 8" fill="none">
              <path d="M0 4H14M14 4L10 1M14 4L10 7" stroke="currentColor" strokeWidth="1" />
            </svg>
          </button>
        </div>
      </div>

      <div
        ref={scrollRef}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2 opacity-0"
      >
        <span className="font-mono-custom text-[9px] tracking-[0.35em] text-gray-600 uppercase">Scroll</span>
        <div className="w-px h-10 bg-gradient-to-b from-gray-600 to-transparent animate-pulse" />
      </div>

      <div className="absolute top-24 left-8 z-20 pointer-events-none hidden lg:block">
        <div className="w-12 h-12 border-l border-t border-cyan-400/20" />
      </div>
      <div className="absolute top-24 right-8 z-20 pointer-events-none hidden lg:block">
        <div className="w-12 h-12 border-r border-t border-cyan-400/20" />
      </div>
      <div className="absolute bottom-24 left-8 z-20 pointer-events-none hidden lg:block">
        <div className="w-12 h-12 border-l border-b border-cyan-400/20" />
      </div>
      <div className="absolute bottom-24 right-8 z-20 pointer-events-none hidden lg:block">
        <div className="w-12 h-12 border-r border-b border-cyan-400/20" />
      </div>
    </section>
  );
}
