// Demo les bases du langage TypeScript
/**
 * Exercice 1 : Types de base
 * Énoncé : Déclarez une variable de chaque type de base
 * de TypeScript : string, number, boolean, null et undefined.
 * Attribuez-leur des valeurs appropriées.
 */
// solution :
var nom = 'jhon';
var age = 30;
var majeur = true;
var nul = null;
var indefini = undefined;
// -------------------
/**
 * Exercice 2 : Tableaux
 * Énoncé : Créez un tableau de nombres et un tableau
 * de chaînes de caractères. Ajoutez-y quelques éléments.
 */
// solution :
var animaux = ['chien', 'chat'];
var Nbrpair = [2, 50];
// -------------------
/**
 * Exercice 3 : Fonctions
 * Énoncé : Écrivez une fonction qui prend deux nombres en entrée
 * et retourne leur somme. Spécifiez les types des paramètres
 * et du type de retour.
 */
// solution :
function addition(a, b) {
    return a + b;
}
var resultat;
resultat = addition(4, 5);
var PremierePersonne = {
    nom: "jere",
    age: 34
};
console.log("je suis ".concat(PremierePersonne.nom, " et g ").concat(PremierePersonne.age));
// -------------------
/**
 * Exercice 5 : Classes
 * Énoncé : Créez une classe Voiture avec les propriétés
 * marque (string) et modèle (string).
 * Ajoutez une méthode afficherInfos() qui affiche
 * les informations de la voiture.
 */
// solution :
var voiture = /** @class */ (function () {
    function voiture(marque, modele) {
        this.marque = marque;
        this.modele = modele;
    }
    voiture.prototype.getMark = function () {
        return this.marque;
    };
    voiture.prototype.getModele = function () {
        return this.modele;
    };
    voiture.prototype.setMark = function (marque) {
        this.marque = marque;
    };
    voiture.prototype.setModele = function (modele) {
        this.modele = modele;
    };
    voiture.prototype.afficherInfos = function () {
        console.log("je suis une voiture  de marque ".concat(this.marque, " et de modele ").concat(this.modele, " "));
    };
    return voiture;
}());
var mavoiture = new voiture("toyota", "korola");
console.log("----initialisation de ma voiture");
mavoiture.afficherInfos();
console.log("----modification de ma voiture");
mavoiture.setMark("mercedes");
mavoiture.setModele("207");
mavoiture.afficherInfos();
// -------------------
/**
 * Exercice 6 : Génériques
 * Énoncé : Écrivez une fonction générique qui prend
 * un tableau d'éléments de n'importe quel type et retourne
 * le premier élément.
 */
// solution :
function firstElement(params) {
    return params[0];
}
var fruits = ["banane", "mangue"];
var fruit = firstElement(fruits);
console.log("mon fruit est:".concat(fruit));
// -------------------
/**
 * Exercice 7 : Types Union
 * Énoncé : Déclarez une variable qui peut être soit un nombre,
 * soit une chaîne de caractères.
 * Attribuez-lui une valeur de chaque type.
 */
// solution :
var password = "lol";
password = 2433;
// -------------------
var Creneau;
(function (Creneau) {
    Creneau["Matin"] = "matin";
    Creneau["Midi"] = "midi";
    Creneau["Soir"] = "soir";
})(Creneau || (Creneau = {}));
var Kadea = /** @class */ (function () {
    function Kadea(nom, prenom, creneau) {
        this.nom = nom;
        this.prenom = prenom;
        this.creneau = creneau;
    }
    Kadea.prototype.getNom = function () {
        return this.nom;
    };
    Kadea.prototype.getPrenom = function () {
        return this.prenom;
    };
    Kadea.prototype.getCreneau = function () {
        return this.creneau;
    };
    Kadea.prototype.setNom = function (nom) {
        return this.nom = nom;
    };
    Kadea.prototype.setPrenom = function (prenom) {
        return this.prenom = prenom;
    };
    Kadea.prototype.setCreneau = function (creneau) {
        return this.creneau = creneau;
    };
    Kadea.prototype.showInfo = function () {
        console.log("je suis une ".concat(this.nom, " ").concat(this.prenom, " et je fais partie du creneau ").concat(this.creneau));
    };
    return Kadea;
}());
var apprenant = new Kadea("matondo", "jeremie", Creneau.Matin);
console.log("----initialisation de l'apprenant");
apprenant.showInfo();
console.log("----modification de ma voiture");
apprenant.setNom("mado");
apprenant.setPrenom("miradi");
apprenant.showInfo();
/**
 * Exercice 8 : Enums
 * Énoncé : Créez un enum Couleur avec les valeurs Rouge, Vert et Bleu.
 * Utilisez l'enum pour définir la couleur d'une variable.
 */
// solution :
// -------------------
/**
 * Exercice 9 : Tuples
 * Énoncé : Créez un tuple qui représente les coordonnées (x, y)
 * d'un point. Accédez aux éléments du tuple.
 */
// solution :
// -------------------
/**
 * Exercice 10 : Optionnel
 * Énoncé : Déclarez une variable qui peut être soit
 * une chaîne de caractères, soit null.
 * Vérifiez si la variable est null avant de l'utiliser.
 */
// solution :
// -------------------
