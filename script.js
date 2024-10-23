// Définition de la fonction pour inverser une chaîne
function inverserChaine(chaine) {
    return chaine.split('').reverse().join('');
}

let resultat = inverserChaine("Bonjour");
console.log(resultat); 
//exo1 numoro1





// Définition de la fonction pour compter le nombre de caractères dans une chaîne
function compterCaracteres(chaine) {
    return chaine.length;
}

let nombreDeCaracteres = compterCaracteres("Bonjour");
console.log(nombreDeCaracteres);
//exo1 numoro2






function titleCase(str) {
    let words = str.toLowerCase().split(' ');
    
    let array =[];

    words.forEach(word => {
        let firstLetter = word.charAt(0).toUpperCase();
        let replacement = word.replace(word.charAt(0), firstLetter);
        array.push(replacement);
    });
    console.log(array.join(' '));
}
titleCase('bonjour tout le monde');
//exo 1 numero 3






function findnumber (tableau){
    let max = Math.max(...tableau);
    let min = Math.min(...tableau);

    console.log(" Le nombre max est : " +max);
    console.log(" Le nombre min est : " +min);
}
let nombre = [10, 25, 87, 988];
findnumber(nombre);
// EXERCICE 2 NUMERO 1






// Exo2 num2 somme des éléments d'un tab
const tab = [1,2,3,5,9,6,4,7,8,0];
const sum = tab.reduce((acc,val) =>{
    return acc + val 
},0)
console.log(sum);






function filtrerTableau(tableau, condition) {
    return tableau.filter(condition);
  }
  const nombres = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const conditionPairs = (nombre) => nombre % 2 === 0;
  
  console.log(filtrerTableau(nombres, conditionPairs)); 
  
  const conditionSuperieurCinq = (nombre) => nombre > 5;
  
  console.log(filtrerTableau(nombres, conditionSuperieurCinq)); 
  //exo 2 numero 3






//exo 3 qstion 1

function facto(n) {
    if (n === 0 || n === 1) {
        return 1;
    } else {
        return n * facto(n - 1);
    }
}
console.log(facto(0));






// E3Q2
function isPrime(nombre) {
    if (nombre === 2 || nombre === 3) {
        return true;
    }

    if (nombre < 2 || nombre % 2 === 0) {
        return false;
    }

    for (let i = 3; i <= Math.sqrt(nombre); i += 2) {
        if (nombre % i === 0) {
            return false;
        }
        return true;
}
console.log(isPrime(3)); 
console.log(isPrime(4));
console.log(isPrime(29));
}





// exo 3 numero 3
function fibonacci(n) {
    let sequence = [0, 1];
    
    for (let i = 2; i < n; i++) {
      sequence.push(sequence[i - 1] + sequence[i - 2]);
    }
  
    return sequence.slice(0, n); // Pour retourner exactement 'n' termes
  }
  console.log(fibonacci(5));  // ➞ [0, 1, 1, 2, 3]
  console.log(fibonacci(10)); // ➞ [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]






