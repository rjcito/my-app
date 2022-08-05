import React, { useState, useEffect } from 'react';

import HouseList from './HouseList';

const Home = () => {
    const [houses, setHouses] = useState(null);


useEffect(() => {
    fetch('http://localhost:3000/houses')
        .then((res) => res.json())
        .then((data) => {
            setHouses(data);
        });

}, []);

    return (  
        <div className="home">
            {houses && <HouseList houses={houses} title = "Current Houses:" />}
            {houses && <HouseList houses={houses.filter((house) => house.cleaner ==="Rosa")} title="Rosa's Houses" />}
        
        </div>
    );
}
 
export default Home;