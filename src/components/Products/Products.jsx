import React from 'react';
import { CardsWrapper, ProductsTitle, ProductsTop, Wrapper } from './styles/StyledProducts';
import Сategories from "../Сategories/Сategories";
import Sorting from '../Sorting/Sorting';
import Card from '../Card/Card';

const Products = () => (
    <Wrapper>
        <ProductsTop>
            <Сategories />
            <Sorting />
        </ProductsTop>
        <ProductsTitle>Все пиццы</ProductsTitle>
        <CardsWrapper>
            <Card />
        </CardsWrapper>
    </Wrapper>
);

export default Products;
