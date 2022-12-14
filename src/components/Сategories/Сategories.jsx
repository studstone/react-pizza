import React from 'react';
import { TabItem, TabsList } from './styles/StyledCategories';


const –°ategories = ({ activeCategory, hendlerActiveCategory, categories }) => {
    console.log();

    return (
        <TabsList>
            {
                categories.map((tab, index) =>
                    <TabItem
                        key={index}
                        onClick={() => hendlerActiveCategory(index)}
                        active={activeCategory === index}
                    >
                        {tab}
                    </TabItem>)
            }
        </TabsList>
    );
};

export default –°ategories;
