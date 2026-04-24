'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import ProjectModal from './ProjectModal';

const Projects = () => {
    const [selectedProject, setSelectedProject] = useState(null);

    const projects = [
        { 
            title: 'Web Design', 
            category: 'Portfolio', 
            image: '/project1.avif',
            problem: "Le client avait un site vitrine vieillissant, lent au chargement et peu adapté aux mobiles, ce qui entraînait un fort taux de rebond.",
            solution: "Refonte complète avec Next.js pour de meilleures performances (SSR/SSG), design responsive modernisé et animations fluides via Framer Motion.",
            impact: "Diminution du taux de rebond de 40%, augmentation de la durée moyenne des sessions et retours très positifs sur l'esthétique.",
            technologies: ['Next.js', 'Tailwind CSS', 'Framer Motion', 'Figma']
        },
        { 
            title: 'App Development', 
            category: 'Mobile App', 
            image: '/Projet 2.jpg',
            problem: "L'application existante souffrait de bugs fréquents et d'une interface peu intuitive, frustrant les utilisateurs réguliers.",
            solution: "Développement d'une nouvelle PWA avec React, intégration d'un state management robuste et refonte de l'UI/UX.",
            impact: "Augmentation de la rétention utilisateur de 25% et diminution drastique des tickets de support liés à des bugs d'interface.",
            technologies: ['React', 'Redux', 'PWA', 'Styled Components']
        },
        { 
            title: 'UI/UX Design', 
            category: 'Design System', 
            image: '/project3.png',
            problem: "Incohérence visuelle sur les différentes plateformes de l'entreprise, ralentissant le travail des développeurs et des designers.",
            solution: "Création d'un Design System complet sur Figma et implémentation d'une librairie de composants React réutilisables.",
            impact: "Réduction du temps de développement des nouvelles fonctionnalités de 30% et standardisation de l'identité visuelle.",
            technologies: ['Figma', 'React', 'Storybook', 'Tailwind CSS']
        },
        { 
            title: 'E-commerce', 
            category: 'Web App', 
            image: '/projet4.png',
            problem: "Parcours d'achat complexe et tunnel de conversion trop long, entraînant de nombreux abandons de panier.",
            solution: "Simplification du tunnel d'achat en une page (One-page checkout), intégration de Stripe et optimisation de la vitesse de recherche de produits.",
            impact: "Augmentation du taux de conversion de 18% et augmentation du panier moyen grâce aux suggestions ciblées.",
            technologies: ['Next.js', 'Stripe', 'Node.js', 'PostgreSQL']
        },
        { 
            title: 'Dashboard', 
            category: 'Analytics', 
            image: '/projet5.png',
            problem: "Les équipes métiers manquaient de visibilité sur leurs KPIs en temps réel, s'appuyant sur des rapports manuels hebdomadaires.",
            solution: "Création d'un tableau de bord dynamique connecté aux API internes avec des visualisations de données interactives (Recharts).",
            impact: "Gain de temps de 5h/semaine pour les analystes et prise de décision facilitée par l'accès aux données en temps réel.",
            technologies: ['React', 'Recharts', 'Material-UI', 'GraphQL']
        },
        { 
            title: 'Landing Page', 
            category: 'Marketing', 
            image: '/Projet 6.jpg',
            problem: "Besoin de lancer rapidement une page de capture de leads à fort taux de conversion pour une nouvelle campagne marketing.",
            solution: "Conception et développement rapide d'une landing page ultra-performante et optimisée pour l'A/B testing.",
            impact: "Acquisition de plus de 1500 leads qualifiés en 2 semaines avec un coût par acquisition réduit de 20%.",
            technologies: ['Next.js', 'Tailwind CSS', 'Framer Motion', 'HubSpot API']
        },
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.15,
                delayChildren: 0.1,
            },
        },
    };

    const projectVariants = {
        hidden: { opacity: 0, scale: 0.8 },
        visible: {
            opacity: 1,
            scale: 1,
            transition: { duration: 0.5, ease: "easeOut" },
        },
    };

    return (
        <>
            <section id="projects" className="py-12 md:py-16 bg-background relative border-b border-borderDark z-10 transition-colors duration-300">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        className="text-center mb-16"
                        initial={{ opacity: 0, y: -20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-3xl md:text-4xl font-bold text-textMain font-heading">
                            Mes <span className="text-primary">Projets</span>
                        </h2>
                    </motion.div>

                    <motion.div
                        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-100px" }}
                    >
                        {projects.map((project, index) => (
                            <motion.div
                                key={index}
                                variants={projectVariants}
                                className="group relative overflow-hidden rounded-xl bg-card border border-borderDark h-80 sm:h-[22rem] flex-shrink-0 cursor-pointer"
                                whileHover={{ y: -10 }}
                                onClick={() => setSelectedProject(project)}
                            >
                                {/* Project Image */}
                                <div className="absolute inset-1 sm:inset-1.5 rounded-lg overflow-hidden bg-background/30">
                                    <Image
                                        src={project.image}
                                        alt={project.title}
                                        fill
                                        className="object-cover object-top group-hover:scale-105 transition-transform duration-500"
                                        priority={false}
                                    />
                                </div>

                                {/* Overlay */}
                                <motion.div
                                    className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6"
                                    initial={{ opacity: 0 }}
                                    whileHover={{ opacity: 1 }}
                                    transition={{ duration: 0.3 }}
                                >
                                    <motion.h3
                                        className="text-xl font-bold text-white mb-1"
                                        initial={{ y: 10 }}
                                        whileHover={{ y: 0 }}
                                        transition={{ duration: 0.3 }}
                                    >
                                        {project.title}
                                    </motion.h3>
                                    <motion.p
                                        className="text-primary text-sm"
                                        initial={{ y: 10 }}
                                        whileHover={{ y: 0 }}
                                        transition={{ duration: 0.3, delay: 0.05 }}
                                    >
                                        {project.category}
                                    </motion.p>
                                    <motion.div
                                        className="mt-4 w-10 h-10 rounded-full bg-primary flex items-center justify-center"
                                        initial={{ y: 10 }}
                                        whileHover={{ y: 0, scale: 1.1 }}
                                        transition={{ duration: 0.3, delay: 0.1 }}
                                    >
                                        <span className="text-gray-900 font-bold">↗</span>
                                    </motion.div>
                                </motion.div>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>

            <ProjectModal 
                project={selectedProject} 
                isOpen={!!selectedProject} 
                onClose={() => setSelectedProject(null)} 
            />
        </>
    );
};

export default Projects;
