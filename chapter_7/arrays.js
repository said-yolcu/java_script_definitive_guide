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

// a more efficient mapping than map()
let mapArray= Array.from(c, elem => 2*elem)
console.log(mapArray)

// reading and writing array elements
let arr= [0,1,2]
arr[3]= 13
console.log(arr[3])
console.log(arr['3'])

arr[5]= 34 // now index 4 is empty. We created a sparse array
console.log(arr)
// below creates a property '-1.23', does not change the length
arr[-1.23]= 34; 
// below creates an index, changes the length
arr[23]= '23 times masallah'
console.log(arr.length)
console.log(arr)
// no 'out of bounds' error. Only returns undefined
console.log(arr)
delete arr[23] // deleting the last element doesn't alter the length
console.log(arr)

// add to the end
arr.push('end')
// add to the beginning
arr.unshift('beginning')
// pop() , removes and returns the last element, decrements the length
arr.pop()
// shift(), removes and returns the first element, decrements the length
arr.shift()

arr[10]= undefined
console.log(arr)

let non_empty=[]
for(let [index, elem] of arr.entries()){
    // pass empty and undefined elements, but not 0's
    // turns out the commented out part is unnecessary
    // empty elements evaluates to undefined
    // second check is enough
    /*(index in arr) &&*/ (arr[index] !== undefined) && 
        non_empty.push(elem) 
}
console.log(non_empty)

for(let p in arr){
    (arr[p] !== undefined) && console.log(`${p} : ${arr[p]}`)
}

let for_each_arr= []
arr.forEach((elem, index) => {
    for_each_arr+=`${index}: ${elem}----`
})
console.log('for each: ', for_each_arr)

let vowel_count=0;
let vowels= ''
let phrase= 'Ey Enver mazimin şehit yiğidi'
for(let letter of phrase){
    if(/[aeıioöuü]/.test(letter.toLowerCase())){
        vowels+= letter
        vowel_count++
    }
}
console.log(`there are ${vowel_count} vowels in phrase. Vowels are ${vowels}`)