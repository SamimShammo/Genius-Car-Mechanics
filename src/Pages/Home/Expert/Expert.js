import React from 'react';

const Expert = ({expert}) => {
    const {img, expertize, name} = expert;
    return (
        <div className="col-lg-6 col-md-6 col-sm-6 col-12 ">
            <img src={img} alt="" />
            <h3>{name}</h3>
            <p>{expertize}</p>
        </div>
    );
};

export default Expert;