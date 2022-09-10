import React from 'react';

export const useActiveOptions = () => {
    const [activeTypes, setActiveTypes] = React.useState(0);
    const [activeSizes, setActiveSizes] = React.useState(0);

    const hendlerActiveTypes = index => {
        setActiveTypes(index);
    };

    const hendlerActiveSizes = index => {
        setActiveSizes(index);
    };

    return { activeTypes, activeSizes, hendlerActiveTypes, hendlerActiveSizes };
};
