var app = angular.module("gemstore", []);
var gem = [
  { name: "Azurite", price: 2.95, canPurchase: true },
  { name: "Bloodstone", price: 5.95, canPurchase: true },
  { name: "Zircon", price: 3.95, canPurchase: true }
];
app.controller("StoreController", function() {
  this.products = gem;
});
