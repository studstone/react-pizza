import React from 'react';
import {
    Button, CardBottom, CardWrapper, Counter, ImageBlock, Option, Options, OptionsWrapper, PizzaName,
    Price
} from './styles/StyledCard';

const Card = ({ pizzas }) => {
    console.log();
    const typesName = ['тонкое', 'традиционное'];

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
                        <OptionsWrapper>
                            <Options>
                                {
                                    pizza.types.map((item, index) =>
                                        <Option key={index}>{typesName[item]}</Option>
                                    )
                                }
                            </Options>
                            <Options>
                                {
                                    pizza.sizes.map((item, index) =>
                                        <Option key={index}>{item} см.</Option>
                                    )
                                }
                            </Options>
                        </OptionsWrapper>
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
