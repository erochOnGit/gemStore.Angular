var app = angular.module("gemstore", []);
var gem = [
  { name: "Azurite", date: "1388123412324", price: 2.95, canPurchase: true },
  {
    name: "Bloodstone",
    date: "1388123412323",
    price: 5.95,
    canPurchase: false
  },
  { name: "Zircon", date: "1388123412322", price: 3.95, canPurchase: true }
];

app.controller("StoreController", [
  "$scope",
  function($scope) {
    $scope.products = gem;
  }
]);

app.controller("TabController", function() {
  this.order = "price";
  this.reverse = false;
  this.getOrder = function() {
    return this.order;
  };
  this.getReverse = function() {
    return this.reverse;
  };
  this.orderBy = function(column) {
    if (this.order != column) {
      this.order = column;
      this.reverse = true;
    } else if (!this.reverse) {
      this.reverse = true;
    } else if (this.reverse) {
      this.reverse = false;
    }
  };
});

