const express = require('express');
const bodyParser = require('body-parser');

const PORT = 5000;
const app = express();

let connection = require('./config/config.bd.js');

app.use(bodyParser.urlencoded({ extended: true })) // parsing request with content-type url
app.use(bodyParser.json())  // parsing request with content-type application/json
app.set("view engine", "hbs");  // page template with hbs format

app.get('/', (req, res) => {
    res.status(200).json("Server is running...");
})

app.listen(PORT, () => console.log("Server start!"))

const providerRouters = require('./router/provider.routes')
app.use('/api/provider', providerRouters)



