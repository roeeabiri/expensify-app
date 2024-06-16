

import { createStore } from "redux";

const incrementCount = ( { incrementBy = 1 } = {}) => ({
    type: "INCREMENT",
    incrementBy: incrementBy
});

const decrementCount = ( { decrementBy = 1 } = {}) => ({
    type: "DECREMENT",
    decrementBy: decrementBy
});

const setCount = ( { newCount } = {}) => ({
    type: "SET",
    count: newCount
});

const resetCount = () => ({
    type: "RESET"
});


// Rducers
const countReducer = (state = {count: 0}, action) => 
{
    switch(action.type)
    {
        case "INCREMENT": 
            return {count: state.count + action.incrementBy};
    
        case "DECREMENT":
            return {count: state.count - action.decrementBy};
    
        case "RESET": 
            return {count: 0};
    
        case "SET":
            return {count: action.count};
    
        default:
            return state;
    }
}
    
const store = createStore(countReducer);

const unsubscribe = store.subscribe(() => console.log(store.getState()));

store.dispatch(incrementCount({type: "INCREMENT", incrementBy: 5}));
store.dispatch(incrementCount({type: "INCREMENT"}));
store.dispatch(resetCount({type: "RESET"}));
store.dispatch(decrementCount({type: "DECREMENT", decrementBy: 10}));