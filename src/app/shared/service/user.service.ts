import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
@Injectable()
export class UserService {
  userInfo = null;
  constructor(private http: HttpClient) {
    var username = localStorage.getItem('username');
    var token = localStorage.getItem('token');
    document.cookie+="Authorization="+token;
    var reqHeader = new HttpHeaders({'Authorization' : 'Bearer ' + token});
    // if(username !="" && username != null) {
      this.http.get('http://167.99.39.144/api/user/' + username+ '/about', {headers: reqHeader}).subscribe((data => {
        this.userInfo = data;
        console.log(this.userInfo);

      }))
    // }
  }

  userAuthentication(userName, password){
    var user = {
      "username": userName,
      "password": password
    };

    return this.http.post('http://167.99.39.144/api/auth/login/', user);
  }


}
