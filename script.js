

var total = 0;


var fruit =  {
  name: "Apples",
  price: 0.99
};

var cereal = {
  name: "Cherrios",
  price: 2.99
};

var dairy = {
  name: "Milk",
  price: 3.00
};

var protein = {
  name: "Eggs",
  price: 1.99
};

// created an array claaed shoppingCart to contain objects on our shopping list
var shoppingCart = [fruit, cereal, dairy, protein];

// create a div element called receiptPaper to contain our shopping list and place it within the body
var receiptPaper = document.createElement("div");

////gave receiptPaper an id of receiptContainer and placed it within the body of the DOM using the appendChild method
receiptPaper.id = "receiptContainer";
document.body.appendChild(receiptPaper);


receiptContainer.style= "background-color: #789BAF;"


var shoppingList = document.createElement("ul");
receiptContainer.appendChild(shoppingList);

shoppingList.style = "background-color: blue;"


shoppingCart.forEach(function(items) {
console.log(items.name + ", $" + items.price.toFixed(2));
  total += items.price;

  total += items.price;
// created a variable to represent out item name, known as itemName, created a blank element called "textContent. used the appendChild method to add content to our empty element, used className propertly to give out item "nameSpan"
    var itemName = document.createElement("p");
    itemName.textContent = items.name;
    // receiptContainer.appendChild(itemName);
    // itemName.className = "nameTable";

   var itemPrice = document.createElement("p");
   itemPrice.textContent = itemName.textContent  +   " $" +  items.price.toFixed(2);
   receiptContainer.appendChild(itemPrice);
   itemName.className = "priceSpan";


});

var displayTotal = document.createElement("p");

displayTotal.textContent = "Your grand total is $" + total;

receiptContainer.appendChild(displayTotal);

console.log("Your total is $" + total.toFixed(2));
