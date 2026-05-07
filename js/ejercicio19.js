/*export const botonSuerte=()=>{
document.getElementById('msg').innerText= "Conoceras al amor de tu vida el dia de la bandera";
}
document.getElementById("btn_suerte").addEventListener('click',botonSuerte);

*/
const msg = document.getElementById('msg');
const btn = document.getElementById('btn_suerte');

const frases = [
    "Conocerás al amor de tu vida el día de la bandera",
    "Hoy será un gran día para ti",
    "Se viene una oportunidad importante",
    "Alégrate, un camino de hermosas pasiones te espera",
    "Rodéate de personas que saquen lo mejor de ti",
];

const botonSuerte = () => {
    let indice = Math.floor(Math.random() * frases.length);
    msg.innerText = frases[indice];
};

btn.addEventListener('click', botonSuerte);