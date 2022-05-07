import React from 'react';
import { useForm } from 'react-hook-form';

const AddItem = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();

    const onSubmit = data => {
        console.log(data);
        const url = `http://localhost:5000/item`;
        fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(result => {
                console.log(result);
            })
    };
    return (
        <div className='w-50 mx-auto'>
            <h2 className='d-flex justify-content-center m-3'>Add New Sports Item</h2>
            <form className='d-flex flex-column' onSubmit={handleSubmit(onSubmit)}>
                <input className='mb-2' placeholder='Name' {...register("name")} />
                <textarea input className='mb-2' placeholder='Description' {...register("description")} />
                <input className='mb-2' placeholder='Supplier Name' {...register("supplierName")} />
                <input className='mb-2' placeholder='Quantity' type="number" {...register("quantity")} />
                <input className='mb-2' placeholder='Price' type="number" {...register("price")} />
                <input className='mb-2' placeholder='Photo Url' type="text" {...register("img")} />
                <input type="submit" value='Add Item' />
            </form>
        </div>
    );
};

export default AddItem;