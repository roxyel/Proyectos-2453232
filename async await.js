///////////////function saySomething(x) {
/*return new Promise(resolve => {
    setTimeout(() => {
    resolve("something" + x);
    }, 2000);
    });
   }
   async function talk(x) {
    const words = await saySomething(x);
    console.log(words);
   }
   talk(2);
   talk(4);
   talk(8);*/
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
var carrito = [];
carrito.push(producto1, producto2, producto3);

function verdatos() {
  return new Promise((resolve, reject) => {
    console.log("cargando productos");
    setInterval(() => {
      resolve(carrito);
    }, 2000);
  });
}

async function mostrar() {
  let mis_productos = await verdatos();
  console.log(mis_productos);
}

mostrar();

function nombres() {
  return new Promise((resolve, reject) => {
    console.log("cuanto hay en el arreglo");
    setInterval(() => {
      resolve(carrito.length);
    }, 2000);
  });
}
async function verNombres() {
  let p = await nombres();
  console.log(p);
}
verNombres();
///----///
const promise = new Promise((resolve, reject) => {
  x = 1;
  resolve(x);
})
  .then((value) => {
    console.log(value);
    return ++value;
  })
  .then((value) => {
    console.log(value);
    return ++value;
  })
  .then((value) => {
    console.log(value);

    return ++value;
  })
  .then((value) => {
    console.log(value);
    return ++value;
  })
  .then((value) => {
    console.log(value);
  })
  .catch((value) => {
    console.log(value);
  });
