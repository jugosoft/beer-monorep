const express = require('express');
const config = require('config');
const mongo = require('mongoose');
const app = express();
const PORT = config.get('port');

app.use(express.json());
app.use('/api/auth', require('./routes/auth.router'));
app.use('/api/beer', require('./routes/beer.router'));

const start = async() => {
    try {
        const db = await mongo.connect(config.get('db.mongoURI'), {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        app.listen(PORT, () => true);
    } catch (error) {
        console.log(`Something happened on the server. PID is ${process.pid}`);
        console.log(error.message);
        process.exit(1);
    }
};

start();

module.exports = {
    pid: process.pid
};