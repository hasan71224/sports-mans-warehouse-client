import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Item.css'

const Item = ({ item }) => {
    const {_id, img, name, description, price, quantity, supplierName } = item;
    const navigate = useNavigate()

    const navigateToItemDetails = (_id) =>{
        navigate(`item/${_id}`)
    }

    return (
        <div className='item-details'>
            <div className='d-flex justify-content-center'>
                <img src={img} alt="" />
            </div>
            <div>
                <h2>{name}</h2>
                <p><strong>Description:</strong> {description}</p>
                <p><strong>Price:</strong> {price}</p>
                <p><strong>Quantity:</strong> {quantity}</p>
                <p><strong>Supplier Name:</strong> {supplierName}</p>
                <button onClick={()=>navigateToItemDetails(_id)} className='btn btn-info w-50 mx-auto d-block mt-3'>Manage Stock</button>
            </div>
        </div>
    );
};

export default Item;