import React from 'react';
import {
    Button, CardBottom, CardWrapper, Counter, ImageBlock, Option, Options, PizzaName,
    Price
} from './styles/StyledCard';
import Pizza from '../../assets/images/pizza.png';

const Card = () => {
    console.log();
    const [active, setActive] = React.useState(false);

    return (
        <CardWrapper>
            <ImageBlock>
                <img src={Pizza} alt="Pizza" />
            </ImageBlock>
            <PizzaName>Сырный цыпленок</PizzaName>
            <Options>
                <Option>тонкое</Option>
                <Option>традиционное</Option>
                <Option>26 см.</Option>
                <Option>30 см.</Option>
                <Option>40 см.</Option>
            </Options>
            <CardBottom>
                <Price>от 395 ₽</Price>
                <Button>
                    + Добавить
                    {
                        active &&
                        <Counter>2</Counter>
                    }
                </Button>
            </CardBottom>
        </CardWrapper>
    );
};

export default Card;
