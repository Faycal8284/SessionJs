// Math : contient des méthodes permettant de réaliser des opérations sur les nombres
// Date: permettant de manipuler les dates sur

console.log(Math.round(2, 1)) //Affiche 2
console.log(Math.pow(2, 3)) //Affiche 8
console.log(Math.min(2, 3, -4, 1)) //Affiche -4
console.log(Math.min(2, 3, -4, 1)) //Affiche 3
console.log(Math.random()) //Affiche un nombre aléatoire
console.log(Math.floor(Math.random() * 10)) //Affiche un entier compris entre 0 et 9
console.log(Math.sqrt(4)) // Affiche 2 cad racine carrée de 4
console.log(Math.abs(-2)) // Affiche 2 cad valeur absoluement

//Opérateurs

// typeof: pour obtenir le type d'une variable
// new: pour créer un objet en untilisant un constructeur
// this: pour désigner l'objet courant les

// in: pour tester si un indice est dans le tableau, si une méthode appartient à un objet

var tab1 = [2, 3, 4, 5]
if (2 in tab1) {
    console.log("oui") //Affiche Oui pour
}

var perso = { nom: 'John', prenom: 'Wick' }

// Controle si nom est dans perso
if ("nom" in perso) {
    console.log("oui")// Affiche oui
};
// Controle si Wick est présent
Object.keys(perso).forEach(
    function (key) {
        if (perso[key] == 'wick') {
            console.log('exists')
        }
    })

// test des keys
var keys = Object.keys((perso))
for (key of keys) {
    console.log(key + ' ' + perso[key])
}
// test si wick présent
perso.nom === 'wick' ? console.log('yes') : console.log('no');



// instanceOf retourne true si l'objet donné  et du type spécifié
var jour = new Date(2021, 04, 02);
if (jour instanceof Date)
    console.log('oui')


//constante: élément qui ne peut pas changer de valeur de

const PI = 3.1415
//PI=5 //Affichera une erreur

const obj = { nom: 'John', prenom: 'Wick' }
//obj ={}//génére aussi une erreur

//Pourtant l'instruction suivante est correcte et ne lève pas d'exception

obj.nom = 'doe';
obj['prénom'] = 'denzel';
obj.age = 50
console.log(obj);


const tab = [2, 3, 4];

//tab=[] // genere erreur


//Pourtant la pas d'erreur et affiche [9,0,4]
tab[1] = 0;
tab[0] = 9



// géré les exceptions 
function produits(a, b) {
    return a / b
}
console.log(produits(5, 0)) //Affiche 6
console.log(produits(2, 'a')) //Affiche NaN

// function produits(a, b) {
//     if (isNaN(a) || isNaN(b)) {
//         throw 'les parametres doivent etre de type number'
//     }
//     return a * b
// }
//ou

try {
    console.log(produits(2, 'a')) // affiche NaN
} catch (e) {
    console.error(e)
}


function div(a, b) {
    if (b==0){
        throw 'la division n est pas autorisé'
    } return a/b
}

try{console.log(div(10,0))
}catch(e){console.error(e)
}
 
// Expressions regulières regex
// permet de vérifier si nos chaine de caratères respectent certains formats emails; mots de passe etc..

// recherche d'une sous chaine dans une chaine de caractère
var str= 'bonjour tout le monde';
var pos= str.search('tout') //cherche tout
var pos= str.search(/Tout/i)// cherche tout en étant insensible a la casse
console.log(pos)

// retourne - 1 si la sous chaine n'existe pas
var pos= str.search(/c/-1) 
console.log(pos) //affiche -1


var str= /AB/i;
var result = str.test("abbabbbbabbab");
console.log(result) //

// remplace toute les occurence
var chaine="abbabbabba";
var text= chaine.replace(/ab/g,'c'); //remplace tout les ab par c grace a g 
console.log(text)

// je cherche AA dans ma chaine
var str= /AA/i
var resultat= str.exec(chaine);
console.log("chaine trouvé"+resultat[0])
console.log("indice de la première occurence"+resultat.index)
console.log("texte complet"+resultat.input)



// met dans un tableau les occurence trouvé
var str=/AA/gi
var result= chaine.match(str);
console.log(result)


// avoir soit 1 a soit 0 a
var str= /ba?c/i
console.log(str.search('bac')) //affiche true
console.log(str.search('baac')) //affiche false

// La valeur doit contenir 4 chiffres obligatoirement
var p = "2345";
var str = /^([0-9]){4}$/;
if(p.match(str)){
    console.log("yes");
} else {
    console.log("No");
}

// le pseudo doit contenir des lettres, des chiffres ,des tirets du bas et doit fair min 6 caracteres
// et maximum 20
var p = "Jean_Baton06";
var str = /^([0-9a-zA-Z_]){6,20}$/;

if(p.match(str)){
    console.log("yes");
} else {
    console.log("No");
}

function ValidateEmail(mail) 
{
 if (/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(mail))
  {
    return (true)
  }
    console.log("You have entered an invalid email address!")
    return (false)
}

var res = ValidateEmail("mysitetest.com");
console.log(res);
