function createReversePyramid(height) {
    //boucle 1 qui itere sur la hauteur demandé par le user
    for (var i = 1; i <= height; i++) {
        var row = '';
        //deuxieme boucle qui crée les espaces
        for (var j = 1; j <= (height - i); j++) {
            row += ' ';
        }
        //3e boucles qui crée les #
        for (var k = 1; k <= i; k++) {
            row += '#';
        }
        //ça imprime la ligne à la fin de chaque boucle 1
        console.log(row);
    }
}

const row = prompt("Salut, bienvenue dans ma super pyramide ! Combien d'étages veux-tu ?")

createReversePyramid(row);