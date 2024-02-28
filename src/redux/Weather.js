import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const getData = createAsyncThunk(
    "getWeather",
    async (place = "fergana") => {
        return fetch(`https://api.openweathermap.org/data/2.5/weather?q=${place}&units=metric&appid=56ff80ac3a0c0f5f2e37a0de8ad98800`)
        .then(res =>  
            res.json()
            // setLoading(false)
            )
        
        .catch(err => {
            console.log(err);
        })
    }
)

export const weatherSlice = createSlice({
    name: "weather",
    initialState: {data: [], status: ""},
    reducers: {},
    extraReducers: (builder) => {
        builder
        .addCase(getData.pending, (state) => {
            state.status ="pending"
        } )
        
        .addCase(getData.fulfilled, (state,actions) => {
            state.weather = actions.payload
            state.status ="succes"
        } )

        
        .addCase(getData.rejected, (state) => {
            state.status ="rejected"
        } )
    }
})

export default weatherSlice.reducer;

// 