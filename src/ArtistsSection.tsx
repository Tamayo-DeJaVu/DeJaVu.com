import tamayoLogo from '../assets/tamayo_logo.png';

const ARTISTS = [
  {
    name: 'TAMAYO',
    genre: 'Hip-Hop · Trap · Grime',
    releases: 1,
    image: tamayoLogo,
    accent: '#00e5ff',
    link: 'https://tamayo-dejavu.github.io/tamayo.com/',
  },
  {
    name: 'NOVA ECHO',
    genre: 'Electronic · Ambient',
    releases: 4,
    image: 'https://images.pexels.com/photos/1699161/pexels-photo-1699161.jpeg?auto=compress&cs=tinysrgb&w=600',
    accent: '#00e5ff',
    link: null,
  },
  {
    name: 'SOLARIS',
    genre: 'Neo-Soul · R&B',
    releases: 7,
    image: 'https://images.pexels.com/photos/1644888/pexels-photo-1644888.jpeg?auto=compress&cs=tinysrgb&w=600',
    accent: '#ff2d55',
    link: null,
  },
  {
    name: 'VOIDWALKER',
    genre: 'Industrial · Techno',
    releases: 3,
    image: 'https://images.pexels.com/photos/167636/pexels-photo-167636.jpeg?auto=compress&cs=tinysrgb&w=600',
    accent: '#ffd700',
    link: null,
  },
];

export default function ArtistsSection() {
  return (
    <section id="artists" className="py-32 px-6 max-w-7xl mx-auto">
      <div className="flex items-end justify-between mb-16">
        <div>
          <p className="reveal font-mono-custom text-[10px] tracking-[0.4em] text-cyan-400 uppercase mb-4">
            Our Roster
          </p>
          <h2 className="reveal font-display font-black leading-none" style={{ fontSize: 'clamp(3rem, 7vw, 6rem)' }}>
            The <span className="gradient-text">Artists</span>
          </h2>
        </div>
        <div className="reveal-right hidden md:block">
          <button className="font-mono-custom text-xs tracking-[0.25em] text-gray-500 hover:text-cyan-400 transition-colors duration-300 border-b border-gray-700 hover:border-cyan-400 pb-1">
            VIEW ALL →
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {ARTISTS.map((artist, i) => (
          <div
            key={artist.name}
            data-cursor
            className="reveal-scale group relative overflow-hidden cursor-none"
            style={{ transitionDelay: `${i * 80}ms` }}
            onClick={() => artist.link && window.open(artist.link, '_blank')}
          >
            <div className="relative overflow-hidden aspect-[4/3]">
              <img
                src={artist.image}
                alt={artist.name}
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-500"
                style={{ background: `radial-gradient(ellipse at 50% 100%, ${artist.accent}, transparent 70%)` }}
              />
              <div
                className="absolute inset-0 border opacity-0 group-hover:opacity-60 transition-all duration-500"
                style={{ borderColor: `${artist.accent}40` }}
              />
            </div>

            <div className="absolute bottom-0 left-0 right-0 p-6 lg:p-8">
              <div className="flex items-end justify-between">
                <div>
                  <h3
                    className="font-display font-bold text-2xl lg:text-3xl mb-1 group-hover:translate-y-[-4px] transition-transform duration-300"
                    style={{ textShadow: `0 0 20px ${artist.accent}30` }}
                  >
                    {artist.name}
                  </h3>
                  <p className="font-mono-custom text-[10px] tracking-[0.25em] text-gray-500">{artist.genre}</p>
                </div>
                <div className="text-right">
                  <p className="font-mono-custom text-[10px] tracking-[0.2em] text-gray-600 mb-0.5">RELEASES</p>
                  <p className="font-display font-bold text-2xl" style={{ color: artist.accent }}>
                    {String(artist.releases).padStart(2, '0')}
                  </p>
                </div>
              </div>
            </div>

            <div className="absolute top-6 right-6 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0">
              <div className="w-10 h-10 border border-white/20 flex items-center justify-center">
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <path d="M1 13L13 1M13 1H5M13 1V9" stroke="white" strokeWidth="1.2" />
                </svg>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
