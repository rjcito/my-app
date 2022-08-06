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
        <div className="rosas-houses">

            <p1>{houses && <HouseList houses={houses} title = "All Houses:" />}</p1>
            <p1>{houses && <HouseList houses={houses.filter((house) => house.cleaner ==="Rosa")} title="Rosa's Houses" />}</p1>
        
        </div>
    );
}
 
export default Home;