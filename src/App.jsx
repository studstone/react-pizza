import React from "react";
import Header from "./components/Header/Header";
import GlobalStyle, { Wrapper } from "./components/styles/GlobalStyle";
import { categories } from "./DB/categories";
import { useActiveIndex } from "./hooks/useActiveIndex";
import HomePages from "./pages/HomePage/HomePages";
import { pizzas } from './DB/pizzas';

function App() {
    const activeIndex = useActiveIndex();

    return (
        <>
            <GlobalStyle />
            <Wrapper>
                <Header />
                <HomePages
                    {...activeIndex}
                    categories={categories}
                    pizzas={pizzas}
                />
            </Wrapper>
        </>
    );
}

export default App;
