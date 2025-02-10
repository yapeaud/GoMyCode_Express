"use strict"; // Active le mode strict

const express = require("express"); // Importe express
const path = require("path"); // Importe Path pour gérer les chemins
const { engine } = require("express-handlebars"); // Importez express-handlebars

const indexRouter = require("./routes/index"); // Importe le routeur principal (Route principale)
const app = express(); // 
const port = process.env.PORT || 5000; // Port configurable via les variables d'environnement

// Middleware pour vérifier les heures de travail
const workingHoursMiddleware = (req, res, next) => {
    const now = new Date();
    const dayOfWeek = now.getDay(); // 0 (Dimanche) à 6 (Samedi)
    const hourOfDay = now.getHours();

    // Vérifie si c'est un jour de semaine (1-5) et entre 9h et 17h
    if (dayOfWeek >= 1 && dayOfWeek <= 5 && hourOfDay >= 9 && hourOfDay < 17) {
        next(); // Continue vers la route demandée
    } else {
        res.status(403).send("L'application web est disponible uniquement pendant les heures de travail (du lundi au vendredi, de 9h à 17h).");
    }
};

// Configuration du moteur de template Handlebars
app.engine("handlebars", engine({})); // Configurez le moteur Handlebars
app.set("view engine", "handlebars");
app.set("views", path.join(__dirname, "views"));

// Middleware pour parser les requêtes JSON
app.use(express.json());

// Définition du dossier des fichiers statiques
app.use(express.static(path.join(__dirname, "public")));

// Appliquer le middleware des heures de travail à toutes les routes
app.use(workingHoursMiddleware);

// Définition des routes
app.use("", indexRouter);

// Gestion des erreurs 404
app.use((req, res, next) => {
    res.status(404).send("Page non trouvée");
});

// Gestion des erreurs globales
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send("Erreur interne du serveur");
});

// Démarrer le serveur
app.listen(port, (err) => {
    if (err) {
        console.error("Erreur au démarrage du serveur:", err);
        return;
    }
    console.log(`Serveur démarré sur http://localhost:${port}`);
});