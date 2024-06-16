



// const person =  {
//     name: 'Andrew',
//     age: 26,
//     location: {
//         city: 'Philadelphia',
//         temp: 88
//     }
// }

// const { name: firstName = "Anonymus", age } = person;
// const { city, temp: tempature } = person.location;

// if(tempature && city)
//     console.log("its " + tempature + " in " + city);

// console.log(firstName + " is " + age + " years old");


// Challange
// const book = {
//     title: 'Ego is the Enemy',
//     author: 'Someone',
//     publisher: {
//         name: 'Penguin'
//     }
// }

// const { name: publisherName = 'Self-Published' } = book.publisher;



// Array Destructuring
const adress = ['1299 S Juniper Street', 'Philadelphia', 'Pensilvenia', '19147'];

const [street, city, state, zip] = adress;
console.log("You are in " + city + ", " + state);


const item = ['Coffee (hot)', '$2.00', '$2.50', '$3.00'];
const [product = "Out of coffee", , price] = item;
console.log("A medium " + product + " costs " + price);