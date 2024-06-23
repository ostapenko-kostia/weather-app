import styled from "styled-components";
import SearchIcon from "/icons/search.svg";

import { useRef, useState } from "react";
import useWeather from "../utility/useWeather";

const SearchWrapper = styled.div`
    form {
        display: flex;
        width: 100%;
        align-items: center;
        border-bottom: 1px solid #fff;
        padding: 13px;
        justify-content: space-between;
        input {
            border: none;
            background-color: transparent;
            color: #fff;
            font-size: 20px;
            width: 100%;
            &::placeholder {
                color: inherit;
                font-family: "Roboto", sans-serif;
                font-weight: 300;
            }
            &:focus-visible {
                outline: none;
            }
            &::-webkit-search-cancel-button {
                display: none;
            }
        }

        @media (max-width: 720px) {
            input {
                font-size: 14px;
            }
        }
    }
`;
const SearchButton = styled.div`
    button {
        background: transparent;
        border: none;
        cursor: pointer;
    }
    @media (max-width: 720px) {
        button img {
            width: 16px;
        }
    }
`;

interface Props {
    hiddenTablet: boolean;
}

export function Search({ hiddenTablet }: Props) {
    const [query, setQuery] = useState<string>("Київ");
    const searchInput = useRef<HTMLInputElement>(null);
    useWeather(query)

    return (
        <SearchWrapper className={hiddenTablet ? "hiddenTablet" : "shownTablet"}>
            <form
                autoComplete="off"
                onSubmit={(e) => {
                    e.preventDefault();
                    setQuery(searchInput.current!.value);
                }}
            >
                <input name="q" type="search" ref={searchInput} placeholder="Search Location..." />
                <SearchButton>
                    <button type="submit">
                        <img src={SearchIcon} />
                    </button>
                </SearchButton>
            </form>
        </SearchWrapper>
    );
}
