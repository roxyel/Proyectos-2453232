class cuenta{
    constructor(codigo, banco, saldo, interesanual){
        this._codigo=codigo;
        this._banco=banco;
        this._saldo=saldo;
        this._interesanual=interesanual;
    }

    set codigo(codigo){
        this._codigo=codigo;
    }

    get codigo(){
        return this._codigo;
    }

    set banco(banco){
        this._banco=banco;
    }

    get banco(){
        return this._banco;
    }

    set saldo(saldo){
        this._saldo=saldo;
    }

    get saldo(){
        return this._saldo;
    }

    set interesanual(interesanual){
        this._interesanual=interesanual;
    }

    get interesanual(){
        return this._interesanual;
    }

}

const ob=new cuenta();
console.log(typeof(ob));


class ahorros extends cuenta{
    constructor(codigo, banco, saldo, interesanual){
        super(codigo, banco, saldo, interesanual);
    }
}

const ap1=new cuenta(1111222334, 'bancolombia', 25000, '5%');
console.log(ap1.codigo);
console.log(ap1.banco);
console.log(ap1.saldo);
console.log(ap1.interesanual);


//cuenta corriente

class corriente extends cuenta{
    constructor(codigo,banco, saldo, interesanual){
        super(codigo, banco, saldo,interesanual);
    }
}

const ap2=new cuenta(1111222334, 'bancolombia', 30000, '2%');
console.log(ap2.banco);
console.log(ap2.codigo);
console.log(ap2.saldo);
console.log(ap2.interesanual);

//poligono
//datos: base 10 y altura 14
//calcular el area



class poligono{
    constructor(base, lados, altura){
        this._base=base;
        this._lados=lados;
        this._altura=altura;
    }

    set base(base){
        this._base=base;
    }

    get base(){
        return this._base;
    }

    set lados(lados){
        this._lados=lados;
    }

    get lados(){
        return this._lados;
    }

    set altura(altura){
        this._altura=altura;
    }

    get altura(){
        return this._altura;
    }

    area(){
        return this._base * this._altura;
    }

    perimetro(){
        return 2 * (this._base += this._altura);
    }
}

const ap3=new poligono(10, null, 14);
console.log(ap3.base);
console.log(ap3.lados);
console.log(ap3.altura);
console.log(ap3.perimetro());
console.log(ap3.area());


//150 hasta 162 del libro//