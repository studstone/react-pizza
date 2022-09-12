import styled from "styled-components";

export const VariantsList = styled.ul`
    position: absolute;
    bottom: 0;
    right: 0;
    width: 13.2rem;
    box-shadow: 0px 5px 15px rgba(0, 0, 0, 0.09);
    border-radius: 1rem;
    z-index: 10;
    transform: translateY(100%);
`;

export const VariantsItem = styled.li`
    padding: 1rem 0 1rem 1.4rem;
    font-weight: ${({ active }) => (active ? '700' : '400')};;
    font-size: 1.4rem;
    line-height: 1.7rem;
    letter-spacing: 0.015em;
    color: ${({ active }) => (active ? '#FE5F1E' : 'inherit')};
    background-color: ${({ active }) => (active ? 'rgba(254, 95, 30, 0.05)' : 'transparent')};
    transition: all 0.2s ease-in-out;

    :hover {
        color: #FE5F1E;
        background-color: rgba(254, 95, 30, 0.05);
    }
`;
