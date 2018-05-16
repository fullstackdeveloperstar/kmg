import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Router} from "@angular/router";

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
user = {
  "username": "",
  "email": "",
  "full_name": "",
  "password": ""
}

  constructor(private http: HttpClient, private router: Router) { }

  ngOnInit() {
  }

  click(){
  console.log(this.user);
    this.http.post('http://167.99.39.144/api/auth/signup/', this.user).subscribe((data => {
      this.router.navigate(['login']);

      console.log(data)}))

  }

}
