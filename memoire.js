// Les différentes boucles

// Boucle FOR
i=0
for (i; i<10; i++) {
    console.log('i = '+i)
}

// Boucle WHILE
i = 0
while (i!=10) {
    console.log('valeur de i = '+i)
    i++
}

// Boucle DO WHILE
i=0
do {
    console.log(i)
    i++
}
    while (i<10)


// TRY CATCH
try {
    blablabla
    console.log('premier affichage')
}
catch (erreur) {
    console.log(erreur.message)
    throw("j'arrête")
}
console.log("second message")


// Les fonctions sous Javascript :

// function maFonction(argument1, argument 2, ...) {
//     ...
// }
// Appel de la fonction :
// maFonction(argument1, argument2, ...)
function disBonjour(titre, nom) {
    console.log("Bonjour " + titre + " " + nom + " !")
}
disBonjour("Monsieur", "Dupont")
disBonjour("Monsieur", "Durant")
disBonjour("Madame", "Poupette")

// Les fonctions RETURN
// function maFonction(argument1, argument 2, ...) {
//     ...
//     return valeur
// }
// 
// var1 = maFonction(argument1, argument2, ...)
function ttc(ht) {
    var tva = 19.6
    var tvaTot = (ht * tva) / 100
    return ht + tvaTot
}

var prixTtc = ttc(100)
console.log(prixTtc)