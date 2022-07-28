import React from 'react';
import {useState, useEffect } from 'react'
import HouseList from './HouseList';

const Home = () => {
    const [houses, setHouses] = useState(null);

const handleDelete = (id) => {
    const newHouses = houses.filter(house => house.id !== id)
    setHouses(newHouses)
}
useEffect(() => {
    fetch('http://localhost:3000/houses')
        .then((res) => res.json())
        .then((data) => {
            console.log(data);
        });

}, []);

    return (  
        <div className="home">
            {/*<HouseList houses={houses} title = "Current Houses:" handleDelete ={handleDelete}/>
            <HouseList houses={houses.filter((house) => house.cleaner ==="Rosa")} title="Rosa's Houses" />*/}
        
        </div>
    );
}
 
export default Home;