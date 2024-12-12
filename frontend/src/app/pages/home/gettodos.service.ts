import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs';
import { ITaskResponse } from '../../FModels/todo.response.interface';

@Injectable({
  providedIn: 'root',
})
export class GettodosService {
  constructor(private http: HttpClient) {}

  apiUrl: string = `http://localhost:8000/api/todos/get/67594bcb68ef7cd838ab970c`;

  getTasks(): Observable<ITaskResponse> {
    const token = sessionStorage.getItem('token');

    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);

    return this.http.get<ITaskResponse>(`${this.apiUrl}`, { headers });
  }
}
