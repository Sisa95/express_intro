const exphbs  = require('express-handlebars');
let express = require('express');
let app = express();

app.get("/", function(req, res){
  res.send("Bill Settings WebApp *************");
});

let PORT = process.env.PORT || 3007;

app.listen(PORT, function(){
  console.log('App starting on port', PORT);
});

app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

app.get('/', function (req, res) {
  res.render('home');
});


app.get('/settings/:costType', function(req, res){
  let costType = req.params.costType;

  let cost = 0;
  //lookup cost for costType
  if (costType === 'sms'){
      cost = settings.smsCost;
  } else if (costType === 'call') {
      cost = settings.callCost;
  }

  res.render('cost', {
      costType,
      cost
  });
});


const bodyParser = require('body-parser');
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json
app.use(bodyParser.json())

app.post('/settings', function(req, res){
  let smsCost = req.body.smsCost;
  let callCost = req.body.callCost;
  let warningLevel = req.body.warningLevel;
  let criticalLevel = req.body.criticalLevel;

  var settings = {
    smsCost,
    callCost,
    warningLevel,
    criticalLevel
  };

  // process data
  globalSetings = settings;

  // note that data can be sent to the template
  res.render('home', {settings})
});

app.use(express.static('public'));