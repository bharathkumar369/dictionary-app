import { configureStore,createAsyncThunk,createSlice} from "@reduxjs/toolkit"


export const fetchData = createAsyncThunk(
    "fetchData", async (search) => {
        const res = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${search}`)
        const data = await res.json();
        return data;
    }
)



const searchSlice = createSlice({
    name:"search",
    initialState:{data:null,loading:false,error:null},
    reducers:{},
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