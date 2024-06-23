import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { IWeather } from "../../interfaces";

interface State {
    weather: IWeather;
}

const initialState: State = {
    weather: {
        name: "",
        coord: { lat: 0, lon: 0 },
        main: { temp: 0, temp_max: 0, temp_min: 0, humidity: 0 },
        weather: [],
        clouds: { all: 0 },
        wind: { speed: 0, deg: 0 },
    },
};

const weatherSlice = createSlice({
    name: "weather",
    initialState,
    reducers: {
        setWeather: (state, action: PayloadAction<IWeather>) => {
            state.weather = action.payload;
        },
    },
});

export const { setWeather } = weatherSlice.actions;

export default weatherSlice.reducer;
