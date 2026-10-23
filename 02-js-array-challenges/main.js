import {
    biggerNumber1, biggerNumber2, biggerNumber3, largestNumber1, largestNumber2, largestNumber3, longestName, longestName2, longestName3, peopleVote1, peopleVote2, peopleVote3, specificNumber1,
    specificNumber2, specificNumber3,
    averageOfNumbers1, averageOfNumbers2, averageOfNumbers3,
    commonElements1,
    commonElements2,
    commonElements3,
    sortCities1,
    sortCities2,
    sortCities3,
    duplicatedItems1,
    duplicatedItems2,
    duplicatedItems3,
    splitArray1,
    splitArray2,
    splitArray3,
    reverseWords1,
    reverseWords2,
    reverseWords3,
    initialsName1,
    initialsName2,
    initialsName3,
    productOver1,
    productOver2,
    productOver3,
    wordsWith5Letters1,
    wordsWith5Letters2,
    wordsWith5Letters3,
    sumPositiveNumbers1,
    sumPositiveNumbers2,
    sumPositiveNumber3,
    studentsPassed1,
    studentsPassed2,
    studentsPassed3,
    priceAboveAverage1,
    priceAboveAverage2,
    priceAboveAverage3,
    sortPeopleByage1,
    sortPeopleByage2,
    sortPeopleByage3,
} from "./lib.js";
// // Find the largest number and the number before it

//First way
const arr = [88, 54, 63, 11, 87, 3, 47, 6, 3, 9, 12, 28, 0, 16, 21];
largestNumber1(arr);

//Second way
largestNumber2(arr);

//Third way
largestNumber3(arr);

//Find the longest name in the array 

const arr2 = ["Sophia", "Jackson", "alaaAldee", "Olivia", "Liam", "Emma"];

//First way
longestName(arr2);


//Second way
longestName2(arr2);

//Third way
longestName3(arr2);

//Extract numbers bigger than their adjacent neighbors 

const arr3 = [1, 3, 4, 5, 12, 31, 4, 2, 16];

//First way
biggerNumber1(arr3);

//Second way
biggerNumber2(arr3);

//Third way
biggerNumber3(arr3);

//Count the number of people eligible to vote 

const arr4 = [10, 5, 23, 18, 19, 6, 25, 11, 3, 66, 50, 41, 14, 8, 33, 17, 54, 28];

//First way
peopleVote1(arr4);

//Second way
peopleVote2(arr4);

//Third way
peopleVote3(arr4);

//Check if a specific number exists in the array 

const arr5 = [1111, 2222, 3333, 7777, 8888];

//First way
console.log(specificNumber1(arr5, 7777));

//Second way
console.log(specificNumber2(arr5, 7777));


//Third way
console.log(specificNumber3(arr5, 7777));


//Calculate the average of numbers 

const arr6 = [11, 15, 84, 54, 21, 74, 85];

//First way

console.log(averageOfNumbers1(arr6));

//Second way
console.log(averageOfNumbers2(arr6));

//Third way
console.log(averageOfNumbers3(arr6));

//Find common elements between two arrays

const str1 = [1, 'hello', 'A', 3, 'world', 'B', 5];
const str2 = ['B', 'world', 4, 'A', 'hello', 7, 8];


//First way
console.log(commonElements1(str1, str2));

//Second way
console.log(commonElements2(str1, str2));

//Third way
console.log(commonElements3(str1, str2));

//Sort cities alphabetically

const cities = ['Zahle', 'Masyaf', 'Damascus', 'Homes', 'Aleppo'];

//First way
console.log(sortCities1(cities));

//Second way
console.log(sortCities2(cities));

//Third way
console.log(sortCities3(cities));

//Find duplicated items in an array

const str = [1.5, 2, "3", 4, 2, 5.6, true, 1.5, "7", 8];

//First way
console.log(duplicatedItems1(str));

//Second way
console.log(duplicatedItems2(str));

//Third way
console.log(duplicatedItems3(str));

//Split an array into chunks of size 3

const arr7 = [1, 2, 3, 4, 5, 6, 7, 8];

//First way
console.log(splitArray1(arr7));

//Second way
console.log(splitArray2(arr7));

//Third way
console.log(splitArray3(arr7));


//Reverse each word in the array

const arr8 = ["red", "yellow", "green", "purple", "blue", "white"];

//First way
console.log(reverseWords1(arr8));

//Second way
console.log(reverseWords2(arr8));

//Third way
console.log(reverseWords3(arr8));

//Convert full names into initials

const arr9 = ['Eduard Newgate', 'Naruto Uzumaki'];

//First way

//Second way
console.log(initialsName1(arr9));

//Second way
console.log(initialsName2(arr9));

//Third way
console.log(initialsName3(arr9));


//Find the first product with a total price over 1000

const arr10 = [{ name: "Laptop", price: 500, quantity: 3 }, { name: "Phone", price: 1200, quantity: 1 },
{ name: "Tablet", price: 400, quantity: 2 }];

//First way
console.log(productOver1(arr10));

//Second way
console.log(productOver2(arr10));

//Third way
console.log(productOver3(arr10));

//Find words with 5 letters or more and sort them

const arr11 = [["Apple", "banana", "cherry", "date", "elderberry"]];

//First way
console.log(wordsWith5Letters1(arr11));

//Second way
console.log(wordsWith5Letters2(arr11));

//Third way
console.log(wordsWith5Letters3(arr11));

//Use reduce to sum only positive numbers 

const arr12 = [1, 11, -9, 20, -3, 8, -1];

//First way
console.log(sumPositiveNumbers1(arr12));

//Second way 
console.log(sumPositiveNumbers2(arr12));

//Third way
console.log(sumPositiveNumber3(arr12));

//Extract names of students who passed 

const arr13 = [{ name: "Sara", status: "pass" }, { name: "Ali", status: "fail" }, {
    name: "Lina", status:
        "pass"
}];

//First way
console.log(studentsPassed1(arr13));

//Second way
console.log(studentsPassed2(arr13));

//Third way
console.log(studentsPassed3(arr13));

//Extract products with price above the average 

const arr14 = [{ name: "Table", price: 500 }, { name: "Chair", price: 200 }, { name: "Desk", price: 800 },
{ name: "Lamp", price: 150 }];

//First way
console.log(priceAboveAverage1(arr14));

//Second way
console.log(priceAboveAverage2(arr14));

//Third way
console.log(priceAboveAverage3(arr14));

//Sort people by age descending and return their names 

const arr15 = [{ name: "Ahmad", age: 25 }, { name: "Omar", age: 30 }, { name: "Layla", age: 22 }];

//First way
console.log(sortPeopleByage1(arr15));

//Second way
console.log(sortPeopleByage2(arr15));

//Third way
console.log(sortPeopleByage3(arr15));