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
                            Event Pal was created to simplify event planning. We bring venues, vendors, budgets, timelines, and communication into one seamless platform.
                        </p>
                    </div>

                    {/* Our Vision */}
                    <div className="bg-white p-6 md:p-8 rounded-[32px] border-2 border-[#FF7EEF] hover:scale-[1.02] transition-transform shadow-sm">
                        <div className="w-12 h-12 bg-[#FF7EEF]/10 rounded-xl flex items-center justify-center mb-5">
                            <Target className="w-7 h-7 text-[#FF7EEF]" />
                        </div>
                        <h3 className="text-xl font-black mb-3 uppercase tracking-tight">Our Vision</h3>
                        <p className="text-gray-500 text-sm md:text-base leading-relaxed font-medium">
                            To redefine how the world plans and experiences events by removing complexity and
                            replacing it with confidence and joy.
                        </p>
                    </div>

                    {/* Our Mission */}
                    <div className="bg-white p-6 md:p-8 rounded-[32px] border-2 border-[#FF9933] hover:scale-[1.02] transition-transform shadow-sm">
                        <div className="w-12 h-12 bg-[#FF9933]/10 rounded-xl flex items-center justify-center mb-5">
                            <Rocket className="w-7 h-7 text-[#FF9933]" />
                        </div>
                        <h3 className="text-xl font-black mb-3 uppercase tracking-tight">Our Mission</h3>
                        <p className="text-gray-500 text-sm md:text-base leading-relaxed font-medium">
                            Deliver a seamless, all-in-one platform that connects people with trusted vendors and tools to plan with clarity and ease.
                        </p>
                    </div>

                </div>
            </div>
        </section>
    );
}
