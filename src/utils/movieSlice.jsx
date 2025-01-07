import { createSlice } from "@reduxjs/toolkit";


const movieSlice = createSlice({
    name:'playingMovie',
    initialState:{
        addMovie:null,
    },
    reducers:{
        addNewMovie:(state,action)=>{
            state.addMovie=action.payload;
         }
    }
})
export const {addNewMovie,addMovieTrailer}=movieSlice.actions
export default movieSlice.reducer