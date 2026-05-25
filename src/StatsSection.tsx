const STATS = [
  { value: '42+', label: 'Releases', suffix: '' },
  { value: '12', label: 'Signed Artists', suffix: '' },
  { value: '180M', label: 'Total Streams', suffix: '+' },
  { value: '38', label: 'Countries Reached', suffix: '' },
];

export default function StatsSection() {
  return (
    <div className="py-24 border-y border-white/5 bg-[#070710]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-px bg-white/5">
          {STATS.map((s, i) => (
            <div
              key={s.label}
              className="reveal-scale bg-[#070710] py-12 px-8 text-center group hover:bg-[#0a0a14] transition-colors duration-300"
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              <div
                className="font-display font-black mb-2 leading-none gradient-text"
                style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)' }}
              >
                {s.value}{s.suffix}
              </div>
              <p className="font-mono-custom text-[10px] tracking-[0.35em] text-gray-600 uppercase">{s.label}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
