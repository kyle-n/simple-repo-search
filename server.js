// npm
import dotenv from 'dotenv';
import express from 'express';
import bodyParser from 'body-parser';
import path from 'path';
import ejs from 'ejs';

// routes
import apiRouter from './api';

// server config
const frontendBuildDirectory = '/frontend/build';
dotenv.config(__dirname + '/.env');
const server = express();
server.use(bodyParser.json({limit: '1mb'}));
server.use(express.static(path.join(__dirname + frontendBuildDirectory)));
server.engine('html', ejs.renderFile);
server.set('view engine', 'html');
server.set('views', frontendBuildDirectory);

// cors
server.use((req, resp, next) => {
  console.log(req)
  resp.header('Access-Control-Allow-Origin', 'http://localhost:4200');
  resp.header('Access-Control-Allow-Credentials', 'true');
  resp.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');
  resp.header('Access-Control-Allow-Methods', 'GET,OPTIONS');
  next();
});

// set routing
server.use('/api', apiRouter);

// serve frontend
server.use('/', express.static(path.join(__dirname + frontendBuildDirectory), { index: false }));
server.get('/*', (req, resp) => {
  console.log('hp rendered');
  resp.render(path.join(__dirname + frontendBuildDirectory + '/index'), { req, resp });
});

// listen
const port = process.env.PORT || 8000;
server.listen(port, () => console.log(`Listening at port ${port}...`));
