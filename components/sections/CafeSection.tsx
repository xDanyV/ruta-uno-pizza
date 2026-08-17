'use client';

import { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { Coffee, Sparkles } from 'lucide-react';

const coffeeHighlights = [
    {
        id: 'espresso',
        name: 'Espresso Doble & Americano',
        notes: 'Notas de chocolate amargo, avellana y cuerpo denso.',
        method: 'Extracción 9 bares',
        temp: 'Caliente',
        image: '/images/menu/espresso.png',
    },
    {
        id: 'cold-brew',
        name: 'Cold Brew Artesanal',
        notes: 'Infusión en frío durante 18 horas, baja acidez y perfil dulce.',
        method: 'Maceración 18 hrs',
        temp: 'Frío con hielo',
        image: '/images/menu/cold-brew.png',
    },
    {
        id: 'specialty-latte',
        name: 'Latte de Vainilla & Canela',
        notes: 'Leche texturizada sedosa, infusión de canela en raja y café de altura.',
        method: 'Vaporizado fino',
        temp: 'Caliente / Iced',
        image: '/images/menu/latte.png',
    },
];

export default function CafeSection() {
    const [selectedCoffee, setSelectedCoffee] = useState(coffeeHighlights[0]);

    return (
        <section id="cafe" className="py-16 md:py-24 bg-stone-950 relative overflow-hidden">

            {/* Resplandor ambiental guinda */}
            <div className="absolute top-1/3 left-10 w-96 h-96 bg-(--brand-base)/15 rounded-full blur-[140px] pointer-events-none" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

                {/* Cabecera */}
                <div className="flex flex-col items-center text-center mb-12 space-y-3">
                    <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-(--brand-base)/20 border border-(--brand-border)/50 text-rose-200 text-xs font-semibold uppercase tracking-widest shadow-sm">
                        <Coffee className="w-3.5 h-3.5 text-(--brand-accent)" />
                        <span>Barra de Café de Especialidad</span>
                    </div>

                    <h2 className="text-3xl sm:text-5xl font-black text-stone-100 font-sans tracking-tight">
                        Cafetería & Tostado
                    </h2>
                    <p className="text-stone-400 text-xs sm:text-sm md:text-base max-w-lg">
                        Granos de altura mexicanos seleccionados, tostados a fuego medio para el maridaje perfecto con nuestras pizzas.
                    </p>
                </div>

                {/* Bloque Interactivo: Selector y Showcase */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center bg-stone-900/60 border border-stone-800/80 rounded-3xl p-6 sm:p-8 lg:p-10 backdrop-blur-sm">

                    {/* Columna Izquierda: Lista de Bebidas */}
                    <div className="lg:col-span-6 space-y-3">
                        <p className="text-xs uppercase tracking-widest text-stone-400 font-bold mb-4">
                            Selecciona una preparación:
                        </p>

                        {coffeeHighlights.map((coffee) => {
                            const isSelected = selectedCoffee.id === coffee.id;

                            return (
                                <button
                                    key={coffee.id}
                                    onClick={() => setSelectedCoffee(coffee)}
                                    className={`w-full text-left p-4 sm:p-5 rounded-2xl border transition-all duration-300 flex items-center justify-between group cursor-pointer ${isSelected
                                            ? 'bg-(--brand-base)/25 border-(--brand-border) shadow-lg shadow-(--brand-base)/20'
                                            : 'bg-stone-950/60 border-stone-800/80 hover:border-stone-700'
                                        }`}
                                >
                                    <div className="space-y-1 pr-4">
                                        <div className="flex items-center gap-2">
                                            <span className={`font-bold text-base sm:text-lg transition-colors ${isSelected ? 'text-stone-100' : 'text-stone-300 group-hover:text-white'
                                                }`}>
                                                {coffee.name}
                                            </span>
                                            {isSelected && (
                                                <span className="w-2 h-2 rounded-full bg-(--brand-accent) animate-pulse" />
                                            )}
                                        </div>
                                        <p className="text-xs sm:text-sm text-stone-400 leading-relaxed line-clamp-1 sm:line-clamp-2">
                                            {coffee.notes}
                                        </p>
                                    </div>

                                    <div className="shrink-0 text-right">
                                        <span className="text-[11px] font-mono font-medium px-2.5 py-1 rounded-full bg-stone-800/80 text-stone-300 border border-stone-700/60 block">
                                            {coffee.temp}
                                        </span>
                                    </div>
                                </button>
                            );
                        })}
                    </div>

                    {/* Columna Derecha: Tarjeta Visual Dinámica */}
                    <div className="lg:col-span-6 flex flex-col items-center">
                        <div className="relative w-full max-w-md aspect-4/3 sm:aspect-square rounded-3xl overflow-hidden border border-stone-800 bg-stone-950 shadow-2xl">
                            <AnimatePresence mode="wait">
                                <motion.div
                                    key={selectedCoffee.id}
                                    initial={{ opacity: 0, scale: 0.96 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0, scale: 1.04 }}
                                    transition={{ duration: 0.35, ease: 'easeInOut' }}
                                    className="relative w-full h-full"
                                >
                                    <Image
                                        src={selectedCoffee.image}
                                        alt={selectedCoffee.name}
                                        fill
                                        sizes="(max-width: 768px) 100vw, 450px"
                                        className="object-cover"
                                    />
                                    <div className="absolute inset-0 bg-linear-to-t from-stone-950 via-stone-950/30 to-transparent" />

                                    {/* Ficha de Detalles Inferior */}
                                    <div className="absolute bottom-0 inset-x-0 p-6 space-y-2">
                                        <div className="flex items-center gap-2 text-rose-200 text-xs font-bold uppercase tracking-wider">
                                            <Sparkles className="w-4 h-4 text-(--brand-accent)" />
                                            <span>{selectedCoffee.method}</span>
                                        </div>
                                        <h3 className="text-xl sm:text-2xl font-black text-stone-100">
                                            {selectedCoffee.name}
                                        </h3>
                                        <p className="text-xs sm:text-sm text-stone-300 leading-relaxed">
                                            {selectedCoffee.notes}
                                        </p>
                                    </div>
                                </motion.div>
                            </AnimatePresence>
                        </div>
                    </div>

                </div>

            </div>
        </section>
    );
}