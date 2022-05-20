const db = require("./model");
const express = require('express');
const bodyParser = require('body-parser');

const jobRoute = require('./route/jobRoute');

db.sequelize.sync()
.then(() => console.log('Succès de connexion à mySQL !'))
.catch(() => console.log('Echec de connexion à mySQL !'));

const app = express();

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
  // OWASP#2 - Lutter contre piratage de session
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
  // ORIGINAL - 
  //res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
  next();
});

app.use(bodyParser.json());
app.use('/api/job', jobRoute);

module.exports = app;