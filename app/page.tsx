import Header from '../components/Header';
import AboutSection from '../components/AboutSection';
import CTASection from '../components/CTASection';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <main className="overflow-x-hidden bg-deep-navy">
      <Header />
      <div className="pt-20"> {/* Offset for floating header */}
        <AboutSection />
        <CTASection />
      </div>
      <Footer />
    </main>
  );
}
