const express = require('express');
const config = require('config');

const app = express();
app.listen(config.get('port'), () => console.log('Started!'));