import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export default function Create() {


    const [concertname, setConcertName] = useState('');
    const[date,setDate] = useState('');
    const[venue,setVenue] = useState('');
    const[ticketprice,setTicketPrice] = useState('');
    const[availabletickets,setAvailableTickets] = useState('');
    const[image, setImage] = useState(null);
    const navigate = useNavigate();

    const handleCreate = async(e) => {
        e.preventDefault();

        try{
            axios.post('http://localhost:5000/api/concert_create',
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
    <form onSubmit={handleCreate} encType="multipart/form-data">
      <label htmlFor="concertname">Concert Name:</label>
      <input type="text" id="concertname" name="concertname" required/>

      <label htmlFor="date">Date:</label>
      <input type="datetime-local" id="date" name="date" required/>

      <label htmlFor="venue">Venue:</label>
      <input type="text" id="venue" name="venue" required/>

      <label htmlFor="ticketprice">Price:</label>
      <input type="number" id="ticketprice" name="ticketprice" step="0.01" required/>

      <label htmlFor="availabletickets">Available Tickets:</label>
      <input type="number" id="availabletickets" name="availabletickets" required/>

      <label htmlFor="image">Add Image:</label>
      <input type="file" name="image" accept="image/*" required/>

      <button type="submit" className="flex flex-col justify-center bg-green-500 rounded-lg p-2 font-bold">
        Create
      </button>
      
    </form>
   </>
    )
}