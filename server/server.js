const path = require('path');
const bodyParser = require('body-parser');
const rssParser = require('rss-parser');
const express = require('../node_modules/express');
const app = express();

// require routers
const RSS = require('./routes/rss.js')


// statically serve everything in the build folder on the route '/build'
app.use('/build', express.static(path.join(__dirname, '../build')));

// serve index.html on the route '/'
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../index.html'));
});

// define route handlers
app.use('/rss', RSS);

app.listen(3000); //listens on port 3000 -> http://localhost:3000/
