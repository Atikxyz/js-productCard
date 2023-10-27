import productInfo from "./product.js";


async function loadAPI() {
  const res = await fetch("https://fakestoreapi.com/products");
  const data = await res.json();
  
  let productCard = "";
  for (let value of data) {
    productCard += productInfo(value);
  }
  document.querySelector("#root").innerHTML = productCard;


};
loadAPI();

