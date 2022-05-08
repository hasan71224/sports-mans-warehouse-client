import axios from 'axios';
import { signOut } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
// import axiosPrivate from '../../api/axiosPrivate';
import auth from '../../firebase.init';
import useItems from '../../hook/useItems';

const MyItem = () => {
    const [items, setItems] = useItems();
    const [user] = useAuthState(auth);
    const navigate = useNavigate();
    const [products, setProducts] = useState([]);

    const handleDelete = id => {
        const proceed = window.confirm("Are You Sure?");
        if (proceed) {
            const url = `http://localhost:5000/item/${id}`
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    const remaining = items.filter(item => item._id !== id)
                    setItems(remaining)
                })
        }
    }

    useEffect(() => {
        const getProducts = async() => {
            const email = user?.email;
            const url = `http://localhost:5000/item?email=${email}`;
            try {
                // const { data } = await axiosPrivate.get(url);
                const {data} = await axios.get(url)
                setProducts(data)
            }
            catch (error) {
                console.log(error.message);
                if (error.response.status === 401 || error.response.status === 403) {
                    signOut(auth)
                    navigate('/login')
                }
            }
        }
        getProducts();
    }, [user])



    return (
        <>
            <div className='w-50 mx-auto my-3'>
                <h1>Your Total Product: {products.length}</h1>
                {/* {
                    products.map(product => <div key={product._id}>
                        <p>{product.email} : {product.service}</p>
                    </div>)
                } */}
            </div>

            <div className='w-50 mx-auto border border-dark p-3'>
                <h2>Manage your Sports Item</h2>
                {
                    items.map(item => <div className='border border-dark p-2 m-2 rounded-3 bg-info' key={item._id}>
                        <h6 className='fw-bolder'>{item.name} <button className='bg-danger text-light rounded ml-5' onClick={() => handleDelete(item._id)}>x</button></h6>
                    </div>)
                }
            </div>
        </>
    );
};

export default MyItem;