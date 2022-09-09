import React from 'react';
import { TabItem, TabsList } from './styles/StyledCategories';


const Сategories = () => {
    console.log();

    return (
        <TabsList>
            <TabItem active>Все</TabItem>
            <TabItem>Мясные</TabItem>
            <TabItem>Вегетарианские</TabItem>
            <TabItem>Гриль</TabItem>
            <TabItem>Острые</TabItem>
            <TabItem>Закрытые</TabItem>
        </TabsList>
    );
};

export default Сategories;
