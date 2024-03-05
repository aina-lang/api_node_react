import express from "express";
import Materiel from "../../dist/models/Materiel.js";

const router=express.Router();

router.get('/signup',(req,res)=>{
   const Materiel1 = new Materiel();
   console.log(Materiel1.getAll());
   res.json(
      Materiel1.getAll()
      );
});


export default router;