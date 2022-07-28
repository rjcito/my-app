import React from 'react';

const HouseList = ({ houses, title }) => {
    return (  
        <div className="blog-list">
            <h2>{title}</h2>
            {houses.map((house) => (
                <div className="house-preview" key={house.id}>
                    <h3>Address: {house.address}</h3>
                    <h4>Cleaner: {house.cleaner}</h4>
                    <h4>Day of the Week: {house.dayofweek}</h4>
                    

                </div>
            ))}
        </div>
    );
}
 
export default HouseList;