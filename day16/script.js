// alert("Hello I am JavaScript");

console.log("JavaScript is running....");

var number = prompt("Enter your number: ");
console.log("your number is: "+number);

var isTrue = confirm("Are you sure you want to leave this page ");

if(isTrue){
    console.log("Computer starts countdown");
}
else{
    console.log("Computer is not blasting");
}


document.title = "Changed Title using JS"

// changed the body color using Js added as inline css
document.body.style.background = "beige"