import React from "react";
import { Routes, Route } from 'react-router-dom';
// import Header from "./components/Header/Header";
// import GlobalStyle, { Wrapper } from "./components/styles/GlobalStyle";
import { categories } from "./DB/categories";
import { useActiveIndex } from "./hooks/useActiveIndex";
import HomePages from "./pages/HomePage/HomePages";
import { useActiveOptions } from "./hooks/useActiveOptions";
import { useSorting } from "./hooks/useSorting";
import { opacity } from './components/animation/opacity';
import { usePizzas } from "./hooks/usePizzas";
// import Cart from "./components/Cart/Cart";
import Loyout from "./pages/Loyout";
import CartPages from "./pages/CartPages";

function App() {
    const activeIndex = useActiveIndex();
    const activeOptions = useActiveOptions();
    const activeSorting = useSorting();
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
                                {...activeIndex}
                                {...activeOptions}
                                {...activeSorting}
                                {...opacity}
                                categories={categories}
                                pizzas={pizzas}
                            />
                        }
                    />
                    <Route path="cart"
                        element={
                            <CartPages />
                        }
                    />
                </Route>
            </Routes>
        </>
    );
}

export default App;
