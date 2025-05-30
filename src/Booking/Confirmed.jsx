import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';

export default function Confirmed() {
  const { id } = useParams();
  const [booking, setBooking] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [qrCodeUrl, setQrCodeUrl] = useState(null);


  useEffect(() => {
    axios.get(`http://localhost:5000/api/bookingconfirmed/${id}`)
      .then(res => {
        // If your API response wraps booking inside a data field, adjust this accordingly:
        setBooking(res.data.data || res.data);
        setLoading(false);
      })
      .catch(() => {
        setError('Failed to fetch booking');
        setLoading(false);
      });
  }, [id]); 

  const handleDownloadPDF = () => {
  };

const handleEmailTicket = async () => {
  try {
    await axios.post(`http://localhost:5000/api/booking_mail/${booking._id}`);
    alert("Ticket emailed successfully!");
  } catch (err) {
    alert("Failed to email ticket.");
  }
};


  if (loading) return (
    <div className="flex justify-center items-center h-screen">
      <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
    </div>
  );

  if (error) return (
    <div className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-md text-center">
      <h2 className="text-xl font-bold text-red-600 mb-4">Error</h2>
      <p className="mb-4">{error}</p>
      <Link to="/home" className="text-blue-600 hover:underline">
        Return to homepage
      </Link>
    </div>
  );

  if (!booking) return (
    <div className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-md text-center">
      <p>No booking information available</p>
    </div>
  );

  return (
    <div className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-md">
      <h1 className="text-2xl font-bold text-center mb-6 text-green-600">
        🎉 Booking Confirmed!
      </h1>

      <div className="space-y-3 mb-6">
        <h2 className="text-xl font-semibold">{booking.concert?.ConcertName || 'Concert'}</h2>
        <p><span className="font-medium">Date:</span> {new Date(booking.date).toLocaleDateString()}</p>
        <p><span className="font-medium">Time:</span> {booking.time}</p>
        <p><span className="font-medium">Venue:</span> {booking.venue}</p>
        <p><span className="font-medium">Tickets:</span> {booking.quantity}</p>
        <p><span className="font-medium">Booking Reference:</span> {booking._id}</p>
      </div>

      {qrCodeUrl && (
        <div className="flex flex-col items-center mb-6">
          <p className="mb-2 font-medium">Your Ticket QR Code:</p>
          <img
            src={qrCodeUrl}
            alt="Ticket QR Code"
            className="border p-2 rounded-lg"
            width={200}
            height={200}
          />
        </div>
      )}

      <div className="grid grid-cols-1 gap-3">
        <button
          onClick={handleDownloadPDF}
          className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded text-center transition"
        >
          Download PDF
        </button>

        <button
          onClick={handleEmailTicket}
          className="bg-green-600 hover:bg-green-700 text-white py-2 px-4 rounded text-center transition"
        >
          Email Ticket
        </button>

        <Link
          to="/home"
          className="bg-gray-600 hover:bg-gray-700 text-white py-2 px-4 rounded text-center transition"
        >
          Back to Home
        </Link>
      </div>
    </div>
  );
}
