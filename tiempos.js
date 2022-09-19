console.log('Hola');

setTimeout(() => {
    console.log('interrupción por timeout');
}, 2000);
setTimeout(function(){
    console.log('settimeout con funcion clasica')
}, 1000)
function externa(){
    console.log('soy externa al settimeout')
}
setTimeout(externa,500);
function saludos(){
    console.log("Hola Mundo");
}
setTimeout(saludos);
console.log('Debo ejecutarme antes del time out')
function saludos(nombre, rol){
    console.log(`Hola, mi nombre es ${nombre}`);
console.log(`Yo soy${rol}`);
}

saludos('juan', 'medico');
setTimeout(saludos, 3000, "Nathan", "Programador");

console.log('Mundo');


//EJERCICIO: Escriba un settimeout dentro de un ciclo que se repita n veces, imprima la variable del ciclo dentro del settimeout, luego en otra ejecucion fuera del settimeout y explique el comportamiento. Alterne el ejercicio utilizando LET y VAR en la variable del ciclo.

//Llenar con un arreglo con n cantidad de numeros con un rango de console.log(math.random()*(100-20)+20); <--Ejemplo, el rango puede ser de los numeros que yo quiera

//*********************************************************************** */
//EJERCICIO

const Productos= require('./Producto');
class Carrito{
    constructor(cliente,listaProductos){
     this._cliente = cliente;
     this._listaProductos = listaProductos;

    }
    get listaProductos(){
        return this._listaProductos;
    }
    set listaProductos(listaProductos) {
        this._listaProductos = listaProductos;
    }
    get cliente(){
        return this._cliente;
    }
    set cliente(cliente) {
        this._cliente = cliente;
    }
    // get cantidadProd(){
    //     return this._subtotal;
    // }
    // set cantidadProd(cantidadProd){
    //     this._cantidadProd = cantidadProd;
    // }

    // set cantidadProd(cantidadProd){
    //     this._cantidadProd = cantidadProd;
    // }


    añadirproducto(producto){
        this._listaProductos.push(producto);
    }

    eliminarProducto(){ 
        this._listaProductos.pop();
    }

    subtotal(subtotal){
        return this._precios * this._cantidadProd       
    }
}

module.exports = Carrito;


/**************** */

const productos = require('./productos')
class cupon {
    constructor (codigo, valorCupon){
        this.codigo = codigo;
        this.numero = valorCupon;
    }
    get codigo(){
        return this.codigo;
    }
    set codigo(cod){
        this.codigo = cod;
    }
    get valorCupon(){
        return this.numero;
    }
    set valorCupon(numero){
        this.numero = numero;
    }
    calcularDescuento(){
    }
}

module.exports = cupon;