import { Instagram, Twitter, Linkedin, ArrowUpRight, Github, Mail } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="bg-deep-navy pt-16 pb-8 px-10 md:px-24 border-t border-white/5 relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-teal/5 blur-[150px] rounded-full translate-x-1/2 translate-y-1/2" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-blue-600/5 blur-[120px] rounded-full -translate-x-1/2 translate-y-1/2" />

      <div className="w-full relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-12">

          <div className="lg:col-span-2 space-y-12">
            <Link href="/" className="inline-block">
              <Image
                src="/brand/LOGO ALL WHITE.png"
                alt="Event Pal"
                width={150}
                height={38}
                className="h-9 w-auto object-contain"
              />
            </Link>

            <h2 className="text-[clamp(2.5rem,6vw,4.5rem)] leading-[0.9] font-black tracking-tighter uppercase font-geist text-white">
              Design the <br /> <span className="text-gradient">Next Great</span> <br /> Interaction.
            </h2>

            <div className="flex gap-4">
              {[
                { icon: <Instagram className="w-5 h-5" />, color: 'hover:text-pink' },
                { icon: <Twitter className="w-5 h-5" />, color: 'hover:text-blue-400' },
                { icon: <Linkedin className="w-5 h-5" />, color: 'hover:text-blue-600' },
                { icon: <Github className="w-5 h-5" />, color: 'hover:text-white' },
              ].map((social, i) => (
                <Link
                  key={i}
                  href="#"
                  className={`w-12 h-12 rounded-full glass-card border-white/10 flex items-center justify-center text-white/20 transition-all ${social.color} hover:border-white/25 hover:bg-white/5 hover:-translate-y-1.5 shadow-lg`}
                >
                  {social.icon}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-[10px] font-black uppercase tracking-[0.4em] text-white/25 mb-10 font-geist">Platform</h3>
            <ul className="space-y-6">
              {['Features', 'Pricing', 'Vendors', 'Showcase', 'Academy'].map((item) => (
                <li key={item}>
                  <Link href="#" className="text-lg font-black text-white/30 hover:text-teal transition-all group flex items-center gap-3 uppercase font-geist tracking-tight">
                    {item}
                    <ArrowUpRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-all transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-16">
            <div>
              <h3 className="text-[10px] font-black uppercase tracking-[0.4em] text-white/25 mb-10 font-geist">Company</h3>
              <ul className="space-y-6">
                {['About Us', 'Contact', 'Resources', 'Careers', 'Privacy'].map((item) => (
                  <li key={item}>
                    <Link href="#" className="text-lg font-black text-white/30 hover:text-teal transition-all group flex items-center gap-3 uppercase font-geist tracking-tight">
                      {item}
                      <ArrowUpRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-all transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="space-y-5">
              <div className="text-[10px] font-black uppercase tracking-[0.4em] text-white/25">Intelligence Feed</div>
              <div className="flex gap-2">
                <input
                  type="email"
                  placeholder="Digital address"
                  className="bg-white/5 border border-white/10 rounded-full px-6 py-3.5 text-xs focus:outline-none focus:border-teal/40 transition-all w-full text-white placeholder:text-white/15"
                />
                <button className="w-12 h-12 rounded-full bg-teal text-deep-navy flex items-center justify-center flex-shrink-0 hover:bg-bright-yellow transition-all transform active:scale-90 shadow-[0_0_20px_rgba(0,208,176,0.15)]">
                  <Mail className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>

        </div>

        <div className="flex flex-col md:flex-row justify-between items-center gap-10 pt-16 border-t border-white/5">
          <p className="text-[10px] text-white/15 font-black uppercase tracking-[0.3em]">
            &copy; 2026 Event Pal Orchestration. Engineering human connection.
          </p>

          <div className="flex gap-10 text-[10px] font-black uppercase tracking-[0.3em] text-white/15">
            <Link href="#" className="hover:text-white transition-colors">Documentation</Link>
            <Link href="#" className="hover:text-white transition-colors">Status</Link>
          </div>
        </div>

        <div className="mt-16 opacity-[0.02] select-none pointer-events-none">
          <h1 className="text-[20vw] font-black tracking-[0.2em] leading-none uppercase text-center -mb-6 font-geist text-white">
            EVENT PAL
          </h1>
        </div>
      </div>
    </footer>
  );
}
