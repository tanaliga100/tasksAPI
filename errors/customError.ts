class CustomAPIError extends Error {
  status: number;
  constructor(message: string, status: number) {
    super(message);
    this.status = status;
  }
}
export default CustomAPIError;

export const createCustomError = (message: string, status: number) => {
  return new CustomAPIError(message, status);
};
