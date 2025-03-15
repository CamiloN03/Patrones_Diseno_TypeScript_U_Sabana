import { Heroe, HeroePrototype } from './Heroe';

export class Mago extends Heroe {
    constructor(
        nombre: string,
        aspectoVisual: string,
        experiencia: number,
        nivel: number,
        puntosHabilidad: number,
        habilidades: string[] = ["Curacion", "Fortaleza", "Rayo"]
    ) {
        super(nombre, aspectoVisual, experiencia, nivel, puntosHabilidad, habilidades);
    }

    clone(): HeroePrototype {
        return new Mago(
            this.nombre,
            this.aspectoVisual,
            this.experiencia,
            this.nivel,
            this.puntosHabilidad,
            [...this.habilidades]
        );
    }
}
