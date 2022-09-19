class Producto{
    constructor(nombre, precio, marca){
        this._nombre=nombre;
        this._precio=precio;
        this._marca=marca;
    }
    get nombre(){
        return this._nombre;
    }

    set nombre(nombre){
        this._nombre=nombre;
    }

    get precio(){
        return this._precio;
    }

    set precio(precio){
        return this._precio=precio;
    }

    get marca(){
        return this._marca=marca;
    }

    set marca(marca){
        return this._marca=marca;
    }
}


let prod1=new Producto('espejo',4000000, 'honda');
console.log(prod1.nombre);
prod1.nombre="retrovisor";
console.log(prod1.nombre);
console.log(prod1.precio);
prod1.precio="4 millones";
console.log(prod1.precio);

setTimeout(() => {
    console.log('Cotizar espejo')
}, 1000);
setTimeout(() => {
    console.log('Moldear la masa')
}, 2000);