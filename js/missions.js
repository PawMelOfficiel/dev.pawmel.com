const missions = [
    {
        client: "GoPetSit",
        client_name: 'Lucie Sandré',
        client_job_title: 'Fondatrice',
        job_title: "Développeuse Full-Stack",
        start_date: "2025-07-08",
        end_date: "2025-07-31",
        link: "https://www.gopetsit.com",
        image: "/assets/GPS-logo.png",
        content: `<p>Pour la plateforme de pet-sitting GoPetSit, j’ai conçu et mis en place :</p>
            <ul>
                <li>🔁 Système complet d’abonnements Stripe : création, gestion, résiliation, synchronisation via webhooks, activation automatique de fonctionnalités selon le statut d’abonnement, période d’essai configurable.</li>
                <li>🛒 Vente de modules d’accompagnement : panier multi-produits, gestion des promotions, codes promo dynamiques, réductions automatiques, livraison sécurisée des contenus (PDF avec tokens), emails transactionnels.</li>
                <li>📊 Admin dashboard personnalisé : suivi des ventes, gestion des utilisateurs, contrôle total sur les abonnements et les modules.</li>
                <li>📈 Optimisation marketing & SEO : configuration de Google Tag Manager, synchronisation des contacts avec Brevo (ex-Sendinblue), indexation du site via Google Search Console.</li>
            </ul>`,
        review: `<p>J’ai eu le plaisir de travailler avec Clémence durant tout le mois de juillet sur le développement technique de GoPetSit.</p>
            <p>Elle a mis en place un système complet de gestion des abonnements, un back-office administrable pour les modules d’accompagnement, l’intégration du panier avec remises et codes promo, ainsi que le paramétrage du tracking SEO (Search Console, Tag Manager, etc.).</p>
            <p>Son travail a été fluide, rigoureux, livré à temps et toujours orienté utilisateur. Je recommande Clémence sans aucune hésitation !</p>`,
        tech_stack: [
            "Symfony",
            "Doctrine",
            "Twig",
            "PHP",
            "JavaScript",
            "MySQL",
            "Stripe",
            "Brevo"
        ]
    },
    {
        client: "GoPetSit",
        client_name: 'Lucie Sandré',
        client_job_title: 'Fondatrice',
        job_title: "Cheffe de Projet Informatique",
        start_date: "2025-08-01",
        end_date: "2025-08-20",
        link: "https://www.gopetsit.com",
        image: "/assets/GPS-logo.png",
        content: `<p class="font-semibold">🛠️ Astreinte Technique & Coordination</p>

            <p>Durant le mois d’août, j’ai assuré une astreinte technique afin de garantir la continuité
            des services et le bon fonctionnement des systèmes en production, tout en coordonnant
            les interventions ponctuelles de prestataires ou collaborateurs externes.</p>

            <p>Mes responsabilités incluaient :</p>
            <ul>
                <li>🖥️ Supervision de la production et gestion des incidents techniques.</li>
                <li>🤝🏻 Coordination des actions correctives avec les intervenants externes.</li>
                <li>📫 Suivi des tickets, priorisation et maintien de la qualité de service.</li>
                <li>🗣️ Communication avec les parties prenantes pour assurer la continuité du projet.</li>
                <li>👩🏻‍💻 Réalisation ponctuelle de tâches techniques ou fonctionnelles selon les besoins.</li>
            </ul>
            <p>Un rôle à la croisée de l’opérationnel et du pilotage, en autonomie, garantissant la stabilité du système pendant la période estivale.</p>`,
        review: `<p>Depuis août, Clémence occupe un rôle central dans le suivi technique et l’amélioration continue du site GoPetSit.</p>
            <p>Elle intervient avec efficacité sur les bugs remontés, propose des solutions rapidement et s’investit avec sérieux dans la résolution comme dans la prévention des problèmes.</p>
            <p>C’est également elle qui supervise désormais les futures améliorations fonctionnelles, avec une vraie posture de cheffe de projet : à l’écoute, réactive, disponible, toujours force de proposition.</p>
            <p>Un vrai pilier pour le bon fonctionnement du site ! Je la recommande sans hésiter 🐾</p>`,
        tech_stack: [
            "Symfony",
            "Doctrine",
            "Twig",
            "PHP",
            "JavaScript",
            "MySQL"
        ]
    }
];

