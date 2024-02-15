import { PayloadAction, createSlice } from "@reduxjs/toolkit"
// import { languageList } from "../data"

const initTheme = 0;
const initLanguage = "en"

export interface allureState {     
    themes: number,
    languages: string
}

const initialState: allureState = {
    themes:initTheme,
    languages:initLanguage
}

export const allureSlice = createSlice({
    name:'allure',
    initialState,
    reducers:{
        applyTheme: (state, action: PayloadAction<number>) => {
            state.themes = action.payload
        },
        applyLanguage: (state, action: PayloadAction<string>) => {
            state.languages = action.payload
        }
    },
})

export const {applyTheme,applyLanguage} = allureSlice.actions;
export default allureSlice.reducer