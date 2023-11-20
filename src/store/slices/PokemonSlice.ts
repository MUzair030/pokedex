import { createSlice } from "@reduxjs/toolkit";
import { IPokemonInitState } from "../../utils/Types";
import { getInitialPokemonList } from "../reducers/getInitialPokeonsList";
import { getPokemonDetails } from "../reducers/getPokemonDetails";


const initialState: IPokemonInitState = {
    pokemonList: undefined,
    pokemonWithDetails: undefined,
    listLoading: false,
    detailsLoading: false
};

export const PokemonSlice = createSlice({
    name: "pokemon",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        // pokemon list
        builder.addCase(getInitialPokemonList.fulfilled, (state,action)=>{
            state.pokemonList = action.payload;
            state.listLoading = false;
        }),
        builder.addCase(getInitialPokemonList.pending, (state,action)=>{
            state.listLoading = true;
        }),

        // pokemon with details
        builder.addCase(getPokemonDetails.fulfilled, (state,action)=>{
            state.pokemonWithDetails = action.payload;
            state.detailsLoading = false;
        }),
        builder.addCase(getPokemonDetails.pending, (state,action)=>{
            state.detailsLoading = true;
        })

    }
});

export const {} = PokemonSlice.actions;