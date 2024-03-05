import express from "express";
import Materiel from "../../dist/models/Materiel.js";
import mysql from "mysql2";
import ApiResponse from '../service/ApiResponse.js'
const router = express.Router();


router.get('/', async (req, res) => {
    try {
        const materielInstance = new Materiel();
        const result = await materielInstance.getAll();

        let response = new ApiResponse("success", "Materiel recuperé avec succées", 200);
        response.send(req, res, result);

    } catch (error) {
        let response = new ApiResponse("error", "Erreur de recuperation des materiel", 500);
        response.send(req, res, req.body);
    }
});

router.post('/add', async (req, res) => {
    let response;
    try {
        const materielInstance = new Materiel();
        materielInstance.save(req.body);

        response = new ApiResponse('success', "Materiel inseré avec succées", 200);
        response.send(req, res, req.body);

    } catch (error) {
        response = new ApiResponse("error", "Erreur d'insertion d'un materiel", 500);
        response.send(req, res, req.body);
    }
});


export default router;