import { configureStore, createSlice,createAsyncThunk } from "@reduxjs/toolkit"
import axios from "axios"


const toggleSlice = createSlice({
    name:"toggle",
    initialState:{toggle:true},
    reducers:{
        change(state,action){
            state.toggle = !state.toggle
        }
    }
})

export const fetchData = createAsyncThunk(
    "data/fetchData",
    async (word) => {
        try {
            const res = await axios.get(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`)
            return res.data
        } catch (error) {
            console.error(error)
        }
    }
)
const dataSlice = createSlice({
    name:"data",
    initialState:{data:null, isLoading:false, error:null},
    reducers:{},
    extraReducers: (builder) => {
        builder.addCase(fetchData.pending,(state)=>{
            state.isLoading= true;
            state.error = null;
        })
        .addCase(fetchData.fulfilled,(state,action)=>{
            state.isLoading= false;
            state.data = action.payload
        })
        .addCase(fetchData.rejected,(state,action)=>{
            state.isLoading = false;
            state.error = action.error.message
        })
    }
})

export const actions = toggleSlice.actions

const reducers = {
    toggle:toggleSlice.reducer,
    data:dataSlice.reducer
}

const store  = configureStore({
    reducer: reducers
})

export default store