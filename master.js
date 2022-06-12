const cluster = require('cluster');
const config = require('config');

cluster.on('disconnect', (worker) => {
  console.log(`Worker process PID ${worker.process.pid}, ` +
    `WorkerId ${worker.id} is dead`);
  const newWorker = cluster.fork();
  console.log(`New process PID ${newWorker.process.pid}, ` +
    `WorkerId ${newWorker.id} is running now instead of ` +
    ` PID ${worker.process.pid}, WorkerId ${worker.id}`);
});

for (let i = 0; i < config.get('processes_count'); i++) {
  const worker = cluster.fork();
  worker.title = `Beer App worker process #${i}`;
}

module.exports = {
  pid: process.pid,
};
