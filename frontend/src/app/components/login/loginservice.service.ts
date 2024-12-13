import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';

import ILogin from '../../FModels/Login.interface';

import ILoginResponse from '../../FModels/loginresponse.interface';

@Injectable({
  providedIn: 'root'
})
export class LoginserviceService {

  private apiUrl = `http://localhost:8000`;

  

  constructor(private http:HttpClient) { }


  authenticateUser(payload:ILogin):Observable<ILoginResponse>{

    return this.http.post<ILoginResponse>(`http://localhost:8000/api/users/login`,payload);

  }

}
