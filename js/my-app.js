// Init App
var myApp = new Framework7({
    modalTitle: 'Framework7',
    // Enable Material theme
    material: true
    var options = {
  'bgcolor': '#0da6ec',
  'fontcolor': '#fff'
});
var welcomescreen_slides = [
  {
    id: 'slide0',
    picture: '<div class="tutorialicon">♥</div>',
    text: 'Welcome to this tutorial. In the next steps we will guide you through a manual that will teach you how to use this app.'
  },
  {
    id: 'slide1',
    picture: '<div class="tutorialicon">✲</div>',
    text: 'This is slide 2'
  },
  {
    id: 'slide2',
    picture: '<div class="tutorialicon">♫</div>',
    text: 'This is slide 3'
  },
  {
    id: 'slide3',
    picture: '<div class="tutorialicon">☆</div>',
    text: 'Thanks for reading! Enjoy this app.<br><br><a id="tutorial-close-btn" href="#">End Tutorial</a>'
  }
];
var welcomescreen = myApp.welcomescreen(welcomescreen_slides, options);
welcomescreen.open();  
welcomescreen.setTimeout(welcomescreen.open(), 3000);

// Expose Internal DOM library
var $$ = Dom7;

$$('a').on('click', function (e) { //Close panel when you open a new page
    myApp.closePanel();
});

// Add main view
var mainView = myApp.addView('.view-main', {
domCache : true,
});

myApp.onPageInit('cart', function (page) {
      $$('.delete').on('click', function(){
        myApp.swipeoutDelete($$('li.swipeout.product1'));
      });
      $$('.delete2').on('click', function(){
        myApp.swipeoutDelete($$('li.swipeout.product2'));
      });
      $$('.delete3').on('click', function(){
        myApp.swipeoutDelete($$('li.swipeout.product3'));
      });
});



