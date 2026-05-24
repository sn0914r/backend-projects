export class AppError extends Error {
  statusCode: number;
  errorCode: string;
  errors: string | string[] | null;

  constructor(
    message: string,
    statusCode: number,
    errorCode: string,
    errors: string | string[] | null,
  ) {
    super(message);
    this.statusCode = statusCode;
    this.errorCode = errorCode;
    this.errors = errors;

    Object.setPrototypeOf(this, AppError.prototype);
  }
}
