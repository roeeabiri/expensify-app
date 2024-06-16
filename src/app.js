


// Import React and ReactDOM
import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from'react-redux';

import AppRouter from './routers/AppRouter';


import configureStore from './store/configureStore';

import { addExpense, removeExpense, editExpense } from './actions/expenses';
import { setTextFilter, sortByAmount, sortByDate, setStartDate, setEndDate } from './actions/filters';
import getVisibleExpenses from './selectors/expenses';

import 'normalize.css/normalize.css';
import './styles/styles.scss';  
import 'react-dates/lib/css/_datepicker.css';


const store = configureStore();

store.dispatch(addExpense({ description: "Water bill", amount: 4500}));
store.dispatch(addExpense({ description: "Gas bill", createdAt: 1000}));
store.dispatch(addExpense({ description: "Rent", amount: 109500}));


console.log(getVisibleExpenses(store.getState().expenses, store.getState().filters));


const jsx = (
    <Provider store={store}> 
        <AppRouter />
    </Provider> // Takes the store and passes it to the Provider component so that all of the components can access the store.
               // like a container that holds the store and makes it accessible to all components inside it.
);

// // Create a root container
const root = ReactDOM.createRoot(document.getElementById('app'));

// Render your component
root.render(jsx);

// ReactDOM.render(<AppRouter />, document.getElementById('app'));