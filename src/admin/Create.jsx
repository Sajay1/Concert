import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Create from "../admin/Create";

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
    <form onSubmit={handleCreate} enctype="multipart/form-data">
      <label for="ConcertName">Concert Name:</label>
      <input type="text" id="ConcertName" name="ConcertName" required/>

      <label for="Date">Date:</label>
      <input type="datetime-local" id="Date" name="Date" required/>

      <label for="Venue">Venue:</label>
      <input type="text" id="Venue" name="Venue" required/>

      <label for="TicketPrice">Price:</label>
      <input type="number" id="TicketPrice" name="TicketPrice" step="0.01" required/>

      <label for="AvailableTickets">Available Tickets:</label>
      <input type="number" id="AvailableTickets" name="AvailableTickets" required/>

      <label for="image">Add Image:</label>
      <input type="file" name="image" accept="image/*" required/>

      <button type="submit" className="flex flex-col justify-center bg-green-500 rounded-lg p-2 font-bold">
        Create
      </button>
      
    </form>
   </>
    )
}