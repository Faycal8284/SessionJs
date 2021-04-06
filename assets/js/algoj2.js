
// Tableau Array
// - Une variable povant avoir simultanément en ensemble de valeurs
// // - Le premier indice du tableau est 0
function fun() {
    var tab = [2, 3, 4, 5];

    // // Recuperer la taille du tableau
    console.log(tab.length)

    // //Afficher 1er élément du tableau
    console.log(tab[0])

    // //Affiche le tableau 
    console.log(tab)

    // //Parcourir et afficher un tableau 
    for (i = 0; i < tab.length; i++) {
        console.log(tab[i])
    }

    for (elt of tab) {
        console.log(elt)
    }

}
fun();

// Opérations sur les tableaux
// - push () ajoute un élément
// - pop () supprime dernier élément
// - shift () supprime le premier élément
// - reverse () inverse l'ordre
// - sort () trie le tableau
// - splice () permet d'extraire, ajouter ou supprimer un ou plusieurs élément
// - slice () permet d extraire un sous tableau a partir tu tableau f'origine
// - include () renvoie true si la valeur passé en parametre existe dans le tableau
// - indexof () retourne la position de l'élément passer en parametre
// - fill () permet d'initialiser ou modifier valaeur d'un array


// splice
var sports = ["foot", "boxe", "tennis", "petanque", 'rugby'];
var tab2 = sports.splice(2, 1, "basket");

for (elt of tab2) {
    console.log(elt)
}

// slice
var tab = sports.slice(0, 4);
for (elt of tab) {
    console.log(elt)
}
//fill
var tab = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
tab.fill(9, 2, 5)
console.log(tab)


// exo calculer la somme et le produits d'un tableau d'entier
tab1 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
sum = 0;
products = 1;
for (i = 0; i < tab1.length; i++) {
    sum += tab1[i];
    products *= tab1[i]

}
console.log(products);
console.log(sum);

for (elt of tab1) {
    sum += elt
    products += elt
}


// .forEach () parcourir un tableau
// . map() appliquer une fonction a un tableau 
// .filter () filtre les éléments d'un tableau selon un critère sous la forme d'une fonction anonyme
// .reduce () réduis tous les élément d'un tableau en un seul selon une régle définie sous la forme d'une fonction fléché ou anonyme


var tab = [2, 3, 5];
tab.map(x => x + 3)
    .filter(x => x > 5)
    .forEach(
        function (a) {
            console.log(a - 3)
        }
    );

var somme = tab
    .map(x => x + 3)
    .filter(x => x > 5)
    .reduce(function (sum, elt) {
        return sum + elt

    });
console.log(somme)




// ECMA 5
function somme(a, b) {
    return a + b
}
somme(1,3)

// ECMA 6
    const addition= (a,b) => a +b;
    var res=  addition(1,3);
    console.log(res)


//autre 
function somme(a, b) {
    return a + b
}
var res = somme(1, 3)
console.log(somme)



let somme2 = new Function("a","b", "return a+b")
let resultat= somme2(1,5);
console.log(resultat)

// exo ecrire une fonction en ecma5 et ecma6 qui récupére la valeur des tableaux et renvoie le premier élément

tab3= [1, 2, 3, 4, 5, 6, 7, 8, 9]
function exo3(tab3){
    return tab3[0]
}

const f2 = (arr) => arr[0]

