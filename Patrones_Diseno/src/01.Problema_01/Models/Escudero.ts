import { Heroe, HeroePrototype } from './Heroe';

export class Escudero extends Heroe {
    constructor(
        nombre: string,
        aspectoVisual: string,
        experiencia: number,
        nivel: number,
        puntosHabilidad: number,
        habilidades: string[] = ["Asistencia", "Protección ligera", "Curación básica"]
    ) {
        super(nombre, aspectoVisual, experiencia, nivel, puntosHabilidad, habilidades);
    }

    clone(): HeroePrototype {
        return new Escudero(
            this.nombre,
            this.aspectoVisual,
            this.experiencia,
            this.nivel,
            this.puntosHabilidad,
            [...this.habilidades]
        );
    }
}
