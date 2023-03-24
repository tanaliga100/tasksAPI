class CustomAPIError extends Error {
  status: number;
  constructor(status: number, message: string) {
    super(message);
    this.status = status;
  }
}
export default CustomAPIError;

export const createCustomError = (status: number, message: string) => {
  return new CustomAPIError(status, message);
};
