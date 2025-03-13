import { ServicioMensajeria } from "./Aplicacion/ServicioMensajeria";
import { Dispositivo } from "./Dominio/Dispositivo";
import { Notificaciones } from "./Dominio/Notificaciones";

console.log(`
    ═════════════════════════════════════════════════
    🔫 *BIENVENIDO A LA MESA ALTA* 🔫
    ═════════════════════════════════════════════════
    El mundo de los asesinos opera en las sombras. Un nuevo contrato ha sido emitido. 
    La orden se ha enviado a todos los dispositivos registrados en la red secreta.
    Si recibes este mensaje, prepárate para la cacería.
    
    📜 *SOLUCIÓN AL PROBLEMA 2: PATRÓN OBSERVER* 📜
    ───────────────────────────────────────────────
    `);

const notificaciones = new Notificaciones();
const servicioMensajeria = new ServicioMensajeria(notificaciones);

const cassian = new Dispositivo(101, "Cassian");
const ares = new Dispositivo(102, "Ares");
const los_shinobi= new Dispositivo(102, "Los shinobi");

notificaciones.agregar(cassian);
notificaciones.agregar(ares);
notificaciones.agregar(los_shinobi);

servicioMensajeria.recibirMensaje("⚠️ Excommunicado. John Wick $7M open contract. Effective immediately", "Santino D'Antonio");
