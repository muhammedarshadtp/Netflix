import { createSlice } from "@reduxjs/toolkit";

const geminiSlice = createSlice({
    name: 'gemini',
    initialState: {
        showSearch: false,
        movieName:null,
        movieResult:null,
    },

    reducers: {
        toggleSearchView: (state) => {
            state.showSearch = !state.showSearch
        },
        addMovieResult:(state,action)=>{
            const{movieName,movieResult}=action.payload
            state.movieName= movieName;
            state.movieResult=movieResult;
        }

    }
});

export const {toggleSearchView,addMovieResult }=geminiSlice.actions

export default geminiSlice.reducer