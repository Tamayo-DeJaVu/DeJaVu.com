import logoA from '../assets/dejavu_logo_A_minimal.jpg';
import logoC from '../assets/dejavu_logo_C_vintage.jpg';

const VALUES = [
  {
    num: '01',
    title: 'Artistic Vision',
    desc: 'We champion authentic voices that push the boundaries of sound. Every artist we sign brings a unique perspective to the global music landscape.',
  },
  {
    num: '02',
    title: 'Sonic Innovation',
    desc: 'From studio production to spatial audio mastering, our engineers use cutting-edge tools to deliver immersive listening experiences.',
  },
  {
    num: '03',
    title: 'Global Reach',
    desc: 'Distribution partnerships across 38 countries ensure our artists are heard on every platform, in every timezone.',
  },
];

export default function AboutSection() {
  return (
    <section id="about" className="py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 mb-28">
          <div>
            <p className="reveal font-mono-custom text-[10px] tracking-[0.4em] text-cyan-400 uppercase mb-4">
              Who We Are
            </p>
            <h2
              className="reveal font-display font-black leading-tight mb-8"
              style={{ fontSize: 'clamp(2.8rem, 6vw, 5.5rem)' }}
            >
              A Label Built<br />
              <span className="gradient-text">for the Future</span><br />
              of Music
            </h2>
            <p className="reveal text-gray-400 leading-relaxed text-lg mb-6">
              DeJaVu Music Label was founded in 2024 with a singular purpose: to discover and amplify the artists who define tomorrow's sonic landscape. We are part incubator, part distributor, part creative studio.
            </p>
            <p className="reveal text-gray-500 leading-relaxed">
              Our roster spans electronic ambience, neo-soul, industrial techno, and dream-pop — united by one thread: sounds that stay with you long after the track ends.
            </p>
          </div>

          <div className="reveal-right relative">
            <div className="relative overflow-hidden" style={{ aspectRatio: '4/3' }}>
              <img
                src={logoC}
                alt="DeJaVu Vintage Logo"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-black/40 to-transparent" />
            </div>
            <div className="absolute -bottom-6 -left-6 w-28 h-28 bg-[#0a0a0f] border border-white/10 flex flex-col items-center justify-center">
              <span className="font-display font-bold text-3xl text-cyan-400">1</span>
              <span className="font-mono-custom text-[9px] tracking-[0.25em] text-gray-600 text-center mt-1">YEAR<br/>STRONG</span>
            </div>
          </div>
        </div>

        <div className="space-y-px bg-white/5">
          {VALUES.map((v, i) => (
            <div
              key={v.num}
              className="reveal flex flex-col md:flex-row md:items-center gap-6 md:gap-12 bg-[#050508] p-8 lg:p-10 hover:bg-[#080810] transition-colors duration-300 group"
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              <span className="font-mono-custom text-4xl font-bold text-white/5 group-hover:text-cyan-400/20 transition-colors duration-300 flex-shrink-0 w-16">
                {v.num}
              </span>
              <div className="flex-shrink-0 w-px h-12 bg-white/5 hidden md:block" />
              <div>
                <h3 className="font-display font-bold text-xl lg:text-2xl mb-2">{v.title}</h3>
                <p className="text-gray-500 text-sm lg:text-base leading-relaxed max-w-xl">{v.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-24 flex flex-col lg:flex-row items-center gap-12 glass border border-white/5 p-10 lg:p-14">
          <div className="flex-shrink-0 w-48 h-32 overflow-hidden">
            <img src={logoA} alt="DeJaVu Minimal Logo" className="w-full h-full object-contain filter invert opacity-60" />
          </div>
          <div className="w-px h-16 bg-white/5 hidden lg:block flex-shrink-0" />
          <div>
            <p className="font-mono-custom text-[10px] tracking-[0.4em] text-gray-600 mb-3">OUR MISSION</p>
            <blockquote className="font-display italic text-2xl lg:text-3xl text-white/80 leading-relaxed">
              "Music isn't just heard — it's felt, remembered, and{' '}
              <span className="text-cyan-400 not-italic">carried forward</span>."
            </blockquote>
          </div>
        </div>
      </div>
    </section>
  );
}
