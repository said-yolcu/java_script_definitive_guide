// Creating arrays
// array literals
let empty = []
let mixed = [1.1, , true, 'leb',]

console.log(mixed.length)

for (elem of mixed) {
    console.log(elem)
}

// spread operator
// use it to create a shallow copy
let original = [1, 2, 3]
let copy = [...original]
copy[0]= 6; // does not change the original
let double= original;
double[1]= 13; // changes the original

console.log(copy)
console.log(original)
console.log(double)

// Array constructor
let a= new Array() // []
let b= new Array(10) // 10 elemented array
let c= new Array(1,2,3) // [1,2,3]

b[5]= undefined
b[6]= null
console.log(b)

// Array.of()
Array.of(10) // => [10] only this is different than constructor 
let copy_of_c= Array.from(c)
console.log(copy_of_c)