const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const Client = require('node-rest-client').Client;
const client = new Client();

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

const indexRouter = require('./routes/index');

app.use('/api', indexRouter);

/* GET users listing. */
app.get('/api/air', (req, res, next) => {
  const url = `http://opendata.epa.gov.tw/webapi/api/rest/datastore/355000000I-000259`;
  client.get(url, (data, response) => {
    res.send({ ...data });
  })
})

const port = process.env.PORT || 8081;

app.listen(port);
