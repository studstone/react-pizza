import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../components/Header/Header';
import GlobalStyle, { Wrapper } from '../components/styles/GlobalStyle';

const Loyout = () => {
    console.log();
    return (
        <>
            <GlobalStyle />
            <Wrapper>
                <Header />
                <Outlet />
            </Wrapper>
        </>
    );
};

export default Loyout;
