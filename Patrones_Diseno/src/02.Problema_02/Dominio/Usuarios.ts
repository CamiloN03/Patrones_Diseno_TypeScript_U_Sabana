import {  Dispositivos } from "./Dispositivos";

export class Usuario {
    constructor(public id: number, public nombre: string, private readonly dispositivos: Dispositivos[] = []) {}

    agregarDispositivo(dispositivo: Dispositivos): void {
        this.dispositivos.push(dispositivo);
    }

    obtenerDispositivos(): Dispositivos[] {
        return this.dispositivos;
    }
}