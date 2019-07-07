import express from 'express';
import {exampleRouter} from './routes/exampleRouter';

const app = express();
app.use(express.json());

app.get('/isAlive', (req, res) => {
	res.sendStatus(200);
});

app.use('/api', exampleRouter);

export default app;