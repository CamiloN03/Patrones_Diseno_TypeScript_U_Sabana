import { Heroe, HeroePrototype } from './Heroe';

export class Arquero extends Heroe {
    constructor(
        nombre: string,
        aspectoVisual: string,
        experiencia: number,
        nivel: number,
        puntosHabilidad: number,
        habilidades: string[] = ["Disparo certero", "Trampa", "Flecha explosiva"]
    ) {
        super(nombre, aspectoVisual, experiencia, nivel, puntosHabilidad, habilidades);
    }

    clone(): HeroePrototype {
        return new Arquero(
            this.nombre,
            this.aspectoVisual,
            this.experiencia,
            this.nivel,
            this.puntosHabilidad,
            [...this.habilidades]
        );
    }
}
