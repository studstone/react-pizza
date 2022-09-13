import React from 'react';
import { CartLink, CartText, CartTitle, CartWrapper, TitleWrapper } from './style/StyledCart';
import emoji from '../../assets/images/emoji.png';
import cartImage from '../../assets/images/cart-image.svg';

const Cart = () => {
    console.log();
    return (
        <CartWrapper>
            <TitleWrapper>
                <CartTitle>Корзина пустая</CartTitle>
                <img src={emoji} alt="Emoji" />
            </TitleWrapper>
            <CartText>
                Вероятней всего, вы не заказывали ещё пиццу.
                Для того, чтобы заказать пиццу, перейди на главную страницу.
            </CartText>
            <img src={cartImage} alt="Cart" />
            <CartLink to='/'>Вернуться назад</CartLink>
        </CartWrapper>
    );
};

export default Cart;
