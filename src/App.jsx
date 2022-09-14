import React from "react";
import { Routes, Route } from 'react-router-dom';

import { categories } from "./DB/categories";
import { useActiveOptions } from "./hooks/useActiveOptions";
import { opacity } from './components/animation/opacity';
import { usePizzas } from "./hooks/usePizzas";

import Loyout from "./pages/Loyout";
import HomePages from "./pages/HomePage/HomePages";
import CartPages from "./pages/CartPages";

function App() {
    const activeOptions = useActiveOptions();
    const pizzas = usePizzas();
    console.log();

    return (
        <>
            <Routes>
                <Route path="/"
                    element={
                        <Loyout />
                    }
                >
                    <Route index
                        element={
                            <HomePages
                                // {...activeIndex}
                                {...activeOptions}
                                // {...activeSorting}
                                {...opacity}
                                categories={categories}
                                pizzas={pizzas}
                            />
                        }
                    />
                    <Route path="cart"
                        element={
                            <CartPages
                                {...opacity}
                            />
                        }
                    />
                </Route>
            </Routes>
        </>
    );
}

export default App;
