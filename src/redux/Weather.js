import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const KEY = '56ff80ac3a0c0f5f2e37a0de8ad98800'

export const getData = createAsyncThunk(
    "getWeather",
    async (place) => {
        const base = "https://api.openweathermap.org/data/2.5/weather"
        const query = `?q= ${place}&units=metric&appid=${KEY}`

    return await fetch(base + query)
      .then(res => res.json())
        .catch(err => {
          console.log(err);
        })
    }
);

export const weatherSlice = createSlice({
    name: "weather",
    initialState: { weather: {}, status: "" },
    reducers: {},
    extraReducers: (builder) => {
      builder
        .addCase(getData.pending, (state) => {
          state.status = "pending";
        })
        .addCase(getData.fulfilled, (state, action) => {
          state.weather = action.payload;
          state.status = "success";
        })
        .addCase(getData.rejected, (state) => {
          state.status = "rejected";
        });
    },
  });

export default weatherSlice.reducer;

// 