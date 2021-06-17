import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ServicesService } from './servicios/services.service';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Proyecto';

  constructor(
    public serviceServ:ServicesService,
    private router:Router
  ){}
  logout(){
    localStorage.removeItem('token');
    this.router.navigate(['login']);
}


        

}

