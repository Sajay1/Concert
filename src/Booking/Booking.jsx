
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { div } from 'framer-motion/client';

export default function Booking() {
  const [quantity, setQuantity] = useState('');
  const [concerts, setConcerts] = useState([]);
  const [booking, setBooking] = useState([]); // assuming single booking object
  const { id } = useParams();
  const navigate = useNavigate();


  useEffect(() => {
  axios
    .get(`http://localhost:5000/api/concert_retrieve/${id}`)
    .then(res => {
      console.log("Success:", res.data);
      setConcerts([res.data.data]); // wrapped in array for mapping
    })
    .catch(err => {
      console.log("Error:", err);
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
    await axios.post(
      `http://localhost:5000/api/booking/${id}`,
      { quantity:newQuantity,
        id:id
       },
      { withCredentials: true } 
     );

    setQuantity('');
    navigate(`/confirmed/${id}`)
  } catch (err) {
    console.error("Can't Book:", err);
    if (err.response?.status === 401) {
      alert("You must be logged in to book tickets.");
    }
     if (isNaN(newQuantity) || newQuantity < 1) {
    alert("Please enter a valid quantity");
    return;
  }

  if (bookedQuantity + newQuantity > 3) {
    alert(`You can only book up to 3 tickets total. You have already booked ${bookedQuantity}.`);
    return;
  }
  }
};

  return (
    <>
         <div className="flex flex-col justify-center items-center bg-[url('https://images.unsplash.com/photo-1719695466637-243c50630b8a?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] bg-cover bg-center min-h-screen">
         <div className='text-white mx-auto min-w-md bg-slate-700 opacity-86 rounded-lg p-7'>
    {concerts.map( concert =>(
      <div key={concert.id}>
        <div className='flex flex-col gap-2 justify-center text-center'>
        <p className='font-bold text-[28px]'>Book for:{concert.ConcertName}</p>
        <p className='text-[18px]'>Tickets Avialable:{concert.AvailableTickets}</p>
      </div>
      </div>
    ))}
    {
          booking.map(book=>(
            <div key={book.id}>
           <p>Already booked:{book.quantity}</p>
            </div>
          ))
        }
      <form onSubmit={Book} className="flex flex-col gap-4 mt-3">
        <label htmlFor="quantity">QUANTITY:</label>
        <input
        className='border rounded-lg'
          type="number"
          id="quantity"
          name="quantity"
          value={quantity}
          max={3-(booking?.quantity || 0)}
          min={1}
          onChange={(e) => setQuantity(e.target.value)}
          required
        />
        <button
          type="submit"
          className="bg-green-500 text-white rounded-lg p-2 font-bold hover:bg-green-600 transition"
        >
          Book
        </button>
      </form>
          </div>
          </div>
    </>
  );
}
