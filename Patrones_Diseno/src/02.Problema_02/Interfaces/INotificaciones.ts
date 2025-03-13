import { Mensaje } from "./Mensaje";
import { IObservador } from "./IObservador";

export interface INotificaciones {
    agregar(observador: IObservador): void;
    eliminar(observador: IObservador): void;
    notificar(mensaje: Mensaje): void;
}