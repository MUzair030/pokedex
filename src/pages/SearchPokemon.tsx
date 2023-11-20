import {Wrapper} from "../layouts/Wrapper";
import {useEffect} from "react";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import { getInitialPokemonList } from "../store/reducers/getInitialPokeonsList";
import { getPokemonDetails } from "../store/reducers/getPokemonDetails";
import { IBasePokemonData } from "../utils/Types";
import { PokemonGrid } from "../components/PokemonGrid";


const SearchPokemon = () => {
    const dispatch = useAppDispatch();
    const {pokemonList, pokemonWithDetails} = useAppSelector(({pokemon})=> pokemon)

    useEffect(()=>{
        if(pokemonList === undefined || pokemonList.length === 0){
            dispatch(getInitialPokemonList());
        }
    },[dispatch, pokemonList]);

    useEffect(()=>{
        if(pokemonWithDetails === undefined || pokemonWithDetails.length === 0){
            const smallList:IBasePokemonData[] = pokemonList? pokemonList.slice(0,25) : [];
            dispatch(getPokemonDetails(smallList))
        }
    },[pokemonList, dispatch])

    useEffect(()=>{
        console.log("pokemonWithDetails:::: ", pokemonWithDetails)
    },[pokemonWithDetails])

    return(
        <div className="search-pokemon-main">
            <input className="search-pokemon"/>
            <PokemonGrid 
            pokemons={pokemonWithDetails}
            />
        </div>
    );
}

export default Wrapper(SearchPokemon);
