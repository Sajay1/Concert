import React, { useState, useRef, useEffect } from "react";
import { useNavigate,useParams } from "react-router-dom";
import axios from "axios";

export default function Booking() {
  const[quantity,setQuantity]=useState('');
  const navigate = useNavigate();

  useEffect(()=>{
    try{
       axios.get(`http://localhost:5000/api/concert_retrieve/${id}`)
       console.log("Success!!")
    }
    catch(err){
      console.log("Error",err);
    }
  })

  const Book = async (e) => {
    e.preventDefault();

   
    const formData = new FormData();
    formData.append("Quantity", quantity);

    try {
      await axios.post(`http://localhost:5000/api/booking/${id}`);

     setQuantity('');

      navigate('/confirmed');
    } catch (error) {
      console.error("Can't Book:", error);
    }
  };

  return (

    <>
    <p>Tickets Available:</p>
    <p>You have already Booked:
      <p>You can onlu book upto 3 tickets per concert.</p>
    </p>
    <form onSubmit={Book} className="flex flex-col gap-2">
      

      <label htmlFor="quantity">QUANTITY:</label>
      <input
        type="number"
        id="quantity"
        name="quantity"
        value={quantity}
        onChange={(e) => setQuantity(e.target.value)}
        required
      />

      <button
        type="submit"
        className="bg-green-500 text-white rounded-lg p-2 font-bold hover:bg-green-600 transition"
      >
        Book
      </button>
    </form></>
    
  );
}
