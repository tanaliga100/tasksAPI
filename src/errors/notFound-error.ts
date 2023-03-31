import CustomAPIError from "./custom-error";

class NotFoundError extends CustomAPIError {
  statusCode: number;
  constructor(message: string, statusCode: number) {
    super(message, statusCode);
    this.statusCode = statusCode;
  }
}
export default NotFoundError;
