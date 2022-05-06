import React from 'react';
import useItems from '../../hook/useItems';
import Item from '../Item/Item';

const Items = () => {
    const [items, setItems] = useItems()
    return (
        <div>
            <div className='items-container'>
                <h1 className='d-flex justify-content-center'>Inventory Sports Items</h1>
                <div className='home-item'>
                    {
                        items.map(item=> <Item
                            key={item.id}
                            item={item}
                        >
                        </Item>
                        )
                    }
                </div>
            </div>
        </div>
    );
 }
export default Items;