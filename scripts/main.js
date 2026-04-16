let myHeading = document.querySelector("h1");
let myImage = document.querySelector("img");
let myButton = document.querySelector("button");


myImage.onclick = function() {
  let mySrc = myImage.getAttribute("src");
  if (mySrc === "Imagenes/Mozilla.png") {
    myImage.setAttribute("src", "Imagenes/Mozilla2.png");
  } else {
    myImage.setAttribute("src", "Imagenes/Mozilla.png");
  }
};


function setUserName() {
  let myName = prompt("Por favor, introduce tu nombre.");
  if (!myName) {
    setUserName();
  } else {
    localStorage.setItem("name", myName);
    myHeading.textContent = "Mozilla es genial, " + myName;
  }
}


if (!localStorage.getItem("name")) {
  setUserName();
} else {
  let storedName = localStorage.getItem("name");
  myHeading.textContent = "Mozilla es genial, " + storedName;
}



myButton.onclick = function() {
  setUserName();
};