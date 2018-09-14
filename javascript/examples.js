// FUNCTION WITHOUT ARROW
var plusTwoWithoutArrow = function(number) {
    return number + 2;
}

// FUNCTION WITH ARROW
var plusTwoWithArrow = (number) => {
    return number + 2;
}

// Shorter version for one line functions
// No return statements required
var plusTwoEvenShorter = (number) => number + 2;

// CLASSES (INTRODUCED IN ES6)
class SimpleDate {
    constructor(year, month, day) {
        this._year = year;
        this._month = month;
        this._day = day;
    }

    addDays(nDays) {
        this._day += nDays;
    }

    getDay() {
        return this._day;
    }
}

// HIGHER ORDER FUNCTIONS
var compute = (computeFn, a, b) => computeFn(a, b);
var sum = (a, b) => a + b;
var substract = (a, b) => a - b;

// Example of higher order function
// compute(sum, 1, 2);
// compute(substract, 2, 1);


// IMPERATIVE vs. DECLARATIVE

// EXAMPLE 1. add to each element in array
// Imperative
const arr1 = [1, 2, 3];

for (i = 0; i < arr1.length; i++) {
    arr1[i] = arr1[i] + 1;
}

// Declarative
var addOne = (a) => a + 1;
arr1.map(addOne);

// EXAMPLE 2. double all elements in array

// Imperative
const arr2 = [1, 2, 3];

for (i = 0; i < arr2.length; i++) {
    arr2[i] = arr2[i] * 2;
}

// Declarative
var multTwo = (a) => a * 2;
arr2.map(multTwo);

// EXAMPLE 3. Summing an array

const arr3 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var sum = 0;

for (i = 0; i < arr3.length; i++) {
    sum = sum + arr3[i];
}

var summer = (sum, currentElem) => sum + currentElem
arr3.reduce(summer, 0);

// EXAMPLE 4. filter even numbers in an array
// Imperative
const arr4 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var evenNumbers = []

for (i = 0; i < arr4.length; i++) {
    evenNumbers.push(arr4[i]);
}

// Declarative
var isEven = (num) => num % 2 == 0;
arr4.filter(isEven)

// EXAMPLE 4. find sum of all even numbered values in an array
// Imperative
const arr5 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var finalSum = 0;

for (i = 0; i < arr5.length; i++) {
    var currentElem = arr5[i];
    if (isEven(currentElem))
        finalSum += currentElem;
}

// Declarative
arr5
    .filter(isEven)
    .reduce(summer);

// EXAMPLE 5. find sum of squares of even values in an array
// Imperative
const arr6 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var finalSquaredSum = 0;
var square = (num) => num * num;

for (i = 0; i < arr6.length; i++) {
    var currentElem = arr6[i];
    if (isEven(currentElem))
        finalSquaredSum += square(currentElem);
}

// Declarative
arr6
    .filter(isEven)
    .map(square)
    .reduce(summer);


// EXAMPLE 6. factorial
// Imperative
var factorial = (n) => {
    var returnVal = 1;
    for (i = 0; i < n; i++) {
        returnVal *= i;
    }
    return returnVal;
};

// Declarative
var factorial = (n) => {
    if (n == 0) return 1;
    return n * factorial(n - 1);
};

// ASYNCHRONOUS FUNCTION
// Example 1. simple callback
var callback = message => (() => console.log(message))

setTimeout(callback('hi'), 3000);

// Example 2. callback hell when printing Hello, World, React 1 second apart

var printString = (message, chainedCallback) => {
    setTimeout(() => {
        console.log(message);
        if (chainedCallback)
            chainedCallback();
    }, 1000);
}

printString("Hello", () => {
    printString("World", () => {
        printString("React")
    });
});
