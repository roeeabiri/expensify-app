 

 import React from 'react';
 import moment from 'moment';
 import { SingleDatePicker } from 'react-dates';


 class ExpenseForm extends React.Component 
 {
    constructor(props)
    {
        super(props);
        
        this.state = {
            description: props.expense ? props.expense.description : "",
            note: props.expense ? props.expense.note : "",
            amount: props.expense ? ((props.expense.amount) / 100).toString() : "", // Convert the amount to a string so that it can be parsed as a number
            createdAt: props.expense ? moment(props.expense.createdAt) : moment(), // Using createdAt because the date needds to be the time it was first created and not the time edited
            calanderFocused: false,
            error: "",
        }
    }
    

    onSubmit = (e) => 
    {
        e.preventDefault();

        if (!this.state.description || !this.state.amount)
            this.setState({ error: "Please provide description and amount!" });
        else
        {
            this.setState({ error: "" });
            // this.props.onSubmit(this.state) // No!!! it will also return the moment object and calanderFocused, and crash!
            this.props.onSubmit({ // return a valid expense object instead
                description: this.state.description,
                note: this.state.note,
                amount: parseFloat(this.state.amount, 10),
                createdAt: this.state.createdAt.valueOf()
            });

            this.setState({ // Reset the form values
                description: "",
                note: "",
                amount: "",
                createdAt: moment()
            });
        }
    }

    render()
    {
        return(
            <div>
                {this.state.error ? <p>{this.state.error}</p> : null }
                
                <form onSubmit={this.onSubmit}>
                    <input type="text" placeholder="Description" // placeholder is like hint in JAVA
                        autoFocus // When we visit the page, the imput will be already selected 
                        value={this.state.description} // Default value of the input is the current value of the state.description (can be the default of state.note) 
                        onChange={(e) => this.setState({ ...this.state, description: e.target.value })}
                    />

                    <input type="text" placeholder="Amount"
                        value={this.state.amount}
                        onChange={ (e) => { {!e.target.value || e.target.value.match(/^\d{1,}(\.\d{0,2})?$/) ? this.setState({ amount: e.target.value }) : this.state.amount}}}
                    />
                    
                    <SingleDatePicker date={this.state.createdAt} 
                        onDateChange={ (date) => { date ? this.setState({ createdAt: date }) : this.state.createdAt}}
                        focused={this.state.calenderFocused} // Current date
                        onFocusChange={ (e) => { this.setState({ calenderFocused: e.focused })}} // Show the picked date to the user
                        numberOfMonths={1} // Looks better to have only one month
                        isOutsideRange={ () => false} // Make past dates available
                    />

                    <textarea placeholder="Add a note for your expense (optional)"
                        value={this.state.note} // Default value of the input is the current value of the state.note (can be the default of state.note) 
                        onChange={(e) => this.setState({ ...this.state, note: e.target.value })}
                    >
                    </textarea> 
                    <button>Add Expense</button>
                </form>
            </div>
        )
    }
 }

 export default ExpenseForm;