import styled from "styled-components";

export const SortingWrapper = styled.div`
    position: relative;
    display: flex;
    align-items: center;
    cursor: pointer;

    svg {
        margin-right: 0.7rem;
        transform: ${({ active }) => (active ? 'rotate(180deg)' : 'rotate(0)')};
        transition: all 0.4s ease-in-out;
    }
`;

export const SortingText = styled.p`
    font-weight: 700;
    font-size: 1.4rem;
    line-height: 1.7rem;
    letter-spacing: 0.015em;
    margin-right: 0.8rem;
`;

export const SortingVariable = styled.span`
    font-size: 1.4rem;
    line-height: 1.7rem;
    letter-spacing: 0.015em;
    color: #FE5F1E;
    border-bottom: 1px dashed #FE5F1E;
`;
