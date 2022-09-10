import React from 'react';
import Products from '../../components/Products/Products';

const HomePages = props => {
    console.log();

    return (
        <>
            <Products
                {...props}
            />
        </>
    );
};

export default HomePages;
