// Modules
(function() {
    var app = angular.module('store',[]);
// where store is Application name, and array [] is where the dependencies go.


// Controller name should be Capitalized
app.controller('StoreController', function (){
    this.products = gems;
});

var gems = [
{
    name: "Dodecahedron",
    price: 2,
    description: 'Some gems have hidden qualities beyond their shine...',
    canPurchase: true,
    soldOut: false,
},
{
    name: "Pentagonal Gem",
    price: 5.95,
    description: 'Another description regarding this gem...',
    canPurchase: true,
    soldOut: false,
},
{
    name: "AnotherBeautifulGem",
    price: 2.95,
    description: 'Ruby Style...',
    canPurchase: true,
    soldOut: false,
}

]; // CLOSE ARRAYYYYY

})();
