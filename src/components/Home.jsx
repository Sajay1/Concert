import React, { useState, useEffect } from "react";
import axios from "axios";

export default function Home() {
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

    return (
         <div className="flex flex-col justify-center items-center bg-[url('https://imgs.search.brave.com/AyvS9nTktqchL6N57dj0Pr8CM84_yln4Wa0NFsyzHlg/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvNDgz/NDk1MjEwL3Bob3Rv/L2NvbmNlcnQtY3Jv/d2QuanBnP3M9NjEy/eDYxMiZ3PTAmaz0y/MCZjPVpzNTk0bThm/NUxKN0RxSlRLMnk2/Vi1Tb2p3dmtFUXRn/aU5Pc20wQTJzTmM9')] bg-cover bg-center min-h-screen">
            <h1 className="text-3xl font-bold m-6">Concert List</h1>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-6xl">
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
                        <div className="flex flex-col justify-center bg-green-600 rounded-lg mt-5 m-7 mb-1 text-white p-3 text-center">
                            <button type="submit"> 
                            Book Now
                        </button>
                        </div>
                        
                    </div>
                )) : (
                    <p className="text-gray-500 col-span-full text-center">No concerts available.</p>
                )}
            </div>
        </div>
    );
}
