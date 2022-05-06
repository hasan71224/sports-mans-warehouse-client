import React from 'react';
import './Item.css'

const Item = ({ item }) => {
    const { id, img, name, description, price, quantity, supplierName } = item;
    return (
        <div className='item-details'>
            <div className='d-flex justify-content-center'>
                <img src={img} alt="" />
            </div>
            <div>
                <h2> {name}</h2>
                <p><strong>Description:</strong> {description}</p>
                <p><strong>Price:</strong> {price}</p>
                <p><strong>Quantity:</strong> {quantity}</p>
                <p><strong>Supplier Name:</strong> {supplierName}</p>
            </div>
        </div>
    );
};

export default Item;