console.log("¡Hola, TypeScript con patrones de diseño! 🎉");
import { Guerrero } from './Models/Guerrero';
import { Mago } from './Models/Mago';
import { Escudero } from './Models/Escudero';
import { Arquero } from './Models/Arquero';


// Crear héroes originales
const guerrero1 = new Guerrero("Thorgrim", "Barba roja", 1000, 10, 5);
const mago1 = new Mago("Merlin", "Túnica azul", 1200, 12, 8);
const arquero1 = new Arquero("Legolas", "Ojos de águila", 900, 9, 6);
const escudero1 = new Escudero("Samwell", "Aspecto simple", 300, 5, 2);

// Clonar héroes
const guerreroClonado = guerrero1.clone() as Guerrero;
guerreroClonado.nombre = "Thorgrim el Clonado";
guerreroClonado.aspectoVisual = "Barba negra";

// Mostrar detalles de los héroes
guerrero1.mostrarDetalles();
console.log("------------------");
guerreroClonado.mostrarDetalles();
