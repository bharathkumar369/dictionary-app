import { configureStore, createSlice,createAsyncThunk } from "@reduxjs/toolkit"



const toggleSlice = createSlice({
    name:"toggle",
    initialState:{toggle:true},
    reducers:{
        change(state,action){
            state.toggle = !state.toggle
        }
    }
})



export const actions = toggleSlice.actions


const store  = configureStore({
    reducer: toggleSlice.reducer,
})

export default store


























