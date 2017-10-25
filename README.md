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
