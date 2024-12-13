import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';

import { HttpClient } from '@angular/common/http';

import { IUserResponse } from '../../FModels/user.request.interface';

import { API_BASE_URL } from '../../constants/config';

import { IUserRequest } from '../../FModels/user.request.interface';

@Injectable({

  providedIn: 'root'
})
export class SignupserviceService {

  constructor(private http:HttpClient) { }



  registerUser(payload:IUserRequest):Observable<IUserResponse>{

    return this.http.post<IUserResponse>(`${API_BASE_URL}/users/signup`,payload);

  }

}
