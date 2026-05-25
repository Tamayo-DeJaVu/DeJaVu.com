const RELEASES = [
  {
    title: 'AFTERGLOW',
    artist: 'Nova Echo',
    label: 'Single',
    date: 'MAR 2025',
    image: 'https://images.pexels.com/photos/1694900/pexels-photo-1694900.jpeg?auto=compress&cs=tinysrgb&w=400',
    tracks: 1,
    duration: '4:32',
    featured: true,
  },
  {
    title: 'DEEP CURRENT',
    artist: 'Solaris',
    label: 'EP',
    date: 'FEB 2025',
    image: 'https://images.pexels.com/photos/1105666/pexels-photo-1105666.jpeg?auto=compress&cs=tinysrgb&w=400',
    tracks: 5,
    duration: '22:10',
    featured: false,
  },
  {
    title: 'MACHINE DREAMS',
    artist: 'Voidwalker',
    label: 'Album',
    date: 'JAN 2025',
    image: 'https://images.pexels.com/photos/1763075/pexels-photo-1763075.jpeg?auto=compress&cs=tinysrgb&w=400',
    tracks: 12,
    duration: '48:30',
    featured: false,
  },
  {
    title: 'SOFT HORIZON',
    artist: 'Luna Rei',
    label: 'Single',
    date: 'APR 2025',
    image: 'https://images.pexels.com/photos/1626481/pexels-photo-1626481.jpeg?auto=compress&cs=tinysrgb&w=400',
    tracks: 1,
    duration: '3:58',
    featured: false,
  },
  {
    title: 'ZERO GRAVITY',
    artist: 'Nova Echo',
    label: 'EP',
    date: 'DEC 2024',
    image: 'https://images.pexels.com/photos/1840608/pexels-photo-1840608.jpeg?auto=compress&cs=tinysrgb&w=400',
    tracks: 4,
    duration: '18:44',
    featured: false,
  },
  {
    title: 'FLUORESCENT',
    artist: 'Solaris',
    label: 'Album',
    date: 'NOV 2024',
    image: 'https://images.pexels.com/photos/2111015/pexels-photo-2111015.jpeg?auto=compress&cs=tinysrgb&w=400',
    tracks: 10,
    duration: '41:22',
    featured: false,
  },
];

export default function ReleasesSection() {
  return (
    <section id="releases" className="py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16">
          <p className="reveal font-mono-custom text-[10px] tracking-[0.4em] text-cyan-400 uppercase mb-4">
            Catalogue
          </p>
          <h2 className="reveal font-display font-black leading-none" style={{ fontSize: 'clamp(3rem, 7vw, 6rem)' }}>
            Latest <span className="gradient-text-warm">Releases</span>
          </h2>
        </div>

        {RELEASES.filter(r => r.featured).map((r) => (
          <div
            key={r.title}
            data-cursor
            className="reveal group relative mb-8 overflow-hidden glass border border-white/5 hover:border-cyan-400/20 transition-all duration-500"
          >
            <div className="flex flex-col md:flex-row">
              <div className="relative w-full md:w-64 h-48 md:h-auto overflow-hidden flex-shrink-0">
                <img src={r.image} alt={r.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                <div className="absolute inset-0 bg-gradient-to-r from-transparent to-[#0d0d14]/80 hidden md:block" />
                <div className="absolute top-4 left-4">
                  <span className="font-mono-custom text-[9px] tracking-[0.3em] px-2 py-1 border border-cyan-400/50 text-cyan-400">
                    FEATURED
                  </span>
                </div>
              </div>
              <div className="flex flex-col justify-center p-8 lg:p-12 flex-1">
                <p className="font-mono-custom text-[9px] tracking-[0.35em] text-gray-600 mb-2">{r.date} · {r.label}</p>
                <h3 className="font-display font-bold text-4xl lg:text-5xl mb-2">{r.title}</h3>
                <p className="font-mono-custom text-sm text-gray-500 mb-6">{r.artist}</p>
                <div className="flex gap-8">
                  <div>
                    <p className="font-mono-custom text-[9px] text-gray-600 tracking-wider mb-1">TRACKS</p>
                    <p className="font-mono-custom text-lg text-white">{r.tracks}</p>
                  </div>
                  <div>
                    <p className="font-mono-custom text-[9px] text-gray-600 tracking-wider mb-1">DURATION</p>
                    <p className="font-mono-custom text-lg text-white">{r.duration}</p>
                  </div>
                </div>
                <div className="mt-6">
                  <a
                    href="https://tamayo-dejavu.github.io/tamayo.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-mono-custom text-xs tracking-[0.25em] text-cyan-400 hover:text-white border-b border-cyan-400/30 hover:border-white transition-all duration-300 pb-1"
                  >
                    LISTEN NOW →
                  </a>
                </div>
              </div>
            </div>
          </div>
        ))}

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-white/5">
          {RELEASES.filter(r => !r.featured).map((r, i) => (
            <div
              key={r.title}
              data-cursor
              className="reveal-scale group relative bg-[#050508] p-6 hover:bg-[#0a0a10] transition-colors duration-300"
              style={{ transitionDelay: `${i * 60}ms` }}
            >
              <div className="relative overflow-hidden mb-5 aspect-square">
                <img
                  src={r.image}
                  alt={r.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 grayscale group-hover:grayscale-0"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                <div className="absolute bottom-3 right-3 w-9 h-9 bg-black/60 border border-white/10 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <svg width="12" height="14" viewBox="0 0 12 14" fill="none">
                    <path d="M1 1L11 7L1 13V1Z" fill="white" />
                  </svg>
                </div>
              </div>
              <p className="font-mono-custom text-[9px] tracking-[0.3em] text-gray-600 mb-1.5">{r.date} · {r.label}</p>
              <h4 className="font-display font-bold text-xl mb-1">{r.title}</h4>
              <p className="font-mono-custom text-xs text-gray-600">{r.artist}</p>
              <div className="flex gap-5 mt-4">
                <span className="font-mono-custom text-[9px] text-gray-700">{r.tracks} TRK</span>
                <span className="font-mono-custom text-[9px] text-gray-700">{r.duration}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
