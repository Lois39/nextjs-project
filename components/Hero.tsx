import { ArrowUpRight, Play, Ticket } from 'lucide-react';
import Image from 'next/image';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-28 pb-16 overflow-hidden px-6 md:px-12 lg:px-20">
      {/* Background Glows */}
      <div className="absolute top-[-10%] right-[-10%] w-[50%] h-[50%] bg-teal/20 blur-[150px] rounded-full animate-pulse" />
      <div className="absolute bottom-[-10%] left-[-10%] w-[40%] h-[40%] bg-blue-500/10 blur-[120px] rounded-full animate-bounce-slow" />
      <div className="absolute top-1/4 left-1/4 w-4 h-4 bg-teal rounded-full animate-float opacity-50" />
      <div className="absolute top-1/2 right-1/4 w-6 h-6 bg-celebration-pink rounded-full animate-orbit opacity-30" />
      <div className="absolute bottom-1/4 left-1/2 w-3 h-3 bg-bright-yellow rounded-full animate-float opacity-40 delay-1000" />

      <div className="container-xl relative z-10 w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">

          {/* Left Content */}
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card border-white/10 bg-white/5">
              <span className="w-1.5 h-1.5 rounded-full bg-teal animate-pulse" />
              <span className="text-[10px] font-black uppercase tracking-[0.2em] text-teal">Elevating Every Event</span>
            </div>

            <h1 className="leading-[1.1] tracking-tighter font-geist">
              Empowering the <br /> <span className="text-gradient">Next Generation</span> <br />
              of <span className="italic font-medium text-teal">Orchestrators.</span>
            </h1>

            <p className="max-w-md text-lg text-white/50 leading-relaxed font-poppins">
              Event Pal is an all-in-one platform for event organizers to design, produce, and celebrate unforgettable moments with intuitive, intelligent tools.
            </p>

            <div className="flex flex-wrap gap-4 pt-2">
              <button className="bg-teal hover:bg-bright-yellow text-deep-navy px-10 py-4.5 rounded-full font-black uppercase tracking-widest text-[12px] flex items-center gap-2 transition-all transform hover:scale-105 active:scale-95 shadow-[0_0_30px_rgba(0,208,176,0.2)]">
                Start Planning <ArrowUpRight className="w-4 h-4" />
              </button>

              <button className="flex items-center gap-3 px-8 py-4.5 rounded-full glass-card border-white/10 hover:border-white/20 transition-all group bg-white/5">
                <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-bright-yellow group-hover:text-deep-navy transition-colors">
                  <Play className="w-4 h-4 fill-current" />
                </div>
                <span className="text-[12px] font-black uppercase tracking-widest text-white">Watch Film</span>
              </button>
            </div>

            <div className="flex items-center gap-6 pt-10 border-t border-white/5">
              <div className="flex -space-x-3">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="w-11 h-11 rounded-full border-2 border-deep-navy bg-white/10 overflow-hidden ring-1 ring-white/5">
                    <Image src={`https://i.pravatar.cc/150?u=${i}`} alt="user" width={44} height={44} />
                  </div>
                ))}
              </div>
              <div>
                <div className="text-xl font-black text-white font-geist">2.4k+</div>
                <div className="text-[11px] text-white/40 font-black uppercase tracking-widest">Trusted Planners</div>
              </div>
            </div>
          </div>

          {/* Right Content - Visual Grid */}
          <div className="relative">
            <div className="grid grid-cols-2 gap-6">
              <div className="space-y-6 pt-12">
                <div className="relative aspect-[3/4] rounded-[2rem] overflow-hidden group border border-white/5">
                  <Image
                    src="/festival.png"
                    alt="Festival"
                    fill
                    className="object-cover transition-transform duration-1000 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-80" />
                  <div className="absolute bottom-8 left-8">
                    <div className="text-[10px] font-black uppercase tracking-[0.2em] text-teal mb-1">Festivals</div>
                    <div className="text-xl font-black text-white uppercase font-geist">Lumina 2024</div>
                  </div>
                </div>
                <div className="glass-card p-8 aspect-square flex flex-col justify-center items-center text-center space-y-3 border-white/5 bg-white/5">
                  <div className="w-14 h-14 rounded-2xl bg-teal/10 flex items-center justify-center">
                    <Ticket className="w-7 h-7 text-teal" />
                  </div>
                  <div className="text-2xl font-black text-white font-geist">850k+</div>
                  <div className="text-[9px] uppercase tracking-[0.3em] text-white/40 font-black">Tickets Sold</div>
                </div>
              </div>
              <div className="space-y-6">
                <div className="glass-card p-8 aspect-square flex flex-col justify-between border-white/5 bg-white/5">
                  <div className="flex justify-between items-start">
                    <div className="w-12 h-12 rounded-xl bg-warm-orange/10 flex items-center justify-center">
                      <div className="w-6 h-6 rounded-full border-3 border-warm-orange" />
                    </div>
                    <ArrowUpRight className="w-4 h-4 text-white/20" />
                  </div>
                  <div>
                    <div className="text-2xl font-black text-white font-geist">Top Tier</div>
                    <div className="text-[9px] uppercase tracking-[0.3em] text-white/40 font-black uppercase">Vendor Access</div>
                  </div>
                </div>
                <div className="relative aspect-[3/4] rounded-[2rem] overflow-hidden group border border-white/5">
                  <Image
                    src="/gala.png"
                    alt="Gala"
                    fill
                    className="object-cover transition-transform duration-1000 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-80" />
                  <div className="absolute bottom-8 left-8">
                    <div className="text-[10px] font-black uppercase tracking-[0.2em] text-celebration-pink mb-1">Corporate</div>
                    <div className="text-xl font-black text-white uppercase font-geist">VIP Gala</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating element */}
            <div className="absolute -bottom-8 -left-8 glass-card p-6 border-white/20 bg-deep-navy/80 backdrop-blur-2xl animate-bounce-slow shadow-[0_15px_40px_rgba(0,0,0,0.5)]">
              <div className="flex items-center gap-4">
                <div className="relative">
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                  <div className="absolute inset-0 w-3 h-3 rounded-full bg-green-500 animate-ping"></div>
                </div>
                <div className="font-black text-[12px] uppercase tracking-widest text-white">Live Updates</div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
