import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export default function Updates() {


    const [concertname, setConcertName] = useState('');
    const[date,setDate] = useState('');
    const[venue,setVenue] = useState('');
    const[ticketprice,setTicketPrice] = useState('');
    const[availabletickets,setAvailableTickets] = useState('');
    const[image, setImage] = useState(null);
    const navigate = useNavigate();

    const handleUpdate = async(e) => {
        e.preventDefault();

        try{
            axios.put(`http://localhost:5000/api/concert_update/${id}`,
               {
                ConcertName:concertname,
                Date:date,
                Venue:venue,
                TicketPrice:ticketprice,
                AvailableTickets:availabletickets,
                image: image
               } 
            )
            setConcertName('');
            setDate('');
            setVenue('');
            setTicketPrice('');
            setAvailableTickets('');
            setImage([]);
            navigate('/admin')
        }
        catch{
            console.error("Error creating concert");
        }

    };
    
    return(
        <>
    <form onSubmit={handleUpdate} encType="multipart/form-data">
      <label htmlFor="ConcertName">Concert Name:</label>
      <input type="text" id="ConcertName" name="ConcertName" required/>

      <label htmlFor="Date">Date:</label>
      <input type="datetime-local" id="Date" name="Date" required/>

      <label htmlFor="Venue">Venue:</label>
      <input type="text" id="Venue" name="Venue" required/>

      <label htmlFor="TicketPrice">Price:</label>
      <input type="number" id="TicketPrice" name="TicketPrice" step="0.01" required/>

      <label htmlFor="AvailableTickets">Available Tickets:</label>
      <input type="number" id="AvailableTickets" name="AvailableTickets" required/>

      <label htmlFor="image">Add Image:</label>
      <input type="file" name="image" accept="image/*" required/>

      <button type="submit" className="flex flex-col justify-center bg-green-500 rounded-lg p-2 font-bold">
        Update
      </button>
      
    </form>
   </>
    )
}