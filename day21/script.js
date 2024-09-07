// JavaScript Callback and Promises

// 1
console.log("Hacked by Kundan")
// 2
console.log("Hacked by Me")

// set timeout is async in nature means it will run in bg for 1 sec while executing another items
// 4
setTimeout(() => {
    console.log("Inside timeout")
}, 1000);

// 3
console.log("The End")


// anfn is shortcut to create arrow function as we installed react es7 extension
const fn = () => {
    console.log("Nothing")
}

const callback = (arg, fn) => {
    console.log(arg)
    fn()
}

const loadscript = (src, callback) => {
  let sc = document.createElement("script")
  sc.src = src
  sc.onload = callback("Kundan", fn);
  document.head.append(sc)
}

loadscript("https://cdnjs.cloudflare.com/ajax/libs/prism/9000.0.1/prism.min.js", callback)

// Prism is used for syntax highlighter