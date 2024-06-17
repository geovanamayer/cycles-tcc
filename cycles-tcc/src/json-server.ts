import * as jsonServer from 'json-server';
import * as path from 'path';

const server = jsonServer.create();
const router = jsonServer.router(path.join(__dirname, 'db.json')); // Path to your JSON data file
const middlewares = jsonServer.defaults();

server.use(middlewares);
server.use('/api', router); // Mount JSON Server at /api

const port = 3000; // Choose a port for JSON Server

server.listen(port, () => {
  console.log(`JSON Server is running on http://localhost:${port}/api`);
});