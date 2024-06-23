import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { IWeather, TypeWeatherParams } from "../../interfaces";
import { setWeather } from "../slices/weatherSlice";

const BASE_URL = import.meta.env.VITE_WEATHER_BASE_URL;
const API_KEY = import.meta.env.VITE_OPENWEATHER_API_KEY;

export const weatherApi = createApi({
    reducerPath: "weatherApi",
    baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
    endpoints: (builder) => ({
        getWeather: builder.query<IWeather, TypeWeatherParams>({
            keepUnusedDataFor: 0,
            query: (params) => {
                const { q } = params || {};
                return {
                    url: "weather",
                    params: {
                        appid: API_KEY,
                        q
                    },
                };
            },
            async onQueryStarted(_arg, {dispatch, queryFulfilled}) {
                const result = await queryFulfilled;
                const data = result.data;

                dispatch(setWeather(data))
            }
        }),
    }),
});

export const { useGetWeatherQuery } = weatherApi;
