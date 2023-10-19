import { Component, OnInit } from '@angular/core';
import { AlertifyService } from '../services/alertify.service';

@Component({
  selector: 'app-NavBar',
  templateUrl: './NavBar.component.html',
  styleUrls: ['./NavBar.component.css']
})
export class NavBarComponent implements OnInit {
 
  loggedname : string;
  constructor(private alertify : AlertifyService) { }

  ngOnInit() {
  }

  checkloggedin()
  {
    this.loggedname =  localStorage.getItem('token');
    return this.loggedname;
  }

  onlogout()
  {
    localStorage.removeItem('token');
    this.alertify.success('You are logout successfully');
  }
}
