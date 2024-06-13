// Level 3 Questions

// Q1: Create a function that takes the 'person' object as input and returns the age group based on the age.
// Age groups: 'Child' (0-12), 'Teen' (13-19), 'Adult' (20-59), 'Senior' (60 and above)
// Expected output for person1: 'Adult'
const person1 = { name: 'John', age: 30 };

function age_groups(age) {
    if (age >= 0 && age <= 12) {
        return 'Child';
    } else if (age >= 13 && age <= 19) {
        return 'Teen';
    } else if (age >= 20 && age <= 59) {
        return 'Adult';
    } else {
        return 'Senior';
    }
}

console.log(age_groups(person1.age))

// Q2: Create a function that takes the 'inventory' object and returns the total number of items in stock.
// Expected output for inventory2: 23
const inventory2 = { apples: 10, bananas: 5, oranges: 8 };

const inventory = {...inventory2}
function total_sum(item){
    let total = 0
    total = item.apples + item.bananas + item.oranges
    return total
}

console.log(total_sum(inventory))

// Q3: Create a function that takes the 'students' object and returns an array of student names.
// Expected output for students3: ['Alice', 'Bob', 'Emma']
const students3 = { student1: 'Alice', student2: 'Bob', student3: 'Emma' };

const students = {...students3}
function arr(no) {
    return Object.values(no)
}

console.log(arr(students))

// Q4: Create a function that takes the 'details' object and checks if all properties have values.
// Expected output for details4: true
const details4 = { name: 'John', age: 25, city: 'New York' };

const details = {...details4}
function check(item){
    if(item.hasOwnProperty('name')&&item.hasOwnProperty('age')&&item.hasOwnProperty('city')){
        return true
    }
    return false
    
}

function direct_check(item){
    if(Object.values(item) != null){
        return true;
    }
    return false;
}

console.log("By using hasOwnProperty():",check(details), "Direct method:", direct_check(details))

// Q5: Create a function that takes the 'products' object and returns the average price of all products.
// Expected output for products5: 116.67
const products5 = { product1: { name: 'Laptop', price: 800 }, product2: { name: 'Phone', price: 100 }, product3: { name: 'Tablet', price: 150 } };

const product = {...products5}

function average(item){
    let avg = 0;
    avg = (item.product1.price + item.product2.price + item.product3.price)/3
    return avg
}

console.log(average(product))

// Q6: Create a function that takes the 'scores' object and returns the highest score.
// Expected output for scores6: 95
const scores6 = { math: 80, science: 95, english: 95 };

const scores = {...scores6}
function highest(item){
    if(item.math > item.science && item.math > item.english){
        return item.math
    }else if(item.science > item.math && item.science > item.english){
        return item.science
    }
    return item.english
}

console.log(highest(scores))

// Q7: Create a function that takes the 'employees' object and returns the average salary.
// Expected output for employees7: 55000
const employees7 = { emp1: { name: 'John', salary: 60000 }, emp2: { name: 'Alice', salary: 50000 }, emp3: { name: 'Bob', salary: 55000 } };

const employees = {...employees7}
function average_sal(item){
    let avg = 0;
    avg = (item.emp1.salary + item.emp2.salary + item.emp3.salary)/Object.keys(item).length
    return avg;
}

function using_map_reduce(item){
    const salaries = Object.values(item).map(item => item.salary);
    console.log(salaries)
    const sum = salaries.reduce((accumulator, value) => accumulator + value, 0)
    return sum/salaries.length
}

console.log(using_map_reduce(employees))
console.log("This is obtained using simple formula:", average_sal( employees))

// Q8: Create a function that takes the 'data' object and returns an array of values sorted in ascending order.
// Expected output for data8: [25, 'John', 'New York']
const data8 = { name: 'John', age: 25, city: 'New York' };

const data = {...data8}

function ascending_order(item){
    const val = Object.values(item)
    return val.sort((a, b) => {
        if(typeof a == 'number' && typeof b == 'number'){
            return a - b;
        }else if(typeof a === 'number'){
            //Numbers should come first
            return -1;
        }else if(typeof a === 'string'){
            return 0;
        }
        //localCompare() lets you compare the strings
        return a.localCompare(b);
    });
}

console.log(ascending_order(data))

// Q9: Create a function that takes the 'order' object and calculates the total cost based on quantity and price.
// Expected output for order9: 150
const order9 = { item: 'Laptop', quantity: 2, price: 75 };

const order = {...order9}
function calculates(item){
    return item.quantity * item.price
}

console.log(calculates(order))

// Q10: Create a function that takes the 'expenses' object and returns the total amount spent.
// Expected output for expenses10: 500
const expenses10 = { rent: 200, groceries: 150, utilities: 100, entertainment: 50 };

const expenses = {...expenses10}

function spent(item){
    const val = Object.values(item)
    const sum = val.reduce((accumulator, values) => accumulator + values, 0)
    return sum;
}

console.log(spent(expenses))