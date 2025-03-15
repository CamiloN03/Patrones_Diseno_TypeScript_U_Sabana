import * as readline from 'readline';
import { HeroManager } from '../Controller/heroManager';
import { Guerrero } from '../Models/Guerrero';
import { Arquero } from '../Models/Arquero';
import { Mago } from '../Models/Mago';
import { Escudero } from '../Models/Escudero';

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const manager = new HeroManager();

function showMenu() {
    console.log("\n===== MENÚ PRINCIPAL =====");
    console.log("1. Listar héroes");
    console.log("2. Crear nuevo héroe");
    console.log("3. Clonar un héroe");
    console.log("4. Salir");
    rl.question("Seleccione una opción: ", handleMenu);
}

function handleMenu(option: string) {
    switch (option) {
        case '1':
            listarHeroes();
            break;
        case '2':
            crearHeroe();
            break;
        case '3':
            clonarHeroe();
            break;
        case '4':
            rl.close();
            console.log("¡Hasta luego!");
            break;
        default:
            console.log("Opción inválida.");
            showMenu();
            break;
    }
}

function listarHeroes() {
    const heroes = manager.listHeroes();
    if (heroes.length === 0) {
        console.log("No hay héroes disponibles.");
    } else {
        console.log("\nHéroes disponibles:");
        heroes.forEach((hero, index) => {
            console.log(`${index}. ${hero.constructor.name} - ${hero.nombre} (Nivel ${hero.nivel})`);
        });
    }
    showMenu();
}

function crearHeroe() {
    rl.question("Ingrese el nombre del héroe: ", (nombre) => {
        rl.question("Ingrese el aspecto visual del héroe: ", (aspectoVisual) => {
            rl.question("Seleccione la clase del héroe (1. Guerrero, 2. Arquero, 3. Mago, 4. Escudero): ", (clase) => {
                let nuevoHeroe;

                switch (clase) {
                    case '1':
                        nuevoHeroe = new Guerrero(nombre, aspectoVisual, 0, 1, 0);
                        break;
                    case '2':
                        nuevoHeroe = new Arquero(nombre, aspectoVisual, 0, 1, 0);
                        break;
                    case '3':
                        nuevoHeroe = new Mago(nombre, aspectoVisual, 0, 1, 0);
                        break;
                    case '4':
                        nuevoHeroe = new Escudero(nombre, aspectoVisual, 0, 1, 0);
                        break;
                    default:
                        console.log("Clase inválida.");
                        showMenu();
                        return;
                }

                manager.createHero(nuevoHeroe);
                console.log("¡Héroe creado exitosamente!");
                showMenu();
            });
        });
    });
}

function clonarHeroe() {
    listarHeroes();
    rl.question("Ingrese el número del héroe a clonar: ", (indexStr) => {
        const index = parseInt(indexStr);
        const clonedHero = manager.cloneHero(index);
        if (clonedHero) {
            console.log("¡Héroe clonado exitosamente!");
        } else {
            console.log("Índice inválido.");
        }
        showMenu();
    });
}

// Inicia el menú
showMenu();
