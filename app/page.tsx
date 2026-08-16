import Navbar from '@/components/layout/Navbar';
import Hero from '@/components/sections/Hero';
import MenuSection from '@/components/sections/MenuSection';

export default function Home() {
  return (
    <main className="min-h-screen bg-stone-950 text-stone-100 pb-20 md:pb-0">
      <Navbar />
      <Hero />
      <MenuSection />
    </main>
  );
}