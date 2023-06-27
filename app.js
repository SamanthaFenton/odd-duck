"use strict";
console.log("strict");

const productContainer = document.querySelector("section");
const resultsButton = document.querySelector("button");
const image1 = document.querySelector("section img:first-child");
const image2 = document.querySelector("section img:nth-child(2)");
const image3 = document.querySelector("section img:nth-child(3)");

let clicks = 0;
console.log("clicks");
let views = 0;
console.log("views");

let maxClicksAllowed = 25;

function getRandomNumber() {
  return Math.floor(Math.random() * allProducts.length);
}

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
  while (product2 === product3) {
    product3 = getRandomNumber();
    // cannot do this without help as I dont know how to rotate 3 options
  }
  while (product3 === product1) {
    product3 = getRandomNumber();
  }

  /*for (let i = 0; i < allProducts.length; i++) {
    let li = document.createElement("li");
    li.textContent = `${allProducts[i].name} had ${allProducts[i].views} views and was clicked on ${allProducts[i].clicks} times.`;*/

  image1.src = allProducts[product1].src;
  image2.src = allProducts[product2].src;
  image3.src = allProducts[product3].src;
  image1.alt = allProducts[product1].name;
  image2.alt = allProducts[product2].name;
  image3.alt = allProducts[product3].name;
  allProducts[product1].views++;
  allProducts[product2].views++;
  allProducts[product3].views++;
  allProducts[product1].clicks++;
  allProducts[product2].clicks++;
  allProducts[product3].clics++;
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
      productContainer.className = "clicks-not-allowed";
      resultsButton.addEventListener("click", renderChart);
    } else {
      renderProducts();
    }
  }
}

function renderResults() {
  console.log("Results");
  let ul = document.querySelector("ul");
  for (let i = 0; i < allProducts.length; i++) {
    let li = document.createElement("li");
    li.textContent = `${allProducts[i].name} had ${allProducts[i].views} views and was clicked on ${allProducts[i].clicks} times.`;
    ul.appendChild(li);
  }
}

function renderChart() {
  const productName = [];
  const productViews = [];
  const productClicks = [];

  for (let i = 0; i < allProducts.length; i++) {
    productName.push(allProducts[i].name);
    productViews.push(allProducts[i].views);
    productClicks.push(allProducts[i].clicks);
  }
  console.log(productName);
  console.log(productViews);
  console.log(productClicks);

  const data = {
    labels: productName,
    backgroundcolor: ["#ffffff"],
    datasets: [
      {
        label: "Times Viewed",
        data: productViews,
        backgroundcolor: ["#d64161"],
        bordercolor: ["#3e4444"],
        borderwidth: 1,
      },
      {
        label: "Times Clicked",
        data: productClicks,
        backgroundcolor: ["#d5e1df"],
        bordercolor: ["#3e4444"],
        borderwidth: 1,
      },
    ],
  };

  const config = {
    type: "bar",
    data: data,
  };

  const resultsChart = document.getElementById("myChart");
  const results = new Chart(resultsChart, config);
}

const bag = new Product("bag", "Images/bag.jpg");
const banana = new Product("banana", "Images/banana.jpg");
const bathroom = new Product("bathroom", "Images/bathroom.jpg");
const boots = new Product("boots", "Images/boots.jpg");
const breakfast = new Product("breakfast", "Images/breakfast.jpg");
const bubblegum = new Product("bubblgum", "Images/bubblegum.jpg");
const chair = new Product("chair", "Images/chair.jpg");
const cthulhu = new Product("cthulhu", "Images/cthulhu.jpg");
const dogduck = new Product("dog-duck", "Images/dog-duck.jpg");
const dragon = new Product("dragon", "Images/dragon.jpg");
const pen = new Product("pen", "Images/pen.jpg");
const petsweep = new Product("pet-sweep", "Images/pet-sweep.jpg");
const scissors = new Product("scissors", "Images/scissors.jpg");
const shark = new Product("shark", "Images/shark.jpg");
const sweep = new Product("sweep", "Images/sweep.png");
const tauntaun = new Product("tauntaun", "Images/tauntaun.jpg");
const unicorn = new Product("unicorn", "Images/unicorn.jpg");
const watercan = new Product("water-can", "Images/water-can.jpg");
const wine = new Product("wine-glass", "Images/wine-glass.jpg");

renderProducts();

productContainer.addEventListener("click", handleProductClick);
