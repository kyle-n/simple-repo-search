// npm
import dotenv from 'dotenv';
import express from 'express';
import bodyParser from 'body-parser';
import path from 'path';

// app config
dotenv.config(__dirname + '/.env');
const server = express();
server.use(bodyParser.json({limit: '1mb'}));

// listen
const port = process.env.PORT || 8000;
server.listen(port, () => console.log(`Listening at port ${port}...`));
