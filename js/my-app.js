// Init App
var myApp = new Framework7({
    modalTitle: 'Calvary Chapel Mobile',
    // Enable Material theme
   material: true,
   pushState: true
   
});

// Expose Internal DOM library
var $$ = Dom7;

$$('a').on('click', function (e) { //Close panel when you open a new page
    myApp.closePanel();
});

// Add main view
var mainView = myApp.addView('.view-main', {
domCache : true,
});

// myApp.onPageInit('cart', function (page) {
//       $$('.delete').on('click', function(){
//         myApp.swipeoutDelete($$('li.swipeout.product1'));
//       });
//       $$('.delete2').on('click', function(){
//         myApp.swipeoutDelete($$('li.swipeout.product2'));
//       });
//       $$('.delete3').on('click', function(){
//         myApp.swipeoutDelete($$('li.swipeout.product3'));
//       });
// });


// 
// document.addEventListener("deviceready", function () {
//   $cordovaPlugin.someFunction().then(success, error);
// }, false);