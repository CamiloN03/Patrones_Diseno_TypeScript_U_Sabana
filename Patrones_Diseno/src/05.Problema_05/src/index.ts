import { HabitacionBasica, FloresDecorador, ChocolateDecorador, VinoDecorador } from "./habitacion";

// Crear una habitación básica
let habitacion = new HabitacionBasica();
console.log(habitacion.getDescripcion() + " - $" + habitacion.getCosto());

// Agregar flores frescas
habitacion = new FloresDecorador(habitacion);
console.log(habitacion.getDescripcion() + " - $" + habitacion.getCosto());

// Agregar chocolate gourmet
habitacion = new ChocolateDecorador(habitacion);
console.log(habitacion.getDescripcion() + " - $" + habitacion.getCosto());

// Agregar vino de alta calidad
habitacion = new VinoDecorador(habitacion);
console.log(habitacion.getDescripcion() + " - $" + habitacion.getCosto());
