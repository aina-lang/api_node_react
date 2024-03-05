import Model from "../service/model.js";
export default class Materiel extends Model {
    constructor(id, design, etat, quantite) {
        super("materiel");
        this.id = id;
        this.design = design;
        this.etat = etat;
        this.quantite = quantite;
    }
}
//# sourceMappingURL=Materiel.js.map