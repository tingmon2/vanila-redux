import {createStore} from "redux";

const add = document.getElementById("add");
const minus = document.getElementById("minus");
const number = document.querySelector("span");

const reducer = () => {}

const store = createStore(reducer);

let count = 0;

const updateText = () => {
  number.innerHTML = count;
}

const handleAdd = () => {
  count++;
  updateText();
}

const handleMinus = () => {
  count--;
  updateText();
}

add.addEventListener("click", handleAdd);
minus.addEventListener("click", handleMinus);
