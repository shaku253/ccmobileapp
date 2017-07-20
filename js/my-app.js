// Init App
var myApp = new Framework7({
    modalTitle: 'Calvary Chapel Mobile',
    // Enable Material theme
    material: true,  
});

var welcomescreen_slides = [
  {
    id: 'slide0',
    title:'Pray',
    picture: '<img src="img/slide 1.jpg" alt="Pray for SA" style="height: 100%; width: 100%;">',
    text: 'Welcome to this tutorial. In the next steps we will guide you through a manual that will teach you how to use this app.'
  },
  {
    id: 'slide1',
    title:'Pray',
    picture: '<img src="img/slide 2.jpg" alt="Pray for the Church" style="height: 100%; width: 100%;">',
    text: 'Join us for 21 days of prayer for salvation for family, friends and co-workers...'
  },
  {
    id: 'slide2',
    title:'Deeper Life',
    picture: '<img src="img/slide 3.jpg" alt="Bible Study" style="height: 100%; width: 100%;">',
    text: 'He walked among us. New Deeper Life series. Join one near to you: Tableview, Durbanville, Cape Town.'
  },
  {
    id: 'slide3',
    picture: '<img src="img/mode.jpg" alt="Pray for SA">',
    text: 'Thanks for reading! Enjoy this app.<br><br><a id="tutorial-close-btn" href="#">End Tutorial</a>'
  }
];

var options = {
'parallax': 'img/background.jpg',
//   'bgcolor': '#0da6ec',
  'fontcolor': '#2196f3',
}
var welcomescreen = myApp.welcomescreen(welcomescreen_slides, options);


// var welcomescreen = myApp.welcomescreen(welcomescreen_slides, options);
// welcomescreen.open();  
// welcomescreen.setTimeout(welcomescreen.open(), 3000);

// Expose Internal DOM library
var $$ = Dom7;

$$('a').on('click', function (e) { //Close panel when you open a new page
    myApp.closePanel();
});

// Add main view
var mainView = myApp.addView('.view-main', {
domCache : true,
});




