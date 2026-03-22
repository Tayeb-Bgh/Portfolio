const translations = {
  fr: {
    nav: {
      about: "Parcours",
      projects: "Projets",
      skills: "Compétences",
    },

    hero: {
      subtitle:
        "Étudiant en informatique\nJe conçois et déploie des applications full-stack\ndu code à l'infrastructure.",
        cta: "Découvrir mon parcours →",
    },

    about: {
      sectionTitle: "Mon Parcours",
      cta: "Voir mes projets →",
      rankLabel: (rank, total) =>
        `🏆 Classé ${rank}e dans une promotion de ${total} étudiants`,
    },

    projects: {
      sectionTitle: "Projets",
      subtitle: "Une sélection de projets personnels et académiques",
      viewBtn: "Voir le projet",
      previewSoon: "Aperçu bientôt disponible",
      inProgress: "🚧 En cours",
    },

    projectPage: {
      backBtn: "← Tous les projets",
      prevLabel: "← Précédent",
      nextLabel: "Suivant →",
      screenshotSoon: "Captures d'écran bientôt disponibles",
      sectionStack: "Stack",
      sectionCategory: "Catégorie",
      sectionType: "Type",
      sectionStatus: "Statut",
      sectionLinks: "Liens",
      statusCompleted: "✓ Terminé",
      statusWip: "🚧 En cours",
      wipBadge: "🚧 En cours de développement",
      visitWebsite: "🌐 Voir le site",
      viewLive: "Voir en ligne",
    },

    footer: {
      rights: "Tous droits réservés.",
      builtWith: "Fait avec React",
      contact: "Me contacter",
    },

    projectsData: {
      quickliv: {
        tagline: "Rapide. Local. Livraison intelligente.",
        overview:
          "QuickLiv est une application mobile full-stack de commande et livraison de produits alimentaires, développée comme projet de fin d'études. Elle connecte clients, livreurs et marchands sur une seule plateforme, avec un accent sur le suivi en temps réel, l'authentification sécurisée et la logistique intelligente.",
        sections: [
          {
            heading: "Architecture",
            body: "Deux applications Flutter distinctes (une pour les clients, une pour les livreurs) toutes deux construites sur une architecture Clean pour la maintenabilité et la testabilité sur Android et iOS. Le backend est une API REST Node.js/Express adossée à PostgreSQL couvrant 16 tables relationnelles. Des diagrammes UML (cas d'utilisation, séquence, classes) ont été produits suivant la méthode du Processus Unifié.",
          },
          {
            heading: "Fonctionnalités clés",
            items: [
              { label: "Suivi en temps réel", text: "Socket.IO couplé au SDK Google Maps permet au client de voir la position GPS du livreur se mettre à jour en direct, de la prise en charge jusqu'à la livraison." },
              { label: "Affectation de véhicule par IA", text: "L'API Mistral AI analyse le poids et le volume de chaque commande pour affecter automatiquement le bon type de véhicule (scooter ou voiture) et dispatcher le livreur disponible le plus proche." },
              { label: "OTP via bot Telegram", text: "L'authentification repose sur JWT combiné à un bot Telegram custom pour la livraison de l'OTP 2FA, sécurisé et gratuit, sans opérateur SMS." },
              { label: "Multi-paniers", text: "Jusqu'à 5 paniers simultanés (un par marchand) persistés entre les sessions. Chaque panier est suivi et commandé indépendamment." },
              { label: "Fidélité et coupons", text: "Les points s'accumulent à chaque commande et peuvent être échangés contre des coupons de réduction sur la livraison (30 %, 60 % ou 100 %) via une boutique intégrée." },
            ],
          },
        ],
      },
      hestia: {
        tagline: "Gestion complète des prestations, du contrat à la facture.",
        overview:
          "Hestia Manager est un ERP complet développé pour une société de facility management (Hestia Solutions DZ) gérant des prestations de nettoyage, sécurité, maintenance et jardinage pour des résidences et entreprises. Un site vitrine institutionnel a été livré en parallèle.",
        sections: [
          {
            heading: "Système de contrats",
            body: "L'application gère deux types de contrats fondamentalement différents. Les **contrats longue durée** couvrent des prestations récurrentes (sécurité bâtiment, maintenance ascenseur, nettoyage, jardinage) pour résidences et entreprises. Les **contrats courte durée** couvrent des interventions ponctuelles (nettoyage à domicile, tonte, désinfection) pour des particuliers.",
          },
          {
            heading: "Gestion budgétaire",
            body: "Chaque contrat longue durée dispose d'un budget prévisionnel détaillé tâche par tâche avant le début de la prestation. Les dépenses réelles (salaires, matériaux, équipements) sont saisies au fil du temps et liées à un site client précis. Le revenu net est calculé en temps réel par comparaison entre dépenses réelles et prévisionnelles, isolées par site.",
          },
          {
            heading: "Fonctionnalités clés",
            items: [
              { label: "RBAC", text: "Le gérant contrôle précisément quelles fonctionnalités chaque compte employé peut utiliser. Les administrateurs de site ont des comptes restreints limités à leur résidence." },
              { label: "Signalement d'anomalies", text: "Les admins de site saisissent les incidents terrain (ex. ascenseur en panne) depuis leur interface restreinte. Les alertes remontent au gestionnaire principal pour intervention rapide." },
              { label: "Suivi des loyers", text: "Pour les contrats de résidence, les admins de site collectent et enregistrent les paiements mensuels des locataires. Le système suit les soldes, génère des alertes de retard et conserve l'historique complet." },
              { label: "Gestion du personnel", text: "Dossiers complets des employés avec suivi des salaires, génération de fiches de paie et affectation à des contrats ou sites spécifiques." },
            ],
          },
          {
            heading: "Déploiement",
            body: "Application desktop Windows native via le framework Proton (.exe). Frontend React, API Express.js, données PostgreSQL. Le site vitrine (Next.js) est en ligne sur hestiasolutionsdz.com.",
          },
        ],
      },
      taalim: {
        tagline: "Tout ce dont un tuteur privé a besoin, en une appli légère.",
        overview:
          "Une application web full-stack pour gérer les séances de tutorat privé de bout en bout. Conçue pour être légère et facile à auto-héberger : backend SQLite, API Express simple, aucune infrastructure lourde requise.",
        sections: [
          {
            heading: "Fonctionnalités",
            items: [
              { label: "Gestion des séances et groupes", text: "Organisez les étudiants en groupes, planifiez les séances et suivez la présence, tout au même endroit." },
              { label: "Paiements et analytiques", text: "Suivez le statut des paiements par étudiant et visualisez les revenus via un tableau de bord avec statistiques mensuelles, historique et prévisions." },
              { label: "Déploiement facile", text: "Fonctionne en local ou sur n'importe quel petit serveur sans configuration particulière." },
            ],
          },
        ],
      },
      locaflow: {
        tagline: "Le cycle complet de location, géré en un seul endroit.",
        overview:
          "Un système complet de gestion de location de voitures couvrant l'intégralité du flux, de l'enregistrement client et du suivi véhicule jusqu'à la génération de contrats et la réconciliation des paiements. Application desktop construite sur MVC avec JavaFX et MySQL.",
        sections: [
          {
            heading: "Fonctionnalités",
            items: [
              { label: "Gestion clients, véhicules et employés", text: "Dossiers centralisés pour tous les clients, véhicules avec statut de disponibilité en temps réel, et employés." },
              { label: "Contrats et paiements", text: "Créez et gérez des contrats de location avec suivi automatique des paiements par client et par contrat." },
              { label: "Notifications intelligentes", text: "Alertes automatiques pour les visites techniques et expirations d'assurance à venir." },
              { label: "Tableau de bord mensuel", text: "Calculs de revenus intégrés pour suivre la performance mensuelle en un coup d'œil." },
            ],
          },
        ],
      },
      homelab: {
        tagline: "Comprendre ce qui se passe vraiment au niveau du système.",
        overview:
          "Projet personnel en cours : transformer un ancien PC portable en serveur dédié headless sous Linux. L'objectif est de comprendre concrètement le fonctionnement d'une infrastructure, plutôt que de s'appuyer sur des plateformes PaaS qui automatisent tout sans rien expliquer.",
        sections: [
          {
            heading: "Ce qui est en place",
            items: [
              { label: "Serveur headless", text: "PC portable reconverti en serveur dédié sous Debian, géré entièrement en ligne de commande via SSH." },
              { label: "Réseau local", text: "Configuration du réseau local et mise en place d'un accès distant sécurisé." },
              { label: "Conteneurisation", text: "Déploiement des applications via Docker pour isoler et sécuriser les environnements." },
              { label: "Reverse proxy", text: "Nginx configuré comme reverse proxy pour la gestion des noms de domaine et des certificats SSL (HTTPS)." },
              { label: "Sécurité", text: "Pare-feu UFW pour restreindre le trafic entrant." },
            ],
          },
          {
            heading: "En cours",
            body: "Mise en place d'un système de sauvegardes automatisées pour garantir la résilience des données.",
          },
        ],
      },
      pong: {
        tagline: "Règles classiques. Chaos personnalisé.",
        overview:
          "Une réimplémentation fidèle mais enrichie de Pong, construite en C avec la bibliothèque graphique Raylib lors de ma première année d'université. C'est mon premier vrai plongeon dans la pensée algorithmique et l'architecture de boucle de jeu.",
        sections: [
          {
            heading: "Modes de jeu",
            items: [
              { label: "Standard", text: "Règles classiques du Pong : deux raquettes, une balle, le premier au score limite gagne." },
              { label: "Personnalisé", text: "Trois obstacles aléatoires apparaissent au centre du terrain 5 secondes après le début. Chaque joueur dispose de 3 ralentisseurs pour réduire stratégiquement la vitesse de la balle." },
            ],
          },
          {
            heading: "Détails techniques",
            body: "Système de rebond personnalisé avec réflexion basée sur l'angle d'impact sur la raquette, créant des trajectoires dynamiques. Les deux modes supportent un multijoueur local à deux avec des touches dédiées à chaque joueur.",
          },
        ],
      },
      snake: {
        tagline: "Du C au C++ : apprendre la POO par la pratique.",
        overview:
          "Une implémentation propre et efficace de Snake construite en C++ avec Raylib lors de ma première année. Principalement un exercice pour comprendre les différences fondamentales entre C et C++, des patrons de conception orienté objet à la gestion de la mémoire.",
        sections: [
          {
            heading: "Objectifs",
            items: [
              { label: "Exploration C vs C++", text: "Structuré délibérément pour mettre en évidence les concepts POO comme les classes et l'encapsulation, en contraste avec l'approche procédurale du projet Pong." },
              { label: "Contrôles fluides", text: "Gestion des entrées indépendante du taux de rafraîchissement pour un mouvement précis et réactif." },
            ],
          },
        ],
      },
    },
  },

  en: {
    nav: {
      about: "About",
      projects: "Projects",
      skills: "Skills",
    },

    hero: {
      subtitle:
        "Computer Science undergraduate student\nPassionate about software design and development\nwith a focus on creating efficient and reliable solutions.",
      cta: "Discover my journey →",
    },

    about: {
      sectionTitle: "My Journey",
      cta: "View my projects →",
      rankLabel: (rank, total) =>
        `🏆 Ranked ${rank}${rank === 1 ? "st" : rank === 2 ? "nd" : rank === 3 ? "rd" : "th"} out of ${total} students`,
    },

    projects: {
      sectionTitle: "Projects",
      subtitle: "A selection of personal and academic projects",
      viewBtn: "View Project",
      previewSoon: "Preview coming soon",
      inProgress: "🚧 In Progress",
    },

    projectPage: {
      backBtn: "← All Projects",
      prevLabel: "← Previous",
      nextLabel: "Next →",
      screenshotSoon: "Screenshots coming soon",
      sectionStack: "Stack",
      sectionCategory: "Category",
      sectionType: "Type",
      sectionStatus: "Status",
      sectionLinks: "Links",
      statusCompleted: "✓ Completed",
      statusWip: "🚧 In Progress",
      wipBadge: "🚧 Work in Progress",
      visitWebsite: "🌐 Visit Website",
      viewLive: "View Live",
    },

    footer: {
      rights: "All rights reserved.",
      builtWith: "Built with React",
      contact: "Contact me",
    },

    projectsData: {
      quickliv: {
        tagline: "Fast. Local. Intelligent food delivery.",
        overview:
          "QuickLiv is a full-stack mobile application for ordering and delivering food products, built as a final-year university project. It connects clients, delivery drivers, and merchants on a single platform, with a focus on real-time tracking, secure authentication, and smart logistics.",
        sections: [
          {
            heading: "Architecture",
            body: "Two distinct Flutter apps (one for clients, one for delivery drivers) both built on Clean Architecture principles for maintainability and testability across Android and iOS. The backend is a Node.js/Express REST API backed by a PostgreSQL database covering 16 relational tables. UML diagrams (use-case, sequence, class) were produced following the Unified Process methodology.",
          },
          {
            heading: "Key Features",
            items: [
              { label: "Real-Time Tracking", text: "Socket.IO paired with the Google Maps SDK lets the client see the driver's GPS position update live from pickup to doorstep." },
              { label: "AI Vehicle Assignment", text: "Mistral AI analyses each order's weight and volume at checkout to automatically pick the right vehicle type (scooter or car) and dispatch the nearest available driver." },
              { label: "OTP via Telegram Bot", text: "Authentication relies on JWT combined with a custom Telegram bot for 2FA OTP delivery, secure and free with no SMS provider needed." },
              { label: "Multi-Basket System", text: "Up to 5 simultaneous baskets (one per merchant) persisted across app restarts. Each basket is tracked and ordered independently." },
              { label: "Loyalty and Coupons", text: "Points accumulate with every order and can be redeemed for delivery discount coupons (30%, 60%, or 100% off) through an in-app store." },
            ],
          },
        ],
      },
      hestia: {
        tagline: "Complete facility management, from contract to invoice.",
        overview:
          "Hestia Manager is a full ERP built for a facility-management company (Hestia Solutions DZ) that handles cleaning, security, maintenance, and landscaping contracts for residential complexes and businesses. A companion institutional showcase website was delivered alongside the software.",
        sections: [
          {
            heading: "Contract System",
            body: "The application handles two fundamentally different contract types. **Long-term contracts** cover recurring services (building security, elevator maintenance, cleaning, landscaping) for housing complexes and enterprises. **Short-term contracts** cover one-off jobs (home cleaning, lawn mowing, disinfection) for individual clients.",
          },
          {
            heading: "Budget Engineering",
            body: "Each long-term contract has a provisional budget broken down task by task before the service begins. Real expenses (employee salaries, purchased materials, equipment) are logged over time and linked to a specific client site. Net revenue is computed live by comparing actual vs. provisional spend, isolated per site so costs never bleed across clients.",
          },
          {
            heading: "Key Features",
            items: [
              { label: "RBAC", text: "The manager controls exactly which features each employee account can access. On-site administrators have restricted accounts limited to their assigned residence." },
              { label: "Anomaly Reporting", text: "On-site admins log field incidents (e.g. broken elevator) from their restricted interface. Alerts propagate to the main operator for rapid intervention." },
              { label: "Tenant Rent Tracking", text: "For housing-complex contracts, on-site admins collect and log monthly rent payments. The system tracks balances, generates late-payment alerts, and maintains a full payment history." },
              { label: "Employee and Payroll", text: "Full employee records with salary tracking, payslip generation, and assignment to specific contracts or sites." },
            ],
          },
          {
            heading: "Deployment",
            body: "Built as a native Windows desktop application using the Proton framework (.exe). Frontend in React, API in Express.js, data in PostgreSQL. The showcase website (Next.js) is live at hestiasolutionsdz.com.",
          },
        ],
      },
      taalim: {
        tagline: "Everything a private tutor needs, in one lightweight app.",
        overview:
          "A full-stack web application designed to manage private tutoring sessions end-to-end. Built to be lightweight and easy to self-host: SQLite backend, simple Express API, no heavy infrastructure required.",
        sections: [
          {
            heading: "Features",
            items: [
              { label: "Session and Group Management", text: "Organise students into groups, schedule sessions, and track attendance, all in one place." },
              { label: "Payments and Analytics", text: "Track payment status per student and visualise revenue through a dashboard with monthly stats, payment history, and forecasting." },
              { label: "Easy Deployment", text: "Runs locally or on any small server with zero configuration overhead." },
            ],
          },
        ],
      },
      locaflow: {
        tagline: "The full rental lifecycle, managed in one place.",
        overview:
          "A complete car rental management system handling the entire business workflow, from client registration and vehicle tracking to contract generation and payment reconciliation. Desktop application built on MVC with a JavaFX interface and MySQL persistence.",
        sections: [
          {
            heading: "Features",
            items: [
              { label: "Client, Vehicle and Employee Management", text: "Centralised records for all clients, vehicles with real-time availability status, and employees." },
              { label: "Rental Contracts and Payments", text: "Create and manage rental contracts with automated payment tracking per client and per contract." },
              { label: "Smart Notifications", text: "Automatic alerts for upcoming technical inspections and insurance expirations." },
              { label: "Monthly Revenue Dashboard", text: "Built-in revenue calculations to track monthly performance at a glance." },
            ],
          },
        ],
      },
      homelab: {
        tagline: "Understanding what actually happens at the system level.",
        overview:
          "An ongoing personal project: turning an old laptop into a dedicated headless Linux server. The goal is to get a concrete understanding of how infrastructure works, rather than relying on PaaS platforms that automate everything without explaining anything.",
        sections: [
          {
            heading: "What's in place",
            items: [
              { label: "Headless server", text: "Laptop repurposed as a dedicated server running Debian, managed entirely via SSH with no display attached." },
              { label: "Local network", text: "Local network configuration and secure remote access setup." },
              { label: "Containerisation", text: "Applications deployed with Docker to isolate and secure environments." },
              { label: "Reverse proxy", text: "Nginx configured as a reverse proxy for domain name management and SSL certificates (HTTPS)." },
              { label: "Security", text: "UFW firewall to restrict inbound traffic." },
            ],
          },
          {
            heading: "In progress",
            body: "Setting up an automated backup system to ensure data resilience.",
          },
        ],
      },
      pong: {
        tagline: "Classic rules. Custom chaos.",
        overview:
          "A faithful yet feature-rich reimplementation of Pong built in C with the Raylib graphics library during my first year of university. It was my first real dive into algorithmic thinking and game loop architecture.",
        sections: [
          {
            heading: "Game Modes",
            items: [
              { label: "Standard", text: "Classic Pong rules: two paddles, one ball, first to the score limit wins." },
              { label: "Custom", text: "Three random obstacles spawn at centre field 5 seconds in. Each player also gets 3 slow-motion triggers to strategically reduce ball speed at critical moments." },
            ],
          },
          {
            heading: "Technical Details",
            body: "Custom bounce system with angle-based reflection depending on where the ball hits the paddle, creating dynamic trajectories. Both modes support two-player local co-op with dedicated keyboard controls.",
          },
        ],
      },
      snake: {
        tagline: "From C to C++: learning OOP the hands-on way.",
        overview:
          "A clean and efficient Snake implementation built in C++ with Raylib during my first year. Primarily an exercise to understand the core differences between C and C++, from object-oriented design patterns to memory management.",
        sections: [
          {
            heading: "Focus",
            items: [
              { label: "C vs C++ Exploration", text: "Deliberately structured to highlight OOP concepts like classes and encapsulation, contrasting with the procedural approach used in the Pong project." },
              { label: "Smooth Controls", text: "Frame-rate independent input handling for precise and reactive movement." },
            ],
          },
        ],
      },
    },
  },
};

export default translations;