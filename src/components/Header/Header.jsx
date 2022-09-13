import React from 'react';
import {
    BorderRight,
    CartBtn,
    CartWrapper,
    HeaderSubTitle, HeaderTitle, HeaderWrapper, LogoDescription,
    LogoImg, LogoLink
} from './styles/StyledHeader';
import Logo from '../../assets/images/logo.png';
import Cart from './Cart';

const Header = () => (
    <HeaderWrapper>
        <LogoLink to='/'>
            <LogoImg src={Logo} alt="Image: Logo" />
            <LogoDescription>
                <HeaderTitle>REACT PIZZA</HeaderTitle>
                <HeaderSubTitle>самая вкусная пицца во вселенной</HeaderSubTitle>
            </LogoDescription>
        </LogoLink>
        <CartWrapper>
            <CartBtn to='/cart'>
                <span>520 ₽</span>
                <BorderRight></BorderRight>
                <Cart />
                <span>3</span>
            </CartBtn>
        </CartWrapper>
    </HeaderWrapper>
);

export default Header;
