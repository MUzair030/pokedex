export interface IAppInitState {}

export interface IBasePokemonData {
    name: string,
    url: string
}

export interface IPokemonDetails {
    name: string,
    abilities: any,
    // base_experience: number | any,
    forms: [],
    // game_indices: [],
    height: number,
    id: number,
    is_default: boolean,
    location_area_encounters: string,
    moves: any,
    order: number,
    species: any,
    stats: any,
    types: any,
    images?: IPokemonImage,
    typesDetails?: IPokemonTypesDetails[]
}

export interface IPokemonInitState {
    pokemonList: IBasePokemonData[] | undefined,
    pokemonWithDetails: IPokemonDetails[] | undefined,
    listLoading: boolean,
    detailsLoading: boolean
}

export interface IPokemonTypesDetails {
    // [name: string] : IPokemonTypeDetails
    name: string,
    image: string,
    resistance: string[],
    strength: string[],
    vulnerable: string[],
    weakness: string[]
    
}

// export interface IPokemonTypeDetails {
//         image: string,
//         resistance: string[],
//         strength: string[],
//         vulnerable: string[],
//         weakness: string[]
// }

export interface IPokemonImage {
    default: string,
    shiny: string
}
