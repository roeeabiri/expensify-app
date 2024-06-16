

import { addExpense, editExpense, removeExpense } from "../.././actions/expenses";


test('should setup remove expense action object', () => {
    const action = removeExpense({ id: '123abc' });
    expect(action).toEqual({
        type: 'REMOVE_EXPENSE',
        id: '123abc'
    });
});

test('should setup edit expense action object', () => {
    const action = editExpense('123abc', { note: 'New note value' });
    expect(action).toEqual({
        type: 'EDIT_EXPENSE',
        id: '123abc',
        updates: {
            note: 'New note value'
        }
    });
    
});

test('should setup addExpense object with provided values', () => {
    const expenseData = {
        description: "Description",
        amount: 1032445,
        createdAt: 1000,
        note: "This is my note"
    };

    const action = addExpense(expenseData);
    expect(action).toEqual({
        type: 'ADD_EXPENSE',
        expense: {
           ...expenseData,
            id: expect.any(String) // Because we don't know the id yet, we cant compare it to an expected value.
        }
    });
});

test('should setup addExpense object with default values', () => {
    const action = addExpense();

    expect(action).toEqual({
        type: 'ADD_EXPENSE',
        expense: {
            description: '',
            note: '',
            amount: 0,
            createdAt: 0,
            id: expect.any(String) // Because we don't know the id yet, we cant compare it to an expected value.
        }
    })
});