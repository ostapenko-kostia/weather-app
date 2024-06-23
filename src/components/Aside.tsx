import styled from "styled-components";
import { Search } from "./Search";
import AsideWeatherCard from "./AsideWeatherCard";

import tempMaxIcon from "/icons/temp-max.svg";
import tempMinIcon from "/icons/temp-min.svg";
import humidityIcon from "/icons/humidity.svg";
import cloudyIcon from "/icons/cloudy.svg";
import { useAppSelector } from "../store";

const AsideWrapper = styled.aside`
    max-height: 100vh;
    overflow: hidden;
    overflow-y: auto;
    padding: 40px 30px;
    min-width: 450px;
    width: 40vw;
    backdrop-filter: blur(0.5em);
    display: flex;
    flex-direction: column;
    align-items: left;
    gap: 40px;
    border-left: 5px solid rgba(255, 255, 255, 0.14);
    &::-webkit-scrollbar {
        display: none;
    }
    @media (max-width: 1024px) {
        max-height: unset;
        min-height: 50vh;
        width: 100vw;
        border-left: none;
        border-top: 5px solid rgba(255, 255, 255, 0.14);
        padding-inline: 10vw;
    }
    @media (max-width: 470px) {
        min-width: unset;
    }
`;

const AsideBody = styled.div`
    display: flex;
    flex-direction: column;
    align-items: left;
    gap: 85px;
`;

const AsideWeatherCardStyles = styled.div`
    display: flex;
    flex-direction: column;
    gap: 30px;
    h5 {
        font-family: Roboto, sans-serif;
        font-size: 18px;
        text-transform: uppercase;
        font-weight: 500;
    }
    ul {
        display: inherit;
        flex-direction: inherit;
        gap: inherit;
        font-size: 18px;
        font-weight: 300;
        li {
            display: flex;
            align-items: center;
            justify-content: space-between;
            div {
                display: inherit;
                align-items: inherit;
                gap: 26px;
            }
        }
    }

    @media (max-width: 1024px) {
        text-align: center;
    }
    @media (max-width: 470px) {
        h5,
        ul {
            font-size: 14px;
        }
        img,
        .wind-direction {
            width: 26px;
            height: 26px;
            aspect-ratio: 1;
        }
    }
`;

// In Develop
// const AsideWeatherForecastItem = styled.li`
//     gap: 35px;
//     img {
//         width: 48px;
//         aspect-ratio: 1;
//     }
//     div {
//         margin-right: auto;
//         font-size: 18px;
//         flex-direction: column;
//         text-align: justify;
//         gap: 0 !important;
//         span:nth-child(1) {
//             font-weight: 400;
//         }
//     }
//     .fz24 {
//         font-size: 24px;
//     }
//     @media (max-width: 470px) {
//         div {
//             font-size: 16px;
//         }
//         .fz24 {
//             font-size: 20px;
//         }
//     }
// `;

const WindDirection = styled.div`
    width: 32px;
    height: 32px;
    border: 2px solid #fff;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    div {
        line-height: 0.5em;
    }
`;

export default function Aside() {
    const weatherData = useAppSelector((state) => state.weather.weather);

    return (
        <AsideWrapper>
            <Search hiddenTablet={true} />
            <AsideBody>
                <AsideWeatherCard title="Weather Details">
                    <AsideWeatherCardStyles>
                        <h5>{weatherData.weather?.find(() => true)?.description}</h5>
                        <ul>
                            <li>
                                <span>Temp max</span>
                                <div>
                                    {Math.round(weatherData.main?.temp_max - 273)}°
                                    <img src={tempMaxIcon} alt="Max temperature" />
                                </div>
                            </li>
                            <li>
                                <span>Temp min</span>
                                <div>
                                    {Math.round(weatherData.main?.temp_min - 273)}°
                                    <img src={tempMinIcon} alt="Min temperature" />
                                </div>
                            </li>
                            <li>
                                <span>Humidity</span>
                                <div>
                                    {weatherData.main?.humidity}%
                                    <img src={humidityIcon} alt="Humidity" />
                                </div>
                            </li>
                            <li>
                                <span>Cloudy</span>
                                <div>
                                    {weatherData.clouds?.all}%
                                    <img src={cloudyIcon} alt="Cloudy percent" />
                                </div>
                            </li>
                            <li>
                                <span>Wind</span>
                                <div>
                                    {Math.ceil(weatherData.wind?.speed)}km/h
                                    <WindDirection className="wind-direction">
                                        <div style={{rotate: `${weatherData.wind?.deg}deg`}}>↑</div>
                                    </WindDirection>
                                </div>
                            </li>
                        </ul>
                    </AsideWeatherCardStyles>
                </AsideWeatherCard>

                {/* In Develop */}
                {/* <AsideWeatherCard title="Today’s Weather Forecast">
                    <AsideWeatherCardStyles>
                        <ul>
                            <AsideWeatherForecastItem>
                                <img src={snowflakeIcon} />
                                <div>
                                    <span>09:00</span>
                                    <span>Snow</span>
                                </div>
                                <span className="fz24">19°</span>
                            </AsideWeatherForecastItem>
                            <AsideWeatherForecastItem>
                                <img src={snowflakeIcon} />
                                <div>
                                    <span>09:00</span>
                                    <span>Snow</span>
                                </div>
                                <span className="fz24">19°</span>
                            </AsideWeatherForecastItem>
                            <AsideWeatherForecastItem>
                                <img src={snowflakeIcon} />
                                <div>
                                    <span>09:00</span>
                                    <span>Snow</span>
                                </div>
                                <span className="fz24">19°</span>
                            </AsideWeatherForecastItem>
                            <AsideWeatherForecastItem>
                                <img src={snowflakeIcon} />
                                <div>
                                    <span>09:00</span>
                                    <span>Snow</span>
                                </div>
                                <span className="fz24">19°</span>
                            </AsideWeatherForecastItem>
                            <AsideWeatherForecastItem>
                                <img src={snowflakeIcon} />
                                <div>
                                    <span>09:00</span>
                                    <span>Snow</span>
                                </div>
                                <span className="fz24">19°</span>
                            </AsideWeatherForecastItem>
                        </ul>
                    </AsideWeatherCardStyles>
                </AsideWeatherCard> */}
            </AsideBody>
        </AsideWrapper>
    );
}
