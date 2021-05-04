////1

const euroCountries = ["Germany", "Denmark", "Sweden", "Italy"];
const asianCountries = ["Japan", "China", "South Korea", "Thailand"];

euroCountries.push(asianCountries[1], asianCountries[0]);
console.log(euroCountries);

const array1 = [1, 2, 3, 4];
const array2 = [5, 6, 7, 8];

const arrayCombo = [...array1, ...array2];
console.log(arrayCombo);


///2
const array3 = [1, 2, 3, 4];
const arrayCopy = [...array3];
console.log(arrayCopy);
console.log(array3);

///3
const array4 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 20, 78];

function largestNumber(array) {
    let result = Math.max(...array);
    console.log(result);

}
largestNumber(array4);

///4

function smallestNumber(array) {
    let result = Math.min(...array);
    console.log(result);

}

smallestNumber(array4);

///5

const person = { name: "John" }
const job = { role: "Teacher" }

const clonePerson = Object.assign({}, person);
console.log(clonePerson);

const employee = {...person, ...job };
console.log(employee);

employee.name = "Tito";
employee.role = "Principal";
console.log(employee);

6 ///

function isWhole(a, b, c, d) {
    let avg = ((a + b + c + d) / 4);

    let result = (avg - Math.floor(avg)) === 0;
    console.log(result);

}

const array5 = [1, 1, 1, 1];
const array6 = [2, 2, 2, 2];
isWhole(...array5);
isWhole(...array6);

///No it does not return the correct result, you just use the spread operator to do so.