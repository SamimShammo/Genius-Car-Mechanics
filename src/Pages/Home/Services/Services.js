import React, { useEffect, useState } from 'react';
import Service from '../Service/Service';
import './Services.css'

const Services = () => {
    const [Services, setServices] = useState([])
    useEffect(() => {
        fetch('services.json')
        .then(res => res.json())
        .then(data => setServices(data))

    }, [])

    return (
      <div id="services">
      <h2 className="text-primary">Our Services</h2>
        <div className="services-container" >
          
          {
             Services.map(service => <Service
             key={service.id}
             service={service}
             ></Service>)
          }
      </div>
      </div>
    );
};

export default Services;