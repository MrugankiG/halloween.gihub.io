var cartItems = [];
var isTotalHidden = true;
var anabelle = {
  name: "anabelle",
  price: "Your Soul"
}
var chucky = {
  name: "chucky",
  price: "Your Soul"
}
var creepyDolls = {
  name: "creepyDolls",
  price: "Your Soul"
}
var pennywise = {
  name: "pennywise",
  price: "Your Soul"
}
var ghostUnderBed = {
  name: "ghostUnderBed",
  price: "Your Soul"
}
var ghostInCupboard = {
  name: "ghostInCupboard",
  price: "Your Soul"
}
var ghostOverYou =  {
  name: "ghostOverYou",
  price: "Your Soul"
}
var cemeteryGhost = {
  name: "cemeteryGhost",
  price: "Your Soul"
}
var frankenstien = {
  name: "frankenstien",
  price: "Your Soul"
}
var mummy = {
  name: "mummy",
  price: "Your Soul"
}
var ghoulGirl = {
  name: "ghoulGirl",
  price: "Your Soul"
}
var crawlingZombie = {
  name: "crawlingZombie",
  price: "Your Soul"
}
var sansSkeleton = {
  name: "sansSkeleton",
  price: "Your Soul"
}
var skeletor = {
  name: "skeletor",
  price: "Your Soul"
}

function addToCart(item) {
  cartItems.push(item);
  document.getElementById("itemCounter").innerHTML = cartItems.length;
  showTotal();
}

function clickCart() {
  isTotalHidden = !isTotalHidden;
  showTotal();
}

function showTotal() {
  var orderTotal = document.getElementById("orderTotal");
  orderTotal.innerHTML = "";

  if (isTotalHidden === false) {
    var total = 0;
    for (var i = 0; i < cartItems.length; i++){
      total += cartItems[i].price;
    }
    orderTotal.innerHTML = "PAY: Your Soul";
  }
}
