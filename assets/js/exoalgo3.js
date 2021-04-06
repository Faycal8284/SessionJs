// // !DOCTYPE html>
// // <html lang="en">

// // <head>
// //     <meta charset="UTF-8">
// //     <meta http-equiv="X-UA-Compatible" content="IE=edge">
// //     <meta name="viewport" content="width=device-width, initial-scale=1.0">
// //     <title>Page JS</title>
// // </head>

// // <body>
// //     <!-- <button onclick="alert('Hello world');">Cliquer Ici</button> -->

// //     <button onclick="maFonction()">Cliquer Ici</button>

// //     <button onclick="add_nom()">Ajouter_nom</button>
// //     <button onclick="tirage()">Tirage au sort</button>

// //     <script src="assets/js/algoj1.js"></script>
// //     <script src="assets/js/algoj2.js"></script>
// //     <script src="assets/js/algoTpJ2.js"></script>

// //     <script src="assets/js/algoTp2.js"></script>

// //     <script>
// //         // Tester les instructions document.write et document.writeln en affichant au minimum
// //         // un nombre, une phrase, le contenu d'une variable ...
// //         // Que constatez-vous ?
// //         // Doc : https://developer.mozilla.org/fr/docs/Web/API/Document/writeln

// //         document.writeln('<table border="1">');
// //         document.writeln('<tr>');
// //         document.writeln('bonjour !');
// //         var i = Math.floor(Math.random() * 100);
// //         document.writeln(i);

// //     </script>
// // </body>

// // </html>




// Sujet : Objet & Contructeurs
// Exercice 1 : Tirage au sort des noms
// Ecrire un script composé des fonctions suivante :
// Une fonction qui remplit un tableau par des noms  saisis par l'utilisateur  via une boite de
// dialogue , cette fonction sera appelée au  clic sur un bouton nommé "Ajouter_nom"
// Une fonction qui renvoie au hasard le nom gagnant et qui sera lancée lorsque l'utilisateur
// clique sur le  bouton "tirage au sort" .
// Indication :
// Utiliser la fonction Math.random() qui fournit un nombre réel entre 0 et 0,999
// et la fonction push() pour insérer un élément dans un tableau.
// Exercice 1 

var tab = new Array();

// function add_nom() {
//     tab.push(prompt("Saisir un nom"));
// }

const add_nom = () => {
    tab.push(prompt("Saisir un nom"));
};

// function tirage() {
//     var rand = Math.floor(Math.random() * tab.length);
//     tab.length > 0 ? alert("Le nom gagnant est : " + tab[rand]) :
//     alert("veuillez rentrer des valeurs");
// }

const tirage = () => {
    var rand = Math.floor(Math.random() * tab.length);
    tab.length > 0 ? alert("Le nom gagnant est : " + tab[rand]) :
        alert("veuillez rentrer des valeurs");
};
// Exercice 2 :
// Écrivez un programme JavaScript pour supprimer la propriété rollno de l'objet suivant.
// Imprimez également l'objet avant ou après la suppression de la propriété.
// Indication :
// var student =  {
//   name : "David Rayy",
//   class : "VI",
//   rollno : 12  };
// Indications :
// https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Op%C3%A9rateurs/L_op%
// C3%A9rateur_delete

var student = {
    name: "David Rayy",
    class: "VI",
    rollno: 12
};

console.log(student);
delete student.rollno;
console.log(student);


// Exercice 3 :
// Créez un objet pour contenir des informations sur votre recette préférée. Il doit avoir des
// propriétés pour le titre (une chaîne), les portions (un nombre) et les ingrédients (un tableau
// de chaînes).
// 1Sur des lignes distinctes (une instruction console.log pour chacune), enregistrez les
// informations sur la recette afin qu'elles ressemblent à:
// Indication :
// var recipe = {
//     'nom': 'Mole',
//     'serviess': 2,
//     'ingredients': ['pois‐chiche', 'soleil', 'poivre']
// };

var recipe = {
    name: 'Socca',
    servings: 2,
    ingredients: ['pois-chiche', 'soleil', 'poivre']
};

console.log(recipe.name);
console.log('Servings: ' + recipe.servings);
console.log('Ingredients:');

// for (var i = 0; i < recipe.ingredients.length; i++) {
//     console.log(recipe.ingredients[i]);
// }

recipe.ingredients.forEach(a => console.log(a));



// Exercice 4 :
// Écrivez un programme JavaScript pour afficher l'état de lecture (c'est‐à‐dire afficher le nom
// du livre, le nom de l'auteur et l'état de lecture) des livres suivants :
// Indication :
// var library = [
//    {
//        title:  'The Road Ahead',
//        author: 'Bill Gates',
//        libraryID: 1254
//    },
//    {
//        title: 'Walter Isaacson',
//        author: 'Steve Jobs',
//        libraryID: 4264
//    },
//    {
//        title: 'Mockingjay: The Final Book of The Hunger Games',
//        author: 'Suzanne Collins',
// 2       libraryID: 3245
//    }];
var library = [
    {
        title: 'Bill Gates',
        author: 'The Road Ahead',
        readingStatus: true
    },
    {
        title: 'Steve Jobs',
        author: 'Walter Isaacson',
        readingStatus: true
    },
    {
        title: 'Mockingjay: The Final Book of The Hunger Games',
        author: 'Suzanne Collins',
        readingStatus: false
    }];

// for (var i = 0; i < library.length; i++) {
//     var book = "'" + library[i].title + "'" + ' by ' + library[i].author + ".";
//     if (library[i].readingStatus) {
//         console.log("Already read " + book);
//     } else {
//         console.log("You still need to read " + book);
//     }
// }

