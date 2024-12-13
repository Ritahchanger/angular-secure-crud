import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { ITaskResponse } from '../../FModels/todo.response.interface';
import { CommonTaskResponse } from '../../FModels/task.request.interface';

import { API_BASE_URL } from '../../constants/config';

import { getHeaders } from '../../constants/headers';

@Injectable({
  providedIn: 'root',
})
export class GettodosService {
  private headers: HttpHeaders;

  constructor(private http: HttpClient) {
    this.headers = getHeaders();
  }

  getTasks(): Observable<ITaskResponse>{

    const userId = sessionStorage.getItem('userId');

    if(!userId){
      return throwError(() => new Error('User ID not found in sessionStorage.'));
    }

    return this.http.get<ITaskResponse>(
      `${API_BASE_URL}/todos/get/${userId}`,
      {
        headers: this.headers,
      }
    );
  }

  addTodo(task: string): Observable<CommonTaskResponse> {


    const userId = sessionStorage.getItem('userId');

    if(!userId){
      return throwError(() => new Error('User ID not found in sessionStorage.'));
    }

    return this.http.post<CommonTaskResponse>(
      `${API_BASE_URL}/todos/register`,
      { task, user: userId },
      { headers: this.headers }
    );
  }


  confirmTodo(id: string): Observable<any> {
    const userId = sessionStorage.getItem('userId');

    if (!userId) {
      return throwError(() => new Error('User ID not found in sessionStorage.'));
    }


    return this.http.put<any>(
      `${API_BASE_URL}/todos/complete/${id}`,
      {}, 
      { headers: this.headers }
    );
  }

  deleteTodo(id:string):Observable<any>{

    return this.http.delete<any>(`${API_BASE_URL}/todos/delete/${id}`,{headers:this.headers})

  }

}
