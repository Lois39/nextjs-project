'use client';
import { Lightbulb, Target, Rocket } from 'lucide-react';

export default function AboutSection() {
    return (
        <section className="relative w-full bg-white pb-24">

            {/* --- INFO SECTION (About, Vision, Mission) --- */}
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

                    {/* About Us */}
                    <div className="bg-white p-6 md:p-8 rounded-[32px] border-2 border-[#05CCAD] hover:scale-[1.02] transition-transform shadow-sm">
                        <div className="w-12 h-12 bg-[#05CCAD]/10 rounded-xl flex items-center justify-center mb-5">
                            <Lightbulb className="w-7 h-7 text-[#05CCAD]" />
                        </div>
                        <h3 className="text-xl font-black mb-3 uppercase tracking-tight">About Us</h3>
                        <p className="text-gray-500 text-sm md:text-base leading-relaxed font-medium">
                            Event Pal is an all-in-one event planning platform designed to remove the stress, confusion and endless back-and-forth that comes with organizing events. We bring venues, vendors, budgets, timelines, and communication into one <span className="font-bold text-black">simple, seamless experience.</span>
                        </p>
                    </div>

                    {/* Our Vision */}
                    <div className="bg-white p-6 md:p-8 rounded-[32px] border-2 border-[#05CCAD] hover:scale-[1.02] transition-transform shadow-sm">
                        <div className="w-12 h-12 bg-[#05CCAD]/10 rounded-xl flex items-center justify-center mb-5">
                            <Target className="w-7 h-7 text-[#05CCAD]" />
                        </div>
                        <h3 className="text-xl font-black mb-3 uppercase tracking-tight">Our Vision</h3>
                        <p className="text-gray-500 text-sm md:text-base leading-relaxed font-medium">
                            We envision a world where planning an event feels exciting instead of overwhelming — where confidence replaces chaos, and anyone can bring their vision to life without friction or guesswork.
                        </p>
                    </div>

                    {/* Our Mission */}
                    <div className="bg-white p-6 md:p-8 rounded-[32px] border-2 border-[#05CCAD] hover:scale-[1.02] transition-transform shadow-sm">
                        <div className="w-12 h-12 bg-[#05CCAD]/10 rounded-xl flex items-center justify-center mb-5">
                            <Rocket className="w-7 h-7 text-[#05CCAD]" />
                        </div>
                        <h3 className="text-xl font-black mb-3 uppercase tracking-tight">Our Mission</h3>
                        <p className="text-gray-500 text-sm md:text-base leading-relaxed font-medium">
                            Our mission is to build intuitive tools and trusted connections that help people plan smarter, faster, and with total clarity — all from one powerful, easy-to-use platform.
                        </p>
                    </div>

                </div>
            </div>
        </section>
    );
}
