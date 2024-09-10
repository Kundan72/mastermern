// Js Try Catch and Error handling

let a = prompt("Enter 1st number")

let b = prompt("Enter 2nd number")

if(isNaN(a) || isNaN(b)){
    throw SyntaxError("Please enter number here")
}

let sum =  parseInt(a) + parseInt(b)   // here a and b is string we have to typecast it into interger

console.log("The sum is ", sum)


try {
    console.log("The sum is ", sum*x)
} catch (error) {
    console.log("Error occured bruhh")
}
finally{
    console.log("files are being closed and db connection is being closed")
}


// Till now what I have learned is if first if function would have been satisfied it would have stopped working
// And here we are giving correct input so it's trying to multiply x which is catching error not throwing error in red
// try dosen't work on async functions like setInterval



function main(){
    let x = 2
    try {
        console.log("The sum is ", sum * x)
        return sum * x
    } 
    catch (error) {
        console.log("Error occured bruhh")
        return false
    }
    finally{
        console.log("files are being closed and db connection is being closed")
    }
}
let c = main()

//finally runs even after returning anything which normally dosen't run anything after retunrning some value in FUNCTION only 
// here sum * x is returned so accoring to rules anything after return would not display but here finally will be diplayed this happens only with finally