library.forEach(a => {
    var book = "'" + a.title + "'" + ' by ' + a.author + ".";
    a.readingStatus ? console.log("Already read " + book) :
        console.log("You still need to read " + book);
});

function afficherLibrairie(lib) {
    lib.forEach(a => {
        var book = "'" + a.title + "'" + ' by ' + a.author + ".";
        a.readingStatus ? console.log("Already read " + book) :
            console.log("You still need to read " + book);
    });
}

afficherLibrairie(library);

// Exercice 5 :
// Partie 1
// Créez un constructeur qui permet de créer un guerrier. Ce constructeur initialisera un objet
// avec les caractéristiques suivantes :
// ‐ Un nom (string)
// ‐ Une valeur d'attaque (number)
// ‐ Une valeur de défense (number)
// ‐ Une valeur de santé (number)

class Guerrier {
    nom;
    av;
    ad;
    vs;

    constructor(nom, av, ad, vs) {
        this.nom = nom;
        this.av = av;
        this.ad = ad;
        this.vs = vs;
    }
}
// Une méthode combat qui permet de réduire la vie de la cible selon la valeur de l'attaque du
// combattant.
// Par exemple si guerrier1 a 10 d'attaque et guerrier 30 de santé, quand guerrier1 attaque
// guerrier2 sa santé passe à 20. En termes de code vous devriez avoir quelque chose comme :
// guerrier1.attack(guerrier2);



// Partie 2
// Créer un autre type de personnage : le magicien.
// Vous allez donc créer un constructeur pour notre magicien qui contiendra les mêmes
// proriétés et méthodes que notre guerrier. Le magicien disposera en plus :
// D'une propriété mana (number)
// D'une méthode de soin qui consomme 10 de mana mais rajoute 10 de vie au magicien
// (attention si le mana est inférieur à 10, elle ne doit pas pouvoir être lancée)
// Améliorez également un peu vos méthodes de soin et de combat:
// Faites en sorte que la méthode de combat, quand elle est lancée, affiche le nom du
// personnage qui attaque et de celui qui est attaqué, puis à la fin affiche la vie restante du
// personnage qui a été attaqué
// La méthode de soin, si le personnage a assez de mana doit afficher que le personnage essaie
// de se soigner, puis afficher son nouveau niveau de vie. Si le personnage n'a pas assez de
// mana, elle affiche simplement un message d'erreur.
// Pour tester ce nouveau script, créez un magicien, dites à vos deux guerriers de l'attaquer
// 3chacun leur tour. Dites ensuite au magicien de se soigner, puis d'attaquer un des deux
// guerrier.
class Warrior {

    name;
    attack;
    defense;
    health;
    stuff = [];

    constructor(name, attack, defense, health, stuff) {
        this.name = name;
        this.attack = attack;
        this.defense = defense;
        this.health = health;
        this.stuff[5] = stuff;
    }

    fight(warrior) {
        if (warrior.health <= 0) {
            console.log(warrior.name + " is dead ");
        } else if (warrior.health >= 0 && warrior.health <= 45) {
            console.log(this.name + " finish " + warrior.name);
            warrior.health = 0;
            console.log(warrior.name + " is dead ");
        } else {
            console.log(this.name + " attacks " + warrior.name);
            warrior.health = warrior.health - this.attack;
            console.log(warrior.name + " has " + warrior.health + " life left");
        }
    }

    specialFight(warrior) {
        if (warrior.health <= 0) {
            console.log(this.name + " can not attack " + warrior.name + " is dead ");
        } else if (warrior.health >= 0 && warrior.health <= 45) {
            console.log(this.name + " finish " + warrior.name);
            warrior.health = 0;
            console.log(warrior.name + " is dead ");
        } else {
            console.log(this.name + " special attacks " + warrior.name);
            console.log("Defense");
            warrior.defense = 0;
            warrior.health = warrior.health - (this.attack * 2);
            console.log(warrior.name + " has " + warrior.health + " life left and " + warrior.defense + " defense left");
        }
    }

    collect(o) {
        this.stuff.push(o);
        console.log(o);
    }

    eat(index) {
        this.stuff.splice(index, 1);
        this.health = this.health + 20;
        console.log(this.health);
    }
}

class Wizzard {

    name;
    attack;
    defense;
    health;
    mana;

    constructor(name, attack, defense, health, mana) {
        this.name = name;
        this.attack = attack;
        this.defense = defense;
        this.health = health;
        this.mana = mana;
    }
    
    fight(warrior) {
        if (warrior.health <= 0) {
            console.log(warrior.name + " is dead ");
        } else if (warrior.health >= 0 && warrior.health <= 45) {
            console.log(this.name + " finish " + warrior.name);
            warrior.health = 0;
            console.log(warrior.name + " is dead ");
        } else {
            console.log(this.name + " attacks " + warrior.name);
            warrior.health = warrior.health - this.attack;
            console.log(warrior.name + " has " + warrior.health + " life left");
        }
    }


    heal() {
        if (this.mana > 10) {
            console.log(this.name + " try to heal himself ");
            this.health += 10;
            this.mana -= 10;
            console.log(this.name + " has now " + this.health);
        }
        else {
            console.log("Not enough mana");
        }
    }

}

var thor = new Warrior("Thor", 40, 50, 200);
var zeus = new Warrior("Zeus", 60, 30, 200);

thor.fight(zeus);
thor.fight(zeus);
thor.fight(zeus);
thor.fight(zeus);
thor.fight(zeus);

thor.specialFight(zeus);
zeus.collect("Pomme");
zeus.collect("Pomme");
zeus.eat(0);
zeus.fight(thor);

var Gandalf = new Wizzard("Gandalf", 30, 40, 250, 40);

thor.fight(Gandalf);
zeus.fight(Gandalf);
Gandalf.heal();
Gandalf.fight(thor);


