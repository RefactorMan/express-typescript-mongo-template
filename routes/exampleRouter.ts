import express from 'express';
import {NotAllowedError} from "../errors/notAllowedError";
import {ClientError} from "../errors/clientError";

const exampleRouter = express.Router();

exampleRouter.post('/someResource', async (req, res) => {
	const data = req.body;

	try {
		// do something with the data
		// ...

		res.sendStatus(200);
	}
	catch (err) {
		console.error(err);

		if (err instanceof NotAllowedError)
			res.status(403).send(err);
		else if (err instanceof ClientError)
			res.status(400).send(err);
		else
			res.status(500).send(err);

	}
});

exampleRouter.get('/someResource/:id/otherResource', async (req, res) => {
	const id: string = req.params.id;


	try {
		// send something...


		res.sendStatus(200);
	}
	catch (err) {
		console.error(err);

		if (err instanceof NotAllowedError)
			res.status(403).send(err);
		else if (err instanceof ClientError)
			res.status(400).send(err);
		else
			res.status(500).send(err);

	}
});

export {exampleRouter};