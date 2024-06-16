

const moment = require('moment');


const tempTime = (timeStamp = 0) => { // Force moment to return a specific time instead of the current time and fail bc the creation date and the current date dont match
    return moment(timeStamp);
}

export default tempTime;