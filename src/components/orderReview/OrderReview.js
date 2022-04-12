import { faTrashCan } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const OrderReview = ({ product, removeFromCartHandler }) => {
    const { img, price, quantity, name, shipping, id } = product
    return (
        <div className='w-1/2 mx-auto flex m-6 bg-slate-300 items-center '>
            <div className='w-3/12'>
                <img src={img} alt='' />
            </div>
            <div className='flex justify-between items-center w-3/4 p-4'>
                <div>
                    <h2 title={name}>{name.length > 20 ? name.slice(0, 20) + "..." : name}</h2>
                    <p>Price: {price}$</p>
                    <p>Quantity:{quantity}</p>
                    <p>Shipping Charge:{shipping}$</p>
                </div>
                <div>
                    <button onClick={() => removeFromCartHandler(id)} className=' text-2xl text-cyan-600 bg-slate-200 px-3 py-2 rounded-full' >
                        <FontAwesomeIcon icon={faTrashCan}></FontAwesomeIcon>
                    </button>
                </div>
            </div>



        </div>


    );
};

export default OrderReview;