import React, { useEffect, useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

export default function Confirmed() {
  const { bookingId } = useParams();
  const navigate = useNavigate();
  const [booking, setBooking] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [qrCodeUrl, setQrCodeUrl] = useState(null);

  useEffect(() => {
    if (!bookingId) {
      setError('No booking ID provided');
      setLoading(false);
      return;
    }

    const fetchBookingDetails = async () => {
      try {
        setLoading(true);
        setError(null);
        
        // Fetch booking details
        const response = await axios.get(
          `http://localhost:5000/api/bookingconfirmed/${bookingId}`
        );

        if (!response.data) {
          throw new Error('Booking data not found');
        }

        setBooking(response.data);
        
        // Fetch QR code
        const qrResponse = await axios.get(
          `http://localhost:5000/api/generate-pdf/${bookingId}/qr`
        );
        
        setQrCodeUrl(qrResponse.data.qrCodeUrl);

      } catch (err) {
        console.error('Fetch error:', err);
        
        if (err.response?.status === 401) {
          setError('Please login to view this booking');
          navigate('/login');
        } else if (err.response?.status === 404) {
          setError('Booking not found. It may have been cancelled or expired.');
        } else {
          setError(err.response?.data?.message || 
            'Failed to load booking details. Please try again later.');
        }
      } finally {
        setLoading(false);
      }
    };

    fetchBookingDetails();
  }, [bookingId, navigate]);

  const handleDownloadPDF = () => {
    window.open(`http://localhost:5000/api/bookings/${bookingId}/ticket`, '_blank');
  };

  const handleEmailTicket = async () => {
    try {
      const response = await axios.get(
        `http://localhost:5000/api/booking_mail/${bookingId}`
      );
      alert(response.data.message || 'Ticket sent to your email successfully!');
    } catch (error) {
      console.error('Email sending failed:', error);
      alert('Failed to send email');
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