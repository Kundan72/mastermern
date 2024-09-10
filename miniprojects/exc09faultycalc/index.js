/*
Create a faulty calculator using javascript

1. it takes two number as input from the user
2. it performs wrong operations

+ ---> -
* ---> +
- ---> /
/ ---> *

It performs wrong operation 10% of the times do it using random function
*/

// can do this from if else also 
// but gonna use eval function
// and will run it on browser coz using prompt

let random = Math.random()
alert(random)

let a = prompt("Enter first number")
let c = prompt("Enter operation")
let b = prompt("Enter second number")

let obj = {
    "+" : "-",
    "*" : "+",
    "-" : "/",
    "/" : "*"
}

if (random > 0.1){
    console.log(`The result is ${a} ${c} ${b}`)
    alert(`The result is ${eval(`${a} ${c} ${b}`)}`)
}
else{
    c = obj[c]
    alert(`The result is ${eval(`${a} ${c} ${b}`)}`)

}
