import Model from "../service/model";

export default class Materiel extends Model<Materiel>{
    id: number;
    design: string;
    etat: string;
    quantite: number;
    constructor(id: number, design: string, etat: string, quantite: number) {
        
        super("materiel");
        this.id = id;
        this.design = design;
        this.etat = etat;
        this.quantite = quantite;
    }
}