// STRINGS  immutable

console.log("This is strings tutorial")
let a = "Kundan";
console.log(a[0]);
console.log(a[1]);
console.log(a[2]);
console.log(a[3]);
console.log(a[4]);
// console.log(a[5]);

console.log(a.length)


let real_name = "Kundan"
let friend = "Rohan"
console.log("His name is " + real_name + " and his friends name is " + friend)
// Using template literals i.e. $ and ``
console.log(`His name is ${real_name} and his friends name is ${friend}`)

let b = "KundanK"
console.log(b.toUpperCase())
console.log(b.toLowerCase()) 
console.log(b.length) 
console.log(b.slice(1, 5)) 
console.log(b.slice(1)) 

console.log(b.replace("K", "77"))
console.log(b.concat(a, "Aishwariya", "Rahul", "Priya"))

console.log(b)

let z = "  Kundan  "
console.log(z)
console.log(z.trim())   //remove white spaces


// Strings are immutable means original strings do not change at the time of modifying new string is being created

/*
escape sequence \  
new line \n  
 */


// TIP
// b.   shows all functions will auto pop up don't have remember all