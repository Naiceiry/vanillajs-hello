/* eslint-disable */
import "bootstrap";
import "./style.css";
import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";
window.onload = function() {
  document.querySelector("#btn_NE").addEventListener("click", () => {
    document.querySelector("#excusa").innerHTML = newExcusa();
  });
};
let getRandonElement = arr => arr[Math.floor(Math.randon() * arr.length)];
let newExcusa = () => {
  let who = ["El Perro", "Mi Abuelita", "su totuga", "mi pajaro"];
  let what = ["come", "molesta", "aplasta", "rompio"];
  let when = [
    "antes de la clase",
    "derecha termine",
    "durante mi almuerzo",
    "mientras rezaba"
  ];
  return (
    getRandonElement(who) +
    " " +
    getRandonElement(what) +
    " " +
    getRandonElement(when)
  );
};
