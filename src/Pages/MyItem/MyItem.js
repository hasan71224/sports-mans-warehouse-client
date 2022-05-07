import React from 'react';
import useItems from '../../hook/useItems';

const MyItem = () => {
    const [items, setItems] = useItems();

    const handleDelete = id =>{
        const proceed = window.confirm("Are You Sure?");
        if(proceed){
            const url = `http://localhost:5000/item/${id}`
            fetch(url, {
                method: 'DELETE'
            })
            .then(res=>res.json())
            .then(data=>{
                console.log(data);
                const remaining = items.filter(item => item._id !== id)
                setItems(remaining)
            })
        }
    }
    return (
        <div className='w-50 mx-auto'>
            <h2>Manage your Sports Item</h2>
            {
                items.map(item=> <div key={item._id}>
                    <h6>{item.name} <button onClick={()=>handleDelete(item._id)}>x</button></h6>
                </div>)
            }
        </div>
    );
};

export default MyItem;