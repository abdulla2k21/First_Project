import React from 'react';
import { createStore } from 'redux'

/**
 * state creation
 */

const userDetails = {
    count : 0,
    fruitList : []
}

const SAVE = "Save"
const INCREMENT = "Increment"
const DECREMENT = "Decrement"

/**
 * reducer - it is used to update state values.
 * 
 * action creation format : 
 *      action = { type : "save", details : {}, fruit: "fruit_name" }
 */

const reducer = ( (state = userDetails, action ) => {
    switch(action.type){
        case INCREMENT : return {...state, count : state.count+1};
            break;
        case DECREMENT : return {...state, count : state.count-1};
            break;
        case SAVE : return {...state, fruitList : [ ...state.fruitList, action.fruit ] };
            break;
        default : return state;
    }
})

const UserStore = createStore(reducer);
export default UserStore;