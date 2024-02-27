import {createSlice} from "@reduxjs/toolkit";

export const resultReducer =createSlice({
    name:"result",
    initialState:{
        userId:null,
        result:[]
    },
    reducers:{
        setUserId: (state,action) =>{
            state.userId=action.payload
        },
        pushResultAction: (state,action) =>{
            state.result.push(action.payload)
        },
        updateresultAction: (state, action) => {
            const payload = action.payload;
            const {trace, checked} = payload;
            state.result.fill(checked, trace, trace + 1);
        },
        resetResultAction: () =>{
            return{
                userId:null,
                result:[]
            }
        }
    }
})

export const {setUserId,pushResultAction,resetResultAction, updateresultAction} = resultReducer.actions
export default resultReducer.reducer