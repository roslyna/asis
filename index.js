const express = require('express');
const bodyParser = require('body-parser');

const PORT = 5000;
const app = express();

const providersRouters = require('./router/providers.routes')
let connection = require('./config/config.bd.js');

app.use(bodyParser.urlencoded({ extended: true })) // parsing request with content-type url
app.use(bodyParser.json())  // parsing request with content-type application/json
app.use(express.static("."));
app.set("views engine", "hbs");  // page template with hbs format

/*
app.get('/', (req, res) => {
    res.status(200).json("Server is running...");
})
*/
app.get('/', (req, res) => {
    res.render('index.ejs');
})

const providersRoutes = require('./router/providers.routes')

app.use('/api/providers', providersRouters)

app.listen(PORT, () => console.log("Server start!"))

module.exports = connection;