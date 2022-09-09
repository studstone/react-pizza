import React from "react";
import Header from "./components/Header/Header";
import GlobalStyle, { Wrapper } from "./components/styles/GlobalStyle";
import HomePages from "./pages/HomePage/HomePages";

function App() {
    return (
        <>
            <GlobalStyle />
            <Wrapper>
                <Header />
                <HomePages />
            </Wrapper>
        </>
    );
}

export default App;
