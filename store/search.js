import { configureStore,createAsyncThunk,createSlice} from "@reduxjs/toolkit"
import axios from "axios"

export const fetchData = createAsyncThunk(
    "fetchData", async (data) => {
        try {
            const response = await axios.get(`https://api.dictionaryapi.dev/api/v2/entries/en/${data}`);
            return response.data
        } catch (error) {
            console.log(error)
        }
        
    }
)

const searchSlice = createSlice({
    name:"search",
    initialState:{data:"",loading:false,error:null},
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

export const selectData = (state) => state.search.data;

const store = configureStore({
    reducer:searchSlice.reducer
})

export default store;