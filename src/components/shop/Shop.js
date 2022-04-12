import React from 'react';
import Cart from '../cart/Cart';
import Product from '../product/Product';
import { addToDb, deleteShoppingCart } from '../../utilities/fakedb';
import "./shop.css"
import useProduct from '../../hooks/useProduct';
import useCart from '../../hooks/useCart';
import { useNavigate } from 'react-router-dom';
const Shop = () => {
    const [products] = useProduct()
    const [cart, setCart] = useCart(products)
    const addToCartHandler = (selectedProduct) => {
        let newCart = [];
        const exists = cart.find(product => product.id === selectedProduct.id);
        if (!exists) {
            selectedProduct.quantity = 1;
            newCart = [...cart, selectedProduct];
        }
        else {
            const rest = cart.filter(product => product.id !== selectedProduct.id);
            exists.quantity = exists.quantity + 1;
            newCart = [...rest, exists];
        }

        setCart(newCart);
        addToDb(selectedProduct.id);
    }
    const resetCartHandler = () => {
        setCart([])
        deleteShoppingCart()
    }
    const navigate = useNavigate()
    const goOrder = () => {
        navigate('/order')
    }
    return (
        <div className='shopbody grid  md:grid-cols-3'>
            <div className='products grid md:grid-cols-3 gap-4 col-span-2 '>
                {
                    products.map(product => <Product handler={addToCartHandler} key={product.id} product={product}></Product>)
                }
            </div>
            <div className='cartContainer md:sticky md:top-0 order-first md:order-none h-72 md:h-screen md:mr-10'>
                <h3 style={{ textAlign: "center" }} className="text-3xl">Order summary</h3>
                <Cart cart={cart} resetCartHandler={resetCartHandler}>
                    <button onClick={goOrder} className='block bg-red-300 py-2 px-3 m-4 rounded-md ml-0'>Review Order</button>
                </Cart>
            </div>
        </div>
    );
};

export default Shop;