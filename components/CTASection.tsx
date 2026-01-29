'use client';
import { ArrowUpRight, Zap, Mail, Rocket } from 'lucide-react';
import { useState } from 'react';

export default function CTASection() {
  const [email, setEmail] = useState('');

  return (
    <section className="section-padding relative overflow-hidden px-6 md:px-12 lg:px-20">
      <div className="container-xl relative z-10 w-full">
        <div className="glass-card bg-white/[0.02] border-white/5 py-16 px-10 text-center relative overflow-hidden group shadow-[0_30px_80px_rgba(0,0,0,0.4)] w-full mx-auto">
          {/* Animated Background Gradients */}
          <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-teal/15 rounded-full blur-[160px] -translate-y-1/2 translate-x-1/2 opacity-30 group-hover:opacity-50 transition-opacity duration-1000" />
          <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-celebration-pink/5 rounded-full blur-[140px] translate-y-1/2 -translate-x-1/2 opacity-30 group-hover:opacity-50 transition-opacity duration-1000" />

          <div className="relative z-10 w-full space-y-16">
            {/* Upper Content */}
            <div className="flex flex-col items-center justify-center gap-8 max-w-4xl mx-auto">
              <div className="inline-flex items-center gap-2.5 px-5 py-2.5 rounded-full glass-card border-white/10 text-bright-yellow bg-white/5">
                <Zap className="w-4 h-4 fill-current" />
                <span className="text-[10px] font-black uppercase tracking-[0.3em]">The Future of Gathering</span>
              </div>

              <h2 className="leading-[1.1] tracking-tighter font-geist text-white text-4xl md:text-7xl uppercase">
                Ready to Design Your <br />
                <span className="text-gradient">Next Masterpiece?</span>
              </h2>

              <p className="text-white/40 text-xl font-poppins leading-relaxed max-w-2xl">
                Join the new generation of orchestrators who are turning human connection into a shared cultural experience.
              </p>
            </div>

            {/* Waitlist Form Section */}
            <div className="max-w-2xl mx-auto w-full pt-8 border-t border-white/5">
              <div className="space-y-8">
                <div className="space-y-2">
                  <h3 className="text-2xl font-black text-teal uppercase font-geist tracking-tight">Join the Waitlist</h3>
                  <p className="text-white/30 text-sm font-poppins">Be the first to experience the seamless way to plan events.</p>
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <div className="relative flex-1 group">
                    <Mail className="absolute left-5 top-1/2 -translate-y-1/2 w-5 h-5 text-white/20 group-focus-within:text-teal transition-colors" />
                    <input
                      type="email"
                      placeholder="Enter your digital address"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full bg-white/5 border border-white/10 rounded-2xl py-5 pl-14 pr-6 text-white placeholder:text-white/20 focus:outline-none focus:border-teal/50 transition-all font-poppins"
                    />
                  </div>
                  <button className="bg-teal hover:bg-bright-yellow text-deep-navy px-12 py-5 rounded-2xl font-black uppercase tracking-widest text-xs flex items-center justify-center gap-3 transition-all transform hover:scale-105 active:scale-95 shadow-[0_15px_35px_rgba(0,208,176,0.3)] group">
                    Secure Access <Rocket className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  </button>
                </div>

                <p className="text-[10px] text-white/15 uppercase tracking-widest font-black">
                  * Limited spots available for the private beta.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
