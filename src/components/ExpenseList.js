

import React from 'react';

import { connect } from 'react-redux'; // allows you to access the store’s state and dispatch actions from your components
                                      // like a bridge that connects a single component to the store, allowing it to access state and dispatch actions.
import ExpenseListItem from './ExpenseListItem';
import getVisibleExpenses from '../selectors/expenses';

const ExpenseList = (props) => (
    <div>
        {props.expenses.length === 0 ? <p>No expenses</p> : props.expenses.map( (expense) => <ExpenseListItem key={expense.id} {...expense} />)}
    </div>
);

const mapStateToProps = (state) => // As you connect your component to the store, it will be 
                                  // automatically re-rendered with the new values every time the store changes.
{
    return {
        expenses: getVisibleExpenses(state.expenses, state.filters),
        // filters: state.filters // Send the store values to the component
    };
};

export default connect(mapStateToProps)(ExpenseList);
export { ExpenseList };