export const projectsData = [
    { 
        id: 1,
        slug: 'web-design',
        title: 'Web Design', 
        category: 'Portfolio', 
        image: '/project1.avif',
        problem: "Le client avait un site vitrine vieillissant, lent au chargement et peu adapté aux mobiles, ce qui entraînait un fort taux de rebond.",
        solution: "Refonte complète avec Next.js pour de meilleures performances (SSR/SSG), design responsive modernisé et animations fluides via Framer Motion.",
        impact: "Diminution du taux de rebond de 40%, augmentation de la durée moyenne des sessions et retours très positifs sur l'esthétique.",
        technologies: ['Next.js', 'Tailwind CSS', 'Framer Motion', 'Figma']
    },
    { 
        id: 2,
        slug: 'app-development',
        title: 'App Development', 
        category: 'Mobile App', 
        image: '/projet-2.jpg',
        problem: "L'application existante souffrait de bugs fréquents et d'une interface peu intuitive, frustrant les utilisateurs réguliers.",
        solution: "Développement d'une nouvelle PWA avec React, intégration d'un state management robuste et refonte de l'UI/UX.",
        impact: "Augmentation de la rétention utilisateur de 25% et diminution drastique des tickets de support liés à des bugs d'interface.",
        technologies: ['React', 'Redux', 'PWA', 'Styled Components']
    },
    { 
        id: 3,
        slug: 'ui-ux-design',
        title: 'UI/UX Design', 
        category: 'Design System', 
        image: '/project3.png',
        problem: "Incohérence visuelle sur les différentes plateformes de l'entreprise, ralentissant le travail des développeurs et des designers.",
        solution: "Création d'un Design System complet sur Figma et implémentation d'une librairie de composants React réutilisables.",
        impact: "Réduction du temps de développement des nouvelles fonctionnalités de 30% et standardisation de l'identité visuelle.",
        technologies: ['Figma', 'React', 'Storybook', 'Tailwind CSS']
    },
    { 
        id: 4,
        slug: 'e-commerce',
        title: 'E-commerce', 
        category: 'Web App', 
        image: '/projet4.png',
        problem: "Parcours d'achat complexe et tunnel de conversion trop long, entraînant de nombreux abandons de panier.",
        solution: "Simplification du tunnel d'achat en une page (One-page checkout), intégration de Stripe et optimisation de la vitesse de recherche de produits.",
        impact: "Augmentation du taux de conversion de 18% et augmentation du panier moyen grâce aux suggestions ciblées.",
        technologies: ['Next.js', 'Stripe', 'Node.js', 'PostgreSQL']
    },
    { 
        id: 5,
        slug: 'dashboard',
        title: 'Dashboard', 
        category: 'Analytics', 
        image: '/projet5.png',
        problem: "Les équipes métiers manquaient de visibilité sur leurs KPIs en temps réel, s'appuyant sur des rapports manuels hebdomadaires.",
        solution: "Création d'un tableau de bord dynamique connecté aux API internes avec des visualisations de données interactives (Recharts).",
        impact: "Gain de temps de 5h/semaine pour les analystes et prise de décision facilitée par l'accès aux données en temps réel.",
        technologies: ['React', 'Recharts', 'Material-UI', 'GraphQL']
    },
    { 
        id: 6,
        slug: 'landing-page',
        title: 'Landing Page', 
        category: 'Marketing', 
        image: '/projet-6.jpg',
        problem: "Besoin de lancer rapidement une page de capture de leads à fort taux de conversion pour une nouvelle campagne marketing.",
        solution: "Conception et développement rapide d'une landing page ultra-performante et optimisée pour l'A/B testing.",
        impact: "Acquisition de plus de 1500 leads qualifiés en 2 semaines avec un coût par acquisition réduit de 20%.",
        technologies: ['Next.js', 'Tailwind CSS', 'Framer Motion', 'HubSpot API']
    },
];
