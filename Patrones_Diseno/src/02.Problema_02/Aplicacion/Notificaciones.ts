import { INotificaciones } from "../Interfaces/INotificaciones";
import { Mensaje } from "../Interfaces/Mensaje";
import { Usuario } from "../Dominio/Usuarios";

export class Notificaciones implements INotificaciones {
    private usuarios: Usuario[] = [];

    public agregar(usuario: Usuario): void {
        this.usuarios.push(usuario);
    }
    
    eliminar(usuario: Usuario): void {
        this.usuarios = this.usuarios.filter(d => d !== usuario);
    }


    obtenerUsuariosNotificar(): Usuario[] {
        return this.usuarios;
    }
    
    notificar(usuario: Usuario, mensaje: Mensaje): void {
        usuario.obtenerDispositivos().forEach(dispositivo => dispositivo.escucharMensaje(usuario.nombre,mensaje));
    }
}