import React from 'react'
import { createSlice } from '@reduxjs/toolkit'
const initialState={value:[]}
const todoSlice=createSlice({name:'todo' ,initialState,reducers:{
    id:(state,action)=>{
    state.value=[...action.payload]},
  
     


}})
export const {id,clrchange}=todoSlice.actions;
export default todoSlice.reducer;