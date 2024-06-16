

import moment from "moment";


const expenses = [{
    id: '1',
    description: 'Gum',
    note: '',
    amount: 195,
    createdAt: 0 
    }, {
    id: '2',
    description: 'Rent',
    note: '',
    amount: 109500,
    createdAt: moment(0).subtract(4, "days").valueOf(), // ValueOf is used to convert moment object to a number
}, {
    id: '3',
    description: 'Credit Card',
    note: '',
    amount: 4500,
    createdAt: moment(0).add(4, "days").valueOf(), // ValueOf is used to convert moment object to a number
}];

export default expenses;