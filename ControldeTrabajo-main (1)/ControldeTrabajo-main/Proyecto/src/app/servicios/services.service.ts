import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Tareas, Usuarios, Departamentos, SubTareas, Procesos, Login} from '../models/user';


import { map} from 'rxjs/operators';
import { Router } from '@angular/router';

import swal from 'sweetalert2';


@Injectable({
  providedIn: 'root'
})
export class ServicesService {

  constructor(
    private http: HttpClient,
    private router: Router
    ) 
    {}

    private httpHeaders=new HttpHeaders({'Content-Type': 'application/json'});

    URL: string= '/api/'
    content: string ="Content-Type";
    json: string ="applications/json";

    public get logIn(): boolean {
      return (localStorage.getItem('token') !== null);
    }

    login(login:Login){
      this.http.post(this.URL+"signUp", login, {headers:this.httpHeaders}).subscribe((resp: any) =>{        
        this.router.navigate(['listar_tarea']);
        localStorage.setItem('token', resp.token);
        swal.fire('Bienvenido', 'Entrando' , 'success')
      },
      err => swal.fire('Error ', 'Email o Password incorrectos')
      );
    }
    loggedIn(){
      return !!localStorage.getItem('token');
    }

    //////////////////////////////////////////

    // listar usuarios 
    getUsuarios(){
      let header = new HttpHeaders()
      .set(this.content, this.json)
      return this.http.get(this.URL+"getUsers", {
        headers:header
      });
    }    
    //guardar Usuario
    guardarUsuario(usuario:Usuarios){
      return this.http.post<Usuarios>(this.URL+"addUser", usuario, {headers:this.httpHeaders});
    }
    //actualizar Usuario
    UpdateUser(cod: number, ema: string, clave: string, nom_depto: string) {
      return this.http.put(
        this.URL+"updateUser",
        {
          "cod": cod,
          "mail": ema,
          "clave": clave,
          "nom_depto": nom_depto
        },
        { headers: this.httpHeaders }
      ).pipe(map(data => data));
    } 
    //Eliminar Usuario
    deleteUsuarios(usu:number){
      return this.http.delete<Usuarios>(this.URL+"deleteUser/"+usu);    
    } 

    //////////////////////////////////////////

    // listar Departamentos
    getDepartamento(){
      let header = new HttpHeaders()
      .set(this.content, this.json)
      return this.http.get(this.URL+"getDeptos", {
        headers:header
      });
    }
    //guardar Departamento
    guardardepartamento(departamento:Departamentos){
      return this.http.post<Departamentos>(this.URL+"addDepto", departamento, {headers:this.httpHeaders});
    }     
    //Eliminar Departamento
     deleteDepto(depto:string){
      return this.http.delete<Departamentos>(this.URL+"deleteDepto/"+depto);    
    }  

    //////////////////////////////////////////

    //Listar tareas de BD
    getTareas(){
      let header = new HttpHeaders()
      .set(this.content, this.json)
      return this.http.get(this.URL+"getTareas", {
        headers:header
      });
    }    
    //guardar tarea
    guardarTarea(tarea:Tareas){
      return this.http.post<Tareas>(this.URL+"addTarea", tarea, {headers:this.httpHeaders});
    }
    // actualizar Tarea
    updateTarea(nombre: string, descripcion: string, f_inicio: string, f_entrega: string){
      return this.http.put(
        this.URL+"updateTarea",
        {
          "nombre": nombre,
          "descripcion": descripcion,
          "f_inicio": f_inicio,
          "f_entrega": f_entrega
        }
      )
    }
    //Eliminar Tarea
    deleteTarea(tar:string){
      return this.http.delete<Tareas>(this.URL+"deleteTarea/"+tar);    
    }

    //////////////////////////////////////////
    //listar subtareas
    getSubTareas(){
      let header = new HttpHeaders()
      .set(this.content, this.json)
      return this.http.get(this.URL+"getSubTareas", {
        headers:header
      });
    } 
    //guardar SubTarea
    guardarSubTarea(subtarea:SubTareas){
      return this.http.post<SubTareas>(this.URL+"addSubTarea", subtarea, {headers:this.httpHeaders});
    }
     // actualizar SubTarea
     updateSubTarea(nombre: string, descripcion: string, f_inicio: string, f_entrega: string, tarea: string){
      return this.http.put(
        this.URL+"updateSubTarea",
        {
          "nombre": nombre,
          "descripcion": descripcion,
          "f_inicio": f_inicio,
          "f_entrega": f_entrega,
          "tarea": tarea
        }
      )
    }

    //Eliminar SubTarea
    deleteSubTarea(subtar:string){
      return this.http.delete<SubTareas>(this.URL+"deleteSubTarea/"+subtar);    
    }
    
     
    //////////////////////////////////////////

    
    //Listar Procesos de BD
    getProcesos(){
      let header = new HttpHeaders()
      .set(this.content, this.json)
      return this.http.get(this.URL+"getProcesos", {
        headers:header
      });
    } 
    //guardar proceso
    guardarProceso(proceso:Procesos){
      return this.http.post<Procesos>(this.URL+"addProceso", proceso, {headers:this.httpHeaders});
    }
    // actualizar Tarea
    updateProceso(id_proceso:number, tarea: string, usuario: number, estado: string){
      return this.http.put(
        this.URL+"updateProceso",
        {
          "id_proceso": id_proceso,
          "tarea": tarea,
          "usuario": usuario,
          "estado": estado
        }
      )
    }
    //Eliminar Tarea
    deleteProceso(id_proceso:number){
      return this.http.delete<Procesos>(this.URL+"deleteProceso/"+id_proceso);    
    }

}
