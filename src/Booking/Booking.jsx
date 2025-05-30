import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';

export default function Booking() {
  const [quantity, setQuantity] = useState('');
  const [concert, setConcert] = useState(null);
  const [booking, setBooking] = useState(null);
  const [book,setBook]=useState(null)
  const { id } = useParams(); // concert ID
  const navigate = useNavigate();

  // Fetch concert details by concert ID
  useEffect(() => {
    axios.get(`http://localhost:5000/api/concert_retrieve/${id}`)
      .then(res => {
        setConcert(res.data.data);
      })
      .catch(err => {
        console.error("Error fetching concert:", err);
      });
  }, [id]);



  const Book = async (e) => {
    e.preventDefault();

    const newQuantity = parseInt(quantity, 10);
    const bookedQuantity = booking?.quantity || 0;

    if (isNaN(newQuantity) || newQuantity < 1) {
      alert("Please enter a valid quantity");
      return;
    }

    if (bookedQuantity + newQuantity > 3) {
      alert(`You can only book up to 3 tickets total. You have already booked ${bookedQuantity}.`);
      return;
    }

    try {
      axios.post(`http://localhost:5000/api/booking/${id}`, { quantity })
  .then(res => {
    console.log(res.data.id)

    // Optionally redirect or display success message
    navigate(`/bookingconfirmed/${id}`);
  })

      setQuantity('');
      navigate(`/bookingconfirmed/${id}`);
    } catch (err) {
      console.error("Can't Book:", err);
      if (err.response?.status === 401) {
        alert("You must be logged in to book tickets.");
      } else {
        alert("Booking failed. Please try again.");
      }
    }
  };

  return (
    <div className="flex flex-col justify-center items-center bg-[url('https://images.unsplash.com/photo-1719695466637-243c50630b8a?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] bg-cover bg-center min-h-screen">
      <div className='text-white mx-auto min-w-md bg-slate-700 opacity-86 rounded-lg p-7'>
        {concert ? (
          <>
            <div className='flex flex-col gap-2 justify-center text-center mb-4'>
              <p className='font-bold text-[28px]'>Book for: {concert.ConcertName}</p>
              <p className='text-[18px]'>Tickets Available: {concert.AvailableTickets}</p>
            </div>

            <form onSubmit={Book} className="flex flex-col gap-4">
              <label htmlFor="quantity">QUANTITY:</label>
              <input
                className='bg-white border rounded-lg text-black'
                type="number"
                id="quantity"
                name="quantity"
                value={quantity}
                max={3 - (booking?.quantity || 0)}
                min={1}
                onChange={(e) => setQuantity(e.target.value)}
                required
              />

              <button type="submit" className="mx-auto bg-green-500 rounded-lg p-3 py-2 text-white hover:bg-green-600 transition">
                Book
              </button>
            </form>
          </>
        ) : (
          <p>Loading concert details...</p>
        )}
      </div>
    </div>
  );
}
