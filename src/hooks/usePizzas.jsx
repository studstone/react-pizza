import React from 'react';

export const usePizzas = () => {
    const [pizzas, setPizzas] = React.useState([]);
    const [loading, setLoading] = React.useState(true);


    React.useEffect(() => {
        fetch('https://631f1de822cefb1edc4341b2.mockapi.io/pizzas')
            .then(res => res.json())
            .then(arr => {
                setPizzas(arr);
                setLoading(false);
            });
    }, []);

    return { pizzas, loading };
};
