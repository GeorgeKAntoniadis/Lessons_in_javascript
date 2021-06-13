/* This is a mini Project that greets us, that pop 5 elements of i in an array and then prints them

By George K. Antoniadis */

"use strict"; //Just to protect our variables

const name="George";

let Welcome="Hello, "+ name;

console.log(Welcome);

const array=[1,2,3,4,5,6,7,8,9,10];


for(var i in array){
    array.pop(i);
}

for(var elements_of_array of array){
    console.log(elements_of_array);
}

