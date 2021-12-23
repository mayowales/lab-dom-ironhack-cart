// ITERATION 1

//const { product } = require("puppeteer");

function updateSubtotal(product) {
const price = product.querySelector(".price span").innerHTML
const quantity = product.querySelector(".quantity input").value

const subTotal = price * quantity
product.querySelector(".subtotal span").innerHTML = subTotal


return subTotal;
//console.log("quantity",quantity)


  
  //console.log('Calculating subtotal, yey!');

  //... your code goes here
}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  
  const singleProduct = document.querySelector('.product');
  updateSubtotal(singleProduct);
  
  // end of test

  // ITERATION 2
  //... your code goes here
  let productCart = [...document.getElementsByClassName('product')];
  console.log(productCart)
  let totalPrice = 0;
 productCart.forEach(productRow => {
   totalPrice += updateSubtotal(productRow)
 });
  
 console.log(totalPrice)

  // ITERATION 3
  //... your code goes here

  document.querySelector('#total-value span').innerHTML = totalPrice
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);
  //... your code goes here
  let remove = [...document.getElementsByClassName('btn btn-remoev')];
  remove.forEach(button => {
    remove.addEventListener('click', removeProduct);
  })

}

// ITERATION 5

function createProduct() {
  //... your code goes here
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  //... your code goes here
});
