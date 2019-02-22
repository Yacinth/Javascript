//Factorielle : multiplication du nombre par le nombre - 1
function calcFactorial(num) {
    if (num === 0) {
        return 1;
    } else {
        //retourne une multiplication de num par la fonction avec num - 1
        return num * calcFactorial(num - 1);
    }
}

const num = prompt("De quel nombre veut tu calculer la factorielle ?")
console.log(`Le résultat est : ${calcFactorial(num)}`);