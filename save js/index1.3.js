import {createStore} from "redux";

const add = document.getElementById("add");
const minus = document.getElementById("minus");
const number = document.querySelector("span");

const countModifier = (count = 0, action) => {
  console.log(count, action);
  if (action.type === "Add"){
    return count + 1;
  }
  else if (action.type === "Minus"){
    return count - 1;
  }
  else{
    return count;
  }
}

const countStore = createStore(countModifier);

const onChange = () => {
  number.innerHTML = countStore.getState();
}

countStore.subscribe(onChange); // subscribe(listener) will run when action is called and changed the data

const handleAdd = () => {
  countStore.dispatch({type: "Add"})
}
const handleMinus = () => {
  countStore.dispatch({type: "Minus"})
}

add.addEventListener("click", handleAdd)
minus.addEventListener("click", handleMinus) 