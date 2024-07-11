// Code here!

document.querySelector(".art-1 > h3").innerHTML = "Potato";

document.querySelector("footer >section > article >:nth-child(2)").innerHTML =
  "START";

document.querySelector("footer >section > article >:nth-child(4)").innerHTML =
  "MAIL US";

document.querySelector(".art-2 > p").innerHTML =
  "Här har jag bytt infomration o, både det ena och det andra";

document.querySelector(".art-2 > button").style.background = "blue";
document.querySelector(".art-2 > button").innerHTML = "Nytext";

document.querySelector(".art-3 > figure").style.background = "green";

document.querySelector("footer> section >:nth-child(2)>p").innerHTML =
  "nyAdress ";

let para = document.querySelectorAll("p");

para.forEach((para) => {
  para.style.color = "green";
});

let newtext = document.querySelectorAll("button");

newtext.forEach((newtext) => {
  newtext.innerHTML = "ADD TO CART";
});

let home = document.querySelector("header > nav >:nth-child(1)");

newhome = (x) => {
  return x.classList.add("active");
};

newhome(home);

let logotype = document.querySelector("header > img");

/* logotype.classList.remove("logo"); */

let newele = document.createElement("a");

newele.innerText = "NEW MENU ALT";

document.querySelector("footer > section> article ").appendChild(newele);

let newProduct = document.createElement("article");

let newFigure = document.createElement("figure");

let newImage = document.createElement("img");
newImage.src = "img/hoodie-forrest.png";

newFigure.appendChild(newImage);

let newh2 = document.createElement("h2");
newh2.innerHTML = "Sinus Hoodie";

let newh3 = document.createElement("h3");
newh3.innerHTML = "Forrest";

let newp = document.createElement("p");
newp.innerHTML =
  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe, dolores.";

let newBtn = document.createElement("button");
newBtn.innerHTML = "ADD TO CART";

let mainElem = document.querySelector("main");

newProduct.append(newFigure, newh2, newh3, newp, newBtn);
mainElem.appendChild(newProduct);

const clickImage = document.querySelector(".logo");

clickImage.addEventListener("click", function () {
  console.log("found U");
});

const art1 = document
  .querySelector(".art-1")
  .addEventListener("click", function () {
    console.log("im potato");
  });

const art2 = document
  .querySelector(".art-2")
  .addEventListener("click", function () {
    console.log("Im fire");
  });

const art3 = document
  .querySelector(".art-3")
  .addEventListener("click", function () {
    console.log("im water");
  });
