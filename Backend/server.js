const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
const port = 5000;
const linkedInController = require('./Controller/linkedInController');

app.use(cors());
app.use(bodyParser.json());

app.route('/BE1').post(linkedInController);

app.listen(port, () => {
    console.log(`-------app listening at http://localhost:${port}-------`);
    }
);
