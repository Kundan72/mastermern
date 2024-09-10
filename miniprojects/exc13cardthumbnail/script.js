// to dynamically add card means new card will be added according to the user need


/*let boxes = document.querySelector(".container").children

function createCard(title, cName, views, monthsOld, duration, thumbnail){
    let img = document.getElementsByClassName("img")
    img = thumbnail
}

Array.from(boxes).forEach(e=>{
    e.style.backgroundColor = getRandomColor()
    e.style.color = getRandomColor()
    console.log(getRandomColor())
})


createCard("Introduction to Backend | Sigma Web Dev Video #2", "CodewithHarry", 560000, 7, "31:22", "https://i.ytimg.com/vi/tVzUXW6siu0/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLB0alxLSXCSEPITzWr-XXUiv1oglQ")

my approach*/



let boxes = document.querySelector(".container").children

function createCard(title, cName, views, monthsOld, duration, thumbnail){
    let viewStr
    if(views<1000){
        viewStr = views
    }
    else if(views>1000000){
        viewStr = views/1000000 + "M"
    }
    else{
        viewStr = views/1000 + "K"
    }
    
    let html = `        
        <div class="card">
            <div class="image"><img src="${thumbnail}" alt="">
            <div class="capsule">${duration}</div>
            </div>
            <div class="text">
                <h1>${title}</h1>
                <p>${cName} . ${viewStr} views . ${monthsOld} months ago</p>
            </div>
        </div>
        `
        document.querySelector(".container").innerHTML = document.querySelector(".container").innerHTML + html
}


createCard("Introduction to Backend | Sigma Web Dev Video #2", "CodewithHarry", 5600000, 7, "31:22", "https://i.ytimg.com/vi/tVzUXW6siu0/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLB0alxLSXCSEPITzWr-XXUiv1oglQ")

// We can run this function according to our need input and this will be updated dynamically 
// also we can change everything img, timestamp, cname, and can design it according to usx 

createCard("Introduction to Express Js | Sigma Web Dev Video #3", "CodewithHarry", 86000, 3, "45:12", "https://i.ytimg.com/vi/tVzUXW6siu0/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLB0alxLSXCSEPITzWr-XXUiv1oglQ")

// TIP : we can add eventlistener on buttons and can add dynamically value using just button and input


createCard("Introduction to Express Js | Sigma Web Dev Video #3", "CodewithHarry", 860, 1, "25:24", "https://i.ytimg.com/vi/tVzUXW6siu0/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLB0alxLSXCSEPITzWr-XXUiv1oglQ")