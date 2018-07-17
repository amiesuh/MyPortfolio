// alert("This is Amie's website!");
// var mybutton= document.querySelector("button");
// mybutton.onclick= function() {
//   var name = prompt("Please enter your name")
//   localStorage.setItem("name:", name)
// }
var myButton=document.querySelector("Button")
myButton.onclick=function(){
  SetUserName();
}
function setUserName(){
  var name=prompt("Please enter your name: ");
  localStorage.setItem("name:", name);
  
}
