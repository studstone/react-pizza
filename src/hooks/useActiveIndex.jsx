import React from 'react';

export const useActiveIndex = () => {
    const [activeIndex, setActiveIndex] = React.useState(0);

    const hendlerActive = index => {
        setActiveIndex(index);
    };

    return { activeIndex, hendlerActive };
};
