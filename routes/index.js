// Importation du module Express pour créer un routeur
const express = require("express");
// Création d'un routeur Express
const router = express.Router();

// Définition d'une route GET pour la page d'accueil ("/")
router.get("/", (req, res) => {
    // Création d'un objet `data` contenant les informations à passer à la vue
    const data = {
        title: "Accueil", // Titre de la page
        message: "Bienvenue sur mon site !", // Message de bienvenue
        features: ['Rapide', 'Sécurisé', 'Moderne'],
        lorem: ['Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eius a eveniet quia reprehenderit quae reiciendis error accusantium, nesciunt aliquid corrupti animi esse suscipit modi iste? Laboriosam ullam repellat tempore deserunt!', 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eius a eveniet quia reprehenderit quae reiciendis error accusantium, nesciunt aliquid corrupti animi esse suscipit modi iste? Laboriosam ullam repellat tempore deserunt!', 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eius a eveniet quia reprehenderit quae reiciendis error accusantium, nesciunt aliquid corrupti animi esse suscipit modi iste? Laboriosam ullam repellat tempore deserunt!'],
        year: new Date().getFullYear()
    };

    // Rendu de la vue "index" avec les données contenues dans l'objet `data`
    res.render("index", data);
});

// Définition d'une route GET pour la page "À propos" ("/services")
router.get("/services", (req, res) => {
    // Création d'un objet `data` contenant les informations à passer à la vue
    const data = { 
        title: "Nos services", // Titre de la page
        message: 'Découvrez nos services incroyables.',
        services: ['Développement Web', 'Design Graphique', 'SEO'],
        year: new Date().getFullYear()
    };

    // Rendu de la vue "services" avec les données contenues dans l'objet `data`
    res.render("services", data);
});

// Définition d'une route GET pour la page "Contact" ("/contact")
router.get("/contact", (req, res) => {
    // Création d'un objet `data` contenant les informations à passer à la vue
    const data = { 
        title: "Nous contacter", // Titre de la page
        message: "Contactez-nous", // Message invitant à contacter
        email: 'yapoabed@gmail.com',
        phone: '+225 07 4855 4964',
        year: new Date().getFullYear()
    };

    // Rendu de la vue "contact" avec les données contenues dans l'objet `data`
    res.render("contact", data);
});

// Exportation du routeur pour qu'il puisse être utilisé dans d'autres fichiers
module.exports = router;