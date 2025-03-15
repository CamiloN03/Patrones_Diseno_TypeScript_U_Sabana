import * as fs from 'fs';
import * as path from 'path';

const dataFolder = path.join(__dirname, 'Data');
// Guardar datos en JSON
export function saveToJson(filename: string, data: any): void {
    fs.writeFileSync(filename, JSON.stringify(data, null, 2));
}

// Cargar datos desde JSON
export function loadFromJson(filename: string): any {
    if (!fs.existsSync(filename)) return [];  // Si no existe, devolvemos un array vacío

    try {
        const data = fs.readFileSync(filename, 'utf-8');
        return JSON.parse(data) || []; // Si el archivo está vacío, devolvemos un array vacío
    } catch (error) {
        console.error("Error al leer o parsear el archivo JSON:", error);
        return []; // Si ocurre algún error al leer o parsear, devolvemos un array vacío
    }
}

// Guardar datos en CSV
export function saveToCsv(filename: string, data: string[]): void {
    fs.writeFileSync(filename, data.join('\n'));
}

// Cargar datos desde CSV
export function loadFromCsv(filename: string): string[] {
    if (!fs.existsSync(filename)) return [];
    return fs.readFileSync(filename, 'utf-8').split('\n').filter(line => line.trim() !== '');
}

