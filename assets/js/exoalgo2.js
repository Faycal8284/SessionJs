//Créez une fonction qui prend l'âge et retourne l'âge
//en jours.
//ECMA5
function agesenjours5 (age){
return  age*365
}
console.log(agesenjours5(25))

//ECMA6
const ageenjours6 = (age)=> age*365
console.log(ageenjours6(29))

// Ecrivez une fonction qui prend un nombre entier de minutes et retourne la conversion en
// secondes.
//ECMA5
function convert5 (nbr){
    return  nbr*60
}
console.log(convert5(29))

//ECMA6
const convert6 = (nbr)=> nbr*60
console.log(convert6(50))

// Reprenez l'exercice "calculer la somme et le produit ...", appliquez la methode reduce()
// soit avec une fonction anomyme, ou une fonction fléchée 
//ECMA5

tab= [1,2,3,4,5,6,7,8,9];
function somme(tab){
    return tab.reduce(function(a,b){
        return a+b;
    })
};
console.log(somme(tab))

//ECMA6
const somme2= (tab)=> tab.reduce((a,b)=>(a+b))
console.log(somme2(tab))

// Tester les instructions document.write et document.writeln en affichant au minimum un
// nombre, une phrase, le contenu d'une variable ...
// Que constatez‐vous sur la page HTML ?


// Définir en JavaScript un tableau contenant des notes d'étudiants comprises entre 0 et 20.
// Implémenter en JavaScript les fonctions qui permettent d'afficher un tel tableau, de savoir
// combien d'étudiants ont eu 10 plus, de calculer la moyenne des notes, de connaître la note
// maximale, de rechercher une note particulière

tab3= [9,15,20,16,11,3]
sum= 0
function exo5(tab){
    for (i = 0; i < tab.length; i++) {
    }
    return tab.filter(note=> note>10).length;
}
console.log(exo5(tab3))


function moyenne(tab){
     for (elt of tab){
     result=sum+= elt
    }return result/tab.length
}
console.log(moyenne(tab3))

function maximum(tab){
    
    for(elt of tab){
        var max= elt;
        if(elt>max){
            max=elt
        }
        return max
    }
}
console.log(maximum(tab3))





// CORRIGE
// Écrivez un programme JavaScript pour calculer la somme et le produit d'un tableau d'entiers.

var array = [1, 2, 3, 4, 5, 6],
    s = 0,
    p = 1;

// for (var i = 0; i < array.length; i += 1) {
//     s += array[i];
//     p *= array[i];
// }

for (var elt of array) {
    s += elt;
    p *= elt;
}

// Créez une fonction qui prend l'âge et retourne l'âge en jours.

function calcAge(age) {
    return age * 365;
}

// const calcAge = (age) => age * 365;
var r = calcAge(37);
console.log(r);

// Ecrivez une fonction qui prend un nombre entier de minutes et retourne la conversion
// en secondes.

function convert(min) {
    return min * 60;
}

// const convert = (min) => min * 60;

var r = convert(2);
console.log(r);

// Reprenez l'exercice "calculer la somme et le produit ...", appliquez la methode reduce()
// soit avec une fonction anomyme, ou une fonction fléchée

var somme = array.reduce(
    function (sum, elem) {
        return sum + elem;
    });

var somme = array.reduce((sum, elem) => sum + elem);

console.log(somme);

var produit = array.reduce(
    function (prod, elem) {
        return prod * elem;
    });

var produit = array.reduce((prod, elem) => prod * elem);

console.log(produit);


// Définir en JavaScript un tableau contenant des notes d'étudiants comprises entre 0 et 20.
// Implémenter en JavaScript les fonctions qui permettent d'afficher un tel tableau, de savoir combien d'étudiants ont eu 10 plus, 
// de calculer la moyenne des notes, de connaître la note maximale, de rechercher une note particulière

/* Affiche le contenu d'un tableau en HTML */

//  function affiche_tableau (t) {
//     document.writeln('<p>le tableau est :</p>');
//     document.writeln('<table border="1"><tr>');
//     for (var i=0 ; i<t.length ; i++) {
//         document.writeln('<td>',t[i],'</td>');
//     }
//     document.writeln('</tr></table>');
//   }

const affiche_tableau = (t) => t.forEach(a => console.log(a));

/* Calcule et affiche la moyenne des éléments d'un tableau */

// function affiche_moyenne(t) {
//     var somme = 0;
//     for (var i = 0; i < t.length; i++) {
//         somme = somme + t[i];
//     }
//     document.writeln('<p>la moyenne vaut ', (somme / t.length), '</p>');
// }

const affiche_moyenne = (t) => {
    var r = t.reduce((sum, elem) => sum + elem);
    return console.log("La moyenne est de " + r / t.length);
};

/* Compte et affiche combien ont eu 10 ou plus */

// function onteulamoyenne(t) {
//     var n = 0;
//     for (var i = 0; i < t.length; i++) {
//         if (t[i] >= 10) {
//             n = n + 1;
//         }
//     }
//     document.writeln('<p>', n, ' ont eu la moyenne.</p>');
// }

const onteulamoyenne = (t) => {
    var r = t.filter(elt => elt >= 10).length;
    return console.log(r + " au dessus de la moyenne");
};

/* Indique si un élément est présent dans un tableau ou non */

// function recherche(x, t) {
//     var i = 0;
//     while ((i < t.length) && (t[i] != x)) {
//         i = i + 1
//     }
//     if (i < t.length) {
//         document.writeln('<p>', x, ' est présent.</p>');
//     } else {
//         document.writeln('<p>', x, ' n\'est pas présent.</p>');
//     }
// }

const recherche = (x, t) => {
    var s = t.includes(x);
    return console.log(s + " existe bien");
};

/* Indique si un élément est la note maximale */

const max = (t) => {
    var a = Math.max(...t);
    return console.log("La note maximale est : " + a);
};


/* appels aux procédures définies ci-dessus */

var notes = [5, 12, 8, 20, 10];
notes[2] = 9;

affiche_tableau(notes);
affiche_moyenne(notes);
onteulamoyenne(notes);
recherche(12, notes);
recherche(2, notes);
max(notes);