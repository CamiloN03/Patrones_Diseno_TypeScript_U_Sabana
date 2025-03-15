import { Heroe, HeroePrototype } from './Heroe';

export class Guerrero extends Heroe {
    constructor(
        nombre: string,
        aspectoVisual: string,
        experiencia: number,
        nivel: number,
        puntosHabilidad: number,
        habilidades: string[] = ["Espadazo", "Defensa con escudo", "Furia de batalla"]
    ) {
        super(nombre, aspectoVisual, experiencia, nivel, puntosHabilidad, habilidades);
    }

    clone(): HeroePrototype {
        return new Guerrero(
            this.nombre,
            this.aspectoVisual,
            this.experiencia,
            this.nivel,
            this.puntosHabilidad,
            [...this.habilidades]
        );
    }
}
