




const expensesReducerDefaultState = [];

const expensesReducer = (state = expensesReducerDefaultState, action) => 
{
    switch(action.type)
    {
        case "ADD_EXPENSE":
            return [...state, action.expense]; // Spread operator
    
        case "REMOVE_EXPENSE":
            return state.filter( (expense) => expense.id !== action.id);  // if true keep it, if false remove it
            
        case "EDIT_EXPENSE":
            return state.map( (expense) => expense.id === action.id ? {...expense, ...action.updates} : expense);
        
        default:
            return state;
    }
};

export default expensesReducer;