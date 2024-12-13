import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';

import { HttpClient } from '@angular/common/http';


import { CommonTaskResponse } from '../../FModels/task.request.interface';

import { ITaskRequest } from '../../FModels/task.request.interface';
import { headers } from '../../constants/headers';


@Injectable({
  providedIn: 'root'
})
export class CreatetaskService {

  apiUrl:string = `http://localhost:8000/api/todos/register`


  constructor(private http:HttpClient) { }

  createTask(task:string):Observable<CommonTaskResponse>{

    return this.http.post<CommonTaskResponse>(`${this.apiUrl}`,task,{headers});

  }

}
