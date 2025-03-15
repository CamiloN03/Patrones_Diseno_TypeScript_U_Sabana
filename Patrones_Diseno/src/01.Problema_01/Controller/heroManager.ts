import { Heroe } from '../Models/Heroe';
import { Guerrero } from '../Models/Guerrero';
import { Arquero } from '../Models/Arquero';
import { Mago } from '../Models/Mago';
import { Escudero } from '../Models/Escudero';
import { saveToJson, loadFromJson } from '../fileManager';

const HEROES_FILE = 'heroes.json';

export class HeroManager {
    private heroes: Heroe[] = [];

    constructor() {
        this.loadHeroes();
    }

    // Crear un nuevo héroe
    public createHero(heroe: Heroe): void {
        this.heroes.push(heroe);
        this.saveHeroes();
    }

    // Clonar un héroe existente por índice
    public cloneHero(index: number): Heroe | null {
        if (index >= 0 && index < this.heroes.length) {
            const clonedHero = this.heroes[index].clone() as Heroe;
            this.heroes.push(clonedHero);
            this.saveHeroes();
            return clonedHero;
        }
        return null;
    }

    // Listar todos los héroes
    public listHeroes(): Heroe[] {
        return this.heroes;
    }

    // Guardar héroes en un archivo JSON
    private saveHeroes(): void {
        saveToJson(HEROES_FILE, this.heroes.map(hero => ({
            nombre: hero.nombre,
            aspectoVisual: hero.aspectoVisual,
            experiencia: hero.experiencia,
            nivel: hero.nivel,
            puntosHabilidad: hero.puntosHabilidad,
            habilidades: hero.habilidades,
            tipo: hero.constructor.name
        })));
    }

    // Cargar héroes desde un archivo JSON
    private loadHeroes(): void {
        const data = loadFromJson(HEROES_FILE);
        if (data) {
            this.heroes = data.map((heroData: any) => {
                switch (heroData.tipo) {
                    case 'Guerrero': return new Guerrero(heroData.nombre, heroData.aspectoVisual, heroData.experiencia, heroData.nivel, heroData.puntosHabilidad, heroData.habilidades);
                    case 'Arquero': return new Arquero(heroData.nombre, heroData.aspectoVisual, heroData.experiencia, heroData.nivel, heroData.puntosHabilidad, heroData.habilidades);
                    case 'Mago': return new Mago(heroData.nombre, heroData.aspectoVisual, heroData.experiencia, heroData.nivel, heroData.puntosHabilidad, heroData.habilidades);
                    case 'Escudero': return new Escudero(heroData.nombre, heroData.aspectoVisual, heroData.experiencia, heroData.nivel, heroData.puntosHabilidad, heroData.habilidades);
                    default: return null;
                }
            }).filter((hero: Heroe | null) => hero !== null);
        }
    }
}
