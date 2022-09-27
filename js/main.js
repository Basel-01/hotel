// Know Page Name
let lis = document.querySelectorAll("header ul a");

lis.forEach((li) => {
  if(li.classList.contains("current")) {
    if(li.innerHTML === "Home")
      homeJs();
    else if(li.innerHTML === "About")
      aboutJs();
    else if(li.innerHTML === "Contact")
      contactJs();
  }
},);

// Js Codes

function homeJs () {

}

function aboutJs () {
}

function contactJs () {

  // Form Session
  let form = document.querySelector(".contact form");
  let inputs = document.querySelectorAll(".contact form [name]");

  window.onload = _ => {
    inputs.forEach((input) => {
      input.value = window.sessionStorage.getItem(input.name);
    });
  }
  form.onsubmit = _ => {
    window.sessionStorage.clear();
  }
  inputs.forEach((input) => {
    input.oninput = _ => {
      window.sessionStorage.setItem(input.name, input.value);
    }
  });
  
}

// Main Code

// Responsive Nav
let burger = document.querySelector("header .bars");
let menue = document.querySelector("header nav");
burger.onclick = _ => {
  menue.classList.toggle("show");
}