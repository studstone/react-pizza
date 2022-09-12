import React from 'react';
import { CardsWrapper, ProductsTitle, ProductsTop, Wrapper } from './styles/StyledProducts';
import Сategories from "../Сategories/Сategories";
import Sorting from '../Sorting/Sorting';
import Card from '../Card/Card';
import CardSkeleton from '../Card/CardSkeleton';

const Products = props => {
    console.log();
    const loading = props.pizzas.loading;

    return (
        <Wrapper>
            <ProductsTop>
                <Сategories
                    {...props}
                />
                <Sorting
                    {...props}
                />
            </ProductsTop>
            <ProductsTitle>Все пиццы</ProductsTitle>
            <CardsWrapper>
                {
                    loading ?
                        <CardSkeleton /> :
                        <Card
                            {...props}
                        />
                }
            </CardsWrapper>
        </Wrapper>
    );
};

export default Products;
