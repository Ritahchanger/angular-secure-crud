export interface ITask {
  _id?: string;

  task?: string;

  user?: string;

  createdAt?: Date;

  completed?: boolean;

  __v?: number;
}

export interface ITaskResponse {
  success: boolean;

  data: ITask[];
}
