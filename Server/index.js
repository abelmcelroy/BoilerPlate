'use strict';

const express = require('express');
const app = express();
const morgan = require('morgan');
const fs = require('fs');
const bodyParser = require('body-parser');
const compression = require('compression')
const path = require('path');


app.use(morgan('dev'));

app.use(express.static(path.join(__dirname, '../public')));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// compression middleware
app.use(compression())

app.use('/api', require('./Api'));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/index.html'));
}); // Send index.html for any other requests


app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(err.status || 500).send(err.message || 'Internal server error');
});

const PORT = process.env.PORT || 5555;

app.listen(PORT, () => {
  console.log('***************************')
  console.log(`Listening on Port: ${PORT}`);
})
