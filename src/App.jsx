import React from "react";
import Header from "./components/Header/Header";
import GlobalStyle, { Wrapper } from "./components/styles/GlobalStyle";
import { categories } from "./DB/categories";
import { useActiveIndex } from "./hooks/useActiveIndex";
import HomePages from "./pages/HomePage/HomePages";
import { pizzas } from './DB/pizzas';
import { useActiveOptions } from "./hooks/useActiveOptions";
import { useSorting } from "./hooks/useSorting";

function App() {
    const activeIndex = useActiveIndex();
    const activeOptions = useActiveOptions();
    const activeSorting = useSorting();

    return (
        <>
            <GlobalStyle />
            <Wrapper>
                <Header />
                <HomePages
                    {...activeIndex}
                    {...activeOptions}
                    {...activeSorting}
                    categories={categories}
                    pizzas={pizzas}
                />
            </Wrapper>
        </>
    );
}

export default App;
