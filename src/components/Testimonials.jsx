'use client';

import React, { useRef, useEffect } from 'react';
import { motion, useInView } from 'framer-motion';

const testimonials = [
    {
        name: "Hyacinthe MANDELA",
        role: "Chef de Projet Digital",
        company: "TechCorp",
        text: "Ben a complètement transformé notre interface utilisateur. Son attention aux détails et son expertise sur Next.js ont permis de doubler nos conversions sur mobile.",
        image: "/Hycenthe MANDELA.jpg"
    },
    {
        name: "Jean Pierre SAIDI",
        role: "Expert en qualification professionnelle",
        company: "RESICO/GIZ-RDC",
        text: "Un vrai plaisir de travailler avec Ben. Son code est propre, bien structuré et les animations qu'il a intégrées apportent une vraie valeur ajoutée au produit.",
        image: "/Jean Pierre SAIDI.jpg"
    },
    {
        name: "Noella BULONZA",
        role: "Directrice Marketing",
        company: "E-com Solutions",
        text: "La refonte de notre plateforme a été un succès total. Ben a su comprendre nos enjeux business et les traduire en une expérience utilisateur fluide et moderne.",
        image: "/Nella BULANZA.png"
    },
    {
        name: "Prud ZIHALIRWA",
        role: "CIO",
        company: "Afrix Global",
        text: "Une collaboration exceptionnelle. Ben ne fait pas que coder, il apporte une véritable vision produit qui fait la différence sur le marché actuel.",
        image: "/Prud ZIHALIRWA.jpeg"
    }
];

const Testimonials = () => {
    const containerRef = useRef(null);
    const isInView = useInView(containerRef, { once: true, margin: "-50px" });

    // Auto-scroll logique
    useEffect(() => {
        const interval = setInterval(() => {
            if (containerRef.current) {
                const { scrollLeft, scrollWidth, clientWidth } = containerRef.current;
                
                // Si on a atteint la fin (avec une petite marge d'erreur de 10px)
                if (scrollLeft + clientWidth >= scrollWidth - 10) {
                    // Revenir au début
                    containerRef.current.scrollTo({ left: 0, behavior: 'smooth' });
                } else {
                    // Obtenir la largeur d'une carte (enfant) pour défiler d'une carte à la fois
                    const firstChild = containerRef.current.children[0];
                    const scrollAmount = firstChild ? firstChild.offsetWidth + 24 : 450; // 24 = gap-6 (1.5rem)
                    
                    containerRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
                }
            }
        }, 4000); // Défilement toutes les 4 secondes

        return () => clearInterval(interval);
    }, []);

    return (
        <section id="testimonials" className="py-16 md:py-24 bg-card/30 relative border-b border-borderDark z-10 overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    className="text-center mb-16"
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                >
                    <h2 className="text-3xl md:text-4xl font-bold text-textMain font-heading">
                        Ce qu&apos;ils <span className="text-primary">disent de mes oeuvres</span>
                    </h2>
                    <p className="mt-4 text-textMuted max-w-2xl mx-auto">
                        Retours d&apos;expérience de mes collaborateurs et clients. Faites glisser pour en voir plus.
                    </p>
                </motion.div>

                <div className="relative">
                    <motion.div 
                        ref={containerRef}
                        initial={{ opacity: 0, x: 50 }}
                        animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="flex overflow-x-auto gap-6 pb-12 snap-x snap-mandatory [&::-webkit-scrollbar]:hidden items-stretch"
                        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none', scrollPaddingLeft: '50%' }}
                    >
                        {testimonials.map((testimonial, index) => (
                            <div
                                key={index}
                                className="flex-none w-[320px] sm:w-[450px] lg:w-[480px] h-auto bg-card rounded-2xl border border-borderDark flex flex-col sm:flex-row overflow-hidden snap-center hover:border-primary/50 hover:shadow-xl transition-all duration-300"
                            >
                                {/* Image section */}
                                <div className="w-full sm:w-2/5 h-72 sm:h-auto relative shrink-0">
                                    <img 
                                        src={testimonial.image} 
                                        alt={testimonial.name} 
                                        className="w-full h-full object-cover object-top" 
                                        loading="lazy"
                                    />
                                </div>
                                
                                {/* Text section */}
                                <div className="w-full sm:w-3/5 p-6 flex flex-col justify-between relative bg-card">
                                    {/* Quote mark decoration */}
                                    <div className="absolute top-4 right-4 text-primary/10 text-6xl font-serif leading-none select-none pointer-events-none">
                                        &quot;
                                    </div>
                                    
                                    <p className="text-textMuted italic mb-6 text-sm leading-relaxed relative z-10">
                                        &quot;{testimonial.text}&quot;
                                    </p>
                                    
                                    <div className="relative z-10 border-t border-borderDark/50 pt-4 mt-auto">
                                        <h4 className="text-textMain font-bold text-lg">{testimonial.name}</h4>
                                        <p className="text-xs text-textMuted mt-1">{testimonial.role}</p>
                                        <p className="text-xs text-primary mt-0.5">{testimonial.company}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
