import React from 'react';
import useItems from '../../../hook/useItems';
import Item from '../../Item/Item';
import './HomeItems.css'

const HomeItems = () => {
    const [items, setItems] = useItems()
    return (
        <div>
            <div className='item-container'>
                <h1 className='d-flex justify-content-center'>Inventory Sports Items</h1>
                <div className='home-item'>
                    {
                        items.slice(0, 6).map(item=> <Item
                            key={item.id}
                            item={item}
                        >
                        </Item>
                        )
                    }
                </div>
                <div className='d-flex justify-content-center'>

                <a href="/item">See All Items</a>
                </div>
            </div>
        </div>
    );
};

export default HomeItems;