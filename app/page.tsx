import AboutSection from '../components/AboutSection';
import BrandPersonality from '../components/BrandPersonality';
import CTASection from '../components/CTASection';

export default function Home() {
  return (
    <main className="">
      <div className="items-center justify-center flex flex-col w-full">
        <AboutSection />
        <CTASection />
        <BrandPersonality />
      </div>
    </main>
  );
}
