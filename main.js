// Initail Identification
const art = document.getElementById("art");
let firstImg = document.getElementById("first");
let secondImg = document.getElementById("second");
let thirdImg = document.getElementById("third");
let description = document.getElementById("desc");
let price = document.getElementById("price");
let total = document.getElementById("total");
let free = document.getElementById("free");
let express = document.getElementById("express");
let shipping = document.getElementById("shipping");
// Text
let text = [
  "First Image, Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rerum beatae laboriosam, commodi quis tempore necessitatibus. Voluptatibus minima aut non doloremque?",
  "Second Image, Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rerum beatae laboriosam, commodi quis tempore necessitatibus. Voluptatibus minima aut non doloremque?",
  "Third Image, Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rerum beatae laboriosam, commodi quis tempore necessitatibus. Voluptatibus minima aut non doloremque?",
];

// imporant functions
function updateAll(img, textInd, imgPrice) {
  art.src = "images/" + img + ".jpg";
  desc.innerText = text[textInd];
  price.innerText = imgPrice;
  total.innerText = parseInt(price.innerText) + parseInt(shipping.innerText);
}

function shippingCost(shippingInfo) {
  if (shippingInfo == "free") {
    shipping.innerText = 5;
    total.innerText = parseInt(price.innerText) + parseInt(shipping.innerText);
    free.style.border = "2px solid #f1c40f";
    express.style.border = "0";
  } else {
    shipping.innerText = 30;
    total.innerText = parseInt(price.innerText) + parseInt(shipping.innerText);
    express.style.border = "2px solid #f1c40f";
    free.style.border = "0";
  }
}

// first image click action
firstImg.addEventListener("click", function () {
  updateAll(1, 0, 750);
});
secondImg.addEventListener("click", function () {
  updateAll(2, 1, 650);
});
thirdImg.addEventListener("click", function () {
  updateAll(3, 2, 440);
});

// free and express shipping
free.addEventListener("click", function () {
  shippingCost("free");
});
express.addEventListener("click", function () {
  shippingCost("express");
});
