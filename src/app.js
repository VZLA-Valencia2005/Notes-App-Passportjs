const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const exphbs = require('express-handlebars');
const dotenv = require('dotenv').config();
const path = require('path');

// Initializations
const app = express();
const indexRoutes = require('./routes/index');

// Middlewares
app.use(cors());
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Settings
app.use(express.static(__dirname + '/public'));
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.engine('.hbs', exphbs({
    defaultLayout:'main',
    layoutsDir: path.join(app.get('views'), 'layouts'),
    partialsDir: path.join(app.get('views'), 'partials'),
    extname: '.hbs'
}));
app.set('view engine', '.hbs');

// Routes

app.use(indexRoutes);


// export module

module.exports = app;

