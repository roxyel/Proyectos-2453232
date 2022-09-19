//llamar la funcion por el nombre para que funcione (impresora)
/*function impresora(prmtr){
    console.log('Soy una impresora...');
}
impresora();*/

//funcion suma
/*function suma(a,b){
    return a+b;
}
suma(10, 4)*/

 //formula cuadratica (hecha por el profesor)
 /*function cuadratica(a,b,c){
    r1=(b*-1+Math.sqrt(Math.pow(b,2)-4*a*c))/(2*a)
    console.log(r1);
 }

 cuadratica(1,4,2);*/

 //******************************************************/

 //llenar vector
 function llenarvector(vector, tam){
    for (let i = 0; i < tam; i++) {
        vector[i]=Math.round(Math.random()*100);
    }
    return vector;
 }
 var v=[];
 var t=15;
 llenarvector(v,t);
 console.log(v);

 //funciones flecha, son anonimas (investigar)
 const hola=(parametro)=>{
    //estructura. se pueden omitir los parentesis SOLAMENTE cuando hay un solo parametro.
 }
 //Hacer todas las actividades que tenga atrasadas porque son tarea

 //TAREA: escoger 5 ejercicios de los pdfs y hacerlos en funcion flecha y en funcion clasica y hacer la moda, mediana y media