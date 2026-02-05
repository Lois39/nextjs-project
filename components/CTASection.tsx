'use client';
import { Mail, User, Rocket, Sparkles, ArrowRight } from 'lucide-react';
import { useState } from 'react';
import Image from 'next/image';

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
    <section className="relative w-full overflow-hidden bg-white pt-6 pb-8 flex flex-col items-center justify-center">

      <div className="container mx-auto relative z-10 px-6">

        {/* --- LOGO --- */}
        <div className="flex justify-center mb-6">
          <div className="relative w-40 h-12 md:w-56 md:h-16">
            <Image
              src="/brand/Logo-Black.png"
              alt="Event Pal Logo"
              fill
              className="object-contain"
              priority
              quality={100}
            />
          </div>
        </div>

        {/* Gradient Wrapper for the border */}
        <div className="max-w-4xl mx-auto p-[3px] rounded-[32px] md:rounded-[48px] bg-gradient-to-r from-[#FFF100] via-[#FF9933] to-[#FF7EEF]">

          {/* Main Card */}
          <div className="rounded-[29px] md:rounded-[45px] bg-white p-6 md:p-10 text-center relative overflow-hidden">

            {/* Heading */}
            <div className="space-y-2 mb-8">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-black tracking-tighter uppercase leading-none">
                Plan Events <br className="hidden md:block" />
                <span className="text-[#00D0B0]">With Confidence</span>
              </h1>
              <p className="text-base md:text-lg text-gray-500 font-medium max-w-xl mx-auto leading-relaxed">
                Join the waitlist and be the first to experience a simpler way to plan events.
              </p>
            </div>

            {/* Redesigned Form */}
            <form className="max-w-2xl mx-auto space-y-4" onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* Name Input */}
                <div className="relative group">
                  <div className="absolute inset-y-0 left-0 pl-5 flex items-center pointer-events-none">
                    <User className="w-5 h-5 text-gray-400 group-focus-within:text-[#FF7EEF]" />
                  </div>
                  <input
                    type="text"
                    placeholder="Full Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full bg-gray-50/50 border-2 border-gray-100 rounded-2xl py-3 md:py-4 pl-12 md:pl-14 pr-6 text-black font-semibold placeholder:text-gray-400 focus:outline-none focus:border-[#FF7EEF] transition-all text-sm md:text-base"
                    required
                  />
                </div>

                {/* Email Input */}
                <div className="relative group">
                  <div className="absolute inset-y-0 left-0 pl-5 flex items-center pointer-events-none">
                    <Mail className="w-5 h-5 text-gray-400 group-focus-within:text-[#05CCAD]" />
                  </div>
                  <input
                    type="email"
                    placeholder="Email Address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full bg-gray-50/50 border-2 border-gray-100 rounded-2xl py-3 md:py-4 pl-12 md:pl-14 pr-6 text-black font-semibold placeholder:text-gray-400 focus:outline-none focus:border-[#05CCAD] transition-all text-sm md:text-base"
                    required
                  />
                </div>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting || isSubmitted}
                className="w-full bg-black text-white py-3 md:py-4 px-6 rounded-2xl font-bold hover:bg-gray-900 transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 text-base md:text-lg"
              >
                {isSubmitting ? 'Joining...' : isSubmitted ? 'Joined!' : 'Join Waitlist'}
                {!isSubmitted && <ArrowRight className="w-5 h-5" />}
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
          </div>
        </div>
      </div>
    </section>
  );
}
