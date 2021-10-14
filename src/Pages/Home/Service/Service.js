import React from 'react';
import { Link } from 'react-router-dom';
import './Service.css'

const Service = ({service}) => {
    const {id, name, img, description, price }  = service
    return (
        <div className="service shadow">
            <img src={img} alt="" />
            <h4>{name}</h4>
            <h5>Price: {price}</h5>
            <p>{description}</p>
            <Link to={`booking/${id}`}>
                <button className="btn btn-outline-primary">Booking</button>
            </Link>
        </div>
    );
};

export default Service;