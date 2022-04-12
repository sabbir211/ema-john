import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import "./product.css"
import { faCoffee, faShoppingCart } from '@fortawesome/free-solid-svg-icons'
const Product = (props) => {
    const { id, name, price, img, category, seller, ratings } = props.product
    return (
        <div className='productBody'>
            <img src={img} alt="" />
            <div >
                <h4>{name}</h4>
                <p>Price${price}</p>
                <div >
                    <small>Manufacturer:{seller}</small>
                    <br />
                    <small className='mb-6'>Ratting:{ratings}</small>
                </div>
            </div>
            <button className='cartBtn' onClick={() => props.handler(props.product)}>Add to cart <FontAwesomeIcon icon={faShoppingCart} /> </button>




        </div>
    );
};

export default Product;