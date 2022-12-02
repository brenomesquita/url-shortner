require('dotenv').config();

const os = require('node:os');
const cluster = require('cluster');

if (cluster.isMaster) {
    const numberOfCpus = os.cpus().length;

    console.log(`Master ${process.pid} is running`);
    // Create a Worker Process for each Available CPU
    for (let index = 0; index < numberOfCpus; index += 1) {
        cluster.fork();
    }
    cluster.on('exit', (worker, code) => {
        if (code !== 0 && !worker.exitedAfterDisconnect) {
            console.log(`Worker ${worker.process.pid} died`);
            cluster.fork();
        }
    });
} else {
    // eslint-disable-next-line global-require
    require('./src/main/index');
}
