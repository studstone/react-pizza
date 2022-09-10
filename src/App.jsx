import React from "react";
import Header from "./components/Header/Header";
import GlobalStyle, { Wrapper } from "./components/styles/GlobalStyle";
import { categories } from "./DB/categories";
import { useActiveIndex } from "./hooks/useActiveIndex";
import HomePages from "./pages/HomePage/HomePages";
import { pizzas } from './DB/pizzas';
import { useActiveOptions } from "./hooks/useActiveOptions";

function App() {
    const activeIndex = useActiveIndex();
    const activeOptions = useActiveOptions();

    return (
        <>
            <GlobalStyle />
            <Wrapper>
                <Header />
                <HomePages
                    {...activeIndex}
                    {...activeOptions}
                    categories={categories}
                    pizzas={pizzas}
                />
            </Wrapper>
        </>
    );
}

export default App;
