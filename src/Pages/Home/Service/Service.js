import React from 'react';
import './Service.css'

const Service = ({service}) => {
    const {name, img, description, price }  = service
    return (
        <div className="service shadow">
            <img src={img} alt="" />
            <h4>{name}</h4>
            <h5>Price: {price}</h5>
            <p>{description}</p>
        </div>
    );
};

export default Service;