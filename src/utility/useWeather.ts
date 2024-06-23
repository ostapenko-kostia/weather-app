import { useAppSelector } from "../store";
import { useGetWeatherQuery } from "../store/services/weatherApi";

export default function useWeather(query: string) {
    useGetWeatherQuery({ q: query });
    const weatherCondition = useAppSelector((state) => state.weather.weather)
        .weather?.find(() => true)
        ?.main.toLowerCase();
    if (
        weatherCondition == "mist" ||
        weatherCondition == "smoke" ||
        weatherCondition == "haze" ||
        weatherCondition == "dust" ||
        weatherCondition == "fog" ||
        weatherCondition == "sand" ||
        weatherCondition == "ash" ||
        weatherCondition == "squall" ||
        weatherCondition == "tornado" ||
        weatherCondition == "drizzle"
    ) {
        document.querySelector(
            "body"
        )!.style.backgroundImage = `url(/images/backgrounds/drizzle.jpg)`;
    } else {
        document.querySelector(
            "body"
        )!.style.backgroundImage = `url(/images/backgrounds/${weatherCondition}.jpg)`;
    }
}
