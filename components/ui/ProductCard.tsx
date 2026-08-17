'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { Flame, Sparkles } from 'lucide-react';
import { MenuItem } from '@/types';

interface ProductCardProps {
    item: MenuItem;
    onSelect: (item: MenuItem) => void;
}

export default function ProductCard({ item, onSelect }: ProductCardProps) {
    return (
        <motion.div
            layout
            whileHover={{ y: -5, transition: { duration: 0.2 } }}
            onClick={() => onSelect(item)}
            className="group cursor-pointer bg-stone-900/90 rounded-2xl md:rounded-3xl overflow-hidden border border-stone-800/80 hover:border-(--brand-border) transition-all duration-300 flex flex-row md:flex-col justify-between shadow-lg shadow-black/50 hover:shadow-2xl hover:shadow-(--brand-base)/25 select-none"
        >
            {/* Contenedor de Imagen */}
            <div className="relative w-28 h-28 sm:w-36 sm:h-36 md:w-full md:h-52 shrink-0 overflow-hidden bg-stone-950">
                <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                    sizes="(max-width: 768px) 144px, (max-width: 1200px) 33vw, 400px"
                />

                {/* Tag Guinda Elegante */}
                {item.tag && (
                    <div className="hidden md:flex absolute top-3 left-3 bg-(--brand-base)/95 border border-(--brand-border) text-rose-100 text-[10px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full items-center gap-1 shadow-md">
                        <Flame className="w-3 h-3 text-rose-200" />
                        <span>{item.tag}</span>
                    </div>
                )}
            </div>

            {/* Contenido */}
            <div className="p-3.5 sm:p-4 md:p-5 flex flex-col justify-between flex-1 min-w-0">
                <div>
                    {item.tag && (
                        <span className="md:hidden inline-block text-[10px] text-(--brand-accent) font-bold uppercase tracking-wider mb-1">
                            • {item.tag}
                        </span>
                    )}
                    <h3 className="text-sm sm:text-base md:text-lg font-bold text-stone-100 font-sans tracking-tight truncate md:whitespace-normal group-hover:text-stone-200 transition-colors">
                        {item.name}
                    </h3>
                    <p className="text-stone-400 text-xs sm:text-sm leading-relaxed line-clamp-2 mt-1">
                        {item.description}
                    </p>
                </div>

                {/* Barra inferior: Precio e indicador */}
                <div className="mt-3 pt-2 border-t border-stone-800/60 flex items-center justify-between">
                    <span className="text-stone-100 font-sans font-black text-sm sm:text-base md:text-lg">
                        ${item.price} <span className="text-[10px] text-stone-400 font-normal">MXN</span>
                    </span>

                    <span className="text-[11px] text-stone-400 group-hover:text-rose-200 font-medium flex items-center gap-1 transition-colors">
                        <Sparkles className="w-3 h-3 text-(--brand-accent) opacity-0 group-hover:opacity-100 transition-opacity" />
                        <span>Ver detalles</span>
                    </span>
                </div>
            </div>
        </motion.div>
    );
}