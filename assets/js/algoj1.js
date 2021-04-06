function maFonction() {
    // // box de confirmation
    // var bin = confirm('press a button');

    // // box d'affichage avec une zone de text
    // var str = prompt('nom , prenom');
    // alert(str);
    console.log('hello world')
}
maFonction();

// Types de variables

// number
// String
// boolean
// Object
// undefined
console.log(typeof 5.2);
console.log(typeof true);
console.log(typeof "bonjour");
// le mot clé var à une visibilité une portée (scope) globale

// concaténation
var y = 1;
var x = "8";
console.log(y + x);

// transforme entier en number 
var y = 1;
var x = "8";
console.log(y + parseInt(x));

// afficher NaN
var y = 1;
var x = "BONJOUR";
console.log(y + parseInt(x));


// i++ => i=i+1
// i-- => i=i-1
// i+= 2 => i= i+2

// post incrémentation 
var i = 2;
var j = i++;
console.log(i); //3
console.log(j); //2

// pré incrémentation 
var i = 2;
var j = ++i;
console.log(i); //3
console.log(j); //3

// utiliser eval por évaluer une expression arithmétique sous forme de caractére (string)
var str = "2+3*5";
console.log(eval(str)); //17

// méthodes pour les chaines de caractére(string)

//length: longueur de chaine
//toUppercase(): mettre en majuscule
//toLowercase(): mettre ne miniscule
//trim(); supprimes les espaces au début et à la fin 
// subrst(): extrait une sous-chaine de caractères
// indexOf(): retourne la position la position d'une sous-chaine dans une chaine, -1sinon


var str = " bon jour ";
console.log(str.length); //affiche 12 car espace avant et fin


var sansEspace = str.trim();
console.log(sansEspace.length); // affiche 8 car efface espace avant apres mais pas au milieu

var str2 = "bonjour";
// extrait une sous chaine a partir de l'indice 3
console.log(str2.substr(3)); // affiche jour
console.log(str2.substr(3, 2)); // affiche jo car le deuxieme parametre recupére deux valeurs a partice de l'indice3
console.log(str2.substr(-3)); // affiche our car on part de la fin
console.log(str2.substring(1, 3)); // affiche on prend comme parametre l'indice de début et l'indice de fin (non inclus)
// détermine l'indice de la sous-chaine "jour" dans "bonjour"
console.log(str2.indexOf("jour")); // affiche 3
console.log(str2.indexOf("soir")); // affiche -1



// Écrivez un programme JavaScript pour afficher le jour et l'heure actuels.
// Indication :
// https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Date

var today = new Date();
var day = today.getDay();
// var month = today.getMonth() + 1;
// console.log(month);
var daylist = ["Dimanche", "Lundi", "Mardi", "Mercredi", "Jeudi", "Vendredi", "Samedi"];
var hour = today.getHours();
var minute = today.getMinutes();
var second = today.getSeconds();
var prepand = (hour >= 12) ? " PM " : " AM ";
console.log("Aujourd'hui, nous sommes " + daylist[day] + ", et il est " + hour + "h" + minute
    + "m" + second + "s" + prepand);

//if 
var x = 3;
if (x > 0) {
    console.log(x + " est strictement positif")
} else {
    console.log(x + " est strictement négatif ou nul")
}

// if else if else
var x = 0;
if (x > 0) {
    console.log(x + "est strictement positif")
} else if (x < 0) {
    console.log(x + "est strictement négatIF")
} else {console.log(x + "est nul") }

//opérateurs logiques

// && => est
// || => our
// ! => non
//if (condition && condition2 || condition 3){}


//opérateur de comparaison

// ==  => égalité
// ===  => égalité et type
// != , !== , >, <

//switch
var x= 5;
switch(x){
    case 1:
        console.log("1")
        break
    case 2:
        console.log("2")
        break
    case 3:
        console.log("3")
        break
    default:
        console.log("autre")
        break
}

switch (new Date().getDay()) {
    case 0:
        console.log("dimanche");
        break;
    case 1:
        console.log("lundi");
        break;
    case 2:
        console.log("mardi");
        break;
    case 3:
        console.log("mercredi");
        break;
    case 4:
        console.log("jeudi");
        break;
    case 5:
        console.log("vendredi");
        break;
    case 6:
        console.log("samedi");
        break;
}


//while 

var i=0;
// a chaque itération on teste la condition est on s arrete quand conditions atteinte
while (i<5){
    console.log(i);
    i++;
}

// do while execute au moins une fois le bloc avant de continuer
do {
    console.log(i);
    i++;
}while(i<5)

// for

for(let i=0; i<5; i++){
    console.log(i);
};

// var nbr=prompt("saisir un nombre");
// if(nbr % 2 == 0){
//     alert("pair")
// } else { alert("impair")};

// // simplification de l'écriture
// nbr %2 == 0 ?  alert("pair") : alert("impair");



// // exo ecrire un code qui demande deux nombre et affiche le chiffre le plus grand
// var nbr= prompt("saisir un nombre");
// var nbr2= prompt("saisir un deuxième nombre");
// nbr > nbr2 ? alert(nbr +'est plus grand'): alert(nbr2 + "est plus grand");

// exo ecrire un code qui affiche nombre pair de 0 a 10

for(let i=0; i<10; i++){
    if(i % 2 == 0){
        console.log(i)
    }
};

// // exo demander une température et si inferieur a une valeur seuil afficher message
// var temp= prompt("saisir une température")
// var seuil= 15
// temp>15 ? alert("superieur") : alert("infèrieur")

//exo itération de 1 a 100
//imprime fizz pour multiple de 3 buzz pour mutiple de 5 et fizz buzz si mutiple des 2

for (let i=0; i<100; i++){
if(i%5== 0 && i%3 == 0){
        console.log("fizzbuzfff")}
else if(i%3==0){
    console.log("fizz")
} else if(i%5==0){
    console.log("buzz")
}else{console.log("c")}
}

//exo ecrire un Code JS  pour construire le modèle suivant, en utilisant une boucle for imbriquée.
// *  
// * *  
// * * *  
// * * * *  
// * * * * *
var str = "";
for(var i = 0; i < 5; i++){
        str += "*";
        console.log(str);
    }

var str = "*";
for(var i = 0; i < 5; i++){
        str += " *";
        console.log(str);
        }