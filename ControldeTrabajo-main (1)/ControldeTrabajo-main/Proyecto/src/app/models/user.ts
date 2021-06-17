export class Usuarios{
    id_usuario: number=0;
    mail: string = "";
    clave: string = "";
    nom_depto: string="";     
}

export class Tareas{
    nombre: string="";
    descripcion: string="";
    f_inicio: string="";
    f_entrega: string=""; 
}
export class SubTareas{
    nombre: string="";
    descripcion: string="";
    f_inicio: string="";
    f_entrega: string="";
    tarea:string=""; 
}

export class Departamentos{
    nom_depto: string="";  
}

export class Procesos{
    id_proceso: number=0;
    tarea_pro: string = "";
    usuario_pro: number=0;
    estado: string="";     
}
export class Login{
    email:string="";
    password:string="";
}

