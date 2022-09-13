import styled from "styled-components";
import { Link } from 'react-router-dom';

export const CartWrapper = styled.section`
    padding: ${({ active }) => (active ? '9.4rem 22.4rem 13.1rem 29.5rem' : '16.3rem 39.6rem')};
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`;

export const TitleWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 1rem;
`;

export const CartTitle = styled.h1`
    font-weight: 700;
    font-size: 3.2rem;
    line-height: 3.9rem;
    letter-spacing: 0.01em;
    margin-right: 1rem;
`;

export const CartText = styled.p`
    font-size: 1.8rem;
    line-height: 2.6rem;
    text-align: center;
    letter-spacing: 0.01em;
    color: #777777;
    margin-bottom: 4.7rem;
`;

export const CartLink = styled(Link)`
    padding: 1.4rem 3.8rem;
    background-color: #282828;
    border-radius: 3.0rem;
    font-weight: 700;
    font-size: 1.6rem;
    line-height: 1.9rem;
    letter-spacing: 0.015em;
    color: #FFFFFF;
    margin-top: 7.4rem;
    transition: all 0.4s ease-in-out;

    :hover {
        background-color: #464646;
    }
`;

