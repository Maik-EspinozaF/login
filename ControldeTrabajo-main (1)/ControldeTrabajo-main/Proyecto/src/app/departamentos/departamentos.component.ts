import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import{ServicesService} from '../servicios/services.service';
import swal from 'sweetalert2';
import { Departamentos } from '../models/user';

@Component({
  selector: 'app-departamentos',
  templateUrl: './departamentos.component.html',
  styleUrls: ['./departamentos.component.css']
})
export class DepartamentosComponent implements OnInit {

   public departamentos: Array<any>=[]
   departamento: Departamentos = new Departamentos()
   
   
  constructor(
    private serviceServ:ServicesService, 
    private router: Router

  ) { 
    this.listarDepto();
  }

  ngOnInit(): void {
  }

  nom_depto:string="";
  
  getDataDepto(nom_depto: string ){

    this.nom_depto=nom_depto;
    
  }
  //guardar Departamento
  crearDepto(){
    return this.serviceServ.guardardepartamento(this.departamento).subscribe(
      res => {
        this.router.navigate(['listar_departamentos']),
        swal.fire('Departamento ', 'creado' , 'success');
        this.listarDepto();
      },
      err => console.error(err)
    )

  }
  //listar Datos Depto Bd
  listarDepto(){
    this.serviceServ.getDepartamento().subscribe((resp: any) =>{
       this.departamentos=resp;
    })

  }
  
  //captura cod. del depto y envia al servicio deletedepto
  Delete(depto:string){
  this.serviceServ.deleteDepto(depto)
  .subscribe(data=>{
    this.departamentos=this.departamentos.filter(nom_depto=>nom_depto!==depto);
    swal.fire('Departamento ', 'Eliminado' , 'warning');
    this.listarDepto(); 
  })
  
  }



 



}
