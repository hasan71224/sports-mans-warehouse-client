import React from 'react';
import { Button } from 'react-bootstrap';
import { Link, useParams } from 'react-router-dom';
import useItemDetails from '../../hook/useItemDetails';

const ItemDetails = () => {
    const { itemId } = useParams();
    const [item] = useItemDetails(itemId)
    
    return (
        <div>
            <h3>This is Item details: {item.name}</h3>
            <Link to={`/checkout/${itemId}`}>
                <div className='text-center'>
                    <Button className='btn btn-primary'>Proceed CheckOut</Button>
                </div>
            </Link>
        </div>
    );
};

export default ItemDetails;