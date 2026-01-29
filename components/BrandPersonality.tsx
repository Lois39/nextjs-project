import { Shield, Users, Zap, Globe } from 'lucide-react';

export default function BrandPersonality() {
  const traits = [
    {
      title: 'Structural Clarity',
      description: 'We believe in the power of invisible architecture. Our approach ensures every event is built on a foundation of absolute precision.',
      icon: <Shield className="w-5 h-5" />,
      color: 'teal'
    },
    {
      title: 'Authentic Partnership',
      description: 'Building lasting relationships is at our core. We partner with you as co-creators, making orchestration a shared legacy.',
      icon: <Users className="w-5 h-5" />,
      color: 'blue'
    },
    {
      title: 'Modern Intelligence',
      description: 'Embracing innovation, we use cutting-edge aesthetic intelligence to stay ahead in the world of high-concept experiences.',
      icon: <Zap className="w-5 h-5" />,
      color: 'yellow'
    },
    {
      title: 'Cultural Elevation',
      description: 'We enable unforgettable celebrations by focusing on the cultural impact of every gathering we curate.',
      icon: <Globe className="w-5 h-5" />,
      color: 'purple'
    },
  ];

  return (
    <section className="section-padding bg-deep-navy relative overflow-hidden px-6 md:px-12 lg:px-20 border-t border-white/5">
      <div className="container-xl relative z-10 w-full">
        <div className="flex flex-col mb-16">
          <div className="text-teal font-geist font-black text-6xl md:text-8xl tracking-tighter mb-4 opacity-50">01.</div>
          <h2 className="tracking-tighter font-geist text-white leading-[1.1] uppercase text-4xl md:text-5xl">
            The <span className="text-gradient">Brand</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {traits.map((trait, index) => (
            <div
              key={index}
              className="glass-card p-8 border-white/5 group hover:border-teal/30 transition-all duration-500 bg-white/[0.01] flex flex-col justify-between min-h-[320px]"
            >
              <div>
                <div className={`w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center mb-8 group-hover:bg-teal group-hover:text-deep-navy transition-all duration-500`}>
                  {trait.icon}
                </div>

                <h3 className="text-xl font-black uppercase tracking-tight mb-4 group-hover:text-teal transition-colors font-geist">
                  {trait.title}
                </h3>

                <p className="text-[14px] text-white/30 font-poppins leading-relaxed group-hover:text-white/60 transition-colors">
                  {trait.description}
                </p>
              </div>

              <div className="mt-8 w-8 h-1 bg-white/10 group-hover:w-16 group-hover:bg-teal transition-all duration-500 rounded-full" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
