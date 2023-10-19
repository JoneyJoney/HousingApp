import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/Auth.service';
import { AlertifyService } from 'src/app/services/alertify.service';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent implements OnInit {

  constructor(private authservice : AuthService,private alertify : AlertifyService,private route : Router) { }

  ngOnInit() {
  }

  onLogin(formdata : NgForm)
  {
    const token = this.authservice.authUser(formdata.value);
    
    if(token)
    {
      localStorage.setItem('token',token.username);
      this.alertify.success('Login Successfully');
      this.route.navigate(['/']);
    }
    else
    {
      this.alertify.error('UserName or Password is wrong');
    }
  }
}
