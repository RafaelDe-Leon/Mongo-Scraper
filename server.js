// require our dependencies
const express = require('express');
const expressHandlebars = require('express-handlebars');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

// set up our port to be either the host or local host 3000
const PORT = process.env.PORT || 3000;

const app = express();

// Designate our public folder as a static directory
const router = express.Router();

require('./config/routes')(router);

app.use(express.static(__dirname + '/public'));

app.engine('handlebars', expressHandlebars({ defaultLayout: 'main' }));

app.set('view engine', 'handlebars');

app.use(bodyParser.urlencoded({ extended: false }));

// Have every request go through our router middleware
app.use(router);

const db = process.env.MONGODB_URI || 'mongodb://localhost/mongoHeadlines';

// connect mongoose to our database
mongoose.connect(db, function(error) {
  if (error) {
    console.log(error);
  } else {
    console.log('mongoose connection is successful');
  }
});

app.listen(PORT, () => {
  console.log('Listening on port: ' + PORT);
});
