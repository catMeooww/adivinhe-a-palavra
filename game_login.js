function addUser(){
console.log("olá");

p1 = document.getElementById("p1").value;
p2 = document.getElementById("p2").value;

console.log("página 1:  "+p1);
console.log("página 1:  "+p2);

localStorage.setItem("p1",p1);
localStorage.setItem("p2",p2);

window.location = "game.html";
}