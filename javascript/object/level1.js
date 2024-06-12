// Q1: Retrieve the value of the 'model' property from the 'car' object.
// Expected output:
// 'Civic'
const car1 = { make: 'Honda', model: 'Civic', year: 2020 };

//By simply using spreadsheet techniqe we can clone the object
const car = {...car1}
console.log("'" + car.model + "'");

// Q2: Add a new property 'color' with the value 'red' to the 'shirt' object.
// Expected output:
// { size: 'large', material: 'cotton', color: 'red' }
const shirt2 = { size: 'large', material: 'cotton' };

const shirt = {...shirt2}
shirt.color = 'red';

console.log(shirt);

// Q3: Calculate the total price by multiplying the 'quantity' and 'price' properties of the 'product' object.
// Expected output:
// 400
const product3 = { name: 'Laptop', quantity: 2, price: 200 };

const product = {...product3}

const multiplying = (item) => {
    return item.quantity * item.price;
}

console.log("By using the array function the expected outcome is: " + multiplying(product));

function totalprice(item) {
    return item.quantity * item.price;
}

console.log("Using the function decleration to calculate expected outcome: " + totalprice(product))
console.log("By only using console, expected outcome: " + product.quantity * product.price);

// Q4: Update the value of the 'age' property in the 'person' object to 35.
// Expected output:
// { name: 'Alice', age: 35, city: 'New York' }
const person4 = { name: 'Alice', age: 30, city: 'New York' };

const person = {...person4}

//Updating the value
person.age = 35;

console.log(person);

// Q5: Remove the 'price' property from the 'book' object.
// Expected output:
// { title: 'The Great Gatsby', author: 'F. Scott Fitzgerald', year: 1925 }
const book5 = { title: 'The Great Gatsby', author: 'F. Scott Fitzgerald', year: 1925, price: 15 };

const book = {...book5}
delete book.price;

console.log(book)

// Q6: Retrieve the value of the 'department' property from the 'employee' object.
// Expected output:
// 'HR'
const employee6 = { name: 'John', age: 28, department: 'HR', salary: 60000 };

const employee = {...employee6}

console.log("Original employee6 object: ", employee6)
console.log("Before deleting the employee object: ", employee)

delete employee.salary

console.log("After deleting the employee object: ", employee)

//since delting salary property doesnot affect the department properties so we can use the same employee object before or after deleting the salary propery;
function retrive(item) {
    return item.department;
 }
 
 console.log(retrive(employee))

// Q7: Add a new property 'size' with the value 'large' to the 'box' object.
// Expected output:
// { type: 'box', dimensions: { length: 10, width: 8, height: 6 }, size: 'large' }
const box7 = { type: 'box', dimensions: { length: 10, width: 8, height: 6 } };

const box = {...box7}
console.log("The value of box after cloning box7: ", box)

box.size = 'large'
console.log("After inserting new propery: ", box)

// Q8: Concatenate the 'firstName' and 'lastName' properties of the 'person' object with a space in between.
// Expected output:
// 'John Doe'
const person8 = { firstName: 'John', lastName: 'Doe', age: 25 };

const person_overlap_from_Q4 = {...person8}

//simply using the "+" operator we can perform this 

console.log(person_overlap_from_Q4.firstName + " " + person_overlap_from_Q4.lastName)

// Q9: Increment the value of the 'quantity' property in the 'cart' object by 1.
// Expected output:
// { item: 'Book', quantity: 3, total: 45 }
const cart9 = { item: 'Book', quantity: 2, total: 30 };

const cart = {...cart9};

//incrementing the value we can use '++' operator at the last
cart.quantity++

console.log(cart)

// Q10: Check if the 'price' property in the 'product' object is less than 100.
// Expected output:
// false
const product10 = { name: 'Phone', price: 150 };

const product_overlap_form_Q3 = {...product10}

//In case of compairing Javascript gives result in either True of False so all we have to do is compare according to question
console.log(product_overlap_form_Q3.price<100);
