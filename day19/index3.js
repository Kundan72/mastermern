// by classes
let BM = document.getElementsByClassName("box")
console.log(BM)

BM[3].style.backgroundColor = "yellow"

// by id
document.getElementById("violet").style.backgroundColor = "violet"


// querySelector

document.querySelector(".box").style.backgroundColor = "red"  //slect first query which matches with .box


//this won't work as it acts on html not in childElements  
// console.log(document.querySelectorAll(".box"))


// to select all .box at time
// returns as a nodelist so that we can iterate on it using e
document.querySelectorAll(".box").forEach(e => {
    e.style.backgroundColor = "beige"
})



// from tag name
document.getElementsByTagName("div")


// go through DOM notes 