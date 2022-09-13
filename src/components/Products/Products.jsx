import React from 'react';
import { AnimatePresence } from 'framer-motion';
import { CardsWrapper, MWrapper, ProductsTitle, ProductsTop } from './styles/StyledProducts';
import Сategories from "../Сategories/Сategories";
import Sorting from '../Sorting/Sorting';
import Card from '../Card/Card';
import CardSkeleton from '../Card/CardSkeleton';

const Products = props => {
    console.log();
    const loading = props.pizzas.loading;
    const hidden = props.hiddenOpacity;
    const visible = props.visibleOpacity;

    return (
        <AnimatePresence>
            <MWrapper
                initial={hidden}
                animate={visible}
                exit={hidden}
                transition={{ duration: 0.4 }}
            >
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
            </MWrapper>
        </AnimatePresence>
    );
};

export default Products;