function renderMissions() {
    const container = document.querySelector("#missions-container");

    missions.sort((a, b) => new Date(b.start_date) - new Date(a.start_date));

    missions.forEach((mission) => {
        const card = document.createElement("article");
        card.className = "bg-white shadow-md rounded-lg p-6 mb-8 w-full";

        const startDate = new Date(mission.start_date).toLocaleDateString("fr-FR", {
            year: "numeric",
            month: "long",
            day: "numeric",
        });
        const endDate = new Date(mission.end_date).toLocaleDateString("fr-FR", {
            year: "numeric",
            month: "long",
            day: "numeric",
        });

        card.innerHTML = `
            <div class="flex mb-4 items-center lg:items-center">
                <a href="${mission.link}" target="_blank" rel="noopener" class="shrink-0 mr-4">
                    <img src="${mission.image}" alt="${mission.client} logo" class="h-12 w-12 object-contain" />
                </a>
                <div class="flex flex-col text-left lg:flex-row lg:items-center lg:gap-4">
                    <h2 class="text-xl font-extrabold text-[#2E6E49] font-montserrat leading-none mb-2 lg:mb-0">
                        ${mission.job_title}
                    </h2>
                    <div class="text-l text-[#444444] flex flex-wrap items-center gap-1 mt-1 lg:mt-1">
                        <strong>${mission.client}</strong> | 
                        <span class="text-gray-500">${startDate} - ${endDate}</span>
                        <a href="${mission.link}" target="_blank" rel="noopener" class="text-[#2E6E49] ml-1 inline-flex">
                            <svg class="h-6 w-6 fill-none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <g id="External_Link">
                                    <path id="Vector" d="M10.0002 5H8.2002C7.08009 5 6.51962 5 6.0918 5.21799C5.71547 5.40973 5.40973 5.71547 5.21799 6.0918C5 6.51962 5 7.08009 5 8.2002V15.8002C5 16.9203 5 17.4801 5.21799 17.9079C5.40973 18.2842 5.71547 18.5905 6.0918 18.7822C6.5192 19 7.07899 19 8.19691 19H15.8031C16.921 19 17.48 19 17.9074 18.7822C18.2837 18.5905 18.5905 18.2839 18.7822 17.9076C19 17.4802 19 16.921 19 15.8031V14M20 9V4M20 4H15M20 4L13 11" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                </g>
                            </svg>
                        </a>
                    </div>
                </div>
            </div>

            <div class="text-sm leading-relaxed text-left mb-4 space-y-2">
                ${mission.content}
            </div>

            ${mission.review && mission.review.trim() !== "" ? `
                <div class="mt-6 border-t pt-4 text-left">
                    ${mission.client_name && mission.client_name.trim() !== "" ?
                    `<p class="font-bold mb-2">L'avis de ${mission.client_name} - ${mission.client_job_title} ${mission.client} :</p>`
                    : `<p class="font-bold mb-2">L’avis du client :</p>`}
                    <blockquote class="text-[#2E6E49] italic text-sm space-y-2 mb-2">
                        ${mission.review}
                    </blockquote>
                </div>
            ` : ""}

            <div class="flex flex-wrap gap-2 mt-4">
                ${mission.tech_stack
                .map(
                    (tech) =>
                        `<span class="bg-[#A7C9A1] text-[#444444] text-xs font-semibold px-2 py-1 rounded">${tech}</span>`
                )
                .join("")}
            </div>
        `;
        container.appendChild(card);
    });
}

document.addEventListener("DOMContentLoaded", renderMissions);