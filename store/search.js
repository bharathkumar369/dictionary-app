import { configureStore,createAsyncThunk,createSlice} from "@reduxjs/toolkit"
import axios from "axios"

export const fetchData = createAsyncThunk(
    "search/fetchData", async (word) => {
        try {
            const response = await axios.get(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`);
            return response.data
        } catch (error) {
            console.log(error.message)
            throw error;
        }
    }
)

const searchSlice = createSlice({
    name:"search",
    initialState:{data:null,loading:false,error:null},
    reducers:{
        
    },
    extraReducers:(builder)=>{
        builder.addCase(fetchData.pending,(state)=>{
            state.loading = true;
            state.error = null
        })
        .addCase(fetchData.fulfilled,(state,action)=>{

            state.loading = false;
            state.data = action.payload;
            state.error = null;
        })
        .addCase(fetchData.rejected,(state,action)=>{
            state.loading = false;
            state.error = action.error.message;
        })
    }
})


const store = configureStore({
    reducer:searchSlice.reducer
})

export default store;