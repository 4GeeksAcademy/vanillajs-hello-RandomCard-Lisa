/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

let Allvalues = [2, 3, 4, 5, 6, 7, 8, 9, "J", "Q", "K", "A"];
let suits = ["♦", "♥", "♠", "♣"];

function Loadvalues(arr1) {
  return arr1[Math.floor(Math.random() * arr1.length)];
}

function Loadsuits(arr2) {
  return arr2[Math.floor(Math.random() * arr2.length)];
}

window.onload = function() {
  console.log(Loadvalues(Allvalues));
  //console.log(Loadsuits(suits));

  const pTagHtmlElement = document.querySelector("#values");
  pTagHtmlElement.innerHTML = Loadvalues(Allvalues);
  const pTagHtmlElement1 = document.querySelector("#Suit-left");
  const pTagHtmlElement2 = document.querySelector("#Suit-right");
  pTagHtmlElement1.innerHTML = Loadsuits(suits);
  pTagHtmlElement2.innerHTML = pTagHtmlElement1.innerHTML;
};
