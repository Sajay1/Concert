import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

export default function Updates() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [concertname, setConcertName] = useState("");
  const [date, setDate] = useState("");
  const [venue, setVenue] = useState("");
  const [ticketprice, setTicketPrice] = useState("");
  const [availabletickets, setAvailableTickets] = useState("");
  const [image, setImage] = useState(null);

  const handleUpdate = async (e) => {
    e.preventDefault();

    const upData = new FormData();
    upData.append("ConcertName", concertname);
    upData.append("Date", date);
    upData.append("Venue", venue);
    upData.append("TicketPrice", ticketprice);
    upData.append("AvailableTickets", availabletickets);
    if (image) upData.append("image", image);

    try {
      await axios.put(`http://localhost:5000/api/concert_update/${id}`, upData, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      console.log("Concert updated successfully");
      navigate("/admin");
    } catch (error) {
      console.error("Error updating concert:", error);
    }
  };

  return (
    <div className="update-form-container">
      <h2>Update Concert</h2>
      <form onSubmit={handleUpdate} encType="multipart/form-data">
        <input
          value={concertname}
          name="concertname"
          onChange={(e) => setConcertName(e.target.value)}
          placeholder="Name"
          required
        />
        <input
          type="datetime-local"
          value={date}
          name="date"
          onChange={(e) => setDate(e.target.value)}
          required
        />
        <input
          value={venue}
          name="venue"
          onChange={(e) => setVenue(e.target.value)}
          placeholder="Venue"
          required
        />
        <input
          type="number"
          name="ticketprice"
          value={ticketprice}
          onChange={(e) => setTicketPrice(e.target.value)}
          placeholder="Price"
          required
        />
        <input
          type="number"
          name="availabletickets"
          value={availabletickets}
          onChange={(e) => setAvailableTickets(e.target.value)}
          placeholder="Available Tickets"
          required
        />
        <input
          type="file"
          name="image"
          accept="image/*"
          onChange={(e) => setImage(e.target.files[0])}
        />
        {image && (
          <div className="image-preview">
            <p>New Image Preview:</p>
            <img src={URL.createObjectURL(image)} alt="Preview" width="100" />
          </div>
        )}
        <button type="submit">Update Concert</button>
      </form>
    </div>
  );
}