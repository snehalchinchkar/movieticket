import React from 'react'
import { createSlice } from '@reduxjs/toolkit'
const initialState={
    sum:0,
    position:[]
}
const todoSlice=createSlice({name:'todo' ,initialState,reducers:{
    id:(state,action)=>{
    state.value=[...action.payload]},
    modifySum:(state,action)=>{
        state.sum=action.payload
    },
    addPosition:(state,action)=>{
        state.position.push(action.payload[0]+""+action.payload[1])
    }
}})
export const {id,clrchange,modifySum,addPosition}=todoSlice.actions;
export default todoSlice.reducer;