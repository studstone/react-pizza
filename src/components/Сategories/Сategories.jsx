import React from 'react';
import { TabItem, TabsList } from './styles/StyledCategories';


const Сategories = ({ activeIndex, hendlerActive, categories }) => {
    console.log();

    return (
        <TabsList>
            {
                categories.map((tab, index) =>
                    <TabItem
                        key={index}
                        onClick={() => hendlerActive(index)}
                        active={activeIndex === index}
                    >
                        {tab}
                    </TabItem>)
            }
        </TabsList>
    );
};

export default Сategories;
