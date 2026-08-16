'use client';

import { MapPin, Clock, Navigation, ExternalLink, Sparkles } from 'lucide-react';

const schedule = [
    { days: 'Lunes a Jueves', hours: '1:00 PM – 10:00 PM' },
    { days: 'Viernes y Sábado', hours: '1:00 PM – 11:00 PM' },
    { days: 'Domingo', hours: '1:00 PM – 10:00 PM' },
];

export default function LocationSection() {
    const mapsDirectUrl = "https://maps.app.goo.gl/9P8yqN3aM5sK6w9M8";

    return (
        <section id="location" className="py-16 md:py-24 bg-stone-950 relative overflow-hidden">

            {/* Resplandor ambiental */}
            <div className="absolute top-1/2 right-10 w-96 h-96 bg-[#6d122c]/15 rounded-full blur-[150px] pointer-events-none" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

                {/* Cabecera */}
                <div className="flex flex-col items-center text-center mb-12 space-y-3">
                    <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#6d122c]/20 border border-[#881938]/50 text-rose-200 text-xs font-semibold uppercase tracking-widest shadow-sm">
                        <MapPin className="w-3.5 h-3.5 text-rose-300" />
                        <span>Visítanos en Tijuana</span>
                    </div>

                    <h2 className="text-3xl sm:text-5xl font-black text-stone-100 font-sans tracking-tight">
                        Sucursal & Horarios
                    </h2>
                    <p className="text-stone-400 text-xs sm:text-sm md:text-base max-w-lg">
                        Ven a disfrutar de una pizza recién horneada y café de especialidad en un ambiente rústico y acogedor.
                    </p>
                </div>

                {/* Contenedor Principal en Cuadrícula */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">

                    {/* Columna Izquierda: Información & Horarios */}
                    <div className="lg:col-span-5 flex flex-col justify-between space-y-6">

                        {/* Tarjeta de Dirección */}
                        <div className="bg-stone-900/80 border border-stone-800/80 rounded-3xl p-6 sm:p-8 backdrop-blur-sm space-y-4 shadow-xl">
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 rounded-2xl bg-[#6d122c]/30 border border-[#881938]/60 flex items-center justify-center text-rose-200">
                                    <Navigation className="w-5 h-5" />
                                </div>
                                <div>
                                    <h3 className="text-lg font-bold text-stone-100">Ubicación</h3>
                                    <p className="text-xs text-[#b82d4f] font-semibold uppercase tracking-wider">Jardines de Agua Caliente</p>
                                </div>
                            </div>

                            <p className="text-stone-300 text-sm leading-relaxed">
                                Libramiento Oriente #6237, Jardines de Agua Caliente, 22194 Tijuana, B.C., México.
                            </p>

                            <a
                                href="https://maps.google.com/?q=Ruta+Uno+Cafe+y+Pizza+Tijuana"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 text-xs font-bold text-rose-200 hover:text-white transition-colors group"
                            >
                                <span>Abrir en Google Maps</span>
                                <ExternalLink className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                            </a>
                        </div>

                        {/* Tarjeta de Horarios */}
                        <div className="bg-stone-900/80 border border-stone-800/80 rounded-3xl p-6 sm:p-8 backdrop-blur-sm space-y-4 shadow-xl flex-1 flex flex-col justify-between">
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 rounded-2xl bg-[#6d122c]/30 border border-[#881938]/60 flex items-center justify-center text-rose-200">
                                    <Clock className="w-5 h-5" />
                                </div>
                                <div>
                                    <h3 className="text-lg font-bold text-stone-100">Horarios de Atención</h3>
                                    <p className="text-xs text-stone-400 font-medium">Servicio en comedor y para llevar</p>
                                </div>
                            </div>

                            <div className="space-y-3 pt-2">
                                {schedule.map((item, index) => (
                                    <div
                                        key={index}
                                        className="flex items-center justify-between py-2 border-b border-stone-800/60 last:border-0 text-sm"
                                    >
                                        <span className="text-stone-300 font-medium">{item.days}</span>
                                        <span className="text-stone-100 font-mono font-semibold">{item.hours}</span>
                                    </div>
                                ))}
                            </div>

                            <div className="pt-2">
                                <div className="flex items-center gap-2 text-xs text-stone-400 bg-stone-950/60 px-4 py-2.5 rounded-2xl border border-stone-800">
                                    <Sparkles className="w-4 h-4 text-[#b82d4f] shrink-0" />
                                    <span>Masa fresca horneada diariamente en cada turno.</span>
                                </div>
                            </div>
                        </div>

                    </div>

                    {/* Columna Derecha: Mapa de Google Maps Embebido */}
                    <div className="lg:col-span-7 min-h-95 lg:min-h-full rounded-3xl overflow-hidden border border-stone-800 bg-stone-900 shadow-2xl relative">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13460.418517401873!2d-116.99583559471095!3d32.49663255188591!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80d939fb901ce07f%3A0xdeaea78fd40563e7!2sRuta%20Uno%20Caf%C3%A9%20y%20Pizza!5e0!3m2!1ses-419!2smx!4v1786916688077!5m2!1ses-419!2smx"
                            width="100%"
                            height="100%"
                            className="w-full h-full min-h-95 lg:min-h-115 border-0 grayscale-25 contrast-110 hover:grayscale-0 transition-all duration-500"
                            allowFullScreen
                            loading="lazy"
                            referrerPolicy="strict-origin-when-cross-origin"
                        />
                    </div>

                </div>

            </div>
        </section>
    );
}