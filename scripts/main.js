let myImage = document.querySelector("img");

myImage.addEventListener("click", function () {
  let mySrc = myImage.getAttribute("src");
  if (mySrc === "images/lofi1.png") {
    myImage.setAttribute("src", "images/bureau.jpg");
  } else {
    myImage.setAttribute("src", "images/lofi1.png");
  }
});

let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");

function setUserName() {
  let myName = prompt("Veuillez saisir votre nom.");
  localStorage.setItem("nom", myName);
  myHeading.textContent = "Bienvenue sur Coin Lofi, " + myName;
}

if (!localStorage.getItem("nom")) {
  setUserName();
} else {
  let storedName = localStorage.getItem("nom");
  myHeading.textContent = "Bienvenue sur Coin Lofi, " + storedName;
}

/*let myHeading = document.querySelector("h1");
myHeading.textContent = "test ";*/

/*document.querySelector("html").addEventListener("click", function () {
  alert("Aïe, arrêtez de cliquer !!");
});*/

// Voici un commentaire

/*
Mais les commentaire de type CSS passent aussi !
*/
