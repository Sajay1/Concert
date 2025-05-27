import React, { useEffect } from "react";
import { useState } from "react";
import {Link, useNavigate } from "react-router-dom";
import axios from "axios";




export default function Admin(){

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

   return(
     <>
         <div className="flex flex-col justify-center items-center bg-[url('https://imgs.search.brave.com/AyvS9nTktqchL6N57dj0Pr8CM84_yln4Wa0NFsyzHlg/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvNDgz/NDk1MjEwL3Bob3Rv/L2NvbmNlcnQtY3Jv/d2QuanBnP3M9NjEy/eDYxMiZ3PTAmaz0y/MCZjPVpzNTk0bThm/NUxKN0RxSlRLMnk2/Vi1Tb2p3dmtFUXRn/aU5Pc20wQTJzTmM9')] bg-cover bg-center min-h-screen">
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
                            <Link to={`/concert_update/${concert.id}`} className="flex flex-cols-1 bg-blue-500 rounded-lg justify-center text-center text-white p-3 m-5">Edit</Link>
                            <Link to={`/concert_delete/${concert.id}`} className="flex flex-cols-1 bg-red-500 rounded-lg justify-center text-center text-white p-3 m-5">Delete</Link>
                        </div>
)):(
  <p className="text-gray-600 col-span-full text-center text-[50px] p-30">No concerts created</p>
)}
    </div>
    </div>
    <Link to="/concert_create" className="flex flex-col m-5 sm:m-6 md:m-6  justify-center bg-green-500 rounded-lg p-2 font-bold text-center text-white hover:bg-green-600">
     + Create
    </Link>
    </div>
    </>
   )
}