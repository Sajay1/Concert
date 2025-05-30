import React, { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { div } from "framer-motion/client";

export default function Create() {
  const [concertname, setConcertName] = useState('');
  const [date, setDate] = useState('');
  const [venue, setVenue] = useState('');
  const [ticketprice, setTicketPrice] = useState('');
  const [availabletickets, setAvailableTickets] = useState('');
  const [image, setImage] = useState(null);
  const fileInputRef = useRef(null); // 
  const navigate = useNavigate();

  const handleCreate = async (e) => {
    e.preventDefault();

    if (!image) {
      alert("Please upload an image");
      return;
    }

    const formData = new FormData();
    formData.append("ConcertName", concertname);
    formData.append("Date", date);
    formData.append("Venue", venue);
    formData.append("TicketPrice", ticketprice);
    formData.append("AvailableTickets", availabletickets);
    formData.append("image", image);

    try {
      await axios.post("http://localhost:5000/api/concert_create", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      // Reset form fields
      setConcertName('');
      setDate('');
      setVenue('');
      setTicketPrice('');
      setAvailableTickets('');
      setImage(null);

      navigate('/admin');
    } catch (error) {
      console.error("Error creating concert:", error);
    }
  };

  return (
    <form onSubmit={handleCreate} encType="multipart/form-data" className="flex flex-col gap-2">
      <label htmlFor="concertname">Concert Name:</label>
      <input
        type="text"
        id="concertname"
        name="concertname"
        value={concertname}
        onChange={(e) => setConcertName(e.target.value)}
        required
      />

      <label htmlFor="date">Date:</label>
      <input
        type="datetime-local"
        id="date"
        name="date"
        value={date}
        onChange={(e) => setDate(e.target.value)}
        required
      />

      <label htmlFor="venue">Venue:</label>
      <input
        type="text"
        id="venue"
        name="venue"
        value={venue}
        onChange={(e) => setVenue(e.target.value)}
        required
      />

      <label htmlFor="ticketprice">Price:</label>
      <input
        type="number"
        id="ticketprice"
        name="ticketprice"
        step="0.01"
        value={ticketprice}
        onChange={(e) => setTicketPrice(e.target.value)}
        required
      />

      <label htmlFor="availabletickets">Available Tickets:</label>
      <input
        type="number"
        id="availabletickets"
        name="availabletickets"
        value={availabletickets}
        onChange={(e) => setAvailableTickets(e.target.value)}
        required
      />

      <label htmlFor="image">Add Image:</label>
      <input
        type="file"
        accept="image/*"
        className="bg-gray-300 flex flex-col mx-auto p-1"
        onChange={(e) => setImage(e.target.files[0])}
        ref={fileInputRef}
        required
      />
      {image &&
      <div className="image-preview">
        <p>Image Preview</p>
        <img src={URL.createObjectURL(image)} alt="preview" width="100"/>
      </div>
      } 

      <button
        type="submit"
        className="bg-green-500 text-white rounded-lg p-2 font-bold hover:bg-green-600 transition"
      >
        Create
      </button>
    </form>
  );
}
