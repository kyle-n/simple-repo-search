// npm
import dotenv from 'dotenv';
import express from 'express';
import bodyParser from 'body-parser';
import path from 'path';

// routes
import apiRouter from './api';

// app config
dotenv.config(__dirname + '/.env');
const server = express();
server.use(bodyParser.json({limit: '1mb'}));

// cors
server.use((req, resp, next) => {
  resp.header('Access-Control-Allow-Origin', 'http://localhost:3000');
  resp.header('Access-Control-Allow-Credentials', 'true');
  resp.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');
  resp.header('Access-Control-Allow-Methods', 'GET,OPTIONS');
  next();
});

// set routing
server.use('/api', apiRouter);

// listen
const port = process.env.PORT || 8000;
server.listen(port, () => console.log(`Listening at port ${port}...`));
