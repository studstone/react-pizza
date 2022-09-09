import React from "react";
import Header from "./components/Header/Header";
import Products from "./components/Products/Products";
import GlobalStyle, { Wrapper } from "./components/styles/GlobalStyle";

function App() {
    return (
        <>
            <GlobalStyle />
            <Wrapper>
                <Header />
                <Products />
            </Wrapper>
        </>
    );
}

export default App;
