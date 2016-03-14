// Modules
(function() {
    var app = angular.module('store',[]);
// where store is Application name, and array [] is where the dependencies go.


// Controller name should be Capitalized
app.controller('StoreController', function (){
    this.product = gem;
});

var gem = {
    name: "Dodecahedron",
    price: 2.95,
    description: 'Some gems have hidden qualities beyond their shine...',
    canPurchase: true,
    soldOut: true,

}




})();
