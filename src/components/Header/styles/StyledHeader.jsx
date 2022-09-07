import styled from "styled-components";
import { variable } from "../../styles/Variable";

export const HeaderWrapper = styled.header`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 4.9rem 3.8rem 3.5rem 7.7rem;
    border-bottom: 0.1rem solid #F7F7F7;
`;

export const LogoLink = styled.a`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 31.6rem;
`;

export const LogoImg = styled.img`
    width: 3.8rem;
    height: 3.8rem;
`;

export const LogoDescription = styled.div`
    display: flex;
    flex-direction: column;
`;

export const HeaderTitle = styled.h1`
    font-weight: 800;
    font-size: 2.4rem;
    line-height: 2.9rem;
    letter-spacing: 0.01em;
    color: ${variable.logoPrimaryTextColor};
`;

export const HeaderSubTitle = styled.p`
    font-weight: 400;
    font-size: 16px;
    line-height: 19px;
    color: ${variable.logoSecondaryTextColor};
`;

export const CartWrapper = styled.div`
    cursor: pointer;
    padding: 1.2rem 2.2rem 1.2rem 2.2rem;
    background-color: ${variable.buttonBgColor};
    border-radius: 3rem;
    color: ${variable.btnTextColor};
    border: 1px solid #EB5A1E;
    transition: all 0.4s ease-in-out;

    :hover {
        background-color: ${variable.buttonBgColorHover};
        color: ${variable.btnTextColorHover};
        border: 1px solid #EB5A1E;

        span:nth-child(2) {
            background-color: rgba(235, 90, 30, 0.25);
        }

        svg {
            path {
                stroke: ${variable.btnTextColorHover};
            }
        }
    }
`;

export const CartBtn = styled.a`
    display: flex;
    align-items: center;
    font-weight: 700;
    font-size: 1.6rem;

    svg {
        margin-top: -0.1rem;
        margin-right: 0.6rem;

        path {
            transition: stroke 0.4s ease-in-out;
        }
    }
`;

export const BorderRight = styled.span`
    width: 0.1rem;
    height: 2.5rem;
    background-color: rgba(255, 255, 255, 0.25);
    margin: 0 1.3rem;
    transition: all 0.4s ease-in-out;
`;
