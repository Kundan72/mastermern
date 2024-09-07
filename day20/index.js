// Events, Event Bubbling, setInterval & setTimeout

// List of all mouse events 
// https://developer.mozilla.org/en-US/docs/Web/API/Element#mouse_events


let button = document.getElementById("btn")

button.addEventListener("dblclick", ()=>{
    document.querySelector(".box").innerHTML = "<b>Yayy you were clicked</b> Enjoy your click!"
})

button.addEventListener("contextmenu", ()=>{
    alert("Dont hack us by Right click Please")
})

// working on console of inspect when you press it shows the keys pressed
document.addEventListener("keydown", (e)=>{
    console.log(e, e.key, e.keyCode)
})


