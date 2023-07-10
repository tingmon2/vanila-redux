import {createStore} from 'redux';
import { createAction, createReducer, configureStore, createSlice } from '@reduxjs/toolkit';

/* const addToDo = createAction("ADD");
const deleteToDo = createAction("DELETE");

const reducer = createReducer([], {
    [addToDo]: (state, action) => {
        state.push({ text: action.payload, id: Date.now() }); // mutate state -> push doesn't return anything 
    },
    [deleteToDo]: (state, action) => state.filter(toDo => toDo.id !== action.payload) // return state -> filter function returns new array with elements that satisfy condition
    // with curly bracket = no return, just mutate state object
    // without curly bracket = return, new state object
}) */

/* const reducer = (state = [], action) => {
    console.log(action);
    switch(action.type){
        case addToDo.type:
            return [...state, {text: action.payload, id: Date.now()}];
        case deleteToDo.type:
            return state.filter(toDo => toDo.id !== action.payload);
        default:
            return state;
    }
} */

const toDos = createSlice({
    name: "toDosReducer",
    initialState: [],
    reducers: {
        add: (state, action) => {
            state.push({ text: action.payload, id: Date.now() }); // mutate state -> push doesn't return anything 
        },
        remove: (state, action) => state.filter(toDo => toDo.id !== action.payload)
    }
})
console.log(toDos.actions);
console.log(toDos.reducer);

//const store = configureStore({reducer: toDos.reducer});

export const { add, remove } = toDos.actions; // get add and remove from toDos.actions

export default configureStore({reducer: toDos.reducer});
