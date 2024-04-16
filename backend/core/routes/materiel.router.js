import express from "express";
import Materiel from "../../dist/models/Materiel.js";
import ApiResponse from "../service/ApiResponse.js";

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const materielInstance = new Materiel();
    const result = await materielInstance.getAll();

    let response = new ApiResponse(
      "success",
      "Materiel récupéré avec succès",
      200
    );
    response.send(req, res, result);
  } catch (error) {
    let response = new ApiResponse(
      "error",
      "Erreur de récupération des matériels",
      500
    );
    response.send(req, res, req.body);
  }
});

router.post("/add", async (req, res) => {
  let response;
  try {
    const materielInstance = new Materiel();
    materielInstance.save(req.body);

    response = new ApiResponse("success", "Matériel inséré avec succès", 200);
    response.send(req, res, req.body);
  } catch (error) {
    response = new ApiResponse(
      "error",
      "Erreur d'insertion d'un matériel",
      500
    );
    response.send(req, res, req.body);
  }
});

router.delete("/:id", async (req, res) => {
  let response;
  try {
    const { id } = req.params;
    const materielInstance = new Materiel();
    materielInstance.delete(id);

    response = new ApiResponse("success", "Matériel supprimé avec succès", 200);
    response.send(req, res, req.body);
  } catch (error) {
    response = new ApiResponse(
      "error",
      "Erreur de suppression du matériel",
      500
    );
    response.send(req, res, req.body);
  }
});

router.put("/:id", async (req, res) => {
  let response;
  try {
    const { id } = req.params;
    const newData = req.body;
    const materielInstance = new Materiel();
    materielInstance.save(newData);
    response = new ApiResponse("success", "Matériel modifié avec succès", 200);
    response.send(req, res, req.body);
  } catch (error) {
    response = new ApiResponse(
      "error",
      "Erreur de modification du matériel",
      500
    );
    response.send(req, res, req.body);
  }
});

export default router;
