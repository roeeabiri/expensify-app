

import expensesReducer from "../../reducers/expenses";
import expenses from "../fixtures/expenses"


test('should setup default state value', () => {
    const res = expensesReducer(undefined, { type: "@@INIT" }); // Using @@INIT so the switch goes to the default case and returns the default state 
    expect(res).toEqual([]);
});

test('should remove expense by id', () => {
    const res = expensesReducer(expenses, { type: "REMOVE_EXPENSE", id: expenses[1].id }); 
    expect(res).toEqual( [ expenses[0], expenses[2] ] );
});

test('should not remove expense if id not found', () => {
    const res = expensesReducer(expenses, { type: "REMOVE_EXPENSE", id: '-1' }); 
    expect(res).toEqual(expenses);
});

test('should add expense', () => {
    const res = expensesReducer(expenses, { type: "ADD_EXPENSE", expense: expenses[1] }); 
    expect(res).toEqual( [ ...expenses, expenses[1] ] );
});

test('should edit expense', () => {
    const res = expensesReducer(expenses, { type: "EDIT_EXPENSE", id: expenses[1].id, updates: { amount: 1000 } }); 
    expect(res).toEqual( [ expenses[0], { ...expenses[1], amount: 1000 }, expenses[2] ] );
});

test('should not edit expense if id not found', () => {
    const res = expensesReducer(expenses, { type: "EDIT_EXPENSE", id: '-1', updates: { amount: 1000 } }); 
    expect(res).toEqual(expenses);
});