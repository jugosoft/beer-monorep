const express = require('express');
const config = require('config');
const mongo = require('mongoose');
const app = express();

const start = async () => {
    try {
        // const db = await mongo.connect(config.get('db.mongoURI'), {
        //     useNewUrlParser: true, 
        //     useUnifiedTopology: true
        // });
        app.listen(config.get('port'), () => console.log(`Started at ${config.get('port')}`));
    } catch (error) {
        console.log('Something happened on the server');
        console.log(error.message);
        process.exit();
    }
};

app.use('/api/auth', require('./routes/auth.router'));

start();
