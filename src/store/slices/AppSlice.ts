import { createSlice } from "@reduxjs/toolkit";
import { IAppInitState } from "../../utils/Types";


const initialState : IAppInitState = {};

export const AppSlice = createSlice({
    name: "app",
    initialState,
    reducers: {}
});

export const {} = AppSlice.actions;