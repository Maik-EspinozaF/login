import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';


import { FormsModule, ReactiveFormsModule } from '@angular/forms';



import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegistroUsuComponent } from './registro-usu/registro-usu.component';
import { UsuariosComponent } from './usuarios/usuarios.component';
import { ServicesService } from './servicios/services.service';
import { TareaComponent } from './trabajos/tarea/tarea.component';
import { CrearTareaComponent } from './trabajos/crear-tarea/crear-tarea.component';
import { DepartamentosComponent } from './departamentos/departamentos.component';
import { CrearSubtareaComponent } from './Subtareas/crear-subtarea/crear-subtarea.component';
import { SubtareaComponent } from './Subtareas/subtarea/subtarea.component';
import { CrearProcesoComponent } from './proceso/crear-proceso/crear-proceso.component';
import { ListarProcesoComponent } from './proceso/listar-proceso/listar-proceso.component';
import { AuthGuard } from './auth.guard';




const apprutas: Routes =[
  { path: 'home', component:HomeComponent },
  { path: 'login', component:LoginComponent },

  { path: 'registro_usuario', component:RegistroUsuComponent},
  { path: 'listar_usuario', component:UsuariosComponent,canActivate:[AuthGuard]},

  { path: 'crear_tarea', component:CrearTareaComponent, canActivate:[AuthGuard]},
  { path: 'listar_tarea', component:TareaComponent,canActivate:[AuthGuard]},

  { path: 'crear_subtarea', component:CrearSubtareaComponent,canActivate:[AuthGuard]},
  { path: 'listar_subtarea', component:SubtareaComponent,canActivate:[AuthGuard]},

  { path: 'crear_proceso', component:CrearProcesoComponent,canActivate:[AuthGuard]},
  { path: 'listar_proceso', component:ListarProcesoComponent,canActivate:[AuthGuard]},
  
  { path: 'listar_departamentos', component:DepartamentosComponent,canActivate:[AuthGuard]},

  

  { path: '**', pathMatch: 'full', redirectTo:'home' },
]

@NgModule({
 
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    RegistroUsuComponent,
    UsuariosComponent,
    TareaComponent,
    CrearTareaComponent,
    DepartamentosComponent,
    CrearSubtareaComponent,
    SubtareaComponent,
    CrearProcesoComponent,
    ListarProcesoComponent,

  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(apprutas),
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    FormsModule, 
    ReactiveFormsModule
      
  ],
  exports:[RouterModule],
  providers: [ServicesService],
  bootstrap: [AppComponent]
})

export class AppModule { }
