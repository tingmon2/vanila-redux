import {createStore} from "redux";

const add = document.getElementById("add");
const minus = document.getElementById("minus");
const number = document.querySelector("span");
number.innerText = 0;

const ADD = "ADD";
const MINUS = "MINUS";

const countModifier = (count = 0, action) => {
  console.log(count, action);
  switch (action.type){
    case ADD:
      return count + 1; // can't use count++ because it mutates state
    case MINUS:         // must return new object.
      return count - 1;
    default:
      return count;
  }
}

const countStore = createStore(countModifier);

const onChange = () => {
  number.innerHTML = countStore.getState();
}

countStore.subscribe(onChange); // subscribe(listener) will run when action is called and changed the data

const handleAdd = () => {
  countStore.dispatch({type: ADD})
}
const handleMinus = () => {
  countStore.dispatch({type: MINUS})
}

add.addEventListener("click", handleAdd);
minus.addEventListener("click", handleMinus);