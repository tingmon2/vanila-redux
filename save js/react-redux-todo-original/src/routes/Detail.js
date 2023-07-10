import React from 'react';
import {useParams} from 'react-router-dom';
import { connect } from 'react-redux';

function Detail({toDo}) {
    console.log({toDo});
    return (
        <>
            <h1>{toDo?.text}</h1>
            <h4>Created at: {toDo?.id}</h4>
        </>
    );
}

function mapStateToProps(state, ownProps){
    console.log(state, ownProps);
    //const {match: {params: {id}}} = ownProps;
    const id = ownProps.match.params.id;
    console.log(id);
    return {toDo: state.find(toDo => toDo.id === parseInt(id))};
}

export default connect(mapStateToProps) (Detail);