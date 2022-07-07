// callback functions of the methods below take three arguments
// callback(value, index, array)

// forEach()
let data= [1,2,3,4,5]

data.forEach((value, index, array) => {
    array[index]= 2*value
})

console.log(data)

// map()
let a= data.map(x => x**2)
console.log(a)

//filter
let b= a.filter((v,i) => i%3===0)
console.log(b)
// close gaps in a sparse array
let sparse= [1,2,,3,4,,5,6,,undefined,null]
let dense= sparse.filter(() => true)
console.log(sparse)
console.log(dense)

// find and findIndex
console.log(dense.find((v,i) => v*dense[i+1]===12))
console.log(dense.findIndex((v,i) => v*dense[i+1]===12))

// every() and some() return true or false for existence of a condition
data= [1,4,7,9,22,55,87]
console.log(data.every(v => v<90))
console.log(data.some(v => v%5===4))
console.log(dense.some(v => v === null))

// callback(accumulated_result_of_reduction, value, index, array)
dense= [1,2,3,4,5]
//reduce: lowest index to highest
console.log(dense.reduce((res, val) => res+val, 0))
console.log(dense.reduce((res, val) => res*val, 3))
// reduceRight: highest index to lowest
dense= [2,3,4]
console.log(dense.reduceRight((x,y) => x/y))
console.log(dense.reduce((x,y) => x/y))

// flat() and flatMap()
console.log([1,[2,[3,[4]]]].flat()) // flats one level
console.log([1,[2,[3,[4]]]].flat(2)) // flats two levels
console.log([1,[2,[3,[4]]]].flat(3)) // flats three levels
console.log([1,[2,[3,[4]]]].flat(4)) // flats four levels

// a.flatMap(func) === a.map(func).flat()
let phrases= ['hello world', 'the definitive guide']
console.log(phrases.map(elem => elem.split(' ')))
console.log(phrases.flatMap(elem => elem.split(' ')))
var nums= [-1,-2,-3]
console.log(nums.map(elem => elem <0 ? []: Math.sqrt(elem)))
console.log(nums.flatMap(elem => elem <0 ? []: Math.sqrt(elem)))

// concat()
a= [1,2,3]
console.log(a.concat(5,6))
console.log(a.concat(1,2,[3], [4,[5,6]]))

// slice() does not modify the array
a= [1,2,3,4,5,6,7,8]
console.log('a is: '+ a.slice(4,8))
console.log(a)
// remove 2 elements from index 4 on
console.log(a.splice(4,2)) 
console.log(a)
// remove 2 elements from index 4 on, then add the written elements
console.log(a.splice(4,2,'a', 'b', 'c'))
console.log(a)
console.log(a.splice(2,0, 'k','l'))
console.log(a)