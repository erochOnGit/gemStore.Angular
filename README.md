# gemStore.Angular
### tp at ipi school ###
get bootstrap and angular mignified

create your app.js that you'll import in your html
```
var app = angular.module('gemstore',[]);
```
create your index.html
```
<!DOCTYPE html>
<html lang="en"
      ng-app="gemstore">
<head>
    <link rel="stylesheet" type="text/css" href="bootstrap.min.css">
    <script src="./angular.min.js" />
    <script src="./app.js" />
    <meta charset="UTF-8">
    <title>GEMSTORE</title>
</head>
<body>
<div class="container">
    <h1>{{"Bienvenue dans ma Boutique de pierre précieuses"}}</h1>
</div>
</body>
</html>
```

You can test if there is '{{}}' visible in your browser its mean that you forgot a step.

once done you can add your model with all your gems .. place it in your app.js for now. it's a bad practice but for this little exercise we'll do the minimum
```
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
```

After adding a model we would like to access it then let's create a controller following the mvc pattern if you don't know the mvc pattern I recommend you to check what is it ... it's really quick to understand what is it.

add the following code a the end of your app.js :
```
app.controller("StoreController", [
  "$scope",
  function($scope) {
    $scope.products = gem;
  }
]);
```

now you have access to your data in your html file then go to your html and specify the dom element parent where you want to access to the controller. all children of this div or span or whatever will access to the information provided by our controller that we defined earlier

let's specify it in body
```
<body ng-controller="StoreController">
```
then we'll try to display the name of a product in order to do so we'll have to loop on the products array!

let's use a angular specific method : ```ng-repeat```

and btw let's rename products with an alias ! like this it will be easier to write clean code :
```
<div  ng-repeat="product in products></div>
```
this precedent alias is not really relevent but it's to show you that you re able to rename all variable !

now let's add our product name in the repeater : 
```
<span>{{product.name}}</span>
```
 now you have a beautiful list of product !


