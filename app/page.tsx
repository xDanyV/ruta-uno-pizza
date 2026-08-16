import Navbar from '@/components/layout/Navbar';

export default function Home() {
  return (
    <main className="min-h-screen bg-stone-950 text-stone-100 pb-20 md:pb-0">
      <Navbar />
      
      <section id="hero" className="min-h-[70vh] flex flex-col items-center justify-center text-center px-4">
        <h1 className="text-4xl md:text-6xl font-black text-amber-500 tracking-tight font-serif mb-4">
          RUTA UNO
        </h1>
        <p className="text-stone-400 max-w-md">
          Pizza rústica de masa madre, Chicago Deep Dish y café de especialidad.
        </p>
      </section>
    </main>
  );
}