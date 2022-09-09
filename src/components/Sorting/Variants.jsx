import React from 'react';
import { VariantsItem, VariantsList } from '../Sorting/styles/StyledVariants';

const Variants = () => {
    console.log();

    return (
        <VariantsList>
            <VariantsItem>по пулярности</VariantsItem>
            <VariantsItem>по цене</VariantsItem>
            <VariantsItem>по алфавиту</VariantsItem>
        </VariantsList>
    );
};

export default Variants;
