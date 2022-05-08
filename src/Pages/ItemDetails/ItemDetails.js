import userEvent from '@testing-library/user-event';
import React from 'react';
import { Button, FormControl, InputGroup } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, useNavigate, useParams } from 'react-router-dom';
import auth from '../../firebase.init';
import useItemDetails from '../../hook/useItemDetails';
import useItems from '../../hook/useItems';

const ItemDetails = () => {
    const { itemId } = useParams();
    const [item] = useItemDetails(itemId);
    const [user] = useAuthState(auth);
    const [items, setItems] = useItems();

    const { _id, img, name, description, price, quantity, supplierName } = item;
    const navigate = useNavigate()


    const deliveredItem = id => {
        const proceed = window.confirm("Are You Sure?");
        if (proceed) {
            const url = `https://pacific-gorge-29321.herokuapp.com/item/${id}`
            fetch(url, {
                method: 'PUT'
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                })
        }
    }


    return (
        <div className='item-details m-4'>
            {/* <h2 className='d-flex justify-content-center text-info mb-3'>Product Details</h2> */}
            <div className='d-flex justify-content-center'>
                <img src={img} alt="" />
            </div>
            <div>
                <h2>{name}</h2>
                <p><strong>User Email:</strong> {user?.email}</p>
                <p><strong>Description:</strong> {description}</p>
                <p><strong>Price:</strong> {price}</p>
                <p><strong>Quantity:</strong> {quantity}</p>
                <p><strong>Supplier Name:</strong> {supplierName}</p>
                <button onClick={() => deliveredItem(_id)} className='btn btn-info w-25 mx-auto d-block mt-3'>Delivered</button>

                <div className='w-25 mx-auto d-block mt-3'>
                <InputGroup className="mb-3">
                    <FormControl
                        placeholder="Enter Quantity"
                        aria-label="Recipient's username"
                        aria-describedby="basic-addon2"
                    />
                    <Button className='btn btn-info text-dark' variant="outline-secondary" id="button-addon2">
                        Button
                    </Button>
                </InputGroup>
                </div>
                

            </div>
        </div>
    );
};

export default ItemDetails;