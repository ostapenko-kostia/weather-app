import styled from "styled-components";

import Logo from "./Logo";
import {Search} from "./Search";

const HeaderStyles = styled.header`
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

export default function Header() {
    return (
        <HeaderStyles>
            <Logo />
            <div className="header-search-wrapper">
                <Search hiddenTablet={false} />
            </div>
        </HeaderStyles>
    );
}
