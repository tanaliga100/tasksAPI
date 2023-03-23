class CustomAPIError extends Error {
  status: number;
  message: string;
  constructor(status: number, message: string) {
    super(message);
    this.status = status;
    this.message = message;
  }
}
export default CustomAPIError;

// export const createCustomError = (message: string, status: number) => {
//   return new CustomAPIError(status, message);
// };
