const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const volleyball = require('volleyball');

const app = express();

const router = require('./Router/router');

app.use(cors());
app.use(helmet());
app.use(volleyball);

app.use('/', router);

app.listen(5000, () => {
  console.log('server started at port 5000');
});
