export interface ApiHeroesResponse {
    id: number,
    name: string,
    biograpy: Object,
    powerstats: Object,
    appearance: Object,
    work: Object,
    connections: Object,
    image: Object
}

// Datos necesarios que se mostraran en la interfaz
export interface Heroe {
    id: number,
    name: string,
    biography: string,
    powerstats: string,
    appearance: string,
    work: string,
    connections: string,
    image: string
}