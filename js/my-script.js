var nome = prompt('Inserisci il tuo nome');
var cognome = prompt('Inserisci il tuo cognome');
var colore = prompt('Inserisci il tuo colore favorito');
var x = '21'

var gen_password = nome + cognome + colore + x;

document.getElementById ('password').innerHTML ='La tua password è ' + gen_password;