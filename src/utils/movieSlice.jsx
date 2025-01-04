import { createSlice } from "@reduxjs/toolkit";


const movieSlice = createSlice({
    name:'playingMovie',
    initialState:{
        addNewMovie:null,
    },
    reducers:{
        addNewMovie:(state,action)=>{
            state.addNewMovie=action.payload;

        }
    }
})
export const {addNewMovie}=movieSlice.actions
export default movieSlice.reducer