import React, { useState } from "react";

const QuoteForm  = () => {
    const [address, setAddress] = useState("");
    const [cleanerName, setCleanerName] = useState("");
    const [dayOfWeek, setDayOfWeek] = useState("")

    function handleAddressChange(event){
        setAddress(event.target.value)
    }

    function handleCleanerNameChange(event){
        setCleanerName(event.target.value)
    }

    function handleDayOfWeekChange(event){
        setDayOfWeek(event.target.value)
    }

    const handleSubmit = (e)  => {
        e.preventDefault();
        const itemData = {
            address: address,
            cleaner: cleanerName,
            dayofweek: dayOfWeek,

        };
        fetch("http://localhost:3000/houses", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(itemData),

        })
            .then((r) => r.json())
            .then((newItem) => console.log(newItem))
            
    }  
    return ( 
        <div className="quote-form">
         <h2>Add a house to your schedule:</h2>
         <form onSubmit={handleSubmit}> 
            <label>Address: </label>
            <input 
            className="address-input"
            type = "text"
            onChange={handleAddressChange}
            value = {address}
            />
            <label>Cleaner Name:</label>
            <input 
            className="cleaner-name-input"
            type = "text"
            onChange={handleCleanerNameChange}
            value = {cleanerName}
            />
            <label>Day of the Week: </label>
            <input 
            className="day-input"
            type = "text"
            onChange ={handleDayOfWeekChange}
            value={dayOfWeek}
            />
            <button className= "submit-button"type="submit">Add To Schedule</button>
            

         </form>
        </div>
     );
}
 
export default QuoteForm;