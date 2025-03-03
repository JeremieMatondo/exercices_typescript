// Demo les bases du langage TypeScript

/**
 * Exercice 1 : Types de base
 * Énoncé : Déclarez une variable de chaque type de base
 * de TypeScript : string, number, boolean, null et undefined.
 * Attribuez-leur des valeurs appropriées.
 */

// solution :
let nom:string ='jhon';
let age:number = 30;
let majeur:boolean = true;
let nul:null = null;
let indefini : undefined =undefined

// -------------------

/**
 * Exercice 2 : Tableaux
 * Énoncé : Créez un tableau de nombres et un tableau
 * de chaînes de caractères. Ajoutez-y quelques éléments.
 */


// solution :
let animaux:string[] = ['chien','chat'];
let Nbrpair:number[] = [2,50]

// -------------------

/**
 * Exercice 3 : Fonctions
 * Énoncé : Écrivez une fonction qui prend deux nombres en entrée
 * et retourne leur somme. Spécifiez les types des paramètres
 * et du type de retour.
 */

// solution :
function addition(a:number,b:number):number{
    return a+b;
}
let resultat:number
 resultat = addition(4,5)

// -------------------

/**
 * Exercice 4 : Interfaces
 * Énoncé : Définissez une interface Personne avec les propriétés
 * nom (string) et âge (number). Créez un objet de type Personne.
 */

// solution :
interface Personne{
    nom:string,
    age:number,
}
const PremierePersonne:Personne ={
    nom:"jere",
    age:34
}
console.log(`je suis ${PremierePersonne.nom} et g ${PremierePersonne.age}`);


// -------------------

/**
 * Exercice 5 : Classes
 * Énoncé : Créez une classe Voiture avec les propriétés
 * marque (string) et modèle (string).
 * Ajoutez une méthode afficherInfos() qui affiche
 * les informations de la voiture.
 */

// solution :
class voiture{
   private marque:string;
   private modele:string;
    constructor(marque:string,modele:string){
        this.marque=marque;
        this.modele=modele
    }
   public getMark(){
        return this.marque
    }
   public getModele(){
        return this.modele
    }
    public setMark(marque:string){
        this.marque=marque;
    }
    public setModele(modele:string){
        this.modele=modele;
    }
  public afficherInfos(){
        console.log(
            `je suis une voiture  de marque ${this.marque} et de modele ${this.modele} `
        );
        
    }
}
let mavoiture:voiture= new voiture("toyota","korola");
console.log("----initialisation de ma voiture");

mavoiture.afficherInfos();
console.log("----modification de ma voiture");
mavoiture.setMark("mercedes")
mavoiture.setModele("207")
mavoiture.afficherInfos()



// -------------------

/**
 * Exercice 6 : Génériques
 * Énoncé : Écrivez une fonction générique qui prend
 * un tableau d'éléments de n'importe quel type et retourne
 * le premier élément.
 */

// solution :
function firstElement<T>(params:T[]){
    return params[0];

}
let fruits:string[]=["banane","mangue"]
let fruit=firstElement<string>(fruits)
console.log(`mon fruit est:${fruit}`);

// -------------------

/**
 * Exercice 7 : Types Union
 * Énoncé : Déclarez une variable qui peut être soit un nombre,
 * soit une chaîne de caractères.
 * Attribuez-lui une valeur de chaque type.
 */

// solution :
let password:string|number = "lol";
password = 2433;


// -------------------
enum Creneau {
    Matin = "matin",
    Midi = "midi",
    Soir = "soir",
  }
  class Kadea {
   private nom: string;
   private prenom: string;
   private creneau: Creneau;
  
    constructor(nom: string, prenom: string, creneau: Creneau) {
      this.nom = nom;
      this.prenom = prenom;
      this.creneau = creneau;
    }
    getNom(){
        return this.nom
    }
    getPrenom(){
        return this.prenom
    }
    getCreneau(){
        return this.creneau
    }
    setNom(nom:string){
        return this.nom=nom
    }
    setPrenom(prenom:string){
        return this.prenom=prenom
    }
    setCreneau(creneau:Creneau){
        return this.creneau=creneau
    }
    showInfo(){
        console.log(
            `je suis ${this.nom} ${this.prenom} et je fais partie du creneau ${this.creneau}`
        );
    }
  }

  let apprenant:Kadea = new Kadea("matondo","jeremie",Creneau.Matin)
  console.log("----initialisation de l'apprenant");

apprenant.showInfo();

console.log("----modification de ma voiture");
apprenant.setNom("mado")
apprenant.setPrenom("miradi")
apprenant.showInfo()

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
