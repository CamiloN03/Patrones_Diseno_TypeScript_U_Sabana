// Interfaz base para una habitación
export interface Habitacion {
    getDescripcion(): string;
    getCosto(): number;
}

// Implementación concreta de una habitación básica
export class HabitacionBasica implements Habitacion {
    getDescripcion(): string {
        return "Habitación básica";
    }

    getCosto(): number {
        return 100;
    }
}

// Clase base para decoradores
export abstract class HabitacionDecorador implements Habitacion {
    protected habitacion: Habitacion;
    protected costoExtra: number;
    protected descripcionExtra: string;

    constructor(habitacion: Habitacion, descripcionExtra: string, costoExtra: number) {
        this.habitacion = habitacion;
        this.descripcionExtra = descripcionExtra;
        this.costoExtra = costoExtra;
    }

    getDescripcion(): string {
        return `${this.habitacion.getDescripcion()}, ${this.descripcionExtra}`;
    }

    getCosto(): number {
        return this.habitacion.getCosto() + this.costoExtra;
    }
}

// Decoradores específicos
export class FloresDecorador extends HabitacionDecorador {
    constructor(habitacion: Habitacion) {
        super(habitacion, "con flores frescas", 20);
    }
}

export class ChocolateDecorador extends HabitacionDecorador {
    constructor(habitacion: Habitacion) {
        super(habitacion, "con chocolate gourmet", 30);
    }
}

export class VinoDecorador extends HabitacionDecorador {
    constructor(habitacion: Habitacion) {
        super(habitacion, "con vino de alta calidad", 50);
    }
}
