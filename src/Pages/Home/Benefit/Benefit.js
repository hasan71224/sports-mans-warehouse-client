import React from 'react';
import benefit from '../../../Images/benefit/benefit.jpg'

const Benefit = () => {
    return (
        <div className="container mt-5 bg-light rounded">
            <div class="row">
                <div class="col-sm-6">
                    <img className='w-100 rounded' src={benefit} alt="" />
                </div>
                <div class="col-sm-6 p-4">
                    <h2 className='text-primary'>Software that gives you <br /> the visibility you need.</h2>
                    <h5><li>Dashboard</li></h5>
                    <h5><li>Order Status</li></h5>
                    <h5><li>Shipment Tracking</li></h5>
                    <h5><li>Inventory Levels</li></h5>
                    <h5><li>Reporting Engine</li></h5>
                </div>
            </div>
        </div>
    );
};

export default Benefit;