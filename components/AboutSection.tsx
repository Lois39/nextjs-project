'use client';
import { Sparkles, Star, Heart, Cloud, Music, Target, Rocket, Lightbulb } from 'lucide-react';
import Image from 'next/image';

export default function AboutSection() {
    return (
        <section className="relative w-full overflow-hidden bg-white flex flex-col items-center">
            
            {/* --- HERO SECTION (Logo & Blobs) --- */}
            <div className="relative min-h-[90vh] w-full flex flex-col items-center justify-center">
                {/* --- BACKGROUND BLOBS --- */}
                <div className="absolute top-0 left-0 w-[40%] h-[30%] bg-[#FFF100] rounded-br-[120px] z-0">
                    <div className="absolute top-0 left-20 w-8 h-20 bg-white rounded-b-full" />
                </div>

                <div className="absolute top-0 right-0 w-[30%] h-[50%] bg-[#FF7EEF] rounded-bl-[180px] z-0" />

                <div className="absolute bottom-0 left-0 w-[35%] h-[45%] bg-[#00F2E5] rounded-tr-[150px] z-0">
                    <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-white rounded-bl-[80px]" />
                </div>

                <div className="absolute bottom-0 right-0 w-[55%] h-[25%] bg-[#FF9933] rounded-tl-[200px] z-0" />

                {/* --- LOGO & BADGE --- */}
                <div className="container relative z-10 px-6 flex flex-col items-center justify-center">
                    <div className="relative w-64 h-64 md:w-[400px] md:h-[400px] transition-transform duration-700 ease-out hover:scale-105">
                        <Image
                            src="/brand/Logo-Black.png"
                            alt="Event Pal Logo"
                            fill
                            className="object-contain"
                            priority
                        />
                    </div>
                </div>
            </div>

            {/* --- INFO SECTION (About, Vision, Mission) --- */}
            <div className="container relative z-10 px-6 pb-32 -mt-10">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    
                    {/* About Us */}
                    <div className="bg-white p-8 rounded-[40px] shadow-xl border-4 border-[#00F2E5] hover:-rotate-2 transition-transform">
                        <div className="w-14 h-14 bg-[#00F2E5]/20 rounded-2xl flex items-center justify-center mb-6">
                            <Lightbulb className="w-8 h-8 text-[#00F2E5]" />
                        </div>
                        <h3 className="text-2xl font-black mb-4 uppercase tracking-tight">About Us</h3>
                        <p className="text-gray-600 leading-relaxed font-medium">
                           Event Pal was created to simplify event planning. We bring venues, vendors, budgets, timelines, and communication into one seamless platform, helping people spend less time stressing and more time celebrating what matters most.
                        </p>
                    </div>

                    {/* Our Vision */}
                    <div className="bg-white p-8 rounded-[40px] shadow-xl border-4 border-[#FF7EEF] hover:rotate-1 transition-transform">
                        <div className="w-14 h-14 bg-[#FF7EEF]/20 rounded-2xl flex items-center justify-center mb-6">
                            <Target className="w-8 h-8 text-[#FF7EEF]" />
                        </div>
                        <h3 className="text-2xl font-black mb-4 uppercase tracking-tight">Our Vision</h3>
                        <p className="text-gray-600 leading-relaxed font-medium">
                           To redefine how the world plans and experiences events by removing complexity and 
                           replacing it with confidence, joy, and effortless coordination.
                        </p>
                    </div>

                    {/* Our Mission */}
                    <div className="bg-white p-8 rounded-[40px] shadow-xl border-4 border-[#FF9933] hover:-rotate-1 transition-transform">
                        <div className="w-14 h-14 bg-[#FF9933]/20 rounded-2xl flex items-center justify-center mb-6">
                            <Rocket className="w-8 h-8 text-[#FF9933]" />
                        </div>
                        <h3 className="text-2xl font-black mb-4 uppercase tracking-tight">Our Mission</h3>
                        <p className="text-gray-600 leading-relaxed font-medium">
                            Our mission is to simplify event planning by delivering a seamless, all in one platform 
                            that connects people with trusted venues, vendors, and tools. We are dedicated to 
                            using smart technology and thoughtful design to help our users plan, manage, and 
                            execute events with confidence, clarity, and ease.
                        </p>
                    </div>

                </div>
            </div>

            {/* Custom Animation Styles */}
            <style jsx>{`
                @keyframes float {
                    0%, 100% { transform: translateY(0); }
                    50% { transform: translateY(-20px); }
                }
                .animate-float {
                    animation: float 6s ease-in-out infinite;
                }
            `}</style>
        </section>
    );
}