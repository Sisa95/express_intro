let express = require('express');
const exphbs  = require('express-handlebars');
const bodyParser = require('body-parser');

const SettingsBill = require("./settings_Bill.js")

let app = express();

const settingsBill = SettingsBill()


app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

app.use(express.static('public'));

app.use(bodyParser.urlencoded({extended: false}))

app.use(bodyParser.json())


app.get("/", function(req, res){
  res.render("index",{
      settings: settingsBill.getSettings()
  });
});

app.post('/settings', function(req, res){

  settingsBill.setSettings({
    callCost: req.body.callCost,
    smsCost: req.body.smsCost,
    warningLevel: req.body.warningLevel,
    criticalLevel: req.body.criticalLevel,
  })

  res.redirect("/")

})

app.post('/action', function(req, res){


  res.redirect("/")

})

app.get('actions/', function(req, res){
  
})

app.get('actions/:type', function(req, res){
  
})


// app.get('/', function (req, res) {
//   res.render('home');
// });


 

// app.post('/settings', function(req, res){
//   let smsCost = req.body.smsCost;
//   let callCost = req.body.callCost;
//   let warningLevel = req.body.warningLevel;
//   let criticalLevel = req.body.criticalLevel;

//   var settings = {
//     smsCost,
//     callCost,
//     warningLevel,
//     criticalLevel
//   };

//   // process data
//   globalSetings = settings;

//   // note that data can be sent to the template
//   res.render('home', {settings})
// });

let PORT = process.env.PORT || 3007;
app.listen(PORT, function(){
  console.log('App starting on port', PORT);
});