import styled from "styled-components";
import { variable } from "../../styles/Variable";


export const TabsList = styled.ul`
    display: flex;
    align-items: center;
`;

export const TabItem = styled.li`
    padding: 1.4rem 2.7rem;
    background-color: ${({ active }) => (active ? `${variable.tabBgColorActive}` : `${variable.tabBgColor}`)};
    font-weight: 700;
    font-size: 1.6rem;
    line-height: 1.6rem;
    text-align: center;
    letter-spacing: 0.015em;
    color: ${({ active }) => (active ? `${variable.btnTextColor}` : `${variable.secondaryTextColor}`)};
    border-radius: 3rem;
    margin-right: 0.9rem;
    cursor: pointer;
    transition: all 0.4s ease-in-out;

    :last-child {
        margin-right: 0;
    }

    :hover {
        background-color: ${variable.tabBgColorActive};
        color: ${variable.btnTextColor};
    }
`;
