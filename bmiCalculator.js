const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.urlencoded({
    extended: true,
}));

app.get('/', function(req, res) {
    res.sendFile(__dirname + '/bmiCalculator.html');
})

app.post('/', function(req, res) {

    var weight = Number(req.body.weight); 
    var height = Number(req.body.height); 
    
    var result = (weight)/(height * height) * 10000;

    res.send('The calculated BMI will be : ' + result);
})

app.get('/', function(req, res) {
    res.sendFile(__dirname + '/bmiCalculator.html');
});

app.listen(3000, function() {
    console.log('Listening to port 3000 ....');
})