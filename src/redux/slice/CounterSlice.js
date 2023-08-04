import {createSlice} from "@reduxjs/toolkit";

export const counterSlice = createSlice({
    name:"counter",
    initialState:{
        countingValue:12
    },
    reducers:{
        increment:(state)=>{
            state.countingValue=state.countingValue+1;    
        },
        decrement:(state)=>{
            state.countingValue=state.countingValue-1;
        }
    }
});

export const { increment, decrement } = counterSlice.actions;
export default counterSlice.reducer;