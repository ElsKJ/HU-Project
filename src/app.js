const express = require('express');
const morgan = require('morgan');
const routes = require('../src/routes/routes.js');
const {dirname, join} = require('path');
const { fileURLToPath } = require('url');


const app = express();

app.use(morgan('dev'));
app.use(express.static(join(__dirname, 'public')))

app.set('views', __dirname)
app.set('view engine', 'ejs');

const PORT = process.env.PORT || 4000;



app.use(routes);

app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`)
})