import { getDefaultNormalizer } from '@testing-library/react';
import React from 'react';

export const usePizzas = () => {
    const [pizzas, setPizzas] = React.useState([]);
    const [loading, setLoading] = React.useState(true);

    const [activeCategory, setActiveCategory] = React.useState(0);

    const [openVariants, setOpenVariants] = React.useState(false);
    const [activeVariants, setAvtiveVariants] = React.useState({ name: 'пулярности', sortProperty: 'rating' });

    const hendlerActiveVariant = index => {
        setAvtiveVariants(index);
        setOpenVariants(false);
    };

    const hendlerActiveCategory = index => {
        setActiveCategory(index);
    };

    React.useEffect(() => {
        setLoading(true);
        fetch(`https://631f1de822cefb1edc4341b2.mockapi.io/pizzas?${activeCategory > 0 ? `category=${activeCategory}` : ''}&sortBy=${activeVariants.sortProperty}&order=${activeVariants.sortProperty === 'name' ? 'asc' : 'desc'}`)
            .then(res => res.json())
            .then(arr => {
                setPizzas(arr);
                setLoading(false);
            });
    }, [activeCategory, activeVariants]);

    return {
        pizzas, loading, activeCategory, hendlerActiveCategory, openVariants,
        setOpenVariants, activeVariants, hendlerActiveVariant
    };
};
