import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { GET_POKEMON_LIST_LIMITED } from "../../utils/apiEndpoints";

export const getInitialPokemonList = createAsyncThunk("pokemon/getInitialPokemonList", 
    async()=>{
        try{
            const res = await axios.get(GET_POKEMON_LIST_LIMITED);
            console.log(res)
            return res.data?.results;
        }catch (e){
            console.log(e);
        }
})