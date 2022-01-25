const express = require('express');
const config = require('config');
const mongo = require('mongoose');
const app = express();
const PORT = config.get('port');

app.use('/api/auth', require('./routes/auth.router'));

const start = async () => {
    try {
        // const db = await mongo.connect(config.get('db.mongoURI'), {
        //     useNewUrlParser: true, 
        //     useUnifiedTopology: true
        // });
        app.listen(PORT, () => console.log(`Started at ${PORT}`));
    } catch (error) {
        console.log('Something happened on the server');
        console.log(error.message);
        process.exit(1);
    }
};

start();

