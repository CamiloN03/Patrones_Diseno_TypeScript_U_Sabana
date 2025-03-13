import { Mensaje } from "../Interfaces/Mensaje";
import { Notificaciones } from "../Dominio/Notificaciones";

export class ServicioMensajeria {
    constructor(private readonly notificaciones: Notificaciones ) {}
    
     recibirMensaje(mensaje: string, remitente: string): void {
        const nuevoMensaje: Mensaje = { contenido: mensaje, remitente, timestamp: new Date() };
        console.log(`📩 ${remitente} envió: ${nuevoMensaje.contenido} (Enviado: ${nuevoMensaje.timestamp.toISOString()})`);
        this.notificaciones.notificar(nuevoMensaje);
    }
}