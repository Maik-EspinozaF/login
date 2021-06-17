import { Component, OnInit } from '@angular/core';
import{ServicesService} from '../../servicios/services.service';
import { Router } from '@angular/router';
import { Procesos, Tareas, Usuarios } from 'src/app/models/user';

import swal from 'sweetalert2';

@Component({
  selector: 'app-crear-proceso',
  templateUrl: './crear-proceso.component.html',
  styleUrls: ['./crear-proceso.component.css']
})
export class CrearProcesoComponent implements OnInit {

  public procesos: Array<any>=[];
  proceso: Procesos = new Procesos();

  public usuarios: Array<any>=[];
  usuario: Usuarios = new Usuarios();

  public tareas: Array<any>=[];
  tarea: Tareas = new Tareas();

  constructor(
    private serviceServ:ServicesService, 
    private router: Router
  ) { 
    this.listarProcesos();
    this.listarUsuarios();
    this.listarTareas();
  }

  ngOnInit(): void {
  }

  id_proceso: number=0;
  tarea_pro: string="";
  usuario_pro: number=0;
  estado: string="";

  crearProceso(){
    return this.serviceServ.guardarProceso(this.proceso).subscribe(
      res => {    
        this.router.navigate(['listar_proceso']),
        swal.fire('Nuevo Proceso ', 'creado' , 'success')
        this.listarProcesos();
      },
      err => swal.fire('Error al crear ', 'Intente mas tarde')
    )
  }
  
  listarProcesos(){
    this.serviceServ.getProcesos().subscribe((resp: any) =>{
      this.procesos=resp;
    })
  }
  listarUsuarios(){
    this.serviceServ.getUsuarios().subscribe((resp: any) =>{
      this.usuarios=resp;
    })
  }
  listarTareas(){
    this.serviceServ.getTareas().subscribe((resp: any) =>{
      this.tareas=resp;
      console.log(this.tareas);
    })
  }

}
