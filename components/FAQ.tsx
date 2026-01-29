'use client';
import { useState } from 'react';
import { Plus, Minus, HelpCircle } from 'lucide-react';

export default function FAQ() {
    const faqs = [
        {
            question: "What exactly is orchestration in event management?",
            answer: "Orchestration goes beyond simple planning. It's the strategic alignment of every element—from vendor selection to real-time timeline management—ensuring that every part of the event works in perfect harmony to create a cohesive experience."
        },
        {
            question: "How does the vendor network curation work?",
            answer: "We don't just provide a list of names. Our systems evaluate vendors based on their stylistic signature, reliability, and past performance on high-concept events, matching you with partners who truly understand your vision."
        },
        {
            question: "Is Event Pal suitable for international scale festivals?",
            answer: "Absolutely. Our platform is built on an 'invisible architecture' that scales from intimate galas to city-wide festivals. We handle the complexity of multi-venue coordination and massive attendee flows with ease."
        },
        {
            question: "What kind of 'Modern Intelligence' does the platform use?",
            answer: "Our intelligence tools analyze thousands of design patterns and logistical data points to provide proactive suggestions, helping you avoid crises before they happen and elevate the aesthetic impact of your gathering."
        }
    ];

    const [openIndex, setOpenIndex] = useState<number | null>(0);

    return (
        <section className="section-padding bg-deep-navy relative overflow-hidden px-6 md:px-12 lg:px-20">
            {/* Background Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[50%] h-[50%] bg-teal/5 blur-[100px] rounded-full" />

            <div className="container-xl relative z-10 w-full">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
                    <div className="space-y-10 lg:sticky lg:top-32">
                        <div className="text-teal font-geist font-black text-6xl md:text-8xl tracking-tighter mb-4 opacity-50">03.</div>
                        <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full glass-card border-white/10 bg-white/5 text-teal">
                            <HelpCircle className="w-4 h-4" />
                            <span className="text-[10px] font-black uppercase tracking-[0.3em]">Gathering Philosophy</span>
                        </div>

                        <h2 className="tracking-tighter font-geist text-white leading-[1.2] uppercase text-4xl md:text-5xl">
                            Addressing the <br /> <span className="text-gradient">Nuances</span> of <br /> Orchestration
                        </h2>

                        <p className="text-lg text-white/40 font-poppins leading-relaxed max-md">
                            Everything you need to know about our philosophy behind the Event Pal gathering infrastructure.
                        </p>

                        <div className="w-24 h-1.5 bg-teal/15 rounded-full" />

                        <div className="pt-8 space-y-6">
                            <div className="text-[10px] font-black uppercase tracking-[0.3em] text-white/20">Still have questions?</div>
                            <button className="px-8 py-4 rounded-full glass-card border-white/10 hover:border-teal/50 hover:bg-white/[0.05] transition-all text-[11px] font-black uppercase tracking-widest text-teal bg-white/5">
                                Contact Support
                            </button>
                        </div>
                    </div>

                    <div className="space-y-6">
                        {faqs.map((faq, index) => (
                            <div
                                key={index}
                                className={`glass-card border-white/5 overflow-hidden transition-all duration-700 ${openIndex === index ? 'bg-white/[0.06] border-teal/25 shadow-[0_15px_40px_rgba(0,0,0,0.3)]' : 'bg-white/[0.02] hover:bg-white/[0.04] hover:border-white/15'}`}
                            >
                                <button
                                    onClick={() => setOpenIndex(openIndex === index ? null : index)}
                                    className="w-full flex items-center justify-between text-left p-8 group"
                                >
                                    <span className={`text-xl font-black tracking-tight transition-all duration-500 uppercase font-geist ${openIndex === index ? 'text-teal' : 'text-white'}`}>
                                        {faq.question}
                                    </span>
                                    <div className={`w-10 h-10 rounded-full flex items-center justify-center border transition-all duration-700 flex-shrink-0 ml-8 ${openIndex === index ? 'bg-teal border-teal text-deep-navy rotate-180 shadow-lg' : 'bg-white/5 border-white/10 text-white group-hover:border-teal/50'}`}>
                                        {openIndex === index ? <Minus className="w-5 h-5" /> : <Plus className="w-5 h-5" />}
                                    </div>
                                </button>
                                <div className={`overflow-hidden transition-all duration-700 ease-in-out ${openIndex === index ? 'max-h-80 opacity-100' : 'max-h-0 opacity-0'}`}>
                                    <div className="px-8 pb-8">
                                        <p className="text-base text-white/30 leading-relaxed font-poppins border-t border-white/5 pt-8 group-hover:text-white/60 transition-colors">
                                            {faq.answer}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
