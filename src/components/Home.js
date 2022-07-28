import {useState } from 'react'
import HouseList from './HouseList';

const Home = () => {
    const [houses, setHouses] = useState([
    { address: '1221 Happy Ln', cleaner: 'Ruby', dayofweek: 'Monday', id: 1 },
    { address: '0508 Funny Rd', cleaner: 'Rosa', dayofweek: 'Tuesday', id: 2 },
    { address: '0922 Giggling Dr', cleaner: 'Ruby', dayofweek: 'Wednesday', id: 3 }
]);


    return (  
        <div className="home">
            <HouseList houses={houses} title = "Current Houses:"/>
        </div>
    );
}
 
export default Home;