import React from 'react';
import {
    Button, CardBottom, CardWrapper, Counter, ImageBlock, Option, Options, PizzaName,
    Price
} from './styles/StyledCard';

const Card = ({ pizzas }) => {
    console.log();
    const [active, setActive] = React.useState(false);

    return (
        <>
            {
                pizzas.map(pizza =>
                    <CardWrapper key={pizza.id}>
                        <ImageBlock>
                            <img src={pizza.imageUrl} alt="Pizza" />
                        </ImageBlock>
                        <PizzaName>{pizza.name}</PizzaName>
                        <Options>
                            <Option>тонкое</Option>
                            <Option>традиционное</Option>
                            {
                                pizza.sizes.map((item, index) =>
                                    <Option key={index}>{item} см.</Option>
                                )
                            }
                        </Options>
                        <CardBottom>
                            <Price>от {pizza.price} ₽</Price>
                            <Button>
                                + Добавить
                                {
                                    active &&
                                    <Counter>2</Counter>
                                }
                            </Button>
                        </CardBottom>
                    </CardWrapper >
                )
            }
        </>
    );
};

export default Card;
