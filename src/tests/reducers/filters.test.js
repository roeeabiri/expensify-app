

import filtersReducer from "../../reducers/filters";
import moment from "moment";


test('should setup default filter values', () => {
    const res = filtersReducer(undefined, { type: "@@INIT" }); // Using @@INIT so the switch goes to the default case and returns the default state 

    expect(res).toEqual({
        text: '',
        sortBy: 'date',
        startDate: moment().startOf("month"),
        endDate: moment().endOf("month"), 
    });
});

test('should set sortBy to amount', () => {
    const res = filtersReducer(undefined, { type: "SORT_BY_AMOUNT" });
    expect(res.sortBy).toBe("amount");
});

test('should set sortBy to date', () => {
    const res = filtersReducer(undefined, { type: "SORT_BY_DATE" });
    expect(res.sortBy).toBe("date");
});

test('should set text filter', () => {
    const res = filtersReducer(undefined, { type: "SET_TEXT_FILTER", text: "rent" });
    expect(res.text).toBe("rent");
});

test('should set start date filter', () => {
    const res = filtersReducer(undefined, { type: "SET_START_DATE", startDate: moment(0) });
    expect(res.startDate).toEqual(moment(0));
});

test('should set end date filter', () => {
    const res = filtersReducer(undefined, { type: "SET_END_DATE", endDate: moment(0) });
    expect(res.endDate).toEqual(moment(0));
});