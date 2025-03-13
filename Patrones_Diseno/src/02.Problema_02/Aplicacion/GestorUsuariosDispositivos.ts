import { Dispositivos } from "../Dominio/Dispositivos";
import { Usuario } from "../Dominio/Usuarios";

export class GestorUsuarios {
    private readonly usuarios: Usuario[] = [];

    crearUsuario(id: number, nombre: string): Usuario {
        const usuario = new Usuario(id, nombre);
        this.usuarios.push(usuario);
        return usuario;
    }

    agregarDispositivo(usuario: Usuario, idDispositivo: number, nombreDispositivo: string): void {
        const dispositivo = new Dispositivos(idDispositivo, nombreDispositivo);
        usuario.agregarDispositivo(dispositivo);
    }

    obtenerUsuarios(): Usuario[] {
        return this.usuarios;
    }
}