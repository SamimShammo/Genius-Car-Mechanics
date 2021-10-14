import React from 'react';
import { useParams } from 'react-router';

const Booking = () => {
    const {userId} = useParams()
    return (
        <div>
            
            <h2>This is Booking Number {userId}</h2>
        </div>
    );
};

export default Booking;