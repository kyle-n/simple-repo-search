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
const elmFrontendBuildDirectory = '/elm-frontend';
dotenv.config(__dirname + '/.env');
const server = express();
server.get('/materialize-css/:filename', (req, resp) => {
  return resp.sendFile(path.join(__dirname + '/node_modules/materialize-css/dist/css/' + req.params.filename));
});
server.get('/elm/static/:filename', (req, resp) => {
  return resp.sendFile(path.join(__dirname + '/elm-frontend/' + req.params.filename));
});
server.use(bodyParser.json({limit: '1mb'}));
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

// frontend picker
server.get('/', (req, resp) => {
	return resp.sendFile(path.join(__dirname + '/frontend-picker.html'));
});

server.use(express.static(path.join(__dirname + reactFrontendBuildDirectory)));

// serve frontends

// react
const serveReact = (req, resp) => {
  return resp.sendFile(path.join(__dirname + reactFrontendBuildDirectory + '/index.html'));
};
server.get('/react', serveReact);
server.get('/react/*', serveReact);

// elm
const serveElm = (req, resp) => {
  return resp.sendFile(path.join(__dirname + elmFrontendBuildDirectory + '/index.html'));
};
server.get('/elm', serveElm);
server.get('/elm/*', serveElm);

// listen
const port = process.env.PORT || 8000;
server.listen(port, () => console.log(`Listening at port ${port}...`));
