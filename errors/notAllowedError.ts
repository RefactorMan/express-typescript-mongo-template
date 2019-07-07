export class NotAllowedError extends Error {
	constructor(msg: string) {
		super();
		this.message = msg;
	}
}