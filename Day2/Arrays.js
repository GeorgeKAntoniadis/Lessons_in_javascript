"use strict";

/* Types string, numbers, null, array with arrays

We can mix them up

Pointers of array always start from 0

In arrays we write const 

We can add elements with .push

for (let i in array){ console.log(array[i])}

for (let element of array){ console.log(element)}

*/

const array1=[1,2,3,4,5];
const array2=[null,"george","nikos",56,43,78];
const array3=[true, false, true, true, false, null, true, false];

array1.push(45);
array2.push(45);

for(let i in array1){
    console.log(array1[i]);
}

for(let element of array2){
    console.log(element);
}

for(let i in array3){
    console.log(array3[i]);
}

array1[3]=15;
array1[0]=55;

for(let i in array1){
    console.log(array1[i])
}