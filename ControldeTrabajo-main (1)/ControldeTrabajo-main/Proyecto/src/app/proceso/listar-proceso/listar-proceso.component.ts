import { Component, OnInit } from '@angular/core';
import{ServicesService} from '../../servicios/services.service';
import { Procesos, Tareas, Usuarios } from 'src/app/models/user';
import swal from 'sweetalert2';

@Component({
  selector: 'app-listar-proceso',
  templateUrl: './listar-proceso.component.html',
  styleUrls: ['./listar-proceso.component.css']
})
export class ListarProcesoComponent implements OnInit {

  public procesos: Array<any>=[]
  proceso: Procesos = new Procesos();

  public usuarios: Array<any>=[];
  usuario: Usuarios = new Usuarios();

  public tareas: Array<any>=[];
  tarea: Tareas = new Tareas();
  
  constructor(
    private serviceServ:ServicesService
  )
  { 
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

  getDataProceso(id_proceso: number, tarea_pro: string, usuario_pro: number, estado: string){
    this.id_proceso=id_proceso;
    this.tarea_pro=tarea_pro;
    this.usuario_pro=usuario_pro;
    this.estado=estado;
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
    })
  }
  updateProceso(){
    this.serviceServ.updateProceso(this.id_proceso, this.tarea_pro, this.usuario_pro, this.estado )
    .subscribe((res)=>{ 
    })
    swal.fire('Proceso ', 'Modificado' , 'success');
    this.listarProcesos();
  }

  DeleteProceso(pro:number){
    this.serviceServ.deleteProceso(pro)
    .subscribe(data=>{
      this.procesos=this.procesos.filter(cod=>cod!==pro);
      swal.fire('Proceso ', 'Eliminado' , 'warning');
      this.listarProcesos(); 
    })
    
  }

}
