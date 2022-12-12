/* eslint-disable @typescript-eslint/no-unused-vars */
import jsonServer from 'json-server';
const server = jsonServer.create();
const router = jsonServer.router('server/db.json');
const middlewares = jsonServer.defaults();
import fs from 'fs';

server.use(middlewares);
server.use(jsonServer.bodyParser);

server.get('/beers', (req, res, next) => {
    const beers = readBeers();

    if (beers) {
        res.send(beers);
    } else {
        res.status(400).send('Пивасиков не найдено');
    }
});

server.use('/beers', (req, res, next) => {
    next();
});

server.use(router);
server.listen(3001, () => {
    console.log('JSON Server is running');
});

function readBeers() {
    const dbRaw = fs.readFileSync('./server/db.json');
    const beers = JSON.parse(dbRaw.toString()).users
    return beers;
}
