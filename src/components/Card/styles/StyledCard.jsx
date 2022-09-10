import styled from "styled-components";
import { variable } from "../../styles/Variable";

export const CardWrapper = styled.li`
    max-width: 26rem;
`;

export const ImageBlock = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 26rem;
    height: 26rem;
    margin-bottom: 1.1rem;

    img {
        width: 100%;
        height: 100%;
    }
`;

export const PizzaName = styled.h3`
    font-weight: 800;
    font-size: 2.0rem;
    line-height: 2.4rem;
    text-align: center;
    letter-spacing: 0.01em;
    margin-bottom: 2.2rem;
    min-height: 4.8rem;
`;

export const Options = styled.ul`
    padding: 0.7rem 0.5rem;
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    gap: 7px 6px;
    background: #f3f3f3;
    border-radius: 1rem;
    margin-bottom: 1.7rem;
`;

export const Option = styled.li`
    flex-grow: 1;
    padding: 0.8rem 1.0rem;
    font-weight: 700;
    font-size: 1.4rem;
    line-height: 1.7rem;
    text-align: center;
    letter-spacing: 0.015em;
    background-color: ${({ active }) => (active ? '#FFFFFF' : '')};
    box-shadow: ${({ active }) => (active ? '0px 2px 4px rgba(0, 0, 0, 0.04)' : '')};
    border-radius: ${({ active }) => (active ? '0.5rem' : '')};
    cursor: pointer;
    transition: all 0.4s ease-in-out;
`;

export const CardBottom = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

export const Price = styled.span`
    font-weight: 700;
    font-size: 2.2rem;
    line-height: 2.7rem;
    letter-spacing: 0.015em;
`;

export const Button = styled.button`
    position: relative;
    width: ${({ active }) => (active ? '15.5rem' : '13.2rem')};
    padding: 1.1rem 0;
    display: flex;
    align-items: center;
    padding-left: 1.8rem;
    font-weight: 700;
    font-size: 16px;
    line-height: 19px;
    background-color: ${variable.buttonBgColor};
    color: ${variable.btnTextColor};
    border: 1px solid ${variable.buttonBgColor};
    border-radius: 30rem;
    cursor: pointer;
    transition: all 0.4s ease-in-out;

    :hover {
        background-color:  ${variable.buttonBgColorHover};
        color: ${variable.btnTextColorHover};

        span {
            background-color:  ${variable.buttonBgColor};
            color: ${variable.btnTextColor};
        }
    }
`;

export const Counter = styled.span`
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    right: 1.4rem;
    width: 2.2rem;
    height: 2.2rem;
    border-radius: 50%;
    font-weight: 700;
    font-size: 13px;
    line-height: 22px;
    background-color: ${variable.buttonBgColorHover};
    color: ${variable.btnTextColorHover};
    transition: all 0.4s ease-in-out;
`;
