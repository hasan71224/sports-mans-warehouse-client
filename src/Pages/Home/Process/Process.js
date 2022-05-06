import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import process1 from '../../../Images/process/process1.png'
import process2 from '../../../Images/process/process2.png'
import process3 from '../../../Images/process/process3.png'
const Process = () => {
    return (
        <div className="container">
            <div className="row">
                <div className="col-sm">
                    
                    <div className="card" style={{width: "18rem"}}>
                        <img src={process1} className="card-img-top" alt="..."/>
                            <div className="card-body">
                                <h5 className="card-title">1. Connect</h5>
                                <p className="card-text">Connect your online store, import your products, then send us your inventory.</p>
                            </div>
                    </div>

                </div>

                <div className="col-sm">
                <div className="card" style={{width: "18rem"}}>
                        <img src={process2} className="card-img-top" alt="..."/>
                            <div className="card-body">
                                <h5 className="card-title">2. Store</h5>
                                <p className="card-text">We store your inventory in a combination of our fulfillment centers.</p>
                            </div>
                    </div>
                </div>

                <div className="col-sm">
                <div className="card" style={{width: "18rem"}}>
                        <img src={process3} className="card-img-top" alt="..."/>
                            <div className="card-body">
                                <h5 className="card-title">3 .Ship</h5>
                                <p className="card-text">As soon as a customer places an order, we ship it from the nearest fulfillment center.</p>
                            </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Process;