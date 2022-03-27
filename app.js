const cluster = require('cluster');

const start = async() => {

    if (cluster.isMaster) {
        const master = await require('./master');
        console.log(`Started Master process ${master.pid}`);
        return;
    }

    const worker = await require('./worker');
    console.log(`Started Worker process ${worker.pid}`);
}

start();