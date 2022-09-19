class Productos {
    constructor(nombre, precio) {
        this._nombre = nombre;
        this._precio = precio;
    }
    
    get nombre() {
        return this._nombre;
    }
    
    get precio() {
        return this._precio;
    }
    
    set nombre(nombre) {
        this._nombre = nombre;
    }
    set precio(precio) {
        this._precio = precio;
        }
    }
    const producto1 = new Productos("espejo", 3500);
    const producto2 = new Productos("marcadores", 2600);
    const producto3 = new Productos("balon", 30000);
    const producto4 = new Productos("lapiz", 1000);
    const producto5 = new Productos("colores", 7600);
    const producto6 = new Productos("collar", 50000);
    

    var carrito = [];
    let tiempo= 1000;
    let presupuesto= 200000;
    let subtotal = 0;
    carrito.push(producto1, producto2, producto3);
     function compra() {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
            console.log("Cargando")
            let a=2+2
            if (a===4) {
                resolve("es correcto");
            }else{
                reject("Error");
            }
        })
    }, tiempo);

     }
     compra(agregar).then((value)=>{
        console.log(`esta bien${value}`)
        return value;
     })
     compra(calculapresupuesto).then((value)=>{
        console.log(`esta bien${value}`)
        return value;
     })
     .catch((value) => {
        console.log(`esta mal${value}`)
     })

     function agregar() {
        setTimeout(() => {
        for (let  i= 0;  i< carrito.length; i++) {
             subtotal+= carrito[i].precio;   
        }
        console.log(subtotal)
        return subtotal;
    }, tiempo + 1000);
    }
    function calculapresupuesto() {
        saldo=0;
        if(subtotal>presupuesto){
            console.log("sobre pasa el presupuesto");
        }else( function suma){
            saldo=subtotal-presupuesto;

             console.log(`tu saldo es:${saldo}`)
    
        }
        
    }


    /*function agregar() {
        setTimeout(() => {
        subtotal= 0;
        for (let  i= 0;  i< carrito.length; i++) {
             subtotal+= carrito[i].precio;   
        }
        console.log(subtotal)
    }, 2000);
    }
agregar(carrito);

function calculapresupuesto(saldo) {
    saldo=0;
    if(subtotal>presupuesto){
        console.log("sobre pasa el presupuesto");
    }else{
         saldo=subtotal-presupuesto;
         console.log(`tu saldo es:${saldo}`)

    }
    
}
function parcial() {
    return valor= new promise(function (resolve, reject) {
        if

    })
}

/*let promise = new Promise(function (resolve, reject) {
    // do something that might take a while
    // let's just set x instead for this example
    let x = 20;
    if (x > 10) {
    resolve(x); // on success
    } else {
    reject("Too low"); // on error
    }
   });
   promise.then(
    function (value) {
    console.log("Success:", value);
    },
    function (error) {
    console.log("Error:", error);
    }
   );

   //ejercicio 2

   const promise = new Promise((resolve, reject) => {
    resolve("success!");
   })
   
   [ 351 ]
    .then(value => {
    console.log(value);
    return "we";
    })
    .then(value => {
    console.log(value);
    return "can";
    })
    .then(value => {
    console.log(value);
    return "chain";
    })
    .then(value => {
    console.log(value);
    return "promises";
    })
    .then(value => {
    console.log(value);
    })
    .catch(value => {
    console.log(value);
    })*/

    //ejericio 3
//Promises async await promise (30 de Agosto)


/*const promise = new Promise((resolve, reject) => {
    resolve("success!!");
   })
    .then(value => {
    console.log(value);
    return "contando";
    })
    .then(value => {
    console.log(value);
    return "1";
    })
    .then(value => {
    console.log(value);
    return "2";
    })
    .then(value => {
    console.log(value);
    return "3";
    })
    .then(value => {
    console.log(value);
    })
    .catch(value => {
    console.log(value);
    })*/

    //ejercicio de suma
    /*const promise = new Promise((resolve, reject) => {
        x = 1;
        resolve(x);
       })
        .then(value => {
        console.log(value);
        return ++value;
        })
        .then(value => {
        console.log(value);
        return ++value;
        })
        .then(value => {
        console.log(value);
        return ++value;
        })
        .then(value => {
        console.log(value);
        return ++value;
        })
        .then(value => {
        console.log(value);
        })
        .catch(value => {
        console.log(value);
        })*/

//suma con settimeout
/*const promise = new Promise((resolve, reject) => {
    x = 1;
    resolve(x);
   })
    .then(value => {
    setTimeout(() => {
        console.log(value);
    return ++value;
    }, 1500);
    })
    .then(value => {
    setTimeout(() => {
        console.log(value);
    return ++value;
    }, 2000);
    })
    .then(value => {
    setTimeout(() => {
        console.log(value);
    }, 2500);
    return ++value;
    })
    .then(value => {
    setTimeout(() => {
        console.log(value);
    return ++value;
    }, 3000);
    })
    .then(value => {
    console.log(value);
    })
    .catch(value => {
    console.log(value);
    })

    //receta con promesas

function miPromesa(nombre) {
return new Promise((resolve, reject)=>{
    setTimeout(() => {
        console.log(`hola ${nombre}`)
        resolve(nombre);
    }, 1000);
})
}
miPromesa(`Soacha`)
.then((value)=>{
console.log(`saludo a ${value}`);
})
.then(externa)
function externa(parametro){
setTimeout(() => {
    console.log(`Dato recibido del then: ${parametro}`)
    console.log(`Soy una funcion externa`)
    console.log(`Con retardo de 2 segundos`)
}, 2000);
}
