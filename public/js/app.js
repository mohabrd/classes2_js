class Lieux {
    constructor(nom, contenu, ingredients ){
        this.nom = nom;
        this.contenu = contenu;
        this.ingredients = ingredients;
    }

}

let maison = new Lieux ('maison');
let epicerie = new Lieux ('epicerie');
let cuisine = new Lieux ('cuisine');



class ingredients {
    constructor(nom, etat, prix ){
        this.nom = nom;
        this.etat = etat;
        this.prix = prix;
    }

}

let poivron = new ingredients ('poivron', 'entier', 1);
let oignon = new ingredients ('oignon', 'entier', 2);
let oeuf = new ingredients ('oeuf', 'entier', 4);
let epice = new ingredients ('epice', 'moulu',3.25);
let paprika = new ingredients ('paprika', 'moulu', 1.5);
let fromage = new ingredients ('fromage', 'coupé', 1.6);



class Personne {
    constructor(nom, lieu, argent, panier){
        this.nom = nom;
        this.lieu = lieu;
        this.argent = argent;
        this.panier = panier;
    }
    se_deplacert(x){

    }
    payer(x){

    }
    couper(x,y){
        
    }
}

let personnage = new Personne ('Maxime','néant',100,);
console.log(personnage);
