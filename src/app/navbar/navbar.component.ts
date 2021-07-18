import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../services/authentication.service';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(public loginService: AuthenticationService) { }
   user:any;
   userRole :any;
   name :any;
   lname : any;
  ngOnInit(): void {
    this.user = sessionStorage.getItem('username');
    this.userRole = sessionStorage.getItem('role');
    this.name = sessionStorage.getItem('name');
    this.lname = sessionStorage.getItem('lname');
  }

}
