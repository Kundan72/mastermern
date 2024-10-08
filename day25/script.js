// ADVANCED JAVASCRIPT Concepts

// IIFE (Immediately invoked function) it's a function that runs as soon as it's defined
async function sleep(){
    return new Promise ((resolve, reject) =>{
        setTimeout(() => {
            resolve(45)
        }, 1000);
    })
}

function sum(a, b, c) {
    return a+b+c    
}

(async function main(){
    // let a = await sleep()
    // console.log(a)
    // let b = await sleep()
    // console.log(b);


    // let [x, y] = [1, 5]
    // console.log(x,y)

    // ...variableName will be an array which will take rest of numbers as an array
    // let [x, y, ...rest] = [1, 5, 7, 9, 8, 12]
    // console.log(x,y,rest)


    // Pulling out objects according to requirement
    let obj = {
        a:1,
        b:2,
        c:3
    }

    let {a, b} = obj
    console.log(a, b)

    //...arr is spread operator used to open array
    let arr = [1, 4, 6]
    // console.log(arr[0]+arr[1]+arr[2])
    console.log(sum(arr[0], arr[1], arr[2])) //assigning variable one by one in sum variable
    console.log(sum(...arr)) //...arr is opening array and making sum of it
})()

// Hoisting go through the notes page 71
