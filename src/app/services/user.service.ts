import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from '../user';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  // private baseUrl : string = 'http://ec2-18-220-231-127.us-east-2.compute.amazonaws.com:9090/api';

  private baseUrl : string = 'http://localhost:8181/rest';

  private headers = new HttpHeaders({"Content_Type":"application/json"});

  private user : User;

  constructor( private http: HttpClient) { }

  getUsers() {
    return this.http.get(this.baseUrl + '/employees');
  }

  getUser(id: number) {
    return this.http.get(this.baseUrl + '/employee/' + id);
  }

  deleteUser(id: number) {
    return this.http.delete(this.baseUrl + '/employee/' + id);
  }

  createUser( user: User) {
    return this.http.post(this.baseUrl + '/employee', user, {headers: this.headers});
  }

  updateUser( user: User) {
    return this.http.put(this.baseUrl + '/employee', user, {headers: this.headers});
  }
  
  setter(user:User){
    this.user = user;
  }

  getter() {
    return this.user;
  }

}
