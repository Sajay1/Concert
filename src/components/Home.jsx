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
        <div className="flex flex-col items-center bg-white min-h-screen p-6">
            <h1 className="text-3xl font-bold mb-6">Concert List</h1>
            
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
                    </div>
                )) : (
                    <p className="text-gray-500 col-span-full text-center">No concerts available.</p>
                )}
            </div>
        </div>
    );
}
