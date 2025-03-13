import { ServicioMensajeria } from "./Aplicacion/ServicioMensajeria";
import { Dispositivos } from "./Dominio/Dispositivos";
import { Notificaciones } from "./Aplicacion/Notificaciones";
import { Usuario } from "./Dominio/Usuarios";
import { GestorUsuarios } from "./Aplicacion/GestorUsuariosDispositivos";

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
const gestorUsuarios = new GestorUsuarios();


const cassian = new Usuario(1, "Cassian");
const ares = new Usuario(2, "Ares");
const los_shinobi = new Usuario(2, "Los shinobi");


gestorUsuarios.agregarDispositivo(cassian,101, "Celular de Cassian");
gestorUsuarios.agregarDispositivo(cassian,102, "Laptop de Cassian");
gestorUsuarios.agregarDispositivo(cassian,103, "Tablet de Cassian");
gestorUsuarios.agregarDispositivo(ares, 104, "Celular de Ares");
gestorUsuarios.agregarDispositivo(los_shinobi, 105, "Celular de Shinobi 1");
gestorUsuarios.agregarDispositivo(los_shinobi,106, "Celular de Shinobi 2");


notificaciones.agregar(cassian);
notificaciones.agregar(ares);
notificaciones.agregar(los_shinobi);

servicioMensajeria.recibirMensaje("⚠️ Excommunicado. John Wick $7M open contract. Effective immediately", "Santino D'Antonio");
