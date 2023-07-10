import {createStore} from "redux";

const add = document.getElementById("add");
const minus = document.getElementById("minus");
const number = document.querySelector("span");

const countModifier = (count = 0, action) => {
  console.log(count, action);
  if (action.type === "Add"){
    return count++;
  }
  else if (action.type === "Minus"){
    return count--;
  }
  else{
    return count;
  }
}

const countStore = createStore(countModifier);

// countStore.dispatch({type: "hello"}); countModifier(currentState = 0, {type: "hello"})

