import { Component, OnInit } from '@angular/core';
import { Usuarios, Departamentos } from '../models/user';
import{ServicesService} from '../servicios/services.service';
import { Router } from '@angular/router';

import swal from 'sweetalert2';


@Component({
  selector: 'app-registro-usu',
  templateUrl: './registro-usu.component.html',
  styleUrls: ['./registro-usu.component.css']
})
export class RegistroUsuComponent implements OnInit {

  
  public usuarios: Array<any>=[];
  usuario: Usuarios = new Usuarios();

  departamento: Departamentos= new Departamentos();
  public departamentos: Array<any>=[];

  constructor(

    private serviceServ:ServicesService, 
    private router: Router

  ) {
    this.listarDepartamentos();
  }

  ngOnInit(): void {
  }

  crearUsuario(){
    return this.serviceServ.guardarUsuario(this.usuario).subscribe(
      res => {
        this.router.navigate(['listar_usuario']),
        swal.fire('Funcionario', 'creado' , 'success')
      },
      err => swal.fire('Error al crear ', 'Intente mas tarde')
    )
  }
  listarDepartamentos(){
    this.serviceServ.getDepartamento().subscribe((resp: any) =>{
      this.departamentos=resp;
    })
  }

}
