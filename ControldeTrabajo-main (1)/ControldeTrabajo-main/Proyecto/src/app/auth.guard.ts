import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { Router } from '@angular/router';
import { ServicesService } from './servicios/services.service';


@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(
    private serviceServ: ServicesService,
    private router:Router
  ){

  }

  canActivate():boolean{
    if(this.serviceServ.loggedIn()){
      return true;
    }
    this.router.navigate(['login']);
    return false;
  }
  
}
