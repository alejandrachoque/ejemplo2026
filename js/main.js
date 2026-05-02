//console.log("Hola Mundo");
//const frutas=["Manzana","pera","Mango"];
//console.log(frutas.length);

//console.log("Cantidad de elementos:" + frutas.length); /*length es una propiedad importante*/
//console.log(frutas[frutas.length-1]);

/*frutas.push("Banana"); //agrega al final del arreglo o array
console.log(frutas.length);
frutas.pop();
console.log(frutas.length);
console.log(frutas);*/

/*const colores=["verde","blanco","azul"];
//agregar uno o mas elementos al inicio
colores.unshift("rojo","morado")
let valorColor=colores.shift();
console.log(colores);
console.log(valorColor);


const colores=["verde","blanco","azul"];
//agregar uno o mas elementos al inicio
colores.unshift("rojo","morado")
colores.splice(1,2);//elimina elementos de indice impar
console.log(colores);

const colores=["verde","blanco","azul"];
colores.splice(1,0,"rojo","morado");
console.log(colores);
const numeros=[1,2,5,10];
for(let i=0;i < numeros.length;i++){
    if(numeros[i] % 2==0){
        console.log(numeros[i] + " es par");   
    } else{
        console.log(numeros[i] + " es impar");
        
    }
}


//tambein se puede usar el forEach
const numeros=[1,5,8];

let contadorImpares=0;
let contadorPares=0;

numeros.forEach(
   (numero)=> {
        if(numero%2==0){
            contadorPares++;
        }else{
            contadorImpares++;
        } 
   }
)
console.log("Cant. Pares: "+contadorPares);
console.log("Cant. Impares: "+contadorImpares);

const numeros=[1,2,3,4];
//para crear un nuevo arreglo, tranforma y crea un nuevo arreglo no modifica el original
const dobles=numeros.map((n)=>n*2);
console.log(dobles);
*/
const numeros=[1,2,3,4];
const pares= numeros.filter((n)=>n%2==0);
//console.log(pares);
let hallado=numeros.find((n)=>n > 3)//devuelve el primer elemento que cumpla
let hallado2=numeros.findIndex((n)=>n > 2);//devuelve el indice
let sonPares=numeros.every((n)=>n%2==0)//devuel true o falso si los elemento scumple o no todos, la condicion

const frutas=["Manzana","pera","Mango"];
console.log(frutas.includes("Manzana"));//devuelve true o false si la mazana no esta o esta

