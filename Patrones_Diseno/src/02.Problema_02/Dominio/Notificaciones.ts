import { INotificaciones } from "../Interfaces/INotificaciones";
import { IObservador } from "../Interfaces/IObservador";
import { Mensaje } from "../Interfaces/Mensaje";

export class Notificaciones implements INotificaciones {
    private dispositivos: IObservador[] = [];

    public agregar(dispositivo: IObservador): void {
        this.dispositivos.push(dispositivo);
    }
    
    eliminar(dispositivo: IObservador): void {
        this.dispositivos = this.dispositivos.filter(d => d !== dispositivo);
    }
    
    notificar(mensaje: Mensaje): void {
        this.dispositivos.forEach(dispositivo => dispositivo.emitirMensaje(mensaje));
    }
}