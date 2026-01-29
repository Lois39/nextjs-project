import { Quote, Star } from 'lucide-react';
import Image from 'next/image';

export default function Testimonials() {
  const testimonials = [
    {
      quote: "Event Pal has completely transformed how our team approaches large-scale festivals. The level of detail and orchestration possible is unmatched.",
      name: "Julianna Rivera",
      role: "Creative Director",
      image: "https://i.pravatar.cc/150?u=julianna"
    },
    {
      quote: "The interface is so clean that you forget how complex the underlying tools are. It's the first time planning felt like a creative process rather than a chore.",
      name: "Marcus Thorne",
      role: "Operations Lead",
      image: "https://i.pravatar.cc/150?u=marcus"
    },
    {
      quote: "We've reduced our planning cycle by 30% since switching. The vendor network alone is worth the investment.",
      name: "Elena Vance",
      role: "Executive Producer",
      image: "https://i.pravatar.cc/150?u=elena"
    }
  ];

  return (
    <section className="section-padding bg-deep-navy relative overflow-hidden px-6 md:px-12 lg:px-20">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-500/5 blur-[120px] rounded-full" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-teal/5 blur-[120px] rounded-full" />

      <div className="container-xl relative z-10 w-full">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-12 mb-16">
          <div className="max-w-xl space-y-6">
            <div className="text-teal font-geist font-black text-6xl md:text-8xl tracking-tighter mb-4 opacity-50">04.</div>
            <h2 className="tracking-tighter font-geist text-white leading-[1.2] uppercase text-4xl md:text-5xl">
              Voices of <br /> <span className="text-gradient">Orchestration</span>
            </h2>
            <p className="text-lg text-white/40 font-poppins leading-relaxed max-w-lg">
              Hear from the leaders who are redefining how we gather and celebrate with Event Pal.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="glass-card p-10 border-white/5 hover:border-teal/40 hover:bg-white/[0.03] transition-all duration-700 relative overflow-hidden flex flex-col justify-between bg-white/[0.015]"
            >
              <div className="relative z-10">
                <div className="flex gap-1 mb-8">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-bright-yellow text-bright-yellow" />
                  ))}
                </div>

                <Quote className="w-16 h-16 text-white/[0.02] absolute -top-6 -right-6 transition-transform group-hover:scale-110 duration-700 group-hover:text-teal/10" />

                <p className="text-xl font-black tracking-tight leading-relaxed text-white italic mb-12 font-geist">
                  &ldquo;{testimonial.quote}&rdquo;
                </p>
              </div>

              <div className="flex items-center gap-5 relative z-10 pt-6 border-t border-white/5">
                <div className="relative w-16 h-16 rounded-[1.25rem] overflow-hidden border border-white/10 group-hover:border-teal/50 transition-all duration-500 ring-4 ring-deep-navy/50">
                  <Image
                    src={testimonial.image}
                    alt={testimonial.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="space-y-0.5">
                  <h4 className="font-black text-lg text-white group-hover:text-teal transition-colors font-geist uppercase tracking-tight">{testimonial.name}</h4>
                  <p className="text-white/30 text-[10px] font-black uppercase tracking-[0.2em]">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
