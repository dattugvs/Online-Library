const express = require('express');
const app = express();

const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended : true}));

const morgan = require('morgan');
app.use(morgan('dev'));

const cors = require('cors');
app.use(cors());

app.use(express.static('public'));

app.use(require('./routes'));

const {port} = require('./config');
app.listen(port, () => console.log(`Server running at ${port}`));