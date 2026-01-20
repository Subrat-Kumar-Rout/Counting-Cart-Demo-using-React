import {createSlice} from "@reduxjs/toolkit"


const counting = createSlice({
    name:'firstslice',
    initialState:{count:0},
    reducers:{
    Increment: (state) =>{state.count+=1},
    Decrement: (state) =>{state.count-=1},
    }
})

export const {Increment,Decrement} = counting.actions;
export default counting.reducer;