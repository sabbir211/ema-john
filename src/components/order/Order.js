import React from 'react';
import { Link } from 'react-router-dom';
import useCart from '../../hooks/useCart';
import useProduct from '../../hooks/useProduct';
import { removeFromDb } from '../../utilities/fakedb';
import Cart from '../cart/Cart';
import OrderReview from '../orderReview/OrderReview';

const Order = () => {
    const [products] = useProduct()
    const [cart, setCart] = useCart(products)
    const removeFromCartHandler = (id) => {
        const withoutMatchedItem = cart.filter(item => item.id !== id)
        setCart(withoutMatchedItem);
        removeFromDb(id)
    }
    return (
        <div className='flex'>
            <div className='w-3/4'>
                {
                    cart.map(product => <OrderReview product={product} key={product.id} removeFromCartHandler={removeFromCartHandler}></OrderReview>)
                }
            </div>
            <div className='p-4 cartContainer md:sticky md:top-0 order-first md:order-none h-72 md:h-screen md:mr-10'>
                <Cart cart={cart} >
                    <Link to="/inventory"><button className='block bg-red-300 px-1 py-2 m-4 rounded-md ml-0'>Manage Inventory</button></Link>
                </Cart>
            </div>
        </div>
    );
};

export default Order;