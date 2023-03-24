interface ITask {
  id: string;
  title: string;
  description: string;
  completed: boolean;
}

export default ITask;

export interface IError {
  message: string;
  status: number;
}
