// can change any page elements after we on design mode in console, so don't beleive in screenshots
// document.designMode = "on"

document.querySelector(".box").dataset   //run it on console

let div = document.createElement("div");
div.innerHTML = "I have been inserted <b>by Kundan</b>"
document.querySelector(".container").append(div)


// many more go through notes page 42 in which dynamically data is being generated by javascript
/*
node.append(e) -> append at the end of the node
node.prepend(e) -> insert at the beginning of node
node.before(e) -> insert before node
node.after(e) -> insert after node
node.replaceWith(e) -> replaces node with given node
*/

// node removal
let id1 = document.getElementById("id1")
id1.remove()