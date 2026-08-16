'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import {
    MapPin,
    UtensilsCrossed,
    Coffee,
    Home,
    Sparkles
} from 'lucide-react';

const navLinks = [
    { name: 'Inicio', href: '#hero', id: 'hero', icon: Home },
    { name: 'Menú', href: '#menu', id: 'menu', icon: UtensilsCrossed },
    { name: 'Cafetería', href: '#cafe', id: 'cafe', icon: Coffee },
    { name: 'Ubicación', href: '#location', id: 'location', icon: MapPin },
];

export default function Navbar() {
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
    const [activeTab, setActiveTab] = useState('Inicio');

    // Detección automática de sección activa al hacer scroll (Scroll Spy)
    useEffect(() => {
        const observerCallback: IntersectionObserverCallback = (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    const matchedLink = navLinks.find((link) => link.id === entry.target.id);
                    if (matchedLink) {
                        setActiveTab(matchedLink.name);
                    }
                }
            });
        };

        const observerOptions = {
            root: null,
            rootMargin: '-20% 0px -60% 0px', // Detecta la sección activa en el centro-superior del viewport
            threshold: 0,
        };

        const observer = new IntersectionObserver(observerCallback, observerOptions);

        navLinks.forEach((link) => {
            const element = document.getElementById(link.id);
            if (element) observer.observe(element);
        });

        return () => observer.disconnect();
    }, []);

    // Navegación suave garantizada al hacer clic
    const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string, name: string) => {
        e.preventDefault();
        setActiveTab(name);
        const targetId = href.replace('#', '');
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
            targetElement.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <>
            {/* Header Principal Superior */}
            <header className="sticky top-0 z-40 w-full bg-stone-950/85 backdrop-blur-xl border-b border-stone-800/60 transition-all">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-center md:justify-between h-20 sm:h-24">

                        {/* Logotipo Tipográfico */}
                        <Link
                            href="#hero"
                            onClick={(e) => handleNavClick(e, '#hero', 'Inicio')}
                            className="flex flex-col items-center md:items-start group select-none transition-transform active:scale-95 cursor-pointer"
                        >
                            <span
                                style={{ fontFamily: 'var(--font-script)' }}
                                className="text-4xl sm:text-5xl md:text-6xl text-stone-100 group-hover:text-[#6d122c] transition-colors leading-none tracking-wide -rotate-2 drop-shadow-md"
                            >
                                Ruta Uno
                            </span>
                            <span
                                style={{ fontFamily: 'var(--font-condensed)' }}
                                className="text-xs sm:text-sm tracking-[0.35em] text-stone-400 uppercase font-bold group-hover:text-stone-200 transition-colors -mt-1 md:-mt-2"
                            >
                                CAFÉ & PIZZA
                            </span>
                        </Link>

                        {/* Navegación Desktop */}
                        <nav className="hidden md:flex items-center gap-1 bg-stone-900/60 p-1.5 rounded-full border border-stone-800/80 shadow-inner">
                            {navLinks.map((link, index) => {
                                const isHovered = hoveredIndex === index;
                                const isActive = activeTab === link.name;

                                return (
                                    <Link
                                        key={link.name}
                                        href={link.href}
                                        onClick={(e) => handleNavClick(e, link.href, link.name)}
                                        onMouseEnter={() => setHoveredIndex(index)}
                                        onMouseLeave={() => setHoveredIndex(null)}
                                        className="relative px-6 py-2 text-sm font-medium transition-colors duration-200"
                                    >
                                        {isHovered && (
                                            <motion.div
                                                layoutId="navHover"
                                                className="absolute inset-0 bg-stone-800/90 rounded-full border border-[#881938]/60 shadow-sm"
                                                transition={{ type: 'spring', bounce: 0.25, duration: 0.3 }}
                                            />
                                        )}

                                        <span className={`relative z-10 transition-colors ${isActive
                                            ? 'text-rose-100 font-semibold'
                                            : isHovered
                                                ? 'text-stone-100'
                                                : 'text-stone-400'
                                            }`}>
                                            {link.name}
                                        </span>
                                    </Link>
                                );
                            })}
                        </nav>

                        {/* Ubicación Desktop */}
                        <div className="hidden md:flex items-center gap-2 text-xs text-stone-300 bg-stone-900/80 px-4 py-2 rounded-full border border-stone-800">
                            <Sparkles className="w-3.5 h-3.5 text-[#b82d4f] animate-spin" style={{ animationDuration: '8s' }} />
                            <span>Jardines de Agua Caliente, Tijuana</span>
                        </div>

                    </div>
                </div>
            </header>

            {/* Barra Rápida Móvil */}
            <nav className="md:hidden fixed bottom-3 left-4 right-4 z-40 bg-stone-900/95 backdrop-blur-xl border border-stone-800/80 rounded-2xl px-3 py-2 shadow-2xl shadow-black/80">
                <div className="flex justify-around items-center">
                    {navLinks.map((link) => {
                        const Icon = link.icon;
                        const isActive = activeTab === link.name;

                        return (
                            <Link
                                key={link.name}
                                href={link.href}
                                onClick={(e) => handleNavClick(e, link.href, link.name)}
                                className={`relative flex flex-col items-center gap-1 px-3 py-1.5 rounded-xl transition-all duration-200 ${isActive ? 'text-rose-100 font-bold' : 'text-stone-400 hover:text-stone-200'
                                    }`}
                            >
                                {isActive && (
                                    <motion.div
                                        layoutId="mobileActiveTab"
                                        className="absolute inset-0 bg-linear-to-r from-[#540e21]/40 to-[#6d122c]/40 rounded-xl border border-[#881938]/60"
                                        transition={{ type: 'spring', bounce: 0.2, duration: 0.3 }}
                                    />
                                )}
                                <Icon className={`w-5 h-5 relative z-10 ${isActive ? 'scale-110 text-rose-100' : ''} transition-transform`} />
                                <span className="text-[10px] font-medium tracking-tight relative z-10">
                                    {link.name}
                                </span>
                            </Link>
                        );
                    })}
                </div>
            </nav>
        </>
    );
}