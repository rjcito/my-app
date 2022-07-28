const HouseList = ({ houses, title, handleDelete }) => {
    return (  
        <div className="blog-list">
            <h2>{title}</h2>
            {houses.map((house) => (
                <div className="house-preview" key={house.id}>
                    <h3>Address: {house.address}</h3>
                    <h4>Cleaner: {house.cleaner}</h4>
                    <h4>Day of the Week: {house.dayofweek}</h4>
                    <button onClick={() => handleDelete(house.id)}>delete</button>

                </div>
            ))}
        </div>
    );
}
 
export default HouseList;