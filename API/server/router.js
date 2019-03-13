import express from 'express';

const app = express();

app
    .use(express.static(__dirname + "/../client/"));


export default app;

