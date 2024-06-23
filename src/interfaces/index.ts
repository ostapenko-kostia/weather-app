type TypeWeatherMain = {
    temp: number;
    temp_max: number;
    temp_min: number;
    humidity: number;
};

type TypeWeatherCoord = {
    lat: number | undefined | null;
    lon: number | undefined | null;
};

type TypeWeatherWeather = {
    icon: string | undefined | null;
    description: string | undefined | null;
    main: string;
};

type TypeWeatherClouds = {
    all: number | undefined;
}

type TypeWeatherWind = {
    speed: number;
    deg: number;
}

export interface IWeather {
    name: string | undefined | null;
    coord: TypeWeatherCoord;
    main: TypeWeatherMain;
    weather: TypeWeatherWeather[];
    clouds: TypeWeatherClouds;
    wind: TypeWeatherWind;
}

export type TypeWeatherParams = {
    q: string;
};
