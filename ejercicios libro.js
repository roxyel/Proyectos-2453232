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
    const promise = new Promise((resolve, reject) => {
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