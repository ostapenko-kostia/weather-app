import { PropsWithChildren } from "react";
import styled from "styled-components";

const WeatherCard = styled.div`
    color: #fff;
    display: flex;
    flex-direction: column;
    align-items: left;
    gap: 50px;
    border-top: 1px solid #fff;
    padding-top: 40px;
    &:first-child {
        padding-top: 0;
        border-top: none;
    }
    
`;
const WeatherCardTitle = styled.h4`
    font-weight: 400;
    font-size: 18px;
    @media (max-width: 470px) {
        font-size: 14px;   
    }
    @media (max-width: 1024px) {
        text-align: center;
    }
`;
const WeatherCardBody = styled.div``;

interface Props extends PropsWithChildren {
    title: string;
}

export default function AsideWeatherCard({ title, children }: Props) {
    return (
        <WeatherCard>
            <WeatherCardTitle>{title}</WeatherCardTitle>
            <WeatherCardBody>{children}</WeatherCardBody>
        </WeatherCard>
    );
}
