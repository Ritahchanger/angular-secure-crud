import { HttpHeaders } from "@angular/common/http";

export function getHeaders():HttpHeaders{

    const token:string | null = sessionStorage.getItem("token");

    if(!token){


        throw new Error('No token found in session storage');
    }


    return new HttpHeaders().set('Authorization', `Bearer ${token}`)

}