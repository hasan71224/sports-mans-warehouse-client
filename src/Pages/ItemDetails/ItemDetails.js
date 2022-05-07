import React from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import useItemDetails from '../../hook/useItemDetails';

const ItemDetails = () => {
    const { itemId } = useParams();
    const [item] = useItemDetails(itemId);

    const { _id, img, name, description, price, quantity, supplierName } = item;
    const navigate = useNavigate()

    return (
            <div className='item-details m-4'>
                {/* <h2 className='d-flex justify-content-center text-info mb-3'>Product Details</h2> */}
                <div className='d-flex justify-content-center'>
                    <img src={img} alt="" />
                </div>
                <div>
                    <h2>{name}</h2>
                    <p><strong>Description:</strong> {description}</p>
                    <p><strong>Price:</strong> {price}</p>
                    <p><strong>Quantity:</strong> {quantity}</p>
                    <p><strong>Supplier Name:</strong> {supplierName}</p>
                    <button className='btn btn-info w-25 mx-auto d-block mt-3'>Delivered</button>
                    <button className='btn btn-info w-25 mx-auto d-block mt-3'>Manage Stock</button>
                </div>
            </div>
    );
};

export default ItemDetails;