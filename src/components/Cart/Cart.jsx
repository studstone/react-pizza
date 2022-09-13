import React from 'react';
import { AnimatePresence } from 'framer-motion';
import { CartLink, CartText, CartTitle, MCartWrapper, TitleWrapper } from './style/StyledCart';
import emoji from '../../assets/images/emoji.png';
import cartImage from '../../assets/images/cart-image.svg';

const Cart = ({ hiddenOpacity, visibleOpacity }) => {
    console.log();
    return (
        <AnimatePresence>
            <MCartWrapper
                initial={hiddenOpacity}
                animate={visibleOpacity}
                exit={hiddenOpacity}
                transition={{ duration: 0.4 }}
            >
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
            </MCartWrapper>
        </AnimatePresence>
    );
};

export default Cart;
