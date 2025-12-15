// Snack2
// Creare un array di oggetti di squadre di calcio.
// Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti.
// Nome sarà l’unica proprietà da compilare, le altre saranno tutte settate a 0.
// Generare numeri random al posto degli 0 nelle proprietà “punti” fatti e “falli subiti”.
// Infine, creiamo un nuovo array i cui elementi contengono solo nomi e falli subiti e stampiamo tutto in console.


const squadre = [
    {
        nome: 'Juventus',
        puntiFatti: 0,
        falliSubiti: 0
    },
    {
        nome: 'Milan',
        puntiFatti: 0,
        falliSubiti: 0
    },
    {
        nome: 'Inter',
        puntiFatti: 0,
        falliSubiti: 0
    },
    {
        nome: 'Roma',
        puntiFatti: 0,
        falliSubiti: 0
    }
];

// ciclo sull'array per assegnare valori random
for (let index = 0; index < squadre.length; index++) {
    squadre[index].puntiFatti = Math.floor(Math.random() * 100);
    squadre[index].falliSubiti = Math.floor(Math.random() * 50);
}

const newArraySquadre = [];

for (let index = 0; index < squadre.length; index++) {

    //cosi facendo creo un array di soli valori e non di oggetti
    // newArraySquadre.push(squadre[index].nome);
    // newArraySquadre.push(squadre[index].falliSubiti);

    //cosi creo un array di oggetti con solo le proprieta che mi servono
    newArraySquadre.push({
        nome: squadre[index].nome,
        falli: squadre[index].falliSubiti,
    });
    
}

console.log(newArraySquadre);

