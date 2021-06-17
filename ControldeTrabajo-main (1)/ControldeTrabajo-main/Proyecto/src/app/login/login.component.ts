import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Login } from '../models/user';
import { ServicesService } from '../servicios/services.service';
import swal from 'sweetalert2';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public logins: Array<any>=[];
  login: Login = new Login();

  email = '';
  password = '';

  constructor(
    private serviceServ:ServicesService, 
    private router: Router
  ) { }

  Login() {    
    this.serviceServ.login(this.login) 
  }

  ngOnInit(): void {
  }
 
}
