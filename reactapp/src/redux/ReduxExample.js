import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

function ReduxExample() {

    const count = useSelector( (state) => state.count );
    const dispatch = useDispatch();

    function increment(){
        const action = { type:"Increment" }
        dispatch(action);
    }

    function decrement(){
        dispatch({ type:"Decrement" })
    }

    return (
        <>
            <h1>Redux Example</h1>
            <p>Count : {count} </p>
            <button onClick={increment}>Increment</button>
            <button onClick={decrement}>Decrement</button>
        </>
    )
}

export default ReduxExample