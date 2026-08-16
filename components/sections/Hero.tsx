'use client';

import { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import {
    UtensilsCrossed,
    ArrowRight,
    ChevronLeft,
    ChevronRight,
    Sparkles
} from 'lucide-react';

const featuredPizzas = [
    {
        id: 'deep-dish',
        name: 'Deep Dish Suprema',
        tag: 'Especialidad',
        image: '/images/menu/deep-dish.jpg',
    },
    {
        id: 'margarita-rustica',
        name: 'Margarita Rústica',
        tag: 'Favorita de la Casa',
        image: '/images/menu/pizza-margarita.jpg',
    },
    {
        id: 'pep-hot',
        name: 'Pepperoni',
        tag: 'Más Vendida',
        image: '/images/menu/pizza-pepperoni.jpg',
    },
    {
        id: 'mex-hot',
        name: 'Mexicana',
        tag: 'Opción Picante',
        image: '/images/menu/pizza-mexicana.jpg',
    },
];

export default function Hero() {
    const [currentIndex, setCurrentIndex] = useState(0);

    const handleNext = useCallback(() => {
        setCurrentIndex((prev) => (prev + 1) % featuredPizzas.length);
    }, []);

    const handlePrev = useCallback(() => {
        setCurrentIndex((prev) => (prev - 1 + featuredPizzas.length) % featuredPizzas.length);
    }, []);

    useEffect(() => {
        const timer = setInterval(() => {
            handleNext();
        }, 5000);
        return () => clearInterval(timer);
    }, [handleNext, currentIndex]);

    const currentPizza = featuredPizzas[currentIndex];

    return (
        <section id="hero" className="relative min-h-[calc(100vh-5rem)] flex items-center justify-center overflow-hidden py-10 lg:py-16">

            {/* Resplandor sobrio guinda profundo */}
            <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-140 h-140 bg-[#6d122c]/15 rounded-full blur-[150px] pointer-events-none" />
            <div className="absolute bottom-10 right-10 w-96 h-96 bg-[#4a0b1d]/20 rounded-full blur-[140px] pointer-events-none" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">

                    {/* Columna Izquierda: Mensaje & Botones */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, ease: 'easeOut' }}
                        className="lg:col-span-6 flex flex-col items-center lg:items-start text-center lg:text-left space-y-6"
                    >
                        {/* Título Principal */}
                        <h1 className="text-4xl sm:text-6xl xl:text-7xl font-black text-stone-100 tracking-tight leading-[1.08] font-sans">
                            La Auténtica <br />
                            <span
                                style={{ fontFamily: 'var(--font-script)' }}
                                className="text-[#6d122c] text-6xl sm:text-7xl xl:text-8xl tracking-normal font-normal inline-block transform -rotate-1 pr-2 drop-shadow-md"
                            >
                                Deep Dish
                            </span>
                            <br className="hidden sm:inline" /> & Masa Rústica en Tijuana
                        </h1>

                        {/* Subtítulo */}
                        <p className="text-base sm:text-lg text-stone-300 max-w-xl font-normal leading-relaxed">
                            Masa madre fermentada con bordes crujientes inflados, queso mozzarella fundido en abundancia y café de especialidad preparado al momento.
                        </p>

                        {/* Botones de Acción */}
                        <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto pt-2">
                            <Link
                                href="#menu"
                                className="w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-linear-to-r from-[#540e21] via-[#6d122c] to-[#881938] hover:from-[#6d122c] hover:to-[#9b2142] text-stone-100 font-bold px-8 py-4 rounded-full text-base shadow-xl shadow-[#6d122c]/30 border border-[#881938]/60 transition-all transform hover:scale-105 active:scale-95 group"
                            >
                                <UtensilsCrossed className="w-5 h-5 text-rose-200 group-hover:rotate-12 transition-transform" />
                                <span>Explorar Menú</span>
                                <ArrowRight className="w-4 h-4 text-rose-100 group-hover:translate-x-1 transition-transform" />
                            </Link>

                            <Link
                                href="#location"
                                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-stone-900/80 hover:bg-stone-800 text-stone-300 hover:text-white font-semibold px-7 py-4 rounded-full text-base border border-stone-700/70 hover:border-[#6d122c]/80 transition-all backdrop-blur-sm shadow-md"
                            >
                                <span>Ver Sucursal & Horarios</span>
                            </Link>
                        </div>
                    </motion.div>

                    {/* Columna Derecha: Carrusel de Pizzas */}
                    <div className="lg:col-span-6 flex flex-col items-center justify-center w-full">
                        <div className="relative w-full max-w-105 sm:max-w-120 lg:max-w-135 aspect-4/3 sm:aspect-square">

                            {/* Resplandor trasero */}
                            <div className="absolute inset-0 bg-[#6d122c]/20 rounded-[2.5rem] blur-2xl transform scale-95" />

                            {/* Contenedor Principal */}
                            <div className="relative w-full h-full rounded-[2.5rem] overflow-hidden border border-stone-800 bg-stone-900 shadow-2xl shadow-black/80 group">
                                <AnimatePresence mode="wait">
                                    <motion.div
                                        key={currentPizza.id}
                                        initial={{ opacity: 0, scale: 0.96 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        exit={{ opacity: 0, scale: 1.04 }}
                                        transition={{ duration: 0.4, ease: 'easeInOut' }}
                                        className="relative w-full h-full"
                                    >
                                        <Image
                                            key={currentPizza.image}
                                            src={currentPizza.image}
                                            alt={currentPizza.name}
                                            fill
                                            priority
                                            sizes="(max-width: 768px) 100vw, 540px"
                                            className="object-cover"
                                        />
                                        <div className="absolute inset-0 bg-linear-to-t from-stone-950/75 via-transparent to-transparent pointer-events-none" />
                                    </motion.div>
                                </AnimatePresence>

                                {/* Badge Flotante Superior */}
                                <div className="absolute top-4 left-4 sm:top-6 sm:left-6 z-10">
                                    <AnimatePresence mode="wait">
                                        <motion.div
                                            key={currentPizza.id}
                                            initial={{ opacity: 0, y: -10 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            exit={{ opacity: 0, y: -10 }}
                                            transition={{ duration: 0.3 }}
                                            className="bg-stone-950/90 border border-[#881938]/60 rounded-2xl px-4 py-2 shadow-xl backdrop-blur-md flex items-center gap-2.5"
                                        >
                                            <div className="w-7 h-7 rounded-lg bg-[#6d122c]/40 border border-[#881938]/70 flex items-center justify-center text-rose-200">
                                                <Sparkles className="w-4 h-4" />
                                            </div>
                                            <div>
                                                <p className="text-[10px] uppercase font-bold tracking-wider text-[#b82d4f]">
                                                    {currentPizza.tag}
                                                </p>
                                                <p className="text-xs sm:text-sm font-black text-stone-100">
                                                    {currentPizza.name}
                                                </p>
                                            </div>
                                        </motion.div>
                                    </AnimatePresence>
                                </div>

                                {/* Botones de Navegación */}
                                <div className="absolute inset-y-0 left-3 right-3 flex items-center justify-between pointer-events-none z-10">
                                    <button
                                        onClick={handlePrev}
                                        aria-label="Pizza anterior"
                                        className="pointer-events-auto p-2.5 sm:p-3 rounded-full bg-stone-950/75 hover:bg-stone-900 text-stone-200 hover:text-white border border-stone-700/60 hover:border-[#6d122c]/80 backdrop-blur-md shadow-lg transition-all active:scale-90"
                                    >
                                        <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
                                    </button>

                                    <button
                                        onClick={handleNext}
                                        aria-label="Siguiente pizza"
                                        className="pointer-events-auto p-2.5 sm:p-3 rounded-full bg-stone-950/75 hover:bg-stone-900 text-stone-200 hover:text-white border border-stone-700/60 hover:border-[#6d122c]/80 backdrop-blur-md shadow-lg transition-all active:scale-90"
                                    >
                                        <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
                                    </button>
                                </div>

                                {/* Indicadores de Puntos */}
                                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-2 z-10 bg-stone-950/70 backdrop-blur-md px-3 py-1.5 rounded-full border border-stone-800">
                                    {featuredPizzas.map((_, idx) => (
                                        <button
                                            key={idx}
                                            onClick={() => setCurrentIndex(idx)}
                                            aria-label={`Ir a pizza ${idx + 1}`}
                                            className={`h-2 rounded-full transition-all duration-300 ${idx === currentIndex
                                                ? 'w-6 bg-linear-to-r from-[#6d122c] to-[#881938]'
                                                : 'w-2 bg-stone-700 hover:bg-stone-500'
                                                }`}
                                        />
                                    ))}
                                </div>

                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}