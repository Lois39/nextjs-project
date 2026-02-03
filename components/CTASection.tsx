'use client';
// ... imports
import { Mail, User, Rocket, Sparkles, ArrowRight } from 'lucide-react';
import { useState } from 'react';

export default function CTASection() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError('');

    try {
      const response = await fetch('/api/waitlist', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, waitlistType: 'Event Planner Waitlist' }),
      });

      const data = await response.json();

      if (response.ok) {
        setIsSubmitted(true);
        setName('');
        setEmail('');
      } else {
        setError(data.error || 'Something went wrong');
      }
    } catch {
      setError('Network error. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="relative w-full overflow-hidden bg-white py-12 md:py-24 flex flex-col items-center justify-center">

      {/* --- BACKGROUND BLOBS (To match About Section) --- */}
      <div className="absolute top-0 left-0 w-32 h-32 md:w-64 md:h-64 bg-[#FFF100] rounded-br-full opacity-50 z-0" />
      <div className="absolute bottom-0 right-0 w-48 h-20 md:w-96 md:h-40 bg-[#FF9933] rounded-tl-full opacity-50 z-0" />
      <div className="absolute top-1/2 -right-10 md:-right-20 w-20 h-40 md:w-40 md:h-80 bg-[#FF7EEF] rounded-l-full opacity-30 z-0" />

      <div className="container mx-auto relative z-10 px-6">
        {/* Gradient Wrapper for the border */}
        <div className="max-w-7xl mx-auto p-[6px] rounded-[32px] md:rounded-[64px] bg-gradient-to-r from-[#FFF100] via-[#FF9933] to-[#FF7EEF]">

          {/* Main Card - Height reduced and shadow removed */}
          <div className="rounded-[28px] md:rounded-[60px] bg-white p-6 md:p-16 text-center relative overflow-hidden">

            {/* Heading */}
            <div className="space-y-4 mb-10">
              <h2 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-black text-black tracking-tighter uppercase leading-none">
                Plan Events <br className="hidden md:block" />
                <span className="text-[#00F2E5]">With Confidence</span>
              </h2>
              <p className="text-xl text-gray-600 font-medium max-w-2xl mx-auto leading-relaxed">
                Join the waitlist and be the first to experience a simpler way to plan events.
              </p>
            </div>

            {/* Redesigned Form */}
            <form className="max-w-4xl mx-auto space-y-4" onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* Name Input */}
                <div className="relative group">
                  <div className="absolute inset-y-0 left-0 pl-6 flex items-center pointer-events-none">
                    <User className="w-5 h-5 text-black group-focus-within:text-[#FF7EEF]" />
                  </div>
                  <input
                    type="text"
                    placeholder="Full Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full bg-white border-4 border-gray-100 rounded-3xl py-4 md:py-5 pl-14 md:pl-16 pr-6 md:pr-8 text-black font-bold placeholder:text-gray-400 focus:outline-none focus:border-[#FF7EEF] transition-all text-sm md:text-base"
                    required
                  />
                </div>

                {/* Email Input */}
                <div className="relative group">
                  <div className="absolute inset-y-0 left-0 pl-6 flex items-center pointer-events-none">
                    <Mail className="w-5 h-5 text-black group-focus-within:text-[#00F2E5]" />
                  </div>
                  <input
                    type="email"
                    placeholder="Email Address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full bg-white border-4 border-gray-100 rounded-3xl py-4 md:py-5 pl-14 md:pl-16 pr-6 md:pr-8 text-black font-bold placeholder:text-gray-400 focus:outline-none focus:border-[#00F2E5] transition-all text-sm md:text-base"
                    required
                  />
                </div>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting || isSubmitted}
                className="w-full bg-[#051B16] text-white py-3 px-6 rounded-full font-medium hover:bg-[#051B16]/90 transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
              >
                {isSubmitting ? 'Joining...' : isSubmitted ? 'Joined!' : 'Join Waitlist'}
                {!isSubmitted && <ArrowRight className="w-4 h-4" />}
              </button>

              {isSubmitted && (
                <p className="text-teal-600 font-bold text-center mt-4 animate-in fade-in slide-in-from-bottom-2">
                  You're on the list! We'll be in touch soon.
                </p>
              )}
              {error && (
                <p className="text-red-500 font-bold text-center mt-4 animate-in fade-in slide-in-from-bottom-2">
                  {error}
                </p>
              )}
            </form>

            {/* Footer text */}
            <div className="mt-10 flex flex-col md:flex-row items-center justify-center gap-4 text-[10px] font-black uppercase tracking-[0.3em] text-gray-400">
              <span>Event Pal</span>
              <span className="hidden md:block text-black">•</span>
              <span>2026 Waitlist</span>
              <span className="hidden md:block text-black">•</span>
              <span className="text-[#FF7EEF]">Early Access Coming Soon</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}