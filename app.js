"use strict";
console.log("strict");

const productContainer = document.querySelector("section");
const resultsButton = document.querySelector("section + div");

const image1 = document.querySelector("section img:first-child");
const image2 = document.querySelector("section img:nth-child(2)");
const image3 = document.querySelector("section img:nth-child(3)");

let clicks = 0;
console.log("clicks");

let maxClicksAllowed = 5;

let allProducts = [];

function Product(name, src) {
  this.name = name;
  this.src = src;
  this.clicks = 0;
  this.views = 0;
  allProducts.push(this);
}

function renderProducts() {
  let product1 = getRandomNumber();
  let product2 = getRandomNumber();
  let product3 = getRandomNumber();

  while (product1 === product2) {
    product2 = getRandomNumber();
    // cannot do this without help as I dont know how to rotate 3 options
  }

  image1.src = allProducts[product1].src;
  image2.src = allProducts[product2].src;
  image3.src = allProducts[product3].src;
  image1.alt = allProducts[product1].name;
  image2.alt = allProducts[product2].name;
  image3.alt = allProducts[product3].name;
  allProducts[product1].views++;
  allProducts[product2].views++;
  allProducts[product3].views++;
}

function handleProductClick(event) {
  if (event.target === productContainer) {
    alert("Please click on the image");
  } else {
    clicks++;
    let clickedProduct = event.target.alt;
    for (let i = 0; i < allProducts.length; i++) {
      if (clickedProduct === allProducts[i].name) {
        allProducts[i].clicks;
        break;
      }
    }
    if (clicks === maxClicksAllowed) {
      productContainer.removeEventListener("click", handleProductClick);
      productContainer.className = "no-voting";
      resultsButton.addEventListener("click", renderResults);
      resultsButton.className = "clicks-allowed";
    } else {
      renderProducts();
    }
  }
}

function renderResults() {
  console.log(Results);
  let ul = document.querySelector("ul");
  for (let i = 0; i < allProducts.length; i++) {
    let li = document.createElement("li");
    li.textContent = `${allProducts[i].name} had ${allProducts[i].views} views and was clicked on ${allProducts[i].clicks} times.`;
    ul.appendChild(li);
  }
}
