const path = window.location.pathname;
const switcher = document.getElementById("lang-switcher");

function createFlagLink(href, imgSrc, alt) {
    return `
    <a href="${href}" aria-label="${alt}"
       style="
         display: inline-block;
         width: 24px;
         height: 24px;
         border-radius: 50%;
         overflow: hidden;
         vertical-align: middle;
         transition: border-color 0.3s;
       ">
      <img src="${imgSrc}" alt="${alt}"
           style="
             width: 100%;
             height: 100%;
             object-fit: cover;
             display: block;
           " />
    </a>
  `;
}

function updateSwitcher(switcher) {
    if (!switcher) return;

    let altLangPath;

    if (path.startsWith("/en/home/")) {
        // Remplacer '/en/home/' par '/accueil/' pour garder la même page en EN
        altLangPath = path.replace("/en/home/", "/accueil/");
    } else if (path.startsWith("/en/missions/")) {
        // Remplacer '/en/missions' par '/missions' pour garder la même page en FR
        altLangPath = path.replace("/en/missions/", "/missions/");
    } else if (path.startsWith("/en/services/")) {
        // Remplacer '/en/services' par '/services' pour garder la même page en FR
        altLangPath = path.replace("/en/services/", "/services/");
    } else if (path.startsWith("/en/career/")) {
        // Remplacer '/en/career' par '/parcours' pour garder la même page en FR
        altLangPath = path.replace("/en/career/", "/parcours/");
    } else if (path.startsWith("/accueil/")) {
        // Remplacer '/accueil/' par '/en/home/' pour garder la même page en EN
        altLangPath = path.replace("/accueil/", "/en/home/");
    } else if (path.startsWith("/services/")) {
        // Remplacer '/services/' par '/en/services/' pour garder la même page en EN
        altLangPath = path.replace("/services/", "/en/services/");
    } else if (path.startsWith("/missions/")) {
        // Remplacer '/missions/' par '/en/missions/' pour garder la même page en EN
        altLangPath = path.replace("/missions/", "/en/missions/");
    } else if (path.startsWith("/parcours/")) {
        // Remplacer '/parcours/' par '/en/career/' pour garder la même page en EN
        altLangPath = path.replace("/parcours/", "/en/career/");
    } else if (path === "/" || path === "/index.html") {
        // Page d'accueil par défaut
        altLangPath = "/en/";
    } else if (path.startsWith("/en/")) {
        // remplacer les routes /en/ par les routes équivalente en FR
        altLangPath = path.replace("/en/", "/");
    } else {
        // Si page non prévue, rediriger vers la home en anglais
        altLangPath = "/en/home/";
    }

    // Choix du drapeau en fonction de la langue actuelle
    const isEnglish = path.startsWith("/en/");
    const flagSrc = isEnglish ? "/assets/icons/flags/fr.svg" : "/assets/icons/flags/gb.svg";
    const altText = isEnglish ? "Passer au français" : "Switch to English";

    switcher.innerHTML = createFlagLink(altLangPath, flagSrc, altText);
}

// Récupérer les deux éléments (adapter les IDs selon ton HTML)
const switcherDesktop = document.getElementById("lang-switcher-desktop");
const switcherBurger = document.getElementById("lang-switcher-burger");

// Mettre à jour les deux switchers s'ils existent
updateSwitcher(switcherDesktop);
updateSwitcher(switcherBurger);