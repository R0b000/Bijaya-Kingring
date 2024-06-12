// Level 2 Questions

// Q1: Extract and return the 'firstName' and 'lastName' properties as a single string from the 'person' object.
// Expected output:
// 'John Doe'
const person1 = { firstName: 'John', lastName: 'Doe', age: 30 };

const person = {...person1}
console.log(person.firstName, person.lastName)

// Q2: Create a new object by merging the 'details1' and 'details2' objects.
// Expected output:
// { name: 'John', age: 25, city: 'New York', hobby: 'Soccer' }
const details1 = { name: 'John', age: 25 };
const details2 = { city: 'New York', hobby: 'Soccer' };

//Using SpreadSheet concept for merging
const merge = {...details1, ...details2}
console.log(merge)

// Q3: Add uantita new property 'qy' with the value 10 to the 'product' object, if it doesn't already exist.
// Expected output:
// { name: 'Laptop', price: 800, quantity: 10 }
const product3 = { name: 'Laptop', price: 800 };

const product = {...product3}

//Adding new property is easy in case of object all you have to do is use dot operator
product.quantity = 10;
console.log(product);

// Q4: Check if all properties ('make', 'model', 'year') exist in the 'car' object.
// Expected output:
// false
const car4 = { make: 'Toyota', year: 2021 };

const car = {...car4}

function check() {
    if(car.hasOwnProperty('model')&&car.hasOwnProperty('make')&&car.hasOwnProperty('year')){
        return true
    }
    return false
}

console.log(check())
console.log(car.hasOwnProperty('model')&&car.hasOwnProperty('make')&&car.hasOwnProperty('year'))

// Q5: Create a copy of the 'student' object without modifying the original object.
// Expected output:
// { name: 'Alice', age: 20, grade: 'A' }
const student5 = { name: 'Alice', age: 20, grade: 'A' };

//using SpreadSheet technique it will clone the original object.
const student = {...student5};
console.log("Original object:", student5, "Created object:", student)

// Q6: Check if the 'address' property in the 'user' object is a string.
// Expected output:
// true
const user6 = { name: 'John', age: 30, address: '123 Main St' };

const user = {...user6}

//so for checking the property all we have typeof() in javascript.
//Javascript is the case sensitive so we must use string instead of String
console.log("While using 'string' for compairing:", typeof(user.address) === 'string')
console.log("While using 'String' for compairing:", typeof(user.address) === 'String', "Or simplying using predefined String for compairing:", typeof(user.address) === String)

// Q7: Retrieve the keys of the 'inventory' object as an array.
// Expected output:
// ['apples', 'bananas', 'oranges']
const inventory7 = { apples: 10, bananas: 5, oranges: 8 };

const inventory = {...inventory7}

//For retriving the keys of the object we use Object.keys(object_name)
console.log(Object.keys(inventory))

// Q8: Create an array of all the property values from the 'data' object.
// Expected output:
// ['John', 25, 'New York']
const data8 = { name: 'John', age: 25, city: 'New York' };

const data = {...data8}
const array = Object.values(data)

console.log(array)

// Q9: Check if any property in the 'book' object has a value of null.
// Expected output:
// false
const book9 = { title: 'JavaScript Basics', author: 'John Smith', year: 2020 };

const book = {...book9}
console.log(Object.values(book) === null)

// Q10: Reverse the 'fullName' property value in the 'person' object.
// Expected output:
// 'doe John'
const person10 = { fullName: 'John doe' };

//Using the property like split, reverse and join
//But while using the split() we need to give a space inside a split(' ') 
const person_overlap_with_Q1 = {...person10}
person_overlap_with_Q1.fullName = person_overlap_with_Q1.fullName.split(' ').reverse().join(' ')

console.log(person_overlap_with_Q1)