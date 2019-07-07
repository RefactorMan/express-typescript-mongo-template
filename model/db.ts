import mongoose from "mongoose";

const dbUser = process.env.DB_USER;
const dbPassword = process.env.DB_PASS;
const mongoHost = process.env.DB_HOST;
const mongoPort = process.env.DB_PORT;
const dbName = process.env.DB_NAME;

const userString = `${dbUser}:${dbPassword}@`;
const host = mongoHost || 'localhost';
const port = mongoPort || '27017';
const connectionString = `mongodb://${dbUser && dbPassword ? userString : ''}${host}:${port}/${dbName}`;

mongoose.connect(connectionString, {useNewUrlParser: true});

const db = mongoose.connection;

db.once('open', () => {
	console.log('open connection to Mongo');
});

mongoose.connection.on('connected', () => {
	console.log('Mongoose default connection open to ' + connectionString);
});

mongoose.connection.on('error', (err) => {
	console.error('Mongoose default connection error:', err);
});

mongoose.connection.on('disconnected', () => {
	console.log('Mongoose default connection disconnected');
});

// If the Node process ends, close the Mongoose connection 
process.on('SIGINT', () => {
	mongoose.connection.close(() => {
		console.log('Mongoose default connection disconnected through app termination');
		process.exit(0);
	});
});

export {db};