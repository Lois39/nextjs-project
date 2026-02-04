import AboutSection from '../components/AboutSection';
import CTASection from '../components/CTASection';

export default function Home() {
  return (
    <main className="bg-white min-h-screen">
      <div className="flex flex-col w-full">
        <CTASection />
        <AboutSection />
      </div>
    </main>
  );
}
