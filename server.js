// require our dependencies
const express = require('express');

// set up our port to be either the host or local host 3000
const PORT = process.env.PORT || 3000;

const app = express();

// Designate our public folder as a static directory
const router = express.Router();

app.use(express.static(__dirname + '/public'));

// Have every request go through our router middleware
app.use(router);

app.listen(PORT, () => {
  console.log('Listening on port: ' + PORT);
});
