import React, { useEffect } from "react";
import { useState } from "react";
import {Link, useNavigate } from "react-router-dom";
import axios from "axios";

export default function Admin(){

  const[User,setUser]=useState([]);
    const [concerts, setConcerts] = useState([]);

    useEffect(() => {
    axios.get("http://localhost:5000/api/concert_retrieve")
        .then(res => {
            console.log("API Success:", res.data);
            setConcerts(res.data.data || []);
            // Test log for clarity
        })
        .catch(err => {
            console.error("Error fetching concerts:", err);
            alert("Failed to load concerts. Check console.");
        });
}, []);

  useEffect(()=>{
    axios.get(`http://localhost:5000/api/userlogin/`)
    .then(resu=>{
      console.log("User found",resu.data);
      setUser(resu.data.data || []);
    })
    .catch(err=>{
      console.log("Error",err)
    })
  },[])

   return(
     <>
     {User.map(user =>(
      <div key={user.id}>
            <h1 className="col-span-full text-center text-[36px] font-bold p-6">Welcome {user.name}</h1>
      </div>
     ))}
    <div className="flex flex-col">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 p-7 gap-4 w-full">
        {concerts.length > 0 ? concerts.map(concert => (
                    <div key={concert.id} className="shadow-2xl p-6 border rounded-2xl bg-slate-200 hover:scale-105 transition-transform duration-300 ease-in-out">
                        {concert.image && (
                            <img 
                                src={`http://localhost:5000/images/${concert.image}`} 
                                alt={concert.concertname} 
                                className="w-full h-48 object-cover rounded-lg mb-4" 
                            />
                        )}
                        <h3 className="text-xl font-semibold mb-4">Concert : {concert.concertname}</h3>
                        <p>Date: {concert.date}</p>
                        <p>Venue: {concert.venue}</p>
                        <p>Price: ${concert.ticketprice}</p>
                        <p>Available Tickets: {concert.AvailableTickets}</p>
                        </div>
)):(
  <p className="text-gray-600 col-span-full text-center text-[50px] p-30">No concerts created</p>
)}
    </div>
    </div>
    <Link to="/create">Create</Link>
    </>
   )
}