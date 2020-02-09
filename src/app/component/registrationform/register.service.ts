import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {
user:User;
  constructor(private http:HttpClient) {

   }
private apiUrl ="http://localhost:8080/register";
private dataValue:any;
  postFormValues(user:User)
  {
const payLoad = user;
 return this.http.post<User>("http://localhost:8080/register",payLoad)
  }
  getData()
  {
    return this.http.get("https://jsonplaceholder.typicode.com/todos");

  }
}
