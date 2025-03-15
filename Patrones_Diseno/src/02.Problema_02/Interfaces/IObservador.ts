import { Mensaje } from "./Mensaje";

// Interfaz para los observadores (dispositivos)
export interface IObservador {
  escucharMensaje(usuario:string,mensaje: Mensaje): void;
}