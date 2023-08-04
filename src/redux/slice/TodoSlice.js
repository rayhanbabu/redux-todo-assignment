import {createSlice} from "@reduxjs/toolkit";

export const TodoSlice = createSlice({
    name:"todo",
    initialState:{
        Value:[],
    },
    reducers:{
           AddTodo:(state,action)=>{
            state.Value.push({text:action.payload , packed: false, id: Date.now() });    
           },
           RemoveTodo:(state,action)=>{
            state.Value.splice(action.payload['id'],1);     
           },
           MarkTodo:(state,action)=>{   
            state.Value.splice(action.payload['id'],1);   
            //state.Value.push();   ,{text:action.payload['text'] , packed: true, id: action.payload['id'] } 
            //console.log(action.payload['text']);
          },          
       }
  });

export const { AddTodo, RemoveTodo, MarkTodo} = TodoSlice.actions;
export default TodoSlice.reducer;