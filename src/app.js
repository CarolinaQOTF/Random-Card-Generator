/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

// Generador de carta
const cards = ["corazon", "diamante", "pica", "trebol"];
const numbers = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "J", "Q", "K"];

let varTop = document.querySelector(".top");
let varNumber = document.querySelector(".number");
let varButton2 = document.querySelector(".button2");

function CardRandom1(a1, a2) {
  const randomCa = [];
  randomCa.push(a1[Math.floor(Math.random() * a1.length)]);
  randomCa.push(a2[Math.floor(Math.random() * a2.length)]);
  return randomCa;
}

function CardColor(arr) {
  if (arr[0] === "corazon" || arr[0] === "diamante") {
    varTop.style.color = "red";
    varNumber.style.color = "red";
    varButton2.style.color = "red";
  } else {
    varTop.style.color = "black";
    varNumber.style.color = "black";
    varButton2.style.color = "black";
  }
}

function CardType(arr) {
  if (arr[0] === "corazon") {
    varTop.innerHTML = "♥";
    varButton2.innerHTML = "♥";
  } else if (arr[0] === "diamante") {
    varTop.innerHTML = "♦";
    varButton2.innerHTML = "♦";
  } else if (arr[0] === "trebol") {
    varTop.innerHTML = "♣";
    varButton2.innerHTML = "♣";
  } else {
    varTop.innerHTML = "♠";
    varButton2.innerHTML = "♠";
  }
}
function CardValor(arr) {
  varNumber.innerHTML = arr[1];
}
function ValorCard() {
  let valCard = CardRandom1(cards, numbers);
  CardColor(valCard);
  CardType(valCard);
  CardValor(valCard);
}
//Funcion generadora
window.onload = function() {
  ValorCard();
};
document.querySelector(".barajar").addEventListener("click", ValorCard);

// contador
let segundos = 0;
contadorsegundos();

function contadorsegundos() {
  let textsegundos;
  if (segundos < 0) {
    segundos = 10;
  }
  if (segundos === 0) {
    ValorCard();
  }

  if (segundos < 10) {
    textsegundos = `0${segundos}`;
  } else {
    textsegundos = segundos;
  }
  document.getElementById("contador").value = textsegundos;
  segundos--;
}

setInterval(contadorsegundos, 1000);

//mouseover
let rozamesta = document.getElementById("rozando");
rozamesta.addEventListener("mouseover", function() {
  ValorCard();
});
