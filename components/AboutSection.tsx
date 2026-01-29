import { Target, Eye, Info, Sparkles, Compass } from 'lucide-react';
import Image from 'next/image';

export default function AboutSection() {

    const pillars = [
        {
            id: "vision",
            icon: <Eye className="w-8 h-8" />,
            title: "Vision",
            description: "To redefine how the world plans and experiences events by removing complexity and replacing it with confidence, joy, and effortless coordination.",
            color: "from-teal to-blue-500",
            iconBg: "bg-teal/20",
            textColor: "text-teal"
        },
        {
            id: "mission",
            icon: <Target className="w-8 h-8" />,
            title: "Mission",
            description: "Simplifying event planning with a seamless, all-in-one platform connecting you with trusted venues, vendors, and tools to execute with clarity and ease.",
            color: "from-bright-yellow to-warm-orange",
            iconBg: "bg-bright-yellow/20",
            textColor: "text-bright-yellow"
        }
    ];

    return (
        <section className="py-24 bg-deep-navy relative overflow-hidden px-6 md:px-12 lg:px-20 border-t border-white/5">
            {/* Playful Floating Elements */}
            <div className="absolute top-20 left-10 w-32 h-32 bg-teal/10 blur-3xl rounded-full animate-pulse" />
            <div className="absolute bottom-20 right-10 w-48 h-48 bg-celebration-pink/10 blur-3xl rounded-full animate-bounce-slow" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(circle_at_center,rgba(0,208,176,0.05)_0%,transparent_70%)]" />

            <div className="container-xl relative z-10 w-full">
                <div className="flex flex-col lg:flex-row gap-16 items-center">

                    {/* Left Side: Fun Content */}
                    <div className="lg:w-1/2 space-y-10">
                        <div className="space-y-4">
                            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-teal/10 border border-teal/20 text-teal">
                                <Sparkles className="w-4 h-4" />
                                <span className="text-xs font-black uppercase tracking-widest">About Event Pal</span>
                            </div>
                            <h2 className="text-5xl md:text-7xl font-black tracking-tighter text-white uppercase font-geist leading-none">
                                We make <br />
                                <span className="text-gradient">Magic</span> happen.
                            </h2>
                            <p className="text-xl text-white/50 font-poppins leading-relaxed">
                                Event Pal was created to simplify event planning. We bring venues, vendors, budgets, timelines, and communication into one seamless platform.
                                <span className="text-white"> Less stress, more celebration.</span>
                            </p>
                        </div>

                        {/* Vision & Mission Cards */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                            {pillars.map((pillar, index) => (
                                <div
                                    key={index}
                                    className="group glass-card p-8 border-white/10 hover:border-white/30 transition-all duration-500 bg-white/[0.02] flex flex-col gap-6"
                                >
                                    <div className={`w-16 h-16 rounded-2xl ${pillar.iconBg} flex items-center justify-center ${pillar.textColor} group-hover:scale-110 transition-transform`}>
                                        {pillar.icon}
                                    </div>
                                    <div className="space-y-3">
                                        <h3 className="text-2xl font-black uppercase tracking-tight text-white font-geist">
                                            {pillar.title}
                                        </h3>
                                        <p className="text-sm text-white/40 font-poppins leading-relaxed group-hover:text-white/70 transition-colors">
                                            {pillar.description}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>

                    </div>


                    {/* Right Side: Visuals */}
                    <div className="lg:w-1/2 relative">
                        <div className="relative aspect-square md:aspect-[4/5] w-full max-w-lg mx-auto">
                            {/* Decorative Background for Image */}
                            <div className="absolute -inset-4 bg-gradient-to-tr from-teal/20 via-pink-500/10 to-yellow-500/20 blur-2xl rounded-[3rem] opacity-30 animate-pulse" />

                            {/* Main Image */}
                            <div className="relative h-full w-full rounded-[3rem] overflow-hidden border border-white/10 shadow-2xl rotate-2 hover:rotate-0 transition-transform duration-700 group">
                                <Image
                                    src="/festival.png"
                                    alt="Celebration"
                                    fill
                                    className="object-cover group-hover:scale-110 transition-transform duration-1000"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-deep-navy via-transparent to-transparent opacity-60" />

                                {/* Floating Badge */}
                                <div className="absolute bottom-8 right-8 glass-card p-6 border-white/20 bg-deep-navy/80 backdrop-blur-xl translate-y-4 group-hover:translate-y-0 transition-all duration-700">
                                    <div className="flex items-center gap-4">
                                        <div className="w-12 h-12 rounded-full bg-teal/20 flex items-center justify-center text-teal">
                                            <Compass className="w-6 h-6" />
                                        </div>
                                        <div>
                                            <div className="text-white font-black uppercase text-xs tracking-widest">Designed for</div>
                                            <div className="text-teal font-black uppercase text-lg font-geist tracking-tight">Everyone</div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Secondary Floating Image/Element */}
                            <div className="absolute -top-10 -right-10 w-48 h-48 rounded-[2.5rem] overflow-hidden border-4 border-deep-navy shadow-2xl z-20 hidden md:block rotate-12 hover:rotate-0 transition-transform duration-500">
                                <Image src="/workshop.png" alt="Workshop" fill className="object-cover" />
                                <div className="absolute inset-0 bg-teal/10 group-hover:bg-transparent transition-colors" />
                            </div>

                            <div className="absolute -bottom-10 -left-10 w-40 h-40 rounded-[2rem] overflow-hidden border-4 border-deep-navy shadow-2xl z-20 hidden md:block -rotate-12 hover:rotate-0 transition-transform duration-500">
                                <Image src="/gala.png" alt="Gala" fill className="object-cover" />
                                <div className="absolute inset-0 bg-warm-orange/10 group-hover:bg-transparent transition-colors" />
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
