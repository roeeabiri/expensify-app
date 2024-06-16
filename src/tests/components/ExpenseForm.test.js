

import React from 'react';
import ExpenseForm from '../../components/ExpenseForm';
import { shallow } from 'enzyme';
import expenses from '../fixtures/expenses';
import moment from 'moment';


test('should render ExpenseForm correctly', () => {
    const wrapper = shallow(<ExpenseForm />);
    expect(wrapper).toMatchSnapshot();
});

test('should render ExpenseForm with expense data', () => {
    const wrapper = shallow(<ExpenseForm expense={expenses[1]} />);
    expect(wrapper).toMatchSnapshot();
});

test('should render error for invalid form submission', () => {
    const wrapper = shallow(<ExpenseForm />);
    expect(wrapper).toMatchSnapshot();
    
    wrapper.find('form').simulate('submit', {preventDefault: () => {} }); // Using preventDefault to prevent e to not be undefined
    expect(wrapper.state('error').length).toBeGreaterThan(0); // Getting the error string from the state, and checking if it is greater than 0 (if it exsists)
    expect(wrapper).toMatchSnapshot();
});

test('should set description on input change', () => {
    const wrapper = shallow(<ExpenseForm />)
    wrapper.find('input').at(0).simulate('change', { target: { value: 'New  Description' } }); // Sending the object with a target accordigly because it gets the value from the e.target.value
    expect(wrapper.state('description')).toBe('New  Description');
});

test('should set note on textarea change', () => {
    const wrapper = shallow(<ExpenseForm />)
    wrapper.find('textarea').simulate('change', { target: { value: 'New Note' } });
    expect(wrapper.state('note')).toBe('New Note');
});

test('should set amount if valid input', () => {
    const wrapper = shallow(<ExpenseForm />)
    wrapper.find('input').at(1).simulate('change', { target: { value: '23.50' } });
    expect(wrapper.state('amount')).toBe('23.50');
});

test('should not set amount if invalid input', () => {
    const wrapper = shallow(<ExpenseForm />)
    wrapper.find('input').at(1).simulate('change', { target: { value: '23.500' } });
    expect(wrapper.state('amount')).toBe(wrapper.state('amount'));
});

test('should call onSubmit prop for valid form submission', () => {
    const onSubmitSpy = jest.fn(); // Return a new spy
    const wrapper = shallow(<ExpenseForm expense={expenses[0]} onSubmit={onSubmitSpy} />);
    wrapper.find('form').simulate('submit', { preventDefault: () => {} });

    expect(wrapper.state('error')).toBe(''); // Expense was passed down to ExpenseForm so there should be no error

    expect(onSubmitSpy).toHaveBeenLastCalledWith({ // Expect the onSubmit prop to be called with the correct arguments (expenses[1])
        description: expenses[0].description,
        amount: expenses[0].amount / 100,
        note: expenses[0].note,
        createdAt: expenses[0].createdAt
    });
});

test('should call onDateChange for date change', () => {
    const wrapper = shallow(<ExpenseForm />)
    wrapper.find('SingleDatePicker').prop('onDateChange')(moment())

    expect(wrapper.state('createdAt')).toEqual(moment());
});

test('should call onFocusChange for focus change', () => {
    const focused = true;
    const wrapper = shallow(<ExpenseForm />)
    wrapper.find('SingleDatePicker').prop('onFocusChange')({ focused })

    expect(wrapper.state('calenderFocused')).toBe(focused);
});