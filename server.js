// npm
import dotenv from 'dotenv';
import express from 'express';
import bodyParser from 'body-parser';
import path from 'path';
import ejs from 'ejs';

// routes
import apiRouter from './api';

// server config
const reactFrontendBuildDirectory = '/react-frontend/build';
dotenv.config(__dirname + '/.env');
const server = express();
server.use(bodyParser.json({limit: '1mb'}));
server.use(express.static(path.join(__dirname + reactFrontendBuildDirectory)));
server.engine('html', ejs.renderFile);
server.set('view engine', 'html');
server.set('views', reactFrontendBuildDirectory);

// cors
server.use((req, resp, next) => {
  resp.header('Access-Control-Allow-Origin', 'http://localhost:4200');
  resp.header('Access-Control-Allow-Credentials', 'true');
  resp.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');
  resp.header('Access-Control-Allow-Methods', 'GET,OPTIONS');
  next();
});

// set routing
server.use('/api', apiRouter);

// serve frontends
const serveReact = (req, resp) => {
  resp.render(path.join(__dirname + reactFrontendBuildDirectory + '/index'), { req, resp });
};
server.use('/', express.static(path.join(__dirname + reactFrontendBuildDirectory), { index: false }));
server.get('/react', serveReact);
server.get('/react/*', serveReact);

// listen
const port = process.env.PORT || 8000;
server.listen(port, () => console.log(`Listening at port ${port}...`));
