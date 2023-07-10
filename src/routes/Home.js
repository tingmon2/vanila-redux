import React, { useState } from 'react';
import { connect } from 'react-redux';
//import { actionCreators } from "../store";
import { add } from "../store";
import ToDo from "../components/ToDo";

function Home({toDos, addToDo}){
    const [text, setText] = useState("");
    const onChange = e => {
        setText(e.target.value);
    }
    const onSubmit = e => {
        e.preventDefault();
        addToDo(text);
        setText("");
    }
    return (
        <>
            <h1>Black List</h1>
            <form onSubmit={onSubmit}>
                <input type="text" value={text} onChange={onChange}></input>
                <button>Add</button>
            </form>
            <ul>{toDos.map(toDo => <ToDo {...toDo} key={toDo.id}/>)}</ul>
        </>
    );
}

function mapStateToProps(state){ // subscribe(getState())
    console.log(state);
    return {toDos: state};
}

function mapDispatchToProps(dispatch){
    return {
        addToDo: text => dispatch(add(text)) // call dispatch function = call reducer in store.
    };
}

export default connect(mapStateToProps, mapDispatchToProps) (Home);