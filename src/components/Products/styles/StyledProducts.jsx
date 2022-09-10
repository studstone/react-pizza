import styled from "styled-components";
import { variable } from "../../styles/Variable";

export const Wrapper = styled.section`
    padding: 4rem 4.8rem 9.6rem 6.7rem;
    min-height: 100vh;
`;

export const ProductsTop = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 3.2rem;
`;

export const ProductsTitle = styled.h1`
    font-weight: 700;
    font-size: 3.2rem;
    line-height: 3.9rem;
    letter-spacing: 0.01em;
    margin-bottom: 3.5rem;
`;

export const CardsWrapper = styled.ul`
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    gap: 3rem 6.16rem;
`;
