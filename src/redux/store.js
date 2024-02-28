import { configureStore } from "@reduxjs/toolkit";
import weather from "./Weather";

export const store = configureStore({
    reducer: {
        weather: weather,
    }
})

