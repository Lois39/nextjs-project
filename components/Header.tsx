import Link from 'next/link';
import Image from 'next/image';
import { Search } from 'lucide-react';

export default function Header() {
  return (
    <header className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[min(95vw,1200px)]">
      <div className="glass-card px-6 md:px-8 h-16 flex items-center justify-between border-white/10">
        {/* Logo */}
        <div className="flex-1">
          <Link href="/" className="flex items-center">
            <Image
              src="/brand/LOGO ALL WHITE.png"
              alt="Event Pal Logo"
              width={130}
              height={32}
              className="h-8 w-auto object-contain"
              priority
            />
          </Link>
        </div>

        {/* Right: Actions */}
        <div className="flex-1 flex items-center justify-end gap-4">
          <button className="p-2 rounded-full hover:bg-white/10 transition-colors group">
            <Search className="w-4 h-4 text-white/70 group-hover:text-teal" />
          </button>

          <div className="h-5 w-px bg-white/10 hidden sm:block"></div>

          <button className="flex items-center gap-2 px-6 py-2 rounded-full bg-teal text-deep-navy font-black uppercase tracking-widest text-[11px] hover:bg-white transition-all transform active:scale-95">
            <span>GO</span>
          </button>
        </div>
      </div>
    </header>
  );
}
