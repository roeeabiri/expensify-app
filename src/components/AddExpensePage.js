
import React from 'react';
import ExpenseForm from './ExpenseForm';
import { connect } from 'react-redux';
import { addExpense } from '../actions/expenses';


class AddExpensePage extends React.Component 
{
  onSubmit = (newExpense) => {
    this.props.addExpense(newExpense); // Pass the newExpense object to the addExpense action 
    this.props.history.push('/'); // Redirect the user to the home page
  }

  render()
  {
    return (
      <div>
        <h1> Add Expense </h1>
        <ExpenseForm onSubmit={ this.onSubmit } />
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addExpense: (newExpense) => dispatch(addExpense(newExpense)),
  };
};

export default connect(undefined, mapDispatchToProps)(AddExpensePage); // Empty because we don't need to pass any props to this component, only give it access to the dispatch function
export { AddExpensePage };