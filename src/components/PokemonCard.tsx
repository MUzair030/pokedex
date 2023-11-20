import { FC } from "react"
import { IPokemonDetails, IPokemonTypesDetails } from "../utils/Types"
import img from "../assets/pokemons/default/1.png"

interface PokemonCardProps {
    pokemon: IPokemonDetails;
  }

export const PokemonCard: FC<PokemonCardProps> = ({pokemon}) => {
    const defaultImage = require("../"+ pokemon.images?.default);
    const shinyImage = require("../"+ pokemon.images?.shiny);
    // const pokemonTypes = 

    return (
        <div className="pokemon-card" key={pokemon.id}>
            <div className="add-to-list"></div>
            <div className="add-to-compare"></div>
            <h3 className="pokemon-card-title">{pokemon.name}</h3>
            <div className="pokemon-card-image">
                <img alt={pokemon?.name} 
                src={shinyImage? shinyImage : defaultImage} />
            </div>
            <div className="pokemon-types-section">
                {
                    pokemon.typesDetails && pokemon?.typesDetails.map((t:IPokemonTypesDetails)=>(
                        <div className="pokemon-type">
                            <img alt=""
                            src={t?.image} />
                            <h6>{t?.name}</h6>
                        </div>

                    ))
                }
            </div>

        </div>
    )
}