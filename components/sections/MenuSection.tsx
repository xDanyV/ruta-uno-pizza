'use client';

import { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { categories, menuItems } from '@/data/menuData';
import { MenuItem, Category } from '@/types';
import ProductCard from '@/components/ui/ProductCard';
import {
    Utensils,
    ChevronLeft,
    ChevronRight,
    X,
    Flame,
    Sparkles
} from 'lucide-react';

const ITEMS_PER_PAGE = 3;

export default function MenuSection() {
    const [activeCategory, setActiveCategory] = useState<Category | 'all'>('all');
    const [currentPage, setCurrentPage] = useState(1);
    const [selectedProduct, setSelectedProduct] = useState<MenuItem | null>(null);

    const filteredItems =
        activeCategory === 'all'
            ? menuItems
            : menuItems.filter((item) => item.category === activeCategory);

    const totalPages = Math.ceil(filteredItems.length / ITEMS_PER_PAGE) || 1;
    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
    const currentItems = filteredItems.slice(startIndex, startIndex + ITEMS_PER_PAGE);

    const handleCategoryChange = (category: Category | 'all') => {
        setActiveCategory(category);
        setCurrentPage(1);
    };

    const handlePrevPage = () => {
        setCurrentPage((prev) => Math.max(prev - 1, 1));
    };

    const handleNextPage = () => {
        setCurrentPage((prev) => Math.min(prev + 1, totalPages));
    };

    return (
        <section id="menu" className="py-16 md:py-20 bg-stone-950 relative overflow-hidden pb-28 md:pb-20">

            {/* Resplandor ambiental */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-150 h-150 bg-[#6d122c]/10 rounded-full blur-[160px] pointer-events-none" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

                {/* Cabecera */}
                <div className="flex flex-col items-center text-center mb-8 sm:mb-10 space-y-3">
                    <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#6d122c]/20 border border-[#881938]/50 text-rose-200 text-xs font-semibold uppercase tracking-widest shadow-sm">
                        <Utensils className="w-3.5 h-3.5 text-rose-300" />
                        <span>Nuestras Creaciones</span>
                    </div>

                    <h2 className="text-3xl sm:text-5xl font-black text-stone-100 font-sans tracking-tight">
                        Menú Artesanal
                    </h2>
                    <p className="text-stone-400 text-xs sm:text-sm md:text-base max-w-lg">
                        Explora nuestras especialidades preparadas al momento con masa de lenta fermentación e ingredientes selectos.
                    </p>
                </div>

                {/* Filtros por Categoría */}
                <div className="flex items-center justify-start sm:justify-center overflow-x-auto pb-4 sm:pb-0 gap-2 mb-8 sm:mb-10 no-scrollbar">
                    <button
                        onClick={() => handleCategoryChange('all')}
                        className={`relative px-4 sm:px-5 py-2 sm:py-2.5 rounded-full text-xs sm:text-sm font-bold tracking-wide whitespace-nowrap transition-colors duration-200 ${activeCategory === 'all'
                                ? 'text-white'
                                : 'text-stone-400 hover:text-stone-200 bg-stone-900/60 border border-stone-800'
                            }`}
                    >
                        {activeCategory === 'all' && (
                            <motion.div
                                layoutId="activeFilterPill"
                                className="absolute inset-0 bg-linear-to-r from-[#540e21] to-[#6d122c] rounded-full border border-[#881938] shadow-md shadow-[#6d122c]/30"
                                transition={{ type: 'spring', bounce: 0.2, duration: 0.3 }}
                            />
                        )}
                        <span className="relative z-10">Todo el Menú</span>
                    </button>

                    {categories.map((cat) => {
                        const isActive = activeCategory === cat.key;
                        return (
                            <button
                                key={cat.key}
                                onClick={() => handleCategoryChange(cat.key)}
                                className={`relative px-4 sm:px-5 py-2 sm:py-2.5 rounded-full text-xs sm:text-sm font-bold tracking-wide whitespace-nowrap transition-colors duration-200 ${isActive
                                        ? 'text-white'
                                        : 'text-stone-400 hover:text-stone-200 bg-stone-900/60 border border-stone-800'
                                    }`}
                            >
                                {isActive && (
                                    <motion.div
                                        layoutId="activeFilterPill"
                                        className="absolute inset-0 bg-linear-to-r from-[#540e21] to-[#6d122c] rounded-full border border-[#881938] shadow-md shadow-[#6d122c]/30"
                                        transition={{ type: 'spring', bounce: 0.2, duration: 0.3 }}
                                    />
                                )}
                                <span className="relative z-10">{cat.label}</span>
                            </button>
                        );
                    })}
                </div>

                {/* Cuadrícula */}
                <AnimatePresence mode="wait">
                    <motion.div
                        key={`${activeCategory}-${currentPage}`}
                        initial={{ opacity: 0, y: 8 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -8 }}
                        transition={{ duration: 0.25 }}
                        className="grid grid-cols-1 md:grid-cols-3 gap-3.5 sm:gap-6 min-h-85"
                    >
                        {currentItems.map((item) => (
                            <ProductCard
                                key={item.id}
                                item={item}
                                onSelect={(prod) => setSelectedProduct(prod)}
                            />
                        ))}
                    </motion.div>
                </AnimatePresence>

                {/* Paginación */}
                {totalPages > 1 && (
                    <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mt-8 sm:mt-10 pt-4 sm:pt-6 border-t border-stone-800/80">
                        <span className="text-xs text-stone-400 font-medium">
                            Mostrando <strong className="text-rose-500">{startIndex + 1}</strong> –{' '}
                            <strong className="text-rose-500">
                                {Math.min(startIndex + ITEMS_PER_PAGE, filteredItems.length)}
                            </strong>{' '}
                            de <strong className="text-stone-200">{filteredItems.length}</strong> platillos
                        </span>

                        <div className="flex items-center gap-3">
                            <button
                                onClick={handlePrevPage}
                                disabled={currentPage === 1}
                                className="p-2 sm:p-2.5 rounded-xl bg-stone-900 border border-stone-800 text-stone-300 hover:text-white hover:border-[#6d122c] disabled:opacity-30 disabled:pointer-events-none transition-all active:scale-95"
                                aria-label="Página anterior"
                            >
                                <ChevronLeft className="w-5 h-5" />
                            </button>

                            <div className="flex items-center gap-1.5 px-2">
                                {[...Array(totalPages)].map((_, i) => (
                                    <button
                                        key={i}
                                        onClick={() => setCurrentPage(i + 1)}
                                        className={`h-2 rounded-full transition-all duration-300 ${currentPage === i + 1
                                                ? 'w-6 bg-linear-to-r from-[#6d122c] to-[#881938]'
                                                : 'w-2 bg-stone-700 hover:bg-stone-500'
                                            }`}
                                        aria-label={`Ir a página ${i + 1}`}
                                    />
                                ))}
                            </div>

                            <button
                                onClick={handleNextPage}
                                disabled={currentPage === totalPages}
                                className="p-2 sm:p-2.5 rounded-xl bg-stone-900 border border-stone-800 text-stone-300 hover:text-white hover:border-[#6d122c] disabled:opacity-30 disabled:pointer-events-none transition-all active:scale-95"
                                aria-label="Página siguiente"
                            >
                                <ChevronRight className="w-5 h-5" />
                            </button>
                        </div>
                    </div>
                )}

            </div>

            {/* Modal */}
            <AnimatePresence>
                {selectedProduct && (
                    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/85 backdrop-blur-md">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9, y: 20 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.9, y: 20 }}
                            transition={{ duration: 0.2 }}
                            className="relative w-full max-w-lg bg-stone-900 border border-[#881938]/60 rounded-3xl overflow-hidden shadow-2xl shadow-black"
                        >
                            <button
                                onClick={() => setSelectedProduct(null)}
                                className="absolute top-4 right-4 z-20 p-2 rounded-full bg-stone-950/80 text-stone-300 hover:text-white border border-stone-700/60 backdrop-blur-sm transition-all"
                                aria-label="Cerrar modal"
                            >
                                <X className="w-5 h-5" />
                            </button>

                            <div className="relative w-full h-64 bg-stone-950">
                                <Image
                                    src={selectedProduct.image}
                                    alt={selectedProduct.name}
                                    fill
                                    sizes="(max-width: 768px) 100vw, 512px"
                                    className="object-cover"
                                />
                                <div className="absolute inset-0 bg-linear-to-t from-stone-900 via-transparent to-transparent" />

                                {selectedProduct.tag && (
                                    <div className="absolute top-4 left-4 bg-[#6d122c]/95 border border-[#881938] text-rose-100 text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full flex items-center gap-1.5 shadow-md">
                                        <Flame className="w-4 h-4 text-rose-200" />
                                        <span>{selectedProduct.tag}</span>
                                    </div>
                                )}
                            </div>

                            <div className="p-6 space-y-4">
                                <div className="flex items-start justify-between gap-4">
                                    <h3 className="text-2xl font-black text-stone-100 font-sans">
                                        {selectedProduct.name}
                                    </h3>
                                    <div className="text-xl font-black text-stone-100 whitespace-nowrap font-sans">
                                        ${selectedProduct.price} <span className="text-xs text-stone-400">MXN</span>
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <div className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-rose-200">
                                        <Sparkles className="w-3.5 h-3.5 text-rose-300" />
                                        <span>Receta & Preparación</span>
                                    </div>
                                    <p className="text-stone-300 text-sm leading-relaxed">
                                        {selectedProduct.description}
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                )}
            </AnimatePresence>
        </section>
    );
}