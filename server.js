const express = require("express");
const app = express();
const port = 8080;

const sequelize = require('./config/database');

// ⚠️ IMPORTER LES MODÈLES
require('./model/user')

const routes = require('./routers/router');

app.use(express.json());

const startServer = async () => {
    try {
        await sequelize.authenticate();
        console.log('Connecté à MySQL ✅');

        await sequelize.sync();
        console.log('Tables synchronisées ✅');

        app.use('/', routes);

        app.listen(port, () => {
            console.log(`Serveur démarré sur http://localhost:${port}`);
        });

    } catch (error) {
        console.error('Erreur :', error);
    }
};

startServer();