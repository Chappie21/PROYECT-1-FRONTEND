// Modelo de datos del usuario
export class User {
    public userId:string;
    public nombre:string;
    public apellido:string;
    public email:string;
    public foto_perfil:string;
    public isAdmin:boolean;
    public visible_email:boolean;
    public visible_top:boolean;

    constructor
    (
        userId:string, 
        nombre:string, 
        apellido:string, 
        email:string,
        foto_perfil:string,
        isAdmin:boolean,
        visible_email:boolean,
        visible_top:boolean
    ){
        this.userId = userId;
        this.nombre = nombre;
        this.apellido = apellido,
        this.email = email,
        this.foto_perfil = foto_perfil,
        this.isAdmin = isAdmin,
        this.visible_email = visible_email,
        this.visible_top = visible_top
    }
}
