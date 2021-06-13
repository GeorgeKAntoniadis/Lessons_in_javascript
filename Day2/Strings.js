"use strict";

let mystring="George";

for(let letters of mystring){
    console.log(letters); //Prints every letter of a string
}

let mystring1="Nikos";

for(let i in mystring1){
    console.log(mystring1[i]); // Prints every letter of a string, as it is an array
}

let mystring2="5";

console.log(mystring2*5); //Will print 25, because it will take it as intrger
console.log(mystring2+5);//Will print 55, because it will think that I want to add a string and an int

let temp=20;

let sum=`The temprature is ${temp}`; //With `` We can add things

let sum1="The temprature is " + temp; //The same thing with line 22

console.log(sum); //Same thing
console.log(sum1); //Same thing