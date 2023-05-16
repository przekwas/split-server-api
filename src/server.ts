import express from 'express';
import cors from 'cors';
import apiRouter from './routes';
import config from './config';

const app = express();

app.use(cors());
app.use(apiRouter);

app.listen(config.app.port, () => console.log(`Server listening on port: ${config.app.port}`));