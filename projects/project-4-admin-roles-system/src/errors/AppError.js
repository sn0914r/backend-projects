class AppError extends Error {
  constructor(message = "Internal Server Error", StatusCode = 500) {
    super(message);
    this.StatusCode = StatusCode;
  }
}

module.exports = AppError;
