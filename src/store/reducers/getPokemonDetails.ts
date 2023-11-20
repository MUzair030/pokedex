import { createAsyncThunk } from "@reduxjs/toolkit";
import { IBasePokemonData, IPokemonDetails, IPokemonTypesDetails } from "../../utils/Types";
import axios from "axios";
import { getPokemonTypeDetails } from "../../utils/pokemonTypesDetails";

export const getPokemonDetails = createAsyncThunk("pokemon/getPokemonDetails", 
    async(pokemons: IBasePokemonData[])=>{
        try{
            let pokemonWithDetails: IPokemonDetails[] = [];
            for(let pokemon of pokemons){
                let typesDetails: IPokemonTypesDetails[] = [];
                const res:any = await axios.get(pokemon.url);
                if(res.status === 200){
                    // add images to the api response / pokemon details
                    res.data.images = {
                        default: `assets/pokemons/default/${res.data.id}.png`,
                        shiny: `assets/pokemons/shiny/${res.data.id}.png`
                    };
                    res.data.types.forEach((t:{type:{name: string}}) => {
                        // add types details
                        typesDetails.push(getPokemonTypeDetails(t.type.name));
                    });
                    res.data.typesDetails = typesDetails;
                    pokemonWithDetails.push(res.data);
                }
            }
            return pokemonWithDetails;
        } catch (e) {
            console.log(e);
        }

})