// Une fonction de callback est une fonction qui est transmise comme argument 
// à une autre fonction, puis exécutée lorsque l'autre fonction est terminée.
// une fonction de rappel ou « callback » en anglais est une fonction qui va pouvoir être 
// rappelée (« called back ») à un certain moment et / ou si certaines conditions sont réunies. 
// Nous utilisons les callbacks pour nous assurer que le code est exécuté uniquement 
// après la fin d'une opération asynchrone.

// SYNCHRONE / ASYNCHRONE

// En informatique, on dit que deux opérations sont synchrones lorsque la seconde attend 
// que la première ait fini son travail pour démarrer, le début de l’opération suivante dépend de la complétude de l’opération précédente.

// Au contraire, deux opérations sont qualifiées d’asynchrones en informatique lorsqu’elles sont indépendantes 
// c’est-à-dire lorsque la deuxième opération n’a pas besoin d’attendre que la première se termine pour démarrer.

// Par défaut, le JavaScript est un langage synchrone, bloquant et qui ne s’exécute que sur un seul thread. 

// Cela signifie que :

// Les différentes opérations vont s’exécuter les unes à la suite des autres (elles sont synchrones) ;
// Chaque nouvelle opération doit attendre que la précédente ait terminé pour démarrer (l’opération précédente est « bloquante ») ;
// Le JavaScript ne peut exécuter qu’une instruction à la fois

// Le code asynchrone sera écrit de trois façons : les callbacks, les promesses et les mots-clés async/await.
function direBonjour2(msg) {
    var message = "Bienvenue " + msg;
    console.log(message);
}

direBonjour2("Tout le monde");

function direBonjour(msg, callback) {
    var message = "Bienvenue " + msg;
    callback(message);
}

// fonction de callback
function afficherMessage(msg) {
    console.log(msg);
}

direBonjour("Tout le monde", afficherMessage);

function somme(a, b) {
    return a + b;
}

function produit(a, b) {
    return a * b;
}

function operation(a, b, callback) {
    console.log(callback(a, b));
}

operation(3, 5, somme);
operation(3, 6, produit);

// La premiere :  Une fonction callback
function hello() {
    console.log("hello");
}

// Pour afficher un message après X secondes
// La deuxieme : une duree en millisecondes qui precede l'execution de la fonction callback
function sayHelloAfterXSeconds(x) {
    setTimeout(hello, x * 1000);
}

// Appel de methode say...() prenant en argument des secondes
sayHelloAfterXSeconds(5);

var timeout;

// Il est possible d'utiliser une fonction anonyme en Callback
function sayHelloAfterXSeconds2(x) {
    timeout = setTimeout(function () {
        console.log("hello");
    }, x * 1000);
}

// Appel de methode say...() prenant en argument des secondes
sayHelloAfterXSeconds2(2);

// Il est possible d'annuler l'execution de la fonction callback setTimeout()
clearTimeout(timeout);
// Hello ne sera jamais affiché

var interval;
// Pour afficher un message toutes les X secondes
function sayHelloEveryXSeconds(x){
    interval = setInterval(hello, x * 1000);
}

sayHelloEveryXSeconds(5);

// Il est possible d'annuler l'execution de la fonction callback setTimeout()
clearInterval(interval);



// Objet

// Qu'est ce qu'un objet ?

// c 'est un ensemble de 

// - attributs (variable, champs) : clé + valeur
// - méthodes : fonctions

// un objet est caractérisé par des accolades
var obj = {
    nom: "Wick",
    prenom: "John"
};

// Recupere l'attribut nom de l'objet obj et l'affcihe en console
console.log(obj.nom);
// ou
console.log(obj["prenom"]);

// Un objet est iterable avec for...in
for(var elt in obj){
    console.log(elt + " : " + obj[elt]);
}

// on cree un nouvel objet ou on cree une nouvelle instance obj de type Objet
var obj = new Object();
obj.nom = "wick";
obj.prenom = "John";

// copie un objet
var obj2 = obj;

// copie un objet avec ...(spread operator) permettant de faire des copies d'objets, variables
// Ici, la variable d'origine et sa copie sont totalement independantes
// var obj2 = {...obj};
// ou
var obj2 = Object.assign({}, obj);

obj2.nom = "Doe";

console.log(obj.nom); // Affiche Wick

console.log(obj2.nom); // Affiche Doe

// Pour transformer un objet en chaine de caracteres
var str = JSON.stringify(obj);
console.log(str);

// Pour transformer une chaine de caractere en objet
var p = JSON.parse(str);
console.log(p.nom + " " + p.prenom);

// Ajout d'une méthode dans lobjet obj
var obj = {
    nom: "Wick",
    prenom: "John",
    direBonjour: function (){
        console.log("Bonjour " + this.nom);
    }
};

// Appel de la methode direbonjour a partir de obj de type Object
obj.direBonjour();

// Constructeurs

// Moule pour creer des objets
// Tous les objets sont de type Object
// Et si on veut creer un modele d'objet, on peut utiliser les constructeurs

// var Personne = function(nom, prenom, age){
//     this.nom = nom;
//     this.prenom = prenom;
//     this.age = age;
//     this.afficherNomComplet = function(){
//         console.log(this.nom + " " + this.prenom);
//     }
// }

// OU

class Personne{
    nom;
    prenom;
    age;

    constructor(nom, prenom, age){
        this.nom = nom;
        this.prenom = prenom;
        this.age = age;
    }

    // Getter : Accesseur => recupere les valeur
    getNom(){
        return this.nom;
    }

    // Setter : mutateur : modifier les valeurs de l'attibut par la valeur passe en parametre
    setNom(nom){
        this.nom = nom;
    }

    afficherNomComplet(){
        return this.nom + " " + this.prenom;
    }

}

// Cree une nouvelle instance de lobjet Personne à partir de constructeur
perso = new Personne("Wick", "John", 35);
// Appel de la methode setNom(nom) pour modifier la valeur de nom dans l'instance perso
perso.setNom("Doe");
// Affiche la nom de l'instance perso par la methode getNom()
console.log(perso.getNom());

perso2 = new Personne(35, "Wick", "John");
console.log(perso2.nom);

// Erreur, Impossible de lui ajouter un nouvel attribut de cette facon
// Personne.rue = 0;

// Utiliser le prototype
Personne.prototype.rue = 0;

// Mise en place du Getter / Accesseur
Personne.prototype.getRue = function () {
    return this.rue;
}

// Mise en place du Setter / Mutateur
Personne.prototype.setRue = function (rue) {
    this.rue = rue;
}

perso.setRue("RUE1");
console.log(perso.getRue());