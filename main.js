"use strict"
let menu = document.getElementsByClassName("menu");
let list = document.getElementsByClassName("dropdown-content");
let body = document.body;
let count = 0;
let h1 = document.getElementsByTagName("h1")

let newH1 = h1[0].textContent.toUpperCase();
h1[0].innerHTML = newH1
menu = menu[0];
list = list[0]


console.log(menu);

menu.addEventListener("click", (event)=> {
    if(list.style.display != "block") {
        list.style.display = "block"
    } else if(list.style.display == "block"){
        list.style.display = "none"
    }
})