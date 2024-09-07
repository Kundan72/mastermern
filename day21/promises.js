// solution to the hell is promises, promise of code execution

// Also i made a my own snippet for shortcut from settings user snippet

// filename javascript.json
// clog for console.log 
// alt for alert 


// alert('Kundan is good boy');

console.log('This is promises');


let prom1 = new Promise((resolve, reject) => {
    let a = Math.random();
    if (a<0.5){
        reject("No random number was not supporting you")
    }
    else{
        setTimeout(() => {
            console.log("Yes I am done")
            resolve("Kundan")
        }, 2000);
    }
})

let prom2 = new Promise((resolve, reject) => {
    let a = Math.random();
    if (a<0.5){
        reject("No random number was not supporting you 2")
    }
    else{
        setTimeout(() => {
            console.log("Yes I am done 2")
            resolve("Kundan 2")
        }, 1000);
    }
})

// prom1.then((a) =>{
//     console.log(a)   //runs when random is more > 0.5
// }).catch((err)=>{
//     console.log(err)  //catching the error if random < 0.5 and displaying as output not just console red error
// })


// all promises will be run without showing status and reason
/*
let p3 = Promise.all([prom1, prom2])
p3.then((a)=>{
    console.log(a)
}).catch((err)=>{
    console.log(err)
})
*/


// all promises will be run also shows status (fullfilled, rejected) value if run and reason if unable to run
let p3 = Promise.allSettled([prom1, prom2])
p3.then((a)=>{
    console.log(a)
}).catch((err)=>{
    console.log(err)
})


// Try different promises in page 50 ch-9 of notes