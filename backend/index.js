import express from 'express';
import 'dotenv/config';
import authRouter from './core/routes/auth.router.js';
import materialRouter from "./core/routes/materiel.router.js";
import cors from 'cors'
import bodyParser from 'body-parser';
// CONFIGURATION DE L'APPLICATION EXPRESS
const app = express();
app.use(cors())
app.use(express.json());
// CONFIGURATION DEPUIS LE DOTENV
const PORT_SERVER = process.env.SERVER_PORT;



// LES ROUTES
app.use('/api/', materialRouter);



app.listen(PORT_SERVER, () => {
    console.log("le serveur est  en ecoute sur le port ", PORT_SERVER);
})