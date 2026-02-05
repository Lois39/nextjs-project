'use client';
import Image from 'next/image';

const images = [
  {
    src: '/gallery/event-1.jpg',
    color: '#00D0B0',
  },
  {
    src: '/gallery/event-2.jpg',
    color: '#FF7EEF',
  },
  {
    src: '/gallery/event-3.jpg',
    color: '#FF9933',
  },
];

export default function BrandPersonality() {
  return (
    <section className="relative w-full py-20 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10">

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {images.map((item, index) => (
            <div
              key={index}
              className="group relative aspect-[4/5] rounded-[40px] overflow-hidden shadow-2xl transition-all duration-500 hover:scale-105"
              style={{ border: `8px solid ${item.color}` }}
            >
              <Image
                src={item.src}
                alt={`Gallery image ${index + 1}`}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              {/* Decorative corner element */}
              <div
                className="absolute -top-4 -right-4 w-12 h-12 rounded-full z-10"
                style={{ backgroundColor: item.color }}
              />
            </div>
          ))}
        </div>
      </div>

      {/* Background Decorative Elements */}
      <div className="absolute top-1/4 -left-20 w-64 h-64 bg-teal/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 -right-20 w-64 h-64 bg-brand-blue/5 rounded-full blur-3xl" />
    </section>
  );
}