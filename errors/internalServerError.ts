export class InternalServerError extends Error {
	constructor(innerError: Error) {
		super();
		this.message = innerError.message;
		this.stack = innerError.stack;
		this.name = innerError.name;
	}
}