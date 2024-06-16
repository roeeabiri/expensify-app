

import React from 'react';
import { shallow } from 'enzyme';
import { ExpenseListFilters } from '../../components/ExpenseListFilters';
import { filters, altFilters } from '../fixtures/filters';

let setTextFilter, sortByDate, sortByAmount, setStartDate, setEndDate, wrapper;

beforeEach(() => {
  setTextFilter = jest.fn();
  sortByDate = jest.fn();
  sortByAmount = jest.fn();
  setStartDate = jest.fn();
  setEndDate = jest.fn();
  wrapper = shallow(
    <ExpenseListFilters
      filters={filters}
      setTextFilter={setTextFilter}
      sortByDate={sortByDate}
       sortByAmount={sortByAmount}
      setStartDate={setStartDate}
      setEndDate={setEndDate}
    />
  );
});

test('should render ExpenseListFilters correctly', () => {
  expect(wrapper).toMatchSnapshot();
});

test('should render ExpenseListFilters with alt filters correctly', () => {
  wrapper.setProps({ filters: altFilters }); // Using setProps allows us to override the props passed to the component
  expect(wrapper).toMatchSnapshot();
});

test('should handle text change', () => {
    wrapper.find('input').at(0).simulate('change', { target: { value: 'New Text' } }); // Sending the object with a target accordigly because it gets the value from the e.target.value
    expect(setTextFilter).toHaveBeenCalledWith('New Text');
});

test('should sort by date', () => {
    wrapper.find('select').simulate('change', { target: { value: 'date' } });
    expect(sortByDate).toHaveBeenCalled();
});

test('should sort by amount', () => {
    wrapper.find('select').simulate('change', { target: { value: 'amount' } });
    expect(sortByAmount).toHaveBeenCalled();
});

test('should handle date change', () => {
    const startDate = new Date(2017, 2, 15);
    const endDate = new Date(2017, 2, 28);
    
    wrapper.find('DateRangePicker').prop('onDatesChange')({ startDate, endDate });
    expect(setStartDate).toHaveBeenLastCalledWith(startDate);
    expect(setEndDate).toHaveBeenLastCalledWith(endDate);
});

test('should handle focus change', () => {
    const calanderFocused = 'endDate';

    wrapper.find('DateRangePicker').prop('onFocusChange')(calanderFocused);
    expect(wrapper.state('calendarFocused')).toBe(calanderFocused)
});