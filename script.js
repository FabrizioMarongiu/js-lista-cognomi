
// Consegna
// 1. chiedi all’utente il cognome
// 2. inseriscilo in un array con altri cognomi: ‘bianchi’, ‘neri’, ‘rossi’, ‘verdi’, ‘gialli’
// 3. stampa la lista ordinata alfabeticamente
// 4. scrivi anche la posizione "umana", 1 oppure 2 oppure 3 oppure ecc... (non 0 oppure 1 oppure 2 oppure ecc.. tipici degli array), del nuovo utente inserito sopra all'interno dell'array, dopo l'ordinamento alfabetico


// CREO ARRAY CONTENENTI COGNOMI

var surnameList = ["rossi", "bianchi", "martini", "verdi"];

// CHIEDO ALL'UTENTE DI INSERIRE IL SUO COGNOME

var surnameUser = prompt('Inserisci il tuo cognome').toLocaleLowerCase().trim();

// STAMPO L'ARRAY CON L'INSERIMENTO DELL'UTENTE

surnameList.push(surnameUser);

console.log(surnameList);

var print = '';

for ( var i = 0; i < surnameList.length ; i++ ){

    print += '<li>' + surnameList[i] + '</i>';
}

console.log(print);

document.getElementById('lista').innerHTML = print;

// ORDINO L'ARRAY IN ORDINE ALFABETICO

surnameList.sort();
console.log(surnameList);

var numberList = surnameList.indexOf(surnameUser);

console.log(numberList);

numberList ++;

console.log('Il cognome ' + surnameUser + ' è posizionato al numero ' + numberList);

// STAMPO ARRAY

var orderedPrint = '';

for ( var i = 0; i < surnameList.length ; i++ ){

    orderedPrint += '<li>' + surnameList[i] + '</i>';
}

console.log(orderedPrint);

document.getElementById('listaOrdinata').innerHTML = orderedPrint;


document.getElementById('surname').innerHTML = surnameUser;


document.getElementById('position').innerHTML = numberList;

