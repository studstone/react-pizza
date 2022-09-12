import React from 'react';

export const useSorting = () => {
    const [openVariants, setOpenVariants] = React.useState(false);
    const [activeVariants, setAvtiveVariants] = React.useState(0);

    const hendlerActiveVariant = index => {
        setAvtiveVariants(index);
        setOpenVariants(false);
    };

    return { openVariants, setOpenVariants, activeVariants, hendlerActiveVariant };
};
