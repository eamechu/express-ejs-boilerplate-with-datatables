var express = require('express');
require('dotenv').config();
var path = require('path');

var app = express();
var port = process.env.PORT || 3000;

// set the view engine to ejs
app.set('view engine', 'ejs');

//Set Static Folder
app.use(express.static(path.join(__dirname, 'public')));

// index page
app.get('/', function(req, res) {
  var drinks = [
      { name: 'Bloody Mary', drunkness: 3 },
      { name: 'Martini', drunkness: 5 },
      { name: 'Scotch', drunkness: 10 }
  ];
  var tagline = "Any code of your own that you haven't looked at for six or more months might as well have been written by someone else.";

  res.render('pages/index', {
      drinks: drinks,
      tagline: tagline
  });
});

// about page
app.get('/about', function(req, res) {
    res.render('pages/about');
});

app.get('/datatable', function(req,res){
  var drinks = [
      { name: 'Bloody Mary', drunkness: 3, advise:'advisable', risk: 'very low' },
      { name: 'Martini', drunkness: 5,  advise:'fairly advisable', risk: 'low' },
      { name: 'Scotch', drunkness: 10, advise: 'Not advisable', risk: 'very high' }
  ];
  res.render('pages/datatable',{drinks:drinks});
});

app.listen(port, ()=>{
  console.log(`EJS Server started on port: ${port}`);
});
