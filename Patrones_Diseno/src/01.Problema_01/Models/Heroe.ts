export interface HeroePrototype {
    clone(): HeroePrototype;
}

export abstract class Heroe implements HeroePrototype {
    constructor(
        public nombre: string,
        public aspectoVisual: string,
        public experiencia: number,
        public nivel: number,
        public puntosHabilidad: number,
        public habilidades: string[]
    ) {}

    abstract clone(): HeroePrototype;

    mostrarDetalles(): void {
        console.log(`Nombre: ${this.nombre}`);
        console.log(`Clase: ${this.constructor.name}`);
        console.log(`Aspecto: ${this.aspectoVisual}`);
        console.log(`Experiencia: ${this.experiencia}`);
        console.log(`Nivel: ${this.nivel}`);
        console.log(`Puntos de Habilidad: ${this.puntosHabilidad}`);
        console.log(`Habilidades: ${this.habilidades.join(", ")}`);
    }
}
