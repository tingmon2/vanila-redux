import {createStore} from "redux";

const form = document.querySelector("form");
const input = document.querySelector("input");
const ul = document.querySelector("ul");

const ADD_TODO = "ADD_TODO";
const DELETE_TODO = "DELETE_TODO";

const reducer = (state = [], action) => { 
  switch(action.type){ // when return, we don't mutated value of state. 
    case ADD_TODO:     // instead of value, redux returns new object.
      const newToDoObj = {text: action.text, id: Date.now()};
      return [...state, newToDoObj]; // returns a new array
    case DELETE_TODO:
      const newArray = state.filter(toDo => toDo.id !== action.id); 
      return  newArray // we are not deleting specific object in array
    default:           // we returns new array without the chosen object
      return state;
  }
};

const addToDo = text => {
  return{
    type: ADD_TODO,
    text: text
  };
}

const deleteToDo = id => {
  return{
    type: DELETE_TODO,
    id: id
  };
}

const store = createStore(reducer);

store.subscribe(() => console.log(store.getState()));

const dispatchAddToDo = text => {
  store.dispatch(addToDo(text))
}

const dispatchDeleteToDo = (e) => {
  console.log(e.target.parentNode);
  const id = parseInt(e.target.parentNode.id);
  store.dispatch(deleteToDo(id));
}

const paintToDos = () => {
  const toDos = store.getState();
  ul.innerHTML = ""; // clean the whole list to repaint new array
  toDos.forEach(toDo => {
    const li = document.createElement("li");
    const btn = document.createElement("button");
    btn.innerText = "DEL";
    btn.addEventListener("click", dispatchDeleteToDo);
    li.id = toDo.id;
    li.innerHTML = toDo.text;
    ul.appendChild(li);
    li.appendChild(btn);
  })
}

store.subscribe(paintToDos)

const onSubmit = e => {
  e.preventDefault();
  const toDo = input.value;
  input.value = "";
  dispatchAddToDo(toDo);
}

form.addEventListener("submit", onSubmit);