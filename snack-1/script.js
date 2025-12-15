// // Snack 1
// Creare un array di oggetti:
// Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso.
// Stampare a schermo la bici con peso minore.

const bici = [
    {
        nome: 'Bici da corsa',
        peso: 7
    },
    {
        nome: 'Mountain bike',
        peso: 12
    },
    {
        nome: 'Bici city',
        peso: 10
    },
    {
        nome: 'Bici elettrica',
        peso: 22
    }
];


// Inizializzo il peso minimo con il peso della prima bici
let pesoMinore = bici[0].peso;

// Inizializzo la bici più leggera con la prima bici dell’array
let biciPiuLeggera = bici[0];

// Ciclo tutte le bici partendo dalla seconda
for (let index = 1; index < bici.length; index++) {

    // Se il peso della bici corrente è minore del peso minimo salvato
    if (bici[index].peso < pesoMinore) {

        // Aggiorno il peso minore
        pesoMinore = bici[index].peso;

        // Aggiorno la bici più leggera
        biciPiuLeggera = bici[index];
    }
}

console.log(
    `La bici più leggera è ${biciPiuLeggera.nome} e pesa ${biciPiuLeggera.peso} kg`
);