import Materiel from "../../dist/models/Materiel";
import ApiResponse from "../service/ApiResponse";

export default class MaterielController {
    static async index(req, res) {
        try {
            const materielInstance = new Materiel();
            const result = await materielInstance.getAll();

            let response = new ApiResponse("Materiel recuperé avec succées", 200);
            response.send(req, res, result);

        } catch (error) {
            console.error('Erreur lors de la requête SELECT :', error);
            res.status(500).json({ error: 'Erreur lors de la requête SELECT' });
        }
    }
}