const express = require('express')
const Routes = require('./routes')
const bodyParser = require("body-parser");

let app = express()

app.use(express.static(__dirname + '/public'));
app.use(bodyParser.urlencoded({ extended: true }));
app.set('view engine', 'ejs')
app.use('/', Routes)

app.listen(3000, () => {
    console.log(`> I'm listening to port 3000`);
})