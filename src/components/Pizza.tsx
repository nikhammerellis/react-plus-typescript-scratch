import React from 'react';
import PizzaCSS from './Pizza.module.css';
import { Pizza } from '../types';
import { AddToCartProps, useAddToCart, withAddToCart } from './AddToCart';

interface Props extends AddToCartProps {
    pizza: Pizza;
}

/**
 * Uses HOC component to utilize the cart functionality 
 * (Render Props example in SpecialOffer.tsx)
 */
const PizzaItem: React.FC<Props> = ({ pizza, addToCart }) => {
    //Custom Hook Example (use in place of HOC/get rid of HOC code bits)
    // const addToCart = useAddToCart();

    const handleAddToCartClick = () => {
        addToCart({
            id: pizza.id,
            name: pizza.name,
            price: pizza.price,
        });
    };

    return (
        <li className={PizzaCSS.container}>
            <h2>{pizza.name}</h2>
            <p>{pizza.description}</p>
            <p>{pizza.price}</p>
            <button type="button" onClick={handleAddToCartClick}>Add to Cart</button>
        </li>
    );
}

export default withAddToCart(PizzaItem);