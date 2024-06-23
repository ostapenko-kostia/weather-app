import styled from "styled-components";

import { useAppSelector } from "../store";

const Container = styled.div`
    margin-top: auto;
    color: #fff;
    display: flex;
    align-items: center;
    gap: 10px;
    @media (max-width: 720px) {
        h2 {
            font-size: 64px;
        }
        h3 {
            font-size: 30px;
        }
        span {
            font-size: 12px;
        }
        div img {
            width: 50px;
            aspect-ratio: 1;
        }
    }
`;

const Temperature = styled.h2`
    font-size: 140px;
    font-weight: 400;
    @media (max-width: 1024px) {
        font-size: 120px;
    }
`;
const Weather = styled.div`
    height: 5rem;
    aspect-ratio: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    img {
        width: 4.5rem;
    }
`;

const CityString = styled.h3`
    font-size: 60px;
    font-weight: 400;
`;

export default function MainInfo() {
    const weatherData = useAppSelector((state) => state.weather.weather);

    return (
        <Container>
            <Temperature>{Math.round(weatherData.main?.temp - 273)}°</Temperature>
            <CityString>{weatherData.name}</CityString>
            <Weather>
                <img src={`/icons/${weatherData.weather?.find(()=>true)?.icon}.svg  `} />
            </Weather>
        </Container>
    );
}
