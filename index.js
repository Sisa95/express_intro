const express = require('express');
const exphbs  = require('express-handlebars');
const bodyParser = require('body-parser');
var moment = require('moment'); // require
moment().format();
const SettingsBill = require('./settings-bill');

const app = express();

const settingsBill = SettingsBill();

const handlebarSetup = exphbs({
    partialsDir: "./views/partials",
    viewPath:  './views',
    layoutsDir : './views/layouts'
});

app.engine('handlebars', handlebarSetup);
app.set('view engine', 'handlebars');

app.use(express.static('public'));


app.use(bodyParser.urlencoded({ extended: false }))

app.use(bodyParser.json())

app.get('/', function(req,res){
    
    res.render('index', {
        settings: settingsBill.getSettings(),
        totals: settingsBill.totals(),
        class: settingsBill.addClass
    });
});

app.post('/settings', function(req, res){
    // console.log(req.body);
    settingsBill.setSettings({
        callCost: req.body.callCost,
        smsCost: req.body.smsCost,
        warningLevel: req.body.warningLevel,
        criticalLevel: req.body.criticalLevel
    });
   
    console.log(settingsBill.getSettings());
    res.redirect('/');
});

app.post('/action', function(req, res){
    
    
    settingsBill.recordAction(req.body.actionType)
    res.redirect('/');
});

app.get('/actions', function(req, res){
    let actionsList = settingsBill.actions();
    actionsList.forEach(element => {
        element.currentTime = moment(element.timestamp).fromNow()
    });
    res.render('actions', {actions: actionsList});

});

app.get('/actions/:actionType', function(req, res){
    
    let actionType = req.params.actionType;
    let actionsList = settingsBill.actionsFor(actionType);
    actionsList.forEach(element => {
        element.currentTime = moment(element.timestamp).fromNow()
    });
    res.render('actions', { actions: actionsList });
});

const PORT = process.env.PORT || 3011;

app.listen(PORT, function(){
    console.log("App started at:", PORT)
});