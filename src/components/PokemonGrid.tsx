import { IPokemonDetails } from "../utils/Types"
import { PokemonCard } from "./PokemonCard"
import { FC } from "react";



export const PokemonGrid = ({pokemons}:any) => {

    return(
        <div className="pokemon-grid-container">
            <div className="pokemon-grid">
                {/* Pokemon Grid */}
                {
                    pokemons && pokemons.length>0 && 
                    pokemons.map((pokemon:IPokemonDetails) =>(
                        <PokemonCard
                        pokemon={pokemon}
                        />
                    ))
                }
            </div>
        </div>
    )
}