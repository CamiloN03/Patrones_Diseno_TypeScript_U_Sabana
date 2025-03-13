import { Usuario } from "../Dominio/Usuarios";
import { Mensaje } from "./Mensaje";

export interface INotificaciones {
    agregar(usuario: Usuario): void;
    eliminar(observador: Usuario): void;
    notificar(usuario: Usuario, mensaje: Mensaje): void;
}