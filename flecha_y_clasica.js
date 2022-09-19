//Determinar los divisores de un número introducido por teclado
let num = prompt('ingresa un numero');

while(isNaN(num) || num == 0){

num = prompt('ingresa un numero');

}

let numeros = [];

for(i = 0; i < num; i++){

if(num % i === 0){
  numeros.push(parseInt(i));

}

}

let suma = 0;

numeros.forEach(function(numero){

suma += numero;

})

console.log(parseInt(suma))

if(suma < num){
console.log(`La suma de los divisibles es ${suma} y es menor a ${num}, por lo tanto el ${num} es deficiente`);

}else{
console.log(`La suma de los divisibles es ${suma} y es mayor a ${num}, por lo tanto el ${num} no es deficiente`);

}

//Si un numero es primo o no

if(numero % i === 0) return false;
for(let i = 2; i <= numero; i++)
        if(numero % i === 0) return false;


//Determinar si un numero es perfecto o no

var c = 100;
var j = 2;
var numerosPrimos = [];

for (; j < c; j++) {

  if (primo(j)) {
    numerosPrimos.push(j);
  }
  
}

console.log(numerosPrimos);

function primo(numero) {

  for (var i = 2; i < numero; i++) {

    if (numero % i === 0) {
      return false;
    }

  }

  return numero !== 1;
}

//investigar sobre charles, babbageada lovelace
/*PROGRAMACION ORIENTADA A OBJETOS (GENERALIDADES)
Una clase es la definición de uno o muchos objetos
Un objeto es una instancia de una clase
Un objeto es un dato creado por el desarrollador
Los objetos son similares a las variables, pero además de almacenar información (estado) tienen funcionalidad (comportamiento)*/

/*CONSTRUCTOR
•	Es una función especial.
•	Siempre esta dentro de una clase
•	Sirve para inicializar un objeto
•	Tiene parámetros pero son opcionales*/

//tarea https://github.com/padillasam/2453232