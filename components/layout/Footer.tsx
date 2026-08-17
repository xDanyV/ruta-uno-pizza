'use client';

import Image from 'next/image';
import Link from 'next/link';
import {
    PhoneCall,
    MapPin,
    Clock,
    ArrowUp
} from 'lucide-react';

const footerLinks = [
    { name: 'Inicio', href: '#hero' },
    { name: 'Menú Artesanal', href: '#menu' },
    { name: 'Cafetería', href: '#cafe' },
    { name: 'Ubicación & Horarios', href: '#location' },
];

function InstagramIcon({ className = "w-5 h-5" }: { className?: string }) {
    return (
        <svg
            className={className}
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
            <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
            <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
        </svg>
    );
}

function FacebookIcon({ className = "w-5 h-5" }: { className?: string }) {
    return (
        <svg
            className={className}
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
        </svg>
    );
}

export default function Footer() {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <footer className="bg-stone-950 border-t border-stone-900 relative overflow-hidden pb-20 md:pb-8 pt-16">

            {/* Resplandor ambiental inferior */}
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-125 h-48 bg-(--brand-base)/10 rounded-full blur-[140px] pointer-events-none" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-10 lg:gap-12 pb-12 border-b border-stone-900">

                    {/* Columna 1: Logotipo Circular */}
                    <div className="md:col-span-4 flex flex-col items-center md:items-start text-center md:text-left space-y-4">
                        <div className="relative w-36 h-36 sm:w-40 sm:h-40 rounded-full p-1 bg-linear-to-b from-(--brand-base)/40 to-stone-900 border border-(--brand-border)/40 shadow-2xl shadow-(--brand-base)/20">
                            <Image
                                src="/images/logo.jpg"
                                alt="Ruta Uno Café y Pizza Tijuana"
                                fill
                                className="object-cover rounded-full p-1"
                                sizes="160px"
                            />
                        </div>

                        <div className="pt-1">
                            <span
                                style={{ fontFamily: 'var(--font-script)' }}
                                className="text-3xl text-stone-100 block leading-tight"
                            >
                                Ruta Uno
                            </span>
                            <span
                                style={{ fontFamily: 'var(--font-condensed)' }}
                                className="text-xs tracking-[0.25em] text-stone-400 uppercase font-bold"
                            >
                                Café & Pizza Artesanal
                            </span>
                        </div>
                    </div>

                    {/* Columna 2: Navegación Rápida */}
                    <div className="md:col-span-3 flex flex-col items-center md:items-start space-y-3">
                        <h4 className="text-sm font-bold uppercase tracking-wider text-stone-200">
                            Explorar
                        </h4>
                        <ul className="space-y-2.5 text-center md:text-left">
                            {footerLinks.map((link) => (
                                <li key={link.name}>
                                    <Link
                                        href={link.href}
                                        className="text-xs sm:text-sm text-stone-400 hover:text-rose-200 transition-colors"
                                    >
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Columna 3: Teléfono Directo, Apps de Envío y Redes */}
                    <div className="md:col-span-5 flex flex-col items-center md:items-start space-y-4">
                        <h4 className="text-sm font-bold uppercase tracking-wider text-stone-200">
                            Pedidos & Contacto
                        </h4>

                        {/* Casilla de Llamada Directa */}
                        <a
                            href="tel:+526649778473"
                            className="w-full sm:w-auto inline-flex items-center gap-3 px-5 py-3 rounded-2xl bg-stone-900/90 border border-stone-800 hover:border-(--brand-border) text-stone-200 hover:text-white transition-all shadow-lg hover:shadow-(--brand-base)/20 group active:scale-95 cursor-pointer"
                        >
                            <div className="w-9 h-9 rounded-xl bg-(--brand-base)/30 border border-(--brand-border)/60 flex items-center justify-center text-rose-200 group-hover:bg-(--brand-base)/50 transition-colors">
                                <PhoneCall className="w-4 h-4" />
                            </div>
                            <div className="text-left">
                                <span className="text-[10px] text-stone-400 block uppercase tracking-wider font-semibold">
                                    Llamar a sucursal
                                </span>
                                <span className="text-sm sm:text-base font-mono font-bold text-stone-100 group-hover:text-rose-200 transition-colors">
                                    +52 (664) 977-8473
                                </span>
                            </div>
                        </a>

                        {/* Pide por Apps de Delivery */}
                        <div className="w-full pt-1 space-y-2 text-center md:text-left">
                            <span className="text-[11px] font-semibold uppercase tracking-wider text-stone-400 block">
                                Pide a domicilio en:
                            </span>
                            <div className="flex flex-wrap items-center justify-center md:justify-start gap-2.5">
                                <a
                                    href="https://www.ubereats.com"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-stone-900/80 hover:bg-stone-800 border border-stone-800 hover:border-emerald-500/40 text-stone-300 hover:text-emerald-400 text-xs font-semibold transition-all active:scale-95 shadow-sm"
                                >
                                    <span className="w-2 h-2 rounded-full bg-emerald-400" />
                                    <span>Uber Eats</span>
                                </a>

                                <a
                                    href="https://www.rappi.com.mx"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-stone-900/80 hover:bg-stone-800 border border-stone-800 hover:border-orange-500/40 text-stone-300 hover:text-orange-400 text-xs font-semibold transition-all active:scale-95 shadow-sm"
                                >
                                    <span className="w-2 h-2 rounded-full bg-orange-500" />
                                    <span>Rappi</span>
                                </a>
                            </div>
                        </div>

                        {/* Redes Sociales y Datos de Sucursal */}
                        <div className="flex items-center gap-3 pt-2">
                            <a
                                href="https://www.instagram.com/rutaunotj/"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="Instagram Ruta Uno"
                                className="w-10 h-10 rounded-2xl bg-stone-900 border border-stone-800 flex items-center justify-center text-stone-300 hover:text-rose-400 hover:border-rose-500/40 hover:bg-stone-900/80 transition-all active:scale-95 shadow-md"
                            >
                                <InstagramIcon className="w-5 h-5" />
                            </a>

                            <a
                                href="https://www.facebook.com/RutaUnoTijuana/"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="Facebook Ruta Uno"
                                className="w-10 h-10 rounded-2xl bg-stone-900 border border-stone-800 flex items-center justify-center text-stone-300 hover:text-blue-400 hover:border-blue-500/40 hover:bg-stone-900/80 transition-all active:scale-95 shadow-md"
                            >
                                <FacebookIcon className="w-5 h-5" />
                            </a>
                        </div>

                        <div className="space-y-1 pt-1 text-xs text-stone-400 text-center md:text-left">
                            <div className="flex items-center justify-center md:justify-start gap-1.5">
                                <MapPin className="w-3.5 h-3.5 text-(--brand-accent) shrink-0" />
                                <span>Jardines de Agua Caliente, Tijuana</span>
                            </div>
                            <div className="flex items-center justify-center md:justify-start gap-1.5">
                                <Clock className="w-3.5 h-3.5 text-(--brand-accent) shrink-0" />
                                <span>Abierto todos los días desde la 1:00 PM</span>
                            </div>
                        </div>
                    </div>

                </div>

                {/* Fila Inferior */}
                <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-stone-500">
                    <p>© 2026 Ruta Uno Café & Pizza. Todos los derechos reservados.</p>

                    <button
                        onClick={scrollToTop}
                        className="inline-flex items-center gap-1.5 text-stone-400 hover:text-rose-200 transition-colors cursor-pointer group"
                    >
                        <span>Volver arriba</span>
                        <ArrowUp className="w-3.5 h-3.5 group-hover:-translate-y-0.5 transition-transform" />
                    </button>
                </div>

            </div>
        </footer>
    );
}