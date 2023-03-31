import CustomError from "./custom-error";

class UnAuthenticatedError extends CustomError {
  statusCode: number;
  constructor(message: string, statusCode: number) {
    super(message, statusCode);
    this.statusCode = statusCode;
  }
}
export default UnAuthenticatedError;
