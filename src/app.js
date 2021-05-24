/* eslint-disable */
import "bootstrap";
import "./style.css";
import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  document.querySelector("#nuevaexcusa").addEventListener("click", () => {
    document.querySelector("#excusa").innerHTML = generador();
  });
};
let aleatiriedad = arr => arr[Math.floor(Math.random() * arr.length)];
let generador = () => {
  let quien = ["El Perro", "Mi Abuelita", "su totuga", "mi pajaro"];
  let que = ["come", "molesta", "aplasta", "rompio"];
  let donde = [
    "antes de la clase",
    "derecha termine",
    "durante mi almuerzo",
    "mientras rezaba"
  ];
  return (
    aleatiriedad(quien) + " " + aleatiriedad(que) + " " + aleatiriedad(donde)
  );
};
