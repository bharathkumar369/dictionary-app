import { configureStore, createSlice } from "@reduxjs/toolkit"

const toggleSlice = createSlice({
    name:'toggle',
    initialState:{toggle:true},
    reducers:{
        on(state){
            state.toggle = true;
        },
        off(state){
            state.toggle = false;
        }

    }
})
export const actions = toggleSlice.actions;

const store = configureStore({
    reducer:toggleSlice.reducer
})

export default store;