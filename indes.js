const express = require('express');
const path = require('path');
const handlebars = require('handlebars');
const exphbs = require('express-handlebars');
const {allowInsecurePrototypeAccess} = require('@handlebars/allow-prototype-access');
const bodyparser = require('body-parser');

var app = express();

app.use(bodyparser.urlencoded({ extended: true }));
app.use(bodyparser.json());

app.get('/', (req, res)=>{
    res.send(`<h2>Welcome to sudents portal</h2>
        <h3>Click here to see details<a href="/students/list> this is the list container of databases</a></h3>`);
})

app.set('views', path.join(__dirname, '/views'));

app.engine({
    handlebars: allowInsecurePrototypeAccess(handlebars),
    extname: "hbs",
    defaultLayout: "MainLayout",
    layoutsDir: __dirname+'/views/layouts',
})

app.set('view engine', 'ejs');

app.listen(5000, ()=>{
    console.log('listening on port 5000'); });