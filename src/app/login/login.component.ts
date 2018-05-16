import { Component, OnInit } from '@angular/core';
import {HttpClient, HttpErrorResponse} from "@angular/common/http";
import {Router} from "@angular/router";
import {HeaderServiceService} from "../shared/service/header-service.service";
import {UserService} from "../shared/service/user.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user = {
    "username": "",
    "password": ""
  };

  userInfo;
  isLoginError : boolean = false;

  constructor(
    private http: HttpClient,
    private router: Router,
    private headerServiceService:HeaderServiceService,
    private userservice: UserService
  ) { }

  ngOnInit() {

  }

  login(){
    // this.http.post('http://167.99.39.144/api/auth/login/', this.user).subscribe((data => {
    //   console.log(data);
    //   this.headerServiceService.setUser(data);
    //   this.router.navigate(['/dashboard/home']);
    // }))
    this.userservice.userAuthentication(this.user.username, this.user.password).subscribe((data:any)=>{
      localStorage.setItem('token', data.token);
      localStorage.setItem('username', data.user.username);
      this.userservice.userInfo = data.user;
      this.router.navigate(['/dashboard/home']);
    },
    (err: HttpErrorResponse) => {
      this.isLoginError = true;
    });
  }


}
