import React from 'react';
import { AnimatePresence } from 'framer-motion';
import { MVariantsList, VariantsItem } from '../Sorting/styles/StyledVariants';

const Variants = ({ variants, openVariants, activeVariants, hendlerActiveVariant, hidden, visible }) => {
    console.log();

    return (
        <AnimatePresence>
            {
                openVariants && <MVariantsList
                    initial={hidden}
                    animate={visible}
                    exit={hidden}
                    transition={{ duration: 0.4 }}
                >
                    {
                        variants.map((variant, index) =>
                            <VariantsItem
                                key={index}
                                onClick={() => hendlerActiveVariant(variant)}
                                active={activeVariants.sortProperty === variant.sortProperty}
                            >
                                {variant.name}
                            </VariantsItem>)
                    }
                </MVariantsList>
            }
        </AnimatePresence>
    );
};

export default Variants;
