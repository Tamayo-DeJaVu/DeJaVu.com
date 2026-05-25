import logoBDark from '../assets/dejavu_logo_B_dark.jpg';

const LINKS = {
  Label: ['Artists', 'Releases', 'Distribution', 'Publishing'],
  Company: ['About', 'Careers', 'Press Kit', 'Contact'],
  Follow: ['Spotify', 'Apple Music', 'Instagram', 'SoundCloud'],
};

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-white/5 bg-[#030306]">
      <div className="max-w-7xl mx-auto px-6 py-16 lg:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 mb-16">
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <div className="relative w-8 h-8">
                <div className="absolute inset-0 rounded-full border border-cyan-400/30" />
                <div className="absolute inset-[10px] rounded-full bg-cyan-400" />
              </div>
              <span className="font-display text-xl font-bold tracking-wider">
                DeJa<span className="text-cyan-400">Vu</span>
              </span>
            </div>
            <p className="text-gray-600 text-sm leading-relaxed mb-6 max-w-xs">
              Sounds that stay with you. An independent music label pushing the edges of contemporary sound.
            </p>
            <p className="font-mono-custom text-[9px] tracking-[0.3em] text-gray-700 uppercase">
              EST. MMXXIV · MUSIC LABEL
            </p>
          </div>

          {Object.entries(LINKS).map(([section, items]) => (
            <div key={section}>
              <p className="font-mono-custom text-[9px] tracking-[0.4em] text-gray-600 uppercase mb-5">{section}</p>
              <ul className="space-y-3">
                {items.map((item) => (
                  <li key={item}>
                    <a
                      href="#"
                      className="font-mono-custom text-xs text-gray-500 hover:text-cyan-400 transition-colors duration-300"
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="hr-glow mb-8" />

        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="font-mono-custom text-[9px] tracking-[0.25em] text-gray-700">
            © {year} DEJAVU MUSIC LABEL. ALL RIGHTS RESERVED.
          </p>
          <div className="flex gap-6">
            {['Privacy Policy', 'Terms of Use', 'Cookie Policy'].map((item) => (
              <a
                key={item}
                href="#"
                className="font-mono-custom text-[9px] tracking-wider text-gray-700 hover:text-gray-400 transition-colors duration-300"
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
