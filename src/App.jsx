import React from "react";
import Header from "./components/Header/Header";
import GlobalStyle, { Wrapper } from "./components/styles/GlobalStyle";


function App() {
    return (
        <>
            <GlobalStyle />
            <Wrapper>
                <Header />
            </Wrapper>
        </>
    );
}

export default App;
