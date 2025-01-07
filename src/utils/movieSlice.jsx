import { createSlice } from "@reduxjs/toolkit";


const movieSlice = createSlice({
    name:'playingMovie',
    initialState:{
        addMovie:null,
        popularMovie:null,
        topratedMovie:null,
        upcomingMovie:null,
        horrorMovie:null,
    },
    reducers:{
        addNewMovie:(state,action)=>{
            state.addMovie=action.payload;
         },
         addPopularMovie:(state,action)=>{
            state.popularMovie=action.payload;
         },
         addTopRatedMovie:(state,action)=>{
            state.topratedMovie=action.payload;
         },
         addUpcomingMovie:(state,action)=>{
            state.upcomingMovie=action.payload;
         },
         addHorrorMovie:(state,action)=>{
            state.horrorMovie=action.payload;
         }

    }
})
export const {addNewMovie,addPopularMovie,addHorrorMovie,addTopRatedMovie,addUpcomingMovie}=movieSlice.actions
export default movieSlice.reducer