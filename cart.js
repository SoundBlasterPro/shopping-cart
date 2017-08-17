
$('.btn').on('click', function () {
  var $btn = $(this).button('loading')
  setTimeout(function () {
    $btn.button('reset');
  }, 1000);
})

// var orderItems = [
//   { "product": "Pizza", "price": 10.99 },
//   { "product": "Hamburger", "price": 5.99 },
//   { "product": "Hot Dog", "price": 4.99 },
//   { "product": "Potato", "price": 4.99 }
// ];
var orderItems =[

];
let item = {};
// $('.col-md-6').each(function () {
//   item = $(this).text();
//   orderItems.push(item);
// });
// console.log(orderItems);  

// console.log("you're a jerk. ")
// $(document).ready(function () {
//   $("button").click(function () {
//     console.log($('.col-md-6').text());
//     $('.cart').append($('.col-md-6').text());

//   });
// });

$('.btn-primary').click(function(){
  itemName = ('{"product":' + '"' + $(this).parent('.col-md-6').children('p').eq(0).text() + '"');
  let rawPrice = $(this).parent('.col-md-6').children('p').eq(1).text()
  let cleanPrice = rawPrice.substr(1);
  itemPrice = ('"price":' + cleanPrice + '}');
  item = itemName + "," + itemPrice;
  console.log(item);
  parsedItem = JSON.parse(item);
  orderItems.push(parsedItem);
  console.log(orderItems);
  updateCart();
});

$(document).ready(updateCart());

function updateCart(){
  let subtotal = 0;
  let taxRate = 0.1;
  let tax = 0;
  let total = 0;

  $(".cart").html('');
  for(var x = 0; x < orderItems.length ; x ++){
    
    //let textout = "Product: " + orderItems[x].product + ", $" + orderItems[x].price
    console.log("Product: " + orderItems[x].product + ", Price: $" + orderItems[x].price);
    $('.cart').append('<p><strong>Item: </strong>' + orderItems[x].product + '<strong>, Price:</strong> $' + orderItems[x].price + '</p>');
    subtotal += orderItems[x].price;
  }
  tax = subtotal * taxRate;
  total = tax + subtotal;

  $('.cart').append("<p><strong>Subtotal:</strong> $" + subtotal.toFixed(2) + "</p>");
  $('.cart').append("<p><strong>Tax <em>(10%)</em>:</strong> $" + tax.toFixed(2) + "</p>");
  $('.cart').append("<h3><strong>Total:</strong> $" + total.toFixed(2) + "</h3>");
};


$('#checkoutBtn').click(function(){
  alert("buying your crap now");
});