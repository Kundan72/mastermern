// javaScript VARIABLES, DATATYPES and OBJECTS

console.log("running JavaScript 2nd day")

var a = 5
a = a + 1
var b = 10
var c = "Kundan"

console.log(a, b, c)

console.log(typeof a, typeof b, typeof c)
console.log(a+b+8)

// invalid datatype
// var 55a = "Rohan"  should not start with number
// var Harry = "Rohan"  case sensitive
// var harry = "Mohan"  are different both are different


// const a1 = 6
// a1 = a1 + 1   not possible


console.log("let is block scoped")

let x = 2
{
    let x = 5
    console.log(x)
}
console.log(x)

console.log("var is global scoped")

var y = 2
{
    var y = 5
    console.log(y)
}
console.log(y)


// Primitive datatypes
let m = "Kundan"
let n = 22
let o = 3.35;
const p = true;   //cannot change it as i have declared it as const
let q = undefined;
let r = null;  //typeof null is object is wrong but universal as declared while creating

console.log(m, n, o, p, q, r)
console.log(typeof m, typeof n, typeof o, typeof p, typeof q, typeof r)


// OBJECT (follow rules of variables while creating object)
let O = {
    "name":"Kundan",
    "job code":5600,
    "is_handsome" : true
}
console.log(O)
O.salary = "1 Lakhs"  //added salary in this also
console.log(O)