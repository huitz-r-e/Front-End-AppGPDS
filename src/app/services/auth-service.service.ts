import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {

  constructor(private http:HttpClient) { }

  token:any=""
  user:any={};

  login(data:any){
    return this.http.post(`http://localhost:8000/api/auth`, data)
  }

  
  guardarToken(token:string){
    localStorage.setItem('token',JSON.stringify(token));
  }
  guardarUser(user:any){
    localStorage.setItem('user',JSON.stringify(user))
  }

  isAuth(){
    this.token=localStorage.getItem('token')||null;
    this.user=JSON.parse(localStorage.getItem('user')|| 'null')||null;
    if(this.token===null || this.user === null){
      return false
    }else { return true}
  }
}
