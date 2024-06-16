import React from 'react';
import { connect } from 'react-redux';
import ExpenseForm from './ExpenseForm';
import { editExpense, removeExpense } from '../actions/expenses';

class EditExpensePage extends React.Component {
  onSubmit = (editedExpense) => {
    this.props.editExpense(this.props.expense.id, editedExpense);
    this.props.history.push('/');
  };

  onClick = () => {
    this.props.removeExpense({ id: this.props.expense.id });
    this.props.history.push('/');
  };

  render() {
    return (
      <div>
        <ExpenseForm
          expense={this.props.expense}
          onSubmit={this.onSubmit}
        />
        <button onClick={this.onClick}>Remove</button>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => ({
  expense: state.expenses.find((expense) => expense.id === ownProps.match.params.id),
});

const mapDispatchToProps = (dispatch) => ({
  editExpense: (id, editedExpense) => dispatch(editExpense(id, editedExpense)),
  removeExpense: (data) => dispatch(removeExpense(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(EditExpensePage);
export { EditExpensePage };
