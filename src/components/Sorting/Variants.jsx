import React from 'react';
import { VariantsItem, VariantsList } from '../Sorting/styles/StyledVariants';

const Variants = ({ variants, activeVariants, hendlerActiveVariant }) => {
    console.log();



    return (
        <VariantsList>
            {
                variants.map((variant, index) =>
                    <VariantsItem
                        key={index}
                        onClick={() => hendlerActiveVariant(index)}
                        active={activeVariants === index}
                    >
                        {variant}
                    </VariantsItem>)
            }
            {/* <VariantsItem>по пулярности</VariantsItem>
            <VariantsItem>по цене</VariantsItem>
            <VariantsItem>по алфавиту</VariantsItem> */}
        </VariantsList>
    );
};

export default Variants;
